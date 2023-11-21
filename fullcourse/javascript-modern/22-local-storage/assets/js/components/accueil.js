export default class Accueil extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
       <main class="max-w-7xl mt-8 mx-auto">
      <h1 class="text-4xl my-8">Ajouter un livre</h1>
      <form class="bg-white shadow-lg rounded p-8 grid grid-cols-3 gap-8">
        <div class="flex flex-col">
          <label for="name" class="text-sm font-bold mb-1">Nom du livre</label>
          <input type="text" id="name" name="name" class="border-2 rounded px-3 py-1">
        </div>
        <div class="flex flex-col">
          <label for="year" class="text-sm font-bold mb-1">Année du livre</label>
          <input type="number" id="year" name="year" class="border-2 rounded px-3 py-1">
        </div>
        <div class="flex flex-col">
          <label for="rating" class="text-sm font-bold mb-1">Note de 1 à 10</label>
          <input type="number" min="1" max="10" step="1" id="rating" name="rating" class="border-2 rounded px-3 py-1">
        </div>
        <div class="col-span-3 flex justify-center">
          <button type="submit" class="px-8 py-3 rounded-full bg-blue-600 duration-150 hover:bg-blue-700 text-white">Ajouter</button>
        </div>
      </form>
      <div id="list" class="mt-8">
        <div class="my-4 flex justify-end">
          <button type="button" id="deleteAllBooks" class="px-8 py-3 rounded-full bg-blue-600 duration-150 hover:bg-blue-700 text-white">Supprimer tous les livres</button>
        </div>
      </div>
    </main>
    `;
  }
}
