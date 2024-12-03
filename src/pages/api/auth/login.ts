import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SECRET_KEY = "your_secret_key";

const mockUsers = [
  {
    email: "user@example.com",
    passwordHash: bcrypt.hashSync("user", 10),
    role: "user",
  },
  {
    email: "admin@example.com",
    passwordHash: bcrypt.hashSync("admin", 10),
    role: "admin",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, password } = req.body;

  const user = mockUsers.find((user) => user.email === email);

  if (!user || !bcrypt.compareSync(password, user.passwordHash)) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ email: user.email, role: user.role }, SECRET_KEY, {
    expiresIn: "1h",
  });

  res.status(200).json({ token, email: user.email, role: user.role });
}
