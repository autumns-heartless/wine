import{d as h,y as c,c as g,o as p,a9 as m,aa as u,ab as v,ac as f,ad as b,_ as y}from"./chunks/framework.BY5V-k-t.js";class a{constructor(e,t={}){if(!(e instanceof Node))throw"Can't initialize VanillaTilt because "+e+" is not a Node.";this.width=null,this.height=null,this.clientWidth=null,this.clientHeight=null,this.left=null,this.top=null,this.gammazero=null,this.betazero=null,this.lastgammazero=null,this.lastbetazero=null,this.transitionTimeout=null,this.updateCall=null,this.event=null,this.updateBind=this.update.bind(this),this.resetBind=this.reset.bind(this),this.element=e,this.settings=this.extendSettings(t),this.reverse=this.settings.reverse?-1:1,this.resetToStart=a.isSettingTrue(this.settings["reset-to-start"]),this.glare=a.isSettingTrue(this.settings.glare),this.glarePrerender=a.isSettingTrue(this.settings["glare-prerender"]),this.fullPageListening=a.isSettingTrue(this.settings["full-page-listening"]),this.gyroscope=a.isSettingTrue(this.settings.gyroscope),this.gyroscopeSamples=this.settings.gyroscopeSamples,this.elementListener=this.getElementListener(),this.glare&&this.prepareGlare(),this.fullPageListening&&this.updateClientSize(),this.addEventListeners(),this.reset(),this.resetToStart===!1&&(this.settings.startX=0,this.settings.startY=0)}static isSettingTrue(e){return e===""||e===!0||e===1}getElementListener(){if(this.fullPageListening)return window.document;if(typeof this.settings["mouse-event-element"]=="string"){const e=document.querySelector(this.settings["mouse-event-element"]);if(e)return e}return this.settings["mouse-event-element"]instanceof Node?this.settings["mouse-event-element"]:this.element}addEventListeners(){this.onMouseEnterBind=this.onMouseEnter.bind(this),this.onMouseMoveBind=this.onMouseMove.bind(this),this.onMouseLeaveBind=this.onMouseLeave.bind(this),this.onWindowResizeBind=this.onWindowResize.bind(this),this.onDeviceOrientationBind=this.onDeviceOrientation.bind(this),this.elementListener.addEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.addEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.addEventListener("mousemove",this.onMouseMoveBind),(this.glare||this.fullPageListening)&&window.addEventListener("resize",this.onWindowResizeBind),this.gyroscope&&window.addEventListener("deviceorientation",this.onDeviceOrientationBind)}removeEventListeners(){this.elementListener.removeEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.removeEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.removeEventListener("mousemove",this.onMouseMoveBind),this.gyroscope&&window.removeEventListener("deviceorientation",this.onDeviceOrientationBind),(this.glare||this.fullPageListening)&&window.removeEventListener("resize",this.onWindowResizeBind)}destroy(){clearTimeout(this.transitionTimeout),this.updateCall!==null&&cancelAnimationFrame(this.updateCall),this.element.style.willChange="",this.element.style.transition="",this.element.style.transform="",this.resetGlare(),this.removeEventListeners(),this.element.vanillaTilt=null,delete this.element.vanillaTilt,this.element=null}onDeviceOrientation(e){if(e.gamma===null||e.beta===null)return;this.updateElementPosition(),this.gyroscopeSamples>0&&(this.lastgammazero=this.gammazero,this.lastbetazero=this.betazero,this.gammazero===null?(this.gammazero=e.gamma,this.betazero=e.beta):(this.gammazero=(e.gamma+this.lastgammazero)/2,this.betazero=(e.beta+this.lastbetazero)/2),this.gyroscopeSamples-=1);const t=this.settings.gyroscopeMaxAngleX-this.settings.gyroscopeMinAngleX,i=this.settings.gyroscopeMaxAngleY-this.settings.gyroscopeMinAngleY,s=t/this.width,n=i/this.height,l=e.gamma-(this.settings.gyroscopeMinAngleX+this.gammazero),d=e.beta-(this.settings.gyroscopeMinAngleY+this.betazero),r=l/s,o=d/n;this.updateCall!==null&&cancelAnimationFrame(this.updateCall),this.event={clientX:r+this.left,clientY:o+this.top},this.updateCall=requestAnimationFrame(this.updateBind)}onMouseEnter(){this.updateElementPosition(),this.element.style.willChange="transform",this.setTransition()}onMouseMove(e){this.updateCall!==null&&cancelAnimationFrame(this.updateCall),this.event=e,this.updateCall=requestAnimationFrame(this.updateBind)}onMouseLeave(){this.setTransition(),this.settings.reset&&requestAnimationFrame(this.resetBind)}reset(){this.onMouseEnter(),this.fullPageListening?this.event={clientX:(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.clientWidth,clientY:(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.clientHeight}:this.event={clientX:this.left+(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.width,clientY:this.top+(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.height};let e=this.settings.scale;this.settings.scale=1,this.update(),this.settings.scale=e,this.resetGlare()}resetGlare(){this.glare&&(this.glareElement.style.transform="rotate(180deg) translate(-50%, -50%)",this.glareElement.style.opacity="0")}getValues(){let e,t;this.fullPageListening?(e=this.event.clientX/this.clientWidth,t=this.event.clientY/this.clientHeight):(e=(this.event.clientX-this.left)/this.width,t=(this.event.clientY-this.top)/this.height),e=Math.min(Math.max(e,0),1),t=Math.min(Math.max(t,0),1);let i=(this.reverse*(this.settings.max-e*this.settings.max*2)).toFixed(2),s=(this.reverse*(t*this.settings.max*2-this.settings.max)).toFixed(2),n=Math.atan2(this.event.clientX-(this.left+this.width/2),-(this.event.clientY-(this.top+this.height/2)))*(180/Math.PI);return{tiltX:i,tiltY:s,percentageX:e*100,percentageY:t*100,angle:n}}updateElementPosition(){let e=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=e.left,this.top=e.top}update(){let e=this.getValues();this.element.style.transform="perspective("+this.settings.perspective+"px) rotateX("+(this.settings.axis==="x"?0:e.tiltY)+"deg) rotateY("+(this.settings.axis==="y"?0:e.tiltX)+"deg) scale3d("+this.settings.scale+", "+this.settings.scale+", "+this.settings.scale+")",this.glare&&(this.glareElement.style.transform=`rotate(${e.angle}deg) translate(-50%, -50%)`,this.glareElement.style.opacity=`${e.percentageY*this.settings["max-glare"]/100}`),this.element.dispatchEvent(new CustomEvent("tiltChange",{detail:e})),this.updateCall=null}prepareGlare(){if(!this.glarePrerender){const e=document.createElement("div");e.classList.add("js-tilt-glare");const t=document.createElement("div");t.classList.add("js-tilt-glare-inner"),e.appendChild(t),this.element.appendChild(e)}this.glareElementWrapper=this.element.querySelector(".js-tilt-glare"),this.glareElement=this.element.querySelector(".js-tilt-glare-inner"),!this.glarePrerender&&(Object.assign(this.glareElementWrapper.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden","pointer-events":"none","border-radius":"inherit"}),Object.assign(this.glareElement.style,{position:"absolute",top:"50%",left:"50%","pointer-events":"none","background-image":"linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",transform:"rotate(180deg) translate(-50%, -50%)","transform-origin":"0% 0%",opacity:"0"}),this.updateGlareSize())}updateGlareSize(){if(this.glare){const e=(this.element.offsetWidth>this.element.offsetHeight?this.element.offsetWidth:this.element.offsetHeight)*2;Object.assign(this.glareElement.style,{width:`${e}px`,height:`${e}px`})}}updateClientSize(){this.clientWidth=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,this.clientHeight=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}onWindowResize(){this.updateGlareSize(),this.updateClientSize()}setTransition(){clearTimeout(this.transitionTimeout),this.element.style.transition=this.settings.speed+"ms "+this.settings.easing,this.glare&&(this.glareElement.style.transition=`opacity ${this.settings.speed}ms ${this.settings.easing}`),this.transitionTimeout=setTimeout(()=>{this.element.style.transition="",this.glare&&(this.glareElement.style.transition="")},this.settings.speed)}extendSettings(e){let t={reverse:!1,max:15,startX:0,startY:0,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:1,speed:300,transition:!0,axis:null,glare:!1,"max-glare":1,"glare-prerender":!1,"full-page-listening":!1,"mouse-event-element":null,reset:!0,"reset-to-start":!0,gyroscope:!0,gyroscopeMinAngleX:-45,gyroscopeMaxAngleX:45,gyroscopeMinAngleY:-45,gyroscopeMaxAngleY:45,gyroscopeSamples:10},i={};for(var s in t)if(s in e)i[s]=e[s];else if(this.element.hasAttribute("data-tilt-"+s)){let n=this.element.getAttribute("data-tilt-"+s);try{i[s]=JSON.parse(n)}catch{i[s]=n}}else i[s]=t[s];return i}static init(e,t){e instanceof Node&&(e=[e]),e instanceof NodeList&&(e=[].slice.call(e)),e instanceof Array&&e.forEach(i=>{"vanillaTilt"in i||(i.vanillaTilt=new a(i,t))})}}typeof document<"u"&&(window.VanillaTilt=a,a.init(document.querySelectorAll("[data-tilt]")));const x=m('<h2 id="效果-1" tabindex="-1" data-v-1f7b06d0>效果 1 <a class="header-anchor" href="#效果-1" aria-label="Permalink to &quot;效果 1&quot;" data-v-1f7b06d0>​</a></h2><div class="card card1" data-v-1f7b06d0> Magic Card </div><h2 id="效果-2" tabindex="-1" data-v-1f7b06d0>效果 2 <a class="header-anchor" href="#效果-2" aria-label="Permalink to &quot;效果 2&quot;" data-v-1f7b06d0>​</a></h2><section class="product" data-v-1f7b06d0><div class="product__photo" data-v-1f7b06d0><div class="photo-container" data-v-1f7b06d0><div class="photo-main" data-v-1f7b06d0><div class="controls" data-v-1f7b06d0><i class="material-icons" data-v-1f7b06d0>share</i><i class="material-icons" data-v-1f7b06d0>favorite_border</i></div><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537291846/codepen/delicious-apples/green-apple-with-slice.png" alt="green apple slice" data-v-1f7b06d0></div><div class="photo-album" data-v-1f7b06d0><ul data-v-1f7b06d0><li data-v-1f7b06d0><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple" data-v-1f7b06d0></li><li data-v-1f7b06d0><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303532/codepen/delicious-apples/half-apple.png" alt="half apple" data-v-1f7b06d0></li><li data-v-1f7b06d0><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303160/codepen/delicious-apples/green-apple-flipped.png" alt="green apple" data-v-1f7b06d0></li><li data-v-1f7b06d0><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303708/codepen/delicious-apples/apple-top.png" alt="apple top" data-v-1f7b06d0></li></ul></div></div></div><div class="product__info" data-v-1f7b06d0><div class="title" data-v-1f7b06d0><h1 data-v-1f7b06d0>Delicious Apples</h1><span data-v-1f7b06d0>COD: 45999</span></div><div class="price" data-v-1f7b06d0> R$ <span data-v-1f7b06d0>7.93</span></div><div class="variant" data-v-1f7b06d0><h3 data-v-1f7b06d0>SELECT A COLOR</h3><ul data-v-1f7b06d0><li data-v-1f7b06d0><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple" data-v-1f7b06d0></li><li data-v-1f7b06d0><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302752/codepen/delicious-apples/yellow-apple.png" alt="yellow apple" data-v-1f7b06d0></li><li data-v-1f7b06d0><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302427/codepen/delicious-apples/orange-apple.png" alt="orange apple" data-v-1f7b06d0></li><li data-v-1f7b06d0><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302285/codepen/delicious-apples/red-apple.png" alt="red apple" data-v-1f7b06d0></li></ul></div><div class="description" data-v-1f7b06d0><h3 data-v-1f7b06d0>BENEFITS</h3><ul data-v-1f7b06d0><li data-v-1f7b06d0>Apples are nutricious</li><li data-v-1f7b06d0>Apples may be good for weight loss</li><li data-v-1f7b06d0>Apples may be good for bone health</li><li data-v-1f7b06d0>They&#39;re linked to a lowest risk of diabetes</li></ul></div><button class="buy--btn" data-v-1f7b06d0>ADD TO CART</button></div></section><h2 id="效果-3" tabindex="-1" data-v-1f7b06d0>效果 3 <a class="header-anchor" href="#效果-3" aria-label="Permalink to &quot;效果 3&quot;" data-v-1f7b06d0>​</a></h2><div class="card card2" data-v-1f7b06d0><img src="'+u+'" alt="" data-v-1f7b06d0><div class="text" data-v-1f7b06d0><h2 data-v-1f7b06d0>How disciplined you are, how free you are.</h2><p data-v-1f7b06d0>你有多自律，就有多自由。</p></div></div><h2 id="效果-4" tabindex="-1" data-v-1f7b06d0>效果 4 <a class="header-anchor" href="#效果-4" aria-label="Permalink to &quot;效果 4&quot;" data-v-1f7b06d0>​</a></h2><div class="card card3" data-tilt data-v-1f7b06d0><div class="content" data-v-1f7b06d0><h2 data-v-1f7b06d0>01</h2><h3 data-v-1f7b06d0>Card One</h3><p data-v-1f7b06d0>Realistic glass card hover effect, realistic glass card hover effect, realistic glass card hover effect.</p><a href="#" data-v-1f7b06d0>Read More</a></div></div><h2 id="效果-5" tabindex="-1" data-v-1f7b06d0>效果 5 <a class="header-anchor" href="#效果-5" aria-label="Permalink to &quot;效果 5&quot;" data-v-1f7b06d0>​</a></h2><div class="card card4" data-v-1f7b06d0><div class="wrapper" data-v-1f7b06d0><img src="'+v+'" class="cover-image" data-v-1f7b06d0></div><img src="'+f+'" class="title" data-v-1f7b06d0><img src="'+b+'" class="character" data-v-1f7b06d0></div><h2 id="效果-6" tabindex="-1" data-v-1f7b06d0>效果 6 <a class="header-anchor" href="#效果-6" aria-label="Permalink to &quot;效果 6&quot;" data-v-1f7b06d0>​</a></h2><div class="flip" data-v-1f7b06d0><div class="front" style="background-image:url(/images/pexels-photo-540518.webp);" data-v-1f7b06d0><h1 class="text-shadow" data-v-1f7b06d0>MOUNTAIN</h1></div><div class="back" data-v-1f7b06d0><h2 data-v-1f7b06d0>Angular</h2><p data-v-1f7b06d0>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p></div></div>',12),E=[x],z=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"wine/index.md","filePath":"wine/index.md","lastUpdated":1720077422000}'),w={name:"wine/index.md"},M=h({...w,setup(L){return c(()=>{a.init(document.querySelector(".card3"),{max:50,speed:400}),a.init(document.querySelectorAll(".card3"))}),(e,t)=>(p(),g("div",null,E))}}),A=y(M,[["__scopeId","data-v-1f7b06d0"]]);export{z as __pageData,A as default};
