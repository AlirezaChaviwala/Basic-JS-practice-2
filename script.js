var req = new XMLHttpRequest();
let lat = [];
let long = [];

req.open('GET', 'https://restcountries.eu/rest/v2/all', true);
req.send();
req.onload = function() {
    var data = JSON.parse(this.response);

    for (var x of data) {
        lat.push(x.latlng[0]);
        long.push(x.latlng[1]);
        console.log(x.capital);
    }

    for (var i = 0; i < lat.length; i++) {
        let req2 = new XMLHttpRequest();
        req2.open('GET', 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat[i] + '&lon=' + long[i] + '&appid=339a1167040ec30700015ccc03b1d43c', true);
        req2.send();
        req2.onload = function() {
            var data2 = JSON.parse(this.response);
            console.log(data2);
        }
    }
}