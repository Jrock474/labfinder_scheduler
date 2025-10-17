import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { userDB } from "../../../../lib/db";
import { User } from "../../../../lib/types";

export const POST = async (req: Request) => {
  const { email, name, password } = await req.json();

  userDB.read();

  const existingUser = userDB.data.find((u) => u.email === email);

  if (existingUser) {
    return NextResponse.json(
      { error: "Email already in use" },
      { status: 400 },
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser: User = {
    id: crypto.randomUUID(),
    name,
    email,
    passwordHash: hashedPassword,
  };

  userDB.data.push(newUser);
  await userDB.write();

  return NextResponse.json(
    { message: "Registration successful", newUser },
    { status: 201 },
  );
};
