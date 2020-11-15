/*
  This list gives the ids of all the great houses that we want to look up.
  It should be inserted into the html above all the other files to ensure it is available
*/
const houseIdList = [
    7, // Eyrie
    17, // Baratheon
    169, // Greyjoy
    229, // Lannister
    362, // Stark
    378, // Targaryen
    395, // Tully
    398, // Tyrell
];
function basicStructure(title, name) {
  const layout = `<div class="got-house">
            <h1 class="got-house__title">${title}</h1>
            <span class="got-house__current-lord">${name}</span>
        </div>`
  document.body.innerHTML += layout;
}
let gameofthrones = [];
function gameApp() {
  houseIdList.forEach((element, key) => {
    fetch(`https://anapioficeandfire.com/api/houses/${element}`)

      .then(response => response.json())
      .then(data => {
        fetch(`https://anapioficeandfire.com/api/characters/${element}`)
          .then(response => response.json())
          .then(ret => {
            gameofthrones.push({
              title: data.name
              , currentLord: data.currentLord
              , swornMembers: data.swornMembers,
              name: ret.name
            });
            if (ret.name.length === 0) {
              let randomSworn = Math.floor(Math.random() * parseInt(data.swornMembers.length));
              let newName = '';
              fetch(`${data.swornMembers[randomSworn]}`)
                .then(response => response.json())
                .then(result => {
                  newName = result.name;
                  document.querySelector('.got-house__current-lord').innerHTML = newName;
                });
            }
            basicStructure(data.name, ret.name);
          });
      });
  })  
}
gameApp();

const killButton = document.getElementById('kill-random-lord-button');

killButton.addEventListener('click', killLord)
function killLord() {
  let randomNum = Math.floor(Math.random() * parseInt(gameofthrones.length));
  let randomSworn = Math.floor(Math.random() * parseInt(data.swornMembers.length));
  fetch(`${gameofthrones[randomNum].swornMembers[randomSworn]}`)
    .then(response => response.json())
    .then(result => {
      document.querySelector('.got-house__current-lord').innerHTML = result.name;
    }); 
}