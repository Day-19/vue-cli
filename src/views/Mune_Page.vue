<!--  -->
<template>
  <div class="mune-box">
    <!-- <a-menu>
      <a-menu-item>111</a-menu-item>
      <a-menu-item>222</a-menu-item>
    </a-menu>
    <a-submenu>
      <div slot="title">标题三</div>
      <a-menu-item>3-1</a-menu-item>
      <a-submenu>
        <div slot="title">3-2</div>
        <a-menu-item>3-2-1</a-menu-item>
        <a-menu-item>3-2-2</a-menu-item>
        <a-menu-item>3-2-3</a-menu-item>
      </a-submenu>
    </a-submenu> -->
    <a-menu>
      <template v-for="(item,index) in list">
        <!-- 循环没有children的list -->
        <a-menu-item v-if="!item.children" :key="`menu_item_${index}`">{{item.title}}</a-menu-item>
        <!-- 否则就循环有children的list -->
        <re-submenu v-else :key="`menu_item_${index}`" :parent="item" :index="index"></re-submenu>
      </template>
    </a-menu>
  </div>
</template>

<script>
import muneComponents from "_c/Menu";
const { AMenu, AMenuItem, ASubmenu } = muneComponents;
import ReSubmenu from "./ReSubmenu";
export default {
  name: "",
  data() {
    return {
      list: [
        {
          title: '11'
        },
        {
          title: '22'
        },
        {
          title: '33',
          children:[
            {
              title:'33-1'
            },
            {
              title:'33-2'
            },
            {
              title:'33-3',
              children:[
                {
                  title:'33-3-1'
                },
                {
                  title:'33-3-2'
                },
                {
                  title:'33-3-3'
                }
              ]
            }
          ]
        }
      ]
    };
  },

  components: {
    AMenu,
    AMenuItem,
    ASubmenu,
    ReSubmenu
  },

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style lang='less' scoped>
.mune-box {
  width: 400px;
  height: 300px;
  ul {
    padding: 0 0;
  }
}
</style>
