const routes={
  home:"home-template",
  projetos:"projetos-template",
  cadastro:"cadastro-template"
};

function loadTemplate(id){
  const t=document.getElementById(id);
  const app=document.getElementById("app");
  if(!t) return;
  app.innerHTML="";
  app.appendChild(t.content.cloneNode(true));
  if(id==="cadastro-template") initVal();
}

function navigate(r){ loadTemplate(routes[r]||routes.home); }

document.addEventListener("click",e=>{
  const link=e.target.closest(".spa-link");
  if(!link) return;
  e.preventDefault();
  navigate(link.dataset.route);
});

navigate("home");

function initVal(){
  const f=document.getElementById("cadastroForm");
  if(!f) return;
  f.addEventListener("submit",e=>{
    e.preventDefault();
    let ok=true;
    f.querySelectorAll("input").forEach(i=>{
      const err=document.querySelector(`[data-error-for="${i.id}"]`);
      if(!i.checkValidity()){
        err.textContent="Campo inválido";
        ok=false;
      } else err.textContent="";
    });
    if(ok) alert("Cadastro enviado! (simulação)");
  });
}
