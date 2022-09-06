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

  const {
    body: { id, title, content },
  } = req;

  const updateEntry = await prisma.entry.update({
    where: {
      id,
    },
    data: {
      title,
      content,
    },
  });

  res.status(200).json(updateEntry);
}
