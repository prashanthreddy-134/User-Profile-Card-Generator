# User Profile Card Generator

**Internship Task ID:** TASK 02  
**Project Type:** Full-Stack Web Development  
**Technologies:** Python, Flask, HTML, CSS, JavaScript

## 1. Project Overview

The User Profile Card Generator is a full-stack web application that allows users to create personalized profile cards by entering their details through a simple web form.

Users can provide their full name, professional title, short biography, profile image URL, and location. The frontend sends the submitted information to a Python Flask backend through an HTTP POST request.

The backend validates and processes the submitted information before returning a structured JSON response. The frontend receives this response and dynamically generates a professional profile card without reloading the page.

## 2. Objectives

- Understand frontend and backend communication.
- Implement HTTP POST requests using JavaScript Fetch API.
- Process form data using Python Flask.
- Validate user input on the backend.
- Exchange information using JSON responses.
- Dynamically update frontend elements.
- Build a responsive and user-friendly interface.

## 3. Technologies Used

| Technology | Purpose |
|---|---|
| Python | Backend programming |
| Flask | Backend framework and API |
| HTML5 | Application structure |
| CSS3 | Styling and responsive design |
| JavaScript | Frontend functionality |
| Fetch API | HTTP communication |
| JSON | Data exchange between frontend and backend |

## 4. Features

- User-friendly profile creation form.
- Full name and professional title input.
- Short biography submission.
- Profile image URL support.
- Location information.
- Backend input validation.
- Dynamic profile card generation.
- Initials displayed when no profile image is provided.
- Copy profile information functionality.
- Responsive user interface.
- Backend health-check endpoint.

## 5. Project Structure

```text
task2-user-profile-card-generator/
│
├── app.py
├── requirements.txt
├── README.md
│
├── templates/
│   └── index.html
│
└── static/
    ├── style.css
    └── script.js
```

## 6. Installation and Setup

**Step 1: Extract the project ZIP file.**

**Step 2: Open the project folder in PowerShell or VS Code terminal.**

**Step 3: Create a virtual environment.**

```bash
py -m venv .venv
```

**Step 4: Activate the virtual environment.**

```powershell
.\.venv\Scripts\Activate.ps1
```

**Step 5: Install dependencies.**

```bash
pip install -r requirements.txt
```

**Step 6: Start the Flask application.**

```bash
python app.py
```

**Step 7: Open the application in your browser.**

```text
http://127.0.0.1:5000
```

## 7. Application Workflow

1. The user opens the profile card generator application.
2. The user enters personal and professional information.
3. JavaScript collects the form data.
4. The Fetch API sends the information to the Flask backend using a POST request.
5. Flask receives and validates the submitted information.
6. The backend processes the data and generates a JSON response.
7. JavaScript receives the response and dynamically updates the frontend.
8. The generated profile card is displayed on the same page.

## 8. API Endpoints

### POST /api/profile

Accepts profile information from the frontend.

**Sample Request:**

```json
{
  "name": "Alex Morgan",
  "role": "Frontend Developer",
  "bio": "Passionate about building modern web applications.",
  "image_url": "https://example.com/profile.jpg",
  "location": "Bengaluru, India"
}
```

**Expected Response:**

```json
{
  "success": true,
  "message": "Profile card generated successfully.",
  "profile": {
    "name": "Alex Morgan",
    "bio": "Passionate about building modern web applications.",
    "image_url": "https://example.com/profile.jpg",
    "role": "Frontend Developer",
    "location": "Bengaluru, India",
    "initials": "AM"
  }
}
```

### GET /api/health

Checks whether the backend application is running.

**Expected Response:**

```json
{
  "status": "ok",
  "service": "user-profile-card-generator"
}
```

## 9. Input Validation

The backend performs validation to ensure:

- Full name is provided.
- Biography is provided.
- Image URLs use HTTP or HTTPS.
- User input is limited to predefined maximum lengths.
- Invalid submissions return appropriate JSON error messages.

## 10. Testing

The application can be tested using the following scenarios:

| Test Case | Expected Result |
|---|---|
| Submit valid profile details | Profile card generated |
| Submit without a name | Validation error |
| Submit without a bio | Validation error |
| Submit invalid image URL | URL validation error |
| Submit without image URL | Initials displayed |
| Check backend health | Status returned as OK |

## 11. Learning Outcomes

Through this project, I gained practical experience in developing a full-stack web application using Python Flask and frontend technologies.

I learned how to handle form submissions, implement POST requests, process JSON data, perform backend validation, and dynamically display server responses on the frontend.

This project improved my understanding of client-server communication, REST API fundamentals, and integrating frontend interfaces with Python backend applications.

## 12. Conclusion

The User Profile Card Generator successfully demonstrates the integration of frontend and backend technologies through a form-based application.

It provides practical exposure to HTTP POST requests, backend data processing, JSON communication, and dynamic frontend rendering.

**Project Status:** Completed  
**Internship Task:** Task 02 – User Profile Card Generator
