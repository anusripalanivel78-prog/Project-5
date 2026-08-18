function generateBill() {

    // Variables and Data Types
    let total = 0;
    let discount = 0;
    let payable = 0;

    // Calculate amount for 3 products
    for (let i = 1; i <= 3; i++) {

        let quantity = Number(
            document.getElementById("qty" + i).value
        );

        let price = Number(
            document.getElementById("price" + i).value
        );

        // Statement for input validation
        if (quantity <= 0 || price < 0 ||
            isNaN(quantity) || isNaN(price)) {

            alert("Please enter valid quantity and price.");
            return;
        }

        // Operators
        total += quantity * price;
    }


    // Selection Statement
    if (total > 2000) {

        discount = total * 0.10;

    } else {

        discount = 0;
    }


    // Final payable amount
    payable = total - discount;


    // Display results
    document.getElementById("total").textContent =
        "₹" + total.toFixed(2);

    document.getElementById("discount").textContent =
        "₹" + discount.toFixed(2);

    document.getElementById("payable").textContent =
        "₹" + payable.toFixed(2);
}