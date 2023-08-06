// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type return_data = {
    repository: any,
    dates: Date[]
}

type error_data = {
    message: string
}

function filter_repos(repos_list: any): Date[] {
    return repos_list.map((repo: any) => {
        return new Date(repo.commit.author.date)
    })
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<return_data | error_data>
) {
    if (req.method?.toUpperCase() !== 'GET') return res.status(405).json({ "message": "Method not allowed" });

    let { repo } = req.query

    let repository_response = await fetch(`https://api.github.com/repos/linus-jansson/${repo}/commits`,
        {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${process.env.GITHUB_SECRET}`,
            }
        }
    )

    let repositories = await repository_response.json()

    if (repository_response.status !== 200) {
        return res.status(repository_response.status).json({ "message": "Error fetching repos" });
    }

    let return_data: return_data = {
        repository: repo,
        dates: filter_repos(repositories)
    }

    return res.status(200).json(return_data)

}
