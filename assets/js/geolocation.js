document.getElementById('getLocationBtn').addEventListener("click", function () {
    let loactionDisplay = document.getElementById('displayLocation');

    if (navigator.geolocation) {
        loactionDisplay.innerHTML = 'Fetching location...';

        navigator.geolocation.getCurrentPosition(
            function (position) {
                const { latitude, longitude } = position.coords;

                loactionDisplay.innerHTML = `
                    <p>Latitude: ${latitude} Longitude:  ${longitude}</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10000!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v${Date.now()}" width="100%" height="420px" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                `;
            },
            function (error) {
                loactionDisplay.innerHTML = `Error: ${error.message}`;
            }
        );
    } else {
        loactionDisplay.innerHTML = 'Geolocation is not supported by your browser';
    }
});
