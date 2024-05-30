var personName_2 = "ayat";
// Convert name to lowercase
var nameLowercase_2 = personName_2.toLowerCase();
// Convert name to uppercase
var nameUppercase_2 = personName_2.toUpperCase();
// Convert name to title case
var nameTitlecase_2 = personName_2.replace(/\b\w/g, function (char) {
    return char.toUpperCase();
});
// Print the results
console.log("Original Name:", personName_2);
console.log("Lowercase:", nameLowercase_2);
console.log("Uppercase:", nameUppercase_2);
console.log("Titlecase:", nameTitlecase_2);
