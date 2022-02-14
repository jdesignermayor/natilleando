var C=Object.defineProperty;var v=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var N=(a,t,r)=>t in a?C(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r,u=(a,t)=>{for(var r in t||(t={}))z.call(t,r)&&N(a,r,t[r]);if(v)for(var r of v(t))M.call(t,r)&&N(a,r,t[r]);return a};import{c as P,a as R,r as e,u as _,L as x,M as A,b as O,d as w,T as g,F as L,I as S,S as k,e as I,f as J,g as T,h as U,i as $,P as D,R as B,j as b,k as W,B as V}from"./vendor.32443f7d.js";const Y=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}};Y();const G=P({name:"auth",initialState:{user:null},reducers:{login:(a,t)=>{a.user=t.payload},logout:(a,t)=>{a.user=null}}});var K=G.reducer,Z=R({reducer:{auth:K}});const h=({text:a="asdasd",color:t})=>{let r="";switch(t){case"primary":r="bg-primary";break;case"secondary":r="bg-white";break;default:r="bg-primary";break}return e.exports.createElement(e.exports.Fragment,null,e.exports.createElement("button",{className:`${r} ${t==="secondary"?"text-primary hover:bg-primaryLight":"text-white hover:bg-green-800"}    rounded-xl h-10 px-3 focus:ring-4`},a))};var H="/assets/Logo.8368f4d1.svg";const Q=()=>{const a=_();let t=!1;return a.pathname!=="/"?t=!0:t=!1,e.exports.createElement("div",{className:"w-full flex items-center justify-between py-3 px-3 lg:px-64 2xl:px-96 bg-white z-50 fixed backdrop-filter backdrop-blur-lg bg-opacity-70"},e.exports.createElement("div",{className:"cursor-pointer"},e.exports.createElement(x,{to:"/"},e.exports.createElement("img",{src:H,className:"App-logo",alt:"logo"}))),e.exports.createElement("div",{className:"flex gap-3"},t&&e.exports.createElement(x,{to:"/"},e.exports.createElement(h,{text:"Inicio",color:"secondary"})),e.exports.createElement(x,{to:"login"},e.exports.createElement(h,{text:"Iniciar sesi\xF3n",color:"secondary"})),e.exports.createElement(x,{to:"form"},e.exports.createElement(h,{text:"Ser socio"}))))},X=3,j={title:"Natilleando",menuItems:[{name:"Normas",style:"primaryLight",point:"rules"},{name:"Cr\xE9ditos",style:"purple",point:"credits"},{name:"Multas e inter\xE9s",style:"orange",point:"debts"},{name:"Requisitos",style:"blueLight",point:"requirements"},{name:"Rifas y eventos",style:"pink",point:"events"},{name:"Liquidaci\xF3n",style:"money",point:"payments"}],menuData:[{title:"Simples normas",point:"rules",subtitle:"",imgURL:"https://wixtzvsuyxagezjctvdb.supabase.in/storage/v1/object/public/bucket/streamline-icon-leadership-1@400x400.png",description:` <p>
      Antes de iniciar con las normas es importante dejar claro, esta es una
      natillera exclusivamente familiar y/o amigos de confianza, no tiene
      fines lucrativos para ninguna parte, y fue desarrollada solo con el fin
      de integrar de alguna manera a la familia o persona independiente en un
      ahorro navide\xF1o. Es administrada por personas responsables.
    </p>
    <p class="mt-5">
      Si desea hacer parte de este mundo de ahorro familiar bienvenido a
      natilleando.
    </p>
    <br />`,items:[{label:"El periodo de ahorro abarca desde enero a diciembre del a\xF1o en curso."},{label:"Si el socio decide retirarse antes de diciembre no recibir\xE1 los intereses acumulados hasta la fecha."},{label:"Los intereses obtenidos en el periodo de ahorro se repartir\xE1 a todos los socios por igual independientes del ahorro invertido por cada socio."},{label:"Los beneficios a repartir se obtendr\xE1n a trav\xE9s de: Multas, rifas, eventos, intereses generados por nequi, intereses generados por pr\xE9stamos y otros extraordinarios."}]},{title:"Requisitos",point:"requirements",subtitle:"Ingreso y ahorro",imgURL:"https://wixtzvsuyxagezjctvdb.supabase.in/storage/v1/object/public/bucket/streamline-icon-evaluate-performance-employee-2@400x400.png",items:[{label:"La inscripci\xF3n tiene un costo de $ 5.000 pesos anuales."},{label:"El ahorro puede ser variable, pero solo ser\xE1 una sola vez al mes."},{label:"Para mantener actualizada la informaci\xF3n de los socios, se debe diligenciar el formulario de datos que hay en la app"}]},{title:"Multas e inter\xE9s",subtitle:"",imgURL:"https://wixtzvsuyxagezjctvdb.supabase.in/storage/v1/object/public/bucket/streamline-icon-overworked-employee-3@400x400.png",point:"debts",items:[{label:"En caso de no dar el ahorro entre los primeros 5 d\xEDas del mes, se cobrar\xE1 una $ 500 pesos por cada d\xEDa de retraso."},{label:"Para los cr\xE9ditos se cobrar\xE1 un 5% de inter\xE9s por mes sobre el valor de la deuda."},{label:"Las  multas como los intereses deben ser pagados al inicio de mes con la cuota del ahorro."},{label:"Los intereses ser\xE1n en un(%) porcentaje al monto de ahorro del socio."},{label:"Impulsamos la buena gesti\xF3n del dinero, as\xED que el socio que no pague as\xED sea un mes, autom\xE1ticamente ser\xE1 expulsado de la natillera."}]},{title:"Cr\xE9ditos",point:"credits",subtitle:"",imgURL:"https://wixtzvsuyxagezjctvdb.supabase.in/storage/v1/object/public/bucket/streamline-icon-work-life-balance-2@400x400.png",items:[{label:"Los cr\xE9ditos se realiza, sin exceder el monto ahorrado del socio. (revisar antig\xFCedad del socio en la natillera)"},{label:"Solo se otorgan cr\xE9dito a los socios de la natillera."},{label:"El cr\xE9dito solo se realizar\xE1 sobre el 75% del ahorro aportado por el socio y el otro 25% es para cubrir multas y moras en caso de alg\xFAn incumplimiento por parte del socio."},{label:"Los cr\xE9ditos solicitados por la app se gestionar\xE1 m\xE1s r\xE1pido su desembolso."}]},{title:"Rifas y eventos",point:"events",imgURL:"https://wixtzvsuyxagezjctvdb.supabase.in/storage/v1/object/public/bucket/streamline-icon-team-success-3@400x400.png",subtitle:"",items:[{label:"En caso de que alg\xFAn socio sea el afortunado ganador de la rifa mensual. Esta ser\xE1 pagada al d\xEDa siguiente del sorteo."},{label:"Socio que por alg\xFAn motivo no haya cancelado la rifa al momento del sorteo, no entrara a participar en el mismo."}]}]};var ee="/assets/icon.51f87b21.svg";const te=({labelText:a,point:t,style:r})=>{let s="";switch(r){case"primary":s="bg-primary";break;case"primaryLight":s="bg-primaryLight";break;case"purple":s="bg-purple";break;case"orange":s="bg-orange";break;case"blueLight":s="bg-blueLight";break;case"pink":s="bg-pink";break;case"money":s="bg-money";break;default:s="bg-primary";break}return e.exports.createElement(e.exports.Fragment,null,e.exports.createElement("a",{href:`#${t}`,className:`flex justify-between font-bold items-center ${s} py-4 px-2 w-full rounded-2xl h-16 focus:ring-4 border-2 border-transparent hover:border-black`,rel:"noopener"},a,e.exports.createElement("img",{src:ee,alt:"icon",className:"h-6"})))},ae=a=>{const{title:t,description:r,subtitle:s,point:o,imgURL:n,items:l}=a;return e.exports.createElement("div",{className:"text-2xl",id:`${o}`},e.exports.createElement("div",{className:"py-4"},e.exports.createElement("img",{src:n,width:"350",alt:t}),e.exports.createElement("h1",{className:"text-6xl font-bold py-4 font-recoleta"},t),s!=null?s:e.exports.createElement("p",{className:"text-3xl text-green-600"},s)),r!==""?e.exports.createElement(A,{content:r}):null,e.exports.createElement("ol",{className:"list-disc px-6 space-y-4"},l==null?void 0:l.map(({label:i},m)=>e.exports.createElement("li",{key:m},i))))},re=()=>{const{title:a}=j;return e.exports.createElement("div",{className:"text-2xl",id:"payments"},e.exports.createElement("img",{src:"https://wixtzvsuyxagezjctvdb.supabase.in/storage/v1/object/public/bucket/streamline-icon-becoming-rich-2@400x400.png",width:"350",alt:""}),e.exports.createElement("h1",{className:"text-6xl font-bold py-4 font-recoleta"},"Liquidaci\xF3n"),e.exports.createElement("p",null,"la natillera ser\xE1 liquidada el 1 de diciembre de cada a\xF1o, y se entregar\xE1 a cada socio, el ahorro que haya hecho durante los 11 meses, los intereses que correspondan al monto del ahorro."),e.exports.createElement("p",{className:"mt-5"},"Estas normas podr\xE1n cambiar de acuerdo a las nuevas Estipulaciones de",e.exports.createElement("span",{className:"font-bold"},a),"."))};var q="/assets/memberIcon.ca2be50f.svg",se="/assets/pelado.4a3e24c0.png";const oe=()=>e.exports.createElement("div",{className:"text-2xl pb-20"},e.exports.createElement("img",{src:se,width:"400",alt:"No te quedes pelado"}),e.exports.createElement("h1",{className:"text-4xl font-bold py-4 font-recoleta"},"\xA1No te quedes pelado en diciembre!"),e.exports.createElement("p",null,"\xDAnete al equipo y crezcamos juntos."),e.exports.createElement(x,{to:"form"},e.exports.createElement("button",{className:"mt-5 flex items-center justify-center w-full lg:w-auto bg-primary text-white text-xl py-3 px-5 rounded-2xl focus:ring-4"},e.exports.createElement("i",{className:"pr-2"},e.exports.createElement("img",{src:q,className:"h-6",alt:""})),"Quiero ser socio")));var ne="/assets/imgpersonal.e9315c1d.jpg";const le=()=>e.exports.createElement("div",{className:"flex bottom-0 w-full bg-black text-white gap-4 items-center py-7 px-3 lg:px-64 2xl:px-96"},e.exports.createElement("div",null,e.exports.createElement("img",{src:ne,className:"rounded-full w-40 lg:w-10",alt:"No te quedes peleado!"})),e.exports.createElement("div",null,e.exports.createElement("p",{className:"text-sm"},"\u{1F44B} \xA1Hola! La plataforma fue creada por mi persona"," ",e.exports.createElement("a",{className:"underline text-primaryLight",href:"https://www.linkedin.com/in/joseacevedodev/"},"Jose Luis Pulgar\xEDn"),", si te gusta la iniciativa por favor no dudes en compartirlo con tus familiares de confianza o amigos cercanos \u{1F495}."))),ie=()=>{const{title:a,menuItems:t,menuData:r}=j;return e.exports.createElement(e.exports.Fragment,null,e.exports.createElement("div",{className:"p-3 lg:px-96"},e.exports.createElement("div",{className:"pt-20 items-center justify-center text-start 2xl:px-[20%]"},e.exports.createElement("div",{className:"flex gap-8 items-center h-screen"},e.exports.createElement("div",null,e.exports.createElement("h1",{className:"text-7xl font-bold font-recoleta"},"Ahorra sin perder dinero"),e.exports.createElement("p",{className:"text-2xl"},e.exports.createElement("span",{className:"font-bold"},a)," es una simple natillera para miembros exclusivos que tiene como prop\xF3sito crear un ahorro programado a trav\xE9s del tiempo con un porcentaje de rentabilidad anual."),e.exports.createElement("br",null),e.exports.createElement("div",{className:"grid grid-cols-2 gap-2"},t.map(({name:s,style:o,point:n},l)=>{const i={labelText:s,point:n,style:o};return e.exports.createElement(te,u({key:l},i))})))),e.exports.createElement("div",{className:"mt-48 grid gap-48"},r.map((s,o)=>e.exports.createElement(ae,u({key:o},s))),e.exports.createElement(re,null),e.exports.createElement(oe,null)))),e.exports.createElement(le,null))},ce="https://wixtzvsuyxagezjctvdb.supabase.co",me="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQyMTcwNTc2LCJleHAiOjE5NTc3NDY1NzZ9.hcTdgFjKbSIUD4ZdTsPxlj6qOotqWSVZK-s38VMv5jY",E=O(ce,me),F=()=>({getPaymentMethodList:()=>E.from("payment_methods"),getMemberList:()=>E.from("users").select("id,name").eq("role",X),postProspect:s=>s?E.from("users").insert(u({},s)).single():null}),pe=()=>{const[a,t]=e.exports.useState([]),[r,s]=e.exports.useState([]),{postProspect:o}=F(),n=l=>new Promise((i,m)=>{o(l).then(({data:c,error:p})=>{i([c,p])}).catch(c=>{m(c)})});return e.exports.useEffect(()=>{const{getPaymentMethodList:l,getMemberList:i}=F();l().then(({data:m})=>{s(m)}),i().then(({data:m})=>{t(m)})},[]),{paymentMethodsList:r,memberList:a,setProspect:n}};var de="/assets/3d-flame-rocket-2.58333acb.png";const ue=()=>e.exports.createElement("div",{className:"flex justify-center w-full h-screen animated transition absolute top-20 mx-auto p-5  shadow-lg rounded-md bg-white fade-in z-50"},e.exports.createElement("div",{className:"mt-3 text-center flex-col justify-center object-center items-center"},e.exports.createElement("section",{className:"hero container max-w-screen-lg mx-auto pb-10"},e.exports.createElement("img",{src:de,className:"mx-auto",width:"150",alt:"Success"})),e.exports.createElement("h3",{className:"text-3xl leading-6 font-medium text-gray-900"},"\xA1Excelente!"),e.exports.createElement("div",{className:"mt-2 px-7 py-3"},e.exports.createElement("p",{className:"text-2xl text-gray-500"},"Solamente espera la aprobaci\xF3n y nos comunicaremos contigo mediante WhatsApp en m\xE1ximo 24 horas.")))),xe=()=>{const[a,t]=e.exports.useState(!1),[r,s]=e.exports.useState(!1),[o,n]=e.exports.useState({state:!1,message:""}),{paymentMethodsList:l,memberList:i,setProspect:m}=pe(),c=w({initialValues:{name:"",surname:"",document_number:"",payment_method:"",referer_id:"",whatsapp_number:""},onSubmit:p=>{console.log("props:",p),t(!0),m(u({},p)).then(d=>{let f="";const[ye,y]=d;t(!1),y!=null?(y.code==="23505"&&(f="Ya existe alguien con esta c\xE9dula."),s(!1),n({state:!0,message:f})):(s(!0),setIsError({state:!1,message:""}))})}});return e.exports.createElement(e.exports.Fragment,null,r?e.exports.createElement(ue,null):null,";",e.exports.createElement("div",{className:"grid p-5 gap-5 mt-28  lg:px-[25%]  2xl:px-[30%]"},e.exports.createElement("div",null,e.exports.createElement("h1",{className:"text-6xl font-bold font-recoleta"},"Solicitud de ingreso"),e.exports.createElement("p",null,"Al llenar el formulario est\xE1s solicitando el ingreso autom\xE1ticamente a la natillera.")),e.exports.createElement("form",{onSubmit:c.handleSubmit,className:"grid gap-5"},e.exports.createElement("div",{className:"grid 2xl:grid-cols-2 gap-2"},e.exports.createElement("div",{className:"grid gap-2"},e.exports.createElement(g,{id:"outlined-basic",label:"Nombres",name:"name",variant:"outlined",onChange:c.handleChange,required:!0})),e.exports.createElement("div",{className:"grid gap-2"},e.exports.createElement(g,{id:"outlined-basic",label:"Apellidos",name:"surname",variant:"outlined",onChange:c.handleChange,required:!0}))),e.exports.createElement("div",{className:"grid 2xl:grid-cols-2 gap-2"},e.exports.createElement("div",{className:"grid gap-2  "},e.exports.createElement(g,{type:"number",id:"outlined-basic",label:"C\xE9dula",name:"document_number",variant:"outlined",onChange:c.handleChange,inputProps:{inputMode:"numeric",pattern:"d*"},required:!0})),e.exports.createElement("div",{className:"grid gap-2  "},e.exports.createElement(g,{type:"number",id:"outlined-basic",label:"Whatsapp",name:"whatsapp_number",variant:"outlined",onChange:c.handleChange,inputProps:{inputMode:"numeric",pattern:"d*"},required:!0}))),e.exports.createElement("div",{className:"grid 2xl:grid-cols-2 gap-2"},e.exports.createElement("div",{className:"grid gap-2"},e.exports.createElement(L,null,e.exports.createElement(S,{id:"payment_method_input"},"Medio de pago"),e.exports.createElement(k,{labelId:"payment_method_input",id:"payment_method",name:"payment_method",value:c.values.payment_method,onChange:c.handleChange},l==null?void 0:l.map(({id:p,name:d})=>e.exports.createElement(I,{key:p,value:p},d))))),e.exports.createElement("div",{className:"grid gap-2"},e.exports.createElement(L,null,e.exports.createElement(S,{id:"referer_id_input"},"Recomendado por"),e.exports.createElement(k,{labelId:"referer_id_input",id:"referer_id",name:"referer_id",value:c.values.referer_id,onChange:c.handleChange},i==null?void 0:i.map(({id:p,name:d})=>e.exports.createElement(I,{key:p,value:p},d)))))),e.exports.createElement("div",null,o.state&&e.exports.createElement(e.exports.Fragment,null,e.exports.createElement("p",{className:"text-red-500 pb-5"},o.message)),e.exports.createElement("button",{className:`flex items-center justify-center w-full  xl:w-2/4 bg-primary text-white py-3 px-5 rounded-2xl focus:ring-4 ${a?"opacity-50 cursor-not-allowed":""}`,type:"submit",disabled:a},e.exports.createElement("i",{className:"pr-2"},e.exports.createElement("img",{src:q,className:"h-6",alt:""})),"Enviar solicitud")))))},ge=()=>({signInWithGoogle:()=>E.auth.signIn({provider:"google"})}),be=()=>{e.exports.useState(null);const[a,t]=e.exports.useState(!1),[r,s]=e.exports.useState({isError:!1,messageError:""}),{isError:o,messageError:n}=r;J(),T();const{signInWithGoogle:l}=ge(),i=w({initialValues:{email:"",password:""},onSubmit:async m=>{l().then(c=>{alert(JSON.stringify(c))})}});return e.exports.createElement("div",{className:"grid p-5 gap-5 lg:px-[25%] 2xl:px-[30%]"},e.exports.createElement("h1",{className:"text-6xl font-bold font-recoleta mt-28"},"Iniciar sesi\xF3n"),e.exports.createElement("form",{onSubmit:i.handleSubmit,className:"grid gap-3"},e.exports.createElement("div",{className:"grid gap-2"},e.exports.createElement("label",{id:"email",className:"font-bold"},"Correo electr\xF3nico"),e.exports.createElement("input",{type:"email",name:"email",onChange:i.handleChange,className:"h-10 w-full focus:ring-4 transition outline-0 focus:border-primary border-2 rounded-lg focus:bg-primaryLight p-2",placeholder:"Ingresa tu correo electr\xF3nico.",required:!0})),e.exports.createElement("div",{className:"grid gap-2"},e.exports.createElement("label",{id:"name",className:"font-bold"},"Contrase\xF1a"),e.exports.createElement("input",{type:"password",name:"password",onChange:i.handleChange,className:"h-10 w-full focus:ring-4 transition outline-0 focus:border-primary border-2 rounded-lg focus:bg-primaryLight p-2",placeholder:"Ingresa tu contrasena.",required:!0})),e.exports.createElement("div",null,e.exports.createElement("a",{href:"#",className:"text-primary"},"Recuperar Contrase\xF1a")),o&&e.exports.createElement("p",null,n),e.exports.createElement("button",{className:`flex items-center justify-center w-full bg-primary text-white text-base py-3 px-5 rounded-2xl focus:ring-4 
          ${a&&"opacity-50 cursor-not-allowed"}`,type:"submit",disabled:a},"Iniciar sesi\xF3n")))},Ee=()=>e.exports.createElement("div",null,e.exports.createElement("p",null,"Not found page...")),he=U({palette:{primary:{main:"#166534"}}});function fe(){return e.exports.createElement($,{theme:he},e.exports.createElement(Q,null),e.exports.createElement(D,{store:Z},e.exports.createElement(B,null,e.exports.createElement(b,{path:"/",element:e.exports.createElement(ie,null)}),e.exports.createElement(b,{path:"/form",element:e.exports.createElement(xe,null)}),e.exports.createElement(b,{path:"/login",element:e.exports.createElement(be,null)}),e.exports.createElement(b,{path:"*",element:e.exports.createElement(Ee,null)}))))}W.render(e.exports.createElement(V,null,e.exports.createElement(fe,null)),document.getElementById("root"));
