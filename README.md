<h1>LabFinder Scheduler API</h1>

<p>
LabFinder Scheduler is a healthcare appointment scheduling API built with Next.js and TypeScript. The project manages users, healthcare providers, and appointments while providing API routes for registration, authentication, provider discovery, and appointment scheduling.
</p>

<p>
The project focuses primarily on backend API development, data persistence, authentication, and handling relationships between users, providers, and appointments.
</p>

<h2>Purpose</h2>

<p>
The purpose of this project was to build the backend functionality of a healthcare scheduling system where users can create accounts, authenticate their credentials, view available healthcare providers, and schedule appointments.
</p>

<p>
The project also gave me experience designing API routes with the Next.js App Router and working with persistent JSON-based data without relying on an external database service.
</p>

<h2>Technologies</h2>

<ul>
    <li>Next.js</li>
    <li>TypeScript</li>
    <li>Node.js</li>
    <li>LowDB</li>
    <li>Bcrypt.js</li>
    <li>REST APIs</li>
    <li>JSON</li>
</ul>

<h2>Functionality</h2>

<ul>
    <li>Register new users</li>
    <li>Hash user passwords before storing them</li>
    <li>Authenticate users using their email and password</li>
    <li>Retrieve registered users</li>
    <li>Retrieve healthcare providers</li>
    <li>Store provider information including facility, doctor, specialty, and available hours</li>
    <li>Retrieve scheduled appointments</li>
    <li>Create appointments for authenticated users</li>
    <li>Associate appointments with healthcare providers</li>
    <li>Prevent duplicate appointments for the same patient and time</li>
    <li>Persist users, providers, and appointments using LowDB and JSON files</li>
</ul>

<h3>API Routes</h3>

| Method | Endpoint                | Description                    |
| ------ | ----------------------- | ------------------------------ |
| GET    | `/`                     | Returns the API status         |
| GET    | `/api/users`            | Retrieves users                |
| POST   | `/api/users/register`   | Registers a new user           |
| POST   | `/api/users/login`      | Validates user credentials     |
| GET    | `/api/providers`        | Retrieves healthcare providers |
| GET    | `/api/appointments`     | Retrieves appointments         |
| POST   | `/api/appointments/new` | Creates a new appointment      |

<h2>Development</h2>

<p>To run the project locally:</p>

<h3>1. Fork the Repository</h3>

<p>
Fork this repository to your own GitHub account and download your fork to your local machine.
</p>

<h3>2. Navigate to the Project</h3>

```bash
cd labfinder_scheduler
```

<h3>3. Install Dependencies</h3>

```bash
npm install
```

<h3>4. Start the Development Server</h3>

```bash
npm run dev
```

<h3>5. Test the API</h3>

<p>
The development server will run locally at:
</p>

```text
http://localhost:3000
```

<p>
API requests can be tested using tools such as Postman, Insomnia, or another REST client.
</p>

<h3>Example User Registration</h3>

```json
{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password"
}
```

<p>Send the request to:</p>

```text
POST /api/users/register
```

<h3>Example Login</h3>

```json
{
    "email": "john@example.com",
    "password": "password"
}
```

<p>Send the request to:</p>

```text
POST /api/users/login
```

<h3>Example Appointment Request</h3>

```json
{
    "email": "john@example.com",
    "password": "password",
    "doctorName": "Provider Name"
}
```

<p>Send the request to:</p>

```text
POST /api/appointments/new
```

<h2>What I Learned</h2>

<ul>
    <li>Building REST-style API endpoints using Next.js Route Handlers</li>
    <li>Structuring backend resources around users, providers, and appointments</li>
    <li>Persisting application data with LowDB and JSON files</li>
    <li>Hashing and comparing passwords using Bcrypt</li>
    <li>Validating user credentials before allowing protected operations</li>
    <li>Connecting related data across multiple resources</li>
    <li>Handling duplicate records and invalid API requests</li>
    <li>Using TypeScript interfaces to define consistent application data models</li>
</ul>

<h2>Links</h2>

<ul>
    <li>
        <a href="https://github.com/Jrock474/labfinder_scheduler">GitHub Repository</a>
    </li>
</ul>

