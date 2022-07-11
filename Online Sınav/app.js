let sunucudanGelen;
const baglanti = new XMLHttpRequest();

baglanti.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    
        sunucudanGelen=JSON.parse(baglanti.responseText);
        soruGetir();
    }
    return sunucudanGelen;
};

baglanti.open("GET", "data.json", true);
baglanti.send();

const goruntulemeAlani=document.getElementById("sinav");
const cevapSecenekleri=document.querySelectorAll(".secenek");
const mevcutSoru=document.getElementById("soru");

const aAciklama=document.getElementById("aAciklama");
const bAciklama=document.getElementById("bAciklama");
const cAciklama=document.getElementById("cAciklama");
const dAciklama=document.getElementById("dAciklama");

const gonderButonu=document.getElementById("sinavGonder");

let puan=0;
let sira=0;

function soruGetir(){
    secimleriSifirla();

    console.log(sunucudanGelen);
    let siradakiSoruIcerigi=sunucudanGelen.sorular[sira];

    mevcutSoru.innerHTML=siradakiSoruIcerigi.soru;
    aAciklama.innerText=siradakiSoruIcerigi.secenekA;
    bAciklama.innerText=siradakiSoruIcerigi.secenekB;
    cAciklama.innerText=siradakiSoruIcerigi.secenekC;
    dAciklama.innerText=siradakiSoruIcerigi.secenekD;


}
function secimleriSifirla(){
    cevapSecenekleri.forEach(secenek => secenek.checked=false);
}

function secimiAl() {
    let secim;
    
    cevapSecenekleri.forEach(secenek => {
        if(secenek.checked) {
            secim = secenek.id;
        }
    })

    return secim;
    console.log(secim);
}

gonderButonu.addEventListener('click', () =>{
    const secim = secimiAl();
  
        if(secim){
          if(secim === sunucudanGelen.sorular[sira].dogruCevap) {
            puan++;
          }
  
          sira++;
  
          if(sira < sunucudanGelen.sorular.length) {
              soruGetir();
          } else {
              
              goruntulemeAlani.innerHTML = `
                  <h2>Mevcut sorulardan ${puan}/${sunucudanGelen.sorular.length} oranında başarı sağladınız.</h2>
  
                  <button onclick="location.reload()">Yeniden Başla</button>
              `
              
          }
        }
  })
