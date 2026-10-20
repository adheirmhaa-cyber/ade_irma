document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");

    // script.js juga aman jika halaman tidak memiliki form login.
    if (!form) return;

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const alertBox = document.getElementById("alertBox");

    if (!emailInput || !passwordInput || !emailError || !passwordError || !alertBox) {
        console.error("Elemen login tidak lengkap. Periksa ID di login.html.");
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value;

        emailError.textContent = "";
        passwordError.textContent = "";
        alertBox.textContent = "";
        alertBox.className = "alert d-none";

        let valid = true;

        if (email === "") {
            emailError.textContent = "Email wajib diisi.";
            valid = false;
        } else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
            emailError.textContent = "Format email belum benar. Contoh: nama@email.com";
            valid = false;
        }

        if (password.trim() === "") {
            passwordError.textContent = "Kata sandi wajib diisi.";
            valid = false;
        } else if (password.length < 8) {
            passwordError.textContent = "Kata sandi harus terdiri dari minimal 8 karakter.";
            valid = false;
        }

        if (!valid) {
            alertBox.textContent = "Login gagal. Silakan periksa dan lengkapi data yang ditandai.";
            alertBox.className = "alert alert-danger";
            return;
        }

        alertBox.textContent = "Validasi berhasil. Email dan kata sandi sudah diisi dengan benar.";
        alertBox.className = "alert alert-success";
    });
});
