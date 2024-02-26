function generateGallery(hits) {
    return hits
      .map(
        ({
          webformatURL,
          largeImageURL,
          tags,
          likes,
          views,
          comments,
          downloads,
        }) =>
          `<li class="gallery-item">
              <a href=${largeImageURL}> 
                  <img class="gallery-image" src=${webformatURL} alt=${tags} />
              </a>
              <div class="gallery-text">
                  <p class="text-block">Likes: <span class="text-value">${likes}</span></p>
                  <p class="text-block">Views: <span class="text-value">${views}</span></p>
                  <p class="text-block">Comments: <span class="text-value">${comments}</span></p>
                  <p class="text-block">Downloads: <span class="text-value">${downloads}</span></p>
              </div>
        </li>`
      )
      .join('');
  galleryElement.innerHTML = galleryHTML;
  }
  
  