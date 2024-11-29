function editablegenerateResume() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var education = document.getElementById("education").value;
    var work = document.getElementById("work").value;
    var skills = document.getElementById("skills").value;
    var resumeOutput = document.getElementById("resume-output");
    resumeOutput.innerHTML = "\n    <h3>".concat(name, "</h3>\n    <p><strong>Email:</strong> ").concat(email, "</p>\n    <p><strong>Education:</strong><br>").concat(education.replace(/\n/g, "<br>"), "</p>\n    <p><strong>Work Experience:</strong><br>").concat(work.replace(/\n/g, "<br>"), "</p>\n    <p><strong>Skills:</strong><br>").concat(skills.replace(/\n/g, "<br>"), "</p>\n  ");
    resumeOutput.style.display = "block";
}
