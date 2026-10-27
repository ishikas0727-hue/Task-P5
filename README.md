# SIT313 Task P5 - DEV@Deakin Newsletter

This project contains the existing DEV@Deakin React frontend and an ExpressJS backend connected to the Resend Email API.

## Project structure

- `frontend/` - React + Vite DEV@Deakin website
- `backend/` - ExpressJS API + Resend email integration

## 1. Frontend

```bash
cd frontend
npm install
npm run dev
```

The Vite frontend normally runs at:

`http://localhost:5173`

## 2. Backend

Open another terminal:

```bash
cd backend
npm install
cp .env.example .env
```

Open `.env` and replace the placeholder with your real Resend API key:

```text
RESEND_API_KEY=your_real_resend_api_key
PORT=3000
```

Then start Express:

```bash
npm start
```

The backend runs at:

`http://localhost:3000`

## 3. Test Newsletter

1. Run the backend.
2. Run the React frontend.
3. Open the DEV@Deakin website.
4. Enter an email in the newsletter section.
5. Click Subscribe.
6. Check the backend terminal for:

```text
Resend HTTP Status: 200
Email sent successfully!
```

## Important

Do not commit `.env` or `node_modules` to GitLab.
