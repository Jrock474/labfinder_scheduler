import { NextResponse } from "next/server";
import { userDB } from "../../../../lib/db";

export const GET = async (req: Request) => {
  await userDB.read();
  const users = userDB.data;

  NextResponse.json(users);
};
