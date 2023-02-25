"use strict";(self.webpackChunkahj_12_1_workers_loading_styling_frontend=self.webpackChunkahj_12_1_workers_loading_styling_frontend||[]).push([[179],{257:()=>{class e{constructor(e){if(!(e instanceof HTMLElement))throw new Error("container is not HTMLElement");this.container=e,this.newsList=null,this.updateBtn=null}init(){this.bindToDOM(),this.createRequest()}bindToDOM(){this.container.innerHTML=e.startMarkUp,this.newsList=this.container.querySelector(".news__list"),this.updateBtn=this.container.querySelector(".header__btn"),this.updateBtn.addEventListener("click",(()=>this.createRequest()))}async createRequest(){this.showAnimation();try{const e=await fetch("https://ahj-workers-loading-styling.herokuapp.com/news"),s=await e.json();this.hideAnimation(),this.showNews(s.data)}catch(e){console.log("Error: ",e),this.showError()}}static get startMarkUp(){return'<div class="container">\n    <header class="header">\n      <h1 class="header__title">Новости мира кино</h1>\n      <button class="header__btn">Обновить</button>\n    </header>\n    <div class="news__list"></div>\n  </div>'}static newsMarkUp(e="",s="",t="",n=""){return`<div class="news" data-id="${n}">\n    <div class="news__date">${e}</div>\n    <div class="news__content">\n      <div class="news__imagebox">\n        <img src="${t}" alt="">\n      </div>\n      <div class="news__text">\n        <div class="mask-text__item">${s}</div>\n      </div>\n    </div>\n  </div>`}showNews(s){s.forEach((s=>{this.newsList.insertAdjacentHTML("beforeend",e.newsMarkUp(s.created,s.title,s.image,s.id))}))}showAnimation(){for(this.newsList.innerHTML="";this.newsList.children.length<3;)this.newsList.insertAdjacentHTML("beforeend",e.newsMarkUp());this.newsList.classList.add("anime")}hideAnimation(){this.newsList.classList.contains("anime")&&(this.newsList.querySelectorAll(".news").forEach((e=>e.remove())),this.newsList.classList.remove("anime"))}showError(){this.newsList.insertAdjacentHTML("beforeend",'<div class="error">\n    <div class="error__mes">\n      Не удалось загрузить данные. Проверьте подключение и обновите страницу.\n    </div>\n  </div>')}hideError(){this.newsList.querySelector(".error")&&this.newsList.querySelector(".error").remove()}}new e(document.getElementById("root")).init(),(async()=>{try{navigator.serviceWorker&&(await navigator.serviceWorker.register("./service-worker.js"),console.log("Service worker register success"))}catch(e){console.log("Error: ",e)}})()}},e=>{e(e.s=257)}]);
