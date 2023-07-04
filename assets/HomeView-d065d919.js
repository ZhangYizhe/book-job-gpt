import{_ as m,s as c,g as u,a as f,b as _,o as b,c as g,d as e,w as d,v as h,e as r,n as y,p as v,f as w}from"./index-027202db.js";const k=""+new URL("PI-Lab-Logo-Small-90ae26c5.jpg",import.meta.url).href;const x={name:"HomeView",components:{},data(){return{store:c,db:c.db,isLoading:!0,title:"Hong Kong Baptist University",description:'Thank you for participating in this experiment! This experiment aims to investigate whether a chatbot based on ChatGPT can provide a satisfying user experience in accomplishing the book recommendation task or the job recommendations task.<br><br>In this experiment, you will use a recommender chatbot based on ChatGPT. It may understand your needs by communicating with you, and recommend books or job titles to you.<br><br> If you would like to start the experiment, please click the <span style="color: #2455af; font-weight: bold">START</span> button.'}},mounted(){this.initialize()},methods:{startBtnTap(){const t={round:1,position:0};this.$router.push({path:"/survey",query:t})},async initialize(){this.shuffle(this.store.order);const t=u(this.db,"basic","info"),s=await f(t);if(s.exists()){const i=s.data();this.store.elecoxyKey=i.elecoxyKey;let a=parseInt(i.visitCount)+1;this.store.isPrompts=a%2===0,await _(t,{visitCount:a}),this.isLoading=!1}else alert("Sorry, unable to start the experiment, please refresh the page and try again later!")},shuffle(t){for(let s=t.length-1;s>0;s--){const i=Math.floor(Math.random()*(s+1));[t[s],t[i]]=[t[i],t[s]]}}}},p=t=>(v("data-v-6ef13529"),t=t(),w(),t),T={class:"container"},I={class:"hero is-fullheight"},C={class:"hero-body"},L={class:"columns is-multiline main-canvas"},S={class:"column is-full"},H={class:"columns is-mobile"},B={class:"column"},M=p(()=>e("img",{src:k,alt:"logo",style:{height:"10vh"}},null,-1)),P=["innerHTML"],V=["innerHTML"],z={class:"column is-full"},A={class:"checkbox mb-5"},j=p(()=>e("a",{href:"/bookbot/InformedConsentStatement.pdf",target:"_blank"},"Informed Consent Statement",-1)),R=["disabled"],U={class:"checkbox mt-5"};function K(t,s,i,a,o,l){return b(),g("div",T,[e("section",I,[e("div",C,[e("div",L,[e("div",S,[e("div",H,[e("div",B,[M,e("p",{style:{"font-size":"1.8rem","font-weight":"bold"},innerHTML:o.title},null,8,P),e("p",{style:{"font-size":"1.3rem"},innerHTML:o.description},null,8,V)])])]),e("div",z,[e("label",A,[d(e("input",{type:"checkbox","onUpdate:modelValue":s[0]||(s[0]=n=>o.store.isAgreeConsent=n)},null,512),[[h,o.store.isAgreeConsent]]),r(" I indicate that I am 18 years of age or older with full knowledge of all the foregoing; I have read the information presented in this "),j,r(" about the study. I agree of my own free will to participate in this study. ")]),e("button",{class:y(["button is-link",o.isLoading?"is-loading":""]),style:{width:"100%","font-size":"1.5rem"},onClick:s[1]||(s[1]=(...n)=>l.startBtnTap&&l.startBtnTap(...n)),disabled:!o.store.isAgreeConsent},"START",10,R),e("label",U,[d(e("input",{type:"checkbox","onUpdate:modelValue":s[2]||(s[2]=n=>o.store.isPrompts=n)},null,512),[[h,o.store.isPrompts]]),r(" Prompts group ")])])])])])])}const G=m(x,[["render",K],["__scopeId","data-v-6ef13529"]]);export{G as default};
