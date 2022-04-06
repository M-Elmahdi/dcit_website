<template>
  <section class="py-5" id="our_services">
      <div class="container my-5">
          <div class="row justify-content-center">
              <div class="col-lg-6">
                  <h2 class="heading">{{ lang.our_services }}</h2>
                  
                  <div class="row">
                    <div class="col text-center">
                      <img class="col-md-7 img-fluid mb-4 rounded tag" src="@/assets/icons/box-open-path.svg" alt="..." />
                      <h3>{{ lang.services[0].heading }}</h3>
                      <p class="lead">{{ lang.services[0].content }}</p>
                    </div>

                    <div class="col text-center">
                      <img class="col-md-7 img-fluid mb-4 rounded tag" src="@/assets/icons/check-circle_path.svg" alt="..." />
                      <h3>{{ lang.services[1].heading }}</h3>
                      <p class="lead">{{ lang.services[1].content }}</p>
                    </div>

                    <div class="col text-center">
                      <img class="col-md-7 img-fluid mb-4 rounded tag" src="@/assets/icons/shopping-cart-path.svg" alt="..." />
                      <h3>{{ lang.services[2].heading }}</h3>
                      <p class="lead">{{ lang.services[2].content }}</p>
                    </div>
                  </div>       
              </div>
          </div>
      </div>
  </section>
</template>

<script>
export default {
props: ['lang']
}
</script>