import { ref } from 'vue';

import peachsFavorite from '@/assets/images/peachs-favorite-icecream.webp';
import dorisDelight from '@/assets/images/doris-delight-icecream.webp';
import nemosScoop from '@/assets/images/nemos-scoop-icecream.webp';
import marlinsCinnamon from '@/assets/images/marlins-cinnamon-icecream.webp';
import gillsSeaSaltToffee from '@/assets/images/gills-sea-salt-toffee-icecream.webp';
import jawsomeBruce from '@/assets/images/jawsome-bruce-icecream.webp';

const products = ref([
  {
    id: 1,
    img: {
      src: peachsFavorite,
      alt: 'Peach\'s Favorite Ice Cream',
      loading: 'lazy',
      width: 3024,
      height: 4032,
    },
    name: 'Peach\'s Favorite',
    flavor: 'Strawberry',
  },
  {
    id: 2,
    img: {
      src: dorisDelight,
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
      src: nemosScoop,
      alt: 'Nemo\'s Scoop Ice Cream',
      loading: 'lazy',
      width: 3456,
      height: 5184,
    },
    name: 'Nemo\'s Scoop',
    flavor: 'Watermelon',
  },
  {
    id: 4,
    img: {
      src: marlinsCinnamon,
      alt: 'Marlin\'s Cinnamon Ice Cream',
      loading: 'lazy',
      width: 3350,
      height: 5025,
    },
    name: 'Marlins\'s Cinnamon',
    flavor: 'Tropical',
  },
  {
    id: 5,
    img: {
      src: gillsSeaSaltToffee,
      alt: 'Gill\'s Sea Salt toffee Ice Cream',
      loading: 'lazy',
      width: 2500,
      height: 3750,
    },
    name: 'Gill\'s Sea Salt toffee',
    flavor: 'Caramel',
  },
  {
    id: 6,
    img: {
      src: jawsomeBruce,
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
