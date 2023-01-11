var univIcon = L.icon({
    iconUrl: '/img/grad.png',
    iconSize:     [32, 32], // ukuran ikon
    iconAnchor:   [16, 16], // titik acuan ikon di peta
});

//Untan
L.marker([-0.0746168,109.35024], {icon: univIcon}).addTo(map);
//UM Pontianak
L.marker([-0.059339,109.3500016], {icon: univIcon}).addTo(map);

