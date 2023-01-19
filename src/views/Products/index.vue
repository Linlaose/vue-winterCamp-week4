<script>
import ProductModal from '@/components/ProductModal/index.vue'
import DelProductModal from '@/components/DelProductModal/index.vue'
import Pagination from '@/components/Pagination/index.vue'
import { handleError } from 'vue'

export default {
  data() {
    return {
      apiUrl: 'https://vue3-course-api.hexschool.io/v2',
      apiPath: 'ryantsai',
      products: [],
      tempProduct: {
        imagesUrl: [],
      },
      pagination: {},
      delItem: null,
      editItem: null,
      isNew: true
    }
  },
  mounted() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    axios.defaults.headers.common.Authorization = token;
    this.checkAdmin();
  },
  components: {
    ProductModal,
    DelProductModal,
    Pagination
  },
  methods: { 
    checkAdmin() {
      const url = `${this.apiUrl}/api/user/check`;
      axios.post(url)
        .then(() => {
          this.getData();
        })
        .catch((err) => {
          alert(err.response.data.message)
          this.$router.push({ name: 'Login' });
        })
    },
    getData(page) {
      const url = `${this.apiUrl}/api/${this.apiPath}/admin/products?page=${page}`;
      axios.get(url)
        .then((response) => {
          const { products, pagination } = response.data;
          this.products = products;
          this.pagination = pagination;
        }).catch((err) => {
          alert(err.response.data.message);
          this.$router.push({ name: 'Login' })
        })
    },
    openModal(modalName, item) {
      if (modalName === 'delProductModal') {
        this.delItem = item;
        const delProductModal = this.$refs.delProduct.delProductModal;
        delProductModal.show();
      } else if (modalName === 'productModal') {
        if (this.editItem) {
          this.isNew = true;
          this.editItem = _.cloneDeep(this.tempProduct);
        }
        const productModal = this.$refs.product.productModal;
        productModal.show();
      } else if (modalName === 'edit') {
        if (!item['imagesUrl']) {
          item['imagesUrl'] = [];
        }
        this.isNew = false;
        this.editItem = _.cloneDeep(item);
        const productModal = this.$refs.product.productModal;
        productModal.show();
      }
    },
  },
  watch: {
    $route(to, from) {
      this.getData(to.params.id);
    }
  }
}
</script>

<template src="./template.html"></template>

<style src="./styles.css" scoped>

</style>