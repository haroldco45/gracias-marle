/* Gracias, Marle — Vibras Positivas HM */
const NOCHEBUENA = new Date('2026-12-24T00:00:00-05:00'); // hora de Colombia

const T = {
  es: {
    navRincones:'Rincones', navRecorrido:'Recorrido', navEspecial:'Por qué ella',
    ante:'Para Marle, mi compañera de vida', gracias:'Gracias, amor',
    cita:'Somos felices gracias a ella, que le pone ese toque especial a la Navidad. Es la mejor época del año, y la Navidad es muy especial con Marle.',
    verCasa:'Ver lo que hizo', verVideo:'Ver el recorrido',
    bandaAnte:'La casa ya está lista', dias:'días', horas:'horas', min:'min', seg:'seg',
    paraNochebuena:'para la Nochebuena que ella hizo tan bonita', yaNochebuena:'Feliz Navidad, Marle',
    rinAnte:'Hecho por sus manos', rinTitulo:'La casa, rincón por rincón', rinIntro:'Cada detalle lo pensó ella. Toque una foto para verla grande.',
    vAnte:'El recorrido completo', vTitulo:'Así nos recibe la Navidad en casa',
    vTexto:'De la entrada a la cocina, del comedor al árbol, y al final el pesebre con su estrella encendida. Todo, obra de Marle.',
    espAnte:'La mejor época del año', espTitulo:'Por qué la Navidad es especial con ella',
    feliz:'Feliz Navidad, Marle', cierreTexto:'Gracias por llenar nuestra casa de luz.',
    compartir:'Compartir este detalle', agenda:'Agenda de Navidad de la familia',
    pie:'Con amor, de Harold para Marle · Navidad 2026', cerrar:'Cerrar',
    msg:'Gracias, Marle, por ponerle ese toque especial a nuestra Navidad. Mire cómo quedó la casa:'
  },
  en: {
    navRincones:'Corners', navRecorrido:'Tour', navEspecial:'Why her',
    ante:'For Marle, my life partner', gracias:'Thank you, love',
    cita:'We are happy thanks to her, who gives Christmas that special touch. It is the best time of the year, and Christmas is so special with Marle.',
    verCasa:'See what she made', verVideo:'Watch the tour',
    bandaAnte:'The house is ready', dias:'days', horas:'hours', min:'min', seg:'sec',
    paraNochebuena:'until the Christmas Eve she made so beautiful', yaNochebuena:'Merry Christmas, Marle',
    rinAnte:'Made by her hands', rinTitulo:'The house, corner by corner', rinIntro:'She thought of every detail. Tap a photo to see it large.',
    vAnte:'The full tour', vTitulo:'How Christmas welcomes us at home',
    vTexto:"From the entrance to the kitchen, from the dining room to the tree, and finally the nativity scene with its star shining. All of it, Marle's work.",
    espAnte:'The best time of the year', espTitulo:'Why Christmas is special with her',
    feliz:'Merry Christmas, Marle', cierreTexto:'Thank you for filling our home with light.',
    compartir:'Share this gift', agenda:"The family's Christmas schedule",
    pie:'With love, from Harold to Marle · Christmas 2026', cerrar:'Close',
    msg:'Thank you, Marle, for giving our Christmas that special touch. Look how the house turned out:'
  }
};

const RINCONES = [
  { f:'marle-arbol', es:['El árbol','Blanco, plata y dorado, con su gran cinta de satín'], en:['The tree','White, silver and gold, with its great satin ribbon'] },
  { f:'marle-pesebre-casita', es:['El pesebre','La casita del Niño Dios y su estrella encendida'], en:['The nativity scene','The little house of Baby Jesus and its shining star'] },
  { f:'marle-arbol-detalle', es:['Mariposas y pajaritos','Copos de nieve y estrellas tejidas en cada rama'], en:['Butterflies and little birds','Snowflakes and woven stars on every branch'] },
  { f:'marle-consola', es:['La consola de los renos','Renos blancos y arbolitos plateados frente al espejo'], en:['The reindeer console','White reindeer and silver trees by the mirror'] },
  { f:'marle-arbol-base', es:['Al pie del árbol','El venadito y los regalos esperando la Nochebuena'], en:['At the foot of the tree','The little deer and the gifts waiting for Christmas Eve'] },
  { f:'marle-pesebre', es:['El pueblito','Casitas, luces y figuras alrededor del pesebre'], en:['The little village','Houses, lights and figures around the manger'] },
  { f:'marle-sagrada-familia', es:['La Sagrada Familia','En dorado, junto al arbolito calado'], en:['The Holy Family','In gold, beside the lace-cut tree'] },
  { f:'marle-comedor', es:['El comedor','Centro de mesa y camino con renos'], en:['The dining room','Centerpiece and reindeer table runner'] },
  { f:'marle-hohoho', es:['Ho Ho Ho','La alegría también va abajo de la consola'], en:['Ho Ho Ho','Joy fills the shelf below the console too'] },
  { f:'marle-cocina', es:['La cocina','Hasta los tarritos se vistieron de Navidad'], en:['The kitchen','Even the jars dressed up for Christmas'] },
  { f:'marle-santa-cuenta', es:['Santa cuenta los días','El letrero que lleva la cuenta hasta su llegada'], en:['Santa counts the days','The sign counting down to his arrival'] },
  { f:'marle-muneco', es:['El que nos recibe','El muñeco navideño de la entrada'], en:['Our greeter','The Christmas doll at the entrance'] }
];

const ESPECIAL = [
  { f:'marle-arbol-detalle', es:['Le pone el toque','Donde ella pone las manos, la casa cambia: una cinta, una mariposa, una luz.'], en:['She adds the touch','Wherever she puts her hands, the house changes: a ribbon, a butterfly, a light.'] },
  { f:'marle-consola', es:['Piensa cada detalle','Nada queda al azar: cada rincón tiene su historia y su lugar.'], en:['She thinks of every detail','Nothing is left to chance: every corner has its story and its place.'] },
  { f:'marle-comedor', es:['Nos reúne','Gracias a ella la casa se siente hogar, y la Navidad se vive en familia.'], en:['She brings us together','Thanks to her the house feels like home, and Christmas is lived as a family.'] }
];

const ESCENA = ['marle-arbol','marle-pesebre-casita','marle-consola','marle-arbol-detalle','marle-pesebre','marle-comedor','marle-sagrada-familia'];

let lang = 'es';
try { lang = localStorage.getItem('gm-lang') || 'es'; } catch(e) {}
const $ = s => document.querySelector(s);
const t = k => T[lang][k];

function pintarTextos() {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-t]').forEach(el => { const v = t(el.dataset.t); if (v) el.textContent = v; });
  $('#idioma').textContent = lang === 'es' ? 'EN' : 'ES';
}

/* Portada: fotos que pasan solas */
function pintarEscena() {
  $('#escenaFotos').innerHTML = ESCENA.map((f,i) => `<figure class="${i ? '' : 'ver'}" style="--bg:url('img/${f}.jpg')"><img src="img/${f}.jpg" alt="" ${i ? 'loading="lazy"' : ''}></figure>`).join('');
  $('#puntos').innerHTML = ESCENA.map((_,i) => `<span class="${i ? '' : 'ver'}"></span>`).join('');
  let i = 0;
  setInterval(() => {
    if (document.hidden) return;
    const figs = document.querySelectorAll('#escenaFotos figure'), pts = document.querySelectorAll('#puntos span');
    figs[i].classList.remove('ver'); pts[i].classList.remove('ver');
    i = (i + 1) % figs.length;
    figs[i].classList.add('ver'); pts[i].classList.add('ver');
  }, 6000);
}

/* Aparecer al bajar */
const obs = 'IntersectionObserver' in window
  ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } }), { threshold:.1 })
  : null;
function observar(sel) {
  document.querySelectorAll(sel).forEach((p,k) => {
    p.style.transitionDelay = (k % 3) * .12 + 's';
    obs ? obs.observe(p) : p.classList.add('visible');
  });
}

function pintarMosaico() {
  $('#mosaico').innerHTML = RINCONES.map((r,i) => `<figure class="pieza" data-i="${i}">
      <img src="img/${r.f}.jpg" alt="${r[lang][0]}" loading="lazy">
      <figcaption><b>${r[lang][0]}</b><small>${r[lang][1]}</small></figcaption></figure>`).join('');
  observar('.pieza');
}
function pintarEspecial() {
  $('#tres').innerHTML = ESPECIAL.map((r,i) => `<article class="carta">
      <img src="img/${r.f}.jpg" alt="" loading="lazy">
      <div><span class="num">${i + 1}</span><h3>${r[lang][0]}</h3><p>${r[lang][1]}</p></div></article>`).join('');
  observar('.carta');
}

/* Visor de fotos con su nombre */
let gi = 0;
function mostrar() {
  const r = RINCONES[gi];
  $('#visor img').src = `img/${r.f}.jpg`;
  $('#visorPie').textContent = `${r[lang][0]} · ${r[lang][1]}`;
}
$('#mosaico').addEventListener('click', e => {
  const p = e.target.closest('.pieza'); if (!p) return;
  gi = +p.dataset.i; mostrar(); $('#visor').hidden = false;
});
$('#visor').addEventListener('click', e => {
  if (e.target.classList.contains('cerrar')) { $('#visor').hidden = true; return; }
  gi = (gi + 1) % RINCONES.length; mostrar();
});
addEventListener('keydown', e => { if (e.key === 'Escape') $('#visor').hidden = true; });

/* Cuenta regresiva (hora de Colombia) */
function tic() {
  const ms = NOCHEBUENA - Date.now();
  if (ms <= 0) { $('#cuenta').style.display = 'none'; $('#cuentaPie').textContent = t('yaNochebuena'); return; }
  const d = Math.floor(ms / 864e5), h = Math.floor(ms / 36e5) % 24, m = Math.floor(ms / 6e4) % 60, s = Math.floor(ms / 1e3) % 60;
  $('#cDias').textContent = d; $('#cHoras').textContent = String(h).padStart(2,'0');
  $('#cMin').textContent = String(m).padStart(2,'0'); $('#cSeg').textContent = String(s).padStart(2,'0');
}

/* Compartir */
$('#compartir').addEventListener('click', async () => {
  const url = 'https://gracias-marle.netlify.app/';
  if (navigator.share) { try { await navigator.share({ title: t('gracias'), text: t('msg'), url }); return; } catch(e) { if (e.name === 'AbortError') return; } }
  window.open(`https://wa.me/?text=${encodeURIComponent(t('msg') + ' ' + url)}`, '_blank');
});

/* Idioma */
$('#idioma').addEventListener('click', () => {
  lang = lang === 'es' ? 'en' : 'es';
  try { localStorage.setItem('gm-lang', lang); } catch(e) {}
  pintarTextos(); pintarMosaico(); pintarEspecial(); tic();
});

/* Lucecitas */
(function luces() {
  const c = $('#luces'), x = c.getContext('2d');
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let w, h, puntos;
  const colores = ['232,196,120','250,243,228','255,214,150','190,220,255'];
  function medir() {
    w = c.width = innerWidth; h = c.height = innerHeight;
    puntos = Array.from({ length: Math.min(60, Math.floor(w / 16)) }, () => ({
      x: Math.random()*w, y: Math.random()*h, r: Math.random()*1.8 + .6,
      v: Math.random()*.35 + .1, f: Math.random()*6.28, c: colores[Math.floor(Math.random()*colores.length)]
    }));
  }
  function cuadro() {
    x.clearRect(0,0,w,h);
    for (const p of puntos) {
      p.y += p.v; p.f += .03; if (p.y > h + 5) { p.y = -5; p.x = Math.random()*w; }
      const a = .3 + .45 * Math.abs(Math.sin(p.f));
      x.beginPath(); x.fillStyle = `rgba(${p.c},${a})`; x.shadowBlur = 10; x.shadowColor = `rgba(${p.c},1)`;
      x.arc(p.x + Math.sin(p.f)*6, p.y, p.r, 0, 6.28); x.fill();
    }
    requestAnimationFrame(cuadro);
  }
  addEventListener('resize', medir); medir(); cuadro();
})();

pintarTextos(); pintarEscena(); pintarMosaico(); pintarEspecial(); tic(); setInterval(tic, 1000);
if ('serviceWorker' in navigator) addEventListener('load', () => navigator.serviceWorker.register('sw.js').then(r => r.update()).catch(() => {}));
