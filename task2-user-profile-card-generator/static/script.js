const form = document.getElementById("profileForm");
const bioInput = document.getElementById("bio");
const charCount = document.getElementById("charCount");
const copyButton = document.getElementById("copyButton");
const generateButton = form.querySelector("button[type='submit']");
let latestProfile = null;

bioInput.addEventListener("input", () => {
  charCount.textContent = `${bioInput.value.length} / 240`;
});

function showError(field, message = "") {
  document.getElementById(`${field}Error`).textContent = message;
}

function showProfile(profile) {
  document.getElementById("emptyState").classList.add("hidden");
  document.getElementById("profileCard").classList.remove("hidden");
  document.getElementById("successMessage").classList.remove("hidden");

  document.getElementById("cardName").textContent = profile.name;
  document.getElementById("cardRole").textContent = profile.role;
  document.getElementById("cardBio").textContent = profile.bio;
  document.getElementById("cardLocation").textContent = profile.location || "";

  const image = document.getElementById("avatarImage");
  const fallback = document.getElementById("avatarFallback");
  fallback.textContent = profile.initials || "?";
  image.classList.add("hidden");
  fallback.classList.remove("hidden");

  if (profile.image_url) {
    image.onload = () => {
      image.classList.remove("hidden");
      fallback.classList.add("hidden");
    };
    image.onerror = () => {
      image.classList.add("hidden");
      fallback.classList.remove("hidden");
    };
    image.src = profile.image_url;
  }
  latestProfile = profile;
  copyButton.disabled = false;
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  ["name", "bio", "image_url"].forEach(field => showError(field));
  generateButton.disabled = true;
  generateButton.querySelector("span").textContent = "Generating...";

  const payload = Object.fromEntries(new FormData(form).entries());
  try {
    const response = await fetch("/api/profile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const result = await response.json();

    if (!response.ok) {
      Object.entries(result.errors || {}).forEach(([field, message]) => showError(field, message));
      return;
    }
    showProfile(result.profile);
  } catch (error) {
    alert("Could not connect to the backend. Check that the Flask server is running.");
  } finally {
    generateButton.disabled = false;
    generateButton.querySelector("span").textContent = "Generate profile card";
  }
});

copyButton.addEventListener("click", async () => {
  if (!latestProfile) return;
  const text = `${latestProfile.name}\n${latestProfile.role}\n${latestProfile.bio}${latestProfile.location ? `\n${latestProfile.location}` : ""}`;
  try {
    await navigator.clipboard.writeText(text);
    copyButton.textContent = "Copied ✓";
    setTimeout(() => copyButton.textContent = "Copy profile text ↗", 1600);
  } catch {
    copyButton.textContent = "Copy unavailable";
  }
});
