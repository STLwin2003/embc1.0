const myanmar = [
  "အိမ်သုံးပစ္စည်း မီတာ ခန့်မှန်းချက်",
  "မီးသီး",
  "ပန်ကာ",
  "ကွန်ပြူတာ",
  "မိုဘိုင်းဖုန်း",
  "မီးဖိုချောင်သုံး",
  "အဲယားကွန်း",
  "အဝတ်လျှော်စက်",
  "ရေခဲသေတ္တာ",
  "တီဗီ",
  "လျှပ်စစ်မီးပူ",
  "အထွေထွေသုံး",
  "ရေပူ၊ရေအေး",
  "ရက်ကို ရိုက်ထည့်ပါ",
  "တွက်ချက်မည်",
  "ပြန်လည်သတ်မှတ်မည်",
  "အိမ်သုံးပစ္စည်း မီတာ ခန့်မှန်းချက်",
  "အကြံပြုသည်",
  "စိတ်ကြိုက်",
  "သင့်စိတ်ကြိုက်တန်ဖိုးကို ထည့်သွင်းပါ",
  "သင်၏နာရီကိုထည့်သွင်းပါ",
  "သင်၏အရေအတွက်ကိုထည့်ပါ",
  "တင်ပြပါ",
  "မီတာခန့်မှန်းချက်",
  "ပစ္စည်း",
  "အမျိုးအစား",
  "အရေအတွက်",
  "ယူနစ်(kWh)",
  "ပိတ်သိမ်း",
];
const english = [
  "Household Appliances Meter Prediction",
  "Light",
  "Fan",
  "Computer",
  "Phone",
  "Kitchen",
  "Air Con",
  "Washing Machine",
  "Refrigerator",
  "TV",
  "Electric Iron",
  "General use",
  "Water Conditioner",
  "Enter Your Day",
  "Calculate",
  "Reset",
  "Household Appliances Meter Prediction",
  "Suggest",
  "Custom",
  "Enter Your Custom Value",
  "Enter Your Hour",
  "Enter Your Quantity",
  "Submit",
  "Meter Prediction",
  "Item",
  "Type",
  "Quantity",
  "Unit(kWh)",
  "Close",
];

console.log(myanmar.length);
console.log(english.length);
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
  localStorage.setItem("lang", "myanmar");
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
