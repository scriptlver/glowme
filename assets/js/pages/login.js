const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("login-email").value.trim();
  const senha = document.getElementById("login-password").value;

  if (!email || !senha) {
    alert("Preencha todos os campos");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Digite um email válido");
    return;
  }

  if (senha.length < 6) {
    alert("A senha deve ter pelo menos 6 caracteres");
    return;
  }

  alert("Login realizado com sucesso!");
});
