let KEY = "KPhgYOGN9_G1Yy_EfyPhi7VHREFuSbs-kG6bS4VP1S4";
let btn = document.getElementById("btn");
let input = document.getElementById("search");
let cardSection = document.querySelector(".cardSection");
let more = document.getElementById("more");

btn.addEventListener("click", () => {
  let keyword = input.value;
  fetchImg(keyword);
  document.querySelector(".cardSection").innerHTML = "";
});
async function fetchImg(keyword) {
  let response = await fetch(
    `https://api.unsplash.com/search/photos?query=${keyword}&client_id=${KEY}`
  );
  let res = await response.json();
  displayImg(res);
}

let displayImg = function (res) {
  res.results.map((data) => {
    let cards = document.createElement("div");
    cards.setAttribute("class", "card");
    cards.innerHTML = `
        <div class="searchImg">
        <img src=${data.urls.small} alt="">
        </div>
        <div class="imgDesc">
        <p>${data.alt_description} </p>
        </div>
        <div class="user">
        <img src=${data.user.profile_image.large} alt="">
        <div class="username">
        <p >${data.user.first_name}</p>
        <p >${data.created_at.split("T")[0]} </p>
        </div>
        
        </div>`;
    cardSection.appendChild(cards);
  });
  more.classList.add("visible");
};
