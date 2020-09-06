const videoElement = document.getElementById('video');
const button = document.getElementById('button');

/**
 * Pide al usuario seleccionar un stream de media, pasarlo al elemento video y darle play
 */
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        };
    }
    catch(error) {
        console.error('Chale! Hubo error:', error);
    }
}

button.addEventListener('click', async () => {
    // Disable Button
    button.disabled = true;
    // Iniciar imagen en imagen
    await videoElement.requestPictureInPicture();
    // Resetear boton
    button.disabled = false;
});

// onLoad
selectMediaStream();