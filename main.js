const serverUrl = 'https://dice-roller-nsd-node-eycwbbf4bnbqd9ay.centralus-01.azurewebsites.net';

async function wakeServer() {
    try {
        await fetch(serverUrl + '/api/wake');
    } catch (error) {
        console.log('Could not wake server:', error);
    }
}

async function rollDice() {
    // Wake up the Node.js server
    await wakeServer();

    // Get five random numbers from the server
    try {
        let response = await fetch(serverUrl + '/api/roll');
        let data = await response.json();
        document.getElementById("die1").value = data.roll;

        response = await fetch(serverUrl + '/api/roll');
        data = await response.json();
        document.getElementById("die2").value = data.roll;

        response = await fetch(serverUrl + '/api/roll');
        data = await response.json();
        document.getElementById("die3").value = data.roll;

        response = await fetch(serverUrl + '/api/roll');
        data = await response.json();
        document.getElementById("die4").value = data.roll;

        response = await fetch(serverUrl + '/api/roll');
        data = await response.json();
        document.getElementById("die5").value = data.roll;
    } catch (error) {
        console.log('Error getting dice rolls:', error);
    }
}