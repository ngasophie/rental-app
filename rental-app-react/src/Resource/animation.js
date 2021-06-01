export default function animation(){
    window.onload = () =>{

        console.log(1)
        let nav = document.querySelector('.nav');
        let toggle = document.querySelector('.nav .toggle-collapse');
        try{
            toggle.onclick = () =>{
                let navCollapse = document.querySelector('.nav.nav-collapse');
                if(navCollapse!= null){
                    nav.classList.remove('nav-collapse')
                }
                else{
                    nav.classList.add('nav-collapse')
                }
            }
            // let scrollTop = document.querySelector('.move-up span');
            // $('.move-up span').click(function(){
            //     $('html, body').animate({scrollTop:0}, 2000);
            // })
            // scrollTop.onclick = function() {
            //    document.documentElement.scrollTop=0;
            // }
        }
        catch(error){}
        let dashBoard = document.querySelector('.dashboard-page');
        console.log(dashBoard)
        let toggleDash = document.querySelector('.dashboard-page .toggle-collapse');
        console.log(toggleDash)
        let close = document.getElementsByClassName('close-nav')[0];
        
        try{
            toggleDash.onclick = () =>{
                console.log(1);
                let collapse = document.querySelector('.dashboard-page .cl');
                if(collapse!= null){
                  dashBoard.classList.remove('cl');
                  document.getElementsByClassName('left-page')[0].style.width='0'
    
                }
                else{
                  dashBoard.classList.add('cl');
                  document.getElementsByClassName('left-page')[0].style.width='50vw'
                } 
        }
        close.onclick = () =>{
            document.getElementsByClassName('left-page')[0].style.width='0';
            dashBoard.classList.remove('cl');
        }
      }
      catch(e){
    }
    }
}