import axios from 'axios'


/*
    Informations video ang oAuth2.0
    -> https://youtu.be/j-bHvqQ378s?t=302

*/
interface initialTokens {
    "access_token": string,
    "token_type": string,
    "expires_in": number,
    "refresh_token": string,
    "scope": string
}


interface returnData {

}


class Auth {

    CLIENT_ID: string
    CLIENT_SECRET: string
    REDIRECT_URI_DISCORD: string
    REDIRECT_URI: string
    OAUTH_SCOPE: string
    DISCORD_ENDPOINT: string

    authenticated: boolean

    constructor() {
        this.CLIENT_ID = process.env.DISCORD_CLIENT_ID;
        this.CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET;
        this.REDIRECT_URI_DISCORD = (process.env.NODE_ENV !== 'production')
            ? process.env.DISCORD_REDIRECT_URI_DEV
            : process.env.DISCORD_REDIRECT_URI;

        this.REDIRECT_URI = (process.env.NODE_ENV !== 'production')
            ? 'http://localhost:8000/api/login/callback'
            : 'https://limpan.dev/api/login/callback'

        console.log(this.REDIRECT_URI_DISCORD)

        this.OAUTH_SCOPE = process.env.DISCORD_OAUTH_SCOPE;
        this.DISCORD_ENDPOINT = process.env.DISCORD_ENDPOINT;

        this.authenticated = false;
    }

    async login(code: unknown | null) {
        return new Promise<any | null>(async (resolve, reject) => {
            let result = null;
            if (code) {
                console.log("code was provided in login method")
                this.authenticated = false;
                let result = await this.token_exchange(code)
                // if (result.status )
                // resolve(result)
                return resolve(result)
            }
            else {
                return reject(result)
            }

        })

    }

    logout() {
        this.authenticated = false;
    }



    /*
        Initiala steget för kommunikationen med discord
        Efter att användaren har klickat på "accept" på discords sida
        Så skickar discord tillbaka användaren till denna med en query_code
        denna query_code + CLIENT_ID + CLIENT_SECRET
        använder jag och skickar till discord för att få en access_token + refresh_token mm
    */
    async token_exchange(query_code: any): Promise<any> {
        const body_data = new URLSearchParams();
        body_data.append('client_id', this.CLIENT_ID);
        body_data.append('client_secret', this.CLIENT_SECRET);
        body_data.append('grant_type', 'authorization_code');
        body_data.append('code', query_code);
        body_data.append('redirect_uri', this.REDIRECT_URI);
        body_data.append('scope', 'identify email');

        try {
            let response = await axios.post(`${this.DISCORD_ENDPOINT}/oauth2/token`, body_data, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json'
                }
            })
            console.log(response.status, response.data)

            return response
        } catch (err) {
            console.log(err)
            return { get_discord_oauth_token: null, error: err }
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
    async get_new_tokens(refresh_token: string) {
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
            let token_reponse = await fetch(`${this.DISCORD_ENDPOINT}/oauth2/token`, authData);
            // console.log(discord_refresh_response)
            return await token_reponse.json()

        } catch (err) {
            return { discord_refresh_response: null, error: err }
        }
    }


    /*
        Denna metod frågar discord efter användardatan mha access_token.
        Om denna access_token är gilltig så kommer discord att skicka tillbaka användarens data innanför "scope"
    */
    async get_user_data(token: initialTokens) {
        try {
            // Get user data from the authenticated user
            let client_data = await fetch(`${this.DISCORD_ENDPOINT}/users/@me`, {
                headers: {
                    authorization: `${token.token_type} ${token.access_token}`,
                }
            });
            return await client_data.json()

        } catch (err) {

            return { client_data: err }
        }
    }
}

export default Auth
