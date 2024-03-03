let reset=document.querySelector(".reset-btn");
let box=document.querySelectorAll(".box");
let newBtn=document.querySelector(".new-btn");
let show=document.querySelector(".showMsg");
let winner=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let flag=true;



newBtn.addEventListener("click",()=>{
    box.forEach((e)=>{
        e.innerText="";
        flag=true;
        show.classList.add("hide");
        newBtn.classList.add("hide");
        e.disabled=false;
        reset.classList.remove("hide")
    })
})

let showMsg=()=>{
    show.classList.remove("hide")
    box.forEach((e)=>{
        e.disabled=true;
    })
    newBtn.classList.remove("hide");
    reset.classList.add("hide")
}

let checkWin=()=>{
    for(let win of winner){
        let pos1=box[win[0]].innerText;
        let pos2=box[win[1]].innerText;
        let pos3=box[win[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                console.log(`Winner ${pos1}`);
                showMsg();
            }
        }
    }
}



box.forEach((e)=>{
    e.addEventListener("click",()=>{
        if(flag==true){
            e.innerText="X";
            flag=false;
        }
        else{
            e.innerText="O";
            flag=true;
        }
        e.disabled=true;
        checkWin();
    })
})


reset.addEventListener("click",()=>{
    box.forEach((e)=>{
        e.innerText="";
        e.disabled=false;
        flag=true;
    })
})