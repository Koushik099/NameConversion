let btn = document.getElementById("convert-btn");
let inputValue = document.getElementById("text");

let applyMethod = () => {
  camelCase();
  pascalCase();
  snakeCase();
  kebabCase();
};

btn.addEventListener("click", applyMethod);

// camalcase
let camelCase = () => {
  let para = document.getElementById("camel-case");
  let input = inputValue.value;

  let inputText = input
    .toLowerCase()
    .replace(/[^\w]+(.)/g, (ltr) => ltr.toUpperCase())
    .replace(/[^a-zA-Z]/g, "");

  para.textContent = inputText;
};

// pascalcase
let pascalCase = () => {
  let para = document.getElementById("pascal-case");
  let input = inputValue.value;

  let inputText = input
    .toLowerCase()
    .replace(new RegExp(/[-_]+/, "g"), " ")
    .replace(new RegExp(/[^\w\s]/, "g"), "")
    .replace(
      new RegExp(/\s+(.)(\w*)/, "g"),
      ($1, $2, $3) => `${$2.toUpperCase() + $3}`
    )
    .replace(new RegExp(/\w/), (s) => s.toUpperCase());
  para.textContent = inputText;
};

// snakecase
let snakeCase = () => {
  let para = document.getElementById("snake-case");
  let input = inputValue.value;

  let inputText = input
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((s) => s.toLowerCase())
    .join("_");

  para.textContent = inputText;
};

let screamingSnakeCase = () => {
  let para = document.getElementById("screaming-snake-case");
  let input = inputValue.value;
};

// kababcase
let kebabCase = () => {
  let para = document.getElementById("kebab-case");
  let input = inputValue.value;

  let inputText = input
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();

  para.textContent = inputText;
};
