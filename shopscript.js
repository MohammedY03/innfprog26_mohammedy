document.getElementById("cart-button").addEventListener("click", function() {
    document.getElementById("cart").classList.toggle("hidden")
})

//Test-funksjon for produkt:
function fetchProduct() {
    let productHTML = ""

    products.map(p => productHTML += `<article class="product-card">
    <img src="website_images/PROD_${p.imagefile}" alt="PRODUKTNAVN">
    <a href="#">Ninjago</a>
    <h3>Dragon Zane</h3>
    <p>Kr. 89,-</p>
    <button>Legg til handlevogn</button>
</article>`)
}

fetchProduct()