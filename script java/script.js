
const form = document.getElementById("loginForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const pesan = document.getElementById("pesan");

    emailError.textContent = "";
    passwordError.textContent = "";
    pesan.textContent = "";

    let valid = true;

    if (email === "") {
        emailError.textContent = "Email harus diisi.";
        valid = false;
    }

    if (password === "") {
        passwordError.textContent = "Password harus diisi.";
        valid = false;
    }

    if (valid) {
        pesan.textContent =
            "Pemeriksaan berhasil. Form sudah terisi.";
        pesan.className = "mt-3 text-center text-success";
    }
});
