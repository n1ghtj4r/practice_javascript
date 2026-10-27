const config1 = {
  fault: false,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 4 }
  ]
};

const config2 = {
  fault: false,
  phases: [
    { color: "red", duration: 3 },
    { color: "yellow", duration: -2 },
    { color: "green", duration: 6 }
  ]
};

const config3 = {
  fault: true,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 6 }
  ]
};

const config4 = {
  fault: false,
  phases: []
};

function runSequence(config, cycles) {
  if (!config.phases || config.phases.length === 0) {
    console.log("No phases found");
    return;
  }

  if (config.fault) {
    console.log("Faulted phase!");
    return;
  }

  for (let c = 0; c < cycles; c++) {
    for (const phase of config.phases) {
      if (phase.duration <= 0) {
        console.log("Invalid phase detected");
      } else {
        console.log(`Switching to ${phase.color} for ${phase.duration} s`);
      }
    }
  }
}

function generateTimeline(config, cycles) {
  const timeline = [];
  let total = 0;

  for (let c = 0; c < cycles; c++) {
    for (const phase of config.phases) {
      total += phase.duration;
      timeline.push(total);
    }
  }

  return timeline;
}

// --- Test runSequence ---
console.log("--- runSequence(config1, 1) ---");
runSequence(config1, 1);

console.log("\n--- runSequence(config1, 2) ---");
runSequence(config1, 2);

console.log("\n--- runSequence(config2, 1) ---");
runSequence(config2, 1);

console.log("\n--- runSequence(config3, 2) ---");
runSequence(config3, 2);

console.log("\n--- runSequence(config4, 5) ---");
runSequence(config4, 5);

// --- Test generateTimeline ---
console.log("\n--- generateTimeline ---");
console.log(generateTimeline(config1, 1)); // [5, 7, 11]
console.log(generateTimeline(config1, 2)); // [5, 7, 11, 16, 18, 22]
console.log(generateTimeline(config2, 2)); // [3, 1, 7, 10, 8, 14]
console.log(generateTimeline(config3, 1)); // [5, 7, 13]
console.log(generateTimeline(config4, 1)); // []