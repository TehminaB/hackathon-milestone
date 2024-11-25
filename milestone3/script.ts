// Define Resume Types
interface ResumeData {
    name: string;
    email: string;
    education: string;
    workExperience: string;
    skills: string;
  }
  
  // Form and Output Elements
  const form = document.getElementById("resume-form") as HTMLFormElement;
  const resumeOutput = document.getElementById("resume") as HTMLElement;
  
  // Handle Form Submission
  form.addEventListener("submit", (event: Event) => {
    event.preventDefault();
  
    // Capture Form Data
    const formData = new FormData(form);
    const resumeData: ResumeData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      education: formData.get("education") as string,
      workExperience: formData.get("workExperience") as string,
      skills: formData.get("skills") as string,
    };
  
    // Generate Resume
    generateResume(resumeData);
  });
  
  // Function to Generate Resume
  function generateResume(data: ResumeData): void {
    resumeOutput.innerHTML = `
      <div class="resume-section">
        <h3>Personal Information</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
      </div>
      <div class="resume-section">
        <h3>Education</h3>
        <p>${data.education}</p>
      </div>
      <div class="resume-section">
        <h3>Work Experience</h3>
        <p>${data.workExperience}</p>
      </div>
      <div class="resume-section">
        <h3>Skills</h3>
        <p>${data.skills}</p>
      </div>
    `;
  }
  