import{u as m,g as b,a as u,b as f}from"./store-b631c798.js";import{_ as g,o as r,c as l,a as o,w as c,v as p,b as h,n as _,d as k,p as y,e as v}from"./index-fc0cf00f.js";import{_ as x}from"./PI-Lab-Logo-Small-987c50d6.js";const w=""+new URL("comp-logo-0b38dcd2.png",import.meta.url).href,N=""+new URL("bu-logo-9d19dadd.png",import.meta.url).href;const I={name:"HomeView",components:{},data(){return{store:m(),db:null,isLoading:!0,bookNum:0,jobNum:0,title:"Experiment on Recommender Bots based on ChatGPT",description:`Thank you for participating in this experiment! This experiment aims to investigate whether a chatbot based on ChatGPT can provide a satisfying user experience in accomplishing two tasks:  book recommendation task and job recommendations task.<br><small style='font-style: italic; color: #2455af'><strong style='color: #2455af''>Note:</strong> ChatGPT is an AI language model developed by OpenAI. It is designed to generate human-like responses in text-based conversations. ChatGPT uses deep learning techniques to produce language-based conversations and is capable of engaging in dynamic and interactive exchanges with users.</small><br><br>In this experiment, you will use a recommender chatbot based on ChatGPT. It could understand your needs by communicating with you, and make recommendations accordingly.<p style='padding-top: 10px; padding-bottom: 10px; font-size: 1.0rem'><span style='font-size: 1.3rem;'>There are <strong>six steps</strong> in this experiment (lasting around 20-30 minutes):</span><br>&nbsp;&nbsp;&nbsp;&nbsp;Step 1: Fill out the pre-study questionnaire.<br>&nbsp;&nbsp;&nbsp;&nbsp;Step 2: Read the first task and complete the related quiz, then choose five items to create the first wish list by talking with the chatbot.<br>&nbsp;&nbsp;&nbsp;&nbsp;Step 3: Fill out the experience questionnaire for the first task.<br>&nbsp;&nbsp;&nbsp;&nbsp;Step 4: Read the second task and complete the related quiz, then choose five items to create the second wish list by talking with the chatbot.<br>&nbsp;&nbsp;&nbsp;&nbsp;Step 5: Fill out the experience questionnaire for the second task.<br>&nbsp;&nbsp;&nbsp;&nbsp;Step 6: Fill out the open-ended questionnaire.</p> If you would like to start the experiment, please click the <span style="color: #2455af; font-weight: bold">START</span> button.`}},mounted(){this.store.$reset(),this.db=this.store.db,this.initialize()},methods:{async startBtnTap(){this.isLoading=!0,this.store.startDate=Date.now();const e={round:1,position:0};this.$router.push({path:"/survey",query:e})},async initialize(){this.shuffle(this.store.order);const e=b(this.db,"basic","info"),t=await u(e);if(t.exists()){const i=t.data();this.store.azureKey=i.azureKey,this.bookNum=parseInt(i.bookNum),this.jobNum=parseInt(i.jobNum),this.bookNum===this.jobNum?(this.shuffle(this.store.order),this.store.order[0]==="book"?this.bookNum+=1:this.jobNum+=1):this.bookNum>this.jobNum?(this.store.order=["job","book"],this.jobNum+=1):(this.store.order=["book","job"],this.bookNum+=1);let a=parseInt(i.isPrompts),s=parseInt(i.noPrompts);a>s?(s+=1,this.store.isPrompts=!1):(a+=1,this.store.isPrompts=!0),await f(e,{bookNum:this.bookNum,jobNum:this.jobNum,isPrompts:a,noPrompts:s}),this.isLoading=!1}else alert("Sorry, unable to start the experiment, please refresh the page and try again later!")},shuffle(e){for(let t=e.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}}}},T=e=>(y("data-v-609f693c"),e=e(),v(),e),S={class:"container"},P={class:"hero is-fullheight"},j={class:"hero-body"},C={class:"columns is-multiline main-canvas"},z={class:"column is-full"},L={class:"columns is-mobile"},q={class:"column"},R=["innerHTML"],V=["innerHTML"],A={class:"column is-full"},B={class:"checkbox mb-5"},H=T(()=>o("a",{href:"/book-job-gpt/InformedConsentStatement.pdf",target:"_blank"},"Informed Consent Statement",-1)),M=["disabled"],G={key:0,class:"checkbox mt-5 mb-3"},D={key:1,class:"checkbox mt-5 mb-3"},F=k('<div class="hero-foot pb-5" data-v-609f693c><div class="container is-max-widescreen" data-v-609f693c><div class="content has-text-centered" data-v-609f693c><a href="https://hci.comp.hkbu.edu.hk" target="_blank" data-v-609f693c><img src="'+x+'" alt="logo" style="height:30px;margin-right:20px;" data-v-609f693c></a><a href="https://www.comp.hkbu.edu.hk" target="_blank" data-v-609f693c><img src="'+w+'" alt="logo" style="height:30px;margin-right:20px;" data-v-609f693c></a><a href="https://hkbu.edu.hk" target="_blank" data-v-609f693c><img src="'+N+'" alt="logo" style="height:30px;" data-v-609f693c></a></div></div></div>',1);function U(e,t,i,a,s,d){return r(),l("div",S,[o("section",P,[o("div",j,[o("div",C,[o("div",z,[o("div",L,[o("div",q,[o("p",{style:{"font-size":"1.8rem","font-weight":"bold","margin-bottom":"20px","text-align":"center"},innerHTML:s.title},null,8,R),o("p",{style:{"font-size":"1.3rem"},innerHTML:s.description},null,8,V)])])]),o("div",A,[o("label",B,[c(o("input",{type:"checkbox","onUpdate:modelValue":t[0]||(t[0]=n=>s.store.isAgreeConsent=n)},null,512),[[p,s.store.isAgreeConsent]]),h(" I indicate that I am 18 years of age or older with full knowledge of all the foregoing; I have read the information presented in this "),H,h(" about the study. I agree of my own free will to participate in this study. ")]),o("button",{class:_(["button is-link",s.isLoading?"is-loading":""]),style:{width:"100%","font-size":"1.5rem"},onClick:t[1]||(t[1]=(...n)=>d.startBtnTap&&d.startBtnTap(...n)),disabled:!s.store.isAgreeConsent||s.isLoading},"START",10,M),s.store.debug?(r(),l("label",G,[c(o("input",{type:"checkbox","onUpdate:modelValue":t[2]||(t[2]=n=>s.store.isPrompts=n)},null,512),[[p,s.store.isPrompts]]),h(" Prompts group ")])):(r(),l("label",D))])])]),F])])}const J=g(I,[["render",U],["__scopeId","data-v-609f693c"]]);export{J as default};
