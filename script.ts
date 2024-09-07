document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resumeForm") as HTMLFormElement;
    const resumeOutput = document.getElementById("resumeOutput") as HTMLElement;
    
    function toggleSection(sectionId: string) {
        const section = document.getElementById(sectionId) as HTMLElement;
        if (section) {
            section.style.display = section.style.display === 'none' ? 'block' : 'none';
        }
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = (document.getElementById("name") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const phone = (document.getElementById("phone") as HTMLInputElement).value;
        const education = (document.getElementById("education") as HTMLInputElement).value;
        const experience = (document.getElementById("experience") as HTMLInputElement).value;
        const skills = (document.getElementById("skills") as HTMLInputElement).value;

        (document.getElementById("resumeName") as HTMLHeadingElement).textContent = name;
        (document.getElementById("resumeEmail") as HTMLParagraphElement).textContent = `Email: ${email}`;
        (document.getElementById("resumePhone") as HTMLParagraphElement).textContent = `Phone: ${phone}`;
        (document.getElementById("resumeEducation") as HTMLParagraphElement).textContent = `Education: ${education}`;
        (document.getElementById("resumeExperience") as HTMLParagraphElement).textContent = `Work Experience: ${experience}`;
        (document.getElementById("resumeSkills") as HTMLParagraphElement).textContent = `Skills: ${skills}`;

        resumeOutput.style.display = "block";
    });
 
    resumeOutput.style.display = "none";
});
