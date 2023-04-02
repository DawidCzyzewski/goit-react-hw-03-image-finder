// Komponent przyjmuje jeden props onSubmit - funkcję dla przekazania wartości input przy submicie formularza. Tworzy element DOM o następującej strukturze:

<header class="searchbar">
  <form class="form">
    <button type="submit" class="button">
      <span class="button-label">Search</span>
    </button>

    <input
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>;
