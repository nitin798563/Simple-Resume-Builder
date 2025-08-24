// Live Preview Updates
document.querySelectorAll("#name, #email, #phone, #summary").forEach(input => {
  input.addEventListener("input", updatePreview);
});

document.querySelectorAll("#skills input").forEach(skill => {
  skill.addEventListener("change", updateSkills);
});

document.getElementById("clearBtn").addEventListener("click", () => {
  document.getElementById("resumePreview").innerHTML = `
    <h1 id="preview-name">Your Name</h1>
    <p id="preview-email">Email: example@mail.com</p>
    <p id="preview-phone">Phone: 0000000000</p>
    <h3>Profile Summary</h3>
    <p id="preview-summary">Write something about yourself...</p>
    <h3>Education</h3>
    <ul id="preview-education"></ul>
    <h3>Skills</h3>
    <ul id="preview-skills"></ul>
    <h3>Experience</h3>
    <ul id="preview-experience"></ul>
  `;
});

function updatePreview() {
  document.getElementById("preview-name").textContent = document.getElementById("name").value || "Your Name";
  document.getElementById("preview-email").textContent = "Email: " + (document.getElementById("email").value || "example@mail.com");
  document.getElementById("preview-phone").textContent = "Phone: " + (document.getElementById("phone").value || "0000000000");
  document.getElementById("preview-summary").textContent = document.getElementById("summary").value || "Write something about yourself...";
}

function updateSkills() {
  let skills = [];
  document.querySelectorAll("#skills input:checked").forEach(skill => {
    skills.push(skill.value);
  });
  let skillsList = document.getElementById("preview-skills");
  skillsList.innerHTML = "";
  skills.forEach(skill => {
    let li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
  });
}

// Add multiple education rows
function addEducation() {
  let input = document.createElement("input");
  input.type = "text";
  input.className = "education";
  input.placeholder = "Enter education";
  input.addEventListener("input", updateEducation);
  document.getElementById("education-section").appendChild(input);
}

function updateEducation() {
  let educationList = document.getElementById("preview-education");
  educationList.innerHTML = "";
  document.querySelectorAll(".education").forEach(ed => {
    if (ed.value.trim() !== "") {
      let li = document.createElement("li");
      li.textContent = ed.value;
      educationList.appendChild(li);
    }
  });
}

document.querySelectorAll(".education").forEach(ed => {
  ed.addEventListener("input", updateEducation);
});

// Add multiple experience rows
function addExperience() {
  let input = document.createElement("input");
  input.type = "text";
  input.className = "experience";
  input.placeholder = "Enter experience";
  input.addEventListener("input", updateExperience);
  document.getElementById("experience-section").appendChild(input);
}

function updateExperience() {
  let experienceList = document.getElementById("preview-experience");
  experienceList.innerHTML = "";
  document.querySelectorAll(".experience").forEach(exp => {
    if (exp.value.trim() !== "") {
      let li = document.createElement("li");
      li.textContent = exp.value;
      experienceList.appendChild(li);
    }
  });
}

document.querySelectorAll(".experience").forEach(exp => {
  exp.addEventListener("input", updateExperience);
});