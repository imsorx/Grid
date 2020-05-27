var WebSocketWrapper = require('ws-wrapper');
var socket;
// Forms
var httpForm = document.querySelector("#httpForm");
var connectForm = document.querySelector("#connectForm");
var sendForm = document.querySelector("#messageForm");

//Elements
var toggleToken = document.querySelector("#toggle");
var methods = document.getElementById("methods");
var bodyField = document.getElementById("body");
var tokenField = document.querySelector("#token");
var connBtn = document.getElementById("connect");
var isConnected = false;

//Output window
var logs = document.querySelector("#logs");

httpForm.addEventListener("submit", async (ev) => {
  ev.preventDefault();
  var method = httpForm.methods.value;
  var address = httpForm.url1.value;
  log(`${method}:${address}`, 0);
  fetch(`http://${address}`).then(res => res.text()).then(data => log(data, 1));
});
connectForm.addEventListener("submit", ev => {
  ev.preventDefault();
  if (!isConnected) {
    socket = new WebSocketWrapper(new WebSocket("ws://" + connectForm.url2.value));
    socket.on('connect', () => {
      log('connected!', 1);
      connBtn.value = 'Disconnect';
      isConnected = !isConnected;
    });
  } else {
    socket.disconnect();
    log('Disconnected!', 0);
    connBtn.value = 'Connect';
    isConnected = !isConnected;
  }
});
sendForm.addEventListener("submit", (ev) => {
  ev.preventDefault();

});

toggleToken.addEventListener("click", (ev) => {
  tokenField.value = "";
  tokenField.toggleAttribute("disabled");
});

function log(data, n) {
  var arrow = n === 0 ? ">>" : "<<";
  var date = new Date().toLocaleTimeString();
  var template = `\n[${date}] ${arrow} ${data}`;
  logs.append(template);
  logs.scrollTop = logs.scrollHeight;
}

(function () {
  logs.append(`[${new Date().toLocaleTimeString()}] Hola amigos!`);

  methods.addEventListener("click", (ev) => {
    if (httpForm.methods.value === "POST" && bodyField.getAttribute("disabled")) {
      bodyField.toggleAttribute("disabled");
    } else if (httpForm.methods.value === "GET") {
      bodyField.setAttribute("disabled", "true");
    }
  });
})();
