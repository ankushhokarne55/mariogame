score = 0;
cross = true;
document.onkeydown = function(e){
    console.log("key code is: ", e.keyCode)
    if(e.keyCode==38){
        mario = document.querySelector('.mario');
        mario.classList.add('animatemario');
        setTimeout(() => {
            mario.classList.remove('animatemario')
        },700);
    }
    if(e.keyCode==39){
        mario = document.querySelector('.mario');
        mariox = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
        mario.style.left = mariox + 112 + "px";
    }
    if(e.keyCode==37){
        mario = document.querySelector('.mario');
        mariox = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
        mario.style.left = (mariox - 112) + "px";
    }
}
setInterval(() => {
    mario = document.querySelector('.mario');
    gameover = document.querySelector('.gameover');
    villan = document.querySelector('.villan');


    dx = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(mario, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(villan, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(villan, null).getPropertyValue('top'));

    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);
    if(offsetX< 93 && offsetY<52){
        gameover.style.visibility = 'visible';
        villan.classList.remove('villanani');
    }
    else if(offsetX< 145 && cross){
        score+=1;
        updatescore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        },1000);
        setTimeout(() => {
        anidur =  parseFloat(window.getComputedStyle(villan, null).getPropertyValue('animation-duration'));
        newdur = anidur - 0.1;
        villan.style.animationduration = newdur + 's';
        console.log('new animation duration:',newdur)
        },500);
    }
},10);

function updatescore(score){
    scorecontain.innerHTML = "your score:" + score;
}