const lunches = ["apple", "banana"];

function addLunchToEnd(lunches, newLunch) {
  lunches.push(newLunch);
  console.log(`${newLunch} added to the end of the lunch menu.`);
  return lunches;
}

addLunchToEnd(lunches, "melon");

function addLunchToStart(lunches, newLunch) {
  lunches.unshift(newLunch);
  console.log(`${newLunch} added to the start of the lunch menu.`);
  return lunches;
}

addLunchToStart(lunches, "cocomelon");

function removeLastLunch(lunches) {
  const removedLunch = lunches.pop();
  if (removedLunch) {
    console.log(`${removedLunch} removed from the end of the lunch menu.`);
  } else {
    console.log("No lunches to remove.");
  }
  return lunches;
}

removeLastLunch(lunches);

function removeFirstLunch(lunches) {
  const removedLunch = lunches.shift();
  if (removedLunch) {
    console.log(`${removedLunch} removed from the start of the lunch menu.`);
  } else {
    console.log("No lunches to remove.");
  }
  return lunches;
}

removeFirstLunch(lunches);

function getRandomLunch(lunches) {
  if (lunches.length === 0) {
    console.log("No lunches available.");
  } else {
    const randomIndex = Math.floor(Math.random() * lunches.length);
    const randomLunch = lunches[randomIndex];
    console.log(`Randomly selected lunch: ${randomLunch}`);
  }
}

getRandomLunch(lunches);

function showLunchMenu(lunches) {
  if (lunches.length === 0) {
    console.log("The menu is empty.");
  } else {
    console.log(`Menu items: ${lunches.join(", ")}`);
  }
}

showLunchMenu(lunches);