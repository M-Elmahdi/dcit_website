<template>
  <section class="py-5" id="our_vision">
      <div class="container my-5">
          <div class="row justify-content-center text-end">
              <div class="col-lg-6">
                  <h2 class="heading">{{ lang.our_vision_title }}</h2>
                  <p class="lead">{{ lang.our_vision_content }}</p>                  
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