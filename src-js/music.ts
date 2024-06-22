import YTMusic from 'ytmusic-api';

async function fetchMusicSuggestions() {
    try {
        const api = new YTMusic();
        const results = await api.search('your search query', 'songs'); // Replace 'your search query' with your specific query

        // Process results and display on the page
        displayMusicSuggestions(results);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayMusicSuggestions(suggestions) {
    const musicSuggestionsContainer = document.getElementById('music-suggestions') as HTMLElement;
    musicSuggestionsContainer.innerHTML = ''; // Clear previous suggestions

    suggestions.forEach(item => {
        const title = item.title;
        const videoId = item.videoId;

        // Create HTML elements dynamically
        const suggestionElement = document.createElement('div');
        suggestionElement.classList.add('music-suggestion');

        const titleElement = document.createElement('p');
        titleElement.textContent = title;

        suggestionElement.appendChild(titleElement);
        if (musicSuggestionsContainer) {
            musicSuggestionsContainer.appendChild(suggestionElement);
        }
    });
}

// Call function to fetch music suggestions
fetchMusicSuggestions();