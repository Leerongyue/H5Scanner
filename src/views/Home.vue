<template>
  <div>
    <div>home</div>
    <router-link to="/scanning">扫码</router-link>
    <div>{{scanResult}}</div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Bus from '@/helper/bus';

  @Component
  export default class Home extends Vue {
    scanResult = '';

    mounted() {
      Bus.$on('transferScanResult', (res: string) => {
        this.scanResult = res;
      });
    }

    beforeDestroyed() {
      Bus.$off('transferScanResult');
    }
  }
</script>

<style lang="scss" scoped>

</style>