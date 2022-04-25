// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let amount = localStorage.getItem("amount") || 0;
document.getElementById("wallet").innerText = amount;

let movieBox = document.getElementById("movie");

let movieDetails = JSON.parse(localStorage.getItem("movie"));
function confirm(){
    let seats = document.getElementById("number_of_seats").value;

    let total = Number(seats)*100;

    if(amount < total){
        alert("Insufficient Balance!");
    }else{
        alert("Booking successful!");
        let updatedAmt = amount - total;
        localStorage.setItem("amount",updatedAmt);
        window.location.reload();
    }
}


// append movie in movies div

let box = document.createElement("div");

let title = document.createElement("h2");
title.textContent = movieDetails.Title;

let img = document.createElement("img");
img.src = movieDetails.Poster;

box.append(title,img);

movieBox.append(box);
