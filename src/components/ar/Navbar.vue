<template>
    <nav class="navbar navbar-expand-lg navbar-dark daman-theme">
      <div class="container">
          <a class="navbar-brand lead">
            <img src="@/assets/images/daman_logo-removebg.png" width="100" class="img-thumbnail lead">
            {{ lang.company_name }}
            </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page"
                    href="#about_us">{{ lang.nav_items.about_us }}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page"
                    href="#our_vision">{{ lang.nav_items.our_vision }}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " aria-current="page"
                    href="#partners">{{ lang.nav_items.our_partners }}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " aria-current="page"
                    href="#our_services">{{ lang.nav_items.our_services }}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " aria-current="page"
                    href="">{{ lang.nav_items.other }}</a>
                </li>
              </ul>
          </div>
      </div>
  </nav>
</template>

<script>
export default {
    name: 'Navbar',
    props: ['lang'],
    data(){
        return {

        }
    }
}
</script>