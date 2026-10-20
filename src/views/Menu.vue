<script setup>
import { ref, computed } from "vue";
import { menu } from "../data/menu";
const active = ref("tot");
const shown = computed(() =>
  active.value === "tot" ? menu : menu.filter((g) => g.id === active.value),
);
</script>
<template>
  <section class="wrap">
    <div class="page-head">
      <p class="eyebrow">LA CARTA · メニュー</p>
      <h1>La gana<br /><span class="red">mana.</span></h1>
      <p>
        Per picar, per compartir o per quedar-te el bol sencer. Aquí es ve a
        menjar bé.
      </p>
    </div>
    <div class="menu-banner">
      <img
        src="/editorial/gyoza.webp"
        alt="Gyozes cruixents de porc i verdures"
      />
      <div>
        <span class="tag">PRIMER, UNA GYOZA.</span>
        <p>I després ja decidim.</p>
      </div>
    </div>
    <nav class="categories" aria-label="Categories de la carta">
      <button @click="active = 'tot'" :aria-pressed="active === 'tot'">
        Tot</button
      ><button
        v-for="g in menu"
        :key="g.id"
        @click="active = g.id"
        :aria-pressed="active === g.id"
      >
        {{ g.title }}
      </button>
    </nav>
    <div class="menu-groups" aria-live="polite">
      <section v-for="(g, i) in shown" :key="g.id" class="group">
        <div class="group-title">
          <span class="eyebrow">0{{ menu.indexOf(g) + 1 }}</span>
          <h2>{{ g.title }}</h2>
        </div>
        <div class="items">
          <article v-for="d in g.items" :key="d.name">
            <div>
              <h3>{{ d.name }}</h3>
              <p>{{ d.desc }}</p>
            </div>
            <b>{{ d.price }}</b>
          </article>
        </div>
      </section>
    </div>
    <p class="demo-note">
      Carta conceptual. Si això fos una reserva real, consulta sempre els
      ingredients i els al·lèrgens amb l’equip.
    </p>
  </section>
</template>
<style scoped>
.menu-banner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  border: 2px solid;
  background: #f34546;
  max-height: 280px;
  overflow: hidden;
}
.menu-banner > img {
  width: 100%;
  height: 280px;
  object-fit: cover;
}
.menu-banner > div {
  text-align: center;
  padding: 25px;
}
.menu-banner > div > p {
  font-family: AnisakiDisplay;
  font-size: 42px;
  line-height: 1;
  margin: 22px 0 0;
}
.categories {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 35px 0;
  border-bottom: 2px solid;
  position: sticky;
  top: 0;
  z-index: 5;
  background: #f7f2e5;
}
.categories button {
  border: 1px solid;
  padding: 10px 16px;
  background: none;
  font-size: 12px;
}
.categories button[aria-pressed="true"] {
  background: #191919;
  color: #f7f2e5;
}
.menu-groups {
  padding-block: 20px 50px;
}
.group {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 45px;
  padding-block: 40px;
  border-bottom: 2px solid;
}
.group-title h2 {
  font-size: 48px;
  margin-top: 18px;
}
.items article {
  display: flex;
  justify-content: space-between;
  gap: 25px;
  border-bottom: 1px solid #19191940;
  padding: 20px 0;
}
.items article:last-child {
  border: 0;
}
.items h3 {
  font-size: 25px;
  margin-bottom: 10px;
}
.items p {
  font-size: 13px;
  max-width: 580px;
  margin: 0;
  color: #555;
}
.items b {
  white-space: nowrap;
  font-size: 14px;
}
.demo-note {
  padding-bottom: 45px;
}
@media (max-width: 700px) {
  .group {
    grid-template-columns: 1fr;
    gap: 0;
  }
  .group-title h2 {
    font-size: 44px;
  }
  .menu-banner > div {
    padding: 10px;
  }
  .menu-banner > div > p {
    font-size: 30px;
  }
  .menu-banner .tag {
    font-size: 9px;
  }
  .menu-banner > img {
    height: 220px;
  }
  .categories {
    gap: 6px;
  }
  .categories button {
    font-size: 11px;
    padding: 10px;
  }
}

.group {
  display: block;
  border-bottom: 3px double;
  padding-block: 30px;
}
.group-title {
  display: flex;
  align-items: center;
  gap: 20px;
  border-bottom: 1px solid;
  padding-bottom: 14px;
}
.group-title > .eyebrow {
  background: #e43337;
  color: #f7f2e5;
  padding: 10px;
  font-family: monospace;
}
.group-title h2 {
  font-size: 24px;
  margin: 0;
  line-height: 1.3;
}
.items {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 35px;
}
.items article {
  align-items: start;
  padding-block: 22px;
  border-bottom: 1px solid #19191940 !important;
}
.items h3 {
  font-family: Arial, sans-serif;
  font-size: 16px;
  text-transform: none;
  letter-spacing: -0.02em;
  font-weight: 700;
  line-height: 1.35;
}
.items b {
  font-family: monospace;
  font-size: 13px;
  margin-top: 2px;
}
.menu-banner {
  max-height: 190px;
  grid-template-columns: 1fr 2fr;
  background: #191919;
  color: #f7f2e5;
}
.menu-banner > img {
  height: 190px;
}
.menu-banner > div > p {
  font-family: AnisakiSquare;
  font-size: 25px;
  line-height: 1.25;
}
.menu-banner .tag {
  color: #191919;
  transform: rotate(-3deg);
}
.categories {
  font-family: monospace;
  gap: 0;
  padding: 18px 0;
  border-bottom: 3px double;
}
.categories button {
  border-right: 0;
}
.categories button:last-child {
  border-right: 1px solid;
}
@media (max-width: 700px) {
  .items {
    grid-template-columns: 1fr;
  }
  .group-title h2 {
    font-size: 21px;
  }
  .menu-banner > div > p {
    font-size: 17px;
  }
  .menu-banner .tag {
    font-size: 8px;
  }
  .menu-banner {
    grid-template-columns: 1fr 1.25fr;
  }
  .categories {
    gap: 6px;
  }
  .categories button {
    border: 1px solid;
  }
  .items h3 {
    font-size: 16px;
  }
}
</style>
