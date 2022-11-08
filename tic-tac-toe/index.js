class Player {
  constructor(name, icon, turn) {
    this.name = name;
    this.icon = icon;
    this.turn = turn;
  }

  changeTurn() {
    this.turn = !this.turn;
  }
}

class Block {
  constructor(index) {
    this.owner = null;
    this.index = index;
  }

  setOwner(playerName) {
    this.owner = playerName;
  }
}

const player1 = new Player("player1", "O", true);
const player2 = new Player("player2", "X", false);

const winningCombos = [
  //Horizontal
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  //Vertical
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  //Diagonal
  [0, 4, 8],
  [2, 4, 6]

]

const blockPlacements = [
  [new Block(0), new Block(1), new Block(2)],
  [new Block(3), new Block(4), new Block(5)],
  [new Block(6), new Block(7), new Block(8)],
];

const board = document.getElementById("board");

function clickOnBox(event, block) {
  const blockEl = event.target;

  if (player1.turn) {
    block.setOwner(player1.name);
    blockEl.innerText = player1.icon;
  } else {
    block.setOwner(player2.name);
    blockEl.innerText = player2.icon;
  }

  const didPlayer1Win = checkForWinner(player1);
  const didPlayer2Win = checkForWinner(player2);

  if (!didPlayer1Win && !didPlayer2Win) {
    player1.changeTurn();
    player2.changeTurn();
  }

}

for (let i = 0; i < blockPlacements.length; i++) {
  const blockRow = blockPlacements[i];
  const newRow = document.createElement("div");

  newRow.setAttribute("id", "row");
  board.appendChild(newRow);

  for (let j = 0; j < blockRow.length; j++) {
    const newBlock = document.createElement("div");

    newBlock.setAttribute("id", "block");

    newBlock.addEventListener("click", function(event) {
      clickOnBox(event, blockRow[j]);
    });

    newRow.appendChild(newBlock);
  }
}

function checkForWinner(player) {
  let possibleWinningCombo = [];
  let didPlayerWin = false;
  for (let i = 0; i < blockPlacements.length; i++) {
    let currentRow = blockPlacements[i];

    let currentRowWithPlayer = currentRow.filter(function(block) {
      return block.owner === player.name;
    }).map(function(block) {
      return block.index;
    })

    possibleWinningCombo.push(currentRowWithPlayer);
  }

  didPlayerWin = winningCombos.some(function(combo) {
    let pCombos = possibleWinningCombo.filter(pCombo => {
      return pCombo.length >= 1;
    })
    if (pCombos.length > 2) {
      return pCombos.every(function(pCombo, pIndex) {
        return pCombo.includes(combo[pIndex]);
      });
    } else {
      if (pCombos[0] && pCombos[0].length === 3) {
        return pCombos[0].every(function(innerPCombo, i) {
          return innerPCombo == combo[i]
        });
      } else {
        return false;
      }
    }
  });
  console.log(`${player.name} win?`, didPlayerWin);

  return didPlayerWin;

}

