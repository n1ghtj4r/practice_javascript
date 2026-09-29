const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};


function updateRecords(records, id, prop, value) {
  if (value === "") {
    delete records[id][prop];
  } else if (prop !== "tracks") {
    records[id][prop] = value;
  } else {
    // prop is "tracks" and value is not empty
    if (!records[id].hasOwnProperty("tracks")) {
      records[id].tracks = [];
    }
    records[id].tracks.push(value);
  }
  
  return records;
}

console.log("--- Test 1: Add artist ---");
console.log(updateRecords(recordCollection, 5439, "artist", "ABBA"));

console.log("\n--- Test 2: Add first track ---");
console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"));

console.log("\n--- Test 3: Delete artist ---");
console.log(updateRecords(recordCollection, 2548, "artist", ""));

console.log("\n--- Test 4: Add track to existing ---");
console.log(updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"));

console.log("\n--- Test 5: Add track (keep first element) ---");
console.log(updateRecords(recordCollection, 2468, "tracks", "Free"));

console.log("\n--- Test 6: Delete tracks ---");
console.log(updateRecords(recordCollection, 2548, "tracks", ""));

console.log("\n--- Test 7: Add albumTitle ---");
console.log(updateRecords(recordCollection, 1245, "albumTitle", "Riptide"));