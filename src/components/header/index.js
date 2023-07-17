window.onload = function () {
  const btnNotifyElm = document.getElementById("notify-btn");
  btnNotifyElm.addEventListener("click", () => {
    const notifyListElm = document.getElementById("notify-list");
    notifyListElm.classList.toggle("hidden");
  });

  const btnMenuMobileElm = document.getElementById("menu_icon_mobile");
  btnMenuMobileElm.addEventListener("click", () => {
    const menuMobileElm = document.getElementById("menu-mobile");
    menuMobileElm.classList.toggle("hidden");
  });
};
