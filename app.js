const url = 'https://api.jikan.moe/v3/top/anime'

fetch(url)
  .then(response => response.json())
  .then(grabInfo)

function grabInfo(animes) {
  animes.top.forEach(anime => {
    h1 = document.createElement('h1');
    img = document.createElement('img');
    p = document.createElement('p');

    h1.textContent = anime.title
    img.src = anime.image_url
    p.textContent = anime.score

    document.body.append(h1, img, p)
  });
}