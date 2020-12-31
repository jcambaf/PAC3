/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+(function () {
  const botonMenu = document.querySelector('#boton-menu');
  const menu = document.querySelector('#menu');

  botonMenu.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });
})();
