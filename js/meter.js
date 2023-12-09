const home = document.querySelector("#home");
const business = document.querySelector("#business");
var meter = document.getElementById("meter");
if (home.checked) {
  homeFun();
}
home.addEventListener("click", (e) => {
  console.log(e.target.name);
  business.checked = false;
  home.checked = true;
  homeFun();
  meter.value = "";
});
business.addEventListener("click", (e) => {
  console.log(e.target.name);
  home.checked = false;
  business.checked = true;
  businessFun();
  meter.value = "";
});
function homeFun() {
  var meter = document.getElementById("meter");
  var result1 = document.getElementById("result1");
  var unit1 = document.getElementById("unit1");
  var cost1 = document.getElementById("cost1");
  var final = document.getElementById("final");
  const rowD2 = document.querySelector(".row-display-2"),
    rowD3 = document.querySelector(".row-display-3"),
    rowD4 = document.querySelector(".row-display-4"),
    rowD5 = document.querySelector(".row-display-5"),
    rowD6 = document.querySelector(".row-display-6"),
    rowD7 = document.querySelector(".row-display-7");

  function displayHide() {
    rowD2.classList.add("d-none");
    rowD3.classList.add("d-none");
    rowD4.classList.add("d-none");
    rowD5.classList.add("d-none");
    rowD6.classList.add("d-none");
    rowD7.classList.add("d-none");
  }

  document.getElementById("calculate").addEventListener("click", function () {
    if (meter.value > 0) {
      if (meter.value > 30) {
        var current = meter.value - 30;
        unit1.innerHTML = "1-30";
        cost1.innerHTML = 35;
        var total1 = 30 * 35;
        result1.innerHTML = 1050;
        displayHide();
        rowD2.classList.remove("d-none");
      } else {
        unit1.innerHTML = "1-30";
        cost1.innerHTML = 35;
        total1 = meter.value * 35;
        result1.innerHTML = meter.value * 35;
        current = 0;
        final.innerHTML = total1;
        console.log(total1);
        displayHide();
      }
      var result2 = document.getElementById("result2");
      var unit2 = document.getElementById("unit2");
      var cost2 = document.getElementById("cost2");

      if (current > 20) {
        current -= 20;
        unit2.innerHTML = "31-50";
        cost2.innerHTML = 50;
        var total2 = total1 + 1000;
        result2.innerHTML = 20 * 50;
        displayHide();
        rowD2.classList.remove("d-none");
        rowD3.classList.remove("d-none");
      } else {
        unit2.innerHTML = "31-50";
        cost2.innerHTML = 50;
        total2 = total1 + current * 50;
        result2.innerHTML = current * 50;
        current = 0;
        final.innerHTML = total2;
      }
      var result3 = document.getElementById("result3");
      var unit3 = document.getElementById("unit3");
      var cost3 = document.getElementById("cost3");

      if (current > 25) {
        current -= 25;
        unit3.innerHTML = "51-75";
        cost3.innerHTML = 70;
        var total3 = total2 + 1750;
        result3.innerHTML = 25 * 70;
        displayHide();
        rowD2.classList.remove("d-none");
        rowD3.classList.remove("d-none");
        rowD4.classList.remove("d-none");
      } else {
        unit3.innerHTML = "51-75";
        cost3.innerHTML = 70;
        total3 = total2 + current * 70;
        result3.innerHTML = current * 70;
        current = 0;
        final.innerHTML = total3;
      }
      var result4 = document.getElementById("result4");
      var unit4 = document.getElementById("unit4");
      var cost4 = document.getElementById("cost4");

      if (current > 25) {
        current -= 25;
        unit4.innerHTML = "76-100";
        cost4.innerHTML = 90;
        var total4 = total3 + 2250;
        result4.innerHTML = 25 * 90;
        displayHide();
        rowD2.classList.remove("d-none");
        rowD3.classList.remove("d-none");
        rowD4.classList.remove("d-none");
        rowD5.classList.remove("d-none");
      } else {
        unit4.innerHTML = "76-100";
        cost4.innerHTML = 90;
        total4 = total3 + current * 90;
        result4.innerHTML = current * 90;
        current = 0;
        final.innerHTML = total4;
      }
      var result5 = document.getElementById("result5");
      var unit5 = document.getElementById("unit5");
      var cost5 = document.getElementById("cost5");

      if (current > 50) {
        current -= 50;
        unit5.innerHTML = "101-150";
        cost5.innerHTML = 110;
        var total5 = total4 + 5500;
        result5.innerHTML = 50 * 110;
        displayHide();
        rowD2.classList.remove("d-none");
        rowD3.classList.remove("d-none");
        rowD4.classList.remove("d-none");
        rowD5.classList.remove("d-none");
        rowD6.classList.remove("d-none");
      } else {
        unit5.innerHTML = "101-150";
        cost5.innerHTML = 110;
        total5 = total4 + current * 110;
        result5.innerHTML = current * 110;
        current = 0;
        final.innerHTML = total5;
      }
      var result6 = document.getElementById("result6");
      var unit6 = document.getElementById("unit6");
      var cost6 = document.getElementById("cost6");

      if (current > 50) {
        current -= 50;
        unit6.innerHTML = "151-200";
        cost6.innerHTML = 120;
        var total6 = total5 + 6000;
        result6.innerHTML = 50 * 120;
        displayHide();
        rowD2.classList.remove("d-none");
        rowD3.classList.remove("d-none");
        rowD4.classList.remove("d-none");
        rowD5.classList.remove("d-none");
        rowD6.classList.remove("d-none");
        rowD7.classList.remove("d-none");
      } else {
        unit6.innerHTML = "151-200";
        cost6.innerHTML = 120;
        total6 = total5 + current * 120;
        result6.innerHTML = current * 120;
        current = 0;
        final.innerHTML = total6;
      }
      var result7 = document.getElementById("result7");
      var unit7 = document.getElementById("unit7");
      var cost7 = document.getElementById("cost7");
      if (current > 0) {
        unit7.innerHTML = "200 and above";
        cost7.innerHTML = 125;
        var total7 = total6 + current * 125;
        result7.innerHTML = current * 125;
        current = 0;
        final.innerHTML = total7;
      }
    } else {
      alert("please input your meter unit");
    }
  });
}
function businessFun() {
  var meter = document.getElementById("meter");
  var result1 = document.getElementById("result1");
  var unit1 = document.getElementById("unit1");
  var cost1 = document.getElementById("cost1");
  var final = document.getElementById("final");

  document.getElementById("calculate").addEventListener("click", function () {
    if (meter.value > 0) {
      if (meter.value > 500) {
        var current = meter.value - 500;
        unit1.innerHTML = "1-500";
        cost1.innerHTML = 125;
        var total1 = 500 * 125;
        result1.innerHTML = 62500;
      } else {
        unit1.innerHTML = "1-500";
        cost1.innerHTML = 125;
        total1 = meter.value * 125;
        result1.innerHTML = meter.value * 125;
        current = 0;
        final.innerHTML = total1;
        console.log(total1);
      }
      var result2 = document.getElementById("result2");
      var unit2 = document.getElementById("unit2");
      var cost2 = document.getElementById("cost2");

      if (current > 4500) {
        current -= 4500;
        unit2.innerHTML = "501-5000";
        cost2.innerHTML = 135;
        var total2 = total1 + 607500;
        result2.innerHTML = 4500 * 135;
      } else {
        unit2.innerHTML = "501-5000";
        cost2.innerHTML = 135;
        total2 = total1 + current * 135;
        result2.innerHTML = current * 135;
        current = 0;
        final.innerHTML = total2;
      }
      var result3 = document.getElementById("result3");
      var unit3 = document.getElementById("unit3");
      var cost3 = document.getElementById("cost3");

      if (current > 5000) {
        current -= 5000;
        unit3.innerHTML = "5001-10000";
        cost3.innerHTML = 145;
        var total3 = total2 + 725000;
        result3.innerHTML = 5000 * 145;
      } else {
        unit3.innerHTML = "5001-10000";
        cost3.innerHTML = 145;
        total3 = total2 + current * 145;
        result3.innerHTML = current * 145;
        current = 0;
        final.innerHTML = total3;
      }
      var result4 = document.getElementById("result4");
      var unit4 = document.getElementById("unit4");
      var cost4 = document.getElementById("cost4");

      if (current > 10000) {
        current -= 10000;
        unit4.innerHTML = "10001-20000";
        cost4.innerHTML = 155;
        var total4 = total3 + 1550000;
        result4.innerHTML = 10000 * 155;
      } else {
        unit4.innerHTML = "10001-20000";
        cost4.innerHTML = 155;
        total4 = total3 + current * 155;
        result4.innerHTML = current * 155;
        current = 0;
        final.innerHTML = total4;
      }
      var result5 = document.getElementById("result5");
      var unit5 = document.getElementById("unit5");
      var cost5 = document.getElementById("cost5");

      if (current > 30000) {
        current -= 30000;
        unit5.innerHTML = "20001-50000";
        cost5.innerHTML = 167;
        var total5 = total4 + 5010000;
        result5.innerHTML = 30000 * 167;
      } else {
        unit5.innerHTML = "20001-50000";
        cost5.innerHTML = 167;
        total5 = total4 + current * 167;
        result5.innerHTML = current * 167;
        current = 0;
        final.innerHTML = total5;
      }
      var result6 = document.getElementById("result6");
      var unit6 = document.getElementById("unit6");
      var cost6 = document.getElementById("cost6");

      if (current > 50000) {
        current -= 50000;
        unit6.innerHTML = "50001-100000";
        cost6.innerHTML = 175;
        var total6 = total5 + 8750000;
        result6.innerHTML = 50000 * 175;
      } else {
        unit6.innerHTML = "50001-100000";
        cost6.innerHTML = 175;
        total6 = total5 + current * 175;
        result6.innerHTML = current * 175;
        current = 0;
        final.innerHTML = total6;
      }
      var result7 = document.getElementById("result7");
      var unit7 = document.getElementById("unit7");
      var cost7 = document.getElementById("cost7");
      if (current > 0) {
        unit7.innerHTML = "100001 and above";
        cost7.innerHTML = 180;
        var total7 = total6 + current * 180;
        result7.innerHTML = current * 180;
        current = 0;
        final.innerHTML = total7;
      }
    } else {
      alert("please input your meter unit");
    }
  });
}
