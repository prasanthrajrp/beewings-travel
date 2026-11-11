document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{
 document.querySelectorAll('[data-filter]').forEach(b=>b.classList.remove('active'));btn.classList.add('active');
 const f=btn.dataset.filter;document.querySelectorAll('[data-category]').forEach(card=>card.style.display=(f==='all'||card.dataset.category===f)?'':'none');
}));
const form=document.querySelector('#contact-form');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const name=form.querySelector('[name=name]').value;document.querySelector('#form-message').textContent=`Thank you, ${name}! This is a demo form. Connect an email service before launch.`;form.reset();});}
