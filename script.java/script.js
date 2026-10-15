
const form = document.getElementById("loginForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const alertBox = document.getElementById("alertBox");

    emailError.textContent = "";
    passwordError.textContent = "";
    alertBox.textContent = "";
    alertBox.className = "alert d-none";

    let valid = true;

    if (email === "") {
        emailError.textContent = "Email wajib diisi.";
        valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailError.textContent = "Format email belum benar.";
        valid = false;
    }

    if (password === "") {
        passwordError.textContent = "Password wajib diisi.";
        valid = false;
    } else if (password.length < 8) {
        passwordError.textContent =
            "Password harus terdiri dari minimal 8 karakter.";
        valid = false;
    }

    if (!valid) {
        alertBox.textContent =
            "Periksa kembali data yang kamu masukkan.";
        alertBox.className = "alert alert-danger";
        return;
    }

    alertBox.textContent =
        "Validasi berhasil. Semua input sudah memenuhi ketentuan.";
    alertBox.className = "alert alert-success";
});
