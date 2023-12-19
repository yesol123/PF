<template lang="">
    <section class='projectdisplay' >
      <div>    
      <h1>Work</h1>
          <article className='projectdisplay_item_flex'>
            <ul  class='work_simple'>
              <li  
              v-for="(project, index) in project" 
              :key="index" 
              :class="{' active': hoveredNum === index }" >
                  <span class='number'>{{ index + 1 }}</span>
                  <span class="title" :class="{ 'active' : hoveredNum === index }">{{ project.title }} </span>
              </li>
            </ul>
            
            <div>
            <div class="item" v-for="(project, index) in project" :key="index"
              @mouseover="handleMouseOver(index)" 
              @mouseout="handleMouseOut"
              :class="{ 'active': hoveredNum === index }">
              <div>
                <img :src="project.image" />
              </div>
                <article>
                    <h3 :style="{ 'font-family': project.Fontfamily }">{{ project.title }}</h3>
                    <p>{{project.description}}</p>
                    <h3>기획의도</h3>
                    <p>{{ project.plan}}</p>
                    <p v-html="project.planContinued"></p>
                    <p v-html="project.mine"></p>
                    <h3>개발환경</h3>
                    <p class ="tools">{{ project.environment }}</p>
                    <a :href="project.view" target="_blank" rel="noopener noreferrer" class="read-more">VIEW</a>
                    <a :href="project.github" target="_blank" rel="noopener noreferrer" class="read-more"> readme</a>
                  </article>
              </div>
            </div>
            </article>
          </div>
      </section>
</template>

<script>

export default {
data() {
return {
project: [
  {
    title: "TODAY EAT",
    Fontfamily: 'PatuaOne',
    Fontfamily2: 'GangwonEduPowerExtraBoldA',
    image: "/img/toeat_main.png",
    description: "오늘 뭐먹지?",
    plan: "서울의 맛을 알고 싶다고?",
    mine: "맛집 후기 공유 페이지 & 후기 검색 기능 작업",
    planContinued: `서울이 익숙하지 않은 사람들도 쉽게 찾는<br/>맛집과 데이트 추천코스!`,
    environment: "Html, Css/Scss, Javascript",
    view: "https://yesol123.github.io/TodayEat/",
    github: 'https://github.com/yesol123/TodayEat'
  },
  {
    title: "오늘의 세종대왕",
    Fontfamily: 'GangwonEduPowerExtraBoldA',
    image: "/img/sejong_main.png",
    description: "단어를 맞춰라!",
    plan: "나는 한국인! 내 어휘력은 어느정도일까?",
    mine: "사전 API를 활용한 단어 퀴즈를 만들었습니다. ", //<br/> API 사용시 검색할 단어가 필수적으로 사용되어 한계 발생
    planContinued: "책을 읽지 않으면 쉽게 맞출 수 없는<br/> 단어들의 향연",
    environment: "Html, Css/Scss, React, Node.js",
    view: "https://yesol123.github.io/pj2",
    github: 'https://github.com/yesol123/pj2'
  },
  {
    title: "별별연인",
    Fontfamily: 'GangwonEduPowerExtraBoldA',
    image: "/img/byeol_main.png",
    description: "사주기반 연인찾기 서비스",
    plan: "나는 사람들의 인연을 맺어주러 온 외계인",
    mine: "공지사항과 자유게시판 작업",
    planContinued: `이성을 만나고 싶은데 기회가 없다면?<br/>년,월,일,시만 있으면 나도 누군가에겐 천생연분`,
    environment: "Html, Css/Scss, Next.js",
    view: "https://byeolbyeolcouple.vercel.app/",
    github: 'https://github.com/yesol123/byeolbyeolcouple'
  },
  {
    title: "포트폴리오",
    Fontfamily: 'GangwonEduPowerExtraBoldA',
    image: "/img/portfolio_main.png",
    description: "",
    plan: "",
    mine: "Vue.js를 이용한 포트폴리오 작업",
    planContinued: `안녕하세요, 김예솔입니다`,
    environment: "Html, Css/Scss, Vue.js",
    view: "beamish-kleicha-f97e7d.netlify.app",
    github: 'https://github.com/yesol123/Portfolio'
  },
  {
          title: "부산광역시",
          Fontfamily: 'GangwonEduPowerExtraBoldA',
          image: "/img/busan_main.png",
          description: "부산광역시 홈페이지 클론코딩",
          plan: "기본적인 HTTML 구조 이해와 CSS 능력 향상",
          mine: "메인페이지,분야별정보,챗봇기능(분야별정보)",
          planContinued: `생애 최초의 코딩작업`,
          environment: "Html, Css, Javascript,Swiper",
          view: "https://yesol123.github.io/CloneCoding/",
          github: 'https://github.com/yesol123/CloneCoding'
        },
],
hoveredNum: ""
}
},
methods: {
handleMouseOver(index) {
this.hoveredNum = index;
},
handleMouseOut() {
this.hoveredNum = null;
},
},
}
</script>


<style lang="scss">
.projectdisplay {
// position: relative;
padding: 50px 5px;
background-color: #E6C2B5;
width: 100%;
div {
width: 80%;
margin: 0 auto;

h1 {
color: #CB2C23;
}

.projectdisplay_item_flex {
display: flex;
justify-content: space-between;

.work_simple {
  display: flex;
  flex-direction: column;
  width: 25%;
  font-family: 'GangwonEduPowerExtraBoldA';

  li {
    color: white;
    margin-bottom: 20px;
    height: 30px;

    &:nth-child(1) {
      font-family: 'PatuaOne';
      font-weight: 700;
    }

    .number {
      border: 1px solid #DED1BB;
      border-radius: 5px;
      background-color: #DED1BB;
      padding: 3px 10px;
      color: white;
      margin-right: 5px;
      font-family: 'PatuaOne';
    }

    .title.active {
      box-shadow: inset 0px -0.5em 0 0 #FAFAD2;
      //box-shadow: 1.그림자위치 2.x거리 3.y거리 4.블러 5.크기 6.색상
      width: fit-content;
      font-size: 20px;
      text-shadow: 1px 1px 2px #000000;
    }
  }
}

div {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;

  .item {
    border: 3px dashed #de746e;
    border-radius: 20px;
    padding: 20px 50px 150px 0;
    position: relative;
    overflow: hidden;
    width: 30%;
    text-align: left;
    font-size: 16px;
    -webkit-perspective: 50em;
    perspective: 50em;
    color: black;



    &::before {
      content: "";
      position: absolute;
      top: 10px;
      left: 10px;
      display: block;
      width: 0%;
      height: 0%;
      background-color: #FAFAD2;
      transition: all linear 0.5s;
      border-radius: 20px;

    }

    &::after {
      content: "";
      position: absolute;
      bottom: 10px;
      right: 10px;
      display: block;
      width: 0%;
      height: 0%;
      background-color: #DED1BB;
      transition: all linear 0.5s;
      border-radius: 20px;

    }

    &:hover {
      border: none;
      img {
        -webkit-transform: rotateX(-90deg);
        transform: rotateX(-90deg);
        opacity: 0;
      }

      &::before {
        width: 100%;
        height: 100%;
      }

      &::after {
        width: 100%;
        height: 100%;
      }
    }

      img {
        opacity: 1;
        width: 100%;
        object-fit: contain;
        margin: 0 auto;
        transform: translate(20px,70px);
        -webkit-transform-origin: 50% 0%;
        -ms-transform-origin: 50% 0%;
        transform-origin: 50% 0%;
      }
  

    >article {
      margin: 15px 0;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      -webkit-transform: rotateX(90deg);
      transform: rotateX(90deg);
      -webkit-transform-origin: 50% 100%;
      -ms-transform-origin: 50% 100%;
      transform-origin: 50% 100%;
      z-index: 1;
      opacity: 0;
      padding: 20px 30px;

      &:hover {
        -webkit-transform: rotateX(0deg);
        transform: rotateX(0deg);
        opacity: 1;
        -webkit-transition-delay: 0.2s;
        transition-delay: 0.2s;
        width: 100%;
      }

      h3 {
        font-family: 'GangwonEduPowerExtraBoldA';
        margin: 0;
        font-weight: 800;
        text-transform: uppercase;
        line-height: 1.5em;
      }

      p {
        font-size: 0.8em;
        font-weight: 500;
        margin: 0 0 15px;
        line-height: 1.5em;
        color: black;
        font-family: 'GangwonEduPowerExtraBoldA';
      }

      .tools {
        font-family: 'PatuaOne';

      }

      >.read-more {
        margin-right: 20px;
        border: 0.5px solid #ffffff;
        padding: 10px 15px;
        font-size: 0.8em;
        text-decoration: none;
        color: black;
        display: inline-block;
        font-family: 'patuaOne';

        &:hover {
          background-color: #ffffff;
          color: #CB2C23;
          border-radius: 20px;
        }

        img {
          width: 10px;
          height: 10px;
        }
      }
    }
  }

  .item * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: all 0.6s ease;
    transition: all 0.6s ease;
  }
}


.item:hover article,
.item.hover article {
  -webkit-transform: rotateX(0deg);
  transform: rotateX(0deg);
  opacity: 1;
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
}
}
}
}

@media (min-width: 768px) and (max-width: 1280px) {
.projectdisplay div .projectdisplay_item_flex .work_simple {
display: flex;
flex-direction: row;
width: 100%;
}


.projectdisplay div .projectdisplay_item_flex {
display: flex;
flex-direction: column;
}

.projectdisplay div .projectdisplay_item_flex .work_simple li .title {
  font-size: 12px;
}
.projectdisplay div .projectdisplay_item_flex .work_simple li .number {
  padding: 3px 5px;
}
.projectdisplay div .projectdisplay_item_flex .work_simple li .title.active {
  font-size: 15px;
}

.projectdisplay div .projectdisplay_item_flex div .item {
padding: 100px 30px;
width: 32%;
font-size: 12px;
}

.projectdisplay div .projectdisplay_item_flex div .item img {
transform: translate(5px, 10px);

}
.projectdisplay div .projectdisplay_item_flex div .item > article {
  padding: 0px 10px;
}


}

@media (max-width:380px) {
    .projectdisplay div h1 {
        font-size: 30px;
    }
    .projectdisplay div .projectdisplay_item_flex {
        display: flex;
    justify-content: space-between;
    flex-direction: column;
    }

    .projectdisplay div .projectdisplay_item_flex .work_simple {
        display: flex;
        flex-wrap: wrap;
        font-weight: 100;
        width: 100%;
        
    li{

        font-size: 10px;
    }
    
    }

    .projectdisplay div .projectdisplay_item_flex div .item img {

    transform: translate(20px, 30px);
}
    
}
</style>