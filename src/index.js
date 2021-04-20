import "./styles.css";

const source = document.getElementById("inputTextBox");
const result = document.getElementById("outputTextBox");

const rand = (list) => {
  return list[Math.floor(Math.random() * list.length)];
};

const sarcastic = () => {
  const emojis = ["🙃", "💁", "🌝"];
  return rand(emojis);
};

const sexual = () => {
  const emojis = ["😏", "😉", "😈", "🍑", "🍆"];
  return rand(emojis);
};

const joking = () => {
  const emojis = ["😉", "😜", "🙃"];
  return rand(emojis);
};

const positive = () => {
  const emojis = ["👍", "💪", "🏆", "🔥", "😊", "🥰", "😍"];
  return rand(emojis);
};

const laughing = () => {
  const emojis = ["😂", "😭", "🤣", "💀"];
  return rand(emojis);
};

const mad = () => {
  const emojis = ["💢", "😤", "😠", "👿", "🤬"];
  return rand(emojis);
};

const emphasis = () => {
  const emojis = ["✨", "🔉", "👏"];
  return rand(emojis);
};

const parseTag = (e) => {
  const tagText = e.target.value;
  result.innerHTML = tagText
    .replace(/\/fun/gim, laughing())
    .replace(/\/s /gim, sarcastic() + " ")
    .replace(/\/sx/gim, sexual())
    .replace(/\/j/gim, joking())
    .replace(/\/pos/gim, positive())
    .replace(/\*/gim, emphasis())
    .replace(/\/mad/gim, mad());
};

let legends = [
  { tag: "/fun", meaning: "funny" },
  { tag: "/j", meaning: "joking" },
  { tag: "/mad", meaning: "anger" },
  { tag: "/s", meaning: "sarcastic" },
  { tag: "/sx or /x", meaning: "sexual intent" },
  { tag: "/pos", meaning: "positive" },
  { tag: "*", meaning: "emphasis" }
];

function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (let key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

let table = document.querySelector("table");
let data = Object.keys(legends[0]);
generateTableHead(table, data);
generateTable(table, legends);

source.addEventListener("input", parseTag);
source.addEventListener("propertychange", parseTag);
