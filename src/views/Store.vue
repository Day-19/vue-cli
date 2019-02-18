<!--  -->
<template>
  <div>
    <a-input @input="handleInput" />
    <br>
    {{inputValue}}
    <a-show :content="inputValue"/>
  </div>
</template>
<script>
import AInput from "_c/Store/AInput.vue";
import AShow from '_c/Store/AShow.vue'
export default {
  name: "store",
  data() {
    return {
      inputValue: "",

    };
  },

  components: {
    AInput,
    AShow
  },

  computed: {},

  mounted () {},

  methods: {
    handleInput (val) {
      this.inputValue = val
    }
  }
};
</script>
<style lang='scss' scoped>
</style>
