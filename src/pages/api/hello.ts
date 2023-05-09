// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    await prisma.projects.createMany({
        data: [
            {
                stack: 'Python',
                name: 'BTD6 farmer',
                description: 'A macro system for the game Bloons td 6. Uses Relies on OCR with tesseract and template matching with opencv for navigation and interacting with the game.',
                projectUrl: 'https://github.com/linus-jansson/btd6farmer'
            },
            {
                stack: 'Frontend',
                name: 'Florist Blåklinten',
                description: 'A website for a flowershop. Uses selenium SDK for unit tests and is deployed using Github Workflows on Github Pages',
                projectUrl: 'https://github.com/NTIG-Uppsala/florist-blaklinten/',
                website: 'https://ntig-uppsala.github.io/florist-blaklinten/'
            }
        ],
    })

  res.status(200).json({ name: 'John Doe' })
}
