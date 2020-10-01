const targetElements=document.querySelectorAll("*[ss-target]");function sign(t){return t>0?1:t<0?-1:0}function clamp(t,e,s){return t>s?s:t<e?e:t}function isElementInViewport(t,e){const s=t.getBoundingClientRect();if(null==e||null==e)return s.top>=0&&s.bottom<=(window.innerHeight||document.documentElement.clientHeight);{const t=e.getBoundingClientRect();return s.top>=t.top&&s.left>=t.left&&s.bottom<=t.bottom}}function targetIn(t,e,s,n){setTimeout(()=>{t.classList.contains(e)||t.classList.add(e),t.classList.contains(s)&&t.classList.remove(s)},n)}function targetOut(t,e,s,n){setTimeout(()=>{t.classList.contains(s)||t.classList.add(s),t.classList.contains(e)&&t.classList.remove(e)},n)}function lerp(t,e,s){return(1-s)*t+s*e}window.onscroll=t=>{const e=t.path[1].pageYOffset;for(let t=0;t<targetElements.length;t++){const s=targetElements[t],n=s.getAttribute("ss-in")||"ss-fade-in",i=s.getAttribute("ss-out")||"ss-fade-out",l=s.getAttribute("ss-delay")||0,r=document.querySelector(s.getAttribute("ss-object")),o=s.getAttribute("ss-scroll-position"),c=s.getAttribute("ss-scroll-anim");if(null!=c&&null!=c){const t=c.split(","),n=t[0].toString(),i=t[1].trim(),l=parseInt(i.split(" ")[0].trim()),r=parseInt(i.split(" ")[1].trim()),o=t[2].trim(),u=clamp((e+(e-l))/parseInt(o.split(" ")[0].trim()),r,parseInt(o.split(" ")[1].trim())),a=n.includes("$")?(""+n).replaceAll("$",u):`${n}: ${u}`;s.style=a}else if(null==o||null==o)isElementInViewport(s,r)?targetIn(s,n,i,l):targetOut(s,n,i,l);else{parseInt(o)<=e?targetIn(s,n,i,l):targetOut(s,n,i,l)}}};