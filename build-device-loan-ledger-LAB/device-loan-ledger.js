const equipmentLedger = {
  "1": { type: "PC", status: "CheckedOut", borrower: { name: "John Smith", email: "john@acme.org" }, dueDate: "11/30/2025" },
  "2": { type: "Laptop", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" },
  "3": { type: "Laptop", status: "CheckedOut", borrower: { name: "Jane Doe", email: "jane@acme.org" }, dueDate: "10/31/2025" },
  "4": { type: "iPad", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" }
};

function serializeLedger(ledger) {
  return JSON.stringify(ledger);
}

function loadLedger(json) {
  return JSON.parse(json);
}

function checkoutDevice(ledger, assetTag, borrower) {
  // Clone the ledger
  const updatedLedger = loadLedger(serializeLedger(ledger));

  // Asset tag not found
  if (!updatedLedger[assetTag]) {
    return {
      ledger: ledger,
      message: `Device with asset tag ${assetTag} was not found.`
    };
  }

  // Already checked out
  if (updatedLedger[assetTag].status === "CheckedOut") {
    return {
      ledger: ledger,
      message: `Device with asset tag ${assetTag} is already checked out.`
    };
  }

  // Perform checkout
  updatedLedger[assetTag].status = "CheckedOut";
  updatedLedger[assetTag].borrower.name = borrower.name;
  updatedLedger[assetTag].borrower.email = borrower.email;

  return {
    ledger: updatedLedger,
    message: `Device with asset tag ${assetTag} has been checked out to ${borrower.name}.`
  };
}

function checkinDevice(ledger, assetTag) {
  // Clone the ledger
  const updatedLedger = loadLedger(serializeLedger(ledger));

  // Asset tag not found
  if (!updatedLedger[assetTag]) {
    return {
      ledger: ledger,
      message: `Device with asset tag ${assetTag} was not found.`
    };
  }

  // Perform check-in
  updatedLedger[assetTag].status = "CheckedIn";
  updatedLedger[assetTag].borrower.name = "";
  updatedLedger[assetTag].borrower.email = "";
  updatedLedger[assetTag].dueDate = "";

  return {
    ledger: updatedLedger,
    message: `Device with asset tag ${assetTag} has been checked in.`
  };
}

function listOverdueDevices(ledger, today) {
  // Helper to parse "M/D/YYYY" or "MM/DD/YYYY" into [year, month, day]
  function parseDate(dateStr) {
    const parts = dateStr.split("/").map(Number);
    return [parts[2], parts[0], parts[1]]; // [year, month, day]
  }

  // Helper to check if date1 is strictly before date2
  function isBefore(date1, date2) {
    const [y1, m1, d1] = parseDate(date1);
    const [y2, m2, d2] = parseDate(date2);

    if (y1 !== y2) return y1 < y2;
    if (m1 !== m2) return m1 < m2;
    return d1 < d2;
  }

  const overdue = [];

  for (const assetTag in ledger) {
    const device = ledger[assetTag];
    if (
      device.status === "CheckedOut" &&
      device.dueDate &&
      isBefore(device.dueDate, today)
    ) {
      overdue.push(device);
    }
  }

  // Sort by dueDate ascending
  overdue.sort((a, b) => {
    const [yA, mA, dA] = parseDate(a.dueDate);
    const [yB, mB, dB] = parseDate(b.dueDate);

    if (yA !== yB) return yA - yB;
    if (mA !== mB) return mA - mB;
    return dA - dB;
  });

  return overdue;
}

// Sample ledger
const ledger = {
  "1": {
    type: "Laptop",
    status: "CheckedIn",
    borrower: {
      name: "",
      email: ""
    },
    dueDate: ""
  },
  "2": {
    type: "Monitor",
    status: "CheckedOut",
    borrower: {
      name: "John Doe",
      email: "john@example.com"
    },
    dueDate: "9/5/2025"
  },
  "3": {
    type: "Keyboard",
    status: "CheckedOut",
    borrower: {
      name: "Jane Smith",
      email: "jane@example.com"
    },
    dueDate: "10/15/2025"
  }
};

// ===== Test the functions =====

// 1. Checkout a device
const checkoutResult = checkoutDevice(ledger, "1", {
  name: "Alice",
  email: "alice@example.com"
});
console.log(checkoutResult.message);
console.log(checkoutResult.ledger);

// 2. Try to checkout an already checked-out device
const alreadyOut = checkoutDevice(ledger, "2", {
  name: "Bob",
  email: "bob@example.com"
});
console.log(alreadyOut.message);

// 3. Check in a device
const checkinResult = checkinDevice(ledger, "2");
console.log(checkinResult.message);
console.log(checkinResult.ledger);

// 4. List overdue devices
const overdue = listOverdueDevices(ledger, "10/20/2025");
console.log("Overdue devices:", overdue);

// 5. Test serialize & load
const json = serializeLedger(ledger);
console.log("Serialized:", json);

const loaded = loadLedger(json);
console.log("Loaded back:", loaded);