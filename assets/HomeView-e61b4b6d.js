import{_ as d,s as p,o as h,c as m,a as e,w as a,v as c,b as i,p as u,d as _}from"./index-964d07b1.js";const b=""+new URL("PI-Lab-Logo-Small-90ae26c5.jpg",import.meta.url).href;const f={name:"HomeView",components:{},data(){return{store:p,title:"Hong Kong Baptist University",description:'Thank you for participating in this experiment. This experiment aims to investigate whether chatbots can provide a better experience in the book recommendation task.<br><br>In this experiment, you will experience a book chatbot based on Chat-GPT. It can understand your needs by communicating with you, and recommend books to you based on your preferences.<br><br> If you would like to start the experiment, please click the <span style="color: #2455af; font-weight: bold">START</span> button.'}},methods:{async startBtnTap(){const o={round:1,position:0};this.$router.push({path:"/survey",query:o})}}},l=o=>(u("data-v-0aee8cc6"),o=o(),_(),o),y={class:"container"},g={class:"hero is-fullheight"},v={class:"hero-body"},k={class:"columns is-multiline main-canvas"},w={class:"column is-full"},x={class:"columns is-mobile"},T={class:"column"},I=l(()=>e("img",{src:b,alt:"logo",style:{height:"10vh"}},null,-1)),C=["innerHTML"],H=["innerHTML"],S={class:"column is-full"},B={class:"checkbox mb-5"},L=l(()=>e("a",{href:"/chatgpt/InformedConsentStatement.pdf",target:"_blank"},"Informed Consent Statement",-1)),V=["disabled"],A={class:"checkbox mt-5"};function M(o,s,P,U,t,r){return h(),m("div",y,[e("section",g,[e("div",v,[e("div",k,[e("div",w,[e("div",x,[e("div",T,[I,e("p",{style:{"font-size":"1.8rem","font-weight":"bold"},innerHTML:t.title},null,8,C),e("p",{style:{"font-size":"1.3rem"},innerHTML:t.description},null,8,H)])])]),e("div",S,[e("label",B,[a(e("input",{type:"checkbox","onUpdate:modelValue":s[0]||(s[0]=n=>t.store.isAgreeConsent=n)},null,512),[[c,t.store.isAgreeConsent]]),i(" I indicate that I am 18 years of age or older with full knowledge of all the foregoing; I have read the information presented in this "),L,i(" about the study. I agree of my own free will to participate in this study. ")]),e("button",{class:"button is-link",style:{width:"100%","font-size":"1.5rem"},onClick:s[1]||(s[1]=(...n)=>r.startBtnTap&&r.startBtnTap(...n)),disabled:!t.store.isAgreeConsent},"START",8,V),e("label",A,[a(e("input",{type:"checkbox","onUpdate:modelValue":s[2]||(s[2]=n=>t.store.isPrompts=n)},null,512),[[c,t.store.isPrompts]]),i(" Prompts group ")])])])])])])}const R=d(f,[["render",M],["__scopeId","data-v-0aee8cc6"]]);export{R as default};
