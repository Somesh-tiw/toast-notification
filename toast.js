 let toastbox=document.querySelector('.toastBox')
 let Successmsg='<i class="fa-solid fa-check"></i> Successfully submitted'
 let errormsg='<i class="fa-solid fa-circle-xmark"></i>Please fixed The error'
 let invalidmas='<i class="fa-solid fa-circle-exclamation"></i> Check again its wrong'

 function showToast(msg){
    let toast=document.createElement('div')
    toast.classList.add('toast')
    toast.innerHTML=msg
    toastbox.appendChild(toast)
    if(msg.includes('error')){
        toast.classList.add('error')
    }
    if(msg.includes('wrong')){
        toast.classList.add('wrong')
    }
    setTimeout(()=>{
        toast.remove();
    },6000)
 }