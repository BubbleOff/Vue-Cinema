<template>
  <div class="animation-container">
    <div class="animation-layer">
      <div 
        v-for="smoke in smokes" 
        :key="smoke.id"
        class="smoke"
        :style="smoke.style"
      ></div>
    </div>

    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'NorthernLights',
  data() {
    return {
      smokes: [],
      maxSmokes: 25,
      smokeId: 0
    }
  },
  mounted() {
    this.createInitialSmokes();
    this.startMaintenance();
  },
  beforeUnmount() {
    this.clearAllIntervals();
  },
  methods: {
    createInitialSmokes() {
      for (let i = 0; i < 10; i++) {
        setTimeout(() => this.createSmoke(), i * 2000);
      }
    },
    
    createSmoke() {
      if (this.smokes.length >= this.maxSmokes) return;
      
      const smoke = {
        id: this.smokeId++,
        style: this.generateSmokeStyle(),
        phase: 'appearing'
      };
      
      this.smokes.push(smoke);
      this.startSmokeAnimation(smoke);
    },
    
    generateSmokeStyle() {
      const randomLeft = Math.random() * 100;
      const randomTop = Math.random() * 100;
      const width = 150 + Math.random() * 200;
      const height = 250 + Math.random() * 250;
      
      return {
        left: `${randomLeft}%`,
        top: `${randomTop}%`,
        width: `${width}px`,
        height: `${height}px`,
        animation: 'none',
        transition: 'all 12s ease-in-out'
      };
    },
    
    startSmokeAnimation(smoke) {
      const appearDuration = 5 + Math.random() * 3;
      const stayDuration = 12 + Math.random() * 20;
      const disappearDuration = 6 + Math.random() * 4;
      const initialDelay = Math.random() * 3000;
      
      setTimeout(() => {
        this.setAnimation(smoke, 'smoke-appear', appearDuration);
        smoke.phase = 'appearing';
        
        setTimeout(() => {
          this.setAnimation(smoke, 'smoke-disappear', disappearDuration);
          smoke.phase = 'disappearing';
          
          setTimeout(() => {
            this.removeSmoke(smoke.id);
          }, disappearDuration * 1000);
          
        }, appearDuration * 1000 + stayDuration * 1000);
        
      }, initialDelay);
    },
    
    setAnimation(smoke, animationName, duration) {
      const smokeIndex = this.smokes.findIndex(s => s.id === smoke.id);
      if (smokeIndex !== -1) {
        this.smokes[smokeIndex].style.animation = 
          `${animationName} ${duration}s ease-in-out forwards`;
      }
    },
    
    removeSmoke(smokeId) {
      this.smokes = this.smokes.filter(s => s.id !== smokeId);
    },
    
    startMaintenance() {
      this.maintenanceInterval = setInterval(() => {
        const needed = this.maxSmokes - this.smokes.length;
        if (needed > 0) {
          for (let i = 0; i < needed; i++) {
            setTimeout(() => this.createSmoke(), i * 1500 + Math.random() * 2000);
          }
        }
      }, 5000);
      
      this.movementInterval = setInterval(() => {
        this.smokes.forEach(smoke => {
          if (Math.random() > 0.8 && smoke.phase === 'appearing') {
            this.moveSmoke(smoke);
          }
        });
      }, 8000);
    },
    
    moveSmoke(smoke) {
      const smokeIndex = this.smokes.findIndex(s => s.id === smoke.id);
      if (smokeIndex !== -1) {
        this.smokes[smokeIndex].style.transition = 'all 10s ease-in-out';
        this.smokes[smokeIndex].style.left = `${Math.random() * 100}%`;
        this.smokes[smokeIndex].style.top = `${Math.random() * 100}%`;
      }
    },
    
    clearAllIntervals() {
      if (this.maintenanceInterval) clearInterval(this.maintenanceInterval);
      if (this.movementInterval) clearInterval(this.movementInterval);
    }
  }
}
</script>

<style>
.animation-container {
  position: relative;
  width: 100%;
  height: 100vh;
  background: linear-gradient(45deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%);
  overflow: hidden;
}

.animation-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}

.smoke {
  position: absolute;
  background: linear-gradient(to top, 
    transparent 0%,
    #0d47a110 15%,
    #b71c1c25 35%,
    #ffab0015 55%,
    #0d47a110 75%,
    transparent 100%);
  opacity: 0;
  filter: blur(30px);
  border-radius: 80px;
  animation-timing-function: ease-in-out;
  will-change: transform, opacity;
}

@keyframes smoke-appear {
  0% {
    opacity: 0;
    transform: scale(0.2) rotate(0deg);
  }
  20% {
    opacity: 0.2;
    transform: scale(0.6) rotate(1deg);
  }
  40% {
    opacity: 0.5;
    transform: scale(1.0) rotate(-0.5deg);
  }
  60% {
    opacity: 0.7;
    transform: scale(1.3) rotate(1.5deg);
  }
  80% {
    opacity: 0.8;
    transform: scale(1.5) rotate(-1deg);
  }
  100% {
    opacity: 0.9;
    transform: scale(1.6) rotate(2deg);
  }
}

@keyframes smoke-disappear {
  0% {
    opacity: 0.9;
    transform: scale(1.6) rotate(2deg);
  }
  25% {
    opacity: 0.7;
    transform: scale(1.3) rotate(1deg);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.0) rotate(-0.5deg);
  }
  75% {
    opacity: 0.2;
    transform: scale(0.6) rotate(0.5deg);
  }
  100% {
    opacity: 0;
    transform: scale(0.2) rotate(0deg);
  }
}

.content {
  position: relative;
  z-index: 10;
  color: white;
  text-align: center;
  padding-top: 50px;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #ffffff;
  text-shadow: 0 0 30px #ffffff60;
  font-weight: 300;
}
</style>