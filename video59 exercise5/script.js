function createCard(title, cName, views, monthsOld, duration, thumbnail) {
  //finish this function
  let viewStr;
  if (views < 1000) {
    viewStr = views;
  }
  else if (views >= 1000000) {
    viewStr = views / 1000000 + "M";
  }
  else {
    viewStr = views / 1000 + "K";
  }


  let html = `<div class="card">
          <div class="image">
            <img src="${thumbnail}" alt="">
           <div class="capsule">
           ${duration}</div>
          </div>
          <div class="text">
             <h1>${title}</h1>
             <p>${cName} .${viewStr} views . ${monthsOld} months old</p>
        </div>
    </div>`;

document.querySelector(".container").innerHTML += html;
}
createCard("Introdunction to backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22","https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLABJhdIBqlilwXKzJqa6StynbJT4Q");
