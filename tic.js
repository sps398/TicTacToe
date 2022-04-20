let player = null;
let print = document.getElementById('print');
let flag = 0;
const colored = [];


function set(id) {
    const b = document.getElementById(id);
    b.value = player.value;
    const status = checkStatus();
    player.style.backgroundColor = 'white';
    
    if(status == 'none')
        next();
}

function setStartingChance(id) {
    player = document.getElementById(id);
    player.style.backgroundColor = 'grey';

    document.getElementById('print').innerHTML = `Player ${player.value} turn.....`;
    disableClickEvent();
}

function disableClickEvent() {
    const zero = document.getElementById('zero');
    const X = document.getElementById('X');
    zero.onclick = null;
    X.onclick = null;
}

function next() {
    player = player.value === 'X'? document.getElementById('zero') : document.getElementById('X');
    player.style.backgroundColor = 'grey';
    document.getElementById('print').innerHTML = `Player ${player.value} turn.....`;
}

function checkStatus() {
    const b1 = document.getElementById('b1');
    const b2 = document.getElementById('b2');
    const b3 = document.getElementById('b3');
    const b4 = document.getElementById('b4');
    const b5 = document.getElementById('b5');
    const b6 = document.getElementById('b6');
    const b7 = document.getElementById('b7');
    const b8 = document.getElementById('b8');
    const b9 = document.getElementById('b9');

    if (b1.value == 'X' && b2.value == 'X' && b3.value == 'X') {
        b1.style.backgroundColor = 'yellow';
        b2.style.backgroundColor = 'yellow';
        b3.style.backgroundColor = 'yellow';
        colored.push('b1','b2','b3');
        flag = 1;
        document.getElementById('print').innerHTML = `Player X won`;
    }

    else if (b1.value == 'X' && b4.value == 'X' && b7.value == 'X') {
        b1.style.backgroundColor = 'yellow';
        b4.style.backgroundColor = 'yellow';
        b7.style.backgroundColor = 'yellow';
        colored.push('b1','b4','b7');
        flag = 1;
        document.getElementById('print').innerHTML = `Player X won`
    }

    else if (b7.value == 'X' && b8.value == 'X' && b9.value == 'X') {
        b7.style.backgroundColor = 'yellow';
        b8.style.backgroundColor = 'yellow';
        b9.style.backgroundColor = 'yellow';
        colored.push('b7','b8','b9');
        flag = 1;
        document.getElementById('print').innerHTML = `Player X won`
    }

    else if (b3.value == 'X' && b6.value == 'X' && b9.value == 'X') {
        b3.style.backgroundColor = 'yellow';
        b6.style.backgroundColor = 'yellow';
        b9.style.backgroundColor = 'yellow';
        colored.push('b3','b6','b9');
        flag = 1;
        document.getElementById('print').innerHTML = `Player X won`
    }

    else if (b1.value == 'X' && b5.value == 'X' && b9.value == 'X') {
        b1.style.backgroundColor = 'yellow';
        b5.style.backgroundColor = 'yellow';
        b9.style.backgroundColor = 'yellow';
        colored.push('b1','b5','b9');
        flag = 1;
        document.getElementById('print').innerHTML = `Player X won`
    }

    else if (b3.value == 'X' && b5.value == 'X' && b7.value == 'X') {
        b3.style.backgroundColor = 'yellow';
        b5.style.backgroundColor = 'yellow';
        b7.style.backgroundColor = 'yellow';
        colored.push('b3','b5','b7');
        flag = 1;
        document.getElementById('print').innerHTML = `Player X won`
    }

    else if (b2.value == 'X' && b5.value == 'X' && b8.value == 'X') {
        b2.style.backgroundColor = 'yellow';
        b5.style.backgroundColor = 'yellow';
        b8.style.backgroundColor = 'yellow';
        colored.push('b2','b5','b8');
        flag = 1;
        document.getElementById('print').innerHTML = `Player X won`
    }

    else if (b4.value == 'X' && b5.value == 'X' && b6.value == 'X') {
        b4.style.backgroundColor = 'yellow';
        b5.style.backgroundColor = 'yellow';
        b6.style.backgroundColor = 'yellow';
        colored.push('b4','b5','b6');
        flag = 1;
        document.getElementById('print').innerHTML = `Player X won`
    }
 
    // Checking of Player X finish
    // Checking for Player 0 starts, Is player 0 won or
    // not and after that disabled all the other fields
    else if (b1.value == '0' && b2.value == '0' && b3.value == '0') {
        b1.style.backgroundColor = 'yellow';
        b2.style.backgroundColor = 'yellow';
        b3.style.backgroundColor = 'yellow';
        colored.push('b1','b2','b3');
        flag = 1;
        document.getElementById('print').innerHTML = `Player 0 won`
    }

    else if (b1.value == '0' && b4.value == '0' && b7.value == '0') {
        b1.style.backgroundColor = 'yellow';
        b4.style.backgroundColor = 'yellow';
        b7.style.backgroundColor = 'yellow';
        colored.push('b1','b4','b7');
        flag = 1;
        document.getElementById('print').innerHTML = `Player 0 won`
    }

    else if (b7.value == '0' && b8.value == '0' && b9.value == '0') {
        b7.style.backgroundColor = 'yellow';
        b8.style.backgroundColor = 'yellow';
        b9.style.backgroundColor = 'yellow';
        colored.push('b7','b8','b9');
        flag = 1;
        document.getElementById('print').innerHTML = `Player 0 won`
    }

    else if (b3.value == '0' && b6.value == '0' && b9.value == '0') {
        b3.style.backgroundColor = 'yellow';
        b6.style.backgroundColor = 'yellow';
        b9.style.backgroundColor = 'yellow';
        colored.push('b3','b6','b9');
        flag = 1;
        document.getElementById('print').innerHTML = `Player 0 won`
    }

    else if (b1.value == '0' && b5.value == '0' && b9.value == '0') {
        b1.style.backgroundColor = 'yellow';
        b5.style.backgroundColor = 'yellow';
        b9.style.backgroundColor = 'yellow';
        colored.push('b1','b5','b9');
        flag = 1;
        document.getElementById('print').innerHTML = `Player 0 won`
    }

    else if (b3.value == '0' && b5.value == '0' && b7.value == '0') {
        b3.style.backgroundColor = 'yellow';
        b5.style.backgroundColor = 'yellow';
        b7.style.backgroundColor = 'yellow';
        colored.push('b3','b5','b7');
        flag = 1;
        document.getElementById('print').innerHTML = `Player 0 won`
    }

    else if (b2.value == '0' && b5.value == '0' && b8.value == '0') {
        b2.style.backgroundColor = 'yellow';
        b5.style.backgroundColor = 'yellow';
        b8.style.backgroundColor = 'yellow';
        colored.push('b2','b5','b8');
        flag = 1;
        document.getElementById('print').innerHTML = `Player 0 won`
    }

    else if (b4.value == '0' && b5.value == '0' && b6.value == '0') {
        b4.style.backgroundColor = 'yellow';
        b5.style.backgroundColor = 'yellow';
        b6.style.backgroundColor = 'yellow';
        colored.push('b4','b5','b6');
        flag = 1;
        document.getElementById('print').innerHTML = `Player 0 won`
    }
 
    else if ((b1.value == 'X' || b1.value == '0') && (b2.value == 'X'
        || b2.value == '0') && (b3.value == 'X' || b3.value == '0') &&
        (b4.value == 'X' || b4.value == '0') && (b5.value == 'X' ||
        b5.value == '0') && (b6.value == 'X' || b6.value == '0') &&
        (b7.value == 'X' || b7.value == '0') && (b8.value == 'X' ||
        b8.value == '0') && (b9.value == 'X' || b9.value == '0')) {

            document.getElementById('print').innerHTML = "Match Tie";

            disableAllBlocks();
            setColor(player.value,'white');

            return 'tie';
    }

    if(flag == 1) {
        disableAllBlocks();
        setColor(player.value,'white');
        return 'won';
    }

     return 'none';   
}

function reset() {
    location.reload();
}

function setColor(id,color) {
    document.getElementById(id).style.backgroundColor = color;
}

function disableAllBlocks() {
    const b1 = document.getElementById('b1');
    const b2 = document.getElementById('b2');
    const b3 = document.getElementById('b3');
    const b4 = document.getElementById('b4');
    const b5 = document.getElementById('b5');
    const b6 = document.getElementById('b6');
    const b7 = document.getElementById('b7');
    const b8 = document.getElementById('b8');
    const b9 = document.getElementById('b9');

        b1.disabled = true;
        b2.disabled = true;
        b3.disabled = true;
        b4.disabled = true;
        b5.disabled = true;
        b6.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
}