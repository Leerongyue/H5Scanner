<template>
  <div class="page">
    <video id="video" autoplay></video>
    <div v-show="tipShow" class="tip">{{tipMsg}}</div>
  </div>
</template>

<script lang="js">
  import adapter from 'webrtc-adapter';
  import {BrowserMultiFormatReader} from '@zxing/library'
  import Bus from '@/helper/bus'

  export default {
    data() {
      return {
        codeReader: new BrowserMultiFormatReader(),
        textContent: '',
        tipMsg: '',
        tipShow: false,
      }
    },
    mounted() {
      this.openScan()
    },
    methods: {
      async openScan() {
        this.codeReader.listVideoInputDevices().then((videoInputDevices) => {
          this.tipShow = true
          this.tipMsg = '正在调用后置摄像头...'
          // 默认获取第一个摄像头设备id
          let firstDeviceId = videoInputDevices[0].deviceId
          // 获取第一个摄像头设备的名称
          const videoInputDeviceslablestr = JSON.stringify(videoInputDevices[0].label)
          if (videoInputDevices.length > 1) {
            // 判断是否后置摄像头
            if (videoInputDeviceslablestr.indexOf('back') > -1) {
              firstDeviceId = videoInputDevices[0].deviceId
            } else {
              firstDeviceId = videoInputDevices[1].deviceId
            }
          }
          this.decodeFromInputVideoFunc(firstDeviceId)
        }).catch((err) => {
          this.tipShow = false
          console.error(err)
        })
      },
      decodeFromInputVideoFunc(firstDeviceId) {
        this.codeReader.reset() // 重置
        this.textContent = null // 重置
        this.codeReader.decodeFromVideoDevice(firstDeviceId, 'video', (result, err) => {
          if (result) {
            this.textContent = result.text
            this.tipShow = false
            Bus.$emit('transferScanResult', this.textContent)
            setTimeout(() => {
              this.$router.go(-1)
            }, 1000)
          }
        })
      },
    },
  }

</script>

<style lang="scss" scoped>
  .page {
    .tip {
      color: black;
      font-size: 1em;
    }
  }
</style>