<script setup>
import iceCreamFishSm from '@/assets/images/ice-cream-fish-w440.webp';
import iceCreamFishMd from '@/assets/images/ice-cream-fish-w660.webp';
import iceCreamFishLg from '@/assets/images/ice-cream-fish-w880.webp';
</script>

<template>
  <section class="hero" aria-labelledby="hero-heading">
    <picture class="hero__image">
      <source media="(max-width: 540px)" :srcset="iceCreamFishSm" type="image/webp" />
      <source media="(max-width: 960px)" :srcset="iceCreamFishMd" type="image/webp" />
      <img
        :src="iceCreamFishLg"
        alt="en hand som håller i en glassstrut med vaniljglasskulor i sams en tecknat clownfisk silhuett över"
        loading="eager"
      />
    </picture>
    <div class="hero__content">
      <div class="hero__title">
        <h1 id="hero-heading" class="hero__heading">nemo</h1>
        <h2 class="hero__byline heading-3">Just keep scoopoing</h2>
      </div>
      <div class="hero__cta">
        <p class="hero__cta-text">Check out our new and<br />yummy flavours!</p>
        <a href="#products" class="primary-btn" aria-label="View new ice cream flavors"
          >Click here</a
        >
      </div>
    </div>
    <div class="hero__wave-container" aria-hidden="true">
      <svg viewBox="0 0 1440 617" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          id="wave-brown"
          d="M-444.43 456.915C-648.567 456.915 -712.565 513.814 -857.631 513.814C-1056.21 513.814 -1142.4 397.839 -1246.12 397.839C-1331.98 397.839 -1358.13 474.924 -1478.76 474.924C-1728.4 474.924 -1716.36 327.262 -1902.75 327.262C-2000.25 327.262 -2073.03 592.39 -2255.95 592.39C-2425.27 585.958 -2527.89 456.92 -2722.92 456.915V246.144C-2542.64 246.136 -2436.24 78.8195 -2255.95 78.8195C-2081.32 78.8195 -1967.65 187.635 -1905.49 187.635C-1843.32 187.635 -1798.87 117.099 -1646.45 117.099C-1583.62 117.099 -1489.98 130.147 -1434.78 160.184C-1372.55 194.044 -1320.11 233.984 -1229.14 233.984C-1138.16 233.984 -1028.23 1.02478 -857.631 1.02478C-630.512 1.02478 -592.622 246.144 -444.43 246.144C-264.137 246.144 -157.739 78.8195 22.5541 78.8195C197.179 78.8195 310.855 187.635 373.02 187.635C435.187 187.635 479.638 117.099 632.053 117.099C694.886 117.099 788.523 130.147 843.729 160.184C905.959 194.044 958.395 233.984 1049.37 233.984C1140.34 233.984 1250.27 1.02478 1420.87 1.02478C1647.99 1.02478 1685.88 246.144 1834.07 246.144C2014.37 246.144 2120.77 78.8195 2301.05 78.8195C2475.69 78.8195 2589.36 187.635 2651.53 187.635C2713.69 187.635 2758.14 117.099 2910.56 117.099C2973.39 117.099 3067.03 130.147 3122.23 160.184C3184.47 194.044 3236.9 233.984 3327.88 233.984C3418.85 233.984 3528.78 1.02478 3699.38 1.02478C3926.5 1.02478 3964.39 246.144 4112.58 246.144V456.915C3908.44 456.915 3844.45 513.814 3699.38 513.814C3500.8 513.814 3414.61 397.839 3310.89 397.839C3225.03 397.839 3198.88 474.924 3078.25 474.924C2828.62 474.924 2840.65 327.262 2654.26 327.262C2556.75 327.262 2483.98 592.39 2301.05 592.39C2131.73 585.957 2029.12 456.915 1834.07 456.915C1629.94 456.915 1565.94 513.814 1420.87 513.814C1222.3 513.814 1136.1 397.839 1032.38 397.839C946.533 397.839 920.376 474.924 799.746 474.924C550.11 474.924 562.146 327.262 375.758 327.262C278.247 327.262 205.48 592.39 22.5541 592.39C-146.777 585.957 -249.39 456.915 -444.43 456.915Z"
          fill="#432E12"
        />
        <path
          id="wave-white"
          d="M-444.43 478.556C-540.258 478.556 -556.758 396.085 -678.204 396.085C-729.915 396.085 -744.656 431.928 -921.812 431.928C-1042.27 431.928 -1107.84 370.575 -1166.44 370.575C-1225.03 370.575 -1237.62 473.25 -1379.15 473.25C-1532.22 473.25 -1545.76 317.686 -1660.54 317.686C-1886.12 317.686 -1925.45 487.375 -2151.02 487.375C-2284.65 487.375 -2290.5 417.19 -2375.03 417.19C-2495.86 417.19 -2533.77 478.554 -2722.92 478.556V203.678C-2584.04 203.682 -2574.15 268.506 -2375.03 268.506C-2274.26 268.506 -2194.94 114.843 -1932.23 114.843C-1791.72 114.843 -1553.9 203.124 -1387.9 203.124C-1221.89 203.124 -1184.31 27.4706 -1001.05 27.4706C-841.142 27.4706 -777.512 244.493 -617.609 244.493C-583.908 244.493 -502.14 203.678 -444.43 203.678C-297.559 203.678 -295.658 268.506 -96.5288 268.506C4.24807 268.506 83.5686 114.843 346.273 114.843C486.785 114.843 724.604 203.124 890.611 203.124C1056.62 203.124 1094.2 27.4706 1277.46 27.4706C1437.36 27.4706 1464.8 241.244 1660.9 244.493C1694.59 245.051 1776.37 203.678 1834.07 203.678C1972.97 203.678 1982.85 268.506 2181.98 268.506C2282.76 268.506 2362.08 114.843 2624.78 114.843C2765.29 114.843 3003.11 203.124 3169.12 203.124C3335.12 203.124 3372.71 27.4706 3555.96 27.4706C3715.87 27.4706 3779.5 244.493 3939.4 244.493C3973.1 244.493 4054.87 203.678 4112.58 203.678V478.556C4016.75 478.556 4000.26 396.085 3878.81 396.085C3827.09 396.085 3812.36 431.928 3635.2 431.928C3514.75 431.928 3449.17 370.575 3390.57 370.575C3331.98 370.575 3319.39 473.25 3177.86 473.25C3024.79 473.25 3011.25 317.686 2896.46 317.686C2670.89 317.686 2631.56 487.375 2405.99 487.375C2272.36 487.375 2266.52 417.19 2181.98 417.19C2061.15 417.19 2023.24 478.556 1834.07 478.556C1738.24 478.556 1721.75 396.085 1600.3 396.085C1548.59 396.085 1533.85 431.928 1356.7 431.928C1236.24 431.928 1170.66 370.575 1112.07 370.575C1053.48 370.575 1040.89 473.25 899.347 473.25C746.287 473.25 732.745 317.686 617.957 317.686C392.385 317.686 353.057 487.375 127.485 487.375C-6.14863 487.375 -11.9885 417.19 -96.5288 417.19C-217.356 417.19 -255.272 478.556 -444.43 478.556Z"
          fill="#FFF2DE"
        />
        <path
          id="wave-blue"
          d="M-444.43 515.823C-601.888 515.823 -678.199 355.841 -866.122 355.841C-1067.18 355.841 -1084.27 438.015 -1257.86 438.015C-1359.48 438.015 -1390.27 415.083 -1471.09 415.083C-1616.4 415.083 -1669.11 497.516 -1806.66 497.516C-2041.95 497.516 -2031.14 367.018 -2255.95 367.018C-2440.5 367.018 -2486.78 515.817 -2722.92 515.823V349.478C-2528.01 349.47 -2450.86 178.854 -2255.95 178.854C-2186.79 178.854 -2083.9 222.505 -2022.47 263.83C-1962.06 304.466 -1915.32 344.834 -1862.6 344.834C-1784.4 344.834 -1746.88 319.358 -1689.94 290.97C-1620.67 256.435 -1557.19 231.299 -1486.3 231.299C-1430.31 231.299 -1384.97 243.5 -1338.53 263.036C-1281.35 287.084 -1281.87 297.658 -1213.77 297.658C-1096.87 297.658 -1026.15 137.856 -866.122 137.856C-640.185 137.856 -572.466 349.478 -444.43 349.478C-249.515 349.478 -172.361 178.854 22.5541 178.854C91.7167 178.854 194.607 222.505 256.038 263.83C316.445 304.466 363.184 344.834 415.906 344.834C494.11 344.834 531.627 319.358 588.566 290.97C657.833 256.435 721.31 231.299 792.202 231.299C848.194 231.299 893.535 243.5 939.983 263.036C997.16 287.084 996.642 297.658 1064.73 297.658C1181.64 297.658 1252.35 137.856 1412.38 137.856C1638.32 137.856 1706.04 349.478 1834.07 349.478C2028.99 349.478 2106.15 178.854 2301.05 178.854C2370.23 178.854 2473.11 222.505 2534.54 263.83C2594.95 304.466 2641.69 344.834 2694.41 344.834C2772.62 344.834 2810.13 319.358 2867.07 290.97C2936.34 256.435 2999.82 231.299 3070.71 231.299C3126.7 231.299 3172.04 243.5 3218.49 263.036C3275.66 287.084 3275.14 297.658 3343.24 297.658C3460.14 297.658 3530.86 137.856 3690.89 137.856C3916.82 137.856 3984.55 349.478 4112.58 349.478V515.823C3955.12 515.823 3878.81 355.841 3690.89 355.841C3489.83 355.841 3472.73 438.015 3299.15 438.015C3197.53 438.015 3166.74 415.083 3085.93 415.083C2940.61 415.083 2887.9 497.516 2750.35 497.516C2515.06 497.516 2525.87 367.018 2301.05 367.018C2116.5 367.018 2070.23 515.823 1834.07 515.823C1676.62 515.823 1600.31 355.841 1412.38 355.841C1211.32 355.841 1194.23 438.015 1020.64 438.015C919.024 438.015 888.232 415.083 807.418 415.083C662.11 415.083 609.393 497.516 471.846 497.516C236.556 497.516 247.359 367.018 22.5541 367.018C-162.003 367.018 -208.274 515.823 -444.43 515.823Z"
          fill="#054F6D"
        />
      </svg>
    </div>
    <a href="#products-section" class="hero__go-down" aria-label="Scroll down to products section">
      <svg class="hero__go-down-svg" viewBox="0 0 104 68" xmlns="http://www.w3.org/2000/svg">
        <path
          class="hero__go-down-path"
          d="M9.28252 17.528L6.59164 20.4877L9.5515 23.1785L49.5876 59.575L52.2783 62.0211L54.969 59.575L95.0051 23.1785L97.965 20.4877L95.2741 17.528L87.2019 8.64906L84.5111 5.68945L81.5515 8.38011L52.2783 34.9925L23.0052 8.38011L20.0455 5.68945L17.3548 8.64906L9.28252 17.528Z"
          stroke-width="8"
        />
      </svg>
    </a>
  </section>
</template>

<!-- Local Component Specific styling -->
<style scoped lang="scss">
.hero {
  // overflow: clip;
  position: relative;
  display: block;
  width: 100%;
  height: 100vh;
  background-image: radial-gradient(ellipse, #ffaf50 10%, var(--bg-section) 90%);
  background-size: 157% 100%;
  background-position: center;

  z-index: 2;

  @media screen and (min-width: 720px) {
    padding-inline-start: calc(4.8261rem + 4.2904vw);
    background-size: 110% 110%;
  }

  @media screen and (min-width: 1200px) {
    background-size: 105% 100%;
  }

  &__image {
    z-index: 1;
    display: block;
    position: absolute;
    bottom: 0;
    right: -10%;
    height: 61.5vmax;
    width: auto;

    & img {
      height: 100%;
      width: auto;
    }

    @media screen and (min-width: 720px) {
      right: -5%;
      height: 64vmax;
    }

    @media screen and (min-width: 1200px) {
      right: 1%;
      height: 87.6vmin;
    }
  }

  &__content {
    position: relative;
    z-index: 2;
  }

  &__title {
    padding-block-start: 27.725118vmax;
    width: 100%;
    display: grid;
    justify-content: center;

    @media screen and (min-width: 720px) {
      justify-content: start;
      padding-block-start: 29.4vmax;
      padding-block-end: 25vmax;
    }

    @media screen and (min-width: 960px) and (orientation: landscape) {
      padding-block-start: 31.64vmin;
      padding-block-end: 4vmin;
    }
  }

  &__heading {
    margin: 0 0 -0.242em;
    font-family: var(--ff-tertiary);
    font-size: clamp(6rem, 4.5143rem + 6.0952vw, 10rem); //25vmin;
    font-weight: 400;
    line-height: 1;
  }

  &__byline {
    margin: 0;
    line-height: 2.0625;
  }

  &__cta {
    width: 100%;
    display: none;

    @media screen and (min-width: 720px) {
      display: block;
    }
  }

  &__cta-text {
    font-size: var(--fs-300);
    margin: 0 0 0.8125rem;
  }

  &__go-down {
    z-index: 99;
    display: block;
    position: absolute;
    bottom: 6vmin;
    left: 50%;
    translate: -50% 0;
    transition: translate 0.5s ease-out;

    &:focus {
      outline: 3px solid var(--text-link);
      outline-offset: 3px;
    }

    &-svg {
      display: block;
      width: 13vmin;
      height: auto;
    }

    &-path {
      fill: var(--text-primary);
      stroke: var(--text-light);
      transition: fill 0.25s ease;
    }

    &:hover,
    &:focus {
      translate: -50% 25%;
    }

    &:hover &-path,
    &:focus &-path {
      fill: var(--text-link);
    }
  }

  &__wave-container {
    position: absolute;
    bottom: -19vw;
    left: 0;
    width: 100%;
    overflow-x: clip;

    & > svg {
      width: 100%;
      height: auto;
      display: block;
      overflow: visible;
    }
  }

  @keyframes waveAnimation {
    0% {
      transform: translateX(0) translateY(var(--wave-flat));
    }
    4.166667% {
      transform: translateX(calc(94.916667px * var(--wave-direction))) translateY(var(--wave-low));
    }
    12.5% {
      transform: translateX(calc(284.75px * var(--wave-direction))) translateY(var(--wave-high));
    }
    16.666667% {
      transform: translateX(calc(379.666665px * var(--wave-direction))) translateY(var(--wave-peak));
    }
    20.833333% {
      transform: translateX(calc(474.583332px * var(--wave-direction))) translateY(var(--wave-high));
    }
    29.166667% {
      transform: translateX(calc(664.416664px * var(--wave-direction))) translateY(var(--wave-low));
    }
    33.333333% {
      transform: translateX(calc(759.333333px * var(--wave-direction))) translateY(var(--wave-flat));
    }
    37.5% {
      transform: translateX(calc(854.249997px * var(--wave-direction))) translateY(var(--wave-low));
    }
    45.833333% {
      transform: translateX(calc(1044.083333px * var(--wave-direction)))
        translateY(var(--wave-high));
    }
    50% {
      transform: translateX(calc(1139px * var(--wave-direction))) translateY(var(--wave-peak));
    }
    54.166667% {
      transform: translateX(calc(1233.916666px * var(--wave-direction)))
        translateY(var(--wave-high));
    }
    62.5% {
      transform: translateX(calc(1423.749999px * var(--wave-direction))) translateY(var(--wave-low));
    }
    66.666667% {
      transform: translateX(calc(1518.666666px * var(--wave-direction)))
        translateY(var(--wave-flat));
    }
    70.833333% {
      transform: translateX(calc(1613.583333px * var(--wave-direction))) translateY(var(--wave-low));
    }
    79.166667% {
      transform: translateX(calc(1803.416666px * var(--wave-direction)))
        translateY(var(--wave-high));
    }
    83.333333% {
      transform: translateX(calc(1898.333333px * var(--wave-direction)))
        translateY(var(--wave-peak));
    }
    87.5% {
      transform: translateX(calc(1993.249999px * var(--wave-direction)))
        translateY(var(--wave-high));
    }
    95.833333% {
      transform: translateX(calc(2183.083332px * var(--wave-direction))) translateY(var(--wave-low));
    }
    100% {
      transform: translateX(calc(2278px * var(--wave-direction))) translateY(var(--wave-flat));
    }
  }

  #wave-blue {
    --wave-flat: 0;
    --wave-low: 1vmin;
    --wave-high: 4vmin;
    --wave-peak: 5vmin;
    --wave-direction: 1;
    animation: waveAnimation 20s linear infinite;
  }

  #wave-white {
    --wave-flat: 1vmin;
    --wave-low: 1.5vmin;
    --wave-high: 3.5vmin;
    --wave-peak: 4vmin;
    --wave-direction: -1;
    animation: waveAnimation 35s linear infinite;
  }

  #wave-brown {
    --wave-flat: 0;
    --wave-low: 1vmin;
    --wave-high: 4vmin;
    --wave-peak: 5vmin;
    --wave-direction: 1;
    animation: waveAnimation 60s linear infinite;
  }
}
</style>
