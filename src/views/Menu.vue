<template>

  <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <h2 class="pb-6 max-w-lg font-sans text-5xl font-bold tracking-tight text-red-600 sm:text-7xl sm:leading-none">
      メニュー
    </h2>
    <div class="flex flex-col lg:flex-row lg:items-end">
      <div class="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
        <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none">
          La Nostra Carta
        </h2>
        <p class="text-base text-red-900 md:text-xl">
          Explora la nostra carta i gaudeix d’una experiència única. <b>¡Itadakimasu!</b>
        </p>
      </div>
      <div class="lg:w-1/2">
        <p class="text-base text-red-900 md:text-xl">
          A Anisaki Street Food, cada plat et transporta a Tòquio amb l’inconfusible sabor de l’autèntic street food japonès. Des d’uns 
          cruixents takoyaki fins a un reconfortant ramen tonkotsu, sense oblidar els dolços tradicionals com el mochi o el taiyaki de matcha.
        </p>
      </div>
    </div>
  </div>

  <div class="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
    <div class="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-1">
      <div class="col-span-2">
        <ul class="py-8">
          <h2 class="max-w-lg mb-3 font-sans text-xl font-bold tracking-tight text-red-950 sm:text-2xl sm:leading-none">
            🥢 Entrants
          </h2>
          <li class="flex items-end justify-between gap-5 w-full py-3 border-b border-red-300">
            <div class="text-red-950">
              <p class="text-lg font-bold text-red-800">
                Takoyaki <i>(6 u.)</i>
              </p>
              <p class="text-sm text-red-900 md:text-base">
                Boletes de massa farcides de pop, cobertes amb salsa okonomiyaki, maionesa japonesa, alga nori i bonítol sec.
              </p>
            </div>
            <p class="text-lg font-bold">6,50€</p>
          </li>
          <li class="flex items-end justify-between gap-5 w-full py-3 border-b border-red-300">
            <div class="text-red-950">
              <p class="text-lg font-bold text-red-800">
                Gyoza de Porc i Verdures <i>(5 u.)</i>
              </p>
              <p class="text-sm text-red-900 md:text-base">
                Empanadilles japoneses cruixents per fora i sucoses per dins, acompanyades de salsa de soja i sèsam.
              </p>
            </div>
            <p class="text-lg font-bold">6,90€</p>
          </li>
          <li class="flex items-end justify-between gap-5 w-full py-3 border-b border-red-300">
            <div class="text-red-950">
              <p class="text-lg font-bold text-red-800">
                Edamame amb Sal i Bitxo
              </p>
              <p class="text-sm text-red-900 md:text-base">
                Beines de soja al vapor, saltades amb sal marina i un toc de bitxo picant.
              </p>
            </div>
            <p class="text-lg font-bold">4,50€</p>
          </li>
          <li class="flex items-end justify-between gap-5 w-full py-3 border-b border-red-300">
            <div class="text-red-950">
              <p class="text-lg font-bold text-red-800">
                Korokke de Patata i Curri <i>(2 u.)</i>
              </p>
              <p class="text-sm text-red-900 md:text-base">
                Croquetes cruixents de patata amb un toc de curri japonès, acompanyades de salsa tonkatsu.
              </p>
            </div>
            <p class="text-lg font-bold">5,50€</p>
          </li>
          <li class="flex items-end justify-between gap-5 w-full py-3 border-b border-red-300">
            <div class="text-red-950">
              <p class="text-lg font-bold text-red-800">
                Yakitori de Pollastre <i>(2 u.)</i>
              </p>
              <p class="text-sm text-red-900 md:text-base">
                Broquetes de pollastre marinades en salsa tare i fetes a la graella, amb un toc de sèsam.
              </p>
            </div>
            <p class="text-lg font-bold">6,50€</p>
          </li>
        </ul>
        <ul class="py-8">
          <h2 class="max-w-lg mb-3 font-sans text-xl font-bold tracking-tight text-red-950 sm:text-2xl sm:leading-none">
            🍜 Primers Plats
          </h2>
          <li class="flex items-end justify-between gap-5 w-full py-3 border-b border-red-300">
            <div class="text-red-950">
              <p class="text-lg font-bold text-red-800">
                Ramen Tonkotsu
              </p>
              <p class="text-sm text-red-900 md:text-base">
                Sopa de fideus amb brou de porc cuinat durant hores, chashu (cansalada), ou marinat, ceba tendra i alga nori.
              </p>
            </div>
            <p class="text-lg font-bold">12,90€</p>
          </li>
          <li class="flex items-end justify-between gap-5 w-full py-3 border-b border-red-300">
            <div class="text-red-950">
              <p class="text-lg font-bold text-red-800">
                Ramen Shoyu
              </p>
              <p class="text-sm text-red-900 md:text-base">
                Fideus en brou de soja amb pollastre, bambú, ou marinat i alga nori.
              </p>
            </div>
            <p class="text-lg font-bold">11,90€</p>
          </li>
          <li class="flex items-end justify-between gap-5 w-full py-3 border-b border-red-300">
            <div class="text-red-950">
              <p class="text-lg font-bold text-red-800">
                Ramen Miso Picant
              </p>
              <p class="text-sm text-red-900 md:text-base">
                Sopa de fideus amb brou de miso i toc picant, cansalada de porc, blat de moro i ceba tendra.
              </p>
            </div>
            <p class="text-lg font-bold">13,50€</p>
          </li>
          <li class="flex items-end justify-between gap-5 w-full py-3 border-b border-red-300">
            <div class="text-red-950">
              <p class="text-lg font-bold text-red-800">
                Yakisoba
              </p>
              <p class="text-sm text-red-900 md:text-base">
                Fideus saltats amb verdures i carn (pollastre o porc), coberts amb salsa yakisoba i katsuobushi.
              </p>
            </div>
            <p class="text-lg font-bold">10,50€</p>
          </li>
          <li class="flex items-end justify-between gap-5 w-full py-3 border-b border-red-300">
            <div class="text-red-950">
              <p class="text-lg font-bold text-red-800">
                Donburi de Vedella (Gyudon)
              </p>
              <p class="text-sm text-red-900 md:text-base">
                Bol d’arròs amb vedella cuinada en salsa de soja i mirin, amb ceba caramel·litzada i ou.
              </p>
            </div>
            <p class="text-lg font-bold">11,50€</p>
          </li>
          <li class="flex items-end justify-between gap-5 w-full py-3 border-b border-red-300">
            <div class="text-red-950">
              <p class="text-lg font-bold text-red-800">
                Katsudon
              </p>
              <p class="text-sm text-red-900 md:text-base">
                Bol d’arròs amb porc arrebossat (tonkatsu), ou i ceba en salsa dashi.
              </p>
            </div>
            <p class="text-lg font-bold">12,50€</p>
          </li>
        </ul>
        <ul class="py-8">
          <h2 class="max-w-lg mb-3 font-sans text-xl font-bold tracking-tight text-red-950 sm:text-2xl sm:leading-none">
            🍱 Segons Plats
          </h2>
          <li class="flex items-end justify-between gap-5 w-full py-3 border-b border-red-300">
            <div class="text-red-950">
              <p class="text-lg font-bold text-red-800">
                Tonkatsu
              </p>
              <p class="text-sm text-red-900 md:text-base">
                Escalopa de porc arrebossada i cruixent, servida amb arròs i salsa tonkatsu.
              </p>
            </div>
            <p class="text-lg font-bold">11,90€</p>
          </li>
          <li class="flex items-end justify-between gap-5 w-full py-3 border-b border-red-300">
            <div class="text-red-950">
              <p class="text-lg font-bold text-red-800">
                Ebi Tempura <i>(6 u.) </i>
              </p>
              <p class="text-sm text-red-900 md:text-base">
                Llagostins cruixents en tempura lleugera, acompanyats de salsa tentsuyu.
              </p>
            </div>
            <p class="text-lg font-bold">13,50€</p>
          </li>
          <li class="flex items-end justify-between gap-5 w-full py-3 border-b border-red-300">
            <div class="text-red-950">
              <p class="text-lg font-bold text-red-800">
                Chicken Karaage
              </p>
              <p class="text-sm text-red-900 md:text-base">
                Pollastre fregit japonès marinat en gingebre i soja, servit amb maionesa kewpie.
              </p>
            </div>
            <p class="text-lg font-bold">10,90€</p>
          </li>
          <li class="flex items-end justify-between gap-5 w-full py-3 border-b border-red-300">
            <div class="text-red-950">
              <p class="text-lg font-bold text-red-800">
                Unagidon
              </p>
              <p class="text-sm text-red-900 md:text-base">
                Bol d’arròs amb anguila a la graella banyada en salsa dolça kabayaki.
              </p>
            </div>
            <p class="text-lg font-bold">14,90€</p>
          </li>
          <li class="flex items-end justify-between gap-5 w-full py-3 border-b border-red-300">
            <div class="text-red-950">
              <p class="text-lg font-bold text-red-800">
                Hamburguesa Japonesa <i>(Wafu Burger) </i>
              </p>
              <p class="text-sm text-red-900 md:text-base">
                Sucosa hamburguesa de vedella amb salsa teriyaki, maionesa japonesa i ceba caramel·litzada en pa brioix.
              </p>
            </div>
            <p class="text-lg font-bold">12,90€</p>
          </li>
        </ul>
        <ul class="py-8">
          <h2 class="max-w-lg mb-3 font-sans text-xl font-bold tracking-tight text-red-950 sm:text-2xl sm:leading-none">
            🍡 Postres
          </h2>
          <li class="flex items-end justify-between gap-5 w-full py-3 border-b border-red-300">
            <div class="text-red-950">
              <p class="text-lg font-bold text-red-800">
                Mochis Variats <i>(3 u.) </i>
              </p>
              <p class="text-sm text-red-900 md:text-base">
                Gelat dins d’una fina capa d’arròs glutinós, sabors: te verd, mango i sèsam negre.
              </p>
            </div>
            <p class="text-lg font-bold">(5,50€)</p>
          </li>
          <li class="flex items-end justify-between gap-5 w-full py-3 border-b border-red-300">
            <div class="text-red-950">
              <p class="text-lg font-bold text-red-800">
                Dorayaki d’Anko i Xocolata
              </p>
              <p class="text-sm text-red-900 md:text-base">
                Esponjoses coques farcides de pasta de mongeta vermella dolça i xocolata.
              </p>
            </div>
            <p class="text-lg font-bold">4,90€</p>
          </li>
          <li class="flex items-end justify-between gap-5 w-full py-3 border-b border-red-300">
            <div class="text-red-950">
              <p class="text-lg font-bold text-red-800">
                Taiyaki de Matcha 
              </p>
              <p class="text-sm text-red-900 md:text-base">
                Peix de massa cruixent farcit de crema de te verd. 
              </p>
            </div>
            <p class="text-lg font-bold">5,50€</p>
          </li>
          <li class="flex items-end justify-between gap-5 w-full py-3 border-b border-red-300">
            <div class="text-red-950">
              <p class="text-lg font-bold text-red-800">
                Pastís de Formatge Japonès
              </p>
              <p class="text-sm text-red-900 md:text-base">
                Pastís de formatge esponjós i lleuger, amb un toc de yuzu.
              </p>
            </div>
            <p class="text-lg font-bold">6,50€</p>
          </li>
          <li class="flex items-end justify-between gap-5 w-full py-3 border-b border-red-300">
            <div class="text-red-950">
              <p class="text-lg font-bold text-red-800">
                Gelat de Sèsam Negre
              </p>
              <p class="text-sm text-red-900 md:text-base">
                Cremós gelat de sèsam negre amb un toc torrat i profund.
              </p>
            </div>
            <p class="text-lg font-bold">4,90€€</p>
          </li>
        </ul>
      </div>
      <div class="">
      </div>
    </div>
  </div>

  <div class="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-md md:px-24 lg:px-8 lg:pb-20">
    <div class="flex flex-col lg:flex-row lg:items-center">
      <div class="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
        <img src="/menu/img-menu.svg" class="w-2/3 lg:w-full mx-auto"/>
      </div>
      <div class="lg:w-1/2">
        <p class="text-red-950 text-3xl font-extrabold text-center lg:text-left">
          Descobreix l’autèntic street food japonès en cada mos!
        </p>
      </div>
    </div>
  </div>

</template>