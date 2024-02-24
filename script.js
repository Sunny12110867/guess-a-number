    const text = document.querySelector('#guessField');
    const submit = document.querySelector('#subt');
    const guesses = document.querySelector('.guesses');
    const lastResult = document.querySelector('.lastResult');
    const lowOrHi = document.querySelector('.lowOrHi');

    let game = true;
    var target = Math.round(Math.random() * 100 + 1);
    console.log(target);
    var chance=1;

    if(game){
        submit.addEventListener('click',(e)=>{
            e.preventDefault();
            const value=parseInt(text.value);
            lastResult.innerHTML=Math.abs(10-chance);
            if(chance<11)
            validCheck(value);
            else
            end();
        })
    }

    function validCheck(data){
        if(data===''){
            lowOrHi.innerHTML="enter a value please";
        }
        else if(data>100){
            lowOrHi.innerHTML="enter a value less than 100";
        }
        else if(data<1){
            lowOrHi.innerHTML="enter a value greater than 1";
        }
        else{
            guesses.innerHTML=guesses.innerHTML+data+ " ";
            diaplay(data);
        }
        text.value="";
    }

    function diaplay(data){
        if(data===target){
            win();
        }
        else if(data>target){
            lowOrHi.innerHTML="enter a less value";
            chance=chance+1;
        }
        else{
            lowOrHi.innerHTML="enter a greater value";
            chance=chance+1;
        }
    }

    function win(){
        lowOrHi.innerHTML=`<h2>you won the match </h2>`;
        text.value="";
        chance=0;
        guesses.innerHTML="";
        target=Math.round(Math.random() * 100 + 1);
    }

    function end(){
        
        lowOrHi.innerHTML=`<h2> you loss the random number is ${target}</h2>`;
        text.value="";
        guesses.innerHTML="";
        chance=1;
        target=Math.round(Math.random() * 100 + 1);
    }