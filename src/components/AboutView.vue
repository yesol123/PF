<template>
  <section id="about">

    
    <article class="about-display">
      <h1>About</h1>
      <p class="produce">웹의 미래를 만들어가는 여정 중 🚀🌐</p>
      <p class="produce">안녕하세요, 신입 웹 개발자 김예솔입니다!</p>
      <p  class="produce">
        편의성과 최신 기술을 결합하여 누구에게나 친숙하고 쉬운 웹 인터페이스를 제작하는 것을 목표로 삼고 있습니다.<br />
        새로운 아이디어와 기술을 탐구하며, 독특한 해결책을 창조하고자 끊임없이 노력합니다.<br />
        긍정적인 협업과 열린 마음으로 동료들과 함께 일하며, 지속적인 혁신을 통해 미래를 대비하는 프론트엔드 그것이 제 목표입니다.
      </p>
    </article>

    <article class="about-display">
      <h1>Skills</h1>
      <ul class="skills-list">
        <li v-for="(skill, index) in skills" :key="index">
          <div class="skill-item">
            <span class="name">{{ skill.name }}</span>
            <ul class="skill-details">
            <li class="detail" v-for="(detail, dIndex) in skill.details" :key="dIndex">{{ detail }}</li>
          </ul>
          </div>
         
        </li>
      </ul>
      
      <div>
        <p>etc...</p>
        <ul class="etc">
          <li v-for="(etc,index) in etc " :key="index">{{ etc }}</li>
        </ul>
      </div>
    </article>

  </section>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          name: "HTML/CSS",
          details: [
            "시멘틱 태그와 CSS3를 활용하여 표준 웹 디자인 제작 가능",
            "Flexbox를 사용한 반응형 웹 디자인 경험 보유",
            "HTML5 시멘틱 요소를 활용하여 접근성과 유지보수성을 개선"
          ]
        },
        {
          name: "JavaScript",
          details: [
            "비동기 프로그래밍을 통한 데이터 처리 및 DOM 조작 가능",
            "이벤트 처리와 효율적인 DOM 조작 경험"
          ]
        },
        { name: "jQuery", details: ["DOM 조작 및 애니메이션 처리 가능"] },
        { name: "GitHub", details: ["소스 코드 버전 관리 및 협업 가능"] },
        { name: "Vue.js", details: ["컴포넌트 기반 웹 애플리케이션 개발 경험"] },
        {
          name: "React.js", 
          details: ["React Router를 이용한 클라이언트 사이드 라우팅", 
          "컴포넌트 기반 아키텍처 설계로 재사용성과 유지보수성이 높은 UI 구현", 
          "React Hooks를 사용한 로컬 상태 관리 및 이벤트 처리"
          ]
        },
        { name: "Next.js", 
        details: ["서버 사이드 렌더링 및 SEO 최적화 가능","Styled-components와 Tailwind CSS를 활용한 효율적인 스타일링"] },
      ],
      etc:["MongoDB","MariaDB","MySQL","HediSQL","Linux"
    
      ]
    };
  },
};
</script>


<style lang="scss" scoped>

#about {
  gap: 30px;
  padding: 60px 15px;
  justify-content: space-between;
}

.about-display {
  flex: 1;
}
.name{
  font-size: 24px;
  font-weight: 900;
  color: #cb2c23;
}
.etc{
  display: flex; 
  gap: 20px;
  font-size: 12px;
}
h1 {
  color: #cb2c23;
  font-size: 22px;
  margin-bottom: 8px;
}

.subtitle {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
  padding: 0;
  margin-top: 15px;
}

.skills-list li {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-radius: 6px;
  text-align: center;
  font-size: 12px;
}
.detail{
  font-family: 'GangwonEduPowerExtraBoldA';
}
.produce{
  font-family: 'GangwonEduPowerExtraBoldA';
}

.skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 2px;
}

.skill-details {
  margin-top: 6px;
  font-size: 11px;
  text-align: left;
}

@media (max-width: 768px) {
  #about {
    flex-direction: column;
    align-items: center;
  }
  
  .skills-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
