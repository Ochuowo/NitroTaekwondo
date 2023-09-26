
document.addEventListener("DOMContentLoaded", function () {
    // Get all gallery images
    const images = document.querySelectorAll(".gallery");

    // Get the modal and its components
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");

    // Add click event listeners to each image
    images.forEach((image, index) => {
    image.addEventListener("click", () => {
        // Display the modal
        modal.style.display = "block";
        
        // Set the clicked image as the modal content
        modalImg.src = image.src;
        captionText.innerHTML = `Image ${index + 1} of ${images.length}`;
        
        // Enable navigation through images
        modalImg.setAttribute("data-index", index);
    });
    });

    // Close the modal when the close button is clicked
    document.querySelector(".close").addEventListener("click", () => {
    modal.style.display = "none";
    });

    // Navigate to the previous image
    modalImg.addEventListener("click", (event) => {
    const currentIndex = parseInt(modalImg.getAttribute("data-index"));
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    modalImg.src = images[newIndex].src;
    captionText.innerHTML = `Image ${newIndex + 1} of ${images.length}`;
    modalImg.setAttribute("data-index", newIndex);
    });

    // Navigate to the next image
    modalImg.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    const currentIndex = parseInt(modalImg.getAttribute("data-index"));
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    modalImg.src = images[newIndex].src;
    captionText.innerHTML = `Image ${newIndex + 1} of ${images.length}`;
    modalImg.setAttribute("data-index", newIndex);
    });

    // Close the modal when clicking outside the modal content
    window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
    });

    // Close the modal when pressing the "Escape" key
    document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.style.display === "block") {
        modal.style.display = "none";
    }
    });
});