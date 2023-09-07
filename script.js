// let istatus = document.querySelector('h5');

// let addFriend = document.querySelector('#add');
// let removeFriend = document.querySelector('#remove');

// addFriend.addEventListener("click",function(){
//     istatus.innerHTML="Friends"
//     istatus.style.color='green'
// });

// removeFriend.addEventListener("click",function(){
//     istatus.innerHTML="Stranger"
//     istatus.style.color='red'
// });


// <<<===========================================>>>

let istatus = document.querySelector("h5");
let btn = document.querySelector('#add');

let flag = 0;

btn.addEventListener("click",function(){
    if(flag == 0){
        istatus.innerHTML="Friends"
        istatus.style.color='green'
        btn.innerHTML="Remove Friend"
        btn.style.backgroundColor="rgba(128, 140, 140, 0.543)"
        btn.style.color="black"
        flag = 1
    }
    else{
        istatus.innerHTML="Stranger"
        istatus.style.color='red'
        btn.innerHTML="Add Friend"
        btn.style.backgroundColor="cadetblue"
        
        btn.style.color="white"
        flag = 0
    }
});

