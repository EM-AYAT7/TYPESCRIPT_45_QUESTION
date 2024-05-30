function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    let modifiedMagicians: string[] = [];
    for (let magician of magicians) {
        modifiedMagicians.push(`the Great ${magician}`);
    }
    return modifiedMagicians;
}


let magicians: string[] = ['yaram', 'royaam', 'hoor', 'ayat'];


let greatMagicians: string[] = make_great([...magicians]);


console.log("Original Magicians:");
show_magicians(magicians);
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
