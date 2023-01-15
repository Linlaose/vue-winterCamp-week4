<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      }
    }
  },
  methods: {
    login() {
      const api = 'https://vue3-course-api.hexschool.io/admin/signin';
      axios.post(api, this.user).then((response) => {
        const { token, expired } = response.data;
        console.log(response);
        // 寫入 cookie token
        // expires 設置有效時間
        document.cookie = `hexToken=${token};expires=${new Date(expired)};`;
        router.push({ path: '/products'});
      }).catch((err) => {
        alert(err.response.data.message);
      });
    },
  },
}
</script>

<template src="./template.html"></template>

<style src="./styles.css" scoped></style>