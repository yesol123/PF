<template lang="">
  <section id="about">
        <article class='aboutdisplay_1' >
          <h1>Skills</h1>
        <div class="flex">
          <div> 
            <p>현재 사용하고 있고, <br/> 계속해서 기술향상을 하고 있는 기술들 입니다!</p>
          </div>
          <ul>
            <li>
              <p>
                <span>
                  html
                </span> 
                <span>
                <img src='/img/html.png' />
              </span>
              </p>
            </li>
            <li>
              <p>
                <span>
                  css
                </span>
                <span>
                  <img src='/img/css.png' />
                </span>
                 
              </p>
            </li>
            <li>
              <p>
                <span>
                  scss
                </span>
                <span>
                  <img src='/img/scss.png' />
                </span>
              </p>
            </li>
            <li>
              <p>
                <span>
                javascript
                </span>
                <span>
                  <img src='/img/javascript.png' />
                </span>
              </p>
            </li>
            <li>
              <p>
                <span>
                  jquery
                </span>
                <span>
                  <img src='/img/jquery.png' />
                </span>
              </p>
            </li>
            <li>
              <p>
                <span>
                github
                </span>
                <span>
                  <img src='/img/github.png' />
                </span>
              </p>
            </li>
            <li>
              <p>
                <span>
                vue.js
                </span>
                <span>
                  <img src='/img/vue.png' />
                </span>
              </p>
            </li>
            <li>
              <p>
                <span>
                  react.js
                </span>
                <span>
                  <img src='/img/react.png' />
                </span>
              </p>
            </li>
            <li>
              <p>
                <span>
                  next.js
                </span>
                <span>
                  <img src='/img/next.png' />
                </span>
              </p>
            </li>
            <li>
              <p>
                <span>
                  MySQL
                </span>
                <span>
                  <img src='/img/mysql.png' />
                </span>
              </p>
            </li>
            <li>
              <p>
                <span>
                  MariaDB
                </span>
                <span>
                  <img src='/img/mariadb.png' />
                </span>
              </p>
            </li>
            <li>
              <p>
                <span>
                  MongoDB
                </span>
                <span>
                  <img src='/img/mongodb.png' />
                </span>
              </p>
            </li>
          </ul>
        </div>
        </article>
        <article class='aboutdisplay_2'>
          <h1>about</h1>
          <div class="flex2">
          <div class="title">
          <p>웹의 미래를 만들어가는 여정 중 🚀🌐</p>
          </div>
          <br/>
          <div>
            <p>안녕하세요, 신입 웹 개발자 김예솔입니다!</p>
            <br/>
            <p>
              편의성과 최신 기술을 결합하여 누구에게나 친숙하고 쉬운 웹 인터페이스를 제작하는 것을 목표로 삼고 있습니다.<br/>
              <br/>
              새로운 아이디어와 기술을 탐구하며, 독특한 해결책을 창조하고자 끊임없이 노력합니다. <br/>
              <br/>
              긍정적인 협업과 열린 마음으로 동료들과 함께 일하며, 지속적인 혁신을 통해 미래를 대비하는 프론트엔드 그것이 제 목표입니다.
            </p>
          </div>
          </div>
        </article>
      </section>
</template>
<script>
export default {
}
</script>
<style lang="scss">
article {
  margin: 20px;
}

#about {
  display: flex;
  padding: 80px 5px 20px 5px;
  justify-content: space-between;

  .aboutdisplay_1 {
    display: flex;
    gap: 20px;
    width: 45%;

    h1 {
      margin: 0;
      color: #CB2C23;
      width: 50%;
    }

    .flex {
      display: flex;
      flex-direction: column;

      >div {
        p {
          font-family: 'GangwonEduPowerExtraBoldA';
        }
      }

      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        li {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 35%;
          margin: 5px 2px;
          border: 1px solid #CB2C23;
          padding: 20px;

          >p {
            display: flex;
            font-size: 20px;

            span {
              margin-left: 4px;
              font-weight: 200;

              &:nth-child(2) {
                display: flex;
                justify-content: center;
                align-items: center;
              }
            }

          }
        }
      }
    }
  }

  .aboutdisplay_2 {
    display: flex;
    gap: 20px;
    width: 50%;

    h1 {
      color: #CB2C23;
      margin: 0;
    }

    .flex2 {
      display: flex;
      flex-direction: column;

      .title {
        p {
          font-family: 'GangwonEduPowerExtraBoldA';
        }
      }

      div {
        p {
          font-family: 'GangwonEduPowerExtraBoldA';

        }
      }
    }


  }
}

@media (min-width: 768px) and (max-width: 1280px) {

  *p {
    font-size: 12px;
  }

  .aboutdisplay {
    .aboutdisplay_1 {
      display: flex;
      flex-direction: column;

      .flex {
        ul {
          li {
            width: 30%;

            p {
              font-size: 12px;
            }
          }
        }
      }
    }

    .aboutdisplay_2 {
      display: flex;

      flex-direction: column;

      h1 {
        width: 70%;
      }
    }
  }
}

@media (max-width:380px) {
  .aboutdisplay {
    *h1 {
      font-size: 30px;
    }

    flex-direction: column;

    .aboutdisplay_1 {
      flex-direction: column;

      .flex {
        div {
          p {
            font-size: 12px;
          }
        }

        ul {
          li {
            width: 30%;

            p {
              font-size: 10px;
            }
          }
        }
      }
    }

    .aboutdisplay_2 {
      flex-direction: column;

      .flex2 {
        .title {
          p {
            font-size: 12px;
          }
        }

        div {
          p {
            font-size: 12px;
          }
        }

      }

    }
  }
}
</style>