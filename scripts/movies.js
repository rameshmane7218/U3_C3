// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let amount = localStorage.getItem("amount") || 0;
document.getElementById("wallet").innerText = amount;

const API = "e18b3001";
let id;

async function searchMovie(){
    

    try{
        let query = document.getElementById("search").value;
        const res = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API}`)
        const data = await res.json();
        
        let movies = data.Search
        appendMovies(movies)
    }
    catch(err){
        console.log('err:', err)    
    }   
}

// append data 
function appendMovies(movies){
    console.log('movies:', movies)
    document.getElementById("movies").innerHTML = null;
    movies.forEach((el) => {

        let box = document.createElement("div");
        box.setAttribute("class","movie_tab");

        let img = document.createElement("img");
        img.src = el.Poster;

        let title = document.createElement("p");
        title.textContent = el.Title;

        let bookNowBtn = document.createElement("button");
        bookNowBtn.setAttribute("class","book_now")
        bookNowBtn.textContent = "Book Now";
        bookNowBtn.addEventListener("click",()=>{
            moveToCheckoutPage(el);
        })

        box.append(img,title,bookNowBtn);
        document.getElementById("movies").append(box)
    })

}

function moveToCheckoutPage(el){
    console.log(el);
    localStorage.setItem("movie",JSON.stringify(el));
    window.location.href = "checkout.html";   
}


// applied debounce
function debounce(delay){
    if(id){
        clearTimeout(id);
    }

    id = setTimeout(function(){
        searchMovie();
    },delay)
}