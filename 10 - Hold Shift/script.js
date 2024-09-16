import { data } from "./data.js";

console.log(data.length);

let container = document.getElementById("container")
const add_btn = document.getElementById("add");
const del_btn = document.getElementById("del")

let node_arr = [];
let arr_len = node_arr.length;
let last_checked;

function createId() {
  const characters = "1aAbB2cCdD3eEfF4gGhH5iIjJ6kKlL7mMnN8oOpP9qQrR0sStT1uUvV2wWxX3yYzZ"
  const strlen = characters.length;
  return Array.from({ length: 5 }, () => characters[Math.floor(Math.random() * strlen)]).join('');
}

function createQuoteElement(quote) {
  let div = document.createElement("div");
  div.classList.add("quote")
  let input = document.createElement("input");
  input.type = "checkbox";
  input.id = createId();
  let label = document.createElement("label");
  label.htmlFor = input.id;
  let text = document.createTextNode(quote);
  label.appendChild(text);
  div.appendChild(input);
  div.appendChild(label);
  return div;
}

function handleAdd() {
  let arr = Array.from({ length: 5 }, (_, i) => data[(arr_len + i) % 100])
  arr.forEach(q => {
    let element = createQuoteElement(q);
    element.classList.add("added");
    setTimeout(() => {
      element.classList.remove("added");
    }, 300);
    node_arr.unshift(element);
  })
  arr_len += 5;
  render();
}


function handleDel() {
  let selected = node_arr.filter((node) => node.firstChild.checked);
  selected.forEach((node) => {
    node_arr.splice(node_arr.indexOf(node), 1);
    container.removeChild(node);
  })

  render();
}

function selectMultiple(e) {
  if (e.target.tagName !== "INPUT") return;

  if (e.pointerId > 0) return;
  let inBetween = false;

  if (e.shiftKey && e.target.checked) {
    node_arr.forEach(node => {
      if (node === this || node === last_checked) inBetween = !inBetween;
      if (inBetween) node.firstChild.checked = true;
    })
  }
  last_checked = this;
}

function whenEmpty() {
  let p = document.createElement("p");
  let text = document.createTextNode("Empty");
  p.appendChild(text);
  container.appendChild(p);
}

function render() {
  container.innerHTML = "";
  if (node_arr.length === 0) whenEmpty();
  else node_arr.forEach(node => {
    container.appendChild(node);
    node.addEventListener("click", selectMultiple);
  })
}

add_btn.addEventListener("click", handleAdd)
del_btn.addEventListener("click", handleDel)
document.addEventListener("DOMContentLoaded", handleAdd)
