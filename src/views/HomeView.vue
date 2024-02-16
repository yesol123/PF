<template>
  <section id="home" className='homedisplay'>

    <p>KIM YE-SOL</p>
    <div className='homedispay_1'>
      <p>Frontend-Developer</p>
      <div className='underline'></div>
    </div>
    <div className='homedisplay_2'>
      <p>안녕하세요! 현재에 머무르지 않고, 언제나 성장하는 <br />
        프론트엔드 개발자 김예솔입니다.</p>
      <button>Contact us</button>
    </div>
    <div class="homedisplay_3">
      <p class="flow-wrap">{{ text }}</p>

    </div>
  </section>
  <AboutView />
  <ProjectView />
  <ContactView />
</template>

<script>
// @ is an alias to /src
import AboutView from '@/components/AboutView.vue'
import ProjectView from '@/components/ProjectView.vue'
import ContactView from '@/components/ContactView.vue';

export default {
  name: 'HomeView',
  components: {
    AboutView,
    ProjectView,
    ContactView,
  },
  data() {
    return {
      text: 'HTML CSS SCSS JAVASCRIPT REACT.JS NEXT.JS VUE.JS NODE.JS'
    }
  },
  };
</script>

<style lang="scss">
.homedisplay {
  height: 100vh;
  padding-top: 50px;
  p {
    font-size: 180px;
  }

  .homedispay_1 {
    display: flex;
    align-items: center;

    p {
      font-size: 42px;
      
    }

    .underline {
      margin-left: 15px;
      margin-top: 5px;
      width: 30%;
      border-bottom: 1px solid #CB2C23;
    }
  }

  .homedisplay_2 {
    p {
      font-size: 24px;
      margin: 0;
    font-family: 'GangwonEduPowerExtraBoldA';
    }

    button {
      color: #CB2C23;
      cursor: pointer;
      font-size: 20px;
      font-weight: 100;
      border: 1px solid #CB2C23;
      border-radius: 50px;
      background-color: transparent;
      padding: 10px 20px;
      margin-top: 20px;
      transition: 1s;
    &:hover{
      background-color: #CB2C23;
      color: #EAE1D2;
    }
    }
  }

  .homedisplay_3 {
    margin-top: 50px;
    border-top: 1px solid #CB2C23;
    border-bottom: 1px solid #CB2C23;
    left: 0;
    position: absolute;
    width: 100%;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    cursor: default;
        p {
          font-size: 100px;
          color: #EAE1D2;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: #CB2C23;
          animation: textLoop 10s linear infinite;
          padding-right: 1.4881vw;
        }


  }

  @keyframes textLoop {
    0% {
      transform: translateX(100%);
    }

    100% {
      transform: translateX(calc(-80% + 20vw));
    }
  }
}

@media (min-width:768px)and (max-width:1200px){
  .homedisplay p {
    font-size: 100px;
.homedispay_1{
  .underline{
    display: none;
  }
}
.homedisplay_2{
  p{
    font-size: 16px;
  }
}
  }

}



@media(max-width:380px){
  .homedisplay p {
    font-size: 55px;
}
.homedisplay .homedispay_1 p {
    font-size: 16px;
}
.homedisplay .homedisplay_2 p {
    font-size: 12px;}
    .homedisplay .homedisplay_2 button {
      font-size: 16px;
    }
    .homedisplay .homedisplay_3 {
    display: none;
}
}
</style>