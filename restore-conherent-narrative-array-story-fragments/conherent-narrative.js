const shuffledFragments = [
  { id: 15, text: "and, after a time, passed the place where the Hare was sleeping." },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 11, text: "and to make the Tortoise feel very deeply how ridiculous it was for him to try a race with a Hare," },
  { id: 7, text: "but for the fun of the thing he agreed." },
  { id: 19, text: "The Hare now ran his swiftest," },
  ,
  { id: 1, text: "A Hare was making fun of the Tortoise one day for being so slow." },
  { id: 14, text: "The Tortoise meanwhile kept going slowly but steadily," },
  { id: 9, text: "marked the distance and started the runners off." },
  ,
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 17, text: "and when at last he did wake up," },
  { id: 2, text: '"Do you ever get anywhere?" he asked with a mocking laugh.' },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 8, text: "So the Fox, who had consented to act as judge," },
  { id: 20, text: "but he could not overtake the Tortoise in time." },
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 6, text: "The Hare was much amused at the idea of running a race with the Tortoise," },
  ,
  { id: 13, text: "until the Tortoise should catch up." },
  { id: 10, text: "The Hare was soon far out of sight," },
  { id: 12, text: "he lay down beside the course to take a nap" },
  { id: 18, text: "the Tortoise was near the goal." },
];

function compactFragments(fragments) {
  const result = [];
  let removed = false;

  for (let i = 0; i < fragments.length; i++) {
    if (fragments[i] !== undefined) {
      result.push(fragments[i]);
    } else {
      removed = true;
    }
  }

  if (removed) {
    console.log("[COMPACTED] Removed undefined or empty slots from fragments.");
  }

  return result;
}

function sortFragments(fragments) {
  // Create a shallow copy so we don't mutate the original
  const arr = [];
  for (let i = 0; i < fragments.length; i++) {
    arr.push(fragments[i]);
  }

  // Insertion sort (stable, no built-in .sort())
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j].id > current.id) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }

  return arr;
}

function dedupeFragments(fragments) {
  const result = [];
  const seen = {};

  for (let i = 0; i < fragments.length; i++) {
    const frag = fragments[i];

    if (!seen[frag.id]) {
      seen[frag.id] = true;
      result.push(frag);
    } else {
      console.log(`[DEDUPED] Removed duplicate fragment with id ${frag.id}.`);
    }
  }

  return result;
}

function fillMissingFragments(fragments) {
  if (fragments.length === 0) {
    return [];
  }

  const result = [];
  const minId = fragments[0].id;
  const maxId = fragments[fragments.length - 1].id;

  let index = 0;

  for (let id = minId; id <= maxId; id++) {
    if (index < fragments.length && fragments[index].id === id) {
      result.push(fragments[index]);
      index++;
    } else {
      result.push({ id: id, text: "[...]" });
      console.log(`[FILLED] Added placeholder for missing id ${id}.`);
    }
  }

  return result;
}

function assembleStory(fragments) {
  let story = "";

  for (let i = 0; i < fragments.length; i++) {
    story += fragments[i].text;
    if (i < fragments.length - 1) {
      story += "\n";
    }
  }

  return story;
}

// ===== Apply the pipeline =====
const compactedShuffledFragments = compactFragments(shuffledFragments);
const sortedFragments = sortFragments(compactedShuffledFragments);
const dedupedFragments = dedupeFragments(sortedFragments);
const filledFragments = fillMissingFragments(dedupedFragments);

console.log(assembleStory(filledFragments));