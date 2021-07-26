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

// Get JSON response data from SEARCH URL 
async function getJSONData(url) {
    const response = await fetch(url)
    var data = await response.json()
    show(data)
}

// Get Details meal id
function getDetailsValue(val) {
    // Getting the complete url
    details_url += val

    if (details_url.length > detailsLength) {
        getDetailsData(details_url)
        details_url = ori_details_url
    }
}

// Get JSON response data for a single MEAL ID URL and 
// display the results
async function getDetailsData(url) {
    const response = await fetch(url)
    let data = await response.json()
    showDetails(data)
}

// Get Bookmark meal id
function getBookmarkValue(val) {
    // Getting the complete url
    bookmark_url += val

    if (bookmark_url.length > bookmarkLength) {
        getBookmarkData(bookmark_url)
        bookmark_url = ori_bookmark_url
    }
}

// Delete Bookmark meal id
function removeBookmarkValue(val) {
    // Getting the complete url
    bookmark_url += val

    if (bookmark_url.length > bookmarkLength) {
        removeBookmarkData(bookmark_url)
        bookmark_url = ori_bookmark_url
    }
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
                        <p>Instructions: ${r.strInstructions.slice(0, 150)}...<a href="${r.strYoutube}" target="_blank" class="button-link">Watch</a></p>                      
                        <button class="bookmarkbtn" type="button" onclick="getBookmarkValue(${r.idMeal});">Bookmark</button>
                        <button class="detailsbtn" type="button " onclick="getDetailsValue(${r.idMeal});">Get Details</button>
                    </div>
                </div> 
                `
        }
    } else if (data.meals == null) {
        display = 'No meals found in our database'
    }

    document.getElementById("showeverything").innerHTML = display
}

function showDetails(data) {
    // Display the details data result in web browser
    let displaydetails = ''

    if (data.meals != null) {
        for (let i of data.meals) {
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
                        <div>
                        <button class="bookmarkbtn" type="button" onclick="getBookmarkValue(${i.idMeal});">Bookmark</button>
                        </div>
                    </div> 
                </div> 
                `
        }
    }
    document.getElementById("showeverything").innerHTML = displaydetails
}
