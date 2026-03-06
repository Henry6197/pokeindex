// ── PROVIDED STARTER CODE — do not modify ──────────────────
async function fetchData() {
  try {
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }
    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");
    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";
  } catch (error) {
    console.error(error);
  }
}
function handleSearch() {
  const pokemonInput = document.getElementById("pokemonName");
  const errorMessage = document.getElementById("errorMessage");
  const imgElement = document.getElementById("pokemonSprite");
  const pokemonName = pokemonInput.value.trim();
  if (!pokemonName) {
    errorMessage.textContent = "Please enter a Pokemon name.";
    return;
  }
  if (pokemonName.length > 30) {
    errorMessage.textContent = "Pokemon name must be 30 characters or fewer.";
    return;
  }
  if (!/^[a-zA-Z]+$/.test(pokemonName)) {
    errorMessage.textContent = "Pokemon name can only contain letters.";
    return;
  }
  imgElement.style.display = "none";
  errorMessage.textContent = "";
  fetchData();
}
const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", handleSearch);
