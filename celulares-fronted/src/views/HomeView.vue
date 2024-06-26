<script setup lang="ts"></script>

<template>
  <section class="hero-section" id="section_1">
    <div class="section-overlay"></div>

    <div class="container d-flex justify-content-center align-items-center">
      <div class="row">
        <div class="col-12 mt-auto mb-5 text-center">
          <small>Bienvenido a</small>

          <h1 class="text-white mb-5">Tienda de Celulares Apple</h1>

          <a class="btn custom-btn smoothscroll" href="#section_2">Explorar ahora</a>
        </div>

        <div class="col-lg-12 col-12 mt-auto d-flex flex-column flex-lg-row text-center">
          <div class="date-wrap">
            <h5 class="text-white">
              <i class="custom-icon bi-clock me-2"></i>
              10 - 12<sup>th</sup>, Dec 2023
            </h5>
          </div>

          <div class="location-wrap mx-auto py-3 py-lg-0">
            <h5 class="text-white">
              <i class="custom-icon bi-geo-alt me-2"></i>
              National Center, United States
            </h5>
          </div>

          <div class="social-share">
            <ul class="social-icon d-flex align-items-center justify-content-center">
              <span class="text-white me-3">Share:</span>

              <li class="social-icon-item">
                <a href="#" class="social-icon-link">
                  <span class="bi-facebook"></span>
                </a>
              </li>

              <li class="social-icon-item">
                <a href="#" class="social-icon-link">
                  <span class="bi-twitter"></span>
                </a>
              </li>

              <li class="social-icon-item">
                <a href="#" class="social-icon-link">
                  <span class="bi-instagram"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="video-wrap">
      <video autoplay="true" loop="true" muted="false" class="custom-video" poster="">
        <source src="@/assets/video/1.mp4" type="video/mp4" />

        Your browser does not support the video tag.
      </video>
    </div>
  </section>

  <div class="letra">
    <h2>CELULARES</h2>
  </div>
  <section class="hero-section1" id="section_1">
    <div class="image-wrap">
      <img src="@/assets/images/4.jpg" alt="Description of the image" class="custom-image" />
      <div class="card-detail">
        <h3 class="product">
          <a href="#" style="color: #7dbcc9">Iphone 10</a>
        </h3>
      </div>
    </div>

    <div class="image-wrap">
      <img src="@/assets/images/5.jpg" alt="Description of the image" class="custom-image" />
      <div class="card-detail">
        <h3 class="product">
          <a href="#" style="color: #7dbcc9">Iphone 10</a>
        </h3>
      </div>
    </div>

    <div class="image-wrap">
      <img src="@/assets/images/7.jpg" alt="Description of the image" class="custom-image" />
      <div class="card-detail">
        <h3 class="product">
          <a href="#" style="color: #7dbcc9">Iphone 10</a>
        </h3>
      </div>
    </div>

    <div class="image-wrap">
      <img src="@/assets/images/8.jpg" alt="Description of the image" class="custom-image" />
      <div class="card-detail">
        <h3 class="product">
          <a href="#" style="color: #7dbcc9">Iphone 10</a>
        </h3>
      </div>
    </div>
    <div class="image-wrap">
      <img src="@/assets/images/8.jpg" alt="Description of the image" class="custom-image" />
      <div class="card-detail">
        <h3 class="product">
          <a href="#" style="color: #7dbcc9">Iphone 10</a>
        </h3>
      </div>
    </div>
  </section>

  <section class="hero-section2" id="section_1">
    <div class="image-wrap">
      <img src="@/assets/images/4.jpg" alt="Description of the image" class="custom-image" />
      <div class="card-detail">
        <h3 class="product">
          <a href="#" style="color: #7dbcc9">Iphone 10</a>
        </h3>
      </div>
    </div>

    <div class="image-wrap">
      <img src="@/assets/images/5.jpg" alt="Description of the image" class="custom-image" />
      <div class="card-detail">
        <h3 class="product">
          <a href="#" style="color: #7dbcc9">Iphone 10</a>
        </h3>
      </div>
    </div>

    <div class="image-wrap">
      <img src="@/assets/images/7.jpg" alt="Description of the image" class="custom-image" />
      <div class="card-detail">
        <h3 class="product">
          <a href="#" style="color: #7dbcc9">Iphone 10</a>
        </h3>
      </div>
    </div>

    <div class="image-wrap">
      <img src="@/assets/images/8.jpg" alt="Description of the image" class="custom-image" />
      <div class="card-detail">
        <h3 class="product">
          <a href="#" style="color: #7dbcc9">Iphone 10</a>
        </h3>
      </div>
    </div>
    <div class="image-wrap">
      <img src="@/assets/images/8.jpg" alt="Description of the image" class="custom-image" />
      <div class="card-detail">
        <h3 class="product">
          <a href="#" style="color: #7dbcc9">Iphone 10</a>
        </h3>
      </div>
    </div>
  </section>

  <!-- <section class="product-container">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center mb-5">
          <h2 class="text-dark mb-4">Nuestros Productos</h2>
          <p class="text-dark">Descubre nuestra selección de productos</p>
        </div>
      </div>

      <div class="row">

        <div class="col-lg-4 col-md-6 mb-4">
          <div class="product-item">
            <img src="/images/4.jpg" alt="Product 1" class="img-fluid" />
            <div class="product-info">
              <h3 class="text-dark">Producto 1</h3>
              <p class="text-dark">Descripción del producto 1.</p>
            </div>
          </div>
        </div>

    
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="product-item">
            <img src="/images/product-item2.jpg" alt="Product 2" class="img-fluid" />
            <div class="product-info">
              <h3 class="text-dark">Producto 2</h3>
              <p class="text-dark">Descripción del producto 2.</p>
            </div>
          </div>
        </div>


      </div>
    </div>
  </section> -->

  <section class="contact-section section-padding" id="section_6">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-12 mx-auto">
          <h2 class="text-center mb-4">Interested? Let's talk</h2>

          <nav class="d-flex justify-content-center">
            <div
              class="nav nav-tabs align-items-baseline justify-content-center"
              id="nav-tab"
              role="tablist"
            >
              <button
                class="nav-link active"
                id="nav-ContactForm-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-ContactForm"
                type="button"
                role="tab"
                aria-controls="nav-ContactForm"
                aria-selected="false"
              >
                <h5>Contact Form</h5>
              </button>

              <button
                class="nav-link"
                id="nav-ContactMap-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-ContactMap"
                type="button"
                role="tab"
                aria-controls="nav-ContactMap"
                aria-selected="false"
              >
                <h5>Google Maps</h5>
              </button>
            </div>
          </nav>

          <div class="tab-content shadow-lg mt-5" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="nav-ContactForm"
              role="tabpanel"
              aria-labelledby="nav-ContactForm-tab"
            >
              <form
                class="custom-form contact-form mb-5 mb-lg-0"
                action="#"
                method="post"
                role="form"
              >
                <div class="contact-form-body">
                  <div class="row">
                    <div class="col-lg-6 col-md-6 col-12">
                      <input
                        type="text"
                        name="contact-name"
                        id="contact-name"
                        class="form-control"
                        placeholder="Full name"
                        required
                      />
                    </div>

                    <div class="col-lg-6 col-md-6 col-12">
                      <input
                        type="email"
                        name="contact-email"
                        id="contact-email"
                        pattern="[^ @]*@[^ @]*"
                        class="form-control"
                        placeholder="Email address"
                        required
                      />
                    </div>
                  </div>

                  <input
                    type="text"
                    name="contact-company"
                    id="contact-company"
                    class="form-control"
                    placeholder="Company"
                    required
                  />

                  <textarea
                    name="contact-message"
                    rows="3"
                    class="form-control"
                    id="contact-message"
                    placeholder="Message"
                  ></textarea>

                  <div class="col-lg-4 col-md-10 col-8 mx-auto">
                    <button type="submit" class="form-control">Send message</button>
                  </div>
                </div>
              </form>
            </div>

            <div
              class="tab-pane fade"
              id="nav-ContactMap"
              role="tabpanel"
              aria-labelledby="nav-ContactMap-tab"
            >
              <iframe
                class="google-map"
                src="@/assets/https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29974.469402870927!2d120.94861466021855!3d14.106066818082482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd777b1ab54c8f%3A0x6ecc514451ce2be8!2sTagaytay%2C%20Cavite%2C%20Philippines!5e1!3m2!1sen!2smy!4v1670344209509!5m2!1sen!2smy"
                width="100%"
                height="450"
                style="border: 0"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              <!-- You can easily copy the embed code from Google Maps -> Share -> Embed a map // -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.product-item {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.product-item:hover {
  transform: translateY(-5px);
}

.product-info {
  text-align: center;
}

.product-info h3 {
  margin-top: 10px;
}

.product-info p {
  font-size: 14px;
}

.btn-primary {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #0056b3;
}
</style>
