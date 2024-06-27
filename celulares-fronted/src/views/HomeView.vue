<script setup lang="ts">
import image2 from '@/assets/images/2.jpg'
import image3 from '@/assets/images/3.jpg'
import image4 from '@/assets/images/4.jpg'
import image5 from '@/assets/images/5.jpg'
import image6 from '@/assets/images/9.jpg'
import video from '@/assets/video/1.mp4'
</script>

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
      <video autoplay loop muted class="custom-video" poster="">
        <source :src="video" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </section>

  <div class="letra">
    <h2>CELULARES</h2>
  </div>

  <section class="hero-section1" id="section_2">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-2 col-md-3 col-sm-4 col-6 mb-4">
          <div class="image-wrap">
            <img :src="image2" alt="Descripción de la imagen" class="custom-image img-fluid" />
            <div class="comprar_container">
              <RouterLink to="/compras/crear/21" style="color: #7dbcc9"> Comprar </RouterLink>
            </div>
          </div>
          <div class="card-detail">
            <h3 class="product">
              <label style="color: #7dbcc9">iPhone 10</label>
            </h3>
          </div>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-4 col-6 mb-4">
          <div class="image-wrap">
            <img :src="image3" alt="Descripción de la imagen" class="custom-image img-fluid" />
            <div class="comprar_container">
              <label style="color: #7dbcc9"> Comprar </label>
            </div>
          </div>
          <div class="card-detail">
            <h3 class="product">
              <RouterLink to="/compras/crear/22" style="color: #7dbcc9">iPhone 11</RouterLink>
            </h3>
          </div>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-4 col-6 mb-4">
          <div class="image-wrap">
            <img :src="image4" alt="Descripción de la imagen" class="custom-image img-fluid" />
            <div class="card-detail">
              <h3 class="product">
                <a href="#" style="color: #7dbcc9">iPhone 12</a>
              </h3>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-4 col-6 mb-4">
          <div class="image-wrap">
            <img :src="image5" alt="Descripción de la imagen" class="custom-image img-fluid" />
            <div class="card-detail">
              <h3 class="product">
                <a href="#" style="color: #7dbcc9">iPhone 13</a>
              </h3>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-4 col-6 mb-4">
          <div class="image-wrap">
            <img :src="image6" alt="Descripción de la imagen" class="custom-image img-fluid" />
            <div class="card-detail">
              <h3 class="product">
                <a href="#" style="color: #7dbcc9">iPhone 14</a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

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
                width="1024"
                height="450"
                frameborder="0"
                style="border: 0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59597.5277933748!2d-65.26374059999999!3d-19.03351675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x917a4bb1f072e0bd%3A0x439a3c647b57d809!2sSucre%2C%20Bolivia!5e0!3m2!1sen!2sus!4v1624697571655!5m2!1sen!2sus"
                allowfullscreen
              >
              </iframe>
              <!-- You can easily copy the embed code from Google Maps -> Share -> Embed a map // -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Estilos para imágenes */
.image-wrap {
  position: relative;
  overflow: hidden;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.custom-image {
  width: 100%; /* Ajustar el ancho de la imagen */
  height: auto; /* Mantener la proporción */
}

/* Estilos adicionales según sea necesario */
@media (max-width: 576px) {
  .hero-section1 .container {
    padding: 0 15px; /* Ajustar el padding para dispositivos pequeños */
  }
}
@media (min-width: 1400px) {
  .container,
  .container-lg,
  .container-md,
  .container-sm,
  .container-xl,
  .container-xxl {
    max-width: 90%;
  }
}
.card-detail {
  background-color: rgba(25, 15, 15, 0.87);
  padding: 8px;
  height: 50px;
  width: 100%;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}

.comprar_container {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 150px;
  opacity: 1;
  transition: all 0.5s ease;
  text-align: center;
  background: #151414;
  height: 40px;
  transform: translateX(-50%);
  border-radius: 10px;
  line-height: 35px;
  opacity: 0;
  cursor: pointer;
}

.image-wrap:hover .comprar_container {
  display: block;
  transform: translateX(-50%) translateY(-50%);
  opacity: 1;
}
</style>
