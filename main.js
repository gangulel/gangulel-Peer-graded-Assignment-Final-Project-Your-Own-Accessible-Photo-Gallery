document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.image-container img');
    const imageInfo = document.querySelector('.image-info');

    images.forEach((image, index) => {
        // Add tabindex using JavaScript looping
        image.setAttribute('tabindex', '0');

        // Add focus event
        image.addEventListener('focus', () => {
            updateImageInfo(index + 1);

            function p1(index) {
                switch (index){
                    case 1:
                        document.getElementById('preview1').style.backgroundcolor="black";
                }
            }
            p1();

        return(index);
        });

        // Add blur event
        image.addEventListener('blur', () => {
            updateImageInfo(0);


        });
    });

    function updateImageInfo(id,alt,d1) {
        // Update image information in the designated div
        imageInfo.textContent = `Focused Image: ${id}`;
        console.log(alt);
    }
});

function upDate(altText, imageUrl) {
    document.getElementById('mainContent').innerText = altText;
    document.getElementById('mainContent').style.color='white';
    document.getElementsByClassName('preview1')[0].style.backgroundImage = `url(${imageUrl})`;
}

function unDo() {
    document.getElementById('mainContent').innerText = 'Hover over an image to see details.';
    document.getElementsByClassName('preview1')[0].style.backgroundImage = 'none';
}


