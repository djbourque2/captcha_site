document.getElementById("text-entry").addEventListener("input", function () {
  if (this.value === "password") {
    window.location.href = "/your-target-page.html";
  }
});