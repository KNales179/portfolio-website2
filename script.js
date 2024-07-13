// Adjust rectangle and image properties on window resize
function adjustLayout() {
    const rectangle = document.getElementById('rectangle');
    const imageContainer = document.getElementById('image-container');
    const img = imageContainer.querySelector('img');
    const homeSection = document.getElementById('home-section');
    const homeLeftContainer = document.getElementById('home-left-container');
    const homeRightContainer = document.getElementById('home-right-container');
    const container = document.getElementById('container');

    if (window.innerWidth <= 768) {
        rectangle.style.width = '500px';
        rectangle.style.height = '50px';
        rectangle.style.transform = 'rotate(0deg)';
        rectangle.style.left = '50px';
        rectangle.style.bottom = 'auto';
        rectangle.style.top = '0';

        imageContainer.style.height = '300px';
        imageContainer.style.marginTop = '0';
        img.style.position = 'static';
        img.style.marginTop = '20px';
        img.style.paddingLeft = '20px';

        homeSection.style.flexDirection = 'column';
        homeLeftContainer.style.alignItems = 'center';
        homeLeftContainer.style.textAlign = 'center';
        homeLeftContainer.style.marginTop = '0';

        container.style.flexDirection = 'column';
        container.style.alignItems = 'center';
    } else {
        rectangle.style.width = '10000px';
        rectangle.style.height = '600px';
        rectangle.style.transform = 'rotate(60deg)';
        rectangle.style.left = '-4800px';
        rectangle.style.top = 'auto';
        rectangle.style.bottom = '0';

        imageContainer.style.height = '500px';
        imageContainer.style.marginTop = '200px';
        img.style.position = 'absolute';
        img.style.bottom = '50px';
        img.style.marginTop = '0';

        homeSection.style.flexDirection = 'row';
        homeLeftContainer.style.alignItems = 'flex-start';
        homeLeftContainer.style.textAlign = 'left';
        homeLeftContainer.style.marginTop = '15vh';

        container.style.flexDirection = 'row';
        container.style.alignItems = 'flex-start';
    }
}

// Initial call to set the layout properties
adjustLayout();

// Add event listener for window resize
window.addEventListener('resize', adjustLayout);
