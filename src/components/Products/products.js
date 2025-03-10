import { ref } from 'vue';

const products = ref([
  {
    id: 1,
    img: {
      src: '/assets/images/product-ice-cream-pics/peachs-favorite-icecream.png',
      alt: "Peach's Favorite Ice Cream",
      loading: 'lazy',
      width: 3024,
      height: 4032,
    },
    name: "Peach's Favorite",
    flavor: 'Strawberry',
  },
  {
    id: 2,
    img: {
      src: '/assets/images/product-ice-cream-pics/doris-delight-icecream.png',
      alt: 'Doris Delight Ice Cream',
      loading: 'lazy',
      width: 4963,
      height: 3309,
    },
    name: 'Doris Delight',
    flavor: 'Blueberry',
  },
  {
    id: 3,
    img: {
      src: '/assets/images/product-ice-cream-pics/nemos-scoop-icecream.png',
      alt: "Nemo's Scoop Ice Cream",
      loading: 'lazy',
      width: 3456,
      height: 5184,
    },
    name: "Nemo's Scoop",
    flavor: 'Watermelon',
  },
  {
    id: 4,
    img: {
      src: '/assets/images/product-ice-cream-pics/marlins-cinnamon-icecream.png',
      alt: "Marlin's Cinnamon Ice Cream",
      loading: 'lazy',
      width: 3350,
      height: 5025,
    },
    name: "Marlins's Cinnamon",
    flavor: 'Tropical',
  },
  {
    id: 5,
    img: {
      src: '/assets/images/product-ice-cream-pics/gills-sea-salt-toffee-icecream.png',
      alt: "Gill's Sea Salt toffee Ice Cream",
      loading: 'lazy',
      width: 2500,
      height: 3750,
    },
    name: "Gill's Sea Salt toffee",
    flavor: 'Caramel',
  },
  {
    id: 6,
    img: {
      src: '/assets/images/product-ice-cream-pics/jawsome-bruce-icecream.png',
      alt: 'Jawsome Bruce Ice Cream',
      loading: 'lazy',
      width: 3024,
      height: 4032,
    },
    name: 'Jawsome Bruce',
    flavor: 'Rasberry',
  },
]);

export default products;
