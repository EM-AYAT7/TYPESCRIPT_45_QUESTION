let current_users: string[] = ['immama', 'salar', 'adam', 'jihan', 'yaram'];
let new_users: string[] = ['ayat', 'sarah', 'zara', 'emily', 'sam'];

for (let new_user of new_users) {
    let isTaken: boolean = false;


    let lowercase_new_user: string = new_user.toLowerCase();


    for (let current_user of current_users) {
        if (current_user.toLowerCase() === lowercase_new_user) {
            isTaken = true;
            break;
        }
    }


    if (isTaken) {
        console.log(`Sorry, ${new_user} is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations, ${new_user} is available.`);
    }
}
