import { PrismaClient, Post } from "@prisma/client";

import type { NextApiRequest, NextApiResponse } from "next";

const prisma: PrismaClient = new PrismaClient();

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<{ posts: Post[] } | { post: Post }>
) {
  const { method } = req;

  switch (method) {
    case "POST":
      const { title, content } = req.body;
      const post = await prisma.post.create({
        data: {
          title,
          content,
        },
      });
      res.status(201).json({
        post,
      });
      break;
    case "GET":
      const posts: Post[] = await prisma.post.findMany();
      res.status(200).json({
        posts,
      });
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
