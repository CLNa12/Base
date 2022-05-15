export const mixitup = () => {
  const linkEls = document.querySelectorAll(".link.change-category");
  const itemEls = document.querySelectorAll(".special__box");

  const resetList = () => {
    itemEls.forEach((el) => el.classList.remove("item-hidden"));
  };

  const sortList = (category) => {
    resetList();

    document.querySelectorAll(`.item:not(.item--${category})`).forEach((el) => {
      el.classList.add("item-hidden");
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    const category = event.target.dataset.category;

    if (category === "all") {
      resetList();
      return;
    }

    sortList(category);
  };

  linkEls.forEach((el) => {
    el.addEventListener("click", handleClick);
  });
};
