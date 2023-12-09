let hValue = document.querySelector(".hour-value"),
  cWatt = document.querySelector(".c-watt"),
  qValue = document.querySelector(".q-value");

const box = document.querySelectorAll(".box");
const title = document.querySelector(".title");
const list = document.querySelector(".list");
const back = document.querySelector(".back");
const inputData = document.querySelector(".input-data");
const resetBtn = document.querySelector(".reset");
const choose = document.querySelector(".choose");
const suggestWatt = document.querySelector(".suggest-watt");
const suggest = document.querySelector("#suggest");
const custom = document.querySelector("#custom");
const customWatt = document.querySelector(".custom-watt");
const submitBtn = document.querySelector(".submit-btn");
const suggestContainer = document.querySelector(".suggest");
const calculateBtn = document.querySelector(".calculate");
const inputMonth = document.querySelector("#i-month");
const tableBody = document.querySelector(".table-body");
const tableFooter = document.querySelector(".table-footer");
const cv = ["Ceramic_Vibrator"];
const cvWatt = ["7500"];
const em = ["Electric_Motor_Machine"];
const emWatt = ["250"];
const cm = ["Caren_Mache"];
const cmWatt = ["100"];
const wm = ["MIG", "Stick", "TIG", "palma"];
const wmWatt = ["3000", "3000", "6000", "10000"];
const ct = [
  "ChopSaw",
  "BandSaw",
  "Plasma_Cutting",
  "Waterjet_Cutting",
  "Laser_Cutting",
];
const ctWatt = ["2000", "3000", "1000", "3000", "5000"];
const light = ["LED_Normal", "LED_Light_Bulb", "LED_Light_Long_Bulb"];
const lightWatt = ["10", "15", "20"];

back.addEventListener("click", () => {
  list.classList.remove("d-none");
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
    title.innerHTML = e.target.innerText.toUpperCase();
    boxIndex = i;
    list.classList.add("d-none");
    inputData.classList.remove("d-none");
    if (box[i].classList.contains(1)) {
      resultFun(light, lightWatt);
    } else if (box[i].classList.contains(2)) {
      resultFun(cv, cvWatt);
    } else if (box[i].classList.contains(3)) {
      resultFun(cm, cmWatt);
    } else if (box[i].classList.contains(4)) {
      resultFun(wm, wmWatt);
    } else if (box[i].classList.contains(5)) {
      resultFun(ct, ctWatt);
    } else if (box[i].classList.contains(6)) {
      resultFun(em, emWatt);
    }
  });
}

let cmValue = cmWatt[cmWatt.length - 1],
  lightValue = lightWatt[lightWatt.length - 1],
  cvValue = cvWatt[cvWatt.length - 1],
  wmValue = wmWatt[wmWatt.length - 1],
  ctValue = ctWatt[ctWatt.length - 1],
  emValue = emWatt[emWatt.length - 1];

choose.addEventListener("change", () => {
  const value = choose.value,
    lightIndex = light.indexOf(value),
    cvIndex = cv.indexOf(value),
    cmIndex = cm.indexOf(value),
    wmIndex = wm.indexOf(value),
    ctIndex = ct.indexOf(value),
    emIndex = em.indexOf(value);
  if (lightIndex != -1) {
    suggestWatt.innerHTML = `<span>Suggest Watt : </span><span>${lightWatt[lightIndex]}</span><span> Watt</span>`;
    lightValue = lightWatt[lightIndex];
  } else if (cvIndex != -1) {
    suggestWatt.innerHTML = `<span>Suggest Watt : </span><span>${cvWatt[cvIndex]}</span><span> Watt</span>`;
    cvValue = cvWatt[cvIndex];
  } else if (cmIndex != -1) {
    suggestWatt.innerHTML = `<span>Suggest Watt : </span><span>${cmWatt[cmIndex]}</span><span> Watt</span>`;
    cmValue = cmWatt[cmIndex];
  } else if (wmIndex != -1) {
    suggestWatt.innerHTML = `<span>Suggest Watt : </span><span>${wmWatt[wmIndex]}</span><span> Watt</span>`;
    wmIndex = wmWatt[wmIndex];
  } else if (ctIndex != -1) {
    suggestWatt.innerHTML = `<span>Suggest Watt : </span><span>${ctWatt[ctIndex]}</span><span> Watt</span>`;
    ctValue = ctWatt[ctIndex];
  } else if (emIndex != -1) {
    suggestWatt.innerHTML = `<span>Suggest Watt : </span><span>${emWatt[emIndex]}</span><span> Watt</span>`;
    emValue = emWatt[emIndex];
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
          suggestValue = cvValue;
          break;
        case 2:
          suggestValue = cmValue;
          break;
        case 3:
          suggestValue = wmValue;
          break;
        case 4:
          suggestValue = ctValue;
          break;
        case 5:
          suggestValue = emValue;
          break;
      }
    }

    customValue = cWatt.value == "" ? 0 : cWatt.value;
    hourValue = hValue.value;
    quantityValue = qValue.value;

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
    list.classList.remove("d-none");
    inputData.classList.add("d-none");
    hValue.classList.remove("b-color");
    qValue.classList.remove("b-color");

    let dataObj = {
      titleValue: title.innerText,
      quantityValue: quantityValue,
      sessionValue: calculateValue,
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
        <td>${dataArray[i].quantityValue}</td>
        <td>${dataArray[i].sessionValue} Kwh</td>
      </tr>`;
        tableBody.innerHTML += tableString;
      }
      console.log("totalValue:", totalValue);
      console.log("inputValue", inputMonth.value);
      let finalValue = parseInt(Number(totalValue) * Number(inputMonth.value));
      let current = 0;
      let total = 0;
      let final = finalValue;
      if (final > 500) {
        current = final - 30;
        total = 500 * 125;
      } else {
        total = final * 125;
        current = 0;
      } //1 to 500

      if (current > 4500) {
        current -= 4500;
        total += 4500 * 135;
      } else {
        total += current * 135;
        current = 0;
      } // 500 - 5000
      if (current > 5000) {
        current -= 5000;
        total += 5000 * 145;
      } else {
        total += current * 145;
        current = 0;
      } //5000 - 10000
      if (current > 10000) {
        current -= 10000;
        total += 10000 * 155;
      } else {
        total += current * 155;
        current = 0;
      } // 10000 - 20000
      if (current > 30000) {
        current -= 30000;
        total += 30000 * 167;
      } else {
        total += current * 167;
        current = 0;
      } //20000 - 50000
      if (current > 50000) {
        current -= 50000;
        total += 50000 * 175;
      } else {
        total += current * 175;
        current = 0;
      } // 50000 - 100000
      if (current > 0) {
        total += current * 180;
        current = 0;
      }
      tableFooter.innerHTML = `<tr>
      <th scope="row" colspan="2">Unit per ${inputMonth.value} days</th>
      <td>${finalValue}</td>
    </tr>
    <tr>
      <th scope="row" colspan="2">Cost per ${inputMonth.value} days</th>
      <b><td>${total}</td></b>
    </tr>`;
      console.log(dataArray);
      console.log(inputMonth.value);
    } else {
      alert("enter your days");
      return;
    }
  } else {
    alert("Enter your item");
    return;
  }
});
