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
    price: 100,
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
  diamondElem.innerText = `Current Diamonds: ${diamonds}`
}

function drawTotalDiamondsCollected() {
  let totalDiamondsCollectElm = document.getElementById('total-diamonds-collected')
  totalDiamondsCollectElm.innerHTML = `<span class="fs-3">Total Collected:</span> <span id="clicker" class="mdi mdi-diamond-stone"></span> ${totalDiamondsCollected}`
}

function buyUpgrade(newUpgrade, upgradeThroughArray) {
  let newUpgrades = upgradeThroughArray.find(u => u.name == `${newUpgrade}`)
  if (diamonds >= newUpgrades.price) {
    newUpgrades.quantity += 1
    if (upgradeThroughArray == clickUpgrades) {
      perClick += newUpgrades.multiplier
    }
    if (upgradeThroughArray == automaticUpgrades) {
      intervalMineBlock += newUpgrades.multiplier
    }
    diamonds -= newUpgrades.price
    increasePrices(newUpgrade, upgradeThroughArray)
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
  drawPrices(newUpgrade, upgradeThroughArray)
}

function drawPrices(newUpgrade, upgradeThroughArray) {
  let increasingCost = upgradeThroughArray.find(upgrade => upgrade.name == `${newUpgrade}`)
  let diamondPickaxePriceElem = document.getElementById("diamond pickaxe")
  let netheritePickaxePriceElem = document.getElementById("netherite pickaxe")
  let villagerPriceElem = document.getElementById("villagerPrice")
  let ironGolemPriceElem = document.getElementById("iron golem")
  switch (increasingCost.name) {
    case 'diamondPickaxePrice':
      diamondPickaxePriceElem.innerText = increasingCost.price
      break
    case 'netheritePickaxePrice':
      netheritePickaxePriceElem.innerText = increasingCost.price
      break
    case 'villagerPrice':
      villagerPriceElem.innerText = increasingCost.price
      break
    case 'ironGolemPrice':
      ironGolemPriceElem.innerText = increasingCost.price
      break
  }
}

function drawMineBlock() {
  let perclick = document.getElementById('per-click')
  let intervalclick = document.getElementById('interval-click')

  perclick.innerHTML = `<span class="mdi mdi-cursor-pointer"></span> ${perClick}`
  intervalclick.innerHTML = `<span class="mdi mdi-account"></span> ${intervalMineBlock}`
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


function updateBoughtItems() {
  const diamondPickAxeElem = document.getElementById('diamondPickaxePrice')

}


function villagerMining() {
  let intervalMineBlock = setInterval(villagerMining, 3000)
  diamonds += intervalMineBlock
  totalDiamondsCollected += intervalMineBlock
  drawDiamonds()
  drawTotalDiamondsCollected()
}

drawTotalDiamondsCollected()
drawDiamonds()
drawMineBlock()
drawPlayerUpgrades()
updateBoughtItems()