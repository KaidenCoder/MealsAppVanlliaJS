// Display the Localstorage details data result in web browser
let displaydetails = ''

Object.keys(localStorage).forEach(function (key) {
    if (!Number.isInteger(parseInt(key))) {
        let items = JSON.parse(localStorage.getItem(key));
        for (let i of items) {
            displaydetails +=
                `  
                <div class="carddetails"> 
                    <div style="text-align: center; padding: 2em;">
                        <img style="border-radius: 100%;" src="${i.strMealThumb}" width="300" height="300">
                    </div>
                    <div class="cardinnerdetails">
                        <h1>Name: ${i.strMeal}</h1>
                        <p><span style="padding:0.2em;">CATEGORY: ${i.strCategory}</span> <span style="padding:0.2em;">AREA: ${i.strArea}</span> <span style="padding:0.2em;"><a href="${i.strYoutube}" target="_blank" class="button-link">Watch</a></span></span></p>
                        <p style="letter-spacing: 0.1em; line-height: 1.5em;">INSTRUCTIONS: ${i.strInstructions}</p>
                        
                    </div> 
                </div> 
                `
        }
    }
})
document.getElementById("showmealitemdetails").innerHTML = displaydetails



















// Details
// let displaydetails = ''

// Object.keys(localStorage).forEach(function (key) {
//     if (Number.isInteger(parseInt(key))) {
//         // if (isNaN(key)) {
//         let r = JSON.parse(localStorage.getItem(key));
//         console.log(r)
//         for (let i of r) {
//             displaydetails +=
//                 `   
//             <h1>Name: ${i.strMeal}</h1>
//             <p><img src="${i.strMealThumb}"></p>
//             <p>Instructions: ${i.strInstructions}</p>
//             <button id="bookmarkremoveid" type="button" onclick="removeBookmarkValue(${i.idMeal});">Remove</button>
//         `
//         }
//     }
// })

// document.getElementById("showmealitemdetails").innerHTML = displaydetails
// let displayDetails = ''

// Object.keys(localStorage).forEach(function (key) {
//     // if (isNaN(key)) {
//     if (Number.isInteger(parseInt(key))) {
//         let r = JSON.parse(localStorage.getItem(key));
//         console.log(r)
//         for (let i of r) {
//             displayDetails +=
//                 `   
//             <h1>Name: ${i.strMeal}</h1>
//             <p><img src="${i.strMealThumb}"></p>
//             <p>Instructions: ${i.strInstructions}</p>
//             <button id="bookmarkremoveid" type="button" onclick="removeBookmarkValue(${i.idMeal});">Remove</button>
//         `
//         }
//     }
// })

// document.getElementById("showmealitemdetails").innerHTML = displayDetails






// let myObj = {
//     name: "Khaidem",
//     number: 1
// }

// let myObj_serial = JSON.stringify(myObj)
// localStorage.setItem("myObj", myObj_serial)

// let myObj_deserial = JSON.parse(localStorage.getItem("myObj"))

// console.log(myObj_deserial)


// input.addEventListener('input', updateName)

// function updateName(e) {
//     let val = api_url + e.target.value
//     console.log(val)
//     return val
// }