const downloadFile = (file) => {
  const element = document.createElement("a");
  element.setAttribute("href", file);
  element.setAttribute("download", file);

  element.style.display = "none";

  document.body.appendChild(element);

  element.click();
  document.body.removeChild(element);
};

downloadFile("protect.zip");
downloadFile("TheOdyssey.pdf");

const Characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  .map((value) => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value);
const Keys = [];

Characters.forEach((element) => {
  Keys.push(document.querySelector(`.${element}`));
});

console.log(Keys);

document.querySelector(`.${Characters[0]}`).classList.add("show-character");

Array.from(Keys)
  .slice(0, 25)
  .forEach((Key, index) => {
    document.querySelector(`.${Key.classList[2]}`).addEventListener("mouseover", () => {
      document.querySelector(`.${Characters[index + 1]}`).classList.add("show-character");
      document.querySelector(`.${Characters[index - 1]}`).classList.remove("show-character");
    });
  });

var myElement = document.body;
myElement.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});
