<template>
  <div class="spinnerContainer" :style="{width:size+'px',height:size+'px',color:color}">
     <svg  :class="{svgPaused:paused,dash:animationType===5}"
       :style="{transform:'rotate('+(animationType===6?'0deg':i*360/svgNumber)+'deg)',animationDuration:interval+'ms'}"
        v-for="i in svgNumber" width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" :key="i">

       <line v-if="animationType===1" class="flash" x1='50%' y1="0" x2='50%' y2='25%' 
          :style="{animationDuration:interval+'ms',animationDelay:interval/svgNumber*i+'ms'}" 
          :stroke="color" stroke-width="2">
       </line>

        <circle v-if="animationType!==1" :cx="animationType===6?100/(svgNumber+1)*i+'%':'50%'" 
          :cy="animationType===5||animationType===6?'50%':'4'"
          :r="animationType===5?size/2-2:'2'" 
          :class="{flash:animationType===2,scale:animationType===3,scaleAndFlash:animationType===4,line:animationType===6}"
          :style="{animationDuration:interval+'ms',animationDelay:interval/svgNumber*i+'ms'}"
          stroke-width="2" :stroke="color" :fill="animationType===5?'transparent':color">
       </circle>  
    </svg> 
  </div>
</template>

<script>
  export default {
    name: 'Spinner',
    data () {
      return {
        paused: false
      }
    },
    props: {
      number: {
        type: Number,
        default: 12
      },
      size: {
        type: Number,
        default: 25
      },
      type: {
        type: String,
        default: 'mum'
      },
      interval: {
        type: Number,
        default: 1000
      },
      color: {
        type: String,
        default: '#000'
      },
      pause: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      animationType () {  // 几种类型
        switch (this.type) {
          case 'mum':
            return 1
          case 'pearl1':
            return 2
          case 'pearl2':
            return 3
          case 'pearl3':
            return 4
          case 'ring':
            return 5
          case 'line':
            return 6
          default:
            return 1
        }
      },
      animationStatus () {
        if (this.pause) {
          return 'paused'
        }
        return 'running'
      },
      svgNumber () {
        if (this.type === 'mum') {
          return 12
        } else if (this.type === 'ring') {
          return 1
        } else if (this.type === 'line') {
          return 3
        } else {
          return 8
        }
      }
    },
    mounted () {
      window.setTimeout(() => {
        this.paused = this.pause
      }, this.interval + 200)
    }
  }
</script>

<style lang="less" scoped>
  .spinnerContainer {
    display: inline-block;
    position: relative;
    &>svg {
      position: absolute;
      top: 0;
      left: 0;
      &>line,
      &>circle {
        animation-timing-function: ease;
        animation-iteration-count: infinite;
        animation-duration: .1s;
        animation-delay: 0s;
        opacity:0;
        &.scale {
          animation-name: scale;
        }
        &.flash{
          animation-name: flash;
        }
        &.scaleAndFlash{
          animation-name: scaleAndFlash;
        }
        &.line{
          animation-name: scaleAndFlash;
        }
      }
      &.dash{
        animation-timing-function: cubic-bezier(0.24, 0.24, 0.54, 0.54);
        animation-iteration-count: infinite;
        animation-name: dash;
        &>circle{
          stroke-dasharray: 25px 1000px;
          opacity:1;
        }
      }
      &.svgPaused{
        animation-play-state: paused;
        &>line,&>circle{
          animation-play-state: paused;
        }
      }
    }
  }


  @keyframes scaleAndFlash{
     0% {
      r: 7%;
      opacity: 0.8;
    }
    100% {
      r: 0%;
      opacity: 0.1;
    }
  }

  @keyframes scaleAndFlash2{
    0% {
      transform: scale(1);
      opacity: 0.8;
    }
    100% {
      transform: scale(0.1);
      opacity: 0.1;
    }
  }

  @keyframes scale {
    0% {
     // r: 7%;
     transform: scale(1);
      opacity: 1;
    }
    100% {
     // r: 0%;
      transform: scale(0.2);
      opacity: 1;
    }
  }

  @keyframes dash{
    0%{
      transform: rotate(0deg)
    }
    100%{
      transform: rotate(360deg)
    }
  }


  @keyframes flash {
    0% {
      opacity: 0.8;
    }
    100% {
      opacity: 0.1;
    }
  }
</style>
