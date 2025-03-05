// document.addEventListener("DOMContentLoaded", function () {
//     const videoContainer = document.getElementById("video-list");

//     async function fetchVideos() {
//         try {
//             const response = await fetch("https://fakestoreapi.com/products"); // Replace with actual video API
//             const videos = await response.json();
//             displayVideos(videos);
//         } catch (error) {
//             console.error("Error fetching videos:", error);
//         }
//     }

//     function displayVideos(videos) {
//         videoContainer.innerHTML = videos.map(video => `
//             <div class="video">
//                 <img src="${video.image}" alt="${video.title}">
//                 <h3>${video.title}</h3>
//                 <p>${video.description}</p>
//             </div>
//         `).join("");
//     }

//     fetchVideos();
// });
/* General Styles */
// Search Functionality
const searchBar = document.getElementById('search-bar');
const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', () => {
  const query = searchBar.value;
  if (query) {
    alert(`Searching for: ${query}`);
    // You can add logic to filter videos based on the search query
  }
});

// Debounced Search
let debounceTimer;
searchBar.addEventListener('input', () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    const query = searchBar.value;
    console.log(`Debounced search for: ${query}`);
    // Add logic to filter videos dynamically
  }, 300);
});