(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/CV-GLISSELISBETH.03fb10a4.pdf"},function(e,a,t){e.exports=t(32)},,,,,,function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(9),o=t.n(i),r=(t(17),t(18),t(1)),s=t(2),c=t(4),m=t(3),u=t(5),d=t(7),p=(t(19),function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).openMenu=function(e){e.preventDefault(),document.body.classList.add("menu-is-open")},t.closeMenu=function(e){e.preventDefault(),document.body.classList.remove("menu-is-open")},t.state={thePosition:!1},t.openMenu=t.openMenu.bind(Object(d.a)(t)),t.closeMenu=t.closeMenu.bind(Object(d.a)(t)),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("scroll",function(){window.scrollY>190?e.setState({thePosition:!0}):e.setState({thePosition:!1})}),window.scrollTo(0,0)}},{key:"render",value:function(){var e=this.props.data,a=this.state.thePosition;return l.a.createElement(n.Fragment,null,l.a.createElement("header",null,l.a.createElement("div",{className:"header-logo"},l.a.createElement("a",{href:"index.html"},l.a.createElement("h1",{className:"logo"},"G"))),l.a.createElement("a",{id:"header-menu-trigger",className:"".concat(a?"opaque":""),href:"#0",onClick:this.openMenu},l.a.createElement("span",{className:"header-menu-text"},"Menu"),l.a.createElement("span",{className:"header-menu-icon"})),l.a.createElement("nav",{id:"menu-nav-wrap"},l.a.createElement("a",{href:"#0",className:"close-button",title:"close",onClick:this.closeMenu},l.a.createElement("span",null,"Close")),l.a.createElement("h3",null,"Portfolio."),l.a.createElement("ul",{className:"nav-list"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home",title:""},"Portada")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about",title:""},"Acerca de mi")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio",title:""},"Portafolio")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact",title:""},"Cont\xe1ctame"))),l.a.createElement("ul",{className:"header-social-list"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",without:"true"},l.a.createElement("i",{className:e.className})))})))))}}]),a}(n.Component)),h=t(6),b=t.n(h),f=t(10),E=t.n(f),g=(t(20),function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).state={isLoading:!0},t.cfg={defAnimation:"fadeInUp"},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;b()("html").hasClass("no-cssanimations")||setTimeout(function(){b()(".animate-intro").each(function(a){var t=b()(e),n=t.data("animate")||null;n||(n=e.cfg.defAnimation),setTimeout(function(){t.addClass("".concat(n," animated"))},300*a)})},100),this.setState({isLoading:!1})}},{key:"render",value:function(){var e=this.props.data;return this.state.isLoading?l.a.createElement(n.Fragment,null,l.a.createElement("div",{id:"preloader"}),l.a.createElement("div",{id:"loader"})):l.a.createElement("section",{id:"home"},l.a.createElement("div",{className:"home-content-table"},l.a.createElement("div",{className:"home-content-tablecell"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-twelve"},l.a.createElement("h1",{className:"animate-intro"},e.name),l.a.createElement("h2",{className:"animate-intro"},e.study&&e.study.map(function(a){return a.name===e.study[e.study.length-1].name?a.name:"".concat(a.name," | ")})),l.a.createElement("h3",{className:"animate-intro"},e.role&&e.role.map(function(a){return a.name===e.role[e.role.length-1].name?a.name:"".concat(a.name," | ")})),l.a.createElement("div",{className:"more animate-intro"},l.a.createElement("a",{className:"smoothscroll button stroke",href:"#about"},"Acerca de mi"),l.a.createElement("a",{target:"_blank",without:"true",rel:"noopener noreferrer",className:"smoothscroll button stroke",href:E.a,download:!0},"Mi CV")))))),l.a.createElement("ul",{className:"home-social-list"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",without:"true"},l.a.createElement("i",{className:e.className})))})),l.a.createElement("div",{className:"scrolldown"},l.a.createElement("a",{href:"#about",className:"scroll-icon smoothscroll"},"Scroll Down",l.a.createElement("i",{className:"fa fa-long-arrow-right","aria-hidden":"true"}))))}}]),a}(n.Component)),N=(t(21),function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.data;return l.a.createElement(n.Fragment,null,l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row about-wrap"},l.a.createElement("div",{className:"col-full"},l.a.createElement("div",{className:"about-profile-bg"}),l.a.createElement("div",{className:"intro"},l.a.createElement("h3",{className:"animate-this"},"Sobre mi"),l.a.createElement("p",{className:"lead animate-this"},e.aboutme))))))}}]),a}(n.Component)),v=(t(22),function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.data;return l.a.createElement(n.Fragment,null,l.a.createElement("section",{id:"skill"},l.a.createElement("div",{className:"row narrow section-intro with-bottom-sep animate-this"},l.a.createElement("div",{className:"col-full"},l.a.createElement("h3",null,e.skillTitle),l.a.createElement("p",{className:"lead"},e.skillDescription))),l.a.createElement("div",{className:"row skill-content"},l.a.createElement("div",{className:"skill-list block-1-6 block-tab-full group"},e.skills&&e.skills.map(function(e){return l.a.createElement("div",{className:"bgrid skill-item animate-this",key:e.skillName},l.a.createElement("img",{className:"icon",src:"images/skill/".concat(e.imgName,".png"),alt:e.skillName}),l.a.createElement("div",{className:"skill-content"},l.a.createElement("p",null,e.skillName)))})))))}}]),a}(n.Component)),k=(t(23),t(24),t(25),t(26),t(27),t(28),function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.data;return b()(document).ready(function(){b()("#folio-wrap").lightGallery({download:!1,thumbnail:!0,animateThumb:!1,showThumbByDefault:!1,hash:!1,selector:".item-wrap",fullScreen:!0})}),l.a.createElement(n.Fragment,null,l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"intro-wrap"},l.a.createElement("div",{className:"row narrow section-intro with-bottom-sep animate-this"},l.a.createElement("div",{className:"col-twelve"},l.a.createElement("h3",null,"Proyectos y ejemplos"),l.a.createElement("p",{className:"lead"},"Implementado con React y otras herramientas.")))),l.a.createElement("div",{className:"row portfolio-content"},l.a.createElement("div",{className:"col-twelve"},l.a.createElement("div",{id:"folio-wrap",className:"bricks-wrapper"},e.portfolio&&e.portfolio.map(function(e){return l.a.createElement("div",{className:"brick folio-item",key:e.ord},l.a.createElement("div",{className:"item-wrap animate-this","data-src":e.imgurl,"data-sub-html":e.ord},l.a.createElement("a",{className:"overlay",href:e.ord},l.a.createElement("img",{src:e.imgurl,alt:e.title}),l.a.createElement("div",{className:"item-text"},l.a.createElement("span",{className:"folio-types"},e.type),l.a.createElement("h3",{className:"folio-title"}," ",e.title))),l.a.createElement("a",{href:e.link,className:"details-link",title:"details"},l.a.createElement("i",{className:"icon-link"}))),l.a.createElement("div",{id:e.num,className:"hide"},l.a.createElement("h4",null,e.title),l.a.createElement("p",null,e.description,e.production&&l.a.createElement(n.Fragment,null,l.a.createElement("br",null),l.a.createElement("a",{href:e.link},"Demo")),l.a.createElement("br",null),l.a.createElement("a",{href:e.code},"Codigo"))))}))))))}}]),a}(n.Component)),w=(t(29),function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.data;return l.a.createElement(n.Fragment,null,l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row narrow section-intro with-bottom-sep animate-this"},l.a.createElement("div",{className:"col-twelve"},l.a.createElement("h3",null,"Contact\xe1me"))),l.a.createElement("div",{className:"row contact-content"},l.a.createElement("div",{className:"col-four tab-full contact-info end animate-this"},l.a.createElement("h5",null,"Mi informaci\xf3n"),l.a.createElement("div",{className:"cinfo"},l.a.createElement("h6",null,"D\xf3nde me encuentras"),l.a.createElement("p",null,e.address)),l.a.createElement("div",{className:"cinfo"},l.a.createElement("h6",null,"Env\xedeme un email a"),l.a.createElement("p",null,e.email),l.a.createElement("p",null,e.email2)),l.a.createElement("div",{className:"cinfo"},l.a.createElement("h6",null,"Llama al"),l.a.createElement("p",null,"Celular: (+051) 961064075"),l.a.createElement("p",null,"Skype: glisse86"))))))}}]),a}(n.Component)),y=(t(30),function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).state={thePositionFooter:!1},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("scroll",function(){window.scrollY>500?e.setState({thePositionFooter:!0}):e.setState({thePositionFooter:!1})}),window.scrollTo(0,0)}},{key:"render",value:function(){var e=this.state.thePositionFooter;return l.a.createElement(n.Fragment,null,l.a.createElement("footer",null,l.a.createElement("div",{className:"footer-bottom"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-twelve"},l.a.createElement("div",{className:"copyright"},l.a.createElement("span",null,"\xa9 Copyright ",l.a.createElement("a",{href:"https://www.glisse.co"},"Dev Glisse")),l.a.createElement("span",null,"Template de"," ",l.a.createElement("a",{href:"https://www.styleshout.com/infinity-clean-modern-template-for-creatives-and-agencies/"},"Infinity10")),l.a.createElement("span",null,"Design de"," ",l.a.createElement("a",{href:"http://www.styleshout.com/"},"styleshout")),l.a.createElement("span",null,"Hecho en ",l.a.createElement("a",{href:"https://reactjs.org"},"reactJS")))))),l.a.createElement("div",{id:"go-top",className:"".concat(e?"visible":"")},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#top"},l.a.createElement("i",{className:"fa fa-long-arrow-up","aria-hidden":"true"})))))}}]),a}(n.Component)),j={imagebaseurl:"https://glisselisbeth.github.io/",name:"Glisse Jorge",role:[{name:"Frontend Developer"},{name:"Backend Developer"},{name:"Bachiller en Ingenier\xeda de Sistemas"}],study:[{name:"Universidad San Crist\xf3bal"},{name:"Laboratoria"}],linkedinId:"glisselisbeth",skypeid:"glisse86",roleDescription:"Apasionada por los c\xf3digos y la tecnolog\xeda",socialLinks:[{name:"facebook",url:"https://www.facebook.com/glisselisbeth/",className:"fa fa-facebook-square"},{name:"github",url:"http://github.com/glisselisbeth",className:"fa fa-github-square"},{name:"linkedin",url:"https://www.linkedin.com/in/glisselisbeth/",className:"fa fa-linkedin-square"}],aboutme:"Una de mis experiencias en el \xe1rea de desarrollo web y de aplicaciones, es que con cada l\xednea de c\xf3digo, me esfuerzo por hacer de la web y la aplicaci\xf3n un lugar hermoso y con la mejor experiencia del usuario. Trabajar con un equipo multidisciplinario y bajo los enfoques de metodolog\xedas \xe1giles. Siempre estuve interesada en las diferentes tecnolog\xedas y los c\xf3digos.",address:"Mz. P4 Lote 16 Ampliaci\xf3n 1 12 de noviembre Pamplona Alta, San Juan de Miraflores",website:"https://www.glisse.co",email:"glisselisbeth@gmail.com",email2:"glisselisbeth@outlook.com",education:[{UniversityName:"Universidad Nacional San Crist\xf3bal de Huamanga",specialization:"Bachiller en Ingenier\xeda de Sistemas",YearOfPassing:"2005-2011"},{UniversityName:"Laboratoria",specialization:"Frontend Developer",YearOfPassing:"2017"}],skillTitle:"Mis habilidades",skillDescription:"Activamente en un continuo aprendizaje exponencial y la responsabilidad de hacerlo.",skills:[{skillName:"HTML5",imgName:"html5"},{skillName:"CSS",imgName:"css3"},{skillName:"Javascript",imgName:"JS"},{skillName:"Firebase",imgName:"firebase"},{skillName:"Bootstrap",imgName:"bootstrap"},{skillName:"ReactJS",imgName:"react"},{skillName:"React Native",imgName:"react-native"},{skillName:"Typescript",imgName:"ts"},{skillName:"Angular",imgName:"angular"},{skillName:"Git",imgName:"git"},{skillName:"Github",imgName:"github"},{skillName:"NodeJS",imgName:"node3"}],portfolio:[{num:"01",ord:"#01",title:"Landing Sodimac",description:"Repositorio implementado en Altimea para el desarrollo de Sodimac de Alquiler de herramientas.",imgurl:"images/portfolio/sodimac.png",type:"Web y Mobile",link:"https://github.com/GlisseLisbeth/landing_sodimac_web",code:"https://github.com/GlisseLisbeth/landing_sodimac_web",production:!1},{num:"02",ord:"#02",title:"Github User App",description:"Un cliente frontend de React que se comunica con la API Github GraphQL y el cliente Apollo.",imgurl:"images/portfolio/github-user_2.png",type:"Mobile",link:"https://github.com/GlisseLisbeth/react-graphql-apollo",code:"https://github.com/GlisseLisbeth/react-graphql-apollo",production:!1},{num:"03",ord:"#03",title:"Task App",description:"Ejemplo implementado cor React y Typescript",imgurl:"images/portfolio/note.png",type:"Mobile",link:"https://glisselisbeth.github.io/react-typescript/",code:"https://github.com/GlisseLisbeth/react-typescript",production:!0},{num:"04",ord:"#04",title:"Laboratoria News",description:"Caso implementado en equipo, con herramientas como gulp, sass, nodemon, express, firebase y API",imgurl:"images/portfolio/laboratoria_news.png",type:"Web y Mobile",link:"https://laboratoria-news6.herokuapp.com/",code:"https://github.com/GlisseLisbeth/Laboratoria-news-codereview",production:!0},{num:"05",ord:"#05",title:"Yape App",description:"Aplicaci\xf3n Node.js con Docker y express",imgurl:"images/portfolio/yape.png",type:"Mobile",link:"https://stormy-plains-32030.herokuapp.com/",code:"https://github.com/GlisseLisbeth/yape-app-docker/",production:!0},{num:"06",ord:"#06",title:"Pokedex",description:"Sitio web utilizado Api Official Pokedex con Ajax, Nodejs y Express 5",imgurl:"images/portfolio/pokedex.png",type:"Web y Mobile",link:"https://pokedex-v2.herokuapp.com/",code:"https://github.com/GlisseLisbeth/pokedex-v2",production:!0}]},O=(t(31),function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(n.Fragment,null,l.a.createElement(p,{data:j}),l.a.createElement(g,{data:j}),l.a.createElement(N,{data:j}),l.a.createElement(v,{data:j}),l.a.createElement(k,{data:j}),l.a.createElement(w,{data:j}),l.a.createElement(y,null))}}]),a}(n.Component));o.a.render(l.a.createElement(O,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.ff155870.chunk.js.map