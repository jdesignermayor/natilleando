var C=Object.defineProperty;var w=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var L=(a,t,r)=>t in a?C(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r,f=(a,t)=>{for(var r in t||(t={}))z.call(t,r)&&L(a,r,t[r]);if(w)for(var r of w(t))R.call(t,r)&&L(a,r,t[r]);return a};import{c as A,a as P,r as e,u as M,L as g,b as O,d as j,e as D,f as J,P as _,R as $,g as b,h as B,B as U}from"./vendor.1976c912.js";const W=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}};W();const k=A({name:"auth",initialState:{user:null},reducers:{login:(a,t)=>{a.user=t.payload},logout:(a,t)=>{a.user=null}}}),{login:T,logout:fe}=k.actions;var V=k.reducer,Y=P({reducer:{auth:V}});const v=({text:a="asdasd",color:t})=>{let r="";switch(t){case"primary":r="bg-primary";break;case"secondary":r="bg-white";break;default:r="bg-primary";break}return e.exports.createElement(e.exports.Fragment,null,e.exports.createElement("button",{className:`${r} ${t==="secondary"?"text-primary hover:bg-primaryLight":"text-white hover:bg-green-800"}    rounded-xl h-10 px-3 focus:ring-4`},a))};var K="/assets/Logo.8368f4d1.svg";const Z=()=>{const a=M();let t=!1;return a.pathname!=="/"?t=!0:t=!1,e.exports.createElement("div",{className:"w-full flex justify-between py-5 px-5 lg:px-64 2xl:px-96 bg-white z-50 fixed"},e.exports.createElement("div",{className:"cursor-pointer"},e.exports.createElement(g,{to:"/"},e.exports.createElement("img",{src:K,className:"App-logo",alt:"logo"}))),e.exports.createElement("div",{className:"flex gap-3"},t&&e.exports.createElement(g,{to:"/"},e.exports.createElement(v,{text:"Inicio",color:"secondary"})),e.exports.createElement(g,{to:"login"},e.exports.createElement(v,{text:"Iniciar sesi\xF3n",color:"secondary"})),e.exports.createElement(g,{to:"form"},e.exports.createElement(v,{text:"Ser miembro"}))))},S={title:"Natilleando",menuItems:[{name:"Normas",style:"primaryLight",point:"rules"},{name:"Cr\xE9ditos",style:"purple",point:"credits"},{name:"Multas e inter\xE9s",style:"orange",point:"debts"},{name:"Requisitos",style:"blueLight",point:"requirements"},{name:"Rifas y eventos",style:"pink",point:"events"},{name:"Liquidaci\xF3n",style:"money",point:"payments"}],menuData:[{title:"Requisitos",point:"requirements",subtitle:"Ingreso y ahorro",imgURL:"https://wixtzvsuyxagezjctvdb.supabase.in/storage/v1/object/public/bucket/streamline-icon-evaluate-performance-employee-2@400x400.png",items:[{label:"La inscripci\xF3n tiene un costo de $ 5.000 pesos."},{label:"El ahorro puede ser variable, pero solo ser\xE1 una sola vez al mes."},{label:"Para mantener actualizada la informaci\xF3n de los socios, se debe diligenciar el formulario de datos que hay en la app"}]},{title:"Multas e inter\xE9s",subtitle:"",imgURL:"https://wixtzvsuyxagezjctvdb.supabase.in/storage/v1/object/public/bucket/streamline-icon-overworked-employee-3@400x400.png",point:"debts",items:[{label:"En caso de no dar el ahorro entre los primeros 5 d\xEDas del mes, se cobrar\xE1 una $ 500 pesos por cada d\xEDa de retraso."},{label:"Para los cr\xE9ditos se cobrar\xE1 un 5% de inter\xE9s por mes sobre el valor de la deuda."},{label:"Las  multas como los intereses deben ser pagados al inicio de mes con la cuota del ahorro."},{label:"Los intereses ser\xE1n en un(%) porcentaje al monto de ahorro del socio."},{label:"Impulsamos la buena gesti\xF3n del dinero, as\xED que el socio que no pague as\xED sea un mes, autom\xE1ticamente ser\xE1 expulsado de la natillera."}]},{title:"Cr\xE9ditos",point:"credits",subtitle:"",imgURL:"https://wixtzvsuyxagezjctvdb.supabase.in/storage/v1/object/public/bucket/streamline-icon-work-life-balance-2@400x400.png",items:[{label:"Los cr\xE9ditos se realiza, sin exceder el monto ahorrado del socio. (revisar antig\xFCedad del socio en la natillera)"},{label:"Solo se otorgan cr\xE9dito a los socios de la natillera."},{label:"Los cr\xE9ditos se aprobar\xE1n siempre que haya dinero disponible para tal fin."},{label:"Los cr\xE9ditos solicitados por la app se gestionar\xE1 m\xE1s r\xE1pido su desembolso."}]},{title:"Rifas y eventos",point:"events",imgURL:"https://wixtzvsuyxagezjctvdb.supabase.in/storage/v1/object/public/bucket/streamline-icon-team-success-3@400x400.png",subtitle:"",items:[{label:"En caso de que alg\xFAn socio sea el afortunado ganador de la rifa mensual. Esta ser\xE1 pagada al d\xEDa siguiente del sorteo."},{label:"Socio que por alg\xFAn motivo no haya cancelado la rifa al momento del sorteo, no entrara a participar en el mismo."}]}]};var H="/assets/icon.3f1ed294.svg";const G=({labelText:a,point:t,style:r})=>{let o="";switch(r){case"primary":o="bg-primary";break;case"primaryLight":o="bg-primaryLight";break;case"purple":o="bg-purple";break;case"orange":o="bg-orange";break;case"blueLight":o="bg-blueLight";break;case"pink":o="bg-pink";break;case"money":o="bg-money";break;default:o="bg-primary";break}return e.exports.createElement(e.exports.Fragment,null,e.exports.createElement("a",{href:`#${t}`,className:`flex justify-between font-bold items-center ${o} py-4 px-2 w-full rounded-2xl h-16 focus:ring-4 border-2 border-transparent hover:border-black`,rel:"noopener"},a,e.exports.createElement("img",{src:H,alt:"icon",className:"h-6"})))},Q=a=>{const{title:t,subtitle:r,point:o,imgURL:s,items:n}=a;return e.exports.createElement("div",{className:"text-2xl 2xl:h-screen",id:`${o}`},e.exports.createElement("div",{className:"py-4"},e.exports.createElement("img",{src:s,width:"350",alt:t}),e.exports.createElement("h1",{className:"text-6xl font-bold py-4 font-recoleta"},t),r!=null?r:e.exports.createElement("p",{className:"text-3xl text-green-600"},r)),e.exports.createElement("ol",{className:"list-disc px-6 space-y-4"},n.map(({label:c},l)=>e.exports.createElement("li",{key:l},c))))},X=()=>e.exports.createElement("div",{className:"text-2xl  2xl:h-screen",id:"rules"},e.exports.createElement("div",{className:"py-4"},e.exports.createElement("img",{src:"https://wixtzvsuyxagezjctvdb.supabase.in/storage/v1/object/public/bucket/streamline-icon-leadership-1@400x400.png",width:"350",alt:""}),e.exports.createElement("h1",{className:"text-6xl font-bold py-4 font-recoleta"},"Simples normas")),e.exports.createElement("p",null,"Antes de iniciar con las normas es importante dejar claro, esta es una natillera exclusivamente familiar y/o amigos de confianza, no tiene fines lucrativos para ninguna parte, y fue desarrollada solo con el fin de integrar de alguna manera a la familia o persona independiente en un ahorro navide\xF1o. Es administrada por personas responsables."),e.exports.createElement("p",{className:"mt-5"},"si desea hacer parte de este mundo de ahorro familiar bienvenido a natilleando.")),ee=()=>{const{title:a}=S;return e.exports.createElement("div",{className:"text-2xl",id:"payments"},e.exports.createElement("img",{src:"https://wixtzvsuyxagezjctvdb.supabase.in/storage/v1/object/public/bucket/streamline-icon-becoming-rich-2@400x400.png",width:"350",alt:""}),e.exports.createElement("h1",{className:"text-6xl font-bold py-4 font-recoleta"},"Liquidaci\xF3n"),e.exports.createElement("p",null,"la natillera ser\xE1 liquidada el 1 de diciembre de cada a\xF1o, y se entregar\xE1 a cada socio, el ahorro que haya hecho durante los 11 meses, los intereses que correspondan al monto del ahorro."),e.exports.createElement("p",{className:"mt-5"},"Estas normas podr\xE1n cambiar de acuerdo a las nuevas Estipulaciones de",e.exports.createElement("span",{className:"font-bold"},a),"."))};var q="/assets/memberIcon.1276810e.svg",te="/assets/pelado.4a3e24c0.png";const ae=()=>e.exports.createElement("div",{className:"text-2xl"},e.exports.createElement("img",{src:te,width:"250",alt:"No te quedes pelado"}),e.exports.createElement("h1",{className:"text-4xl font-bold py-4 font-recoleta"},"\xA1No te quedes pelado en diciembre!"),e.exports.createElement("p",null,"\xDAnete al equipo y crezcamos juntos."),e.exports.createElement(g,{to:"form"},e.exports.createElement("button",{className:"mt-5 flex items-center justify-center w-full bg-primary text-white text-xl py-3 px-5 rounded-2xl focus:ring-4"},e.exports.createElement("i",{className:"pr-2"},e.exports.createElement("img",{src:q,className:"h-6",alt:""})),"Quiero ser miembro")));var re="/assets/imgpersonal.e9315c1d.jpg";const se=()=>e.exports.createElement("div",{className:"flex bottom-0 w-full bg-black text-white gap-4 items-center p-5"},e.exports.createElement("div",null,e.exports.createElement("img",{src:re,className:"rounded-full w-40 lg:w-10",alt:""})),e.exports.createElement("div",null,e.exports.createElement("p",{className:"text-sm"},"\u{1F44B} \xA1Hola! La plataforma fue creada por mi persona"," ",e.exports.createElement("a",{className:"underline text-primaryLight",href:"https://www.linkedin.com/in/joseacevedodev/"},"Jose Luis Pulgar\xEDn"),", si te gusta la iniciativa por favor no dudes en compartirlo con tus familiares de confianza o amigos cercanos \u{1F495}."))),oe=()=>{const{title:a,menuItems:t,menuData:r}=S;return e.exports.createElement(e.exports.Fragment,null,e.exports.createElement("div",{className:"p-5 lg:px-96"},e.exports.createElement("div",{className:"pt-20 items-center justify-center text-start 2xl:px-[30%]"},e.exports.createElement("div",{className:"flex gap-8 items-center h-screen"},e.exports.createElement("div",null,e.exports.createElement("h1",{className:"text-7xl font-bold font-recoleta"},"Ahorra sin perder dinero"),e.exports.createElement("p",{className:"text-2xl"},e.exports.createElement("span",{className:"font-bold"},a)," es una simple natillera para miembros exclusivos que tiene como prop\xF3sito crear un ahorro programado a trav\xE9s del tiempo con un porcentaje de rentabilidad anual."),e.exports.createElement("br",null),e.exports.createElement("div",{className:"grid grid-cols-2 gap-2"},t.map(({name:o,style:s,point:n},c)=>{const l={labelText:o,point:n,style:s};return e.exports.createElement(G,f({key:c},l))})))),e.exports.createElement("div",{className:"mt-48 grid gap-48"},e.exports.createElement(X,null),r.map((o,s)=>e.exports.createElement(Q,f({key:s},o))),e.exports.createElement(ee,null),e.exports.createElement(ae,null)))),e.exports.createElement(se,null))},ne="https://wixtzvsuyxagezjctvdb.supabase.co",le="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQyMTcwNTc2LCJleHAiOjE5NTc3NDY1NzZ9.hcTdgFjKbSIUD4ZdTsPxlj6qOotqWSVZK-s38VMv5jY",x=O(ne,le),ie=3,I=()=>{const[a,t]=e.exports.useState([]),[r,o]=e.exports.useState([]),s=({name:l,surname:i,document_number:m,photo_url:p,payment_method:E,referer_id:d,whatsapp_number:h})=>new Promise((y,N)=>{x.from("users").insert({name:l,surname:i,document_number:m,photo_url:p,payment_method:E,referer_id:d,whatsapp_number:h}).single().then(({data:u,error:F})=>{y([u,F])}).catch(u=>{N(u)})}),n=async()=>await x.auth.signIn({provider:"facebook"});return e.exports.useEffect(()=>{x.from("payment_methods").then(({data:l})=>{t(l)}),x.from("users").select("id,name").eq("role",ie).then(({data:l})=>{o(l)})},[]),{supabase:x,paymentMethods:a,memberList:r,setProspect:s,signInWithFacebook:n,signInWithEmail:()=>{x.auth.signIn(data)}}};var ce="/assets/3d-flame-rocket-2.58333acb.png";const me=()=>e.exports.createElement("div",{className:"flex  justify-center min-w-screen h-screen animated transition absolute top-20 mx-auto p-5  shadow-lg rounded-md bg-white fade-in"},e.exports.createElement("div",{className:"mt-3 text-center flex-col justify-center object-center items-center"},e.exports.createElement("section",{class:"hero container max-w-screen-lg mx-auto pb-10"},e.exports.createElement("img",{src:ce,className:"mx-auto",width:"150",alt:"Success"})),e.exports.createElement("h3",{className:"text-3xl leading-6 font-medium text-gray-900"},"\xA1Excelente!"),e.exports.createElement("div",{className:"mt-2 px-7 py-3"},e.exports.createElement("p",{className:"text-2xl text-gray-500"},"Solamente espera la aprobaci\xF3n y nos comunicaremos contigo mediante WhatsApp en m\xE1ximo 24 horas.")))),pe=()=>{const[a,t]=e.exports.useState(!1),[r,o]=e.exports.useState(!1),{paymentMethods:s,memberList:n,setProspect:c}=I(),l=j({initialValues:{name:"",surname:"",document_number:"",payment_method:"",referer_id:"",whatsapp_number:""},onSubmit:({name:i,surname:m,document_number:p,payment_method:E,referer_id:d,whatsapp_number:h})=>{t(!0),c({name:i,surname:m,document_number:p,payment_method:E,referer_id:d,whatsapp_number:h}).then(y=>{const[N,u]=y;t(!1),u!=null?(u.code,o(!1)):o(!0)})}});return e.exports.createElement(e.exports.Fragment,null,r?e.exports.createElement(me,null):null,";",e.exports.createElement("div",{className:"grid p-5 gap-5 mt-28  lg:px-[25%]  2xl:px-[30%]"},e.exports.createElement("div",null,e.exports.createElement("h1",{className:"text-6xl font-bold font-recoleta"},"Solicitud de ingreso"),e.exports.createElement("p",null,"Al llenar el formulario est\xE1s solicitando el ingreso autom\xE1ticamente a la natillera.")),e.exports.createElement("form",{onSubmit:l.handleSubmit,className:"grid gap-5"},e.exports.createElement("div",{className:"grid 2xl:grid-cols-2 gap-2"},e.exports.createElement("div",{className:"grid gap-2"},e.exports.createElement("label",{id:"name",className:"font-bold"},"Nombres"),e.exports.createElement("input",{type:"text",name:"name",onChange:l.handleChange,className:"h-10 w-full focus:ring-4 transition outline-0 focus:border-primary border-2 rounded-lg focus:bg-primaryLight p-2",placeholder:"Ejemplo: Fernanda",required:!0})),e.exports.createElement("div",{className:"grid gap-2"},e.exports.createElement("label",{id:"name",className:"font-bold"},"Apellidos"),e.exports.createElement("input",{type:"text",name:"surname",onChange:l.handleChange,className:"h-10 w-full focus:ring-4 transition outline-0 focus:border-primary border-2 rounded-lg focus:bg-primaryLight p-2",placeholder:"Ejemplo: Pulgarin",required:!0}))),e.exports.createElement("div",{className:"grid 2xl:grid-cols-2 gap-2"},e.exports.createElement("div",{className:"grid gap-2  "},e.exports.createElement("label",{id:"name",className:"font-bold"},"C\xE9dula"),e.exports.createElement("input",{type:"number",name:"document_number",onChange:l.handleChange,className:"h-10 w-full focus:ring-4 transition outline-0 focus:border-primary border-2 rounded-lg focus:bg-primaryLight p-2",pattern:"\\d*",placeholder:"Ejemplo: 3042222112",required:!0})),e.exports.createElement("div",{className:"grid gap-2  "},e.exports.createElement("label",{id:"name",className:"font-bold"},"Whatsapp"),e.exports.createElement("input",{type:"number",name:"whatsapp_number",onChange:l.handleChange,className:"h-10 w-full focus:ring-4 transition outline-0 focus:border-primary border-2 rounded-lg focus:bg-primaryLight p-2",pattern:"\\d*",placeholder:"Ejemplo: 3042222112",required:!0}))),e.exports.createElement("div",{className:"grid 2xl:grid-cols-2 gap-2"},e.exports.createElement("div",{className:"grid gap-2"},e.exports.createElement("label",{id:"name",className:"font-bold"},"Medio de pago"),e.exports.createElement("select",{name:"payment_method",onChange:l.handleChange,id:"",className:"h-10 w-full focus:ring-4 transition outline-0 focus:border-primary border-2 rounded-lg focus:bg-primaryLight p-2",required:!0},e.exports.createElement("option",{value:""},"Selecciona medio de pago"),s.map(({id:i,name:m})=>e.exports.createElement("option",{key:i,value:i},m)))),e.exports.createElement("div",{className:"grid gap-2"},e.exports.createElement("label",{id:"name",className:"font-bold"},"Recomendado por"),e.exports.createElement("select",{name:"referer_id",onChange:l.handleChange,id:"",className:"h-10 w-full focus:ring-4 transition outline-0 focus:border-primary border-2 rounded-lg focus:bg-primaryLight p-2",required:!0},e.exports.createElement("option",{value:""},"Selecciona la persona que te recomend\xF3"),n.map(({id:i,name:m})=>e.exports.createElement("option",{key:i,value:i},m))))),e.exports.createElement("div",null,e.exports.createElement("button",{className:`flex items-center justify-center w-full bg-primary text-white py-3 px-5 rounded-2xl focus:ring-4 ${a?"opacity-50 cursor-not-allowed":""}`,type:"submit",disabled:a},e.exports.createElement("i",{className:"pr-2"},e.exports.createElement("img",{src:q,className:"h-6",alt:""})),"Enviar solicitud")))))},de=()=>{e.exports.useState(null);const[a,t]=e.exports.useState(!1),[r,o]=e.exports.useState({isError:!1,messageError:""}),{supabase:s}=I(),{isError:n,messageError:c}=r;D();const l=J(),i=j({initialValues:{email:"",password:""},onSubmit:async m=>{const{user:p,session:E,error:d}=await s.auth.signIn(m);d&&o({isError:!0,messageError:d.message}),p&&(o({isError:!1,messageError:""}),l(T(f({},p))))}});return e.exports.createElement("div",{className:"grid p-5 gap-5 lg:px-[25%] 2xl:px-[30%]"},e.exports.createElement("h1",{className:"text-6xl font-bold font-recoleta mt-28"},"Iniciar sesi\xF3n"),e.exports.createElement("form",{onSubmit:i.handleSubmit,className:"grid gap-3"},e.exports.createElement("div",{className:"grid gap-2"},e.exports.createElement("label",{id:"email",className:"font-bold"},"Correo electr\xF3nico"),e.exports.createElement("input",{type:"email",name:"email",onChange:i.handleChange,className:"h-10 w-full focus:ring-4 transition outline-0 focus:border-primary border-2 rounded-lg focus:bg-primaryLight p-2",placeholder:"Ingresa tu correo electr\xF3nico.",required:!0})),e.exports.createElement("div",{className:"grid gap-2"},e.exports.createElement("label",{id:"name",className:"font-bold"},"Contrase\xF1a"),e.exports.createElement("input",{type:"password",name:"password",onChange:i.handleChange,className:"h-10 w-full focus:ring-4 transition outline-0 focus:border-primary border-2 rounded-lg focus:bg-primaryLight p-2",placeholder:"Ingresa tu contrasena.",required:!0})),e.exports.createElement("div",null,e.exports.createElement("a",{href:"#",className:"text-primary"},"Recuperar Contrase\xF1a")),n&&e.exports.createElement("p",null,c),e.exports.createElement("button",{className:`flex items-center justify-center w-full bg-primary text-white text-base py-3 px-5 rounded-2xl focus:ring-4 
          ${a&&"opacity-50 cursor-not-allowed"}`,type:"submit",disabled:a},"Iniciar sesi\xF3n")))},ue=()=>e.exports.createElement("div",{className:"p-5 grid items-center gap-4"},e.exports.createElement("div",null,e.exports.createElement("p",{className:"text-2xl"},"\u{1F44B} \xA1Bienvenido(a)! ",e.exports.createElement("span",{className:"font-bold"},"Jose"))),e.exports.createElement("div",null,e.exports.createElement("h1",{className:"text-5xl font-bold"},"Resumen"),e.exports.createElement("p",null,"Aqui se ven reflejados los avances y resultados de tu perfil en"," ",e.exports.createElement("span",{className:"font-bold"},"Natilleando")," "))),xe=()=>e.exports.createElement("div",null,e.exports.createElement("p",null,"Not found page..."));function ge(){return e.exports.createElement(e.exports.Fragment,null,e.exports.createElement(_,{store:Y},e.exports.createElement(Z,null),e.exports.createElement($,null,e.exports.createElement(b,{path:"/",element:e.exports.createElement(oe,null)}),e.exports.createElement(b,{path:"/dashboard",element:e.exports.createElement(ue,null)}),e.exports.createElement(b,{path:"/form",element:e.exports.createElement(pe,null)}),e.exports.createElement(b,{path:"/login",element:e.exports.createElement(de,null)}),e.exports.createElement(b,{path:"*",element:e.exports.createElement(xe,null)}))))}B.render(e.exports.createElement(U,null,e.exports.createElement(ge,null)),document.getElementById("root"));
