const characters = [
  "Knight Emperor",
  "Rune Master",
  "Immortal",
  "Genesis",
  "Aether Sage",
  "Oz Sorcerer",
  "Metamorphy",
  "Lord Azoth",
  "Anemos",
  "Daybreaker",
  "Twilight",
  "Prophetess",
  "Furious Blade",
  "Rage Hearts",
  "Nova Imperator",
  "Revenant",
  "Code: Ultimate",
  "Code: Esencia",
  "Code: Sariel",
  "Code: Antithese",
  "Comet Crusader",
  "Fatal Phantom",
  "Centurion",
  "Dius Aer",
  "Apsara",
  "Devi",
  "Shakti",
  "Surya",
  "Empire Sword",
  "Flame Lord",
  "Bloody Queen",
  "Adrestia",
  "Doom Bringer",
  "Dominator",
  "Mad Paradox",
  "Overmind",
  "Catastrophe",
  "Innocent",
  "Diangelion",
  "Demersio",
  "Tempest Burster",
  "Black Massacre",
  "Minerva",
  "Prime Operator",
  "Richter",
  "Bluhen",
  "Herrscher",
  "Opferung",
  "Eternity Winner",
  "Radiant Soul",
  "Nisha Labyrinth",
  "Twins Picaro",
  "Liberator",
  "Celestia",
  "Nyx Pieta",
  "Morpheus",
  "Gembliss",
  "Avarice",
  "Achlys",
  "Mischief",
]

const baseUrl = "https://elwiki.net/w/"

function fetchAttackType(characterName) {
  const url = `${baseUrl}${characterName.replace(" ", "_")}`
  console.log(`Started fetching ${url}`)
  return fetch(url).then(response => response.text()).then((htmlString) => {
    const isPhysical = htmlString.search("<span>Physical") !== -1;
    if (isPhysical) {
      return [characterName, "Physical"]
    }
    const isMagical = htmlString.search("<span>Magical") !== -1;
    if (isMagical) {
      return [characterName, "Magical"]
    }
    return [characterName, "Unknown"];
  });
};

Promise.all(characters.map(fetchAttackType)).then((attackTypes) => {
  console.log(attackTypes);
});
