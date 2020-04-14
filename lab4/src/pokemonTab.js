window.addEventListener("DOMContentLoaded", () => {
    const tab = document.getElementById("pokemon-tab");
    tab.addEventListener("click", loadPokemonTab);
});

async function loadPokemonTab(e) {
    const navLink = e.target;
    const tabPane = document
        .getElementById(`${navLink.getAttribute("aria-controls")}`);
    
    let response;

    try {
        response = await fetch("https://pokeapi.co/api/v2/pokemon/321/");
    }
    catch(error) {
        console.error(error)
        tabPane.innerHTML = "<p>Ошибка при запросе покемона</p>";
        return;
    }
    if (!response.ok) {
        tabPane.innerHTML = "<p>Покемоны не отвечают</p>"
        return;
    }
    const pokemon = await response.json();
    let effects = [];
    let lost = [];

    let promises = [];
    const fetchAbility = (i) => {
        return fetch(pokemon.abilities[i].ability.url)
            .then((response) => response.json())
            .then((data) => {
                data.effect_entries.forEach(entry => effects.push(`<li><b>${data.name}:</b> ${entry.effect}</li>`))
                })
            .catch((error) => {
            lost.push(`<b>${pokemon.abilities[i].ability.name}</b>`)
            });
    }
    for (var i = 0; i < pokemon.abilities.length; i++) {
        promises.push(fetchAbility(i));
    }
    for (var i = 0; i < pokemon.abilities.length; i++) {
        await(promises[i]);
    }
    tabPane.innerHTML =
        `<h2>Покемон ${pokemon.name}</h2>\n` +
        `<h3>Способности</h3>` +
        `<ul>\n` + 
        effects.join("\n") +
        `</ul>\n` +
        `${lost.length > 0 ? `<p>Потерялись детали о ${lost.join(", ")}.` : ""}`;
}
