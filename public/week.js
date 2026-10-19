'use strict';
(()=>{const key='douaa-aam-2026-10-19';let state={};const status=document.getElementById('week-storage');
try{const parsed=JSON.parse(localStorage.getItem(key)||'{}');if(parsed&&typeof parsed==='object'&&!Array.isArray(parsed))state=parsed;}catch(_){status.textContent='Les coches restent temporaires : le stockage est indisponible.';}
document.querySelectorAll('[data-week-task]').forEach(input=>{input.checked=state[input.dataset.weekTask]===true;input.addEventListener('change',()=>{state[input.dataset.weekTask]=input.checked;try{localStorage.setItem(key,JSON.stringify(state));status.textContent='Tes coches sont enregistrées sur cet appareil.';}catch(_){status.textContent='Les coches restent temporaires : le stockage est indisponible.';}});});
})();
document.querySelectorAll('[data-subject]').forEach(button=>{const count=window.lessons.filter(l=>l.subject===button.dataset.subject).length;button.querySelector('.subject-bottom span').textContent=count+' aventures';});
