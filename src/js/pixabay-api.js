const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '42139525-c14302dd397ed074e72a8f596';

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  cardContainer.innerHTML = '';

  const query = event.currentTarget.elements.query.value.trim();
  if (!query) {
    handleNoImages();
    return;
  }
