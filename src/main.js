console.log("Frontend iniciado ✨");

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  if (app) {
    const info = document.createElement("p");
    info.textContent = "JS del frontend cargado correctamente.";
    app.appendChild(info);
  }
});
