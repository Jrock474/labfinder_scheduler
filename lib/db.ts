import { JSONFilePreset } from "lowdb/node";
import path from "path";
import { Provider, Appointment, User } from "./types";

// Build the path to your /data directory
const dataPath = path.join(process.cwd(), "data");

// Each preset requires a file path + default data structure (an empty database)

// Provider Database
export const providerDB = await JSONFilePreset<Provider[]>(
  path.join(dataPath, "providers.json"),
  [],
);

// Appointments Database
export const appointmentDB = await JSONFilePreset<Appointment[]>(
  path.join(dataPath, "appointments.json"),
  [],
);

// User Database
export const userDB = await JSONFilePreset<User[]>(
  path.join(dataPath, "users.json"),
  [],
);
