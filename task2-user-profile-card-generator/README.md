# User Profile Card Generator — Task 02

A responsive form-based full-stack application. Users enter a name, professional title, short bio, optional image URL and location. The browser sends the form data to a Python Flask backend using a JSON `POST` request. The backend validates and formats the data, returns JSON, and the frontend renders the profile card.

## Features
- Responsive dark interface with profile card preview
- Flask REST endpoint: `POST /api/profile`
- Server-side validation and JSON error responses
- Optional remote profile image with initials fallback
- Copy profile text action
- Health endpoint: `GET /api/health`

## Requirements
- Python 3.10+
- pip

## Run on Windows PowerShell

```powershell
cd task2-user-profile-card-generator
py -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
python app.py
```

Open http://127.0.0.1:5000 in your browser.

If PowerShell blocks activation for this terminal, run:
```powershell
Set-ExecutionPolicy -Scope Process RemoteSigned
.\.venv\Scripts\Activate.ps1
```

## API

### `POST /api/profile`

Request JSON:
```json
{
  "name": "Alex Morgan",
  "role": "Product Designer",
  "bio": "I design simple, useful digital experiences.",
  "image_url": "https://example.com/photo.jpg",
  "location": "Bengaluru, India"
}
```

Success response:
```json
{
  "success": true,
  "message": "Profile card generated successfully.",
  "profile": {
    "name": "Alex Morgan",
    "bio": "I design simple, useful digital experiences.",
    "image_url": "https://example.com/photo.jpg",
    "role": "Product Designer",
    "location": "Bengaluru, India",
    "initials": "AM"
  }
}
```

Required fields: `name`, `bio`. The image URL is optional and must use HTTP or HTTPS when supplied.

### `GET /api/health`
Returns service status.

## Request-response flow

1. User fills the profile form.
2. JavaScript reads the values and sends JSON to `/api/profile` using `fetch()` and `POST`.
3. Flask receives the request and validates the fields.
4. Flask formats the profile object and returns a JSON response.
5. JavaScript reads the response and updates the profile card without reloading the page.

## Project structure

```text
task2-user-profile-card-generator/
├── app.py
├── requirements.txt
├── README.md
├── templates/
│   └── index.html
└── static/
    ├── style.css
    └── script.js
```

## Notes
- This task returns the submitted profile data in the API response; it does not persist profiles in a database.
- Only use image URLs that are publicly accessible. Some websites block hotlinking, in which case initials are shown instead.
