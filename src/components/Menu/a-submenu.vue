<!--  -->
<template>
  <ul class="a-submenu">
    <div class="a-submenu-title" @click="handleClick">
      <slot name="title"></slot>
      <span class="title-icon">{{titleIcon}}</span>
    </div>
    <div class="a-submenu-child-box" v-show="showChild">
      <slot></slot>
    </div>
  </ul>
</template>

<script>
export default {
  name: "ASubmenu",
  data() {
    return {
      showChild:false
    };
  },

  components: {},

  computed: {
    titleIcon(){
      if(this.showChild==false){
        return '↓'
      } return '↑'
    }
  },

  mounted() {},

  methods: {
    handleClick(){
      this.showChild= !this.showChild
  }
}
}
</script>
<style lang='less' scoped>
.a-submenu {
  &-title {
    background: red;
    color: aliceblue;
    position: relative;
    cursor: pointer;
    .title-icon{
      position: absolute;
      top: 4px;
      right: 10px;
      line-height: 12px;
    }
  }
  &-child-box {
    overflow: hidden;
    padding-left: 20px;
  }
  li{
    background: rgb(33, 35, 39);

  }
}
</style>
