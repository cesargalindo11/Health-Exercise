(this.webpackJsonpdeply=this.webpackJsonpdeply||[]).push([[0],{16:function(e,t,c){},65:function(e,t,c){"use strict";c.r(t);var s=c(2),a=c.n(s),n=c(21),i=c.n(n),r=c(28),o=c.n(r),l=c(34),j=c(24),b=c(22),d=c(14),u=(c(16),c(35)),m=(c(43),c(66),u.a.initializeApp({apiKey:"AIzaSyCGJ1NrZdVV1_KecBNEKKu8aPqOTMZvD8w",authDomain:"saludyejercicio-8966d.firebaseapp.com",projectId:"saludyejercicio-8966d",storageBucket:"saludyejercicio-8966d.appspot.com",messagingSenderId:"892550091944",appId:"1:892550091944:web:60a6a58f15ab3779879e9d"})),p=m.auth(),x=m.firestore(),O=c(10),h=c(1),g=function(){var e=Object(s.useState)(""),t=Object(d.a)(e,2),c=t[0],a=(t[1],{Nombres:"",Apellidos:"",Edad:"",Peso:"",Email:"",Password:""}),n=Object(s.useState)(a),i=Object(d.a)(n,2),r=i[0],u=i[1],m=function(e){var t=e.target,c=t.name,s=t.value;u(Object(b.a)(Object(b.a)({},r),{},Object(j.a)({},c,s)))},p=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x.collection("registro").doc(r.Email).get().then((function(e){if(e.exists)return Object(O.a)("El usuario ya existe",{type:"warning",autoClose:1e3});x.collection("registro").doc(r.Email).set(r),Object(O.a)("Te Registraste con Exito",{type:"success"})}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(e){return!!/^(?=.{3,30}$)[a-z]+(?:\s+[a-z]+)*$/i.test(e)};return Object(s.useEffect)((function(){""===c&&u(Object(b.a)({},a))}),[c]),Object(h.jsxs)("div",{className:"row mt-5",children:[Object(h.jsx)("div",{className:"col"}),Object(h.jsx)("div",{className:"col bg-registro",children:Object(h.jsxs)("form",{className:"form-group",id:"formulario",onSubmit:function(e){return e.preventDefault(),g(r.Nombres)?g(r.Apellidos)?function(e){var t=parseInt(e);return t>10&&t<60}(r.Edad)?(t=r.Peso,/^([4-8][0-9]|[0-1][0-5][0-0])$/.test(t)?function(e){return!!/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test(e)}(r.Email)?function(e){return!!/^[A-Za-z0-9]{5,30}/.test(e)}(r.Password)?(p(r),void u(Object(b.a)({},a))):Object(O.a)("Contrasena no Valida",{type:"warning",autoClose:1e3}):Object(O.a)("Correo no Valido",{type:"warning",autoClose:1e3}):Object(O.a)("Peso no Valido",{type:"warning",autoClose:1e3})):Object(O.a)("Edad no Valido",{type:"warning",autoClose:1e3}):Object(O.a)("Apellidos no Valido",{type:"warning",autoClose:1e3}):Object(O.a)("Nombre no Valido",{type:"warning",autoClose:1e3});var t},children:[Object(h.jsxs)("div",{className:"input-group mb-3",children:[Object(h.jsx)("div",{className:"input-group-prepend",children:Object(h.jsx)("span",{className:"input-group-text",children:"Nombres"})}),Object(h.jsx)("input",{className:"form-control",placeholder:"Introduce tu nombre",type:"text",onChange:m,value:r.Nombres,name:"Nombres",required:!0,title:"Letras. Tama\xf1o m\xednimo: 3. Tama\xf1o m\xe1ximo: 30"})]}),Object(h.jsxs)("div",{className:"input-group mb-3",children:[Object(h.jsx)("div",{className:"input-group-prepend",children:Object(h.jsx)("span",{className:"input-group-text",children:"Apellidos"})}),Object(h.jsx)("input",{className:"form-control",placeholder:"Introduce tu apellido",type:"text",onChange:m,value:r.Apellidos,name:"Apellidos",required:!0,title:"Letras. Tama\xf1o m\xednimo: 3. Tama\xf1o m\xe1ximo: 30"})]}),Object(h.jsxs)("div",{className:"input-group mb-3",children:[Object(h.jsx)("div",{className:"input-group-prepend",children:Object(h.jsx)("span",{className:"input-group-text",children:"Edad"})}),Object(h.jsx)("input",{className:"form-control",placeholder:"",type:"number",onChange:m,value:r.Edad,name:"Edad",required:!0}),Object(h.jsx)("div",{className:"input-group-prepend",children:Object(h.jsx)("span",{className:"input-group-text",children:"Peso"})}),Object(h.jsx)("input",{className:"form-control",placeholder:"",type:"number",onChange:m,value:r.Peso,name:"Peso",required:!0}),Object(h.jsx)("label",{className:"label text-white",children:"Kg"})]}),Object(h.jsxs)("div",{className:"form-check form-check-inline mb-3",children:[Object(h.jsx)("div",{className:"input-group-prepend ",children:Object(h.jsx)("span",{className:"input-group-text mg-r",children:"Sexo"})}),Object(h.jsx)("input",{className:"form-check-input",type:"radio",onChange:m,name:"Sexo",value:"mujer",required:!0}),Object(h.jsx)("label",{className:"form-check-label form-check form-check-inline text-white",for:"inlineRadio1",children:"Mujer"}),Object(h.jsx)("input",{className:"form-check-input",type:"radio",onChange:m,name:"Sexo",value:"hombre",required:!0}),Object(h.jsx)("label",{className:"form-check-label form-check form-check-inline text-white",for:"inlineRadio2",children:"Hombre"})]}),Object(h.jsxs)("div",{className:"input-group mb-3",children:[Object(h.jsx)("div",{className:"input-group-prepend",children:Object(h.jsx)("span",{className:"input-group-text",children:" Correo"})}),Object(h.jsx)("input",{className:"form-control",placeholder:"Introduce tu correo electronico",type:"email",onChange:m,value:r.Email,name:"Email",required:!0})]}),Object(h.jsxs)("div",{className:"input-group mb-3",children:[Object(h.jsx)("div",{className:"input-group-prepend",children:Object(h.jsx)("span",{className:"input-group-text",children:"Contrase\xf1a"})}),Object(h.jsx)("input",{className:"form-control",placeholder:"Introduce una contrase\xf1a",type:"password",onChange:m,value:r.Password,name:"Password",title:"ingrese de 5 a 30 caracteres alfanumericos",required:!0})]}),Object(h.jsx)("input",{className:"btn btn-info btn-block mt-4",value:"Registrar Usuario",type:"submit"})]})}),Object(h.jsx)("div",{className:"col"})]})},v=c(5),f=Object(v.g)((function(e){var t=e.history;return Object(h.jsx)("div",{children:Object(h.jsx)("div",{class:"container",children:Object(h.jsxs)(a.a.Fragment,{children:[Object(h.jsx)("h1",{style:{color:"black"},children:"Niveles"}),Object(h.jsxs)("div",{className:"Niveles",children:[Object(h.jsxs)("div",{class:"container",children:[Object(h.jsx)("img",{src:"./NivelesImagenes/CuerpoPrincipiante.jpg",className:"CuerpoPrincipiante"}),Object(h.jsx)("button",{onClick:function(){return t.push("/categoriaprincipiante")},type:"button",class:"btn btn-info btn-block mt-4",children:"Nivel Principiante"})]}),Object(h.jsxs)("div",{class:"container",children:[Object(h.jsx)("img",{src:"./NivelesImagenes/CuerpoIntermedio.jpg",className:"CuerpoPrincipiante"}),Object(h.jsx)("button",{onClick:function(){return t.push("/categoriaintermedio")},type:"button",class:"btn btn-info btn-block mt-4",children:"Nivel Intermedio"})]}),Object(h.jsxs)("div",{class:"container",children:[Object(h.jsx)("img",{src:"./NivelesImagenes/CuerpoAvanzado.jpg",className:"CuerpoPrincipiante"}),Object(h.jsx)("button",{onClick:function(){return t.push("/categoriaavanzado")},type:"button",class:"btn btn-info btn-block mt-4",children:"Nivel Avanzado"})]})]})]})})})})),N=function(){var e=Object(v.f)(),t=Object(s.useState)(""),c=Object(d.a)(t,2),a=c[0],n=c[1],i=Object(s.useState)(""),r=Object(d.a)(i,2),o=r[0],l=r[1],j=[],b=function(t){t.preventDefault(),x.collection("registro").doc(a).get().then((function(t){if(!t.exists)return Object(O.a)("El correo no existe",{type:"warning",autoClose:1e3});if(t.get("Password")!==o)return Object(O.a)(" Contrase\xf1a Incrorrecta",{type:"warning",autoClose:1e3});var c=t.get("Email");j.push(c),e.push("/niveles")}))};return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:" row mt-15",children:[Object(h.jsx)("div",{className:"col"}),Object(h.jsx)("div",{className:"col bg-t",children:Object(h.jsxs)("form",{onSubmit:b,className:"form-group",children:[Object(h.jsxs)("div",{className:"input-group mb-3",children:[Object(h.jsx)("div",{className:"input-group-prepend",children:Object(h.jsx)("span",{className:"input-group-text",children:" Correo"})}),Object(h.jsx)("input",{className:"form-control",placeholder:"Introduce tu correo electronico",type:"email",name:"correo",onChange:function(e){n(e.target.value)}})]}),Object(h.jsxs)("div",{className:"input-group mb-3",children:[Object(h.jsx)("div",{className:"input-group-prepend",children:Object(h.jsx)("span",{className:"input-group-text",children:"Contrase\xf1a"})}),Object(h.jsx)("input",{className:"form-control",placeholder:"Introduce una contrase\xf1a",type:"password",name:"password",onChange:function(e){l(e.target.value)}})]}),Object(h.jsx)("button",{onClick:b,className:"btn btn-info btn-block mt-4",children:"Iniciar Sesion"})]})}),Object(h.jsx)("div",{className:"col"})]})})},C=function(){return Object(h.jsx)("div",{})},y=c(15),k=function(){var e=Object(v.f)(),t=Object(s.useState)(null),c=Object(d.a)(t,2),a=c[0],n=c[1];Object(s.useEffect)((function(){p.onAuthStateChanged((function(e){e&&(n(e.email),console.log(e.email))}))}),[]);return Object(h.jsx)("div",{children:Object(h.jsxs)("nav",{className:".barra-content",children:[Object(h.jsxs)("ul",{className:"barra ",children:[Object(h.jsx)("div",{className:"logo",children:Object(h.jsxs)("a",{href:"/#",children:[Object(h.jsx)("img",{src:"logo.png",alt:"logo"})," "]})}),Object(h.jsxs)("div",{className:"botones nav",children:[Object(h.jsx)("li",{className:"nav-item",children:a?Object(h.jsx)("span",{}):Object(h.jsx)(y.b,{className:"nav-link",to:"/login",children:"Sesion"})}),Object(h.jsx)("li",{className:"nav-item",children:a?Object(h.jsx)("span",{}):Object(h.jsx)(y.b,{className:"nav-link",to:"/registro",children:"Registro"})})]})]}),a?Object(h.jsx)("button",{onClick:function(){p.signOut(),n(null),e.push("/")},className:"barra btn btn-danger ",children:"Cerrar sesion"}):Object(h.jsx)("span",{})]})})},E=(c(54),c(37)),w=c.n(E),P=function(){var e=Object(s.useState)(!1),t=Object(d.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(!1),i=Object(d.a)(n,2);i[0],i[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{class:"container BotonesNivel"}),Object(h.jsx)("div",{className:"Categoria",class:"container",children:Object(h.jsx)("h1",{style:{color:"black"},children:"Categoria Principiante"})}),Object(h.jsxs)("div",{class:"container",style:{display:"flex",flexWrap:"wrap"},children:[Object(h.jsxs)("div",{class:"card m-2",children:[Object(h.jsx)("img",{src:"./Categorias/PechoPrincipiante.jpg",className:"Ejercicios"}),Object(h.jsx)("button",{onClick:function(){return a(!0)},type:"button",class:"btn btn-info btn-block mt-4",children:"Pecho"})]}),Object(h.jsxs)(w.a,{isOpen:c,children:[Object(h.jsx)("h2",{children:"Malditos hijos de perre los odio"}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{onClick:function(){return a(!1)},children:"Categorias"})})]})]})]})},I=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{class:"container BotonesNivel"}),Object(h.jsx)("div",{className:"Categoria",class:"container",children:Object(h.jsx)("h1",{style:{color:"black"},children:"Categoria Intermedio"})}),Object(h.jsxs)("div",{class:"container",style:{display:"flex",flexWrap:"wrap"},children:[Object(h.jsxs)("div",{class:"card m-2",children:[Object(h.jsx)("img",{src:"./Categorias/PechoIntermedio.jpg",className:"Ejercicios"}),Object(h.jsx)("button",{type:"button",class:"btn btn-info btn-block mt-4",children:"Pecho"})]}),Object(h.jsxs)("div",{class:"card m-2",children:[Object(h.jsx)("img",{src:"./Categorias/EspaldaIntermedio.jpg",className:"Ejercicios"}),Object(h.jsx)("button",{type:"button",class:"btn btn-info btn-block mt-4",children:"Espalda"})]}),Object(h.jsxs)("div",{class:"card m-2",children:[Object(h.jsx)("img",{src:"./Categorias/BrazoIntermedio.jpg",className:"Ejercicios"}),Object(h.jsx)("button",{type:"button",class:"btn btn-info btn-block mt-4",children:"Brazo"})]}),Object(h.jsxs)("div",{class:"card m-2",children:[Object(h.jsx)("img",{src:"./Categorias/PiernaIntermedio.jpg",className:"Ejercicios"}),Object(h.jsx)("button",{type:"button",class:"btn btn-info btn-block mt-4",children:"Pierna"})]}),Object(h.jsxs)("div",{class:"card m-2",children:[Object(h.jsx)("img",{src:"./Categorias/AbdominalIntermedio.jpg",className:"Ejercicios"}),Object(h.jsx)("button",{type:"button",class:"btn btn-info btn-block mt-4",children:"Abdominal"})]}),Object(h.jsxs)("div",{class:"card m-2",children:[Object(h.jsx)("img",{src:"./Categorias/HombroIntermedio.jpg",className:"Ejercicios"}),Object(h.jsx)("button",{type:"button",class:"btn btn-info btn-block mt-4",children:"Hombro"})]})]})]})},z=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{class:"container BotonesNivel"}),Object(h.jsx)("div",{className:"Categoria",class:"container",children:Object(h.jsx)("h1",{style:{color:"black"},children:"Categoria Avanzado"})}),Object(h.jsxs)("div",{class:"container",style:{display:"flex",flexWrap:"wrap"},children:[Object(h.jsxs)("div",{class:"card m-2",children:[Object(h.jsx)("img",{src:"./Categorias/PechoAvanzado.jpg",className:"Ejercicios"}),Object(h.jsx)("button",{type:"button",class:"btn btn-info btn-block mt-4",children:"Pecho"})]}),Object(h.jsxs)("div",{class:"card m-2",children:[Object(h.jsx)("img",{src:"./Categorias/EspaldaAvanzado.jpeg",className:"Ejercicios"}),Object(h.jsx)("button",{type:"button",class:"btn btn-info btn-block mt-4",children:"Espalda"})]}),Object(h.jsxs)("div",{class:"card m-2",children:[Object(h.jsx)("img",{src:"./Categorias/BrazoAvanzado.jpg",className:"Ejercicios"}),Object(h.jsx)("button",{type:"button",class:"btn btn-info btn-block mt-4",children:"Brazo"})]}),Object(h.jsxs)("div",{class:"card m-2",children:[Object(h.jsx)("img",{src:"./Categorias/PiernaAvanzado.jpg",className:"Ejercicios"}),Object(h.jsx)("button",{type:"button",class:"btn btn-info btn-block mt-4",children:"Pierna"})]}),Object(h.jsxs)("div",{class:"card m-2",children:[Object(h.jsx)("img",{src:"./Categorias/AbdominalAvanzado.jpg",className:"Ejercicios"}),Object(h.jsx)("button",{type:"button",class:"btn btn-info btn-block mt-4",children:"Abdominal"})]}),Object(h.jsxs)("div",{class:"card m-2",children:[Object(h.jsx)("img",{src:"./Categorias/HombroAvanzado.jpg",className:"Ejercicios"}),Object(h.jsx)("button",{type:"button",class:"btn btn-info btn-block mt-4",children:"Hombro"})]})]})]})};var A=function(){return Object(h.jsx)("div",{children:Object(h.jsxs)(y.a,{children:[Object(h.jsx)(k,{}),Object(h.jsxs)(v.c,{children:[Object(h.jsx)(v.a,{exact:!0,path:"/",component:C}),Object(h.jsx)(v.a,{exact:!0,path:"/registro",component:g}),Object(h.jsx)(v.a,{exact:!0,path:"/login",component:N}),Object(h.jsx)(v.a,{exact:!0,path:"/niveles",component:f}),Object(h.jsx)(v.a,{exact:!0,path:"/categoriaprincipiante",component:P}),Object(h.jsx)(v.a,{exact:!0,path:"/categoriaintermedio",component:I}),Object(h.jsx)(v.a,{exact:!0,path:"/categoriaavanzado",component:z})]})]})})};c(64);i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(A,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.01a7d9c2.chunk.js.map