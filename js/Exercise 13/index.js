
function createCard(title, cName, views, monthsOld, duration, thumbnail) {
  let viewsStr;
  if (views < 1000) {
    viewsStr = views;
  } else if (views > 1000000) {
    viewsStr = views / 10000 + "M"

  } else {
    viewsStr = views / 1000 + "K";
  }

  let html = ` <div class="card">
      <div class="image">
        <img src="${thumbnail}" alt="">
        <div class="capsule">${duration}</div>
      </div>
      <div class="text">
        <h1>${title}</h1>
        <p>${cName} . ${viewsStr} view . ${monthsOld} Months ago</p>
      </div>
    </div>`
  document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;
}

createCard("Introduction to backend | sigma web dev video #2", "CodeWithRahul", 270000, 7, "31:23", "https://i.ytimg.com/vi/UzYRQURh_pY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCqIwQwDx1EIDwleUS2D1CGiar3LQ");


