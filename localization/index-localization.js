const myanmar = [
  "လျှပ်စစ်မီတာဘေလ် တွက်ချက်ခြင်း",

  "မီတာ ယူနစ်အတိအကျတွက်ရန် မီတာ ခလုတ်ကို နှိပ်ပါ။ ခန့်မှန်းမီတာ ယူနစ်ကို တွက်လိုပါက ခန့်မှန်းခြင်း ခလုတ်ကို နှိပ်ပါ။",
  "မီတာ",
  "ခန့်မှန်းခြင်း",
  "အိမ်ထောင်စု",
  "စက်ရုံ",
  "ကျွန်တော်တို့အကြောင်း",
  "လျှပ်စစ်မီတာဘေလ် တွက်ချက်ခြင်း",

  "လျှပ်စစ် မီတာတွက်ချက်ခြင်း software ကို နည်းပညာတက္ကသိုလ် IT major  ဒုတိယနှစ် project အဖြစ် ကျောင်းသားများမှ ရေးသားခဲ့ပါသည်။ဤsoftware တွင် meter unit များကို အိမ်သုံးနှင့်လုပ်ငန်းသုံးဟူ၍ ကုန်ကျငွေတွက်ချက်နိုင်ခြင်း၊ကျသင့်ငွေ ခန့်မှန်းနိုင်ခြင်း စသော လုပ်ဆောင်ချက်များကို လုပ်ဆောင်နိုင်သည်။",
];

const english = [
  "Electricity Meter Bill Calculator",

  "You can click Meter button to calculate the specific <br />amount of cost from your daily, monthly or yearly meter units,<br />oryou can click Predict button to predict the meter unit <br />and cost of your home or factory.",
  "Meter",
  "Predict",
  "Household",
  "Factory",
  "About us",
  "Electricity Meter Bill Calculator",

  "Electricity meter bill calculation software is the project of PTU(pathein technological university)IT second year students. Our goals is to perform the real tasks of actual workspace within the short period of time. Our software can perform meter prediction tasks and can handle a lots of big specific calculation problems.",
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
