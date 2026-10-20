<script setup>
const combos = [
  [
    "Express",
    "9,90 €",
    "gyoza",
    "Per quan la gana no espera.",
    [
      "Gyoza, edamame o korokke",
      "Yakisoba, gyudon o okonomiyaki",
      "Aigua o refresc",
    ],
  ],
  [
    "Ramen lovers",
    "13,90 €",
    "ramen",
    "Un bon bol i que el món esperi.",
    ["Takoyaki o yakitori", "Tonkotsu, shoyu o miso picant", "Aigua o refresc"],
  ],
  [
    "Street food",
    "15,90 €",
    "karaage",
    "Avui ho volem tot.",
    [
      "Gyoza o edamame",
      "Katsudon, tonkatsu o karaage",
      "Mochi o dorayaki · Aigua o refresc",
    ],
  ],
  [
    "Doble Anisaki",
    "29,90 €",
    "gyoza",
    "Dos persones. Una bona decisió.",
    [
      "Dos entrants: takoyaki o yakitori",
      "Dos plats: katsudon, tonkatsu o karaage",
      "Un postre per compartir i dues begudes",
    ],
  ],
  [
    "Anisaki deluxe",
    "19,90 €",
    "ramen",
    "La gana també té dies de festa.",
    [
      "Dos entrants: ebi tempura o yakitori",
      "Unagidon, ramen especial o wafu burger",
      "Mochi o dorayaki · Una beguda",
    ],
  ],
  [
    "Combo Anisaki",
    "12,90 €",
    "karaage",
    "Una mica de tot. Molt de sabor.",
    [
      "Takoyaki, gyoza o edamame",
      "Unagidon, ramen especial o wafu burger",
      "Una beguda",
    ],
  ],
];
</script>
<template>
  <section class="wrap">
    <div class="page-head">
      <p class="eyebrow">ELS COMBOS</p>
      <h1>Junta plats.<br /><span class="red">Multiplica gana.</span></h1>
      <p>
        Sis maneres d’encertar-la. Promocions de dilluns a divendres, excepte
        festius.
      </p>
    </div>
    <div class="combos">
      <article v-for="(c, i) in combos" :key="c[0]">
        <div class="photo">
          <img
            :src="'/editorial/' + c[2] + '.webp'"
            :alt="'Plat representatiu del combo ' + c[0]"
            loading="lazy"
          /><span class="tag">COMBO 0{{ i + 1 }}</span>
        </div>
        <div class="combo-body">
          <div class="combo-title">
            <h2>{{ c[0] }}</h2>
            <strong>{{ c[1] }}</strong>
          </div>
          <p>{{ c[3] }}</p>
          <ul>
            <li v-for="s in c[4]" :key="s">{{ s }}</li>
          </ul>
          <RouterLink to="/contact">Vine a tastar-lo ↗</RouterLink>
        </div>
      </article>
    </div>
    <p class="demo-note">
      Fotografies representatives dels plats. Cervesa japonesa: suplement d’1 €.
      Restaurant fictici.
    </p>
  </section>
</template>
<style scoped>
.page-head h1 {
  font-size: clamp(60px, 8vw, 115px);
}
.combos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin: 10px 0 40px;
}
.combos article {
  border: 2px solid;
  background: #fffaf0;
  display: flex;
  flex-direction: column;
}
.photo {
  position: relative;
  border-bottom: 2px solid;
}
.photo img {
  width: 100%;
  aspect-ratio: 1.2;
  object-fit: cover;
}
.photo .tag {
  position: absolute;
  top: 15px;
  left: 15px;
  transform: rotate(-6deg);
}
.combo-body {
  padding: 25px;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.combo-title {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 10px;
}
.combo-title h2 {
  font-size: 34px;
  margin-bottom: 15px;
}
.combo-title strong {
  white-space: nowrap;
  font-size: 18px;
  color: #da3033;
}
.combo-body > p {
  font-size: 13px;
}
.combo-body ul {
  padding-left: 17px;
  font-size: 13px;
  line-height: 1.7;
  flex: 1;
}
.combo-body > a {
  border-top: 1px solid;
  padding-top: 17px;
  font-size: 12px;
  font-weight: bold;
  margin-top: 20px;
}
.demo-note {
  padding-bottom: 50px;
}
@media (max-width: 1000px) {
  .combos {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 600px) {
  .combos {
    grid-template-columns: 1fr;
  }
}
</style>
