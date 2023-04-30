const options ={
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//criação do mapa
const map = L.map('map', options)
map.locate({setView: true, maxZoom: 15})


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

const icon = L.icon({
    iconUrl: "/images/map-marker.svg", 
    iconSize: [58, 68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})

L.marker([lat, lng], { icon }).addTo(map)

//galeria de imagem
function selectImage(event){
    const button = event.currentTarget

    const buttons = document.querySelectorAll(".images button")
    buttons.forEach((button) => {button.classList.remove("active")})

    button.classList.add('active')

    const image = button.children[0]
    const imageContainer = document.querySelector(".evento-details > img")
    imageContainer.src = image.src
}