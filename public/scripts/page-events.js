//criação do mapa
const map = L.map('map')
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


function addMarker({id, titulo, lat, lng}){

    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight:240
    }).setContent(`${titulo} <a href="/evento/${id}"><img src="/images/Arrowarrow-white.svg"</a>`)
    
    L.marker([lat, lng], { icon }).addTo(map).bindPopup(popup)
}

const eventsSpan = document.querySelectorAll('.eventos span')
    eventsSpan.forEach(span => {
    const evento = {
        id: span.dataset.id,
        titulo: span.dataset.titulo,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }
    console.log(evento)
    addMarker(evento)
})  