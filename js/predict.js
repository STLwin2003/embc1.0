// var watt3 = document.getElementById("watt3");
// var q3 = document.getElementById("q3");
// var hour3 = document.getElementById("hour3");
let cWatt = document.querySelector(".c-watt"),
  hValue = document.querySelector(".hour-value"),
  qValue = document.querySelector(".q-value");
const menu = document.querySelector(".menu"),
  title = document.querySelector(".title"),
  box = document.querySelectorAll(".box"),
  back = document.querySelector(".back"),
  inputData = document.querySelector(".input-data"),
  resetBtn = document.querySelector(".reset"),
  submitBtn = document.querySelector(".submit-btn"),
  choose = document.querySelector(".choose"),
  suggestWatt = document.querySelector(".suggest-watt"),
  suggestContainer = document.querySelector(".suggest"),
  suggest = document.querySelector("#suggest"),
  custom = document.querySelector("#custom"),
  customWatt = document.querySelector(".custom-watt"),
  calculateBtn = document.querySelector(".calculate"),
  inputMonth = document.querySelector("#i-month"),
  tableBody = document.querySelector(".table-body"),
  tableFooter1 = document.querySelector(".tfooter1"),
  fan = ["Large", "Medium", "Small"],
  fanWatt = ["53", "40", "24"],
  light = ["LED_Normal", "LED_Light_Bulb", "LED_Light_Long_Bulb"],
  lightWatt = ["10", "15", "20"],
  computer = ["Computer"],
  computerWatt = ["50"],
  phone = ["PowerBank", "Bluetooth", "Earbud", "Phone"],
  phoneWatt = ["12", "22.4", "33", "40", "65"],
  kitchen = [
    "ရေနွေးအိုး",
    "ဟင်းချက်ဒယ်အိုး",
    "အိုးအသေး",
    "ပေါင်းအိုး",
    "လျှပ်စစ်မီးဖို",
  ],
  kitchenWatt = ["1500", "1000", "300", "700", "2000"],
  aricon = ["1hp", "1.5hp", "2hp"],
  airconWatt = ["746", "1118", "1492"],
  washingMechine = ["Auto", "2ကန်"],
  washingMechineWatt = ["500", "400"],
  refrigerator = ["Large", "Medium", "Small"],
  refrigeratorWatt = ["120", "100", "60"],
  tv = ['21"မှ32"ကြား', '32"လက်မအထက်'],
  tvWatt = ["60", "100"],
  elecctricIron = ["Electric Iron"],
  elecctricIronWatt = ["2200"],
  generalUse = ["ဓာတ်မီးအားသွင်း", "မီးသီးအားသွင်း"],
  generalUseWatt = ["no suggest", "no suggest"],
  waterConditioner = ["အပူအအေးနှစ်မျိုးရ", "အအေးတစ်မျိုးရ"],
  waterConditionerWatt = ["420", "90"];

back.addEventListener("click", () => {
  menu.classList.remove("d-none");
  inputData.classList.add("d-none");
});
resetBtn.addEventListener("click", () => {
  location.reload();
});
function resultFun(item, watt) {
  choose.innerHTML = "";
  suggestWatt.innerHTML = "";
  for (let j = 0; j < item.length; j++) {
    const str = `<option value= ${item[j]} class = "choose" selected>${item[j]}</option>`;
    choose.innerHTML += str;
  }
  suggestWatt.innerHTML = `<span>Suggest Watt : </span><span>${
    watt[watt.length - 1]
  }</span><span> Watt</span>`;
}

let boxIndex;
for (let i = 0; i < box.length; i++) {
  box[i].addEventListener("click", (e) => {
    console.log(e.target.innerText);
    title.innerHTML = e.target.innerText.toUpperCase();
    boxIndex = i;
    menu.classList.add("d-none");
    inputData.classList.remove("d-none");
    if (box[i].classList.toString().match("fan") == "fan") {
      resultFun(fan, fanWatt);
    } else if (box[i].classList.toString().match("light") == "light") {
      resultFun(light, lightWatt);
    } else if (box[i].classList.toString().match("computer") == "computer") {
      resultFun(computer, computerWatt);
    } else if (box[i].classList.toString().match("phone") == "phone") {
      resultFun(phone, phoneWatt);
    } else if (box[i].classList.toString().match("kitchen") == "kitchen") {
      resultFun(kitchen, kitchenWatt);
    } else if (box[i].classList.toString().match("aricon") == "aricon") {
      resultFun(aricon, airconWatt);
    } else if (
      box[i].classList.toString().match("washing-mechine") == "washing-mechine"
    ) {
      resultFun(washingMechine, washingMechineWatt);
    } else if (
      box[i].classList.toString().match("refrigerator") == "refrigerator"
    ) {
      resultFun(refrigerator, refrigeratorWatt);
    } else if (box[i].classList.toString().match("tv") == "tv") {
      resultFun(tv, tvWatt);
    } else if (
      box[i].classList.toString().match("elecctric-iron") == "elecctric-iron"
    ) {
      resultFun(elecctricIron, elecctricIronWatt);
    } else if (
      box[i].classList.toString().match("general-use") == "general-use"
    ) {
      resultFun(generalUse, generalUseWatt);
    } else if (
      box[i].classList.toString().match("water-conditioner") ==
      "water-conditioner"
    ) {
      resultFun(waterConditioner, waterConditionerWatt);
    }
  });
}
let fanValue = fanWatt[fanWatt.length - 1],
  lightValue = lightWatt[lightWatt.length - 1],
  computerValue = computerWatt[computerWatt.length - 1],
  phoneValue = phoneWatt[phoneWatt.length - 1],
  kitchenValue = kitchenWatt[kitchenWatt.length - 1],
  ariconValue = airconWatt[airconWatt.length - 1],
  washingMechineValue = washingMechineWatt[washingMechineWatt.length - 1],
  refrigeratorValue = refrigeratorWatt[refrigeratorWatt.length - 1],
  tvValue = tvWatt[tvWatt.length - 1],
  elecctricIronValue = elecctricIronWatt[elecctricIronWatt.length - 1],
  generalUseValue = generalUseWatt[generalUseWatt.length - 1],
  waterConditionerValue = waterConditionerWatt[waterConditionerWatt.length - 1];
choose.addEventListener("change", () => {
  const value = choose.value,
    fanIndex = fan.indexOf(value),
    lightIndex = light.indexOf(value),
    computerIndex = computer.indexOf(value),
    phoneIndex = phone.indexOf(value),
    kitchenIndex = kitchen.indexOf(value),
    ariconIndex = aricon.indexOf(value),
    washingMechineIndex = washingMechine.indexOf(value),
    refrigeratorIndex = refrigerator.indexOf(value),
    tvIndex = tv.indexOf(value),
    elecctricIronIndex = elecctricIron.indexOf(value),
    generalUseIndex = generalUse.indexOf(value),
    waterConditionerIndex = waterConditioner.indexOf(value);
  if (fanIndex != -1) {
    suggestWatt.innerHTML = `<span>Suggest Watt : </span><span>${fanWatt[fanIndex]}</span><span> Watt</span>`;
    fanValue = fanWatt[fanIndex];
  } else if (lightIndex != -1) {
    suggestWatt.innerHTML = `<span>Suggest Watt : </span><span>${lightWatt[lightIndex]}</span><span> Watt</span>`;
    lightValue = lightWatt[lightIndex];
  } else if (computerIndex != -1) {
    suggestWatt.innerHTML = `<span>Suggest Watt : </span><span>${computerWatt[computerIndex]}</span><span> Watt</span>`;
    computerValue = computerWatt[computerIndex];
  } else if (phoneIndex != -1) {
    suggestWatt.innerHTML = `<span>Suggest Watt : </span><span>${phoneWatt[phoneIndex]}</span><span> Watt</span>`;
    phoneValue = phoneWatt[phoneIndex];
  } else if (kitchenIndex != -1) {
    suggestWatt.innerHTML = `<span>Suggest Watt : </span><span>${kitchenWatt[kitchenIndex]}</span><span> Watt</span>`;
    kitchenValue = kitchenWatt[kitchenIndex];
  } else if (ariconIndex != -1) {
    suggestWatt.innerHTML = `<span>Suggest Watt : </span><span>${airconWatt[ariconIndex]}</span><span> Watt</span>`;
    ariconValue = airconWatt[ariconIndex];
  } else if (washingMechineIndex != -1) {
    suggestWatt.innerHTML = `<span>Suggest Watt : </span><span>${washingMechineWatt[washingMechineIndex]}</span><span> W<att/span>`;
    washingMechineValue = washingMechineWatt[washingMechineIndex];
  } else if (refrigeratorIndex != -1) {
    suggestWatt.innerHTML = `<span>Suggest Watt : </span><span>${refrigeratorWatt[refrigeratorIndex]}</span><span> Watt</span>`;
    refrigeratorValue = refrigeratorWatt[refrigeratorIndex];
  } else if (tvIndex != -1) {
    suggestWatt.innerHTML = `<span>Suggest Watt : </span><span>${tvWatt[tvIndex]}</span><span> Watt</span>`;
    tvValue = tvWatt[tvIndex];
  } else if (elecctricIronIndex != -1) {
    suggestWatt.innerHTML = `<span>Suggest Watt : </span><span>${elecctricIronWatt[elecctricIronIndex]}</span><span> Watt</span>`;
    elecctricIronValue = elecctricIronWatt[elecctricIronIndex];
  } else if (generalUseIndex != -1) {
    suggestWatt.innerHTML = `<span>Suggest Watt : </span><span>${generalUseWatt[generalUseIndex]}</span><span> Watt</span>`;
    generalUseValue = generalUseWatt[generalUseIndex];
  } else if (washingMechineIndex != -1) {
    suggestWatt.innerHTML = `<span>Suggest Watt : </span><span>${waterConditionerWatt[waterConditionerIndex]}</span><span> Watt</span>`;
    waterConditionerValue = waterConditionerWatt[waterConditionerIndex];
  }
});

custom.addEventListener("click", () => {
  suggestWatt.classList.add("d-none");
  suggest.classList.remove("checked");
  customWatt.classList.remove("d-none");
  custom.classList.add("checked");
  choose.classList.add("d-none");
});
suggest.addEventListener("click", () => {
  suggestWatt.classList.remove("d-none");
  suggest.classList.add("checked");
  customWatt.classList.add("d-none");
  custom.classList.remove("checked");
  choose.classList.remove("d-none");
});
let suggestValue = 0,
  customValue,
  hourValue,
  quantityValue,
  totalValue = 0,
  dataArray = [];
submitBtn.addEventListener("click", () => {
  if (hValue.value && qValue.value) {
    box[boxIndex].classList.add("disabled-btn");
    box[boxIndex].classList.add("select");
    if (suggestContainer.classList.contains("checked")) {
      switch (boxIndex) {
        case 0:
          suggestValue = lightValue;
          break;
        case 1:
          suggestValue = fanValue;
          break;
        case 2:
          suggestValue = computerValue;
          break;
        case 3:
          suggestValue = phoneValue;
          break;
        case 4:
          suggestValue = kitchenValue;
          break;
        case 5:
          suggestValue = ariconValue;
          break;
        case 6:
          suggestValue = washingMechineValue;
          break;
        case 7:
          suggestValue = refrigeratorValue;
          break;
        case 8:
          suggestValue = tvValue;
          break;
        case 9:
          suggestValue = elecctricIronValue;
          break;
        case 10:
          suggestValue = generalUseValue == "no suggest" ? 0 : generalUseValue;
          break;
        case 11:
          suggestValue = waterConditionerValue;
          break;
      }
    }

    customValue = cWatt.value == "" ? 0 : cWatt.value;
    hourValue = hValue.value;
    quantityValue = qValue.value;
    console.log("chooseValue :", choose.value);
    console.log("titleValue :", title.innerText);
    console.log("suggestVale :", suggestValue);
    console.log("customValue :", customValue);
    console.log("hourValue :", hourValue);
    console.log("quantityValue :", quantityValue);

    const calculateValue =
      ((suggestValue + customValue) / 1000) * hourValue * quantityValue;
    totalValue += calculateValue;
    console.log("calculate value : ", calculateValue);
    console.log("final value : ", totalValue);
    cWatt.value = "";
    hValue.value = "";
    qValue.value = "";
    suggest.checked = true;
    customWatt.classList.add("d-none");
    suggestWatt.classList.remove("d-none");
    choose.classList.remove("d-none");
    menu.classList.remove("d-none");
    inputData.classList.add("d-none");
    hValue.classList.remove("b-color");
    qValue.classList.remove("b-color");

    let dataObj = {
      titleValue: title.innerText,
      quantityValue: quantityValue,
      sessionValue: calculateValue,
      chooseValue: choose.value,
    };
    console.log(dataObj);
    dataArray.push(dataObj);
    console.log(quantityValue);
  } else {
    hValue.classList.add("b-color");
    qValue.classList.add("b-color");
    return;
  }
});
calculateBtn.addEventListener("click", () => {
  if (totalValue > 0) {
    if (inputMonth.value != "") {
      tableBody.innerHTML = "";
      for (let i = 0; i < dataArray.length; i++) {
        const tableString = `<tr>
      <th scope="row">${dataArray[i].titleValue}</th>
      <td>${dataArray[i].chooseValue}</td>
      <td>${dataArray[i].quantityValue}</td>
      <td>${dataArray[i].sessionValue} kWh</td>
    </tr>`;
        tableBody.innerHTML += tableString;
      }
      console.log("totalValue:", totalValue);
      console.log("inputValue", inputMonth.value);
      let finalValue = parseInt(Number(totalValue) * Number(inputMonth.value));
      let current = 0;
      let total = 0;
      let final = finalValue;
      if (final > 30) {
        current = final - 30;
        total = 30 * 35;
      } else {
        total = final * 35;
        current = 0;
      } //1 to 30
      console.log("total", total);
      if (current > 20) {
        current -= 20;
        total += 20 * 50;
      } else {
        total += current * 50;
        current = 0;
      } // 30 to 50
      if (current > 25) {
        current -= 25;
        total += 25 * 70;
      } else {
        total += current * 50;
        current = 0;
      } //50 to 75
      if (current > 25) {
        current -= 25;
        total += 25 * 90;
      } else {
        total += current * 90;
        current = 0;
      } // 75 to 100
      if (current > 50) {
        current -= 50;
        total += 50 * 110;
      } else {
        total += current * 110;
        current = 0;
      } //100 to 150
      if (current > 50) {
        current -= 50;
        total += 50 * 120;
      } else {
        total += current * 120;
        current = 0;
      } // 150 to 200
      if (current > 0) {
        total += current * 125;
        current = 0;
      }

      tableFooter1.innerHTML = `<tr>
    <th scope="row" colspan="3">Unit per ${inputMonth.value} days</th>
    <td>${final}</td>
   

  </tr><tr>
  <th scope="row" colspan="3">Cost per ${inputMonth.value} days</th>
  <td><b>${total} MMK</b></td></tr>`;

      console.log(dataArray);
      console.log(inputMonth.value);
    } else {
      alert("Enter your day");
      return;
    }
  } else {
    alert("Enter your item");
    return;
  }
});
