const formWrapper = document.querySelector(".form-wrapper")
const form = document.querySelector("#form")
const searchInput = document.querySelector("#searchInput")
const butonWrapper = document.querySelector("#button-wrapper")
const searchButton = document.querySelector("#Search-btn")
const clearButton = document.querySelector("#clear-btn")
const ImageList = document.querySelector(".image-list")

runEventListener()

function runEventListener(){
    form.addEventListener("submit", search)
    clearButton.addEventListener("click",clear)
}

function clear(){
    searchInput.value=""
    ImageList.innerHTML=""
}

function search(e){
    
    const value = searchInput.value.trim()

    fetch(`https://api.unsplash.com/search/photos?query=${value}`,{
        method : "GET",
        headers : {
                Authorization : "Client-ID Jx9WAJLd6UZLQtusM9iYpqko_eE-1LwVJ9ocGUulqYI"
        }
    })
    .then((res)=> res.json())
    .then((data)=>{
        Array.from(data.results).forEach((image)=>{
            addImageToUI(image.urls.small)
        })
    })
    .catch((err)=> console.log(err))

    e.preventDefault()
}

function addImageToUI(url){
    const div = document.createElement("div")
    div.className=("card")

    const img = document.createElement("img")
    img.setAttribute("src",url)
    img.height=400
    img.width=400

    div.append(img)
    ImageList.append(div)
}