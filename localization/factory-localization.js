const myanmar = [
  "စက်ရုံသုံးပစ္စည်း မီတာ ခန့်မှန်းချက်",
  "မီးသီး",
  "ဘိလပ်မြေသိပ်စက်",
  "ကရိန်းစက်",
  "ဂဟေဆော်စက်",
  "ဖြတ်စက်",
  "လျှပ်စစ်မော်တာ",
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
  "အမျိုးအစား",
  "အရေအတွက်",
  "ယူနစ်(kWh)",
  "ပိတ်သိမ်း",
];
const english = [
  "Household Appliances Meter Prediction",
  "Light",
  "Ceramic V",
  "Crane",
  "Welding",
  "Cutting",
  "Electric motor",
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
  "Type",
  "Quantity",
  "Unit(kWh)",
  "Close",
];
const myanmarLang = document.querySelector(".myan");
const englishLang = document.querySelector(".eng");
const textLang = document.querySelectorAll(".text-lang");
// const hvText = document.querySelector("#hV");
// const qvText = document.querySelector("#qV");
// const cvText = document.querySelector("#cV");

let getLang = String(localStorage.getItem("lang")).toLowerCase();
localStorage.setItem("lang", getLang);
if (getLang == "myanmar") {
  //   hvText.placeholder = myanmar[13];
  //   cvText.placeholder = myanmar[14];
  //   qvText.placeholder = myanmar[15];
  for (let i = 0; i < textLang.length; i++) {
    textLang[i].innerHTML = myanmar[i];
  }
} else {
  //   hvText.placeholder = english[13];
  //   cvText.placeholder = english[14];
  //   qvText.placeholder = english[15];
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
