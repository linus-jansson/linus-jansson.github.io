import axios from 'axios'
import fetch from 'node-fetch';
/*
    Informations video ang oAuth2.0
    -> https://youtu.be/j-bHvqQ378s?t=302

    Plan: 
        Init database when user press login button
        -> Redirect to Discord login page
        -> Get tokens from discord 
        -> Save Tokens in databse
*/

class DiscordAuth {
    constructor() {

        this.CLIENT_ID = process.env.DISCORD_CLIENT_ID;
        this.CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET;
        this.REDIRECT_URI = (process.env.NODE_ENV === "production")
            ? process.env.DISCORD_REDIRECT_URI : process.env.DISCORD_REDIRECT_URI_DEV;

        this.OAUTH_SCOPE = process.env.DISCORD_OAUTH_SCOPE;
        this.DISCORD_ENDPOINT = process.env.DISCORD_ENDPOINT;

        this.DISCORD_ID_STATIC = 322015089529978880



        // this.initial_tokens()

        this.user = null
        this.refresh_token = null
        this.token_obtained = -1
        this.expires_in = -1

        this.still_valid = (obtained, expires) => {
            (obtained + expires) > new Date().getTime()
        }

    }


    /*
        Initiala steget för kommunikationen med discord
        Efter att användaren har klickat på "accept" på discords sida
        Så skickar discord tillbaka användaren till denna med en query_code
        denna query_code + CLIENT_ID + CLIENT_SECRET
        använder jag och skickar till discord för att få en access_token + refresh_token mm

        Example response:
        {
        "access_token": "6qrZcUqja7812RVdnEKjpzOL4CvHBFG",
        "token_type": "Bearer",
        "expires_in": 604800,
        "refresh_token": "D43f5y0ahjqew82jZ4NViEr2YafMKhue",
        "scope": "identify"
        }

    */
    async initial_tokens(query_code) {
        const body_data = new URLSearchParams();
        body_data.append('client_id', this.CLIENT_ID);
        body_data.append('client_secret', this.CLIENT_SECRET);
        body_data.append('grant_type', 'authorization_code');
        body_data.append('code', query_code);
        body_data.append('redirect_uri', this.REDIRECT_URI);
        body_data.append('scope', 'identify email');

        console.log(body_data)

        const data = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            },
            body: body_data
        }

        try {
            console.log(`${this.DISCORD_ENDPOINT}/oauth2/token`)
            let discord_token_response = await fetch(`${this.DISCORD_ENDPOINT}/oauth2/token`, data);
            console.log(discord_token_response)
            return discord_token_response
        } catch (err) {
            console.log("Getting tokens failed")
            return err
            // throw err
        }
    }


    /*
        Anledningen varför denna medtod används är till för att göra access_token "shorlived"
        Genom att be om en ny access_token mha sin refresh_token så gör man den gammla access_token oglitig
        Detta minskar risken för att den läcks och obehöriga får tillträde till användarens konto

        Orginellt sätt så kommer refresh_token ifrån första token_exchangen med discord. 
        // https://www.oauth.com/oauth2-servers/making-authenticated-requests/refreshing-an-access-token/

        // TODO: Antingen spara refresh token i cookie/session eller spara i databas (Troligen dålig idé, idée nmr 2)

        # https://stackoverflow.com/questions/38986005/what-is-the-purpose-of-a-refresh-token
    */
    async get_new_tokens(refresh_token) {
        const body_data = new URLSearchParams();
        body_data.append('client_id', this.CLIENT_ID);
        body_data.append('client_secret', this.CLIENT_SECRET);
        body_data.append('grant_type', 'refresh_token');
        body_data.append('refresh_token', refresh_token);

        const authData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json' },
            body: body_data
        }

        try {
            let token_reponse = await axios.get(`${this.DISCORD_ENDPOINT}/oauth2/token`, authData);
            this.token_obtained = new Date().getTime()
            return token_reponse

        } catch (err) {
            throw err
            return { discord_refresh_response: null, error: err }
        }
    }


    /*
        Denna metod frågar discord efter användardatan mha access_token.
        Om denna access_token är gilltig så kommer discord att skicka tillbaka användarens data innanför "scope"
    */
    async get_user_data(token) {
        try {
            if (token) {
                // Get user data from the authenticated user
                let client_data = await axios.get(`${this.DISCORD_ENDPOINT}/users/@me`, {
                    headers: {
                        authorization: `${token.token_type} ${token.access_token}`,
                    }
                });
                return client_data
            }
            else {
                let client_data = await axios.get(`https://discord.com/api/v9/users/${this.DISCORD_ID_STATIC}`, {
                    headers: {
                        Authorization: `Bot ${this.CLIENT_SECRET}`
                    }
                })
            }


        } catch (err) {
            return { client_data: err }
        }
    }
}


/*

    When user


    If the user has had 

*/
class Auth extends DiscordAuth {
    constructor() {
        super();
        this.authenticated = false;

    }

    async login(query_code, cb) {

        this.authenticated = true;

        let response = await this.initial_tokens(query_code);
        // console.log(response.data)
        return response

        // cb(this.authenticated);

        // return new Promise(async (resolve, reject) => {
        //     let res = await this.initial_tokens(query_code);
        //     console.log()
        //     try {
        //         resolve(res)
        //     } catch (error) {
        //         reject(err)
        //     }

        // })

    }

    logout(cb) {
        this.authenticated = false;
        cb();
    }

    isAuthenticated() {
        if (this.still_valid(this.token_obtained, this.expires_in))
            return this.authenticated;
    }
}

export default Auth