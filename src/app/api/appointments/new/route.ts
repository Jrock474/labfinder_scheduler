import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { userDB, appointmentDB, providerDB } from "../../../../../lib/db";
import { User } from "../../../../../lib/types";
import { Appointment } from "../../../../../lib/types";

export const POST = async (req: Request) => {
  const { email, password, doctorName } = await req.json();
  const userEnteredPassword = password;

  await userDB.read();
  await appointmentDB.read();
  await providerDB.read();

  const existingUser = userDB.data.find((u) => u.email === email);
  const provider = providerDB.data.find((p) => p.doctorName === doctorName);

  if (!existingUser) {
    return NextResponse.json(
      { error: "Email not found on record" },
      { status: 400 },
    );
  }

  if (!provider) {
    return NextResponse.json(
      { error: "Doctor not on Record" },
      { status: 400 },
    );
  }

  const storedHashedPassword = existingUser.passwordHash;

  const result = await bcrypt.compare(
    userEnteredPassword,
    storedHashedPassword,
  );

  if (!result) {
    return NextResponse.json({ message: "Invalid Login" }, { status: 400 });
  }

  const newAppointment: Appointment = {
    id: crypto.randomUUID(),
    providerId: provider.id,
    dateTime: "09:00",
    patientName: existingUser.name,
    patientEmail: existingUser.email,
  };

  try {
    if (result) {
      appointmentDB.data.push(newAppointment);
      await appointmentDB.write();

      return NextResponse.json(
        { message: "Registration successful", newAppointment },
        { status: 201 },
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
};
