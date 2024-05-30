var originalGuestList = [
    "ayat",
    "zahra",
    "zoya",
];
console.log("Original Guest List:");
originalGuestList.forEach(function (person) {
    console.log(person);
});
var guestWhoCantMakeIt = "anaya";
var replacementGuest = "zohra";
var indexOfGuestToReplace = originalGuestList.indexOf(guestWhoCantMakeIt);
if (indexOfGuestToReplace !== -1) {
    originalGuestList[indexOfGuestToReplace] = replacementGuest;
}
console.log("\nUpdated Guest List:");
originalGuestList.forEach(function (person) {
    console.log(person);
});
console.log("\nUnfortunately, ".concat(guestWhoCantMakeIt, " can't make it to dinner."));
