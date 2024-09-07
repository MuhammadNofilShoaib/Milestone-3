document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resumeForm");
    var resumeOutput = document.getElementById("resumeOutput");
    function toggleSection(sectionId) {
        var section = document.getElementById(sectionId);
        if (section) {
            section.style.display = section.style.display === 'none' ? 'block' : 'none';
        }
    }
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var education = document.getElementById("education").value;
        var experience = document.getElementById("experience").value;
        var skills = document.getElementById("skills").value;
        document.getElementById("resumeName").textContent = name;
        document.getElementById("resumeEmail").textContent = "Email: ".concat(email);
        document.getElementById("resumePhone").textContent = "Phone: ".concat(phone);
        document.getElementById("resumeEducation").textContent = "Education: ".concat(education);
        document.getElementById("resumeExperience").textContent = "Work Experience: ".concat(experience);
        document.getElementById("resumeSkills").textContent = "Skills: ".concat(skills);
        resumeOutput.style.display = "block";
    });
    resumeOutput.style.display = "none";
});
