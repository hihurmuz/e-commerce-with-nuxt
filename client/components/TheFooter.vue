<template>
  <div class="footerContainer">
      <div class="footerContent">
          <div class="infoArea">
              <div class="rowOne">
                  <span class="brandHeader">Udemy Shop</span>
                  <p class="infoText">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, adipisci quo excepturi saepe alias quam ex odio.</p>
                  <span class="phoneText">Phone : +90 000 000 0000</span> <br>
                  <span>help@udemyshop.com</span> <br>
                  <img class="imgInstagram" src="https://www.transparentpng.com/thumb/logo-instagram/hF2oFI-best-logo-instagram-png.png" alt="Best Logo Instagram PNG @transparentpng.com">
                  <img class="imgInstagram" src="https://www.transparentpng.com/thumb/logo-instagram/hF2oFI-best-logo-instagram-png.png" alt="Best Logo Instagram PNG @transparentpng.com">
                  <img class="imgInstagram" src="https://www.transparentpng.com/thumb/logo-instagram/hF2oFI-best-logo-instagram-png.png" alt="Best Logo Instagram PNG @transparentpng.com">
              </div>
              <div class="rowTwo">
                  <h3>Useful Links</h3>
                  <ul>
                      <li>Link</li>
                      <li>Link</li>
                      <li>Link</li>
                      <li>Link</li>
                      <li>Link</li>
                  </ul>
              </div>
              <div class="rowThree">
                  <h3>Help</h3>
                  <div>
                      <h3>Payment</h3>
                  </div>
              </div>
          </div>
          <div class="bottomArea">
              <div>
                  <span class="bottomAreaText">Terms and Conditions</span>
                  <span class="bottomAreaText">Privacy Policy</span>
              </div>
              <span class="copyrightText">©2020 All Right Reserved</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.footerContainer{
    display: flex;
    flex-direction: column;
    align-items: center;    
    width: 100%;
    left: 0;
    bottom: 0;    
    background-color: #333C35;
    height: auto;
    color: white;
}
.footerContent{
    width: 80%;
}
.infoArea{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 80%;
}
.rowOne{
    width: 30%;
    padding: 20px;
    font-family: Arial, Helvetica, sans-serif;
}
.brandHeader{
    font-size: 22px;
    font-weight: 700;
}
.imgInstagram{
    width: 60px;
    height: 60px;
}
.rowTwo{
    width: 40%;
    padding: 20px;
}
.rowThree{
    width: 30%;
    padding: 20px;
}
.bottomArea{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.bottomAreaText{
    padding: 30px;
}
.copyrightText{
    margin-top: 15px;
}
</style>