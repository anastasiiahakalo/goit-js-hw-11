import{a as m,S as d,i as a}from"./assets/vendor-DQvd0HNi.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const g="https://pixabay.com/api/",y="55189993-ff866a9899946a4c222a471fa";async function h(o){return(await m.get(g,{params:{key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),L=new d(".gallery a",{captionsData:"alt",captionDelay:250});function b(o){const r=o.map(({webformatURL:s,largeImageURL:n,tags:e,likes:t,views:i,comments:f,downloads:p})=>`
      <li class="gallery-item">
        <a href="${n}">
          <img src="${s}" alt="${e}" />
        </a>
        <div class="info">
          <p>Likes: ${t}</p>
          <p>Views: ${i}</p>
          <p>Comments: ${f}</p>
          <p>Downloads: ${p}</p>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",r),L.refresh()}function S(){c.innerHTML=""}function v(){l.classList.add("is-visible")}function w(){l.classList.remove("is-visible")}const u=document.querySelector(".form");u.addEventListener("submit",q);function q(o){o.preventDefault();const r=o.target.elements["search-text"].value.trim();if(!r){a.error({message:"Please enter a search query!",position:"topRight"});return}S(),v(),h(r).then(s=>{if(s.hits.length===0){a.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(s.hits)}).catch(()=>{a.error({message:"Something went wrong. Please try again!",position:"topRight"})}).finally(()=>{w(),u.reset()})}
//# sourceMappingURL=index.js.map
