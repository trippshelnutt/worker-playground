function processIncomingMessage(e) {
    console.log('worker: message received!');

    const number1 = e.data[0];
    const number2 = e.data[1];
    console.log('worker: ' + number1);
    console.log('worker: ' + number2);

    const result = number1 * number2;
    console.log('worker: ' + result);

    if (isNaN(result)) {
        throw new Error('invalid numbers');
    } else {
        console.log('worker: posting message back to main script');
        postMessage('Result: ' + result);
    }
}

onmessage = processIncomingMessage;
