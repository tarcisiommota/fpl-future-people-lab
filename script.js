// Configuração: troque o número (formato internacional, só dígitos, ex.: 5511999999999)
const WHATSAPP_NUMERO = "55XXXXXXXXXXX";
const MENSAGEM = "Olá! Quero conhecer o coach de liderança da FPL.";

document.querySelectorAll("[data-wa]").forEach((a) => {
  const plano = a.dataset.plan;
  const texto = plano ? `${MENSAGEM} Tenho interesse no plano ${plano}.` : MENSAGEM;
  a.href = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(texto)}`;
  a.target = "_blank";
  a.rel = "noopener";
});

document.getElementById("ano").textContent = new Date().getFullYear();

const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
burger.addEventListener("click", () => {
  const aberto = nav.classList.toggle("open");
  burger.setAttribute("aria-expanded", aberto);
});
nav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    burger.setAttribute("aria-expanded", false);
  })
);

const io = new IntersectionObserver(
  (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("on"); io.unobserve(e.target); } }),
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
