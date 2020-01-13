import _ from "lodash";
import printMe from "./print";
import "./styles.scss";

function Component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "Webpack"], " ");
  element.classList.add("hello");
  return element;
}

document.body.appendChild(Component());
printMe();
