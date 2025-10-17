import { NextResponse } from "next/server";
import { providerDB } from "../../../../../lib/db";
import { Provider } from "../../../../../lib/types";

export const GET = async (req: Request, params: { id: string }) => {
  const id = params.id;
  await providerDB.read();

  const provider = providerDB.data.find((p: Provider) => p.id === id);

  if (!provider) {
    return NextResponse.json({ error: "Provider not found" }, { status: 404 });
  }

  return NextResponse.json(provider, { status: 200 });
};
