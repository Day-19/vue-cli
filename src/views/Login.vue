<!--  -->
<template>
  <div>
    邮箱: <input
      type="text"
      v-model="userName"
    />
    <br>
    密码: <input
      type="password"
      v-model="password"
    />
    <br>
    <button @click="handleClick">登录</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      userName: "",
      password: ""
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    ...mapActions(["login"]),
    handleClick() {
      // console.log(this.userName)
      // console.log(this.password)
      // ------------开启服务器14启动登录功能-------------------
      this.login({
        userName: this.userName,
        password: this.password
      }).then(() => {
        // console.log('success!!')
        this.$router.push({
          name: 'home'
        })
      }).catch(error => {
        console.log(error)
      })
      // ------------开启服务器14启动登录功能-------------------
    }
  }
};
</script>

