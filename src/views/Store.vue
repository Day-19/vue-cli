<!--  -->
<template>
  <div>
    <!-- <a-input @input="handleInput" /> -->
    <a-input v-model="inputValue"></a-input>
    <br>
    {{inputValue}}
    <a-show :content="inputValue" />
    <p>appName :{{ appName }} ,appNameWithVersion:{{appNameWithVersion}}</p>
    <p>userName :{{userName}}, firstLetter is :{{firstLetter}}</p>
    <button @click="handleChangeAppName">修改appName</button>
    <p>appVersion : {{appVersion}}</p>
    <button @click="changeUserName">修改用户名</button>
    <br>
    <br>
    <button @click="checkUserInfo">修改appName(通过action)</button>
    <p>appName1 :{{ appName1 }} </p>
    <br>
    <button @click="registerModule">动态注册模块</button>
    <p
      v-for="(li, index) in todoList"
      :key="index"
    >
      {{li}}</p>
      <br>
      <br>
    <!-- <p>传统双向数据绑定写法(绑定value以及input事件)</p>
     <a-input :value="stateValue" @input="handleStateValueChange"></a-input>
     stateValue:{{stateValue}}
     <br>
     <br> -->
    <p>v-model写法</p>
    <a-input v-model="stateValue"></a-input>
    <br> 
    {{stateValue}}
  </div>
</template>
<script>
import AInput from "_c/Store/AInput.vue";
import AShow from "_c/Store/AShow.vue";

// -----------1开始------------
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
// -----------1结束------------

// -----------2开始(因使用命名空间)------------
// import { createNamespacedHelpers } from 'vuex'
// const {mapState} = createNamespacedHelpers('user')
// -----------2结束------------
export default {
  name: "store",
  data() {
    return {
      inputValue: ""
    };
  },

  components: {
    AInput,
    AShow
  },

  computed: {
    /* // 获取vuex 中 state的值
     appName() {
      return this.$store.state.appName;
    },
    //获取 vuex中 User模块下的 state的值
    userName() {
      return this.$store.state.user.userName;
    }  */

    // -----------1开始------------
    //展开操作符
    ...mapState({
      // appName: state => state.appName,
      userName: state => state.user.userName,
      appVersion: state => state.appVersion,
      appName: state => state.appName,
      appName1: state => state.appName1,
      todoList: state => (state.user.todo ? state.user.todo.todoList : []),
      // stateValue: state =>  state.stateValue  //传统双向数据绑定写法
    }),
    // ------------vmodel写法开始----------
    stateValue : {
      get ()  {
        return this.$store.state.stateValue
      },
      set (value) {
        this.SET_STATE_VALUE(value)
      }
     //------------vmodel写法结束----------
    },
    // appName() {
    //   return this.$store.state.appName;
    // },
    // 如果想引入相应的模块名 ,在mapState第一个参数写上模块名
    // ...mapState('user',{
    //   userName:state => state.userName
    // })
    // -----------1结束------------

    // -----------2开始(省略模块名user)------------
    // ...mapState({
    //   userName:state =>state.userName
    // })
    // -----------2结束------------

    // appNameWithVersion() {
    //   return this.$store.getters.appNameWithVersion;
    // }
    ...mapGetters(["appNameWithVersion", "firstLetter"])
  },

  mounted() {},

  methods: {
    ...mapMutations(["SET_USER_NAME", "SET_APP_NAME", "SET_APP_VERSION","SET_STATE_VALUE"]),
    ...mapActions(["updateAppName"]),
    handleInput(val) {
      this.inputValue = val;
    },
    handleChangeAppName() {
      //第二个参数可以传入对象,以便muations接收
      // this.$store.commit('SET_APP_NAME','newAppName')
      //也可以这么写
      /* this.$store.commit({
           type:'SET_APP_NAME',
           appName:'newAppName'
         })
         this.$store.commit({
           type:'SET_APP_VERSION'
         }) */
      // ---------mapMutations开始-------------
      this.SET_APP_NAME({
        appName: "newAppName"
      });
      //---------mapMutations结束-------------

      this.SET_APP_VERSION({
        appVersion: "2.0"
      });
    },
    checkUserInfo() {
      this.updateAppName();
    },
    registerModule() {
      //给user模块创建一个子模块
      this.$store.registerModule(['user','todo'], {
        state: {
          todoList: ["学习mutations", "学习actions"]
        }
      });
    },
    changeUserName() {
      this.SET_USER_NAME({
        userName: "vue-cource"
      });
    },
    handleStateValueChange (val) {
      this.SET_STATE_VALUE(val)
    }
  }
};
</script>
<style lang='scss' scoped>
</style>
