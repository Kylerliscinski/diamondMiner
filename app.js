let diamonds = 0


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

let perClick = 1
let intervalMineBlock = 0
let totalDiamondsCollected = 0

function mineBlock() {
  diamonds += perClick
  totalDiamondsCollected += perClick
  drawDiamonds()
}

function drawDiamonds() {
  const diamondElem = document.getElementById('diamond-count')
  diamondElem.innerText = `${diamonds}`
}

function drawTotalDiamondsCollected() {
  let totalDiamondsCollectElm = document.getElementById('total-diamonds-collected')
  totalDiamondsCollectElm.innerHTML = `${totalDiamondsCollected}`
}

function buyUpgrade(boughtUpgrade, upgradeThroughArray) {
  let newUpgrades = upgradeThroughArray.find(u => u.name == `${boughtUpgrade}`)
  if (diamonds >= newUpgrades.price) {
    newUpgrades.quantity += 1
    if (upgradeThroughArray == clickUpgrades) {
      perClick += newUpgrades.multiplier
    }
    if (upgradeThroughArray == automaticUpgrades) {
      intervalMineBlock += newUpgrades.multiplier
    }
    diamonds -= newUpgrades.price
    increasePrices(boughtUpgrade, upgradeThroughArray)
  } else {
    window.alert("You don't have enough gold!")
  }
  drawDiamonds()
  drawMineBlock()
  drawPlayerUpgrades()
}

function increasePrices(newUpgrade, upgradeThroughArray) {
  let increasingCost = upgradeThroughArray.find(u => u.name == `${newUpgrade}`)
  increasingCost.price += increasingCost.quantity
  console.log(increasingCost.name, 'increased to', increasingCost.price)
  drawPrices(newUpgrade, upgradeThroughArray)
}

function drawPrices(newUpgrade, upgradeThroughArray) {
  let increasingCost = upgradeThroughArray.find(upgrade => upgrade.name == `${newUpgrade}`)
  let diamondPickaxePriceElem = document.getElementById("diamond pickaxe")
  let netheritePickaxePriceElem = document.getElementById("netherite pickaxe")
  let villagerPriceElem = document.getElementById("villager")
  let ironGolemPriceElem = document.getElementById("iron golem")
  switch (increasingCost.name) {
    case 'diamond pickaxe':
      diamondPickaxePriceElem.innerText = increasingCost.price
      break
    case 'netherite pickaxe':
      netheritePickaxePriceElem.innerText = increasingCost.price
      break
    case 'villager':
      villagerPriceElem.innerText = increasingCost.price
      break
    case 'iron golem':
      ironGolemPriceElem.innerText = increasingCost.price
      break
  }
}

function drawMineBlock() {
  let perClick = document.getElementById('per-click')
  let intervalClick = document.getElementById('interval-click')

  perClick.innerHTML = `${perClick.toString()}`
  intervalClick.innerHTML = `${intervalClick.toString()}`
}

function drawPlayerUpgrades() {
  let diamondPickAxeElem = document.getElementById('current-diamond-pickaxe-upgrades')
  let netheritePickaxeElem = document.getElementById('current-netherite-pickaxe-upgrades')
  let villagerElem = document.getElementById('current-villager-upgrades')
  let ironGolemElem = document.getElementById('current-iron-golem-upgrades')

  clickUpgrades.forEach(purchasedUpgrades => {
    if (purchasedUpgrades.name == 'diamond pickaxe') {
      diamondPickAxeElem.innerText = ` ${purchasedUpgrades.quantity}`
    }
    if (purchasedUpgrades.name == 'netherite pickaxe') {
      netheritePickaxeElem.innerText = ` ${purchasedUpgrades.quantity}`
    }
  })

  automaticUpgrades.forEach(purchasedUpgrades => {
    if (purchasedUpgrades.name == 'villager') {
      villagerElem.innerText = ` ${purchasedUpgrades.quantity}`
    }
    if (purchasedUpgrades.name == 'iron golem') {
      ironGolemElem.innerText = ` ${purchasedUpgrades.quantity}`
    }
  })
}

let interval = setInterval(villagerMining, 3000)
function villagerMining() {
  diamonds += interval
  totalDiamondsCollected += interval
  drawDiamonds()
  drawTotalDiamondsCollected()
}

drawTotalDiamondsCollected()
drawDiamonds()
drawMineBlock()
drawPlayerUpgrades()