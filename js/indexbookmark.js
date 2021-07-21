// Display the Localstorage Bookmarks data results in web browser
let displaybookmark = ''

Object.keys(localStorage).forEach(function (key) {
    if (Number.isInteger(parseInt(key))) {
        let items = JSON.parse(localStorage.getItem(key));
        for (let i of items) {
            displaybookmark +=
                `  
                <div class="card"> 
                    <img style="border-radius: 100%;" src="${i.strMealThumb}" width="250" height="250">
                    <div>
                        <h1>Name: ${i.strMeal}</h1>
                        <p>Instructions: ${i.strInstructions.slice(0, 150)}...<a href="${i.strYoutube}" target="_blank" class="button-link">Read More</a></p>
                        <button class="bookmarkremovebtn" type="button" onclick="removeBookmarkValue(${i.idMeal});">Remove</button>
                    </div> 
                </div> 
                `
        }
    }
})
document.getElementById("showbookmarks").innerHTML = displaybookmark
