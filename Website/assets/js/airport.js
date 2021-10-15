AirportInput("autocomplete1");

// Example options for Formatting
var options = {
    formatting: `<div class="$(unique-result)"
                 single-result" 
                 data-index="$(i)"> 
               $(IATA) </div>`
};
AirportInput("autocomplete2");

//Great Circle Distance calculation fuction
function distance(lat1, lon1, lat2, lon2) {
    var R = 6371e3; // metres

    lat1 = parseFloat(lat1)
    lat2 = parseFloat(lat2)
    lon1 = parseFloat(lon1)
    lon2 = parseFloat(lon2)

    var f1 = lat1.toRadians();
    var f2 = lat2.toRadians();
    var df = (lat2 - lat1).toRadians();
    var dl = (lon2 - lon1).toRadians();

    var a = Math.sin(df / 2) * Math.sin(df / 2) +
        Math.cos(f1) * Math.cos(f2) *
        Math.sin(dl / 2) * Math.sin(dl / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    var d = R * c;

    return d;
}
if (typeof (Number.prototype.toRadians) === "undefined") {
    Number.prototype.toRadians = function () {
        return this * Math.PI / 180;
    }
}

function checkInputData(id) {
    var realId = "autocomplete-airport-" + id
    return ([document.getElementById(realId).getAttribute("data-lat"), document.getElementById(realId).getAttribute(
        "data-lon")])
}

function checkDistance(self) {
    console.log("Input changed: " + self["id"])
    setTimeout(function () {
        console.log(self.getAttribute("data-lon"))
        var idChanged = self["id"].slice(-1)
        console.log(checkInputData(1))
        console.log(checkInputData(2))
        if (checkInputData(1)[0] && checkInputData(2)[0]) {
            document.getElementById("distance").innerHTML = distance(...checkInputData(1), ...
                checkInputData(2)) / 1000 + " Km";
        }
    }, 200)

}