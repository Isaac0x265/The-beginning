let route = {
  '2': './second.html',
  'home': 'index.html',
  '3': './third.html', // Certifique-se de que o caminho está correto. Anteriormente estava './third'.
};

function changeScreen(event) {
  event.preventDefault();
  let pathName = event.target.getAttribute('href');
  let page;
  window.history.pushState({}, '', pathName);

  if (pathName === 'index.html') {
    page = route['home'];
    console.log('entrou no home');
  }
  else if (pathName === '2') {
    console.log('entrou no /2');
    page = route['2'];
  }
  else if (pathName === '/3') {
    console.log('entrou no /3');
    page = route['3'];
  }
  else {
    throw new Error('que porra é essa ');
  }
  console.log('entrou nessa porra caralho');
  fetch(page).then(data => data.text()).then(html => { // Corrigido para usar `page` em vez de `route[page]`.
      document.querySelector('body').innerHTML = html;
  }).catch(error => {
      console.error('Erro ao carregar a página:', error);
  });
}

function home() {
  let pathName = window.location.pathname;
  let page = pathName === '/' ? 'home' : pathName.substring(1); // Isso pode causar um problema dependendo do que exatamente está em pathname.
  fetch(route[page]).then(data => data.text()).then(html => { // Certifique-se de que `route[page]` está correto e definido.
      document.querySelector('body').innerHTML = html;
  }).catch(error => {
      console.error('Erro ao carregar a página:', error);
  });
}

window.addEventListener('popstate', home);
