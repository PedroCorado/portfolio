function typeWriter(elemento) {
  const textoOriginal = elemento.innerHTML;
  const textoSemQuebrasDeLinha = textoOriginal.replace(/<br\s*\/?>/gi, ' ');

  const textoArray = textoSemQuebrasDeLinha.split('');
  elemento.innerHTML = '';
  textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 150 * i);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const titulo = document.querySelector('.home-texto h1');
  typeWriter(titulo);
  
  var h1Element = document.querySelector('.home-texto h1');
  
  function disableBlinkEffect() {
      h1Element.classList.add('disable-blink');
  }
  
  setTimeout(disableBlinkEffect, 15000);
});

window.addEventListener('scroll', function () {
  const header = document.querySelector('.header');
  if (window.scrollY > 0) {
      header.classList.add('shadow');
  } else {
      header.classList.remove('shadow');
  }
});

