const url = 'https://api.jikan.moe/v3/top/anime';
const main = document.createElement('div');
document.body.appendChild(main);
main.className = 'main'

fetch(url)
  .then(response => response.json())
  .then(animes => animes.top)
  .then(theGoodLog)
  .then(grabInfo)

function theGoodLog(oofta) {
  console.log(oofta)
  return oofta
}

function grabInfo(topAnimes) {
  topAnimes.map(anime => {
    bootstrapCard(anime)
  });
}

function bootstrapCard(anime) {
  divMain = document.createElement('div');
  img = document.createElement('img');

  divMain.className = 'card card-style'
  divMain.style.width = '14rem'
  img.className = 'card-img-top img-resize'

  divBody = document.createElement('div');
  h5 = document.createElement('h5');
  p = document.createElement('p');
  a = document.createElement('a');

  divBody.className = 'card-body'
  a.className = 'btn btn-primary btn-custom'
  h5.className = 'card-title'
  p.className = 'card-text'

  img.src = anime.image_url
  h5.textContent = anime.title
  p.textContent = `Rating: ${anime.score}`
  a.innerText = 'Myanimelist'
  a.href = anime.url

  divBody.append(h5, p, a)
  divMain.append(img, divBody)
  main.appendChild(divMain)
}