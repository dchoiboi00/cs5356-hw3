// Navbar
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});

// YouTube Search Functionality
document.getElementById('searchButton').addEventListener('click', function () {
    const query = document.getElementById('searchQuery').value;
    if (query) {
      searchYouTube(query);
    } else {
      alert("Please enter a search term.");
    }
  });
  
  async function searchYouTube(query) {
    const apiKey = 'AIzaSyCnXV6xVjysQpbXg9A4FnI1pandrFuoA_g'; // Replace with your API key
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&type=video&maxResults=1&key=${apiKey}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      
      if (data.items && data.items.length > 0) {
        const videoId = data.items[0].id.videoId;
        document.getElementById('videoIframe').src = `https://www.youtube.com/embed/${videoId}`;
      } else {
        alert("No results found for your search.");
      }
    } catch (error) {
      console.error("Error fetching YouTube data:", error);
    }
  }