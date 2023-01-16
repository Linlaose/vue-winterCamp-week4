<script>
let productModal = null

export default {
  data() {
    return {
      apiUrl: 'https://vue3-course-api.hexschool.io/v2',
      apiPath: 'ryantsai',
    };
  },
  mounted() {
    productModal = new bootstrap.Modal(document.getElementById('productModal'), {
      keyboard: false,
      backdrop: 'static'
    })
  }
}
</script>

<template src="./template.html">
</template>
