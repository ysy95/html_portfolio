
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