var E=Object.defineProperty,v=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var u=(r,t,a)=>t in r?E(r,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[t]=a,c=(r,t)=>{for(var a in t||(t={}))h.call(t,a)&&u(r,a,t[a]);if(d)for(var a of d(t))N.call(t,a)&&u(r,a,t[a]);return r},x=(r,t)=>v(r,y(t));import{r as e,u as L,L as i,H as w,R as k,a as b,b as j,B as q}from"./vendor.16871528.js";const z=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const n of l.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=a(o);fetch(o.href,l)}};z();const m=({text:r="asdasd",color:t})=>{let a="";switch(t){case"primary":a="bg-primary";break;case"secondary":a="bg-white";break;default:a="bg-primary";break}return e.exports.createElement(e.exports.Fragment,null,e.exports.createElement("button",{className:`${a} ${t==="secondary"?"text-primary hover:bg-primaryLight":"text-white hover:bg-green-800"}    rounded-xl h-10 px-3 focus:ring-4`},r))};var R="/assets/Logo.8368f4d1.svg";const F=()=>{const r=L();let t=!1;return r.pathname!=="/"?t=!0:t=!1,e.exports.createElement("div",{className:"w-full flex items-center justify-between py-3 px-3 lg:px-64 2xl:px-96 bg-white z-50 fixed backdrop-filter backdrop-blur-lg bg-opacity-70"},e.exports.createElement("div",{className:"cursor-pointer"},e.exports.createElement(i,{to:"/"},e.exports.createElement("img",{src:R,className:"App-logo",alt:"logo"}))),e.exports.createElement("div",{className:"flex gap-3"},t&&e.exports.createElement(i,{to:"/"},e.exports.createElement(m,{text:"Inicio",color:"secondary"})),e.exports.createElement(i,{to:"login"},e.exports.createElement(m,{text:"Iniciar sesi\xF3n",color:"secondary"})),e.exports.createElement(i,{to:"form"},e.exports.createElement(m,{text:"Ser socio"}))))},I={inscriptionPriceInCOP:5e3,debtFineInCop:500},A=3,g={config:x(c({},I),{primaryRole:A}),title:"Natilleando",menuItems:[{name:"Normas",style:"primaryLight",point:"rules"},{name:"Cr\xE9ditos",style:"purple",point:"credits"},{name:"Multas e inter\xE9s",style:"orange",point:"debts"},{name:"Requisitos",style:"blueLight",point:"requirements"},{name:"Rifas y eventos",style:"pink",point:"events"},{name:"Liquidaci\xF3n",style:"money",point:"payments"}],menuData:[{title:"Simples normas",point:"rules",subtitle:"",imgURL:"https://wixtzvsuyxagezjctvdb.supabase.in/storage/v1/object/public/bucket/streamline-icon-leadership-1@400x400.png",description:` <p>
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
    <br />`,items:[{label:"El periodo de ahorro abarca desde enero a diciembre del a\xF1o en curso."},{label:"Si el socio decide retirarse antes de diciembre no recibir\xE1 los intereses acumulados hasta la fecha."},{label:"Los intereses obtenidos en el periodo de ahorro se repartir\xE1 a todos los socios por igual independientes del ahorro invertido por cada socio."},{label:"Los beneficios a repartir se obtendr\xE1n a trav\xE9s de: Multas, rifas, eventos, intereses generados por nequi, intereses generados por pr\xE9stamos y otros extraordinarios."}]},{title:"Requisitos",point:"requirements",subtitle:"Ingreso y ahorro",imgURL:"https://wixtzvsuyxagezjctvdb.supabase.in/storage/v1/object/public/bucket/streamline-icon-evaluate-performance-employee-2@400x400.png",items:[{label:"La inscripci\xF3n tiene un costo de $ 5.000 pesos anuales."},{label:"El ahorro puede ser variable, pero solo ser\xE1 una sola vez al mes."},{label:"Para mantener actualizada la informaci\xF3n de los socios, se debe diligenciar el formulario de datos que hay en la app"}]},{title:"Multas e inter\xE9s",subtitle:"",imgURL:"https://wixtzvsuyxagezjctvdb.supabase.in/storage/v1/object/public/bucket/streamline-icon-overworked-employee-3@400x400.png",point:"debts",items:[{label:"En caso de no dar el ahorro entre los primeros 5 d\xEDas del mes, se cobrar\xE1 una $ 500 pesos por cada d\xEDa de retraso."},{label:"Para los cr\xE9ditos se cobrar\xE1 un 5% de inter\xE9s por mes sobre el valor de la deuda."},{label:"Las  multas como los intereses deben ser pagados al inicio de mes con la cuota del ahorro."},{label:"Los intereses ser\xE1n en un(%) porcentaje al monto de ahorro del socio."},{label:"Impulsamos la buena gesti\xF3n del dinero, as\xED que el socio que no pague as\xED sea un mes, autom\xE1ticamente ser\xE1 expulsado de la natillera."}]},{title:"Cr\xE9ditos",point:"credits",subtitle:"",imgURL:"https://wixtzvsuyxagezjctvdb.supabase.in/storage/v1/object/public/bucket/streamline-icon-work-life-balance-2@400x400.png",items:[{label:"Los cr\xE9ditos se realiza, sin exceder el monto ahorrado del socio. (revisar antig\xFCedad del socio en la natillera)"},{label:"Solo se otorgan cr\xE9dito a los socios de la natillera."},{label:"El cr\xE9dito solo se realizar\xE1 sobre el 75% del ahorro aportado por el socio y el otro 25% es para cubrir multas y moras en caso de alg\xFAn incumplimiento por parte del socio."},{label:"Los cr\xE9ditos solicitados por la app se gestionar\xE1 m\xE1s r\xE1pido su desembolso."}]},{title:"Rifas y eventos",point:"events",imgURL:"https://wixtzvsuyxagezjctvdb.supabase.in/storage/v1/object/public/bucket/streamline-icon-team-success-3@400x400.png",subtitle:"",items:[{label:"En caso de que alg\xFAn socio sea el afortunado ganador de la rifa mensual. Esta ser\xE1 pagada al d\xEDa siguiente del sorteo."},{label:"Socio que por alg\xFAn motivo no haya cancelado la rifa al momento del sorteo, no entrara a participar en el mismo."}]}]};var P="/assets/icon.3f1ed294.svg";const S=({labelText:r,point:t,style:a})=>{let s="";switch(a){case"primary":s="bg-primary";break;case"primaryLight":s="bg-primaryLight";break;case"purple":s="bg-purple";break;case"orange":s="bg-orange";break;case"blueLight":s="bg-blueLight";break;case"pink":s="bg-pink";break;case"money":s="bg-money";break;default:s="bg-primary";break}return e.exports.createElement(e.exports.Fragment,null,e.exports.createElement("a",{href:`#${t}`,className:`flex justify-between font-bold items-center ${s} py-4 px-2 w-full rounded-2xl h-16 focus:ring-4 border-2 border-transparent hover:border-black`,rel:"noopener"},r,e.exports.createElement("img",{src:P,alt:"icon",className:"h-6"})))},$=r=>{const{title:t,description:a,subtitle:s,point:o,imgURL:l,items:n}=r;return e.exports.createElement("div",{className:"text-2xl",id:`${o}`},e.exports.createElement("div",{className:"py-4"},e.exports.createElement("img",{src:l,width:"350",alt:t}),e.exports.createElement("h1",{className:"text-6xl font-bold py-4 font-recoleta"},t),s!=null?s:e.exports.createElement("p",{className:"text-3xl text-green-600"},s)),a&&e.exports.createElement(e.exports.Fragment,null,w(a)),e.exports.createElement("ol",{className:"list-disc px-6 space-y-4"},n.map(({label:p},f)=>e.exports.createElement("li",{key:f},p))))},M=()=>{const{title:r}=g;return e.exports.createElement("div",{className:"text-2xl",id:"payments"},e.exports.createElement("img",{src:"https://wixtzvsuyxagezjctvdb.supabase.in/storage/v1/object/public/bucket/streamline-icon-becoming-rich-2@400x400.png",width:"350",alt:""}),e.exports.createElement("h1",{className:"text-6xl font-bold py-4 font-recoleta"},"Liquidaci\xF3n"),e.exports.createElement("p",null,"la natillera ser\xE1 liquidada el 1 de diciembre de cada a\xF1o, y se entregar\xE1 a cada socio, el ahorro que haya hecho durante los 11 meses, los intereses que correspondan al monto del ahorro."),e.exports.createElement("p",{className:"mt-5"},"Estas normas podr\xE1n cambiar de acuerdo a las nuevas Estipulaciones de",e.exports.createElement("span",{className:"font-bold"},r),"."))};var O="/assets/memberIcon.1276810e.svg",B="/assets/pelado.4a3e24c0.png";const C=()=>e.exports.createElement("div",{className:"text-2xl pb-20"},e.exports.createElement("img",{src:B,width:"400",alt:"No te quedes pelado"}),e.exports.createElement("h1",{className:"text-4xl font-bold py-4 font-recoleta"},"\xA1No te quedes pelado en diciembre!"),e.exports.createElement("p",null,"\xDAnete al equipo y crezcamos juntos."),e.exports.createElement(i,{to:"form"},e.exports.createElement("button",{className:"mt-5 flex items-center justify-center w-full lg:w-auto bg-primary text-white text-xl py-3 px-5 rounded-2xl focus:ring-4"},e.exports.createElement("i",{className:"pr-2"},e.exports.createElement("img",{src:O,className:"h-6",alt:""})),"Quiero ser socio")));var U="/assets/imgpersonal.e9315c1d.jpg";const D=()=>e.exports.createElement("div",{className:"flex bottom-0 w-full bg-black text-white gap-4 items-center py-7 px-3 lg:px-64 2xl:px-96"},e.exports.createElement("div",null,e.exports.createElement("img",{src:U,className:"rounded-full w-40 lg:w-10",alt:"No te quedes peleado!"})),e.exports.createElement("div",null,e.exports.createElement("p",{className:"text-sm"},"\u{1F44B} \xA1Hola! La plataforma fue creada por mi persona"," ",e.exports.createElement("a",{className:"underline text-primaryLight",href:"https://www.linkedin.com/in/joseacevedodev/"},"Jose Luis Pulgar\xEDn"),", si te gusta la iniciativa por favor no dudes en compartirlo con tus familiares de confianza o amigos cercanos \u{1F495}."))),H=()=>{const{title:r,menuItems:t,menuData:a}=g;return e.exports.createElement(e.exports.Fragment,null,e.exports.createElement("div",{className:"p-3 lg:px-96"},e.exports.createElement("div",{className:"pt-20 items-center justify-center text-start 2xl:px-[20%]"},e.exports.createElement("div",{className:"flex gap-8 items-center h-screen"},e.exports.createElement("div",null,e.exports.createElement("h1",{className:"text-7xl font-bold font-recoleta"},"Ahorra sin perder dinero"),e.exports.createElement("p",{className:"text-2xl"},e.exports.createElement("span",{className:"font-bold"},r)," es una simple natillera para miembros exclusivos que tiene como prop\xF3sito crear un ahorro programado a trav\xE9s del tiempo con un porcentaje de rentabilidad anual."),e.exports.createElement("br",null),e.exports.createElement("div",{className:"grid grid-cols-2 gap-2"},t.map(({name:s,style:o,point:l},n)=>{const p={labelText:s,point:l,style:o};return e.exports.createElement(S,c({key:n},p))})))),e.exports.createElement("div",{className:"mt-48 grid gap-48"},a.map((s,o)=>e.exports.createElement($,c({key:o},s))),e.exports.createElement(M,null),e.exports.createElement(C,null)))),e.exports.createElement(D,null))},J=()=>e.exports.createElement("div",null,e.exports.createElement("p",null,"Not found page..."));function K(){return e.exports.createElement(e.exports.Fragment,null,e.exports.createElement(F,null),e.exports.createElement(k,null,e.exports.createElement(b,{path:"/",element:e.exports.createElement(H,null)}),e.exports.createElement(b,{path:"*",element:e.exports.createElement(J,null)})))}j.render(e.exports.createElement(q,null,e.exports.createElement(K,null)),document.getElementById("root"));
