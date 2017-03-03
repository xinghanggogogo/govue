<template lang="html">
    <div id="counter-event-example">
        <p>子组件向父组件通信.子组件出发父组件方法并传值.</p>
        <p>父组件total:{{ total }}</p>
        <button-counter v-on:incrementpass="incrementTotal"></button-counter>
  </div>
</template>

<script>
//直接定义一个组件!
import Vue from 'vue';
Vue.component('button-counter', {
  template: '<button v-on:click="increment">子组件增加{{ counter }}</button>',
  data () {
    return {
      counter: 0
    }
  },
  methods: {
    increment () {
      this.counter += 1
      this.$emit('incrementpass', '子组件参数')
    }
  },
})

export default {
    name: 'parent',
    data () {
        return {
            total: 0
        }
    },
    methods: {
      incrementTotal: function (data) {
        this.total += 1
        console.log(data);
      }
    }
}
</script>

<style lang="css">
</style>
