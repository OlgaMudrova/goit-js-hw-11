import{S as p,i as d}from"./assets/vendor-7659544d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const l=document.querySelector(".loader");let f=new p(".gallery-item a",{captionDelay:250,captionsData:"alt"});const i=document.querySelector(".gallery"),m=document.querySelector(".search-form"),y="https://pixabay.com/api/",h="42139525-c14302dd397ed074e72a8f596";m.addEventListener("submit",o=>{o.preventDefault(),i.innerHTML="";const r=o.currentTarget.elements.query.value.trim();if(!r){c();return}l.style.display="block";const a=`${y}?key=${h}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`;g(a).then(s=>{l.style.display="none",s.hits.length===0?c():(i.innerHTML=x(s.hits),f.refresh())}).catch(s=>console.error(s))});function g(o){return fetch(o).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})}function x(o){return o.map(({webformatURL:r,largeImageURL:a,tags:s,likes:e,views:t,comments:n,downloads:u})=>`<li class="gallery-item">
            <a href=${a}> 
                <img class="gallery-image" src=${r} alt=${s} />
            </a>
            <div class="gallery-text">
                <p class="text-block">Likes: <span class="text-value">${e}</span></p>
                <p class="text-block">Views: <span class="text-value">${t}</span></p>
                <p class="text-block">Comments: <span class="text-value">${n}</span></p>
                <p class="text-block">Downloads: <span class="text-value">${u}</span></p>
            </div>
      </li>`).join("")}function c(){d.error({maxWidth:432,position:"topRight",color:"red",message:"Sorry, there are no images matching your search query. Please try again!"})}
//# sourceMappingURL=commonHelpers.js.map
