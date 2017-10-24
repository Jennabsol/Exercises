// Grab home database from local stoage and place into object called newstoredInventory.

const newStoredInventory = JSON.parse(localStorage.getItem("homeInventory"))

const  eyeColor = {
    "name": "Eyeshadow",
    "type": "makeup",
    "location": "bathroom",
    "description": "I put this on my eyes!"
  }

  const babyBed = {
    "name": "Crib",
    "type": "furniture",
    "location": "guestroom",
    "description": "This is where Kekoa sleeps!"
  }

  const portableMusic= {
    "name": "Ipod",
    "type": "electronics",
    "location": "bedroom",
    "description": "Workout playlist!"
  }

  newStoredInventory.makeup.push(eyeColor)
  newStoredInventory.furniture.push(babyBed)
  newStoredInventory.electronics.push(portableMusic)

  console.log(newStoredInventory)

  const newStoredInventoryString = JSON.stringify(newStoredInventory)
  localStorage.setItem("newStoredInventory", newStoredInventoryString);
  
