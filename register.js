const form = document.getElementById("form");

// menampilkan pesan error + menandai kolom yang bermasalah
function showError(input, errorElement, message) {
  errorElement.textContent = message;
  input.classList.add("is-invalid");
  input.setAttribute("aria-invalid", "true");
}

// membersihkan satu kolom
function clearError(input, errorElement) {
  errorElement.textContent = "";
  input.classList.remove("is-invalid");
  input.removeAttribute("aria-invalid");
}

form.addEventListener("submit", function(event){
  event.preventDefault();

  const name = document.getElementById("name");
  const number = document.getElementById("number");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmpassword = document.getElementById("confirm-password");

  const errorname = document.getElementById("error-name");
  const errornumber = document.getElementById("error-number");
  const erroremail = document.getElementById("error-email");
  const errorpassword = document.getElementById("error-password");
  const errorconfirmpassword = document.getElementById("error-confirm-password");

  clearError(name, errorname);
  clearError(number, errornumber);
  clearError(email, erroremail);
  clearError(password, errorpassword);
  clearError(confirmpassword, errorconfirmpassword);

  let valid = true

  if (name.value.trim() === "") {
    showError(name, errorname, "Masukan nama!");
    valid = false;
  } else if (name.value.trim().length < 3) {
    showError(name, errorname, "Minimal 3 huruf!");
    valid = false;
  }

  if (number.value.trim() === "") {
    showError(number, errornumber, "Masukan nomor telepon!");
    valid = false;
  } else if (number.value.trim().length < 12) {
    showError(number, errornumber, "Format nomor tidak valid!");
    valid = false;
  }

  if (email.value.trim() === "") {
    showError(email, erroremail, "Masukan email!");
    valid = false;
  } else if (email.value.trim().startsWith("@") || email.value.trim().startsWith(".")) {
    showError(email, erroremail, "Format email salah!");
    valid = false;
  }

  if (password.value.trim() === "") {
    errorpassword.textContent = "Buat password!";
    valid = false;
  } else if (password.value.trim().length < 8) {
    errorpassword.textContent = "Minimal 8 karakter!";
    valid = false;
  } else if (confirmpassword.value.trim() === "") {
    errorconfirmpassword.textContent = "Konfirmasi password!";
    valid = false;
  } else if (confirmpassword.value.trim() !== password.value) {
    errorconfirmpassword.textContent = "Password tidak sama!";
    valid = false;
  }
  
});

// begitu pengguna mulai memperbaiki isi kolom, tanda error di kolom itu hilang
form.addEventListener("input", function(event){
  const input = event.target;
  const errorElement = document.getElementById("error-" + input.id);

  if (errorElement && input.classList.contains("is-invalid")) {
    clearError(input, errorElement);
  }
});
