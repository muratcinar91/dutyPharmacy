const city = document.querySelector("#city");
const county = document.querySelector("#county");

const searchButton = document.querySelector(".button")

searchButton.addEventListener("click", () => {
    searchPharmacy(prepearePharmacy);
});

async function searchPharmacy(callback) {

    var pharmacies = null;
    var xhr = new XMLHttpRequest();


    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            pharmacies = JSON.parse(this.responseText).result;
            console.log(pharmacies);
            callback(pharmacies);
        }
    });

    xhr.open("GET", `https://api.collectapi.com/health/dutyPharmacy?ilce=${county.value}&il=${city.value}`);
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("authorization", "apikey 0UEMd7TjD93gaSolCwTBF5:3u8LFLOi6CQHcR9JpaKNJy");

    xhr.send();

    
}

function prepearePharmacy(pharmacies){

    document.querySelector("#pharmacies").innerHTML="";
    
    pharmacies.forEach(pharmacy => {
        let pharmacyCard = document.createElement("pharmacy-card");
        pharmacyCard.setAttribute("name",pharmacy.name);
        pharmacyCard.setAttribute("dist",pharmacy.dist);
        pharmacyCard.setAttribute("phone",pharmacy.phone);
        pharmacyCard.setAttribute("address",pharmacy.address);
        pharmacyCard.setAttribute("poster","https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTzAf_0CY-qY8lbgDbVftL89AbXB5ZxkmQNLjqRPvvKaEOmgxwo&usqp=CAU");

        document.querySelector("#pharmacies").append(pharmacyCard);
    });
}