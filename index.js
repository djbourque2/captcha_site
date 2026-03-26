function checkPassword() {
  const input = document.getElementById("text-entry");

  if (input.value === "password") {
    window.location.href = "/correct.html";
  }
};