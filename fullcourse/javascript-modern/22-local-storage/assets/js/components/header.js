export default class Header extends HTMLElement {
  connectedCallback() {
    const current = this.getAttribute('current');
    console.log(current);
    this.innerHTML = `<header class="mt-8 rounded max-w-7xl mx-auto p-8 shadow-lg bg-cyan-400">
        <nav class="flex items-center justify-between">
        <img src="./logo.png" alt="" class="w-24">
        <ul class="flex">
          <li class="mr-8">
            <a href="./" class=" ${
              current !== 'home' ? 'text-gray-600' : 'text-red-600'
            } font-bold">
              Accueil
            </a>
          </li>
          <li>
            <a href="./list-of-books.html" class="${
              current !== 'list' ? 'text-purple-600' : 'text-red-600'
            } font-bold">
              Liste des livres
            </a>
          </li>
        </ul>
      </nav>
    </header>`;
  }
}
