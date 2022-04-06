<template>
  <section class="" id="about_us">
      <div class="container my-5">
          <div class="row justify-content-center text-end">
              <div class="col-lg-6">
                  <h2 class="heading">{{ lang.about_us_title }}</h2>
                  <p class="lead">{{ lang.about_us_content }}</p>                  
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