let diamonds = 0;

let clickUpgrades = [
  {
    name: 'diamond pickaxe',
    price: 10,
    quantity: 0,
    multiplier: 1
  },
  {
    name: 'netherite pickaxe',
    price: 25,
    quantity: 0,
    multiplier: 5
  }
]

let automaticUpgrades = [
  {
    name: 'villager',
    price: 25,
    quantity: 0,
    multiplier: 10
  },
  {
    name: 'iron golem',
    price: 30,
    quantity: 0,
    multiplier: 50
  }
]

function mineBlock(amount) {
  diamonds += amount

  drawDiamonds()
}

function drawDiamonds() {
  const diamondElem = document.getElementById('diamond-count')
  diamondElem.innerText = `${diamonds}`
}


function buyDiamondPickaxe(pickaxes) {
  if (diamonds < 10) {
    window.alert("You don't have enough diamonds!")
  } else {
    const numberOfPickaxes = clickUpgrades.filter(p => p.quantity)
    pickaxes += numberOfPickaxes
    console.log('purchased')
    console.log(pickaxes)
    diamonds -= 10

    const increasePickaxeElem = document.getElementById('increase-pickaxe')
    increasePickaxeElem.innerText = `${pickaxes}`
  }

  drawDiamonds()
}