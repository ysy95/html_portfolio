
// 탑버튼 스크립트
let Top = document.getElementById('top_btn');

window.addEventListener('scroll',function(){
  if(this.scrollY > 500){
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
  let mnu = $('#gnb > ul > li');
  let sPos = $(this).scrollTop();
  
  mnu.click(function(){
    let n = $(this).index()+1;
    console.log(n);
    $('html,body').animate({scrollTop:$('main section').eq(n).offset().top-40},500);
    return false;
  });
  
  //화면 스크롤 출력하기
  // $(window).scroll(()=>{
  //   console.log(sPos);
  // });

  //offset 메서드로 각각 해당하는 박스의 위치값에 따른 서식적용하기 
  $('section').each(function(i){//each함수 : 기능을 각각 넣어주겠다
    let top = $(this).offset().top-900;
    if(sPos >= top){//만약에 sPos의 값이 top보다 크면
      $('#nav_list li a').removeClass('mnu_act');//기존 서식을 제거
      // $('#nav_list li').eq().find('a').addClass('mnu_act');//해당메뉴에 서식적용.
    }
  });
});





$(document).ready(function(){
  $(document).snowfall({
    minSize:5,
    maxSize:10,
    round: true
  });
});

/*----- 폭죽기능 스크립트-------*/

// const TWO_PI = Math.PI * 2;
// const HALF_PI = Math.PI * 0.5;

// // canvas settings
// var viewWidth = 512,
//     viewHeight = 350,
//     drawingCanvas = document.getElementById("canvas"),
//     ctx,
//     timeStep = (1/60);

// Point = function(x, y) {
//     this.x = x || 0;
//     this.y = y || 0;
// };

// Particle = function(p0, p1, p2, p3) {
//     this.p0 = p0;
//     this.p1 = p1;
//     this.p2 = p2;
//     this.p3 = p3;

//     this.time = 0;
//     this.duration = 3 + Math.random() * 2;
//     this.color =  '#' + Math.floor((Math.random() * 0xffffff)).toString(15);

//     this.w = 3;
//     this.h = 3;

//     this.complete = false;
// };

// Particle.prototype = {
//     update:function() {
//         this.time = Math.min(this.duration, this.time + timeStep);

//         var f = Ease.outCubic(this.time, 0, 1, this.duration);
//         var p = cubeBezier(this.p0, this.p1, this.p2, this.p3, f);

//         var dx = p.x - this.x;
//         var dy = p.y - this.y;

//         this.r =  Math.atan2(dy, dx) + HALF_PI;
//         this.sy = Math.sin(Math.PI * f * 10);
//         this.x = p.x;
//         this.y = p.y;

//         this.complete = this.time === this.duration;
//     },
//     draw:function() {
//         ctx.save();
//         ctx.translate(this.x, this.y);
//         ctx.rotate(this.r);
//         ctx.scale(1, this.sy);

//         ctx.fillStyle = this.color;
//         ctx.fillRect(-this.w * 0.5, -this.h * 0.5, this.w, this.h);

//         ctx.restore();
//     }
// };

// Loader = function(x, y) {
//     // this.x = x;
//     // this.y = y;

//     this._progress = 0;

//     this.complete = false;
// };

// Loader.prototype = {
//     reset:function() {
//         this._progress = 0;
//         this.complete = false;
//     },
//     set progress(p) {
//         this._progress = p < 0 ? 0 : (p > 1 ? 1 : p);

//         this.complete = this._progress === 1;
//     },
//     get progress() {
//         return this._progress;
//     },
//     draw:function() {
//         // ctx.fillStyle = '#fff';
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.r, -HALF_PI, TWO_PI * this._progress - HALF_PI);
//         ctx.lineTo(this.x, this.y);
//         ctx.closePath();
//         ctx.fill();
//     }
// };

// // pun intended
// Exploader = function(x, y) {
//     this.x = x;
//     this.y = y;

//     this.startRadius = 24;

//     this.time = 0;
//     this.duration = 0.4;
//     this.progress = 0;

//     this.complete = false;
// };

// Exploader.prototype = {
//     reset:function() {
//         this.time = 0;
//         this.progress = 0;
//         this.complete = false;
//     },
//     update:function() {
//         this.time = Math.min(this.duration, this.time + timeStep);
//         this.progress = Ease.inBack(this.time, 0, 1, this.duration);

//         this.complete = this.time === this.duration;
//     },
//     draw:function() {
//         ctx.fillStyle = '#fff';
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.startRadius * (1 - this.progress), 0, TWO_PI);
//         ctx.fill();
//     }
// };

// var particles = [],
//     loader,
//     exploader,
//     phase = 0;

// function initDrawingCanvas() {
//     drawingCanvas.width = viewWidth;
//     drawingCanvas.height = viewHeight;
//     ctx = drawingCanvas.getContext('2d');

//     createLoader();
//     createExploader();
//     createParticles();
// }

// function createLoader() {
//     loader = new Loader(viewWidth * 0.5, viewHeight * 0.5);
// }

// function createExploader() {
//     exploader = new Exploader(viewWidth * 0.5, viewHeight * 0.5);
// }

// function createParticles() {
//     for (var i = 0; i < 128; i++) {
//         var p0 = new Point(viewWidth * 0.5, viewHeight * 0.5);
//         var p1 = new Point(Math.random() * viewWidth, Math.random() * viewHeight);
//         var p2 = new Point(Math.random() * viewWidth, Math.random() * viewHeight);
//         var p3 = new Point(Math.random() * viewWidth, viewHeight + 64);

//         particles.push(new Particle(p0, p1, p2, p3));
//     }
// }

// function update() {

//     switch (phase) {
//         case 0:
//             loader.progress += (1/45);
//             break;
//         case 1:
//             exploader.update();
//             break;
//         case 2:
//             particles.forEach(function(p) {
//                 p.update();
//             });
//             break;
//     }
// }

// function draw() {
//     ctx.clearRect(0, 0, viewWidth, viewHeight);

//     switch (phase) {
//         case 0:
//             loader.draw();
//             break;
//         case 1:
//             exploader.draw();
//             break;
//         case 2:
//             particles.forEach(function(p) {
//                 p.draw();
//             });
//         break;
//     }
// }

// window.onload = function() {
//     initDrawingCanvas();
//     requestAnimationFrame(loop);
// };

// function loop() {
//     update();
//     draw();

//     if (phase === 0 && loader.complete) {
//         phase = 1;
//     }
//     else if (phase === 1 && exploader.complete) {
//         phase = 2;
//     }
//     else if (phase === 2 && checkParticlesComplete()) {
//         // reset
//         phase = 0;
//         loader.reset();
//         exploader.reset();
//         particles.length = 0;
//         createParticles();
//     }

//     requestAnimationFrame(loop);
// }

// function checkParticlesComplete() {
//     for (var i = 0; i < particles.length; i++) {
//         if (particles[i].complete === false) return false;
//     }
//     return true;
// }

// // math and stuff

// /**
//  * easing equations from http://gizma.com/easing/
//  * t = current time
//  * b = start value
//  * c = delta value
//  * d = duration
//  */
// var Ease = {
//     inCubic:function (t, b, c, d) {
//         t /= d;
//         return c*t*t*t + b;
//     },
//     outCubic:function(t, b, c, d) {
//         t /= d;
//         t--;
//         return c*(t*t*t + 1) + b;
//     },
//     inOutCubic:function(t, b, c, d) {
//         t /= d/2;
//         if (t < 1) return c/2*t*t*t + b;
//         t -= 2;
//         return c/2*(t*t*t + 2) + b;
//     },
//     inBack: function (t, b, c, d, s) {
//         s = s || 1.70158;
//         return c*(t/=d)*t*((s+1)*t - s) + b;
//     }
// };

// function cubeBezier(p0, c0, c1, p1, t) {
//     var p = new Point();
//     var nt = (1 - t);

//     p.x = nt * nt * nt * p0.x + 3 * nt * nt * t * c0.x + 3 * nt * t * t * c1.x + t * t * t * p1.x;
//     p.y = nt * nt * nt * p0.y + 3 * nt * nt * t * c0.y + 3 * nt * t * t * c1.y + t * t * t * p1.y;

//     return p;
// }




