import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  res.setHeader("Set-Cookie", [
    "token=; HttpOnly; Secure; Path=/; Max-Age=0; SameSite=Strict",
    "email=; HttpOnly; Secure; Path=/; Max-Age=0; SameSite=Strict",
    "role=; HttpOnly; Secure; Path=/; Max-Age=0; SameSite=Strict",
  ]);
  res.status(200).json({ message: "Logged out" });
}
