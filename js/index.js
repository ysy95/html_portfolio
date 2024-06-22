
// 탑버튼 스크립트
let Top = document.getElementById('top_btn');

window.addEventListener('scroll',function(){
  if(this.scrollY >300){
    Top.classList.add('on');
  }else{
    Top.classList.remove('on');
  }
});

// 부드럽게 맨위로 올라가기
Top.addEventListener('click',function(e){
  e.preventDefault();
  window.scrollTo({top:0, behavior:'smooth'});
});


// 스크롤 이벤트 (제이쿼리)
$(()=>{
  // 1.내비게이션 메뉴 클릭시 해당하는 인덱스 값 구하기
  let mnu = $('#nav_list > li');
  let Pos = $(this).scrollTop();
  
  mnu.click(function(){
    let n = $(this).index()+1;
    console.log(n);
    $('html,body').animate({scrollTop:$('section').eq(n).offset().top-40},500);
  });
  
  //화면 스크롤 출력하기
  // $(window).scroll(()=>{
  //   console.log(Pos);
  // });

  //offset 메서드로 각각 해당하는 박스의 위치값에 따른 서식적용하기 
  $('section').each(function(i){//each함수 : 기능을 각각 넣어주겠다
    let top = $(this).offset().top-1600;
    if(Pos >= top){//만약에 Pos의 값이 top보다 크면
      $('#nav_list li a').removeClass('mnu_act');//기존 서식을 제거
      $('#nav_list li').eq().find('a').addClass('mnu_act');//해당메뉴에 서식적용.
    }
  });
});






