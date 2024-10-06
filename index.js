
function showSidebar(){
    const sidebar  = document.querySelector('.sidebar')
    sidebar.style.display ='flex';
     const menuBttnHide =document.getElementById('menuButton');
     menuBttnHide.style.display ='none'
     const reqInviteMoveOut =document.getElementById('btn3')
     reqInviteMoveOut.style.marginLeft ='25rem';
}

function closeSidebar(){
const sidebar = document.querySelector('.sidebar')
sidebar.style.display ='none';
const menuBttnHide =document.getElementById('menuButton');
 menuBttnHide.style.display ='flex'
 const reqInviteMoveOut =document.getElementById('btn3')
 reqInviteMoveOut.style.marginLeft ='-0rem';



}