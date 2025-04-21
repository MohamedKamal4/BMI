// // // // let productName = document.getElementById('inputname');
// // // // let productPrice = document.getElementById('inputprice');
// // // // let category = document.getElementById('inputcategory');
// // // // let quantity = document.getElementById('inputquantity');
// // // // let updateButton = document.getElementById('updateButton');
// // // // let table = document.getElementById('tbody');
// // // // let product = [];
// // // // let edit = -1;


// // // // function add() {
// // // //     if (productName.value === '' || productPrice.value === '' && category.value === '' || quantity.value === '') {
// // // //         alert("error")
// // // //     } else {
// // // //         let input = {
// // // //             productName: productName.value,
// // // //             productPrice: productPrice.value,
// // // //             category: category.value,
// // // //             quantity: quantity.value,
// // // //         }

// // // //         if (edit === -1) {
// // // //             product.push(input);
// // // //         } else {
// // // //             product[edit] = input;
// // // //             edit = -1;
// // // //             updateButton.style.display = 'none';
// // // //         }
// // // //         clear()
// // // //         show()
// // // //     }
// // // // }

// // // // function show() {
// // // //     table.innerHTML = ''
// // // //     product.forEach((product, index) => {
// // // //         table.innerHTML += `
// // // //         <tr>
// // // //             <td>${product.productName}</td>
// // // //             <td>${product.productPrice}</td>
// // // //             <td>${product.category}</td>
// // // //             <td>${product.quantity}</td>
// // // //             <td><button class="btn btn-success" onclick="editProduct(${index})">Edit</button></td>
// // // //             <td><button class="btn btn-warning" onclick="deleteProduct(${index})">Delete</button></td>
// // // //         </tr>
// // // //         `
// // // //     });
// // // // }



// // // // function clear() {
// // // //     productName.value = '';
// // // //     productPrice.value = '';
// // // //     category.value = '';
// // // //     quantity.value = '';
// // // // }

// // // // function deleteProduct(index) {
// // // //     product.splice(index, 1);
// // // //     show();
// // // // }

// // // // function editProduct(index) {
// // // //     let prod = product[index];
// // // //     productName.value = prod.productName;
// // // //     productPrice.value = prod.productPrice;
// // // //     category.value = prod.category;
// // // //     quantity.value = prod.quantity;
// // // //     edit = index;
// // // //     updateButton.style.display = 'inline';

// // // // }

// // // // function updateProduct() {
// // // //     add();
// // // // }


// // // // var headtitle = document.getElementById("title");
// // // // var allCaps = headtitle.innerHTML.toUpperCase("");
// // // // var rep = allCaps.replace("O", "U");
// // // // var rev = rep.split("").reverse().join("");
// // // // headtitle.innerHTML = (`
// // // //     All Caps: ${allCaps}
// // // //     <br>
// // // //     Replaced: ${rep}
// // // //     <br>
// // // //     Reversed: ${rev}`);




// // // // var userName = "mohamed kamal";
// // // // var allCaps = userName.toUpperCase();
// // // // var rep = allCaps.replace("O", "U");
// // // // var rev = rep.split("").reverse().join("");

// // // // console.log(`All Caps: ${allCaps} \nReplaced: ${rep} \nReversed: ${rev}`);


// // // let userNameInput = document.getElementById("name");
// // // let showplace = document.getElementById("show");
// // // let firstlater = document.getElementById("firstlater");
// // // let secondlater = document.getElementById("secondlater");



// // // //الطريقه الاولي لبرمجه الزرار
// // // document.getElementById("btn-caps").addEventListener("click", function () {
// // //     let latercaps = userNameInput.value.toUpperCase();
// // //     showplace.innerHTML = latercaps;
// // // });

// // // //الطريقه الثانيه لبرمجه الزرار
// // // // function allCaps() {
// // // //     let latercaps = userNameInput.value.toUpperCase();
// // // //     showplace.innerHTML = latercaps;
// // // // }



// // // // ------------------------------------------------------------------------------



// // // //الطريقه الاولي لبرمجه الزرار
// // // document.getElementById("btn-rep").addEventListener("click", function () {
// // //     showplace.innerHTML = userNameInput.value.toUpperCase().replace(firstlater.value, secondlater.value);
// // // });

// // // //الطريقه الثانيه لبرمجه الزرار

// // // // function Rep() {
// // // //     showplace.innerHTML = userNameInput.value.toUpperCase().replace(firstlater.value, secondlater.value);
// // // // }



// // // // ------------------------------------------------------------------------------


// // // //الطريقه الاولي لبرمجه الزرار
// // // document.getElementById("btn-rev").addEventListener("click", function () {
// // //     showplace.innerHTML = userNameInput.value.toUpperCase().replace(firstlater.value, secondlater.value).split("").reverse().join("");
// // // });
// // // //الطريقه الثانيه لبرمجه الزرار
// // // // function Rev() {
// // // //     showplace.innerHTML = userNameInput.value.toUpperCase().replace(firstlater.value, secondlater.value).split("").reverse().join("");
// // // // }

// var age = 20;

// switch (true) {
//     case (age > 60):
//         console.log("youe are old");
//         break;
//     case (age >= 40):
//         console.log("you are middle age");
//         break;
//     default:
//         console.log("you are young");
// }


// // //

// // var age = 50;

// // switch (true) {
// //     case (age > 60):
// //         console.log("youe are old");
// //         break;
// //     case (age >= 40):
// //         console.log("you are middle age");
// //         break;
// //     default:
// //         console.log("you are young");
// // }



document.getElementById("btn-calc").addEventListener("click", function () {
    let weightInput = document.getElementById("weight").value;
    let heightInput = document.getElementById("height").value;
    let showplace = document.getElementById("show");
    let calc = weightInput / (heightInput * heightInput);
    let result = parseFloat(calc.toString().split("").slice(0, 4).join(""));

    if (result > 40) {
        showplace.innerHTML = `BMI: ${result} <br> You are danger weight`;
    }
    else if (result >= 35 && result < 39.9) {
        showplace.innerHTML = `BMI: ${result} <br> You are second degree fat`;
    }
    else if (result >= 30 && result < 34.9) {
        showplace.innerHTML = `BMI: ${result} <br> You are first degree fat`;
    }
    else if (result >= 25 && result < 29.9) {
        showplace.innerHTML = `BMI: ${result} <br> You are over weight`;
    }
    else if (result >= 18.5 && result < 24.9) {
        showplace.innerHTML = `BMI: ${result} <br> You are berfect weight`;
    }
    else {
        showplace.innerHTML = `BMI: ${result} <br> You are overskinny`;
    }
});
