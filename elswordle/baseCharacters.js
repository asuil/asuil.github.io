/* 
https://elwiki.net/w/3rd_Jobs

[...document.querySelectorAll("#mw-content-text > div > div:nth-child(32) > div.content-table > table > tbody > tr > td")].reduce((acc, td) => {
    const name = td.querySelector("table > tbody > tr:nth-child(1)").innerText
    const path1 = td.querySelector("table > tbody > tr:nth-child(2) > td:nth-child(2) > a").title.trim()
    const path2 = td.querySelector("table > tbody > tr:nth-child(3) > td:nth-child(2) > a").title.trim()
    const path3 = td.querySelector("table > tbody > tr:nth-child(4) > td:nth-child(2) > a").title.trim()
    const path4 = td.querySelector("table > tbody > tr:nth-child(5) > td:nth-child(2) > a").title.trim()
    
    acc[path1] = name;
    acc[path2] = name;
    acc[path3] = name;
    acc[path4] = name;
    
    return acc
}, {})
 */

const baseCharacters = {
  "Knight Emperor": "Elsword",
  "Rune Master": "Elsword",
  "Immortal": "Elsword",
  "Genesis": "Elsword",
  "Aether Sage": "Aisha",
  "Oz Sorcerer": "Aisha",
  "Metamorphy": "Aisha",
  "Lord Azoth": "Aisha",
  "Anemos": "Rena",
  "Daybreaker": "Rena",
  "Twilight": "Rena",
  "Prophetess": "Rena",
  "Furious Blade": "Raven",
  "Rage Hearts": "Raven",
  "Nova Imperator": "Raven",
  "Revenant": "Raven",
  "Code: Ultimate": "Eve",
  "Code: Esencia": "Eve",
  "Code: Sariel": "Eve",
  "Code: Antithese": "Eve",
  "Comet Crusader": "Chung",
  "Fatal Phantom": "Chung",
  "Centurion": "Chung",
  "Dius Aer": "Chung",
  "Apsara": "Ara",
  "Devi": "Ara",
  "Shakti": "Ara",
  "Surya": "Ara",
  "Empire Sword": "Elesis",
  "Flame Lord": "Elesis",
  "Bloody Queen": "Elesis",
  "Adrestia": "Elesis",
  "Doom Bringer": "Add",
  "Dominator": "Add",
  "Mad Paradox": "Add",
  "Overmind": "Add",
  "Catastrophe": "Lu/Ciel",
  "Innocent": "Lu/Ciel",
  "Diangelion": "Lu/Ciel",
  "Demersio": "Lu/Ciel",
  "Tempest Burster": "Rose",
  "Black Massacre": "Rose",
  "Minerva": "Rose",
  "Prime Operator": "Rose",
  "Richter": "Ain",
  "Bluhen": "Ain",
  "Herrscher": "Ain",
  "Opferung": "Ain",
  "Eternity Winner": "Laby",
  "Radiant Soul": "Laby",
  "Nisha Labyrinth": "Laby",
  "Twins Picaro": "Laby",
  "Liberator": "Noah",
  "Celestia": "Noah",
  "Nyx Pieta": "Noah",
  "Morpheus": "Noah",
  "Gembliss": "Lithia",
  "Avarice": "Lithia",
  "Achlys": "Lithia",
  "Mischief": "Lithia"
};

const pathsPerBase = Object.entries(baseCharacters).reduce((acc, [path, base]) => {
  if (base in acc) {
    acc[base].push(path);
  } else {
    acc[base] = [path];
  }
  return acc;
}, {});
