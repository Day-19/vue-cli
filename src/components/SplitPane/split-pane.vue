<!--  -->
<template>
  <div
    class="split-pane-wrapper"
    ref="outer"
  >
    <div
      class="pane pane-left"
      :style="{width:leftOffsetPercent,'padding-left':paddingLeft}"
    >
    <slot name="left"></slot>
    </div>
    <div
      class="pane-trigger-con"
      :style="{left:triggerLeft,width:triggerWidth+'px'}"
      @mousedown="handleMousedown"
    ></div>
    <div
      class="pane pane-right"
      :style="{left:leftOffsetPercent,'padding-left':paddingLeft }"
    >
    <slot name="right"></slot>
    </div>
    <!-- <button @click="handleClick">变换宽度</button> -->
  </div>
</template>

<script>
export default {
  name: "SplitPane",
  props: {
    value:{
      type:Number,
      default:0.5
    },
    triggerWidth: {
      type: Number,
      default: 8
    },
    min: {
      type: Number,
      default: 0.1
    },
    max: {
      type: Number,
      default: 0.9
    }
  },
  data() {
    return {
      // leftOffset: 0.3,
      canMove: false,
      initOffset: 0,
      paddingLeft:`${this.triggerWidth / 2}px`
    };
  },

  components: {},

  computed: {
    leftOffsetPercent() {
      return `${this.value * 100}%`;
    },
    triggerLeft() {
      return `calc(${this.value * 100}% - ${this.triggerWidth / 2}px)`;
    }
  },

  mounted() {},

  methods: {
    handleClick() {
      this.value -= 0.02;
    },
    handleMousedown(event) {
      document.addEventListener("mousemove", this.handleMousemove);
      document.addEventListener("mouseup", this.handleMouseup);
      this.initOffset =
        event.pageX - event.srcElement.getBoundingClientRect().left;
      this.canMove = true;
    },
    handleMousemove(event) {
      if (!this.canMove) return;
      //获取整个容器的宽高和所处位置偏移量对象
      const outerRect = this.$refs.outer.getBoundingClientRect();
      //中间拉杠的偏移量百分比
      let offsetPercent =
        (event.pageX - this.initOffset + this.triggerWidth / 2 -
         outerRect.left) / outerRect.width;
      if (offsetPercent < this.min) offsetPercent = this.min
      if (offsetPercent > this.max) offsetPercent = this.max
        // this.$emit('input',offsetPercent )
        this.$emit('update:value',offsetPercent )

    },
    handleMouseup() {
      this.canMove = false;
    }
  }
};
</script>
<style lang='less' scoped>
.split-pane-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  .pane {
    height: 100%;
    top: 0;
    position: absolute;
    &-left {
      // width: 30%;
      background: palevioletred;
    }
    &-right {
      right: 0;
      bottom: 0;
      // left: 30%;
      background: yellow;
    }
  }
  .pane-trigger-con {
    height: 100%;
    background: red;
    position: absolute;
    top: 0;
    z-index: 10;
    user-select: none;
    cursor: col-resize;
  }
}
</style>
