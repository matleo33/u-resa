(this["webpackJsonpu-resa"]=this["webpackJsonpu-resa"]||[]).push([[0],{165:function(e,t,a){},198:function(e,t,a){e.exports=a(332)},203:function(e,t,a){},204:function(e,t,a){},209:function(e,t,a){},289:function(e,t,a){},328:function(e,t,a){},329:function(e,t,a){},330:function(e,t,a){},331:function(e,t,a){e.exports=a.p+"static/media/BrixSlab-Light.2a1dc4b1.otf"},332:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(33),i=a.n(l),s=(a(203),a(18)),c=a(19),o=a(21),u=a(20),m=a(34);a(204);var h=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={connected:e.connected,connexion:e.connexion},n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("header",{className:"container-fluid MenuHeader"},r.a.createElement("div",{className:"logo"},r.a.createElement(m.b,{to:"/u-resa/"}," U-RESA ")),r.a.createElement("hr",{className:"separatorMenu"}),r.a.createElement("div",{className:"MenuLink"},r.a.createElement(m.b,{className:"Link",to:"/u-resa/RechercheSalle"}," R\xe9server "),r.a.createElement(m.b,{className:"Link",to:"/u-resa/HistoEtResas"}," Mes r\xe9servations "),r.a.createElement(m.b,{className:"Link",to:"/u-resa/Plan"},"Plan"),r.a.createElement(m.b,{className:"Link",to:"/u-resa/Profile"}," Mon profil "),r.a.createElement("a",{className:"Link",href:"http://localhost:8080/Connexion"},"Connexion"))))}}]),a}(r.a.Component),d=(a(209),a(355)),p=a(51),v=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement(d.a,{columns:2},r.a.createElement(d.a.Column,null,r.a.createElement("div",{className:"icon"},r.a.createElement(p.a,{circular:!0,name:"map marker alternate",size:"large"}),r.a.createElement("span",null," 351 Cours de la Lib\xe9ration, 33400 Talence"),r.a.createElement("div",null),r.a.createElement(p.a,{circular:!0,name:"phone",size:"large"}),r.a.createElement("span",null," 05 55 55 55 55"),r.a.createElement("div",null),r.a.createElement(p.a,{circular:!0,name:"mail",size:"large"}),r.a.createElement("span",null," uresa33@gmail.com "))),r.a.createElement(d.a.Column,null,r.a.createElement("div",{className:"text"},r.a.createElement("div",null,"A propos de l'univesit\xe9"),r.a.createElement("div",null,"Lorem blabla blabla blabla "),r.a.createElement(p.a,{circular:!0,name:"facebook",size:"large"}),r.a.createElement("span",null,r.a.createElement(p.a,{circular:!0,name:"twitter",size:"large"})),r.a.createElement("span",null,r.a.createElement(p.a,{circular:!0,name:"linkedin",size:"large"})),r.a.createElement("span",null,r.a.createElement(p.a,{circular:!0,name:"mail",size:"large"}))))))}}]),a}(r.a.Component),f=a(172),E=a(350),b=a(352);function g(e){var t=e.children,a=e.eventKey,n=Object(f.b)(a,(function(){return console.log("totally custom!")}));return r.a.createElement("button",{type:"button",style:{backgroundColor:"pink"},onClick:n},t)}var C=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E.a,{defaultActiveKey:"0"},r.a.createElement(b.a,null,r.a.createElement(b.a.Header,null,r.a.createElement(g,{eventKey:"0"},"Click me!")),r.a.createElement(E.a.Collapse,{eventKey:"0"},r.a.createElement(b.a.Body,null,"Hello! I'm the body"))),r.a.createElement(b.a,null,r.a.createElement(b.a.Header,null,r.a.createElement(g,{eventKey:"1"},"Click me!")),r.a.createElement(E.a.Collapse,{eventKey:"1"},r.a.createElement(b.a.Body,null,"Hello! I'm another body")))))}}]),a}(r.a.Component),y=a(45),k=(a(289),a(186)),x=a(353),S=a(349),j=a(345),O=a(347),H=a(333),D=a(354),N=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).mailClick=function(){fetch("http://localhost:8080/Contactus",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({from:n.state.AdresseMail,subject:n.state.Object,message:n.state.Message})}).then((function(e){200===e.status&&(console.log("ok"),n.setState({hiddenMessageOK:!1}),window.scrollTo(0,0))})).catch((function(e){console.error(e),n.setState({hiddenMessageKO:!1})}))},n.handleClick=function(e,t){var a=t.index,r=n.state.activeIndex===a?-1:a;n.setState({activeIndex:r})},n.state={Message:"",Object:"",AdresseMail:"",hiddenMessageOK:!0,hiddenMessageKO:!0,infoProfil:[],profile:e.profile,activeIndex:0},n}return Object(c.a)(a,[{key:"onChangeMsg",value:function(e){this.setState({Message:e.target.value})}},{key:"onChangeObj",value:function(e){this.setState({Object:e.target.value})}},{key:"onChangeMail",value:function(e){this.setState({AdresseMail:e.target.value})}},{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:8080/User/2").then((function(e){return e.json()})).then((function(t){e.setState({infoProfil:t[0]}),console.log("good")})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state,t=e.activeIndex,a=e.hiddenMessageOK,n=e.hiddenMessageKO;return r.a.createElement("div",{class:"ProfilStyle"},r.a.createElement(D.a,{positive:!0,hidden:a},r.a.createElement(D.a.Header,null,"Message envoy\xe9"),r.a.createElement("p",null,"Votre retour nous sera tr\xe8s utile pour am\xe9liorer cette application lors de sa prochaine mise \xe0 jour.")),r.a.createElement(D.a,{negative:!0,hidden:n},r.a.createElement(D.a.Header,null,"Message bloqu\xe9"),r.a.createElement("p",null,"Le service est momentan\xe9ment int\xe9rompu. Vous pouvez cependant nous envoyer un mail \xe0 uresaprojet@gmail.com.")),r.a.createElement("div",{class:"ProfilImg"},r.a.createElement(k.a,{src:"https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-1/p240x240/69733501_10216927294193774_169972699379007488_o.jpg?_nc_cat=102&_nc_sid=dbb9e7&_nc_ohc=wPZc_aqRDk8AX_i0PG5&_nc_ht=scontent-cdg2-1.xx&_nc_tp=6&oh=933ff4e4be69f5f743a5ba94da8254cb&oe=5EDF8E57",size:"medium",circular:!0})),r.a.createElement("div",{class:"ProfilInfo"},r.a.createElement("div",{className:"NomPrenom"},this.state.profile.prenom," ",this.state.profile.nom),r.a.createElement(x.a,{styled:!0,fluid:!0},r.a.createElement(x.a.Title,{active:0===t,index:0,onClick:this.handleClick},r.a.createElement(p.a,{name:"dropdown"}),"Contactez-nous"),r.a.createElement(x.a.Content,{active:0===t},r.a.createElement(S.a,null,r.a.createElement(S.a.Field,{id:"form-input-control-error-email",control:j.a,label:"Email",placeholder:"joe@gmail.com",onChange:this.onChangeMail.bind(this),value:this.state.AdresseMail}),r.a.createElement(S.a.Field,{id:"form-input-control-error-email",control:j.a,label:"Objet",placeholder:"Objet du message",onChange:this.onChangeObj.bind(this),value:this.state.Object}),r.a.createElement(S.a.Field,{id:"form-textarea-control-opinion",control:O.a,label:"Message",placeholder:"Message",onChange:this.onChangeMsg.bind(this),value:this.state.Message}),r.a.createElement(S.a.Field,{id:"form-button-control-public",control:H.a,onClick:this.mailClick,content:"Envoyer"}))),r.a.createElement(x.a.Title,{active:1===t,index:1,onClick:this.handleClick},r.a.createElement(p.a,{name:"dropdown"}),"Autres infos"),r.a.createElement(x.a.Content,{active:1===t},r.a.createElement("p",null,this.state.profile.prenom),r.a.createElement("p",null,this.state.profile.nom),r.a.createElement("p",null,"Niveau d'\xe9tudes :"),r.a.createElement("p",null,"Section :")),r.a.createElement(x.a.Title,{active:2===t,index:2,onClick:this.handleClick},r.a.createElement(p.a,{name:"dropdown"}),"A propos"),r.a.createElement(x.a.Content,{active:2===t},"Lorem Ipsum dolor sit amet"))))}}]),a}(r.a.Component),U=a(356),B=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(U.a,{placeholder:!0},r.a.createElement(d.a,{columns:1,relaxed:"very",stackable:!0},r.a.createElement(d.a.Column,null,r.a.createElement(S.a,null,r.a.createElement(S.a.Input,{icon:"user",iconPosition:"left",label:"Username",placeholder:"Username"}),r.a.createElement(S.a.Input,{icon:"lock",iconPosition:"left",label:"Password",type:"password"}),r.a.createElement(H.a,{content:"Login",primary:!0}))))))}}]),a}(r.a.Component),A=(a(328),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).CGUAccept=function(e){if(n.state.isChecked&&n.state.isChecked2){fetch("http://localhost:8080/Salles/Reserver",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({horaire:n.state.Date+" "+n.state.Horaire,idsalle:n.state.idSalle,duree:30*Number(n.state.Duree),idreservant:"1"})});var t=[{Date:n.state.Date,Horaire:n.state.Horaire,Fac:n.state.Fac,Batiment:n.state.Batiment,idSalle:n.state.idSalle,nomSalle:n.state.nomSalle,Duree:n.state.Duree}];n.props.history.push({pathname:"/u-resa/HistoEtResas",data:t})}},n.toggleChange1=function(){n.setState({isChecked:!n.state.isChecked})},n.toggleChange2=function(){n.setState({isChecked2:!n.state.isChecked2})},n.state={isChecked:!1,isChecked2:!1,Date:"",Horaire:"",Duree:"",Fac:"",Batiment:"",idSalle:"",nomSalle:""},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.location.data;void 0!==e&&this.setState({Date:e[0].Date,Horaire:e[0].Horaire,Duree:e[0].Duree,Fac:e[0].Fac,Batiment:e[0].Batiment,idSalle:e[0].idSalle,nomSalle:e[0].nomSalle})}},{key:"render",value:function(){return r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"cgu"},r.a.createElement("div",{class:"stylBord"},r.a.createElement("div",{class:"stylText"},r.a.createElement("h3",null,"Conditions g\xe9n\xe9rales d\u2019utilisation :"),r.a.createElement("p",null,"Veuillez lire attentivement les pr\xe9sentes Conditions g\xe9n\xe9rales d\u2019utilisation (CGU) car elles contiennent des informations importantes concernant vos droits et obligations."),r.a.createElement("p",null,"En acceptant ces CGU, l\u2019utilisateur certifie sur l\u2019honneur \xeatre bien la personne qui va utiliser la salle qu\u2019il a r\xe9serv\xe9 et qu\u2019aucune personne n\u2019\xe9tant pas inscrite \xe0 l\u2019Universit\xe9 de Bordeaux ne sera pr\xe9sente avec lui dans la salle."),r.a.createElement("p",null,"L\u2019utilisation des salles de l\u2019Universit\xe9 de Bordeaux est soumise au r\xe8glement int\xe9rieur r\xe9dig\xe9 par les instances directrices de l\u2019universit\xe9 et en accord avec le droit fran\xe7ais. Il convient de respecter en plus du r\xe8glement int\xe9rieur les r\xe8gles de gestion de cette application telles que :",r.a.createElement("li",{className:"liCGU"},"Un personnel gestionnaire de l\u2019universit\xe9 \xe0 le pouvoir de cr\xe9er, supprimer ou d\xe9placer n\u2019importe quelle r\xe9servation."),r.a.createElement("li",{className:"liCGU"},"Un professeur est prioritaire sur l\u2019utilisation de la salle. M\xeame si aucune r\xe9servation n\u2019est faite par l\u2019enseignant, il peut r\xe9quisitionner la salle afin d\u2019y faire cours sans passer par l\u2019application."),r.a.createElement("li",{className:"liCGU"},"Un \xe9tudiant voulant r\xe9server une salle au nom d\u2019une association se verra dans l\u2019obligation de fournir un motif de r\xe9servation. L\u2019\xe9tudiant en question doit obligatoirement \xeatre membre de l\u2019association. Le Bureau de la Vie \xc9tudiante du campus de rattachement de l\u2019association sera alors inform\xe9 et pourra valider le cr\xe9neau selon la nature du motif de r\xe9servation.")),r.a.createElement("p",null,"De plus, l\u2019utilisateur s\u2019engage \xe0 respecter les lieux et \xe0 \xe9viter toutes formes de d\xe9gradations ou autres actions qui pourraient nuire aux prochains utilisateurs de la salle (d\xe9gradation du mat\xe9riel, d\xe9placement du mobilier sans le remettre \xe0 sa place etc\u2026)."),r.a.createElement("p",null,"Veuillez noter qu\u2019en cas d\u2019endommagement de la salle, la responsabilit\xe9 civile de l\u2019utilisateur pourra \xeatre engag\xe9e."),r.a.createElement("p",null,"Je consens avoir pris connaissance des conditions g\xe9n\xe9rales d\u2019utilisation :"),r.a.createElement("p",null,"J\u2019accepte les conditions g\xe9n\xe9rales d\u2019utilisations et certifie sur l\u2019honneur disposer d\u2019une inscription \xe0 jour \xe0 l'Universit\xe9 de Bordeaux ainsi que d\u2019une assurance de responsabilit\xe9 civile valid\xe9e et \xe0 jour sur cette p\xe9riode (fournie lors de l\u2019inscription) :")),""!==this.state.Date&&r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("input",{id:"CheckboxCGU1",name:"CheckboxCGU1",onChange:this.toggleChange1,type:"checkbox",value:"Admin",className:"checkCGU"}),r.a.createElement("label",{for:"Checkbox1"},"J'ai lu et compris les CGU")),r.a.createElement("div",null,r.a.createElement("input",{id:"CheckboxCGU2",name:"CheckboxCGU2",onChange:this.toggleChange2,type:"checkbox",value:"Admin",className:"checkCGU"}),r.a.createElement("label",{for:"Checkbox1"},"J'accepte les conditions g\xe9n\xe9rales d'utilisations")),r.a.createElement("div",{className:"ReservationBtnCGU"},r.a.createElement(H.a,{primary:!0,onClick:this.CGUAccept},"Valider ma premi\xe8re r\xe9servation"))))))}}]),a}(r.a.Component)),M=a(29),R=(a(329),a(344)),F=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleClick=function(e,t){var a=t.index,r=n.state.activeIndex===a?-1:a;n.setState({activeIndex:r})},n.handleResa=function(){fetch("http://localhost:8080/User/1/CGU",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return n.setState({CGU:e[0].CGU},(function(){if(1===this.state.CGU)fetch("http://localhost:8080/Salles/Reserver",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({horaire:this.state.Date+" "+this.state.Horaire,idsalle:this.state.response[this.state.activeIndex.toString()].id_salle,duree:30*Number(this.state.Duree),idreservant:"1"})}),this.props.history.push({pathname:"/u-resa/HistoEtResas"});else if(0===this.state.CGU){var e=[{Date:this.state.Date,Horaire:this.state.Horaire,Fac:this.state.Fac,Batiment:this.state.Batiment,idSalle:this.state.response[this.state.activeIndex.toString()].id_salle,nomSalle:this.state.response[this.state.activeIndex.toString()].nomSalle,Duree:this.state.Duree}];this.props.history.push({pathname:"/u-resa/CGU",data:e})}else console.log("Erreur")}))}))},n.handleClick=n.handleClick.bind(Object(M.a)(n)),n.handleResa=n.handleResa.bind(Object(M.a)(n)),n.state={Date:"",Horaire:"",Duree:"",Fac:"",Batiment:"",Salle:"",response:[],activeIndex:-1,CGU:-1,profile:e.profile},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.location.data;if(void 0!==t){this.setState({Date:t[0].Date,Horaire:t[0].Horaire,Duree:t[0].Duree,Fac:t[0].Fac,Batiment:t[0].Batiment,Salle:t[0].Salle});var a=t[0].Horaire.split("H"),n=(Number(a[0])+Number(Math.trunc(30*t[0].Duree/60))+"H"+(Number(a[1])+Number(30*t[0].Duree%60))).split("H"),r=t[0].Date+" "+(Number(n[0])+Number(Math.trunc(Number(n[1])/60)))+"H"+Number(n[1])%60;"Aucune pr\xe9f\xe9rence"===t[0].Horaire?fetch("http://localhost:8080/Salles/Disponibilitesalle",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({date:t[0].Date,idsalle:t[0].Salle})}).then((function(e){return e.json()})).then((function(t){return e.setState({response:t})})):"Aucune pr\xe9f\xe9rence"===t[0].Salle?fetch("http://localhost:8080/Salles/Disponibilitehoraire",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({horaire:t[0].Date+" "+t[0].Horaire,horairefin:r})}).then((function(e){return e.json()})).then((function(t){return e.setState({response:t})})):fetch("http://localhost:8080/Salles/Disponibilite",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({horaire:t[0].Date+" "+t[0].Horaire,horairefin:r,idsalle:t[0].Salle})}).then((function(e){return e.json()})).then((function(t){return e.setState({response:t})}))}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"fillall"},r.a.createElement("section",{class:"container-fluid reserv"},r.a.createElement("div",{class:"TakeReservation"},r.a.createElement("h2",null," Propositions de r\xe9servation "),r.a.createElement("hr",{class:"separator"}),this.state.response.map((function(t,a){return r.a.createElement("div",{className:"centrageSegment"},r.a.createElement(U.a,null,r.a.createElement("div",{className:"Left"},"Salle ",t.nomSalle),r.a.createElement("div",{className:"Right"},"Salle ",t.nomSalle," disponible \xe0 partir de ",e.state.Horaire," pour ",30*e.state.Duree," minutes"),r.a.createElement(R.a,{checked:e.state.activeIndex===a,index:a,id:a,onClick:e.handleClick,label:"S\xe9lectionner"})))})),r.a.createElement("div",{class:"ReservationBtnReserver"},r.a.createElement(H.a,{primary:!0,onClick:this.handleResa},"R\xe9server")))))}}]),a}(r.a.Component),T=(a(330),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{class:"Plan"},r.a.createElement("div",null,r.a.createElement("p",null,"Ici se trouve le plan de la fac")),r.a.createElement("img",{className:"PlanImg",src:"https://www.ism.u-bordeaux.fr/IMG/jpg/plan-2.jpg",alt:"plan de la fac"}))}}]),a}(r.a.Component)),P=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("p",null,"Page not found")}}]),a}(n.Component),G=(a(165),a(346)),_=[{key:"af",value:"af",text:"Universit\xe9 de Talence"},{key:"ax",value:"ax",text:"Universit\xe9 de Pessac"},{key:"al",value:"al",text:"Universit\xe9 de Vicoire"}],I=[{key:"af",value:"af",text:"A21"},{key:"ax",value:"ax",text:"A22"},{key:"al",value:"al",text:"A29"}],w=[{key:"a",value:"a",text:"Aucune pr\xe9f\xe9rence"},{key:"af",value:"af",text:"101"},{key:"ax",value:"ax",text:"102"},{key:"ap",value:"ap",text:"105"}],q=[{key:"af",value:"1",text:"30 min"},{key:"ax",value:"2",text:"1H"},{key:"ap",value:"3",text:"1H 30 min"},{key:"al",value:"4",text:"2H"},{key:"ar",value:"5",text:"2H 30 min"},{key:"am",value:"6",text:"3H"},{key:"an",value:"7",text:"3H 30 min"},{key:"ao",value:"8",text:"4H"}],z=[{key:"a",value:"a",text:"Aucune pr\xe9f\xe9rence"},{key:"b",value:"b",text:"8H00"},{key:"c",value:"c",text:"8H30"},{key:"d",value:"d",text:"9H00"},{key:"e",value:"e",text:"9H30"},{key:"f",value:"f",text:"10H00"},{key:"g",value:"g",text:"10H30"},{key:"h",value:"h",text:"11H00"},{key:"i",value:"i",text:"11H30"},{key:"j",value:"j",text:"12H00"},{key:"k",value:"k",text:"12H30"},{key:"l",value:"l",text:"13H00"},{key:"m",value:"m",text:"13H30"},{key:"n",value:"n",text:"14H00"},{key:"o",value:"o",text:"14H30"},{key:"p",value:"p",text:"15H00"},{key:"q",value:"q",text:"15H30"},{key:"r",value:"r",text:"16H00"},{key:"s",value:"s",text:"16H30"},{key:"t",value:"t",text:"17H00"},{key:"u",value:"u",text:"17H30"}],L=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).DateChange=n.DateChange.bind(Object(M.a)(n)),n.HoraireChange=n.HoraireChange.bind(Object(M.a)(n)),n.FacChange=n.FacChange.bind(Object(M.a)(n)),n.BatimentChange=n.BatimentChange.bind(Object(M.a)(n)),n.SalleChange=n.SalleChange.bind(Object(M.a)(n)),n.testErreur=n.testErreur.bind(Object(M.a)(n)),n.EnvoieDonnee=n.EnvoieDonnee.bind(Object(M.a)(n)),n.state={Error:"erreur",Date:"",Horaire:"",Fac:"",Batiment:"",Salle:"",Duree:"",FindErreur:!1,profile:e.profile},n}return Object(c.a)(a,[{key:"EnvoieDonnee",value:function(){var e=[{Date:this.state.Date,Horaire:this.state.Horaire,Fac:this.state.Fac,Batiment:this.state.Batiment,Salle:this.state.Salle,Duree:this.state.Duree}];this.props.history.push({pathname:"/u-resa/RechercheEtReservation",data:e})}},{key:"testErreur",value:function(e){e.preventDefault(),""===this.state.Duree||""===this.state.Date||""===this.state.Horaire||""===this.state.Fac||""===this.state.Batiment||""===this.state.Salle||"Aucune pr\xe9f\xe9rence"===this.state.Horaire&&"Aucune pr\xe9f\xe9rence"===this.state.Salle?this.setState({Error:"erreurVisible"}):this.EnvoieDonnee()}},{key:"DateChange",value:function(e){this.setState({Date:e.target.value})}},{key:"HoraireChange",value:function(e){this.setState({Horaire:e.target.textContent})}},{key:"FacChange",value:function(e){this.setState({Fac:e.target.textContent})}},{key:"BatimentChange",value:function(e){this.setState({Batiment:e.target.textContent})}},{key:"SalleChange",value:function(e){this.setState({Salle:e.target.textContent})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("section",{className:"container-fluid reserv"},r.a.createElement("div",{className:"TakeReservation"},r.a.createElement("h2",null," Rechercher et r\xe9server une salle "),r.a.createElement("hr",{className:"separator"}),r.a.createElement("form",{className:"reservForm",onSubmit:this.testErreur},r.a.createElement("p",{id:"erreur_Date",className:this.state.Error},"*Champ non renseign\xe9"),r.a.createElement("p",{className:"listTitre"}," Date de ma r\xe9servation : "),r.a.createElement("input",{type:"date",className:"listD",id:"start",name:"trip-start",onChange:this.DateChange}),r.a.createElement("p",{id:"erreur_Heure",className:this.state.Error},"*Champ non renseign\xe9"),r.a.createElement("p",{className:"listTitre"}," Heure de ma r\xe9servation : "),r.a.createElement(G.a,{className:"listD",placeholder:"Aucune pr\xe9f\xe9rence",options:z,onChange:this.HoraireChange}),r.a.createElement("p",{id:"erreur_Heure",className:this.state.Error},"*Champ non renseign\xe9"),r.a.createElement("p",{className:"listTitre"}," Dur\xe9e de ma r\xe9servation : "),r.a.createElement(G.a,{className:"listD",placeholder:"Aucune pr\xe9f\xe9rence",options:q,onChange:function(t,a){var n=a.value;return e.setState({Duree:n})}}),r.a.createElement("p",{id:"erreur_University",className:this.state.Error},"*Champ non renseign\xe9"),r.a.createElement("p",{className:"listTitre"}," Mon Universit\xe9 :  "),r.a.createElement(G.a,{className:"listD",placeholder:"S\xe9lectionnez mon universit\xe9",options:_,onChange:this.FacChange}),r.a.createElement("p",{id:"erreur_Batiment",className:this.state.Error},"*Champ non renseign\xe9"),r.a.createElement("p",{className:"listTitre"}," Batiment d\xe9sir\xe9 : "),r.a.createElement(G.a,{id:"email",name:"email",htmlFor:"email",className:"listD",placeholder:"S\xe9lectionnez le batiment",options:I,onChange:this.BatimentChange}),r.a.createElement("p",{id:"erreur_Salle",className:this.state.Error},"*Champ non renseign\xe9"),r.a.createElement("p",{className:"listTitre"}," Salle : "),r.a.createElement(G.a,{className:"listD",placeholder:"S\xe9lectionnez la salle",options:w,onChange:this.SalleChange}),r.a.createElement("div",{className:"ReservationBtn"},r.a.createElement(H.a,{primary:!0},"V\xe9rifier les disponibilit\xe9s"))))))}}]),a}(r.a.Component),V=a(351),J=a(348),K=function(e){var t=e.visibility||"visible";return 0===e.content.length?r.a.createElement("div",{style:{"text-align":"center",visibility:t}},"Vous n'avez encore fait aucune r\xe9servation"):r.a.createElement(V.a,{celled:!0,striped:!0,collapsing:!0,style:{"margin-left":"auto","margin-right":"auto",visibility:t}},r.a.createElement(V.a.Header,null,r.a.createElement(V.a.Row,null,r.a.createElement(V.a.HeaderCell,null,"Date et heure"),r.a.createElement(V.a.HeaderCell,null,"Dur\xe9e"),r.a.createElement(V.a.HeaderCell,null,"Salle"),r.a.createElement(V.a.HeaderCell,null,"Annuler"))),r.a.createElement(V.a.Body,null,e.content.map((function(t,a){return r.a.createElement(V.a.Row,null,r.a.createElement(V.a.Cell,null,t.horaire),r.a.createElement(V.a.Cell,null,t.duree),r.a.createElement(V.a.Cell,null,t.nomSalle),r.a.createElement(V.a.Cell,null,r.a.createElement(H.a,{negative:!0,index:a,id:a,onClick:function(t,a,n){return e.toggleDelete(t,a,n)}},"Annuler")))}))))},W=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={visibilityHistoric:"hidden",reservations:[],historic:[],profile:e.profile,Date:"",Horaire:"",Duree:"",Fac:"",Batiment:"",Salle:""},n}return Object(c.a)(a,[{key:"toggleDelete",value:function(e,t,a){var n=t.index;console.log(a.Date,a.Horaire),fetch("http://localhost:8080/User/1/Resas/Supprimer",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({horaire_salle:a.Date+" "+a.Horaire+"_"+a.reservations[n].id_salle})})}},{key:"toggleVisibilityHistoric",value:function(){"visible"===this.state.visibilityHistoric?this.setState({visibilityHistoric:"hidden"}):this.setState({visibilityHistoric:"visible"})}},{key:"correctDate",value:function(e){var t=e;return t.forEach((function(e){var t=e.horaire.substring(14,16),a=e.horaire.substring(11,13);a=parseInt(a)+2;var n=e.horaire.substring(0,10);e.horaire=n+" "+a+":"+t})),t}},{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:8080/User/1/Resas/Historique").then((function(e){return e.json()})).then((function(t){return e.correctDate(t)})).then((function(t){return e.setState({historic:t})})),fetch("http://localhost:8080/User/1/Resas/Encours").then((function(e){return e.json()})).then((function(t){return e.correctDate(t)})).then((function(t){return e.setState({reservations:t})}));var t=this.props.location.data;void 0!==t&&this.setState({Date:t[0].Date,Horaire:t[0].Horaire,Duree:t[0].Duree,Fac:t[0].Fac,Batiment:t[0].Batiment,idSalle:t[0].idSalle,nomSalle:t[0].nomSalle})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"fillall"},""!==this.state.Date&&r.a.createElement(D.a,{success:!0,header:"R\xe9servation valid\xe9e !",content:"Votre r\xe9servation salle "+this.state.nomSalle+" ,le "+this.state.Date+" \xe0 "+this.state.Horaire+" pour "+30*this.state.Duree+" minutes a \xe9t\xe9 prise en compte. A bient\xf4t sur nos campus !"}),r.a.createElement("section",{class:"container-fluid reserv"},r.a.createElement("div",{class:"ReservationFirst"},r.a.createElement("h2",null," Mes r\xe9servations "),r.a.createElement(J.a,null),r.a.createElement(K,{content:this.state.reservations,toggleDelete:function(t,a){return e.toggleDelete(t,a)}}),r.a.createElement(J.a,null),r.a.createElement("div",{style:{textAlign:"center",marginBottom:"20px"}},r.a.createElement(H.a,{onClick:function(){return e.toggleVisibilityHistoric()}},"Voir/Cacher mon historique")),r.a.createElement(K,{content:this.state.historic,visibility:this.state.visibilityHistoric}))))}}]),a}(r.a.Component),X=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={profile:e.profile},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(y.c,null,r.a.createElement(y.a,{exact:!0,path:"/Home",component:C}),r.a.createElement(y.a,{exact:!0,path:"/",component:L}),r.a.createElement(y.a,{exact:!0,path:"/u-resa/",component:L}),r.a.createElement(y.a,{exact:!0,path:"/u-resa/Profile",render:function(t){return r.a.createElement(N,Object.assign({},t,{profile:e.state.profile}))}}),r.a.createElement(y.a,{exact:!0,path:"/u-resa/Connexion",component:B}),r.a.createElement(y.a,{exact:!0,path:"/u-resa/CGU",component:A}),r.a.createElement(y.a,{exact:!0,path:"/u-resa/RechercheEtReservation",render:function(t){return r.a.createElement(F,Object.assign({},t,{profile:e.state.profile}))}}),r.a.createElement(y.a,{exact:!0,path:"/u-resa/Plan",component:T}),r.a.createElement(y.a,{exact:!0,path:"/u-resa/RechercheSalle",render:function(t){return r.a.createElement(L,Object.assign({},t,{profile:e.state.profile}))}}),r.a.createElement(y.a,{exact:!0,path:"/u-resa/HistoEtResas",render:function(t){return r.a.createElement(W,Object.assign({},t,{profile:e.state.profile}))}}),r.a.createElement(y.a,{component:P}))}}]),a}(r.a.Component),Z=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={connected:!1,profile:{id:1,nom:"Berrouet",prenom:"Damien",photo:null}},n}return Object(c.a)(a,[{key:"connection",value:function(){this.setState({connected:!this.state.connected})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(h,{connection:this.connection,connected:this.state.connected}),r.a.createElement(X,{profile:this.state.profile}),r.a.createElement(v,null)))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(331);i.a.render(r.a.createElement(m.a,null,r.a.createElement(r.a.StrictMode,null,r.a.createElement(Z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[198,1,2]]]);
//# sourceMappingURL=main.a3f7cf09.chunk.js.map