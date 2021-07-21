// Search API URL
let api_url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

// Preserving the Original Search API URL    
const ori_url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

// Meals Id URL to get bookmark data
let bookmark_url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="
// Preserving the Original Meals Id URL
const ori_bookmark_url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="

// Same URL as Meals Id URL to get details data
let details_url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="
// Preserving the Original Details Id URL
const ori_details_url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="

// Storing the original API length value
let detailsLength = details_url.length
let bookmarkLength = bookmark_url.length
let length = api_url.length

// Variables used in Local Storage
let myObj_serial, myObj_deserial
let val;

// This function gives instant results for what we type in the input search element
document.getElementById('inputval').addEventListener('input', function (e) {
    api_url += this.value
    if (api_url.length > length) {
        getJSONData(api_url)
        api_url = ori_url
    }
})

// Get Bookmark meal id
function getBookmarkValue(val) {
    // Displaying the value
    bookmark_url += val

    if (bookmark_url.length > bookmarkLength) {
        getBookmarkData(bookmark_url)
        bookmark_url = ori_bookmark_url
    }
}

// Delete Bookmark meal id
function removeBookmarkValue(val) {
    // Displaying the value
    bookmark_url += val

    if (bookmark_url.length > bookmarkLength) {
        removeBookmarkData(bookmark_url)
        bookmark_url = ori_bookmark_url
    }
}

// Get Details meal id
function getDetailsValue(val) {
    // Displaying the value
    details_url += val

    if (details_url.length > detailsLength) {
        getDetailsData(details_url)
        details_url = ori_details_url
    }
}

// Get JSON response data from SEARCH URL 
async function getJSONData(url) {
    const response = await fetch(url)
    var data = await response.json()
    show(data)
}

// Get JSON response data for a single MEAL ID URL and 
// store the key,value in localstorage
async function getBookmarkData(url) {
    const response = await fetch(url)
    var data = await response.json()
    myObj_serial = JSON.stringify(data.meals)
    for (var i of data.meals) {
        localStorage.setItem(i.idMeal, myObj_serial)
    }
}

// Get JSON response data for a single MEAL ID URL and 
// remove the key,value from localstorage
async function removeBookmarkData(url) {
    const response = await fetch(url)
    var data = await response.json()
    myObj_serial = JSON.stringify(data)
    for (var i of data.meals) {
        localStorage.removeItem(i.idMeal);
    }
}

// Get JSON response data for a single MEAL ID URL and 
// store the key,value in localstorage
async function getDetailsData(url) {
    const response = await fetch(url)
    let data = await response.json()
    myObj_serial = JSON.stringify(data.meals)

    for (var i of data.meals) {
        let d = i.strMeal.split(' ').join('')
        localStorage.setItem(d, myObj_serial)
    }
}

// Display the JSON SEARCH data results in web browser
function show(data) {
    let display = ''
    if (data.meals != null) {
        for (let r of data.meals) {
            display +=
                `
                <div class="card">
                    <img style="border-radius: 100%;" src="${r.strMealThumb}" width="250" height="250">
                    <div>
                        <h3>${r.strMeal}</h3>
                        <p>Instructions: ${r.strInstructions.slice(0, 150)}...</p>
                        
                        <button class="bookmarkbtn" type="button" onclick="getBookmarkValue(${r.idMeal});">Bookmark</button>
                        <button class="detailsbtn" type="button " onclick="getDetailsValue(${r.idMeal});">Get Details</button>
                        <p><a class="normallink detailslink" href="./html/details.html" disabled >Go to Details</a>${" "}<a href="${r.strYoutube}" target="_blank" class="button-link">Watch</a></p>
                    </div>
                </div> 
                `
        }
    } else if (data.meals == null) {
        display = 'No meals found in our database'
    }

    document.getElementById("showeverything").innerHTML = display
}



























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