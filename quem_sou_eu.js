function dark_mode(){
 let background=document.querySelector('body');
  background.classList.toggle('dm_background');
 let headers=document.querySelectorAll('.headers_1_2');
  headers[0].classList.toggle('dm_headers_1_2');
  headers[1].classList.toggle('dm_headers_1_2');
  headers[2].classList.toggle('dm_headers_1_2');
 let h4=document.querySelectorAll('h4');
  for(let i=0;i<=5;i++){
    h4[i].classList.toggle('dm_h4');
  }
 let atalhos=document.querySelectorAll('.atalhos');
  for(let j=0;j<=5;j++){
    atalhos[j].classList.toggle('dm_atalhos');
  }
 let mim=document.querySelector('.mim');
  mim.classList.toggle('dm_mim_web');
 let web=document.querySelector('.web');
  web.classList.toggle('dm_mim_web');
 let link=document.querySelectorAll('.link');
  link[0].classList.toggle('dm_link');
  link[1].classList.toggle('dm_link');
  link[2].classList.toggle('dm_link');
 let button=document.querySelector('button')
  if (button.innerText=='Dark Mode'){
    button.innerText='Light Mode';
    button.classList.add('lm_button');
  }
  else{
    button.innerText='Dark Mode';
    button.classList.remove('lm_button');
  }
 return
}
