var q=Object.defineProperty;var v=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var w=(r,t,a)=>t in r?q(r,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[t]=a,L=(r,t)=>{for(var a in t||(t={}))k.call(t,a)&&w(r,a,t[a]);if(v)for(var a of v(t))F.call(t,a)&&w(r,a,t[a]);return r};import{c as j,R as A,r as e,u as R,L as g,a as S,b as P,d as b,e as M,B as _}from"./vendor.a189133a.js";const z=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=a(o);fetch(o.href,n)}};z();const O="https://wixtzvsuyxagezjctvdb.supabase.co",$="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQyMTcwNTc2LCJleHAiOjE5NTc3NDY1NzZ9.hcTdgFjKbSIUD4ZdTsPxlj6qOotqWSVZK-s38VMv5jY",p=j(O,$),D=A.createContext(),J=({children:r})=>{const[t,a]=e.exports.useState(),[s,o]=e.exports.useState(!0);e.exports.useEffect(()=>{var c;const l=p.auth.session();a((c=l==null?void 0:l.user)!=null?c:null),o(!1);const{data:i}=p.auth.onAuthStateChange(async(m,u)=>{var d;a((d=u==null?void 0:u.user)!=null?d:null),o(!1)});return()=>{i==null||i.unsubscribe()}},[]);const n={signUp:l=>p.auth.signUp(l),signIn:l=>p.auth.signIn(l),signOut:()=>p.auth.signOut(),user:t};return e.exports.createElement(D.Provider,{value:n},!s&&r)},h=({text:r="asdasd",color:t})=>{let a="";switch(t){case"primary":a="bg-primary";break;case"secondary":a="bg-primaryLight";break;default:a="bg-primary";break}return e.exports.createElement(e.exports.Fragment,null,e.exports.createElement("button",{className:`${a} ${t==="secondary"?"text-primary":"text-white"}   hover:bg-green-700 rounded-xl h-10 px-2 focus:ring-4`},r))};var B="/assets/Logo.8368f4d1.svg";const U=()=>{const r=R();let t=!1;return r.pathname!=="/"?t=!0:t=!1,e.exports.createElement("div",{className:"w-full flex justify-between p-5 bg-white z-50"},e.exports.createElement("div",{className:"cursor-pointer"},e.exports.createElement(g,{to:"/"},e.exports.createElement("img",{src:B,className:"App-logo",alt:"logo"}))),e.exports.createElement("div",{className:"flex gap-2"},t&&e.exports.createElement(g,{to:"/"},e.exports.createElement(h,{text:"Inicio",color:"secondary"})),e.exports.createElement(g,{to:"login"},e.exports.createElement(h,{text:"Iniciar sesi\xF3n",color:"secondary"})),e.exports.createElement(g,{to:"form"},e.exports.createElement(h,{text:"Ser miembro"}))))},C={title:"Natilleando",menuItems:[{name:"Normas",style:"primaryLight",point:"rules"},{name:"Cr\xE9ditos",style:"purple",point:"credits"},{name:"Multas e inter\xE9s",style:"orange",point:"debts"},{name:"Requisitos",style:"blueLight",point:"requirements"},{name:"Rifas y eventos",style:"pink",point:"events"},{name:"Liquidaci\xF3n",style:"money",point:"payments"}],menuData:[{title:"Requisitos",point:"requirements",subtitle:"Ingreso y ahorro",items:[{label:"La inscripci\xF3n tiene un costo de $ 5.000 pesos."},{label:"El ahorro puede ser variable, pero solo ser\xE1 una sola vez al mes."},{label:"Para mantener actualizada la informaci\xF3n de los socios, se debe diligenciar el formulario de datos que hay en la app"}]},{title:"Multas e inter\xE9s",subtitle:"",point:"debts",items:[{label:"En caso de no dar el ahorro entre los primeros 5 d\xEDas del mes, se cobrar\xE1 una $ 500 pesos por cada d\xEDa de retraso."},{label:"Para los cr\xE9ditos se cobrar\xE1 un 5% de inter\xE9s por mes sobre el valor de la deuda."},{label:"Las  multas como los intereses deben ser pagados al inicio de mes con la cuota del ahorro."},{label:"Los intereses ser\xE1n en un(%) porcentaje al monto de ahorro del socio."}]},{title:"Cr\xE9ditos",point:"credits",subtitle:"",items:[{label:"Los cr\xE9ditos se realiza, sin exceder el monto ahorrado del socio. (revisar antig\xFCedad del socio en la natillera)"},{label:"Solo se otorgan cr\xE9dito a los socios de la natillera."},{label:"Los cr\xE9ditos se aprobar\xE1n siempre que haya dinero disponible para tal fin."},{label:"Los cr\xE9ditos solicitados por la app se gestionar\xE1 m\xE1s r\xE1pido su desembolso."}]},{title:"Rifas y eventos",point:"events",subtitle:"",items:[{label:"En caso de que alg\xFAn socio sea el afortunado ganador de la rifa mensual. Esta ser\xE1 pagada al d\xEDa siguiente del sorteo."},{label:"Socio que por alg\xFAn motivo no haya cancelado la rifa al momento del sorteo, no entrara a participar en el mismo."}]}]};var T="/assets/icon.3f1ed294.svg";const V=({labelText:r,point:t,style:a})=>{let s="";switch(a){case"primary":s="bg-primary";break;case"primaryLight":s="bg-primaryLight";break;case"purple":s="bg-purple";break;case"orange":s="bg-orange";break;case"blueLight":s="bg-blueLight";break;case"pink":s="bg-pink";break;case"money":s="bg-money";break;default:s="bg-primary";break}return e.exports.createElement(e.exports.Fragment,null,e.exports.createElement("a",{href:`#${t}`,className:`flex justify-between font-bold items-center ${s} py-4 px-2 w-full rounded-2xl h-16 focus:ring-4`,rel:"noopener"},r,e.exports.createElement("img",{src:T,alt:"icon",className:"h-6"})))},Y=({title:r,subtitle:t,point:a,itemsList:s})=>e.exports.createElement("div",{className:"text-2xl",id:`${a}`},e.exports.createElement("div",{className:" py-4"},e.exports.createElement("h1",{className:"text-4xl font-bold "},r),t!=null?t:e.exports.createElement("p",{className:"text-3xl text-green-600"},t)),e.exports.createElement("ol",{className:"list-disc px-6 space-y-4"},s.map(({label:o},n)=>e.exports.createElement("li",{key:n},o)))),K=()=>e.exports.createElement(e.exports.Fragment,null,e.exports.createElement("div",{className:"text-2xl",id:"rules"},e.exports.createElement("h1",{className:"text-4xl font-bold py-4"},"Normas"),e.exports.createElement("p",null,"Antes de iniciar con las normas es importante dejar claro, esta es una natillera exclusivamente familiar y/o amigos de confianza, no tiene fines lucrativos para ninguna parte, y fue desarrollada solo con el fin de integrar de alguna manera a la familia o persona independiente en un ahorro navide\xF1o. Es administrada por personas responsables."),e.exports.createElement("p",{className:"mt-5"},"si desea hacer parte de este mundo de ahorro familiar bienvenido a natilleando."))),W=()=>{const{title:r}=C;return e.exports.createElement("div",{className:"text-2xl",id:"payments"},e.exports.createElement("h1",{className:"text-4xl font-bold py-4"},"Liquidaci\xF3n"),e.exports.createElement("p",null,"la natillera ser\xE1 liquidada el 1 de diciembre de cada a\xF1o, y se entregar\xE1 a cada socio, el ahorro que haya hecho durante los 11 meses, los intereses que correspondan al monto del ahorro."),e.exports.createElement("p",{className:"mt-5"},"Estas normas podr\xE1n cambiar de acuerdo a las nuevas Estipulaciones de",e.exports.createElement("span",{className:"font-bold"},r),"."))};var I="/assets/memberIcon.1276810e.svg",Z="/assets/pelado.4a3e24c0.png";const H=()=>e.exports.createElement("div",{className:"text-2xl"},e.exports.createElement("img",{src:Z,className:"w-full lg:w-72 h-full",alt:""}),e.exports.createElement("h1",{className:"text-4xl font-bold py-4"},"\xA1No te quedes pelado en diciembre!"),e.exports.createElement("p",null,"\xDAnete al equipo y crezcamos juntos."),e.exports.createElement(g,{to:"form"},e.exports.createElement("button",{className:"mt-5 flex items-center justify-center w-full bg-primary text-white text-2xl py-3 px-5 rounded-2xl focus:ring-4"},e.exports.createElement("i",{className:"pr-2"},e.exports.createElement("img",{src:I,className:"h-6",alt:""})),"Quiero ser miembro")));var G="/assets/imgpersonal.e9315c1d.jpg";const Q=()=>e.exports.createElement("div",{className:"flex bottom-0 w-full bg-black text-white gap-4 items-center p-5"},e.exports.createElement("div",null,e.exports.createElement("img",{src:G,className:"rounded-full w-40 lg:w-10",alt:""})),e.exports.createElement("div",null,e.exports.createElement("p",{className:"text-sm"},"\u{1F44B} \xA1Hola! La plataforma fue creada por mi persona"," ",e.exports.createElement("a",{className:"underline text-primaryLight",href:"https://www.linkedin.com/in/joseacevedodev/"},"Jose Luis Pulgar\xEDn"),", si te gusta la iniciativa por favor no dudes en compartirlo con tus familiares de confianza o amigos cercanos \u{1F495}."))),X=()=>{const{title:r,menuItems:t,menuData:a}=C;return e.exports.createElement(e.exports.Fragment,null,e.exports.createElement("div",{className:"p-5 lg:px-96"},e.exports.createElement("div",{className:"pt-20 grid gap-5"},e.exports.createElement("h1",{className:"text-7xl font-bold"},"La natillera familiar"),e.exports.createElement("p",{className:"text-2xl"},e.exports.createElement("span",{className:"font-bold"},r)," es una simple natillera para miembros exclusivos que tiene como prop\xF3sito crear un ahorro programado a trav\xE9s del tiempo con un porcentaje de rentabilidad anual."),e.exports.createElement("hr",null),e.exports.createElement("div",{className:"w-full grid grid-cols-2  gap-2"},t.map(({name:s,style:o,point:n},l)=>{const i={labelText:s,point:n,style:o};return e.exports.createElement(V,L({key:l},i))})),e.exports.createElement("div",{className:"grid gap-40 mt-48"},e.exports.createElement("div",null,e.exports.createElement(K,null)),a.map((s,o)=>e.exports.createElement(Y,{key:o,title:s.title,point:s.point,subtitle:s.subtitle,itemsList:s.items})),e.exports.createElement("div",null,e.exports.createElement(W,null)),e.exports.createElement("div",null,e.exports.createElement(H,null))))),e.exports.createElement(Q,null))},ee=2,te=()=>{const[r,t]=e.exports.useState([]),[a,s]=e.exports.useState([]),o=({name:n,surname:l,document_number:i,photo_url:c,payment_method:m,referer_id:u,whatsapp_number:d})=>new Promise((f,E)=>{p.from("users").insert({name:n,surname:l,document_number:i,photo_url:c,payment_method:m,referer_id:u,whatsapp_number:d}).single().then(({data:x,error:y})=>{f([x,y])}).catch(x=>{E(x)})});return e.exports.useEffect(()=>{p.from("payment_methods").then(({data:n})=>{t(n)}),p.from("users").select("id,name").eq("role",ee).then(({data:n})=>{s(n)})},[]),{paymentMethods:r,memberList:a,setProspect:o}};var ae="/assets/3d-flame-rocket-2.58333acb.png";const re=()=>e.exports.createElement("div",{className:"flex  justify-center min-w-screen h-screen animated transition absolute top-20 mx-auto p-5  shadow-lg rounded-md bg-white fade-in"},e.exports.createElement("div",{className:"mt-3 text-center flex-col justify-center object-center items-center"},e.exports.createElement("section",{class:"hero container max-w-screen-lg mx-auto pb-10"},e.exports.createElement("img",{src:ae,className:"mx-auto",width:"150",alt:"Success"})),e.exports.createElement("h3",{className:"text-3xl leading-6 font-medium text-gray-900"},"\xA1Excelente!"),e.exports.createElement("div",{className:"mt-2 px-7 py-3"},e.exports.createElement("p",{className:"text-2xl text-gray-500"},"Solamente espera la aprobaci\xF3n y nos comunicaremos contigo mediante WhatsApp en m\xE1ximo 24 horas.")))),se=()=>{const[r,t]=e.exports.useState(!1),[a,s]=e.exports.useState(!1),{paymentMethods:o,memberList:n,setProspect:l}=te(),i=S({initialValues:{name:"",surname:"",document_number:"",payment_method:"",referer_id:"",whatsapp_number:""},onSubmit:({name:c,surname:m,document_number:u,payment_method:d,referer_id:f,whatsapp_number:E})=>{t(!0),l({name:c,surname:m,document_number:u,payment_method:d,referer_id:f,whatsapp_number:E}).then(x=>{const[y,N]=x;t(!1),N!=null?(N.code,s(!1)):s(!0)})}});return e.exports.createElement(e.exports.Fragment,null,a?e.exports.createElement(re,null):null,";",e.exports.createElement("div",{className:"flex flex-col p-5 gap-5"},e.exports.createElement("h1",{className:"text-4xl font-bold py-4"},"Solicitud de ingreso"),e.exports.createElement("form",{onSubmit:i.handleSubmit,className:"grid gap-3"},e.exports.createElement("div",{className:"grid gap-2"},e.exports.createElement("label",{id:"name",className:"font-bold"},"Nombres"),e.exports.createElement("input",{type:"text",name:"name",onChange:i.handleChange,className:"h-10 w-full focus:ring-4 transition outline-0 focus:border-primary border-2 rounded-lg focus:bg-primaryLight p-2",placeholder:"",required:!0})),e.exports.createElement("div",{className:"grid gap-2"},e.exports.createElement("label",{id:"name",className:"font-bold"},"Apellidos"),e.exports.createElement("input",{type:"text",name:"surname",onChange:i.handleChange,className:"h-10 w-full focus:ring-4 transition outline-0 focus:border-primary border-2 rounded-lg focus:bg-primaryLight p-2",placeholder:"",required:!0})),e.exports.createElement("div",{className:"grid gap-2  "},e.exports.createElement("label",{id:"name",className:"font-bold"},"C\xE9dula"),e.exports.createElement("input",{type:"number",name:"document_number",onChange:i.handleChange,className:"h-10 w-full focus:ring-4 transition outline-0 focus:border-primary border-2 rounded-lg focus:bg-primaryLight p-2",pattern:"\\d*",placeholder:"",required:!0})),e.exports.createElement("div",{className:"grid gap-2  "},e.exports.createElement("label",{id:"name",className:"font-bold"},"Whatsapp"),e.exports.createElement("input",{type:"number",name:"whatsapp_number",onChange:i.handleChange,className:"h-10 w-full focus:ring-4 transition outline-0 focus:border-primary border-2 rounded-lg focus:bg-primaryLight p-2",pattern:"\\d*",placeholder:"",required:!0})),e.exports.createElement("div",{className:"grid gap-2"},e.exports.createElement("label",{id:"name",className:"font-bold"},"Medio de pago"),e.exports.createElement("select",{name:"payment_method",onChange:i.handleChange,id:"",className:"h-10 w-full focus:ring-4 transition outline-0 focus:border-primary focus:border-2 rounded-lg focus:bg-primaryLight p-2",required:!0},e.exports.createElement("option",{value:""},"Selecciona"),o.map(({id:c,name:m})=>e.exports.createElement("option",{key:c,value:c},m)))),e.exports.createElement("div",{className:"grid gap-2"},e.exports.createElement("label",{id:"name",className:"font-bold"},"Recomendado por"),e.exports.createElement("select",{name:"referer_id",onChange:i.handleChange,id:"",className:"h-10 w-full focus:ring-4 transition outline-0 focus:border-primary focus:border-2 rounded-lg focus:bg-primaryLight p-2",required:!0},e.exports.createElement("option",{value:""},"Selecciona"),n.map(({id:c,name:m})=>e.exports.createElement("option",{key:c,value:c},m)))),e.exports.createElement("div",null,e.exports.createElement("button",{className:`flex items-center justify-center w-full bg-primary text-white text-2xl py-3 px-5 rounded-2xl focus:ring-4 ${r?"opacity-50 cursor-not-allowed":""}`,type:"submit",disabled:r},e.exports.createElement("i",{className:"pr-2"},e.exports.createElement("img",{src:I,className:"h-6",alt:""})),"Enviar solicitud")))))},oe=()=>{const[r,t]=e.exports.useState(!1);e.exports.useState(!1);const a=S({initialValues:{document_number:"",password:""},onSubmit:({document_number:s,password:o})=>{}});return e.exports.createElement("div",{className:"flex flex-col p-5 gap-5"},e.exports.createElement("h1",{className:"text-4xl font-bold py-4"},"Iniciar sesion"),e.exports.createElement("form",{onSubmit:a.handleSubmit,className:"grid gap-3"},e.exports.createElement("div",{className:"grid gap-2"},e.exports.createElement("label",{id:"document_number",className:"font-bold"},"Cedula"),e.exports.createElement("input",{type:"text",name:"document_number",onChange:a.handleChange,className:"h-10 w-full focus:ring-4 transition outline-0 focus:border-primary border-2 rounded-lg focus:bg-primaryLight p-2",placeholder:"Ingresa tu numero de cedula.",required:!0})),e.exports.createElement("div",{className:"grid gap-2"},e.exports.createElement("label",{id:"name",className:"font-bold"},"Contrase\xF1a"),e.exports.createElement("input",{type:"password",name:"password",onChange:a.handleChange,className:"h-10 w-full focus:ring-4 transition outline-0 focus:border-primary border-2 rounded-lg focus:bg-primaryLight p-2",placeholder:"Ingresa tu contrasena",required:!0})),e.exports.createElement("div",null,e.exports.createElement("a",{href:"#",className:"text-primary"},"Recuperar Contrase\xF1a")),e.exports.createElement("button",{className:`flex items-center justify-center w-full bg-primary text-white text-2xl py-3 px-5 rounded-2xl focus:ring-4 
          ${r&&"opacity-50 cursor-not-allowed"}`,type:"submit",disabled:r},"Iniciar sesi\xF3n")))},ne=()=>e.exports.createElement(e.exports.Fragment,null,e.exports.createElement("div",null,"dashboard...")),le=()=>e.exports.createElement("div",null,e.exports.createElement("p",null,"Not found page..."));function ie(){return e.exports.createElement(e.exports.Fragment,null,e.exports.createElement(J,null,e.exports.createElement(U,null),e.exports.createElement(P,null,e.exports.createElement(b,{path:"/",element:e.exports.createElement(X,null)}),e.exports.createElement(b,{path:"/dashboard",element:e.exports.createElement(ne,null)}),e.exports.createElement(b,{path:"/form",element:e.exports.createElement(se,null)}),e.exports.createElement(b,{path:"/login",element:e.exports.createElement(oe,null)}),e.exports.createElement(b,{path:"*",element:e.exports.createElement(le,null)}))))}M.render(e.exports.createElement(_,null,e.exports.createElement(ie,null)),document.getElementById("root"));
