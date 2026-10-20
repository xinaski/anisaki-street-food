<script setup>
const beliefs = [
  [
    "01",
    "El carrer inspira.",
    "Un bol calent, una parada petita, una conversa amb els colzes a la barra. Ens quedem amb aquesta manera de menjar.",
  ],
  [
    "02",
    "El sabor decideix.",
    "Brous, marinats, textures i aquell cruixent que se sent des de l’altra punta de la taula.",
  ],
  [
    "03",
    "La taula reuneix.",
    "Vine amb amics, amb una cita o amb tu mateix. L’únic requisit és portar gana.",
  ],
];
</script>
<template>
  <section class="wrap">
    <div class="page-head">
      <p class="eyebrow">SOM ANISAKI</p>
      <h1>Japó al cap.<br /><span class="red">Carrer a les venes.</span></h1>
    </div>
    <div class="story">
      <div class="illustration">
        <img
          src="/our-story/img-ourstory02.svg"
          alt="Personatge il·lustrat d’Anisaki menjant ramen"
        />
      </div>
      <div>
        <span class="tag">DE TÒQUIO AL MARESME</span>
        <h2>Una bona idea<br />comença amb gana.</h2>
        <p>
          Tot va començar amb un viatge al Japó. Entre carrers, mercats i barres
          petites, ens vam enamorar d’una cosa molt senzilla: menjar
          extraordinàriament bé sense haver de fer una cerimònia.
        </p>
        <p>
          Vam tornar amb el cap ple de bols, gyozes i sabors. I amb ganes de
          portar aquella energia a casa. Així neix Anisaki: street food japonès,
          curiositat i accent del Maresme.
        </p>
        <p>
          Respectem el que ens inspira i ens permetem jugar. Perquè la cuina
          també és això: trobar-te, barrejar i compartir.
        </p>
      </div>
    </div>
    <div class="beliefs">
      <article v-for="b in beliefs" :key="b[0]">
        <span class="eyebrow red">{{ b[0] }}</span>
        <h3>{{ b[1] }}</h3>
        <p>{{ b[2] }}</p>
      </article>
    </div>
    <div class="story-end">
      <h2>Menys protocol.<br />Més fideus.</h2>
      <RouterLink class="btn" to="/menu">Mira què es cou ↗</RouterLink>
    </div>
  </section>
</template>
<style scoped>
.page-head h1 {
  font-size: clamp(58px, 8vw, 110px);
}
.story {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8%;
  align-items: center;
  margin: 30px 0 70px;
}
.illustration {
  background: #f34546;
  border: 2px solid;
  box-shadow: 8px 8px 0 #191919;
  transform: rotate(-2deg);
  padding: 35px;
}
.illustration img {
  height: 420px;
  margin: auto;
  width: 100%;
  object-fit: contain;
}
.story h2 {
  font-size: 54px;
  margin: 35px 0 25px;
}
.story p {
  font-size: 15px;
}
.beliefs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px;
}
.beliefs article {
  border-top: 2px solid;
  padding-top: 20px;
}
.beliefs h3 {
  margin: 25px 0 15px;
}
.beliefs p {
  font-size: 14px;
}
.story-end {
  text-align: center;
  padding-block: 65px 80px;
}
.story-end h2 {
  margin-bottom: 35px;
}
@media (max-width: 750px) {
  .story,
  .beliefs {
    grid-template-columns: 1fr;
  }
  .illustration img {
    height: 270px;
  }
  .story > div:last-child {
    margin-top: 40px;
  }
  .story h2 {
    font-size: 48px;
  }
  .beliefs {
    gap: 30px;
  }
}
</style>
