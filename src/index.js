// write your code here
const API = 'http://localhost:3000/ramens'

el('new-ramen').addEventListener('submit', createNewRamen)
fetch(API)
    .then(res => res.json())
    .then(renderRamens)

function renderRamens(ramens){
    ramens.forEach(renderRamen)
}

function renderRamen(ramen){
    const ramenMenuDiv = document.getElementById('ramen-menu')

    const ramenImage = document.createElement('img')
    ramenImage.src = ramen.image
    ramenMenuDiv.append(ramenImage)

    ramenImage.addEventListener('click', e => renderDetails(ramen))
}

function renderDetails(ramen){
    const detailImage = el('detail-image')
    const ramenName = el('ramen-name')
    const restaurantName = el('restaurant-name')
    const ratingDisplay = el('rating-display')
    const commentDisplay = el('comment-display')

    detailImage.src = ramen.image
    detailImage.alt = ramen.image
    ramenName.textContent = ramen.name
    restaurantName.textContent = ramen.restaurant
    ratingDisplay.textContent = ramen.rating
    commentDisplay.textContent = ramen.comment
}

function  createNewRamen(e){
    e.preventDefault()
    console.log(e.target.name.value)
    
    const newRamen = {
        name: e.target.name.value,
        rating: e.target.rating.value,
        restaurant: e.target.restaurant.value,
        comment: e.target['new-comment'].value,
        image: e.target.image.value
    }
    renderRamen(newRamen)
}

function el(elementName){
    return document.getElementById(elementName)
}



