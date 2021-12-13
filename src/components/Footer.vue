<template>
  <footer class="footer_area">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-3 col-xl-2 col-lg-3 col-md-3 col-sm-3">
          <div class="footer-widget">
            <div class="footer-title">Navigation</div>
            <ul class="list-unstyled">
              <router-link to="/Aboutus"><li>About US</li></router-link>
              <router-link to="/Blog"><li>Blog</li></router-link>
              <router-link to="Contact"><li>Contact US</li></router-link>
              <router-link to="sitemap"><li>Sitemap</li></router-link>
            </ul>
          </div>
        </div>

        <div class="clo-3 col-xl-2 col-lg-3 col-md-3 col-sm-3">
          <div class="footer-widget">
            <div class="footer-title">Collection</div>
            <ul class="list-unstyled">
              <router-link to="newarrivals"><li>New arrivals</li></router-link>
              <router-link to="featured"><li>Featured</li></router-link>
              <router-link to="catalog"><li>Catalog</li></router-link>
              <router-link to="brands"><li>Brands</li></router-link>
            </ul>
          </div>
        </div>

        <div class="col-3 col-xl-2 col-lg-3 col-md-3 col-sm-3">
          <div class="footer-widget">
            <div class="footer-title">Catagories</div>
            <ul class="list-unstyled">
              <router-link to="/products"><li>Tables</li></router-link>
              <router-link to="/products"><li>Lamps</li></router-link>
              <router-link to="/products"><li>Chairs</li></router-link>
              <router-link to="/products"><li>Sofas</li></router-link>
            </ul>
          </div>
        </div>

        <div
          class="
            col-12 col-xl-6 col-lg-3 col-md-3 col-sm-12
            text-left text-md-right
            pb-5
          "
        >
          <div class="footer-widget">
            <h5>M88G+25 Pangutch USA</h5>
            <h5>Lake Resort Utah</h5>
            <a href="milto:#">funiture@funiture.com</a>
            <h6>+1 x-xxx-xxx-xx</h6>
          </div>
        </div>
      </div>

      <div class="row justify-content-between">
        <div class="col-xl-7 col-lg-6 col-md-6 col-sm-6 col-6">
          <div class="tiny-footer">
            <p>Copyright © All Rights Reserved 2021</p>
          </div>
        </div>

        <div class="col-4 col-xl-4 col-xg-4 col-md-4 col-sm-4 text-right">
          <div class="social-info">
            <strong>Our social</strong>
            <img class="twitter" src="@/assets/twitter.png" />
            <img class="pinterest" src="@/assets/pinterest.png" />
            <img class="facebook" src="@/assets/facebook.png" />
            <img class="instagram" src="@/assets/insta.png" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer_area {
  position: relative;
  z-index: 1;
  color: #2c3539;
  background-color: #fefefe;
}
.footer-title {
  padding-bottom: 20px;
  font-weight: bold;
}
.font-widget {
  padding-top: 60px;
}
.list-unstyled a {
  text-decoration: none;
}
.list-unstyled a li {
  color: #2c3539;
  margin-bottom: 10px;
}
.social-info > img {
  padding-left: 10px;
}

.social-info > img:hover {
  opacity: 0.7;
}
</style>
