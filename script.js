//review box - leave a review it shows on the page with name, star rating, and comments.

const nameEl = document.querySelector(`#name-input`); //name input
const starRatingEl = document.querySelector(`#star-rating`); //star rating input
const reviewTextEl = document.querySelector(`#review-text`); //typed review input
const reviewButtonEl = document.querySelector(`#review-button`); //submit button
const reviewDisplayEl = document.querySelector(`#review-display`); //p element the reviews sit in
// setting up element for reviews
const review = [];
let starDisplay; //declaring storage var for emoji rating
reviewButtonEl.addEventListener(`click`, function (event) {
    //activate conditional once button has been clicked and data gathered
  if (+starRatingEl.value === 1) {
    starDisplay = `⭐`;
  } else if (+starRatingEl.value === 2) {
    starDisplay = `⭐⭐`;
  } else if (+starRatingEl.value === 3) {
    starDisplay = `⭐⭐⭐`;
  } else if (+starRatingEl.value === 4) {
    starDisplay = `⭐⭐⭐⭐`;
  } else if (+starRatingEl.value === 5) {
    starDisplay = `⭐⭐⭐⭐⭐`;
  } else {
    starDisplay = `No star rating given.`;
  }
  //prevent it disappearing
  event.preventDefault();
  //add review items to array in object form
  review.push({
    reviewerName: nameEl.value,
    starRating: starDisplay, //assigning this value with the emoji corresponding w input
    reviewText: reviewTextEl.value,
  });
  console.log(review);
  displayReview();
});

function displayReview() {
  reviewDisplayEl.innerHTML = " ";
  //attempting to control stars displayed

  review.forEach(function (element) {
    console.log(element.reviewerName, element.starRating, element.reviewText);
    reviewDisplayEl.innerHTML += `<h4>${element.reviewerName}</h4><br/> ${element.reviewText}<br/>${element.starRating}<hr>`;
  });
}


//grams to cups converter
const gramValue = document.querySelector(`#grams`);
const calcButton = document.querySelector(`#calc-button`);
const cupsMessage = document.querySelector(`#cups-output`);
let calculation = 0;
cupsMessage.innerHTML="";
calcButton.addEventListener(`click`, function(event){
    event.preventDefault()
    calculation = +gramValue.value / 250;
    cupsMessage.innerHTML = `${gramValue.value} grams is ${calculation} cup(s).`
    console.log(calculation);
})