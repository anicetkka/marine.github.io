var form = document.getElementById('vp-form_one');
var vpbtn = document.getElementById('vp-btn-send');
var btnContents = document.querySelectorAll('#vp-btn-send span');
var inputs = document.querySelectorAll('input,select')



ClearInput();

form.addEventListener('submit', (e) => {
   vpbtn.disabled = true;
   LoadBtnVP();
   e.preventDefault();
   var dataVp = new FormData(document.getElementById('vp-form_one'));
   var DateVp = new Date(Date.now());
     dataVp.append('data[DATE]', DateVp.toDateString() );
  fetch(form.action,{
      method:"POST",
      body: dataVp
  }).then(resp =>{
      return resp.json();
  }).then( results => {
    NotLoadBtnVp();
    vpbtn.disabled = false;
    window.location = "https://yallahmaana.com/public/merci/thankyou.html"
    ClearInput();
  }).catch( error => {
    NotLoadBtnVp();
    vpbtn.disabled = false;
    ClearInput();
  })
})

function LoadBtnVP(){
    btnContents[0].classList.add('d-none');
    btnContents[1].classList.remove('d-none');
    btnContents[2].classList.remove('d-none');
}


function NotLoadBtnVp(){
    btnContents[0].classList.remove('d-none');
    btnContents[1].classList.add('d-none');
    btnContents[2].classList.add('d-none');
}


function ClearInput(){
  inputs.forEach(input => {
    input.value = '';
  }) 
}