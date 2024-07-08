document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('video-cabecera');
    const botonHamburguesa = document.getElementById("menuButton")
    botonHamburguesa.style.display = "none"
    video.addEventListener('ended', () => {
        setTimeout(() => {
            video.play();
        }, 3000); // Pausar durante n segundos
        botonHamburguesa.style.display = "flex"
    });
});
