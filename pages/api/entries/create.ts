// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import prisma from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });
  if (!session) {
    res.status(401).json({ message: "Not logged in" });
    return;
  }
  const { user } = session;
  const { body } = req;

  const userEmail = user?.email || undefined;
  if (req?.method === "POST") {
    const user = await prisma.user.findUnique({
      where: {
        email: userEmail,
      },
    });

    const { title, content } = body;
    const { id } = user;
    const newPost = await prisma.entry.create({
      data: {
        title,
        content,
        userId: id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    res.status(200).json(newPost);
  }
}
