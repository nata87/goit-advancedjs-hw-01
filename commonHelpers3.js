import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{l as m}from"./assets/vendor-ceec3c52.js";document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".feedback-form"),a=t.querySelector('input[name="email"]'),o=t.querySelector('textarea[name="message"]'),r=m(()=>{const e={email:a.value,message:o.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))},500);t.addEventListener("input",r);const s=localStorage.getItem("feedback-form-state");if(s){const e=JSON.parse(s);a.value=e.email||"",o.value=e.message||""}t.addEventListener("submit",e=>{e.preventDefault(),console.log({email:a.value,message:o.value}),localStorage.removeItem("feedback-form-state"),a.value="",o.value=""})});
//# sourceMappingURL=commonHelpers3.js.map
