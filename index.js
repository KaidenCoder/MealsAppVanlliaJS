let api_url =
    "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const ori_url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
let bookmark_url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="
const ori_bookmark_url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="
let details_url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="
const ori_details_url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="
let detailsLength = details_url.length
let bookmarkLength = bookmark_url.length
let length = api_url.length
let myObj_serial, myObj_deserial
let val;

function getInputValue() {
    // Selecting the input element and get its value 
    const input = document.getElementById('inputval').value

    // Displaying the value
    api_url += input

    if (api_url.length > length) {
        getJSONData(api_url)
        api_url = ori_url
    }
}


// Bookmark
function getBookmarkValue(val) {

    // Displaying the value
    bookmark_url += val

    console.log(bookmark_url)

    if (bookmark_url.length > bookmarkLength) {
        getBookmarkData(bookmark_url)
        bookmark_url = ori_bookmark_url
    }

}

// Bookmark
function removeBookmarkValue(val) {

    // Displaying the value
    bookmark_url += val

    console.log(bookmark_url)

    if (bookmark_url.length > bookmarkLength) {
        removeBookmarkData(bookmark_url)
        bookmark_url = ori_bookmark_url
    }

}


// Details
function getDetailsValue(val) {

    // Displaying the value
    details_url += val

    console.log(details_url)

    if (details_url.length > detailsLength) {
        getDetailsData(details_url)
        details_url = ori_details_url
    }

}


async function getJSONData(url) {
    const response = await fetch(url)
    var data = await response.json()
    console.log(data)
    show(data)
}

// Bookmark
async function getBookmarkData(url) {
    const response = await fetch(url)
    var data = await response.json()
    myObj_serial = JSON.stringify(data.meals)
    console.log("myObj_serial", data)
    for (var i of data.meals) {
        localStorage.setItem(i.idMeal, myObj_serial)
    }
    console.log(localStorage)
}


// Bookmark
async function removeBookmarkData(url) {
    const response = await fetch(url)
    var data = await response.json()
    myObj_serial = JSON.stringify(data)
    for (var i of data.meals) {
        localStorage.removeItem(i.idMeal);
    }
}

// Details
async function getDetailsData(url) {
    const response = await fetch(url)
    var data = await response.json()
    myObj_serial = JSON.stringify(data.meals)
    console.log("myObj_serial", data)
    for (var i of data.meals) {
        localStorage.setItem(i.idMeal, myObj_serial)
    }
    console.log(localStorage)
}
// async function getDetailsData(url) {
//     const response = await fetch(url)
//     let data = await response.json()
//     console.log("detailsData", data.meals)
//     myObj_serial = JSON.stringify(data.meals)

//     for (var i of data.meals) {
//         let d = i.strMeal.split(' ').join('')
//         localStorage.setItem(d, myObj_serial)
//     }
//     console.log("detailsDatalocalstorage", localStorage)

// }


function show(data) {
    let display = ''
    console.log(data.meals)
    if (data.meals != null) {
        for (let r of data.meals) {
            display +=
                `
                <div class="card">
                    <img style="border-radius: 100%;" src="${r.strMealThumb}" width="250" height="250">
                    <div>
                        <h3>${r.strMeal}</h3>
                        <p>Instructions: ${r.strInstructions.slice(0, 150)}...<a href="${r.strYoutube}" target="_blank" class="button-link">Read More</a></p>
                        
                        <button id="bookmarid" type="button" onclick="getBookmarkValue(${r.idMeal});">Bookmark</button>
                    </div>
                </div> 
                `
        }
    } else if (data.meals == null) {
        display = 'No meals found in our database'
    }

    document.getElementById("showeverything").innerHTML = display
}

// <button type="button" onclick="getDetailsValue(${r.idMeal});">Details</button>

// Bookmark
let displaybookmark = ''

Object.keys(localStorage).forEach(function (key) {
    if (Number.isInteger(parseInt(key))) {
        let r = JSON.parse(localStorage.getItem(key));
        console.log(r)
        for (let i of r) {
            displaybookmark +=
                `  
            <div class="card"> 
                <img style="border-radius: 100%;" src="${i.strMealThumb}" width="250" height="250">
                <div>
                    <h1>Name: ${i.strMeal}</h1>
                    <p>Instructions: ${i.strInstructions.slice(0, 150)}...<a href="${i.strYoutube}" target="_blank" class="button-link">Read More</a></p>
                    <button id="bookmarkremoveid" type="button" onclick="removeBookmarkValue(${i.idMeal});">Remove</button>
                </div> 
            </div> 
        `
        }
    }
})
document.getElementById("showbookmarks").innerHTML = displaybookmark



















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