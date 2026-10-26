function parseShipment(rawData) {
  const seen = new Set();
  const result = [];

  for (const entry of rawData) {
    const parts = entry.split("|");
    const sku = parts[0];
    const name = parts[1];
    const qty = Number(parts[2]);
    const expires = parts[3];
    const zone = parts[4] || "general";

    // Ignore duplicate SKUs
    if (seen.has(sku)) {
      continue;
    }

    seen.add(sku);
    result.push({ sku, name, qty, expires, zone });
  }

  return result;
}

function planRestock(pantry, shipment) {
  const actions = [];

  // Create a Set of existing SKUs for quick lookup
  const pantrySkus = new Set(pantry.map(item => item.sku));

  for (const item of shipment) {
    let type;

    if (item.qty <= 0) {
      type = "discard";
    } else if (pantrySkus.has(item.sku)) {
      type = "restock";
    } else {
      type = "donate";
    }

    actions.push({ type, item });
  }

  return actions;
}

function groupByZone(actions) {
  const grouped = {};

  for (const action of actions) {
    const zone = action.item.zone;

    if (!grouped[zone]) {
      grouped[zone] = [];
    }

    grouped[zone].push(action);
  }

  return grouped;
}

function clonePantry(pantry) {
  // Deep copy using map + object spread
  return pantry.map(item => ({ ...item }));
}

// ===== Example usage (put everything together) =====

// Example raw shipment data
const rawData = [
  "A1|Milk|2|2025-12-01|fridge",
  "B2|Rice|5|2026-01-15",
  "A1|Milk|3|2025-12-01|fridge", // duplicate SKU - should be ignored
  "C3|Cereal|0|2025-11-20|pantry",
  "D4|Beans|4|2026-03-01|pantry"
];

// Example current pantry
const pantry = [
  { sku: "A1", name: "Milk", qty: 1, expires: "2025-11-01", zone: "fridge" },
  { sku: "B2", name: "Rice", qty: 2, expires: "2025-12-01", zone: "general" }
];

// Process the shipment
const shipment = parseShipment(rawData);
const actions = planRestock(pantry, shipment);
const grouped = groupByZone(actions);

// Log the final result
console.log(grouped);