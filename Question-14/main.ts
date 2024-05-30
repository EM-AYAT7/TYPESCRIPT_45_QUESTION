const originalGuestList: string[] = [
  "ayat",
  "zahra",
  "zoya",
];

console.log("Original Guest List:");
originalGuestList.forEach((person) => {
  console.log(person);
});

const guestWhoCantMakeIt: string = "anaya";

const replacementGuest: string = "zohra";
const indexOfGuestToReplace: number =
  originalGuestList.indexOf(guestWhoCantMakeIt);
if (indexOfGuestToReplace !== -1) {
  originalGuestList[indexOfGuestToReplace] = replacementGuest;
}

console.log("\nUpdated Guest List:");
originalGuestList.forEach((person) => {
  console.log(person);
});

console.log(`\nUnfortunately, ${guestWhoCantMakeIt} can't make it to dinner.`);
