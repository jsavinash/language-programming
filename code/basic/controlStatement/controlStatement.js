const controlStatement = () => {
    const age = 18;
    if (age > 17) {
        console.log('Voter valid');
    } else {
        console.log('Voter valid');
    }
    const option = 'A'
    switch (option) {
        case 'A':
            console.log('Option A selected');
            break;
        case 'B':
            console.log('Option B selected');
            break;
        default:
            console.log('default executed');
    }
    let count = 0;
    while (count < 5) {
        console.log(count);
        count++;
    }
    for (let count2 = 0; count2 < 5; count2++) {
        console.log(count2);
    }
    let count3 = 0;
    do {
        console.log(count3);
        count3++;
    } while (count3 < 5)
}

controlStatement();