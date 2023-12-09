const myanmar = [
  "မီတာယူနစ်တွက်ချက်ခြင်း",
  "မီတာ အမျိုးအစားရွေးပါ။",
  "အိမ်သုံး",
  "လုပ်ငန်းသုံး",
  "မီတာယူနစ်ရိုက်ထည့်ပါ။",
  "တွက်ချက်မည်",
  "အိမ်မီတာ ယူနစ်တွက်ချက်ခြင်း",
  "ကန့်သတ်",
  "ယူနစ်",
  "ကုန်ကျစရိတ် (mmk ဖြင့်)",
  "စုစုပေါင်းကုန်ကျစရိတ်",
];
const english = [
  "Meter Unit Calculation",
  "Please choose your meter type",
  "Home",
  "Business",
  "Enter Your Meter Unit",
  "Calculate",
  "Home Meter Unit Calculation",
  "LIMIT",
  "UNIT",
  "COST(in mmk)",
  "Total Cost",
];

const myanmarLang = document.querySelector(".myan");
const englishLang = document.querySelector(".eng");
const textLang = document.querySelectorAll(".text-lang");
let getLang = String(localStorage.getItem("lang")).toLowerCase();
localStorage.setItem("lang", getLang);
if (getLang == "myanmar") {
  for (let i = 0; i < textLang.length; i++) {
    textLang[i].innerHTML = myanmar[i];
  }
} else {
  for (let i = 0; i < textLang.length; i++) {
    textLang[i].innerHTML = english[i];
  }
}
myanmarLang.addEventListener("click", () => {
  localStorage.setItem("lang", getLang);
  for (let i = 0; i < textLang.length; i++) {
    textLang[i].innerHTML = myanmar[i];
  }
});
englishLang.addEventListener("click", () => {
  localStorage.setItem("lang", "english");
  for (let i = 0; i < textLang.length; i++) {
    textLang[i].innerHTML = english[i];
  }
});
