function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `the Great ${magicians[i]}`;
    }
}

let magicians: string[] = ['salaar sikandar', 'hameen sikandar', 'imama', 'ayat'];

make_great(magicians);

show_magicians(magicians);
