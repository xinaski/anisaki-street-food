<script setup>
const dishes = [
  {
    name: "Tonkotsu ramen",
    jp: "ラーメン",
    img: "ramen",
    price: "12,90 €",
    desc: "Brou de porc, fideus, chashu i ou marinat.",
  },
  {
    name: "Gyoza",
    jp: "餃子",
    img: "gyoza",
    price: "6,90 €",
    desc: "Cinc mossegades cruixents. Porc i verdures.",
  },
  {
    name: "Chicken karaage",
    jp: "唐揚げ",
    img: "karaage",
    price: "10,90 €",
    desc: "Pollastre japonès fregit, gingebre i soja.",
  },
];
</script>
<template>
  <section class="cover wrap">
    <div class="edition">
      <span>ANISAKI / STREET FOOD JOURNAL</span><span>MATARÓ · MARESME</span
      ><span>VOL. 01 — AMB GANA</span>
    </div>
    <div class="cover-heading">
      <span class="vertical" lang="ja">いただきます</span>
      <div>
        <p class="eyebrow">JAPÓ AL PLAT. CARRER A LES VENES.</p>
        <h1>Menja. Riu.<br /><span>Repeteix.</span></h1>
      </div>
      <div class="seal">
        <span>ANISAKI</span><b lang="ja">食</b><span>STREET FOOD</span>
      </div>
    </div>
    <div class="panels">
      <RouterLink to="/menu" class="panel-main"
        ><img
          src="/editorial/ramen.webp"
          alt="Bol de ramen tonkotsu amb chashu i ou marinat"
          fetchpriority="high"
        /><span class="photo-rail" lang="ja">ラーメン</span
        ><span class="panel-number">01 / EL BOL QUE ABRAÇA</span
        ><span class="speech">SLURP!</span></RouterLink
      >
      <div class="panel-side">
        <div class="illustrated">
          <span class="eyebrow">SENSE PROTOCOL. AMB PALILLOS.</span
          ><img
            src="/home/img-ramen.svg"
            alt="Il·lustració de ramen i palillos d’Anisaki"
          /><span class="corner-label" lang="ja">おいしい</span>
        </div>
        <div class="panel-action">
          <p class="eyebrow">LA GANA MANA</p>
          <p>
            Ramen, gyozes i idees que travessen fronteres. Del Japó al Maresme,
            sense fer gaire cerimònia.
          </p>
          <RouterLink to="/menu">Obre la carta <span>↗</span></RouterLink>
        </div>
      </div>
    </div>
    <div class="cover-caption">
      <span>CRUIXENT / CALENT / PER COMPARTIR</span
      ><RouterLink to="/promotions-reviews"
        >Avui ens fem un combo? ↗</RouterLink
      >
    </div>
  </section>
  <section class="counter wrap">
    <div class="counter-heading">
      <span lang="ja">メニュー</span>
      <div>
        <p class="eyebrow">ELS FIXOS DE LA BARRA</p>
        <h2>Tres bones<br />obsessions.</h2>
      </div>
      <RouterLink to="/menu">Tota la carta ↗</RouterLink>
    </div>
    <div class="dish-strips">
      <RouterLink
        v-for="(d, i) in dishes"
        :key="d.img"
        to="/menu"
        class="dish-strip"
        ><span class="dish-index">0{{ i + 1 }}</span
        ><img
          :src="'/editorial/' + d.img + '.webp'"
          :alt="d.name"
          loading="lazy"
        />
        <div class="dish-name">
          <span lang="ja">{{ d.jp }}</span>
          <h3>{{ d.name }}</h3>
          <p>{{ d.desc }}</p>
        </div>
        <b>{{ d.price }}</b
        ><span class="arrow">↗</span></RouterLink
      >
    </div>
  </section>
  <section class="noren">
    <div class="noren-inner wrap">
      <span class="vertical noren-jp" lang="ja">いただきます</span>
      <div>
        <p class="eyebrow">LA NOSTRA MANERA DE FER</p>
        <h2>Una mica de Japó.<br /><span>Una mica de nosaltres.</span></h2>
        <p>
          Ens agraden les barres petites, els bols plens i les converses que
          s’allarguen. Respecte pel sabor. Poca solemnitat.
        </p>
        <RouterLink class="btn light" to="/our-story">Som Anisaki ↗</RouterLink>
      </div>
      <img
        src="/our-story/img-ourstory02.svg"
        alt="Personatge d’Anisaki menjant ramen"
        loading="lazy"
      />
    </div>
  </section>
  <section class="table-call wrap">
    <div>
      <p class="eyebrow">PROPER CAPÍTOL: A TAULA</p>
      <h2>Guarda lloc<br />per a la gana.</h2>
    </div>
    <RouterLink class="btn" to="/contact">Ens veiem al Maresme ↗</RouterLink>
  </section>
</template>
<style scoped>
.cover {
  padding-top: 25px;
}
.edition {
  display: flex;
  justify-content: space-between;
  border-block: 1px solid;
  padding: 11px 0;
  font-family: monospace;
  font-size: 9px;
  letter-spacing: 0.08em;
}
.cover-heading {
  display: grid;
  grid-template-columns: 70px 1fr 115px;
  align-items: center;
  padding: 35px 0;
  gap: 25px;
}
.vertical {
  writing-mode: vertical-rl;
  letter-spacing: 0.3em;
  font-size: 20px;
  font-weight: bold;
  color: #e43337;
}
.cover-heading > div:nth-child(2) {
  text-align: center;
}
.cover-heading h1 {
  font-size: clamp(47px, 6.6vw, 94px);
  line-height: 1.05;
  margin: 15px 0 5px;
  letter-spacing: -0.06em;
}
.cover-heading h1 span {
  color: #e43337;
}
.seal {
  border: 3px double #e43337;
  border-radius: 50%;
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #e43337;
  transform: rotate(9deg);
  gap: 5px;
}
.seal span {
  font-size: 8px;
  letter-spacing: 0.08em;
  font-family: monospace;
}
.seal b {
  font-size: 40px;
  line-height: 1;
}
.panels {
  display: grid;
  grid-template-columns: 1.45fr 1fr;
  border: 3px solid;
  gap: 0;
}
.panel-main {
  position: relative;
  min-width: 0;
  overflow: hidden;
  border-right: 3px solid;
  background: #f34546;
  display: block;
}
.panel-main > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 1.16;
}
.photo-rail {
  position: absolute;
  top: 22px;
  left: 22px;
  writing-mode: vertical-rl;
  background: #f7f2e5;
  padding: 15px 9px;
  border: 1px solid;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 0.2em;
}
.panel-number {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: #191919;
  color: #f7f2e5;
  padding: 12px 20px;
  font-size: 10px;
  font-family: monospace;
  letter-spacing: 0.1em;
}
.speech {
  position: absolute;
  top: 25px;
  right: 20px;
  background: #f7f2e5;
  border: 2px solid;
  border-radius: 50%;
  padding: 20px 14px;
  font-family: AnisakiSquare;
  font-size: 22px;
  transform: rotate(10deg);
}
.panel-side {
  display: flex;
  flex-direction: column;
}
.illustrated {
  background-image: radial-gradient(#19191935 1px, transparent 1px);
  background-size: 7px 7px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 22px;
  flex: 1;
  min-height: 250px;
  border-bottom: 3px solid;
}
.illustrated > .eyebrow {
  background: #f7f2e5;
  padding: 5px;
  font-size: 9px;
  align-self: flex-start;
}
.illustrated img {
  height: 225px;
  max-width: 80%;
  object-fit: contain;
  transform: rotate(-12deg);
}
.corner-label {
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-size: 20px;
  color: #e43337;
  font-weight: bold;
  background: #f7f2e5;
  padding: 8px;
  border: 1px solid;
}
.panel-action {
  background: #f34546;
  padding: 25px 30px;
}
.panel-action > p:not(.eyebrow) {
  max-width: 370px;
  font-size: 14px;
  line-height: 1.6;
}
.panel-action > a {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid;
  padding-top: 17px;
  margin-top: 20px;
  font-size: 16px;
  font-weight: bold;
}
.panel-action > a > span {
  font-size: 25px;
}
.cover-caption {
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 3px double;
  font-family: monospace;
  font-size: 9px;
  gap: 15px;
}
.counter {
  padding-block: 75px;
}
.counter-heading {
  display: flex;
  align-items: center;
  gap: 25px;
  margin-bottom: 30px;
}
.counter-heading > span {
  writing-mode: vertical-rl;
  background: #e43337;
  color: #f7f2e5;
  padding: 14px 8px;
  font-size: 22px;
  letter-spacing: 0.15em;
}
.counter-heading h2 {
  font-size: clamp(30px, 3.5vw, 48px);
  line-height: 1.15;
  margin: 0;
}
.counter-heading > a {
  margin-left: auto;
  align-self: flex-end;
  font-size: 12px;
  border-bottom: 1px solid;
  padding-bottom: 6px;
}
.dish-strip {
  display: grid;
  grid-template-columns: 30px 140px 1fr 100px 25px;
  gap: 25px;
  align-items: center;
  border-top: 1px solid;
  padding: 20px 0;
}
.dish-strip:last-child {
  border-bottom: 1px solid;
}
.dish-index {
  font-family: monospace;
  font-size: 11px;
  color: #e43337;
  align-self: start;
  padding-top: 8px;
}
.dish-strip > img {
  width: 140px;
  aspect-ratio: 1.2;
  object-fit: cover;
  border: 1px solid;
}
.dish-name > span {
  font-size: 16px;
  color: #e43337;
  letter-spacing: 0.2em;
}
.dish-name h3 {
  font-size: 24px;
  margin: 7px 0 10px;
}
.dish-name p {
  margin: 0;
  font-size: 12px;
  color: #555;
}
.dish-strip > b {
  font-family: monospace;
  font-size: 17px;
  text-align: right;
}
.arrow {
  font-size: 23px;
}
.noren {
  background: #191919;
  color: #f7f2e5;
  border-block: 5px double #f7f2e5;
  padding-block: 55px;
}
.noren-inner {
  display: grid;
  grid-template-columns: 50px 1fr 240px;
  gap: 35px;
  align-items: center;
}
.noren h2 {
  font-size: clamp(28px, 3.4vw, 48px);
  line-height: 1.25;
  margin: 20px 0;
}
.noren h2 span {
  color: #fa7670;
}
.noren p:not(.eyebrow) {
  font-size: 14px;
  max-width: 510px;
  margin-bottom: 25px;
}
.noren-inner > img {
  width: 230px;
  max-height: 300px;
  object-fit: contain;
}
.table-call {
  padding-block: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  background-image:
    linear-gradient(#f7f2e5dc, #f7f2e5dc), url("/home/texture.png");
  background-size: auto, 400px;
}
.table-call h2 {
  font-size: clamp(32px, 4vw, 52px);
  line-height: 1.2;
  margin: 18px 0 0;
}
.table-call > .btn {
  white-space: nowrap;
}
@media (max-width: 750px) {
  .edition {
    font-size: 8px;
  }
  .edition > span:nth-child(2) {
    display: none;
  }
  .cover-heading {
    grid-template-columns: 25px 1fr;
    gap: 12px;
    padding-block: 30px;
  }
  .cover-heading .vertical {
    font-size: 15px;
  }
  .cover-heading h1 {
    font-size: clamp(30px, 7.8vw, 54px);
  }
  .cover-heading .eyebrow {
    font-size: 8px;
    letter-spacing: 0.02em;
  }
  .seal {
    display: none;
  }
  .panels {
    grid-template-columns: 1fr;
  }
  .panel-main {
    border-right: 0;
    border-bottom: 3px solid;
  }
  .panel-side {
    display: grid;
    grid-template-columns: 1fr 1.25fr;
  }
  .illustrated {
    padding: 10px;
    min-height: 200px;
    border-bottom: 0;
    border-right: 3px solid;
  }
  .illustrated > .eyebrow {
    font-size: 7px;
  }
  .illustrated img {
    height: 165px;
    max-width: 100%;
  }
  .corner-label {
    font-size: 13px;
    bottom: 8px;
    right: 8px;
    padding: 4px;
  }
  .panel-action {
    padding: 18px 15px;
  }
  .panel-action > p:not(.eyebrow) {
    font-size: 12px;
  }
  .panel-action .eyebrow {
    font-size: 8px;
  }
  .panel-action > a {
    font-size: 13px;
  }
  .cover-caption {
    font-size: 8px;
  }
  .cover-caption > span {
    max-width: 45%;
  }
  .counter {
    padding-block: 50px;
  }
  .counter-heading {
    gap: 14px;
  }
  .counter-heading h2 {
    font-size: 25px;
  }
  .counter-heading > span {
    font-size: 18px;
  }
  .counter-heading > a {
    font-size: 10px;
    max-width: 70px;
  }
  .dish-strip {
    grid-template-columns: 75px 1fr 68px;
    gap: 12px;
    padding: 18px 0;
  }
  .dish-index,
  .arrow {
    display: none;
  }
  .dish-strip > img {
    width: 75px;
    aspect-ratio: 1;
  }
  .dish-name h3 {
    font-size: clamp(13px, 3.5vw, 19px);
    line-height: 1.2;
    margin: 6px 0;
  }
  .dish-name > span {
    font-size: 11px;
  }
  .dish-name p {
    font-size: 10px;
  }
  .dish-strip > b {
    font-size: 13px;
  }
  .noren-inner {
    grid-template-columns: 1fr 110px;
    gap: 15px;
  }
  .noren-jp {
    display: none;
  }
  .noren h2 {
    font-size: clamp(20px, 4vw, 30px);
  }
  .noren p:not(.eyebrow) {
    font-size: 12px;
  }
  .noren-inner > img {
    width: 110px;
  }
  .noren .btn {
    font-size: 11px;
    padding: 12px;
  }
  .table-call {
    display: block;
    padding-block: 45px;
  }
  .table-call h2 {
    font-size: 32px;
    margin-bottom: 25px;
  }
  .photo-rail {
    font-size: 19px;
    top: 15px;
    left: 15px;
  }
  .speech {
    font-size: 18px;
    padding: 16px 12px;
  }
}
</style>
