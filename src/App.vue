<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
const open = ref(false),
  route = useRoute();
watch(
  () => route.path,
  () => (open.value = false),
);
</script>
<template>
  <div>
    <a class="skip" href="#main">Salta al contingut</a>
    <div class="topline">
      JAPANESE STREET FOOD · MATARÓ · BON ROTLLO, BON MENJAR
    </div>
    <header class="header">
      <RouterLink to="/" aria-label="Anisaki, inici"
        ><img
          src="/brand/logo.svg"
          alt="Anisaki"
          width="205"
          height="35" /></RouterLink
      ><button
        class="mobile-toggle"
        @click="open = !open"
        :aria-expanded="open"
        aria-controls="nav"
      >
        {{ open ? "Tanca ✕" : "Menú ☰" }}
      </button>
      <nav id="nav" :class="{ open }">
        <RouterLink to="/menu">La carta</RouterLink
        ><RouterLink to="/our-story">Som Anisaki</RouterLink
        ><RouterLink to="/promotions-reviews">Els combos</RouterLink
        ><RouterLink class="nav-cta" to="/contact">Vine amb gana ↗</RouterLink>
      </nav>
    </header>
    <main id="main"><RouterView /></main>
    <footer>
      <div class="footer-top">
        <img src="/brand/logo-light.svg" alt="Anisaki" width="330" />
        <p>Del carrer al bol.<br />Del bol a la felicitat.</p>
      </div>
      <div class="footer-bottom">
        <span>MATARÓ · MARESME</span
        ><RouterLink to="/menu">La carta ↗</RouterLink
        ><RouterLink to="/contact">On som ↗</RouterLink
        ><small
          >© {{ new Date().getFullYear() }} Anisaki · Restaurant fictici /
          projecte de disseny</small
        >
      </div>
    </footer>
  </div>
</template>
<style>
@font-face {
  font-family: AnisakiDisplay;
  src: url("/fonts/barlow-condensed-latin-700-normal.woff2") format("woff2");
  font-weight: 700;
  font-display: swap;
}
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  background: #f7f2e5;
  color: #191919;
  font-family: Arial, Helvetica, sans-serif;
}
a {
  color: inherit;
  text-decoration: none;
}
button,
input,
select {
  font: inherit;
}
button {
  cursor: pointer;
}
img {
  display: block;
  max-width: 100%;
}
h1,
h2,
h3,
p {
  margin-top: 0;
}
h1,
h2,
h3 {
  font-family: AnisakiDisplay, "Arial Narrow", sans-serif;
  text-transform: uppercase;
  line-height: 0.94;
  letter-spacing: -0.025em;
}
h1 {
  font-size: clamp(65px, 9vw, 130px);
}
h2 {
  font-size: clamp(44px, 6vw, 80px);
}
h3 {
  font-size: 32px;
}
p {
  line-height: 1.65;
}
a:focus-visible,
button:focus-visible,
input:focus-visible,
select:focus-visible {
  outline: 3px solid #f34546;
  outline-offset: 5px;
}
.skip {
  position: fixed;
  left: 20px;
  top: -60px;
  z-index: 100;
  background: #191919;
  color: #fff;
  padding: 12px;
}
.skip:focus {
  top: 10px;
}
.topline {
  background: #191919;
  color: #f7f2e5;
  text-align: center;
  padding: 10px 15px;
  font-size: 10px;
  letter-spacing: 0.13em;
}
.header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
  padding: 25px 5%;
  border-bottom: 2px solid #191919;
}
.header nav {
  display: flex;
  align-items: center;
  gap: 30px;
  font-size: 13px;
  font-weight: bold;
}
.header nav a:not(.nav-cta):hover,
.header .router-link-active:not([href="/"]) {
  text-decoration: underline;
  text-underline-offset: 6px;
}
.nav-cta,
.btn {
  background: #f34546;
  border: 2px solid #191919;
  padding: 15px 22px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  font-size: 13px;
  font-weight: bold;
  box-shadow: 4px 4px 0 #191919;
  transition:
    transform 0.15s,
    box-shadow 0.15s;
}
.btn:hover,
.nav-cta:hover {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0 #191919;
}
.btn.light {
  background: #f7f2e5;
}
.mobile-toggle {
  display: none;
  border: 0;
  background: none;
  font-weight: bold;
}
.wrap {
  width: 90%;
  max-width: 1400px;
  margin: auto;
}
.eyebrow {
  font-size: 10px;
  letter-spacing: 0.14em;
  font-weight: bold;
  text-transform: uppercase;
}
.red {
  color: #e43337;
}
.page-head {
  padding: 65px 0 40px;
}
.page-head h1 {
  margin: 20px 0 25px;
}
.page-head > p:last-child {
  max-width: 540px;
  font-size: 17px;
}
.band {
  padding: 21px 5%;
  background: #f34546;
  border-block: 2px solid;
  font-family: AnisakiDisplay, sans-serif;
  font-size: 25px;
  letter-spacing: 0.04em;
  display: flex;
  justify-content: space-around;
  gap: 20px;
  overflow: hidden;
}
.band span {
  white-space: nowrap;
}
.section {
  padding-block: 80px;
}
.section-heading {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 30px;
  margin-bottom: 35px;
}
.section-heading h2 {
  margin-bottom: 0;
}
.section-heading > p {
  max-width: 300px;
  font-size: 14px;
}
.tag {
  display: inline-block;
  border: 2px solid;
  background: #f7f2e5;
  padding: 9px 14px;
  font-size: 11px;
  font-weight: bold;
  transform: rotate(-5deg);
}
footer {
  background: #191919;
  color: #f7f2e5;
  padding: 65px 5% 30px;
}
.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  padding-bottom: 50px;
}
.footer-top > p {
  font-family: AnisakiDisplay;
  font-size: 40px;
  line-height: 1;
  text-transform: uppercase;
  margin: 0;
}
.footer-bottom {
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
  border-top: 1px solid #f7f2e54f;
  padding-top: 25px;
  font-size: 11px;
}
.footer-bottom small {
  margin-left: auto;
}
.demo-note {
  font-size: 12px;
  color: #666;
}
@media (max-width: 750px) {
  .header {
    padding-block: 22px;
  }
  .header img {
    width: 160px;
  }
  .mobile-toggle {
    display: block;
  }
  .header nav {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #f7f2e5;
    padding: 25px 5%;
    z-index: 20;
    flex-direction: column;
    align-items: stretch;
    border-bottom: 2px solid;
  }
  .header nav.open {
    display: flex;
  }
  .section {
    padding-block: 55px;
  }
  .section-heading {
    display: block;
  }
  .section-heading > p {
    margin-top: 20px;
  }
  .band {
    font-size: 20px;
  }
  .band span:last-child {
    display: none;
  }
  .footer-top {
    display: block;
  }
  .footer-top img {
    width: 240px;
    margin-bottom: 35px;
  }
  .footer-bottom small {
    margin-left: 0;
    width: 100%;
  }
}
@media (prefers-reduced-motion: reduce) {
  * {
    transition: none !important;
    scroll-behavior: auto !important;
  }
}
</style>
