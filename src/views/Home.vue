<template>
  <div>
    <div>home</div>
    <router-link to="/scanning">扫码</router-link>
    <div>{{scanResult}}</div>
  </div>
</template>

<script lang="js">
  import Bus from '@/helper/bus';
  export default {
    data() {
      return {
        scanResult: ''
      }
    },
    mounted() {
      Bus.$on('transferScanResult', (res) => {
        this.scanResult = res;
      });
    },
    beforeDestroyed() {
      Bus.$off('transferScanResult');
    },
  }
</script>

<style lang="scss" scoped>

</style>