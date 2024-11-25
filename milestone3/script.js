// Form and Output Elements
var form = document.getElementById("resume-form");
var resumeOutput = document.getElementById("resume");
// Handle Form Submission
form.addEventListener("submit", function (event) {
    event.preventDefault();
    // Capture Form Data
    var formData = new FormData(form);
    var resumeData = {
        name: formData.get("name"),
        email: formData.get("email"),
        education: formData.get("education"),
        workExperience: formData.get("workExperience"),
        skills: formData.get("skills"),
    };
    // Generate Resume
    generateResume(resumeData);
});
// Function to Generate Resume
function generateResume(data) {
    resumeOutput.innerHTML = "\n      <div class=\"resume-section\">\n        <h3>Personal Information</h3>\n        <p><strong>Name:</strong> ".concat(data.name, "</p>\n        <p><strong>Email:</strong> ").concat(data.email, "</p>\n      </div>\n      <div class=\"resume-section\">\n        <h3>Education</h3>\n        <p>").concat(data.education, "</p>\n      </div>\n      <div class=\"resume-section\">\n        <h3>Work Experience</h3>\n        <p>").concat(data.workExperience, "</p>\n      </div>\n      <div class=\"resume-section\">\n        <h3>Skills</h3>\n        <p>").concat(data.skills, "</p>\n      </div>\n    ");
}
