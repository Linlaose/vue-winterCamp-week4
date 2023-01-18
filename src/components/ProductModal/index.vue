<script>

export default {
  props: {
    getData: {
      type: Function
    },
    product: Object,
    isNew: Boolean
  },
  data() {
    return {
      apiUrl: 'https://vue3-course-api.hexschool.io/v2',
      apiPath: 'ryantsai',
      productModal: null,
      tempProduct: {
        imagesUrl: []
      },
    };
  },
  mounted() {
    this.productModal = new bootstrap.Modal(this.$refs.modal, {
      keyboard: false,
      backdrop: 'static'
    })
  },
  methods: {
    submitHandler() {
      if (this.isNew) {
        const url = `${this.apiUrl}/api/${this.apiPath}/admin/product`;
        const data = { data:{ ...this.tempProduct}};

        axios.post(url, data)
          .then(() => {
            this.getData();
            this.productModal.hide();
          })
          .catch((err) => {
            alert(err.response.data.message)
          })
      }else{
        const url = `${this.apiUrl}/api/${this.apiPath}/admin/product/${this.tempProduct.id}`;
        const data = { data: {...this.tempProduct}}

        axios.put(url, data)
          .then(() => {
            this.getData();
            this.productModal.hide();
          })
          .catch((err) => {
            console.log(err);
          })
      }
    }
  },
  watch: {
    product: {
      handler(newVal, oldVal) {
        this.tempProduct = newVal;
      },
      deep: true
    }
  }
}
</script>

<template src="./template.html">
</template>
