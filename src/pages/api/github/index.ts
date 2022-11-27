// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string
}

function filter_repos(repos_list: any) {
    const filtered_repos = repos_list.filter((repo: any) => {
        return repo.fork === false
    })
    return filtered_repos

}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    if (req.method?.toUpperCase() !== 'GET') return res.status(405).json({ "message": "Method not allowed" });

    let repository_response = await fetch('https://api.github.com/users/linus-jansson/repos',
        {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${process.env.GITHUB_SECRET}`,
            }
        }
    )

    let repositories = await repository_response.json()

    if (repository_response.status !== 200) {
        console.log(repository_response)
        return res.status(repository_response.status).json({ "message": "Error fetching repos" });
    }

    return res.status(200).json(filter_repos(repositories))

}
