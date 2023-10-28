

let kilo=Number(prompt("Kilonuzu giriniz : "));

let boy=Number(prompt("Boyunuzu metre cinsinden  giriniz : "));

let sonuc=kilo/(boy*boy);

if (sonuc<18.5) {
   alert("ideal kilonun altında")
}
else if (sonuc>18.5 && sonuc<24.9) {  
    alert("ideal kiloda")
}
else if (sonuc>25 && sonuc<29.9) {
    alert("ideal kilonun üstünde")
}
else if (sonuc>30 && sonuc<39.9) {
    alert("İdeal kilonun çok üstünde")
}
else if (sonuc>40) {
    alert("Morbid obez")
}

