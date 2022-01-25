const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = ["black", "yellow", "green", "red", "#92eb34", "#7a34eb", "#3446eb","#eb346b", "#65eb34",  "#ebb134", "#a234eb", "#cc34eb"];

button.addEventListener("click",changeBackground);

let sıra = 0;

function changeBackground() {
    //rastgele renk
  //  const rastgele = Math.floor(Math.random() * colors.length);  
  //  const color = colors[rastgele];
  //  console.log(rastgele ,color);
  //  body.style.backgroundColor = color;

    //sırayla renk
    if(sıra == 12) sıra = 0;
    const renk = colors[sıra];
    sıra++;
    body.style.backgroundColor = renk;
}
