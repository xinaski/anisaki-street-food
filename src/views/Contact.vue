<script setup>
import { ref } from "vue";
const guests = ref("2"),
  date = ref(""),
  time = ref("20:30"),
  done = ref(false);
const today = new Date().toLocaleDateString("en-CA");
function simulate() {
  done.value = true;
}
</script>
<template>
  <section class="wrap">
    <div class="page-head">
      <p class="eyebrow">MATARÓ · MARESME</p>
      <h1>La teva propera<br /><span class="red">bona taula.</span></h1>
      <p>
        Un racó del Japó, a prop de casa. Amb lloc per a la gana i per a les
        converses llargues.
      </p>
    </div>
    <div class="contact-grid">
      <div class="contact-poster">
        <img
          src="/editorial/karaage.webp"
          alt="Karaage cruixent amb llimona"
        /><span class="tag">ENS VEIEM AL MARESME!</span>
      </div>
      <div class="reservation">
        <p class="eyebrow">FEM LLOC A TAULA</p>
        <h2>Quants sereu?</h2>
        <p>
          Aquesta és una demostració de reserva. Pots provar-la; no s’envia cap
          sol·licitud.
        </p>
        <form @submit.prevent="simulate">
          <label
            >Persones<select v-model="guests">
              <option v-for="n in 8" :key="n" :value="String(n)">
                {{ n }} {{ n === 1 ? "persona" : "persones" }}
              </option>
            </select></label
          ><label
            >Dia<input
              v-model="date"
              type="date"
              :min="today"
              required /></label
          ><label
            >Hora<select v-model="time">
              <option>13:00</option>
              <option>14:00</option>
              <option>15:00</option>
              <option>20:30</option>
              <option>21:30</option>
              <option>22:00</option>
            </select></label
          ><button class="btn" type="submit">Prova la reserva ↗</button>
        </form>
        <p v-if="done" class="confirmation" role="status">
          Prova completada: taula per a {{ guests }}, el {{ date }} a les
          {{ time }}. No s’ha fet cap reserva real.
        </p>
        <div class="location">
          <p class="eyebrow">EL NOSTRE UNIVERS</p>
          <p>Mataró, Maresme.<br />Japó al plat. Mediterrani al costat.</p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Matar%C3%B3"
            target="_blank"
            rel="noopener noreferrer"
            >Explora Mataró al mapa ↗</a
          >
        </div>
      </div>
    </div>
    <p class="demo-note">
      Anisaki és un restaurant fictici. La ubicació és orientativa i el
      formulari és una demostració.
    </p>
  </section>
</template>
<style scoped>
.page-head h1 {
  font-size: clamp(60px, 8vw, 115px);
}
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 7%;
  align-items: start;
  margin: 20px 0 65px;
}
.contact-poster {
  position: relative;
  border: 2px solid;
  transform: rotate(-2deg);
  box-shadow: 8px 8px 0 #191919;
}
.contact-poster img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
}
.contact-poster .tag {
  position: absolute;
  bottom: 25px;
  left: 20px;
}
.reservation h2 {
  font-size: 56px;
  margin: 20px 0;
}
.reservation > p:not(.eyebrow) {
  font-size: 13px;
  max-width: 420px;
}
form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  margin-block: 25px;
}
form label {
  font-size: 11px;
  font-weight: bold;
}
input,
select {
  display: block;
  width: 100%;
  margin-top: 8px;
  border: 1px solid #191919;
  padding: 13px;
  background: none;
  color: #191919;
}
form .btn {
  grid-column: 1/-1;
  margin: 5px 4px 0 0;
}
.location {
  border-top: 2px solid;
  padding-top: 25px;
  margin-top: 35px;
}
.location p {
  font-size: 14px;
}
.location a {
  font-size: 12px;
  border-bottom: 1px solid;
}
.confirmation {
  background: #eee5cf;
  border: 1px solid;
  padding: 15px;
}
.demo-note {
  padding-bottom: 40px;
}
@media (max-width: 750px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 45px;
  }
  .contact-poster {
    margin-right: 8px;
  }
  .reservation h2 {
    font-size: 48px;
  }
}
</style>
