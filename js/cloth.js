const clth_list = document.querySelector(".cloth-list");
const number_Of_Item = document.querySelector(".number_Of_Item");
const allProducts = ["cloth one", "cloth two", "cloth three"];


{
    //Local Storage Structure
    // let sp = JSON.parse(localStorage.getItem('selected_products'))
    // sp.cloth = {
    //     cloth1: 1,
    //     cloth2: 2
    // }
    //localStorage.setItem("selected_products", JSON.stringify(sp))
}

let selectedProduct = {};
//let totalSelectedselectedProduct = []
clth_list.addEventListener("click", e => {
    console.log("clicked")
    let productType = e.target.parentElement.parentElement.parentElement.id;

    //console.log("clicked");

    let cloth = e.target.parentElement.children[0].textContent.trim();
    if (Array.from(e.target.classList).includes("fa-plus")) {
        let pd = cloth.split(" ");
        pd = pd.join("_");
        if (allProducts.includes(cloth.toLowerCase())) {
            //console.log(pd);
            if (!selectedProduct[productType]) {
                selectedProduct[productType] = [pd];
                selectedProduct[productType][pd] = 1;
                e.target.parentElement.children[1].textContent = 1;
            } else {
                if (!selectedProduct[productType][pd]) {
                    //If the ProductType exist but the user selected multiple product of the same type
                    selectedProduct[productType][pd] = 1;
                    e.target.parentElement.children[1].textContent = 1;
                } else {
                    let c = selectedProduct[productType][pd] + 1;
                    selectedProduct[productType][pd] = c;

                    e.target.parentElement.children[1].textContent = c;
                }
            }

            console.log(selectedProduct);
        } else {
            //If the product is unavailable for now
        }
    }
    if (Array.from(e.target.classList).includes("fa-minus")) {
        let pd = cloth.split(" ");
        pd = pd.join("_");
        if (allProducts.includes(cloth.toLowerCase())) {
            if (!selectedProduct[productType]) {
                alert("You did not selected any product of this type.");
            } else {
                if (!selectedProduct[productType][pd]) {
                    alert("You did not selected any product of this type.");
                } else {
                    if (selectedProduct[productType][pd] > 0) {
                        let c = selectedProduct[productType][pd] - 1;
                        selectedProduct[productType][pd] = c;

                        e.target.parentElement.children[1].textContent = c;
                    } else {
                        alert("Please Select one first to unselect");
                    }
                }
            }

            console.log(selectedProduct);
        } else {
            //If the product is unavailable for now
        }
    }
});