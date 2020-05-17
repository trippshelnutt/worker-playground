const number1 = document.querySelector('#number1');
const number2 = document.querySelector('#number2');

const result = document.querySelector('#result');

const worker = new Worker('worker.js');

function setUp() {
    number1.onchange = postMessageToWorker;
    number2.onchange = postMessageToWorker;

    worker.onmessage = processMessageFromWorker;
    worker.onerror = (e) => alert(e.message);
}

function postMessageToWorker() {
    worker.postMessage([number1.value, number2.value]);
    console.log('number change posted to worker');
}

function processMessageFromWorker(e) {
    result.textContent = e.data;
    console.log('new message from worker');
}

if (window.Worker) {
    setUp();
} else {
    console.log('workers not supported');
}
