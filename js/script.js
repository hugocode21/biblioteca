// Obtener los elementos
const playVideoButton = document.getElementById('playVideoButton');
const videoContainer = document.getElementById('videoContainer');
const video = document.getElementById('video');
const imageButtonContainer = document.getElementById('imageButtonContainer');
const showImageButton = document.getElementById('showImageButton');
const imageContainer = document.getElementById('imageContainer');
const content = document.querySelector('.content');
const closeImageButton = document.getElementById('closeImageButton');

// Función para iniciar el video
playVideoButton.addEventListener('click', () => {
    content.classList.add('hidden');  
    videoContainer.classList.remove('hidden');  
    video.play();  
});

// Al finalizar el video
video.addEventListener('ended', () => {
    videoContainer.classList.add('hidden');  
    imageButtonContainer.classList.remove('hidden');  
});

// Mostrar imagen al hacer clic en el botón
showImageButton.addEventListener('click', () => {
    imageContainer.classList.remove('hidden');  
    imageButtonContainer.classList.add('hidden');  
});


// Obtener el botón de Google Maps
const googleMapsButton = document.getElementById('googleMapsButton');

// Al hacer clic en el botón para ir a Google Maps
googleMapsButton.addEventListener('click', () => {
    window.open("https://www.google.es/maps/place/Biblioteca+P%C3%BAblica+Municipal/@37.6893919,-3.8215185,17z/data=!3m1!4b1!4m6!3m5!1s0xd6dd9644354fbc7:0x827d0f78d5f5ef31!8m2!3d37.6893877!4d-3.8189436!16s%2Fg%2F11xd889dy?hl=es&entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D");  // Abre Google Maps en una nueva pestaña
});