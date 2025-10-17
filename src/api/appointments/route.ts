import { NextResponse } from "next/server";
import { appointmentDB } from "../lib/db";

export const GET = async (req: Request) => {
  await appointmentDB.read();
  const appointments = appointmentDB.data;

  NextResponse.json(appointments);
};
