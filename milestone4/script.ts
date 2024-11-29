function editablegenerateResume(): void {
  const name: string = (document.getElementById("name") as HTMLInputElement).value;
  const email: string = (document.getElementById("email") as HTMLInputElement).value;
  const education: string = (document.getElementById("education") as HTMLTextAreaElement).value;
  const work: string = (document.getElementById("work") as HTMLTextAreaElement).value;
  const skills: string = (document.getElementById("skills") as HTMLTextAreaElement).value;

  const resumeOutput = document.getElementById("resume-output") as HTMLElement;
  resumeOutput.innerHTML = `
    <h3>${name}</h3>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Education:</strong><br>${education.replace(/\n/g, "<br>")}</p>
    <p><strong>Work Experience:</strong><br>${work.replace(/\n/g, "<br>")}</p>
    <p><strong>Skills:</strong><br>${skills.replace(/\n/g, "<br>")}</p>
  `;
  resumeOutput.style.display = "block";
}
