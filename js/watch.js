const watch_list = document.querySelector(".watch-list");
const numberOfItem = document.querySelector(".numberOfItem");
const alltotalSelectedProducts = ["watch one", "watch two", "watch three"];


// localStorage.setItem("selected_products", JSON.stringify({
//   watch: {
//     watch1: 1,
//     watch2: 2
//   }
// }))

let totalSelectedProduct = {};
//let totalSelectedtotalSelectedProduct = []
let count = 0;
watch_list.addEventListener("click", e => {
  let productType = e.target.parentElement.parentElement.parentElement.id;

  //console.log("clicked");

  let watch = e.target.parentElement.children[0].textContent.trim();
  if (Array.from(e.target.classList).includes("fa-plus")) {
    let pd = watch.split(" ");
    pd = pd.join("_");
    if (alltotalSelectedProducts.includes(watch.toLowerCase())) {
      //console.log(pd);
      if (!totalSelectedProduct[productType]) {
        totalSelectedProduct[productType] = [pd];
        totalSelectedProduct[productType][pd] = 1;
        e.target.parentElement.children[1].textContent = 1;
      } else {
        if (!totalSelectedProduct[productType][pd]) {
          //If the ProductType exist but the user selected multiple product of the same type
          totalSelectedProduct[productType][pd] = 1;
          e.target.parentElement.children[1].textContent = 1;
        } else {
          let c = totalSelectedProduct[productType][pd] + 1;
          totalSelectedProduct[productType][pd] = c;

          e.target.parentElement.children[1].textContent = c;
        }
      }

      console.log(totalSelectedProduct);
    } else {
      //If the product is unavailable for now
    }
  }
  if (Array.from(e.target.classList).includes("fa-minus")) {
    let pd = watch.split(" ");
    pd = pd.join("_");
    if (alltotalSelectedProducts.includes(watch.toLowerCase())) {
      if (!totalSelectedProduct[productType]) {
        alert("You did not selected any product of this type.");
      } else {
        if (!totalSelectedProduct[productType][pd]) {
          alert("You did not selected any product of this type.");
        } else {
          if (totalSelectedProduct[productType][pd] > 0) {
            let c = totalSelectedProduct[productType][pd] - 1;
            totalSelectedProduct[productType][pd] = c;

            e.target.parentElement.children[1].textContent = c;
          } else {
            alert("Please Select one first to unselect");
          }
        }
      }

      console.log(totalSelectedProduct);
    } else {
      //If the product is unavailable for now
    }
  }
});