<script>
export default {
  props: {
    id: {
      types: [String, Number]
    },
    title: {
      types: [String, Number]
    },
    getData: {
      type: Function
    }
  },
  data() {
    return {
      apiUrl: 'https://vue3-course-api.hexschool.io/v2',
      apiPath: 'ryantsai',
      delProductModal: null
    };
  },
  mounted() {
    this.delProductModal = new bootstrap.Modal(this.$refs.modal, {
      keyboard: false,
      backdrop: 'static'
    })
  },
  methods: {
    delProductHandler() {
      const url = `${this.apiUrl}/api/${this.apiPath}/admin/product/${this.id}`;
      axios.delete(url)
      .then(() => {
          this.getData();
          this.delProductModal.hide();
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    }
  }
}
</script>

<template src="./template.html">
</template>
