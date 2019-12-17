const fill = document.querySelector(".fill");
const empties = [...document.querySelectorAll(".empty")];

const dragStart = ({ target }) => {
  target.className += " hold";
  setTimeout(() => {
    target.className = "invisible";
  }, 0);
};

const dragEnd = ({ target }) => {
  target.className = "fill";
};

const dragOver = e => {
  e.preventDefault();
};
const dragEnter = e => {
  const { target } = e;
  e.preventDefault();
  target.className += " hovered";
};
const dragLeave = ({ target }) => {
  target.className = "empty";
};
const drop = ({ target }) => {
  target.className = "empty";
  target.append(fill);
};

fill.addEventListener("dragstart", dragStart);

fill.addEventListener("dragend", dragEnd);

empties.map(empty => {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", drop);
});
