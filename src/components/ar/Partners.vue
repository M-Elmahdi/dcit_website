<template>
  <section class="py-5" id="partners">
      <div class="container my-5">
          <div class="row justify-content-center text-end">
              <div class="col-lg-6">
                  <h2 class="heading">{{ lang.our_partners_title }}</h2>
                  <p class="lead">{{ lang.our_partners_content }}</p>
                  <!-- partner logos start -->
                  <div class="row">
                    <div class="col text-center">
                      <img class="col-md-7 img-fluid mb-4 rounded" src="@/assets/images/huawei_logo.png" alt="..." />
                    </div>
                    <div class="col text-center">
                      <img class="col-md-4 img-fluid mb-4 rounded" src="@/assets/images/dell_logo.png" alt="..." />
                    </div>
                  </div>
                  <!-- partner logos end -->
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