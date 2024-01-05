
let btn = document.querySelector('#start');
let ipt = document.querySelector('input');
let sub = document.querySelector('#play');
let p = document.querySelector('p');
let genrate = () => {
    let num =  Math.floor(Math.random()*3);
    return num;
}
let h = document.querySelector('h3');
let ul = document.querySelector('ul');
let arr = ['rock','paper','scissors']
function gameplay(computer,user){
    if(Math.abs(computer-user)==1){
        return computer > user ?"computer":"user";
    }
    return computer < user ?"computer":"user";
}

btn.addEventListener('click',()=>{
    btn.style.display = 'none';
    ipt.style.display = '';
    sub.style.display = '';
    let i=0;
    let userScore=0,compScore=0;
    let userChoice ;
    
        console.log("game started");
        
         sub.addEventListener('click',()=>{
            let computerChoice = genrate();
            userChoice = parseInt(ipt.value);
            console.log(computerChoice,userChoice);
            let lidata = `computer:${arr[computerChoice]} , user:${arr[userChoice]}`;
            let result = startgame(computerChoice,userChoice);
            let li = document.createElement('li');
            if(result==1){
                compScore++;
                lidata += "  !computer wins "
                console.log("computer wins the game");
            }else if(result==0){
                userScore++;
                lidata += "  !user wins"
                console.log("user wins");
            }else{
                lidata += "  !it's a draw"
                console.log("it's a draw")
            }
            li.innerText = lidata;
            ul.appendChild(li);
            
            display(i,userScore,compScore);
            i++;
        });
        
    
    btn.style.display = '';

});
function display(i,userScore,compScore){
    if(i<5){
        return;
    }
    ul.innerText = '';
    if(userScore>compScore){ 
    h.innerText = `User Wins! user:${userScore}, computer:${compScore}`;
    }else if(userScore<compScore){
    h.innerText = `Computer Wins! user:${userScore}, computer:${compScore}`;
    }else{
    h.innerText = `It's a Draw! user:${userScore}, computer:${compScore}`;
    }
}
function startgame(comp,user){
    if(comp==user){
        return -1;
    }
    let res =  gameplay(comp,user);
    return res == 'computer'?1:0;
}

