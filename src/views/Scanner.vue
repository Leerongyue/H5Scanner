<!--<template>-->
<!--  <div>-->
<!--    <video autoplay id="video"></video>-->
<!--    <canvas id="canvas"></canvas>-->
<!--  </div>-->
<!--</template>-->

<!--<script lang="ts">-->
<!--  import Vue from 'vue';-->
<!--  import {Component} from 'vue-property-decorator';-->
<!--  import {BrowserMultiFormatReader} from '@zxing/library'-->

<!--  @Component-->
<!--  export default class Scanner extends Vue {-->
<!--    mounted() {-->
<!--      const video = document.querySelector('#video') as HTMLVideoElement;-->
<!--      const canvas = document.querySelector('#canvas') as HTMLCanvasElement;-->
<!--      if (video && canvas) {-->
<!--        const constraints = {-->
<!--          video: {-->
<!--            width: 400,-->
<!--            height: 400,-->
<!--            facingMode: 'environment'-->
<!--          },-->
<!--        };-->
<!--        navigator.mediaDevices.getUserMedia(constraints)-->
<!--          .then(stream => {-->
<!--            if (this.$route.path === '/scanner') {-->
<!--              video.srcObject = stream;-->
<!--              canvas.width = video.videoWidth;-->
<!--              canvas.height = video.videoHeight;-->
<!--              //@ts-ignore-->
<!--              canvas.getContext('2d').drawImage(video, 0, 0);-->
<!--              const img = document.createElement('img');-->
<!--              img.src = canvas.toDataURL('image/png');-->
<!--              //@ts-ignore-->
<!--              screenshotsContainer.prepend(img);-->
<!--              const codeReader = new ZXing.BrowserQRCodeReader();-->
<!--              codeReader.decodeFromImage(img)-->
<!--                //@ts-ignore-->
<!--                .then(result => window.alert(result.text))-->
<!--                .catch(err => console.error(err));-->
<!--            } else {-->
<!--              stream.getTracks().forEach((track) => {-->
<!--                track.stop();-->
<!--              });-->
<!--            }-->
<!--          })-->
<!--          .catch(err => console.log(err));-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--</script>-->

<!--<style lang="scss" scoped>-->

<!--</style>-->