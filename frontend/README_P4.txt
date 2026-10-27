DEV@Deakin - SIT313 P4 additions

The existing website components, content and styling have been kept as-is.
Added:
- Login component
- Registration component
- Login/Register controls in the existing header
- Simple hash-based navigation so the new pages open without adding React Router
- Passwords are SHA-256 hashed before being stored in browser localStorage (demo/front-end only)

Run:
1. npm install
2. npm run dev

The PDF supplied for this task is a one-page brief titled "SIT313 Secure Frontend Applications P4 Login and Registration Page"; it specifies Login and Registration but does not provide further implementation details.

SIT313 C1 New Post Page
- Added a New Post page based on the supplied C1 PDF.
- Supports Question/Article selection, title, description, tags (1-3), validation and a Post action.
- Existing DEV@Deakin pages and Firebase Login/Registration are preserved.
