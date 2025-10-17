import { NextResponse } from "next/server";
import { providerDB } from "../../../lib/db";

export const GET = async (req: Request) => {
  await providerDB.read();
  const providers = providerDB.data;

  NextResponse.json(providers);
};
