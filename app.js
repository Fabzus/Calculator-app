const display = document.querySelector("#display");
const keys = document.querySelectorAll(".align");

keys.forEach((e) => {
  e.onclick = () => {
    if (e.id === "RESET") {
      display.innerText = "";
    } else if (e.id === "DEL") {
      let string = display.innerHTML.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerHTML !== "" && e.id === "EQUAL") {
      display.innerText = eval(display.innerText);
    } else if (display.innerHTML === "" && e.id === "EQUAL") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 1000);
    } else {
      display.innerText += e.id;
    }
  };
});

const dark = document.querySelector("#dark");
const ligh = document.querySelector("#light");
const wave = document.querySelector("#wave");
let root = document.documentElement;

dark.addEventListener("click", () => {
  root.style.setProperty("--t1-main-background", "hsl(222, 26%, 31%)");
  root.style.setProperty("--t1-secondary-background", "hsl(223, 31%, 20%)");
  root.style.setProperty("--t1-display-background", "hsl(224, 36%, 15%)");
  root.style.setProperty("--t1-blue-key-background", "hsl(225, 21%, 49%)");
  root.style.setProperty("--t1-blue-key-shadow", "hsl(224, 28%, 35%)");
  root.style.setProperty("--t1-red-key-background", "hsl(6, 63%, 50%)");
  root.style.setProperty("--t1-red-key-shadow", "hsl(6, 70%, 34%)");
  root.style.setProperty("--t1-grey-key-background", "hsl(30, 25%, 89%)");
  root.style.setProperty("--t1-grey-key-shadow", "hsl(28, 16%, 65%)");
  root.style.setProperty("--t1-key-text", "hsl(221, 14%, 31%)");
  root.style.setProperty("--t1-text", "white");
  root.style.setProperty("--t1-display", "white");
  wave.style.setProperty("opacity", "0");
  light.style.setProperty("opacity", "0");
  dark.style.setProperty("opacity", "1");
});

light.addEventListener("click", () => {
  root.style.setProperty("--t1-main-background", "hsl(0, 0%, 90%)");
  root.style.setProperty("--t1-secondary-background", "hsl(0, 5%, 81%)");
  root.style.setProperty("--t1-display-background", "hsl(0, 0%, 93%)");
  root.style.setProperty("--t1-blue-key-background", "hsl(185, 42%, 37%)");
  root.style.setProperty("--t1-blue-key-shadow", "hsl(185, 58%, 25%)");
  root.style.setProperty("--t1-red-key-background", "hsl(25, 98%, 40%)");
  root.style.setProperty("--t1-red-key-shadow", "hsl(25, 99%, 27%)");
  root.style.setProperty("--t1-grey-key-background", "hsl(45, 7%, 89%)");
  root.style.setProperty("--t1-grey-key-shadow", "hsl(35, 11%, 61%)");
  root.style.setProperty("--t1-key-text", "hsl(60, 10%, 19%)");
  root.style.setProperty("--t1-text", "white");
  root.style.setProperty("--t1-display", "hsl(60, 10%, 19%)");
  wave.style.setProperty("opacity", "0");
  light.style.setProperty("opacity", "1");
  dark.style.setProperty("opacity", "0");
});

wave.addEventListener("click", () => {
  root.style.setProperty("--t1-main-background", "hsl(268, 75%, 9%)");
  root.style.setProperty("--t1-secondary-background", "hsl(268, 71%, 12%)");
  root.style.setProperty("--t1-display-background", "hsl(268, 71%, 12%) ");

  root.style.setProperty("--t1-blue-key-background", "hsl(281, 89%, 26%)");
  root.style.setProperty("--t1-blue-key-shadow", "hsl(285, 91%, 52%)");
  root.style.setProperty("--t1-red-key-background", "hsl(176, 100%, 44%)");
  root.style.setProperty("--t1-red-key-shadow", "hsl(177, 92%, 70%)");
  root.style.setProperty("--t1-grey-key-background", "hsl(268, 47%, 21%)");
  root.style.setProperty("--t1-grey-key-shadow", "hsl(290, 70%, 36%)");

  root.style.setProperty("--t1-key-text", "hsl(52, 100%, 62%)");
  root.style.setProperty("--t1-text", "white");
  root.style.setProperty("--t1-display", "hsl(52, 100%, 62%)");
  wave.style.setProperty("opacity", "1");
  light.style.setProperty("opacity", "0");
  dark.style.setProperty("opacity", "0");
});
