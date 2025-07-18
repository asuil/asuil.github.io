/*
https://elwiki.net/w/El_Search_Party_Collection

[...document.querySelectorAll("#mw-content-text > div > div:nth-child(19) > div.content-table > table > tbody > tr > td:nth-child(2) > span > a")].reduce((acc, cv) => {
  acc[cv.title] = cv.querySelector("img").src;
  return acc
}, {}) */

const icons = {
  "Knight Emperor": "https://elwiki.net/wiki/images/5/57/Icon_-_Knight_Emperor.png",
  "Rune Master": "https://elwiki.net/wiki/images/3/30/Icon_-_Rune_Master.png",
  "Immortal": "https://elwiki.net/wiki/images/c/c5/Icon_-_Immortal.png",
  "Genesis": "https://elwiki.net/wiki/images/7/7c/Icon_-_Genesis.png",
  "Aether Sage": "https://elwiki.net/wiki/images/f/f6/Icon_-_Aether_Sage.png",
  "Oz Sorcerer": "https://elwiki.net/wiki/images/0/0c/Icon_-_Oz_Sorcerer.png",
  "Metamorphy": "https://elwiki.net/wiki/images/4/4c/Icon_-_Metamorphy.png",
  "Lord Azoth": "https://elwiki.net/wiki/images/0/01/Icon_-_Lord_Azoth.png",
  "Anemos": "https://elwiki.net/wiki/images/2/21/Icon_-_Anemos.png",
  "Daybreaker": "https://elwiki.net/wiki/images/3/36/Icon_-_Daybreaker.png",
  "Twilight": "https://elwiki.net/wiki/images/0/09/Icon_-_Twilight.png",
  "Prophetess": "https://elwiki.net/wiki/images/6/6d/Icon_-_Prophetess.png",
  "Furious Blade": "https://elwiki.net/wiki/images/3/36/Icon_-_Furious_Blade.png",
  "Rage Hearts": "https://elwiki.net/wiki/images/3/32/Icon_-_Rage_Hearts.png",
  "Nova Imperator": "https://elwiki.net/wiki/images/f/f5/Icon_-_Nova_Imperator.png",
  "Revenant": "https://elwiki.net/wiki/images/f/f9/Icon_-_Revenant.png",
  "Code: Ultimate": "https://elwiki.net/wiki/images/e/ed/Icon_-_Code_Ultimate.png",
  "Code: Esencia": "https://elwiki.net/wiki/images/b/b8/Icon_-_Code_Esencia.png",
  "Code: Sariel": "https://elwiki.net/wiki/images/4/4c/Icon_-_Code_Sariel.png",
  "Code: Antithese": "https://elwiki.net/wiki/images/4/45/Icon_-_Code_Antithese.png",
  "Comet Crusader": "https://elwiki.net/wiki/images/0/0a/Icon_-_Comet_Crusader.png",
  "Fatal Phantom": "https://elwiki.net/wiki/images/1/1f/Icon_-_Fatal_Phantom.png",
  "Centurion": "https://elwiki.net/wiki/images/9/90/Icon_-_Centurion.png",
  "Dius Aer": "https://elwiki.net/wiki/images/1/1a/Icon_-_Dius_Aer.png",
  "Apsara": "https://elwiki.net/wiki/images/f/f2/Icon_-_Apsara.png",
  "Devi": "https://elwiki.net/wiki/images/5/59/Icon_-_Devi.png",
  "Shakti": "https://elwiki.net/wiki/images/d/df/Icon_-_Shakti.png",
  "Surya": "https://elwiki.net/wiki/images/a/a2/Icon_-_Surya.png",
  "Empire Sword": "https://elwiki.net/wiki/images/5/58/Icon_-_Empire_Sword.png",
  "Flame Lord": "https://elwiki.net/wiki/images/1/16/Icon_-_Flame_Lord.png",
  "Bloody Queen": "https://elwiki.net/wiki/images/c/c9/Icon_-_Bloody_Queen.png",
  "Adrestia": "https://elwiki.net/wiki/images/1/10/Icon_-_Adrestia.png",
  "Doom Bringer": "https://elwiki.net/wiki/images/9/9b/Icon_-_Doom_Bringer.png",
  "Dominator": "https://elwiki.net/wiki/images/6/6c/Icon_-_Dominator.png",
  "Mad Paradox": "https://elwiki.net/wiki/images/c/c3/Icon_-_Mad_Paradox.png",
  "Overmind": "https://elwiki.net/wiki/images/7/7e/Icon_-_Overmind.png",
  "Catastrophe": "https://elwiki.net/wiki/images/c/c7/Icon_-_Catastrophe.png",
  "Innocent": "https://elwiki.net/wiki/images/9/97/Icon_-_Innocent.png",
  "Diangelion": "https://elwiki.net/wiki/images/8/81/Icon_-_Diangelion.png",
  "Demersio": "https://elwiki.net/wiki/images/4/46/Icon_-_Demersio.png",
  "Tempest Burster": "https://elwiki.net/wiki/images/0/06/Icon_-_Tempest_Burster.png",
  "Black Massacre": "https://elwiki.net/wiki/images/7/7e/Icon_-_Black_Massacre.png",
  "Minerva": "https://elwiki.net/wiki/images/a/ae/Icon_-_Minerva.png",
  "Prime Operator": "https://elwiki.net/wiki/images/5/50/Icon_-_Prime_Operator.png",
  "Richter": "https://elwiki.net/wiki/images/e/e3/Icon_-_Richter.png",
  "Bluhen": "https://elwiki.net/wiki/images/7/7c/Icon_-_Bluhen.png",
  "Herrscher": "https://elwiki.net/wiki/images/1/18/Icon_-_Herrscher.png",
  "Opferung": "https://elwiki.net/wiki/images/8/84/Icon_-_Opferung.png",
  "Eternity Winner": "https://elwiki.net/wiki/images/d/d0/Icon_-_Eternity_Winner.png",
  "Radiant Soul": "https://elwiki.net/wiki/images/8/85/Icon_-_Radiant_Soul.png",
  "Nisha Labyrinth": "https://elwiki.net/wiki/images/d/df/Icon_-_Nisha_Labyrinth.png",
  "Twins Picaro": "https://elwiki.net/wiki/images/d/d4/Icon_-_Twins_Picaro.png",
  "Liberator": "https://elwiki.net/wiki/images/0/0d/Icon_-_Liberator.png",
  "Celestia": "https://elwiki.net/wiki/images/e/ef/Icon_-_Celestia.png",
  "Nyx Pieta": "https://elwiki.net/wiki/images/4/47/Icon_-_Nyx_Pieta.png",
  "Morpheus": "https://elwiki.net/wiki/images/c/c4/Icon_-_Morpheus.png",
  "Gembliss": "https://elwiki.net/wiki/images/1/14/Icon_-_Gembliss.png",
  "Avarice": "https://elwiki.net/wiki/images/e/ee/Icon_-_Avarice.png",
  "Achlys": "https://elwiki.net/wiki/images/8/87/Icon_-_Achlys.png",
  "Mischief": "https://elwiki.net/wiki/images/1/1c/Icon_-_Mischief.png"
};
