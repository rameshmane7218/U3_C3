// Store the wallet amount to your local storage with key "amount"
let amount = localStorage.getItem("amount") || 0;
document.getElementById("wallet").innerText = amount;

function addToWallet(){
    let userAmount = document.getElementById("amount").value;

    let newAmount = Number(amount) + Number(userAmount);
    document.getElementById("wallet").innerText = newAmount;
    localStorage.setItem("amount",newAmount)
    window.location.reload();   
}