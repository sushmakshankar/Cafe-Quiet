// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const filterSelect = document.getElementById('filterSelect');
const resultsContainer = document.getElementById('resultsContainer');
const loadingIndicator = document.getElementById('loadingIndicator');
const errorMessage = document.getElementById('errorMessage');

// API Config
const API_URL = 'https://api.outscraper.cloud/maps/search-v3';
const API_KEY = 
curl -X GET "https://api.outscraper.cloud/maps/search-v3?query=restaurants%2C%20Manhattan%2C%20NY%2C%20USA&limit=3&async=false" -H  "X-API-KEY: YOUR-API-KEY"

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  fetchDefaultData();
  searchButton.addEventListener('click', performSearch);
  filterSelect.addEventListener('change', applyFilter);
});
