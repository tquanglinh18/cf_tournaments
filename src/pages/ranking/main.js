let CURRENT_TAB_SELECT = 1;
const tabSelectItem = document.querySelectorAll(".tab_select_item");

const TYPE_POSITION_TAB = {
  previous: "tab_select_item--previous",
  center: "tab_select_item--center",
  next: "tab_select_item--next",
};

tabSelectItem.forEach((tabSelect, index) => {
  tabSelect.addEventListener("click", function () {
    const tabPositionSelect = tabSelect.dataset.position;
    const tabTableRanking = document.querySelectorAll(".tab_table_ranking");

    tabSelect.classList.remove(TYPE_POSITION_TAB[tabPositionSelect]);
    tabSelectItem[CURRENT_TAB_SELECT].classList.remove(
      TYPE_POSITION_TAB.center
    );

    tabSelect.classList.add(TYPE_POSITION_TAB.center);
    tabSelectItem[CURRENT_TAB_SELECT].classList.add(
      TYPE_POSITION_TAB[tabPositionSelect]
    );

    tabSelectItem[CURRENT_TAB_SELECT].dataset.position = tabPositionSelect;
    tabSelect.dataset.position = "center";

    tabTableRanking.forEach((tabTable, tabIndex) => {
      tabTable.style.display = tabIndex === index ? "block" : "none";
    });

    CURRENT_TAB_SELECT = index;
  });
});
