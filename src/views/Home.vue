<script setup>
const dishes = [
  {
    name: "Tonkotsu ramen",
    img: "ramen",
    price: "12,90 €",
    desc: "Brou de porc, fideus, chashu i ou marinat.",
    label: "EL BOL QUE ABRAÇA",
  },
  {
    name: "Gyoza",
    img: "gyoza",
    price: "6,90 €",
    desc: "Cinc mossegades cruixents. Porc i verdures.",
    label: "CRUNCH. I UNA ALTRA.",
  },
  {
    name: "Chicken karaage",
    img: "karaage",
    price: "10,90 €",
    desc: "Pollastre japonès fregit, gingebre i soja.",
    label: "PER LLEPAR-TE ELS DITS",
  },
];
</script>
<template>
  <section class="hero wrap">
    <div class="hero-copy">
      <p class="eyebrow">ANISAKI · JAPANESE STREET FOOD</p>
      <h1>Molt Japó.<br /><span>Poc formal.</span></h1>
      <p>
        Ramen que abraça. Gyozes que volen.<br />Menjar de carrer amb accent del
        Maresme.
      </p>
      <div class="actions">
        <RouterLink class="btn" to="/menu">Ataca la carta ↗</RouterLink
        ><RouterLink class="plain" to="/promotions-reviews"
          >Avui, combo?</RouterLink
        >
      </div>
      <p class="small-note">BOLS CALENTS. MANS OCUPADES. ZERO CERIMÒNIA.</p>
    </div>
    <div class="hero-art">
      <div class="hero-photo">
        <img
          src="/editorial/ramen.webp"
          alt="Ramen tonkotsu amb chashu, ou marinat i ceba tendra"
          fetchpriority="high"
        />
      </div>
      <span class="tag hero-tag">ITADAKIMASU!</span>
      <div class="comic-sticker">
        <img src="/home/img-ramen.svg" alt="" aria-hidden="true" />
      </div>
      <span class="photo-note">01 / FIDEUS, SOROLL I FELICITAT</span>
    </div>
  </section>
  <div class="band">
    <span>SLURP!</span><span>DEL CARRER AL BOL</span><span>CRUNCH!</span
    ><span>FET PER COMPARTIR</span>
  </div>
  <section class="section wrap">
    <div class="section-heading">
      <div>
        <p class="eyebrow">ELS SOSPITOSOS HABITUALS</p>
        <h2>Entra pels ulls.<br />Es queda al cap.</h2>
      </div>
      <p>
        Cuina japonesa de carrer, molt de sabor i cap necessitat de menjar en
        silenci.
      </p>
    </div>
    <div class="dishes">
      <RouterLink v-for="d in dishes" :key="d.img" to="/menu" class="dish"
        ><div class="dish-photo">
          <img
            :src="'/editorial/' + d.img + '.webp'"
            :alt="d.name"
            loading="lazy"
          /><span>↗</span>
        </div>
        <p class="eyebrow">{{ d.label }}</p>
        <div class="dish-title">
          <h3>{{ d.name }}</h3>
          <b>{{ d.price }}</b>
        </div>
        <p>{{ d.desc }}</p></RouterLink
      >
    </div>
    <div class="menu-link">
      <RouterLink class="btn light" to="/menu">La carta sencera ↗</RouterLink>
    </div>
  </section>
  <section class="story-strip">
    <div class="wrap story-grid">
      <div class="story-illustration">
        <img
          src="/our-story/img-ourstory02.svg"
          alt="Il·lustració japonesa de la marca Anisaki"
          loading="lazy"
        />
      </div>
      <div>
        <p class="eyebrow">SOM ANISAKI</p>
        <h2>
          Respecte pel sabor.<br /><span class="red">Poca solemnitat.</span>
        </h2>
        <p>
          Ens agraden els bols plens, les taules compartides i les idees que
          travessen fronteres. Del Japó al Maresme, amb una mica de soroll pel
          camí.
        </p>
        <RouterLink class="btn light" to="/our-story"
          >La nostra història ↗</RouterLink
        >
      </div>
    </div>
  </section>
  <section class="last-call wrap">
    <p class="eyebrow">ENS VEIEM A TAULA?</p>
    <h2>Tu porta la gana.</h2>
    <RouterLink class="btn" to="/contact"
      >Nosaltres posem la resta ↗</RouterLink
    >
  </section>
</template>
<style scoped>
.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5%;
  align-items: center;
  padding-block: 65px 75px;
  min-height: 710px;
}
.hero h1 {
  font-size: clamp(68px, 8vw, 116px);
  margin: 25px 0;
}
.hero h1 span {
  color: #e43337;
}
.hero-copy > p:not(.eyebrow) {
  font-size: 17px;
}
.actions {
  display: flex;
  align-items: center;
  gap: 28px;
  margin: 30px 0;
}
.plain {
  font-size: 13px;
  border-bottom: 1px solid;
  padding-bottom: 5px;
}
.hero-copy .small-note {
  font-size: 9px;
  letter-spacing: 0.08em;
  margin-top: 35px;
}
.hero-art {
  position: relative;
  padding: 20px 0;
}
.hero-photo {
  border: 3px solid;
  transform: rotate(3deg);
  box-shadow: 9px 9px 0 #191919;
}
.hero-photo img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
}
.hero-tag {
  position: absolute;
  top: 0;
  left: -18px;
  background: #f7f2e5;
  transform: rotate(-10deg);
  font-size: 15px;
}
.comic-sticker {
  position: absolute;
  bottom: -30px;
  right: -18px;
  width: 125px;
  transform: rotate(12deg);
  filter: drop-shadow(3px 4px 0 #191919);
}
.comic-sticker img {
  height: 190px;
  object-fit: contain;
}
.photo-note {
  position: absolute;
  bottom: -20px;
  left: 0;
  font-size: 9px;
  letter-spacing: 0.09em;
}
.dishes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}
.dish-photo {
  border: 2px solid;
  position: relative;
  margin-bottom: 23px;
  overflow: hidden;
}
.dish-photo img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  transition: transform 0.25s;
}
.dish:hover img {
  transform: scale(1.04);
}
.dish-photo span {
  position: absolute;
  bottom: 12px;
  right: 12px;
  background: #f7f2e5;
  border: 2px solid;
  padding: 8px 12px;
}
.dish-title {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
}
.dish-title h3 {
  margin: 0;
  font-size: 31px;
}
.dish-title b {
  font-size: 13px;
  white-space: nowrap;
}
.dish > p:last-child {
  font-size: 13px;
  margin-top: 13px;
}
.menu-link {
  text-align: center;
  margin-top: 35px;
}
.story-strip {
  background: #eee5cf;
  border-block: 2px solid;
  padding: 65px 0;
}
.story-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 8%;
}
.story-illustration {
  background-image: radial-gradient(#19191925 1px, transparent 1px);
  background-size: 8px 8px;
}
.story-illustration img {
  height: 390px;
  margin: auto;
  max-width: 90%;
}
.story-grid p:not(.eyebrow) {
  max-width: 460px;
}
.last-call {
  text-align: center;
  padding-block: 80px;
}
.last-call h2 {
  font-size: clamp(55px, 8vw, 110px);
  margin: 20px 0 30px;
}
@media (max-width: 750px) {
  .hero {
    grid-template-columns: 1fr;
    padding-block: 40px 70px;
    gap: 30px;
  }
  .hero h1 {
    font-size: 85px;
  }
  .hero-art {
    margin: 5px 15px 25px 0;
  }
  .dishes {
    grid-template-columns: 1fr;
  }
  .dish {
    margin-bottom: 22px;
  }
  .story-grid {
    grid-template-columns: 1fr;
  }
  .story-illustration img {
    height: 260px;
  }
  .story-grid > div:last-child {
    margin-top: 30px;
  }
  .comic-sticker {
    width: 100px;
  }
  .comic-sticker img {
    height: 145px;
  }
}
@media (min-width: 751px) and (max-width: 1000px) {
  .dish-title {
    display: block;
  }
  .dish-title b {
    display: block;
    margin-top: 12px;
  }
}
</style>
