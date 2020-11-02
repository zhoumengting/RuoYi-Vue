<!--
@author zmt
新建component
-->
<template>
  <!-- HTML模板-->
  <div class='hi'>
    <!--  步骤2: 在这里显示 message -->
    {{message}}
  </div>
</template>

<script>
    export default {
      name: "SayHi.vue",
      data () {
        return {
          // 步骤1: 这里定义了变量 message 的初始值
          message: '你好Vue! 本消息来自于变量'
        }
      }
    }
</script>

<style scoped>
  .hi {
    color: red;
    font-size: 20px;
  }
</style>
