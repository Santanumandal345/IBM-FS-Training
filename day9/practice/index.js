// Add any interactive functionality here if needed
document.addEventListener("DOMContentLoaded", () => {
    // Carousel functionality
    const slides = document.querySelectorAll(".slide");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    document.querySelector(".prev").addEventListener("click", () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        showSlide(currentIndex);
    });

    document.querySelector(".next").addEventListener("click", () => {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        showSlide(currentIndex);
    });

    showSlide(currentIndex);

    // Form validation
    document.querySelector("form").addEventListener("submit", (e) => {
        e.preventDefault();
        const fromCity = document.querySelector("input[placeholder='From (City)']").value.trim();
        const toCity = document.querySelector("input[placeholder='To (City)']").value.trim();
        const date = document.querySelector("input[type='date']").value;

        if (fromCity === "" || toCity === "" || date === "") {
            alert("Please fill out all fields before searching.");
        } else {
            alert(`Searching flights from ${fromCity} to ${toCity} on ${date}`);
            // Here you can add API call or redirection logic
        }
    });
});
