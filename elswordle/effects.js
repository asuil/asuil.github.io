/* 
https://elwiki.net/w/El_Search_Party_Collection

[...document.querySelectorAll("#mw-content-text > div > div:nth-child(19) > div.content-table > table > tbody > tr:not(:nth-child(1)):not(:nth-child(2))")].reduce((acc, tr) => {
  const name = tr.querySelector("td:nth-child(2) > span > a").title
  const effect1 = tr.querySelector("td:nth-child(8)").innerText.trim()
  const effect2 = tr.querySelector("td:nth-child(9)").innerText.trim()
  const effect3 = tr.querySelector("td:nth-child(10)").innerText.trim()
  
  acc[name] = {
    [effect1]: true,
    [effect2]: true,
    [effect3]: true,
  };
  
  return acc
}, {}) */

const effects = {
  "Knight Emperor": {
      "1st Path": true,
      "Instinctual Movement": true,
      "Bringer of Justice": true
  },
  "Rune Master": {
      "2nd Path": true,
      "Attribute Master": true,
      "Magical Specialist": true
  },
  "Immortal": {
      "3rd Path": true,
      "Agile": true,
      "Titan Slayer": true
  },
  "Genesis": {
      "4th Path": true,
      "Sharp": true,
      "Bringer of Justice": true
  },
  "Aether Sage": {
      "1st Path": true,
      "Researcher": true,
      "Attribute Master": true
  },
  "Oz Sorcerer": {
      "2nd Path": true,
      "Blessing of Mana": true,
      "One Who Yearns": true
  },
  "Metamorphy": {
      "3rd Path": true,
      "Physical Specialist": true,
      "Time and Space": true
  },
  "Lord Azoth": {
      "4th Path": true,
      "Researcher": true,
      "One Who Yearns": true
  },
  "Anemos": {
      "1st Path": true,
      "Blessing of Spirit": true,
      "Agile": true
  },
  "Daybreaker": {
      "2nd Path": true,
      "Blessing of Spirit": true,
      "Sharp": true
  },
  "Twilight": {
      "3rd Path": true,
      "Blessing of Spirit": true,
      "Physical Specialist": true
  },
  "Prophetess": {
      "4th Path": true,
      "Blessing of Spirit": true,
      "Magical Specialist": true
  },
  "Furious Blade": {
      "1st Path": true,
      "Instinctual Movement": true,
      "Agile": true
  },
  "Rage Hearts": {
      "2nd Path": true,
      "Magical Specialist": true,
      "Fist Fight": true
  },
  "Nova Imperator": {
      "3rd Path": true,
      "It's Fine Cuz It Hurts": true,
      "Titan Slayer": true
  },
  "Revenant": {
      "4th Path": true,
      "One Who Yearns": true,
      "Physical Specialist": true
  },
  "Code: Ultimate": {
      "1st Path": true,
      "Nasod Research": true,
      "Sharp": true
  },
  "Code: Esencia": {
      "2nd Path": true,
      "Nasod Research": true,
      "Researcher": true
  },
  "Code: Sariel": {
      "3rd Path": true,
      "Nasod Research": true,
      "Angel of the Battlefield": true
  },
  "Code: Antithese": {
      "4th Path": true,
      "Sharp": true,
      "Distorted Gaze": true
  },
  "Comet Crusader": {
      "1st Path": true,
      "Bringer of Justice": true,
      "Attribute Master": true
  },
  "Fatal Phantom": {
      "2nd Path": true,
      "Agile": true,
      "Magical Specialist": true
  },
  "Centurion": {
      "3rd Path": true,
      "Researcher": true,
      "Titan Slayer": true
  },
  "Dius Aer": {
      "4th Path": true,
      "It's Fine Cuz It Hurts": true,
      "Angel of the Battlefield": true
  },
  "Apsara": {
      "1st Path": true,
      "Bringer of Justice": true,
      "Accomplished Steps": true
  },
  "Devi": {
      "2nd Path": true,
      "One Who Yearns": true,
      "Abundant Steps": true
  },
  "Shakti": {
      "3rd Path": true,
      "Blessing of Mana": true,
      "Adept Steps": true
  },
  "Surya": {
      "4th Path": true,
      "It's Fine Cuz It Hurts": true,
      "Step of Communion": true
  },
  "Empire Sword": {
      "1st Path": true,
      "Instinctual Movement": true,
      "Bringer of Justice": true
  },
  "Flame Lord": {
      "2nd Path": true,
      "Attribute Master": true,
      "Sharp": true
  },
  "Bloody Queen": {
      "3rd Path": true,
      "It's Fine Cuz It Hurts": true,
      "One Who Yearns": true
  },
  "Adrestia": {
      "4th Path": true,
      "Agile": true,
      "Sharp": true
  },
  "Doom Bringer": {
      "1st Path": true,
      "Magical Specialist": true,
      "Fist Fight": true
  },
  "Dominator": {
      "2nd Path": true,
      "Researcher": true,
      "Nasod Research": true
  },
  "Mad Paradox": {
      "3rd Path": true,
      "Time and Space": true,
      "One Who Yearns": true
  },
  "Overmind": {
      "4th Path": true,
      "Researcher": true,
      "Physical Specialist": true
  },
  "Catastrophe": {
      "1st Path": true,
      "Demon": true,
      "Physical Specialist": true
  },
  "Innocent": {
      "2nd Path": true,
      "Demon": true,
      "Sharp": true
  },
  "Diangelion": {
      "3rd Path": true,
      "Demon": true,
      "One Who Yearns": true
  },
  "Demersio": {
      "4th Path": true,
      "Demon": true,
      "It's Fine Cuz It Hurts": true
  },
  "Tempest Burster": {
      "1st Path": true,
      "Sharp": true,
      "Titan Slayer": true
  },
  "Black Massacre": {
      "2nd Path": true,
      "Physical Specialist": true,
      "One Who Yearns": true
  },
  "Minerva": {
      "3rd Path": true,
      "Agile": true,
      "Angel of the Battlefield": true
  },
  "Prime Operator": {
      "4th Path": true,
      "Mechanical Engineering": true,
      "Researcher": true
  },
  "Richter": {
      "1st Path": true,
      "Bringer of Justice": true,
      "Titan Slayer": true
  },
  "Bluhen": {
      "2nd Path": true,
      "Magical Specialist": true,
      "It's Fine Cuz It Hurts": true
  },
  "Herrscher": {
      "3rd Path": true,
      "Time and Space": true,
      "One Who Yearns": true
  },
  "Opferung": {
      "4th Path": true,
      "One Who Yearns": true,
      "Distorted Gaze": true
  },
  "Eternity Winner": {
      "1st Path": true,
      "Fist Fight": true,
      "Sharp": true
  },
  "Radiant Soul": {
      "2nd Path": true,
      "Blessing of Mana": true,
      "It's Fine Cuz It Hurts": true
  },
  "Nisha Labyrinth": {
      "3rd Path": true,
      "Physical Specialist": true,
      "Laby's Friend": true
  },
  "Twins Picaro": {
      "4th Path": true,
      "Magical Specialist": true,
      "Master of Pranks": true
  },
  "Liberator": {
      "1st Path": true,
      "Agile": true,
      "Physical Specialist": true
  },
  "Celestia": {
      "2nd Path": true,
      "Researcher": true,
      "Titan Slayer": true
  },
  "Nyx Pieta": {
      "3rd Path": true,
      "It's Fine Cuz it Hurts": true,
      "Sharp": true
  },
  "Morpheus": {
      "4th Path": true,
      "Titan Slayer": true,
      "Distorted Gaze": true
  },
  "Gembliss": {
      "1st Path": true,
      "Nasod Research": true,
      "Titan Slayer": true
  },
  "Avarice": {
      "2nd Path": true,
      "Physical Specialist": true,
      "It's Fine Cuz It Hurts": true
  },
  "Achlys": {
      "3rd Path": true,
      "Magical Specialist": true,
      "Sharp": true
  },
  "Mischief": {
      "4th Path": true,
      "One Who Yearns": true,
      "Distorted Gaze": true
  }
};
