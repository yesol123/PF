<template lang="">
    <section className='contactdisplay' id="contact">
        <h1>contact</h1>
        <article className='contactdisplay_1'>
            <div className='contactdisplay_div2'>
            <ul>
                <li><a href="https://github.com/yesol123"><img src="/img/github_.png"/>https://github.com/yesol123</a></li>
                <li><a href="https://www.notion.so/front-end-192ab7370fc1800eaf87d668c4ab7cff"><img src="/img/notion.png"/>notion</a></li>
                <li><a href="#"><img src="/img/Globe_.png" />kys4255@naver.com</a></li>
                <li><a><img src="/img/call.png" />010-4341-7321</a></li>
                <li><a><img src="/img/location_.png" />경기도 성남시 중원구</a></li>
            </ul>
            </div>
            
        </article>
        </section>
</template>
<script>
export default {

}
</script>
<style lang="scss">
.contactdisplay {
    padding: 50px 5px;
    width: 80%;
    display: flex;
    justify-content: space-between;

    h1 {
        color: #CB2C23;
        margin-top: 0;
    }

    .contactdisplay_1 {
        display: flex;
        justify-content: flex-end;

        margin: 0;
        width: 90%;
        height: 200px;

        .contactdisplay_div2 {
            width: 30%;

            ul {
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                li {
                    display: flex;
                    align-items: center;
                    margin-bottom: 5px;
                    font-weight: 700;

                    &:nth-child(4) {
                        a {
                            font-family: 'GangwonEduPowerExtraBoldA';
                        }
                    }

                    a {
                        color: #CB2C23;
                        font-size: 20px;

                        img {
                            margin-right: 15px;

                        }
                    }
                }
            }
        }
    }
}

@media (min-width: 768px) and (max-width: 1280px) {
    .contactdisplay {
        flex-direction: column;

        .contactdisplay_1 {
            display: flex;
            justify-content: space-between;
            gap: 0px;
            width: 100%;

            .contactdisplay_div1 {
                width: 40%;
            }

            .contactdisplay_div2 {
                width: 40%;

                ul {
                    li {
                        a {
                            font-size: 16px;

                            img {
                                margin: 0;
                            }
                        }
                    }
                }
            }
        }
    }

}

@media (max-width:380px) {
    h1 {
        font-size: 30px;
    }

    .contactdisplay {
        display: flex;
        justify-content: space-between;

        flex-direction: column;
    }

    .contactdisplay .contactdisplay_1 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        gap: 0;
    }

    .contactdisplay .contactdisplay_1 .contactdisplay_div1 {
        h3 {
            font-size: 12px;
        }

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 35%;
    }

    .contactdisplay .contactdisplay_1 .contactdisplay_div2 {
        width: 60%;
    }

    .contactdisplay .contactdisplay_1 .contactdisplay_div2 ul li a {
        font-size: 12px;
    }

    .contactdisplay .contactdisplay_1 .contactdisplay_div2 ul li a img {
        margin: 0;
    }
}</style>