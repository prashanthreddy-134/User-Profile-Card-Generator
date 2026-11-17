from flask import Flask, render_template, request, jsonify
from urllib.parse import urlparse
import re

app = Flask(__name__)
app.config["JSON_SORT_KEYS"] = False

def clean_text(value, max_length):
    return (value or "").strip()[:max_length]

def valid_image_url(value):
    if not value:
        return True
    parsed = urlparse(value)
    return parsed.scheme in ("http", "https") and bool(parsed.netloc)

@app.get("/")
def home():
    return render_template("index.html")

@app.post("/api/profile")
def create_profile():
    data = request.get_json(silent=True) or {}
    name = clean_text(data.get("name"), 60)
    bio = clean_text(data.get("bio"), 240)
    image_url = clean_text(data.get("image_url"), 500)
    role = clean_text(data.get("role"), 80)
    location = clean_text(data.get("location"), 80)

    errors = {}
    if not name:
        errors["name"] = "Please enter your name."
    if not bio:
        errors["bio"] = "Please add a short bio."
    if image_url and not valid_image_url(image_url):
        errors["image_url"] = "Image URL must start with http:// or https://."
    if errors:
        return jsonify({"success": False, "errors": errors}), 400

    profile = {
        "name": name,
        "bio": bio,
        "image_url": image_url,
        "role": role or "Profile Member",
        "location": location,
        "initials": "".join(part[0] for part in name.split()[:2]).upper()
    }
    return jsonify({"success": True, "message": "Profile card generated successfully.", "profile": profile})

@app.get("/api/health")
def health():
    return jsonify({"status": "ok", "service": "user-profile-card-generator"})

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)
