<template>
    <footer style="background-color: black;">
        <hr>
        <div class="container">
            <div class="row">
            <div class="col-sm-4 text-start" style="display:grid; justify-content:center;">
            <h6 class="lead" style="color: white;">Address</h6>
            <p style="color: white;">314 Imam Haron Rd, Lansdowne, Cape Town, 7780</p>
            <h6 class="lead" style="color: white;">Contact Us</h6>
            <p style="color: white;">021-010-1930</p>
            <h6 class="lead" style="color: white;">Email Us</h6>
            <p style="color: white;">info@mesmerize.com</p>
            </div>
            <div class="col-sm-4 text-start" style="display:grid; justify-content:center;">
            <h6 class="lead" style="color: white;">Quick Links</h6>
            <a class="quick" href="/">Home</a>
            <a class="quick" href="/about">About</a>
            <a class="quick" href="/product">Shop</a>
            <a class="quick" href="/contact">Contact</a>
            <a class="quick" href="/signup">Signup</a>
            <a class="quick" href="/login">Login</a>
            <a class="quick" href="/myaccount">MyAccount</a>
            <a class="quick" href="/checkout">Checkout</a>
            </div>
            <div class="col-sm-4 text-start lead" style="display:grid; justify-content:center;">
            <h6 class="lead" style="color: white;">Follow Mesmerize</h6>
            <a id="socials" target="_blank" href="https://www.instagram.com/instagram/" class="fa-brands fa-instagram text-white"></a>
            <a id="socials" target="_blank" href="https://www.facebook.com/facebook/" class="fa-brands fa-facebook text-white"></a>
            <a id="socials" target="_blank" href="https://twitter.com/twitter/" class="fa-brands fa-twitter text-white"></a>
            <a id="socials" target="_blank" href="https://www.youtube.com/channel/@youtube" class="fa-brands fa-youtube text-white"></a>
            <a id="socials" target="_blank" href="https://www.tiktok.com/@tiktok" class="fa-brands fa-tiktok text-white"></a>
           </div>
           </div>
       </div>
       <div>
       <p class="lead m-0 pb-2" style="color: white; padding-top: 20px;">
        &copy; 2023 Mesmerize | All Rights Reserved</p>
       </div>
    </footer>
</template>
<script>
export default {
    name: 'FooterComponent'
}
</script>
<style scoped>
#socials {
    text-decoration: none;
    padding: 10px;
    display: block;
}
footer {
    padding: 20px;
    box-shadow:  0px 0 19px rgba(1, 0, 0, 0.9);
    width: 100%;
}
.quick {
    display: block;
    padding: 5px;
    color: white;
    text-align: start;
}

hr {
    border: 2px solid white;
    width: 80%;
    border-color: white;
    margin: 0 auto;
    margin-bottom: 3rem;
}
</style>