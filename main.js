//// VARIABLES ////
const amount = document.querySelector(".amountInput");
const years = document.querySelector(".years");
const interest = document.querySelector(".interest");
const calculate = document.querySelector(".calculate");
document.querySelector(".clear").addEventListener("click", function (event) {
  amount.value = "";
  years.value = "";
  interest.value = "";
  clicked();
  console.log("hi");
});
/// ADDING EVENT LISTENER TO THE BUTTON for CALCULATION /////
calculate.addEventListener("click", clicked);
function clicked(e) {
  let toDecimalInterest = interest.value / 100;
  let amountValue = Number(amount.value);
  let yearsValue = Number(years.value * 12);
  let interestValue = toDecimalInterest / 12;
  let tofiveDecimalInterest = Number(interestValue.toFixed(5));
  let numerator =
    tofiveDecimalInterest * (1 + tofiveDecimalInterest) ** yearsValue;
  let denominator = (1 + tofiveDecimalInterest) ** yearsValue - 1;
  let mortgage = amountValue * (numerator / denominator);
  let fourDecimalPlace = mortgage.toFixed(2);
  let total = fourDecimalPlace * yearsValue;
  total = total.toFixed(2);
  console.log(`Your monthly Repayments: £${fourDecimalPlace}`);
  console.log(`Total you are going to repay: £${total}`);

  ///// CREATION AND DISPLAY OF ELEMENTS IN SECOND GRID /////
  const secondGrid = document.querySelector(".second-part");
  if (
    isNaN(fourDecimalPlace) ||
    (!firstRadio.checked && !secondRadio.checked)
  ) {
    return;
  } else {
    secondGrid.innerHTML = "";
    secondGrid.classList.add("new-second-grid-styles");

    /// FIRST ELEMENT//
    const firstElement = document.createElement("h2");
    firstElement.classList.add("new-results");
    firstElement.innerHTML = "Your results";
    secondGrid.appendChild(firstElement);

    /// SECOND ELEMENT ////
    const secondElement = document.createElement("h2");
    secondElement.classList.add("results-paragraph");
    secondElement.innerHTML =
      "  Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.";
    secondGrid.appendChild(secondElement);

    // THE CONTAINER //
    const newContainer = document.createElement("div");
    newContainer.classList.add("new-container-styles");
    // MONTHLY REPAYMENTS //
    const monthlyRepayments = document.createElement("p");
    monthlyRepayments.classList.add("monthly-repayments");
    monthlyRepayments.innerHTML = "Your monthly repayments";
    // CALCRESULTS //
    const calcResults = document.createElement("p");
    calcResults.innerHTML = `£${fourDecimalPlace}`;
    calcResults.classList.add("calc-results");
    // TOTAL Text//
    const totalValueText = document.createElement("p");
    totalValueText.innerHTML = "Total you'll repay over the term";
    totalValueText.classList.add("total-value-text");
    // TOTAL VALUE //
    const totalValue = document.createElement("p");
    totalValue.innerHTML = `£${total}`;
    totalValue.classList.add("total-value");
    // APPENDED INTO THE NEW SUB-CONTAINER //
    newContainer.append(
      monthlyRepayments,
      calcResults,
      totalValueText,
      totalValue
    );
    secondGrid.appendChild(newContainer);
  }
}
////////////////////////////////////
/// INPUT ERROR ////
const amountParagraph = document.querySelector(".amount-paragraph");
const yearsParagraph = document.querySelector(".years-paragraph");
const interestParagraph = document.querySelector(".interest-paragraph");
const radioParagraph = document.querySelector(".radio-paragraph");
calculate.addEventListener("click", errors);
function errors() {
  if (amount.value === "") {
    amountParagraph.innerHTML = "This field is requirred";
    amountParagraph.classList.add("required");
  } else {
    amountParagraph.innerHTML = "";
    amountParagraph.classList.remove("required");
  }
  if (years.value === "") {
    yearsParagraph.innerHTML = "This field is requirred";
    yearsParagraph.classList.add("required");
  } else {
    yearsParagraph.innerHTML = "";
    yearsParagraph.classList.remove("required");
  }
  if (interest.value === "") {
    interestParagraph.innerHTML = "This field is requirred";
    interestParagraph.classList.add("required");
  } else {
    interestParagraph.innerHTML = "";
    interestParagraph.classList.remove("required");
  }
  if (!firstRadio.checked && !secondRadio.checked) {
    radioParagraph.innerHTML = "This field is requirred";
    radioParagraph.classList.add("required");
  } else {
    radioParagraph.innerHTML = "";
    radioParagraph.classList.remove("required");
  }
}

/// RADIO ELEMENT ////
const radioButton = document.querySelector(".options-container");
const radio_firstCont = document.querySelector(".options-1");
const radio_secondCont = document.querySelector(".options-2");
const firstRadio = document.querySelector('input[type="radio"]#option1');
const secondRadio = document.querySelector('input[type="radio"]#option2');
radioButton.addEventListener("click", function (event) {
  if (event.target === firstRadio) {
    radio_firstCont.style.backgroundColor = "rgb(215, 218, 47,0.5)";
    radio_secondCont.style.backgroundColor = "white";
  } else if (event.target === secondRadio) {
    radio_secondCont.style.backgroundColor = "rgb(215, 218, 47,0.5)";
    radio_firstCont.style.backgroundColor = "white";
  }
});
