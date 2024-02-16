<template>
  <header>
    <div>
      <div class='underline1' :style="{ width: underlineWidth }"></div>
      <nav>
        <p><span>YE-S</span></p>
        <ul id = "nav_bar">
          <a href="#home"><li :class="{active:activeSection === 'home'}">HOME</li></a>
          <a href="#about"><li :class="{active:activeSection === 'about'}">ABOUT</li></a>
          <a href="#project"><li :class="{active:activeSection === 'project'}">PROJECT</li></a>
          <a href="#contact"><li :class="{active:activeSection === 'contact'}">CONTACT</li></a>
        </ul>
      </nav>
    </div>
  </header>
  <main>
    <router-view />
  </main>
</template>
<script>
export default {
  data() {

   return {
      currentScroll: 0,
      underlineWidth: '50%',
      isMobile: window.innerWidth <= 768,
    currentComponent: 'home' 
  };
  },
  watch: {
    '$route'() {
      this.isMobile = window.innerWidth <= 768;
    },
  },

  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.updateScroll);
  },
  methods: {

    updateUnderlineWidth(width) {
      this.underlineWidth = width;
    },
    updateScroll() {
      this.currentScroll = window.scrollY || document.documentElement.scrollTop;
      const isMobile = window.innerWidth <= 768;

      if (isMobile) {
        if (this.currentScroll >= 2610) {
          this.updateUnderlineWidth('90%');
          this.activeSection = 'contact';
        } else if (this.currentScroll >= 1350) {
          this.updateUnderlineWidth('75%');
          this.activeSection = 'project';
        } else if (this.currentScroll >= 650) {
          this.updateUnderlineWidth('60%');
          this.activeSection = 'about';
        } else {
          this.updateUnderlineWidth('50%');
          this.activeSection = 'home';
        }
      } else {
        if (this.currentScroll >= 2610) {
          this.updateUnderlineWidth('90%');
        } else if (this.currentScroll >= 1450) {
          this.updateUnderlineWidth('75%');
        } else if (this.currentScroll >= 750) {
          this.updateUnderlineWidth('65%');
        } else {
          this.updateUnderlineWidth('50%');
        }
      }
    },
  },
  computed: {
    activeSection() {
      if (this.isMobile) {
        if (this.currentScroll >= 2500) return 'contact';
        else if (this.currentScroll >= 1350) return 'project';
        else if (this.currentScroll >= 650) return 'about';
        else return 'home';
      } else {
        if (this.currentScroll >= 2610) return 'contact';
        else if (this.currentScroll >= 1450) return 'project';
        else if (this.currentScroll >= 750) return 'about';
        else return 'home';
      }
    },
  },
};
</script>

<style lang="scss">
@font-face {
    font-family: 'GangwonEduPowerExtraBoldA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEduPowerExtraBoldA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    unicode-range: U+AC00-D7A3;
}
@font-face{
  font-family: 'NanumSquareRoundR';
  src:url('/NanumSquareRoundOTFEB.otf');
}

@font-face {
  font-family: 'PatuaOne';
  src: url('/PatuaOne-Regular.ttf');
  unicode-range: U+0041-005A,U+0061-007A,U+0030-0039;
}



ul,
li,
a {
  padding: 0;
  text-decoration: none;
  list-style-type: none;
}

*p,
button {
  color: #CB2C23;
  font-family: 'PatuaOne';
  margin: 0;
}

*section {
  margin: 0 auto;
  width: 80%;
}
*h1{
  font-size: 35px;
}

*body {
  position: relative;
  width: 100%;
  margin: 0;
  background-color: #EAE1D2;
  font-family: 'PatuaOne';
}

:root {
  --header-height: 100px;
}

header {
  >div {
    background-color: #EAE1D2;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    height: var(--header-height);

    nav {
      width: 80%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 32px;
      >p{
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #CB2C23;
        background-color: #CB2C23;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        >span{
          display: block;
          font-size: 20px;
          color: #EAE1D2;
        }
      }

      #nav_bar {
        display: flex;
        justify-content: space-between;
        width: 60%;

        li {
          color: white;
          cursor: pointer;
          transition: color 0.3s ease;
          font-size: 16px;
          font-family: 'PatuaOne';
          
        }
        li.active{
          color: #CB2C23;
        }
      }
    }

    .underline1{
      border-bottom: 3px solid #CB2C23;
      width: 50%;
      transition: width 0.2s ease;
    }
  }
}

main{
        padding-top: var(--header-height);
        margin: 0 auto;
    }

    
@media (min-width:768px) and (max-width:1280px){
  *h1{
    font-size: 30px;
  }
  header{
    >div{
      .underline1{display: none;}
      nav{
        p{
          width: 43px;
          height: 43px;
          span{
            display: block;
            font-size: 15px;
            color: #EAE1D2;
          }
        }
        ul{
          display: flex;
          justify-content: space-between;
          width: 80%;
          li{
          }
        }
      }
    }
  } 

}


@media (max-width:380px) {
  header > div nav > p {
    width: 45px;
    height: 45px;
  }
  header > div nav > p > span {
    font-size: 15px;
  }

  header > div nav ul {
    display: flex;
    justify-content: space-between;
    width: 80%;
}
header > div nav ul li {
  font-size: 12px;
}

}
</style>