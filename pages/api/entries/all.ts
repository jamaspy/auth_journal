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
  const userEmail = user?.email || undefined;
  const getUserDetails = await prisma.user.findUnique({
    where: {
      email: userEmail,
    },
  });

  const allEntries = await prisma.entry.findMany({
    where: {
      userId: getUserDetails.id,
    },
  });

  res.status(200).json(allEntries);
}
