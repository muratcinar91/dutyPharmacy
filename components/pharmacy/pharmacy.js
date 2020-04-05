const pharmacyTemplate = document.createElement("template");
pharmacyTemplate.innerHTML =
`
<style>
@import url('http://${location.host}/components/pharmacy/pharmacy.css')
</style>
<div class="pharmacy-container">
    <div class="image-container">
        <img />
    </div>
    <div class="info">
        <h3 class="name"></h3>
        <p id="dist"></p>
        <p id="address"></p>
        <p id="phone"></p>
    </div>
</div>
`

class PharmacyCard extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode : "open"});
        this.shadowRoot.appendChild(pharmacyTemplate.content.cloneNode(true));

        setTimeout(() => {
            this.shadowRoot.querySelector(".name").innerHTML=this.getAttribute("name");
            this.shadowRoot.querySelector("#dist").innerHTML=this.getAttribute("dist");
            this.shadowRoot.querySelector("#address").innerHTML=this.getAttribute("address");
            this.shadowRoot.querySelector("#phone").innerHTML=this.getAttribute("phone");
            this.shadowRoot.querySelector("img").src=this.getAttribute("poster");
            
        }, 100);
    }
}

window.customElements.define("pharmacy-card",PharmacyCard);