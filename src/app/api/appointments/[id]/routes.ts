import { NextResponse } from "next/server";
import { appointmentDB } from "../../../../../lib/db";
import { Appointment } from "../../../../../lib/types";

export const GET = async (req: Request, params: { id: string }) => {
  const id = params.id;
  await appointmentDB.read();

  const provider = appointmentDB.data.find((p: Appointment) => p.id === id);

  if (!provider) {
    return NextResponse.json({ error: "Provider not found" }, { status: 404 });
  }

  return NextResponse.json(provider, { status: 200 });
};
