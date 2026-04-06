// 1. Prompt personalization
let user = prompt("Welcome! Please enter your name:");
document.getElementById("welcome").textContent = "Welcome, " + user + "!";

// 3. Form validation
document.getElementById("contactForm").onsubmit = function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        document.getElementById("formMsg").textContent = "Please fill all fields!";
    } else {
        document.getElementById("formMsg").textContent = "Message sent!";
    }
};

$(document).ready(function () {

    // 1. Toggle skills section
    $("#skills h2").click(function () {
        $("#skillList").toggle();
    });

    // 2. Search filter
    $("#search").on("keyup", function () {
        let value = $(this).val().toLowerCase();
        $("#projectList li").filter(function () {
            $(this).toggle($(this).text().toLowerCase().includes(value));
        });
    });

});

let btn = document.getElementById("toggleMode");
if (btn) {
    btn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        btn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });
}