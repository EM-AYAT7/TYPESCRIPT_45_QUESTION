let originalGuests: string[] = [
  "Ayat",
  "zohra",
  "rabia",
  "safiya",
  "sawera",
  "zoya",
  "rimsha",
];

console.log("Original Guest List:");
originalGuests.forEach((person) => {
  console.log(person);
});

const guestWhonotMakeIt: string = "ayat";

const newGuest: string = "hoorain shah";
const indOfGuestToReplace: number = originalGuests.indexOf(guestWhonotMakeIt);
if (indOfGuestToReplace !== -1) {
  originalGuests[indOfGuestToReplace] = newGuest;
}

console.log("\nUpdated Guest List:");
originalGuests.forEach((person) => {
  console.log(person);
});

console.log(`\nUnfortunately, ${guestWhonotMakeIt} can't make it to dinner.`);

console.log("\nGood news! We found a bigger dinner table.");

const additionalGuests: string[] = ["imama", "sarah"];

originalGuests.unshift(additionalGuests[0]);

originalGuests.splice(
  Math.floor(originalGuests.length / 2),
  0,
  additionalGuests[1]
);

originalGuests.push("izma");

console.log("\nNew Invitation Messages:");
originalGuests.forEach((person) => {
  console.log(
    `Dear ${person},\n\nYou are cordially invited to dinner. It would be an honor to have your presence.\n\nSincerely,\nayat`
  );
});

console.log(
  "\nUnfortunately, the new dinner table won't arrive in time, and we can invite only two people for dinner."
);

while (originalGuests.length > 2) {
  const removedGuest: string = originalGuests.pop()!;
  console.log(`\nSorry, ${removedGuest}, we can't invite you to dinner.`);
}

console.log(
  `\nDear ${originalGuests[0]} and ${originalGuests[1]},\n\nYou're still invited to dinner. See you there!\n\nSincerely,\nayat`
);

originalGuests.pop();
originalGuests.pop();

console.log("\nUpdated Guest List:");
console.log(originalGuests);
