function loadJS() {
  const outstandingBtn = document.getElementById("outstanding-btn");
  const outstanding = document.getElementById("outstanding");

  outstandingBtn.addEventListener("click", function () {
    outstanding.scrollIntoView({
      block: "center",
      behavior: "smooth",
      inline: "start",
    });
  });

  const upcomingBtn = document.getElementById("upcoming-btn");
  const upcoming = document.getElementById("upcoming");

  upcomingBtn.addEventListener("click", function () {
    upcoming.scrollIntoView({
      block: "center",
      behavior: "smooth",
      inline: "start",
    });
  });

  const happeningBtn = document.getElementById("happening-btn");
  const happening = document.getElementById("happening");

  happeningBtn.addEventListener("click", function () {
    happening.scrollIntoView({
      block: "center",
      behavior: "smooth",
      inline: "start",
    });
  });

  const finishedBtn = document.getElementById("finished-btn");
  const finished = document.getElementById("finished");

  finishedBtn.addEventListener("click", function () {
    finished.scrollIntoView({
      block: "center",
      behavior: "smooth",
      inline: "start",
    });
  });

  const rankingBtn = document.getElementById("ranking-btn");
  const ranking = document.getElementById("ranking");

  rankingBtn.addEventListener("click", function () {
    ranking.scrollIntoView({
      block: "center",
      behavior: "smooth",
      inline: "start",
    });
  });
}

window.onload = loadJS;
