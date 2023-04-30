
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
})


var searchControl = new L.esri.Controls.Geosearch().addTo(map);
var results = new L.LayerGroup().addTo(map);

   searchControl.on('results', function(data){results.clearLayers(); for (var i = data.results.length - 1; i >= 0; i--){results.addLayer(L.marker(data.results[i].latlng, { icon })).addTo(map);document.querySelector('[name = latitude]').value = data.results[i].latlng.lat;document.querySelector('[name = longitude]').value = data.results[i].latlng.lng}});

    
 function addPhotoField(){
    const container = document.querySelector('#images')
    const fieldsContainer = document.querySelectorAll('.new-upload')
    const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)
    const input =  newFieldContainer.children[0]
    if(input.value == ""){
        return
    }
    input.value = ""

    container.appendChild(newFieldContainer)
 }
  function deleteField(event){
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1){
        span.parentNode.children[0].value = ""
        return
    }
    span.parentNode.remove();
  }

function toggleSelect(event){
    document.querySelectorAll('.button-select button')
    .forEach(button => button.classList.remove('active'))
    const button = event.currentTarget
    button.classList.add('active')

    const input = document.querySelector('[name="gratuito"]')

    input.value = button.dataset.value
}