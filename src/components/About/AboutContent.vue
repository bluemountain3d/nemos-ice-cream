<script setup>
import nemoIconSolid from '@/assets/images/nemo-solid.webp';
import { reactive, computed } from 'vue';

const form = reactive({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
});

const isFormValid = computed(() => checkFormValidity());

function checkFormValidity() {
  return form.name && form.email && form.subject && form.message;
}

function resetForm() {
  form.value = { name: '', email: '', phone: '', subject: '', message: '' };
}
</script>

<template>
  <section class="page-section">
    <section class="page__container">
      <div class="about__text-container">
        <article class="about__text">
          <h1 class="about__title">about us</h1>
          <p>
            At Nemo’s Ice Cream, we believe that every scoop should be an adventure! Inspired by the
            wonders of the ocean, we craft artisanal ice cream that blends bold flavors with
            stunning, sea-inspired designs. From vibrant coral swirls to deep-sea blues, every
            creation is a tribute to the beauty of the underwater world.
          </p>
          <p>
            Sustainability is at the heart of what we do. We use natural ingredients, eco-friendly
            packaging, and support ocean conservation initiatives to ensure that every indulgence is
            as kind to the planet as it is delicious.
          </p>
          <p>
            Whether you're diving into a classic flavor or exploring something new, Nemo’s Ice Cream
            brings joy, creativity, and a splash of ocean magic to every scoop. So grab your spoon
            and just keep scooping!
          </p>
        </article>
      </div>
      <div id="contact">
        <img class="nemo-icon__solid" :src="nemoIconSolid" alt="picture of a clownfish" />
        <div class="form__container">
          <h2 class="about__title">contact</h2>
          <form id="contact-formula">
            <div class="input__group">
              <label for="name">Name*</label>
              <input type="text" id="name" v-model="form.name" required />
            </div>

            <div class="input__group">
              <label for="email">Email*</label>
              <input type="email" id="email" v-model="form.email" required />
            </div>
            <div class="input__group">
              <label for="phone">Phone</label>
              <input type="number" id="phone" v-model="form.phone" />
            </div>
            <div class="input__group">
              <label for="subject">Subject*</label>
              <input type="text" id="subject" v-model="form.subject" required />
            </div>
            <div class="input__group input__group--column">
              <label for="message">Message*</label>
              <textarea id="message" v-model="form.message" required></textarea>
            </div>
          </form>
          <div class="form__button">
            <button
              type="reset"
              form="contact-formula"
              value="reset"
              class="primary-btn"
              @click="resetForm"
            >
              Clear
            </button>
            <button
              type="submit"
              form="contact-formula"
              value="submit"
              class="primary-btn submit__button"
              :disabled="!isFormValid"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<style scoped lang="scss">
//----------------PAGE SECTION----------------
.page-section {
  padding-top: 5.4375rem;
  @media screen and (min-width: 1024px) {
    padding-top: 7.375rem;
  }
}
.page__container {
  display: grid;
  justify-content: center;
  align-items: start;
  margin-inline: auto;
  width: min(100%, 1440px);
  position: relative;
  height: 100%;
  background-color: var(--bg-section);
  grid-template-columns: auto;
  row-gap: 1.3vh;
  padding: 1.6875rem 1rem;
  z-index: 1;

  @media screen and (min-width: 768px) {
    grid-template-columns: auto;
    padding: 1.6875rem 6.656rem;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    padding: 3.375rem 6.438rem;
  }
}
.about__text-container {
  display: grid;
}
//----------------TITLE----------------
.about__title {
  font-family: var(--ff-primary);
  margin: 0;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 0.4375rem;
  filter: drop-shadow(0 0.25rem 0.125rem rgba(0, 0, 0, 0.25));

  @media screen and (min-width: 768px) {
    font-size: var(--heading-1);
    margin-bottom: 1.25rem;
  }
}

//----------------TEXT----------------
.about__text {
  width: 100%;
  max-width: 70ch;
  padding-block-end: 2.4375rem;
  border-bottom: 1px solid var(--bg-footer);

  & > p {
    margin: 0;
  }

  & > p + p {
    padding-block-start: 1.5rem;
  }

  @media screen and (min-width: 768px) {
    padding-block-end: 4.5rem;
  }

  @media screen and (min-width: 1024px) {
    padding-inline-end: min(8vw, 1440px * 0.08);
    padding-block-end: 0;
    border-bottom: 0;
  }
}
//----------------IMAGE---------------
.nemo-icon__solid {
  display: none;

  @media screen and (min-width: 768px) {
    position: absolute;
    display: block;
    width: 8.063rem;
    top: 1%;
    right: 1%;
  }

  @media screen and (min-width: 1024px) {
    width: 10rem;
    right: -3rem;
    top: -2rem;
  }
}

//----------------FORM----------------
.form__container {
  display: grid;
  width: 100%;
  max-width: 31.25rem;
  margin-top: 2rem;
  margin-inline: auto;

  @media screen and (min-width: 768px) {
    margin-top: 2.625rem;
  }

  @media screen and (min-width: 1024px) {
    margin-top: 0;
    max-width: fit-content;
    margin-inline: 0;
  }
  h2 {
    margin-inline: auto;
    @media screen and (min-width: 1024px) {
      padding-inline-start: min(8vw, 1440px * 0.08);
    }
  }
}

form {
  width: 100%;
  font-size: var(--label-text);
  display: grid;
  row-gap: 1.375rem;

  @media screen and (min-width: 1024px) {
    padding-inline-start: min(8vw, 1440px * 0.08);
    border-left: 1px solid var(--text-primary);
  }

  label {
    width: 12ch;
  }
  input {
    width: 100%;
    padding: 0.4167em;
    border: 1px solid var(--text-primary);
    line-height: 1;
  }
  .input__group {
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    align-items: center;

    &--column {
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }

  textarea {
    width: 100%;
    height: auto;
    min-height: 12.5rem;
    border: 1px solid var(--text-primary);

    @media screen and (min-width: 768px) {
      height: 10vh;
    }
  }
}

.form__button {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-block-start: 2rem;

  @media screen and (min-width: 720px) {
    margin-block-start: 2.25rem;
  }

  button {
    margin-left: 20px;
  }
}
</style>
