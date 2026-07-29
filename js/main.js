/*
=====================================
 Wedding Invitation V1
 MINCHEOL ♥ YESEUL
 main.js
=====================================
*/


// ===================================
// 1. D-Day 계산
// ===================================

const weddingDate = new Date(
    "2026-10-03T12:20:00"
);


function updateDDay(){

    const today = new Date();

    const diff =
        weddingDate - today;


    const days =
        Math.ceil(
            diff /
            (1000 * 60 * 60 * 24)
        );


    const dday =
        document.getElementById("dday");


    if(dday){

        if(days > 0){

            dday.innerHTML =
            "D-" + days;

        }

        else if(days === 0){

            dday.innerHTML =
            "오늘은 결혼식 날입니다 💍";

        }

        else{

            dday.innerHTML =
            "행복한 날을 함께했습니다 🕊️";

        }

    }

}


updateDDay();



// ===================================
// 2. Scroll Fade Animation
// ===================================


const fadeElements =
document.querySelectorAll(".fade");


const observer =
new IntersectionObserver(
(entries)=>{

    entries.forEach(
        entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add(
                    "show"
                );

            }

        }
    );

},
{
    threshold:0.15
}
);



fadeElements.forEach(
    element=>{

        observer.observe(element);

    }
);



// ===================================
// 3. Gallery Lightbox
// ===================================


const galleryImages =
document.querySelectorAll(
    ".gallery img"
);


const lightbox =
document.getElementById(
    "lightbox"
);


const lightboxImage =
document.getElementById(
    "lightboxImage"
);



galleryImages.forEach(
    image=>{


        image.addEventListener(
            "click",
            ()=>{


                if(lightbox){

                    lightboxImage.src =
                    image.src;


                    lightbox.classList.add(
                        "active"
                    );

                }

            }
        );


    }
);



if(lightbox){


    lightbox.addEventListener(
        "click",
        ()=>{

            lightbox.classList.remove(
                "active"
            );

        }
    );


}




// ===================================
// 4. 계좌번호 복사
// ===================================


const accountButtons =
document.querySelectorAll(
    ".account-btn"
);



accountButtons.forEach(
    button=>{


        button.addEventListener(
            "click",
            ()=>{


                const account =
                button.dataset.account;


                if(account){


                    navigator.clipboard
                    .writeText(account)
                    .then(()=>{


                        alert(
                        "계좌번호가 복사되었습니다."
                        );


                    });


                }

                else{


                    alert(
                    "계좌번호를 연결해주세요."
                    );


                }


            }
        );


    }
);



// ===================================
// 5. RSVP 기본 처리
// ===================================


const rsvpForm =
document.getElementById(
    "rsvpForm"
);



if(rsvpForm){


    rsvpForm.addEventListener(
        "submit",
        function(e){


            e.preventDefault();


            alert(
            "참석 여부가 전달되었습니다.\n감사합니다 💛"
            );


            rsvpForm.reset();


        }
    );


}




// ===================================
// 6. 카카오톡 공유 준비
// ===================================


const shareButton =
document.getElementById(
    "shareBtn"
);



if(shareButton){


    shareButton.addEventListener(
        "click",
        ()=>{


            const shareData = {

                title:
                "신민철 ♥ 정예슬 결혼합니다",

                text:
                "2026년 10월 3일\n우리의 첫 페이지에 초대합니다 💍",

                url:
                window.location.href

            };



            if(
                navigator.share
            ){


                navigator.share(
                    shareData
                );


            }

            else{


                navigator.clipboard
                .writeText(
                    window.location.href
                );


                alert(
                "청첩장 주소가 복사되었습니다."
                );


            }


        }
    );


}



// ===================================
// 7. 페이지 로딩 효과
// ===================================


window.addEventListener(
    "load",
    ()=>{


        document.body.classList.add(
            "loaded"
        );




// ===================================
// 8. Contact Modal
// ===================================


window.openContact = openContact;
window.closeContact = closeContact;

     
const contactModal =
document.getElementById(
"contactModal"
);



const contactContent =
document.getElementById(
"contactContent"
);



function openContact(type){


    contactModal.classList.add(
        "active"
    );



    if(type==="couple"){


        contactContent.innerHTML = `


        <h2>신랑 · 신부에게 연락하기</h2>


        <div class="contact-card">


            <div class="contact-row">

                <span class="contact-name">
                신랑 신민철
                </span>


                <div class="contact-buttons">

                <a href="tel:01000000000">
                ☎
                </a>


                <a href="sms:01000000000">
                ✉
                </a>


                </div>


            </div>



            <div class="contact-row">

                <span class="contact-name">
                신부 정예슬
                </span>


                <div class="contact-buttons">

                <a href="tel:01000000000">
                ☎
                </a>


                <a href="sms:01000000000">
                ✉
                </a>


                </div>


            </div>


        </div>


        `;


    }



    else{


        contactContent.innerHTML = `


        <h2>혼주에게 연락하기</h2>


        <h3>
        신랑측
        </h3>


        <div class="parent-grid">


        <div class="parent-box">

        <h4>
        아버지<br>
        신랑부
        </h4>

        <div class="parent-buttons">

        <a href="tel:01000000000">☎</a>

        <a href="sms:01000000000">✉</a>

        </div>

        </div>



        <div class="parent-box">

        <h4>
        어머니<br>
        신랑모
        </h4>


        <div class="parent-buttons">

        <a href="tel:01000000000">☎</a>

        <a href="sms:01000000000">✉</a>

        </div>

        </div>



        </div>



        <br>



        <h3>
        신부측
        </h3>


        <div class="parent-grid">


        <div class="parent-box">

        <h4>
        아버지<br>
        신부부
        </h4>


        <div class="parent-buttons">

        <a href="tel:01000000000">☎</a>

        <a href="sms:01000000000">✉</a>

        </div>


        </div>



        <div class="parent-box">


        <h4>
        어머니<br>
        신부모
        </h4>


        <div class="parent-buttons">

        <a href="tel:01000000000">☎</a>

        <a href="sms:01000000000">✉</a>

        </div>


        </div>



        </div>



        `;


    }


}




function closeContact(){


    contactModal.classList.remove(
        "active"
    );


}

     /* 추가 */
window.openContact = openContact;
window.closeContact = closeContact;



// ===================================
// 9. POPUP TEST
// ===================================
     
const modal = document.querySelector('.modal');
const modalOpen = document.querySelector('.modal_btn');
const modalClose = document.querySelector('.close_btn');

// //열기 버튼을 눌렀을 때 모달팝업이 열림
// modalOpen.addEventListener('click',function(){
//     modal.classList.add('on');
// });
// //닫기 버튼을 눌렀을 때 모달팝업이 닫힘
// modalClose.addEventListener('click',function(){
//     modal.classList.remove('on');
// });

// 2. 스타일 직접 변경
//열기 버튼을 눌렀을 때 모달팝업이 열림
modalOpen.addEventListener('click',function(){
    modal.style.display = 'block';
});
//닫기 버튼을 눌렀을 때 모달팝업이 닫힘
modalClose.addEventListener('click',function(){
    modal.style.display = 'none';
});

     
    }
);
