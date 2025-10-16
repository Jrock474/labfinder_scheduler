import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { userDB } from "@/api/lib/db";
import { Users } from "@/api/lib/types";

export const POST = async (req: Request) => {
  const { email, password } = await req.json();
  const userEnteredPassword = password;

  await userDB.read();

  const existingUser = userDB.data.find((u) => u.email === email);

  if (!existingUser) {
    return NextResponse.json(
      { error: "Email not found on record" },
      { status: 400 },
    );
  }

  const storedHashedPassword = existingUser.passwordHash;

  const result = await bcrypt.compare(
    userEnteredPassword,
    storedHashedPassword,
  );

  try {
    if (result) {
      NextResponse.json({ message: "Login successful" }, { status: 200 });
      return console.log(`log in success! ${existingUser}`);
    } else {
      NextResponse.json({ message: "Invalid Login" }, { status: 401 });

      return console.log("invalid Login");
    }
  } catch (error) {
    NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
};
