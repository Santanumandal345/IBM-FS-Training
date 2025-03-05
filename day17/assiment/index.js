// Search Functionality
const searchBar = document.getElementById('search-bar');
const searchBtn = document.getElementById('search-btn');
const videoGrid = document.getElementById('video-grid');
const videoCards = document.querySelectorAll('.video-card');

// Function to filter videos based on search query
function filterVideos(query) {
  videoCards.forEach((card) => {
    const title = card.getAttribute('data-title').toLowerCase();
    if (title.includes(query.toLowerCase())) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Search on button click
searchBtn.addEventListener('click', () => {
  const query = searchBar.value.trim();
  if (query) {
    filterVideos(query);
  } else {
    videoCards.forEach((card) => (card.style.display = 'block'));
  }
});

// Debounced search on input
let debounceTimer;
searchBar.addEventListener('input', () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    const query = searchBar.value.trim();
    if (query) {
      filterVideos(query);
    } else {
      videoCards.forEach((card) => (card.style.display = 'block'));
    }
  }, 300);
});