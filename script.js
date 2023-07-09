const guess=document.getElementById('guess');
const opt=document.getElementById('opt')
const res=document.getElementById('result');
const btn=document.getElementById('btn');
let randomNum=Math.floor((Math.random()*100)+1);
let count=0;
const getNum=()=>{
    if(guess.value=='')
       res.innerHTML='Enter your guess first'
    else{   
    const num=guess.value;
    if(num>randomNum)
    {
        res.innerHTML='OOPS SORRY!! Try a smaller number';
        count++;
    }
    else if(num<randomNum)
    {
        res.innerHTML='OOPS SORRY!! Try a larger number';
        count++;
    }
    else if(num==randomNum)
    {
        res.innerHTML=`Yahhhh!! You won it <br> Your Score is ${100-count}`;
        opt.style.display='block';
        opt.addEventListener('click',playAgain);
    }
}
}
const playAgain=()=>{
    opt.style.display='none';
    guess.value='';
    res.innerHTML='';
    randomNum=Math.floor(Math.random()*100);
    console.log(randomNum)
    count=0;
    btn.addEventListener('click',getNum);
}
btn.addEventListener('click',getNum);
