
let totalPrice = document.getElementById("total-price");
function expandBox(selectedBox, price, index) {
    // Get all boxes
    let boxes = document.querySelectorAll(".box");
   

    // Reset all boxes
    boxes.forEach(box => {
        box.classList.remove("selected");
    });

    // Expand only the clicked box
    selectedBox.classList.add("selected");

    // Update Total Price
    totalPrice.textContent = `$${price.toFixed(2)} USD`;

    // Check the correct radio button
    let radioButtons = document.querySelectorAll("input[type='radio']");
    radioButtons[index - 1].checked = true;
}
function alertmessage() {
    if(totalPrice.textContent === "$0.00 USD") {
        alert("Please select a box to proceed.");
        return;
    }
    
    alert("Thank you for your purchase!"+totalPrice.textContent);
}
