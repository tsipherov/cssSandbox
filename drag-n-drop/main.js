document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll(".box");
  const dropEl = document.querySelector(".dropped");
  console.log(dropEl);

  //   boxes.forEach((el) =>
  //   );

  boxes.forEach((el) => {
    el.addEventListener("dragleave", (e) => {
      el.style.backgroundColor = "#9f3bfd";
    });
    el.addEventListener("dragover", (event) => {
      // prevent default to allow drop
      event.preventDefault();
      el.style.backgroundColor = "#8122da";
    });
    el.addEventListener("drop", function (e) {
      e.preventDefault();
      dropEl.parentNode.removeChild(dropEl);
      e.target.appendChild(dropEl);
    });
  });
});
