<script setup>
import nemoIconSolid from '@/assets/bilder/nemo-solid.jpg';
import { ref, computed } from 'vue';

const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
});

const isFormValid = computed(() => checkFormValidity());

function checkFormValidity() {
  return form.value.name && form.value.email && form.value.subject && form.value.message;
}

function resetForm() {
  form.value = { name: '', email: '', phone: '', subject: '', message: '' };
}
</script>

<template>
  <section class="page-section page_container">
    <div>
      <article class="about_text">
        <h1 class="heading-1 about_title">about us</h1>
        <p>
          At Nemo’s Ice Cream, we believe that every scoop should be an adventure! Inspired by the
          wonders of the ocean, we craft artisanal ice cream that blends bold flavors with stunning,
          sea-inspired designs. From vibrant coral swirls to deep-sea blues, every creation is a
          tribute to the beauty of the underwater world.
        </p>
        <p>
          Sustainability is at the heart of what we do. We use natural ingredients, eco-friendly
          packaging, and support ocean conservation initiatives to ensure that every indulgence is
          as kind to the planet as it is delicious.
        </p>
        <p>
          Whether you're diving into a classic flavor or exploring something new, Nemo’s Ice Cream
          brings joy, creativity, and a splash of ocean magic to every scoop. So grab your spoon and
          just keep scooping!
        </p>
      </article>
    </div>
    <div class="vertical_line"></div>
    <hr class="horizontal_line" />

    <div>
      <img class="nemo_icon_Solid" :src="nemoIconSolid" alt="nemo" />
      <div class="form_container">
        <h2 class="heading-1 about_title">contact</h2>
        <form id="contact_formula">
          <label for="name">Name*</label>
          <input type="text" id="name" v-model="form.name" required /><br />
          <label for="email">Email*</label>
          <input type="email" id="email" v-model="form.email" required /><br />
          <label for="phone">Phone</label>
          <input type="number" id="phone" v-model="form.phone" /><br />
          <label for="subject">Subject*</label>
          <input type="text" id="subject" v-model="form.subject" required /><br />
          <label for="message">Message*</label><br />
          <textarea id="message" v-model="form.message" required></textarea>
        </form>
        <div class="form_button">
          <button
            type="reset"
            form="contact_formula"
            value="reset"
            class="primary-btn"
            @click="resetForm"
          >
            Clear
          </button>
          <button
            type="submit"
            form="contact_formula"
            value="submit"
            class="primary-btn submit_button"
            :disabled="!isFormValid"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
//----------------PAGE SECTION----------------
.page_container {
  display: grid;
  place-content: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 91.3vw;
  height: auto;
  background-color: var(--bg-section);
  margin-left: 4.35vw;
  grid-template-columns: auto;
  row-gap: 1.3vh;

  @media screen and (min-width: 768px) {
    grid-template-columns: auto;
    margin-top: 4.35vh;
    margin-bottom: 4.35vh;
    margin-left: 4.35vw;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: 28vw 1px auto;
    column-gap: 8vw;
  }
}

.about_title {
  text-align: center;
  font-size: var(--heading-2);

  @media screen and (min-width: 768px) {
    font-size: var(--heading-1);
  }
}
//----------------MIDDLE LINE----------------
.vertical_line {
  display: none;

  @media screen and (min-width: 1024px) {
    width: 0;
    display: grid;
    height: 34.5vh;
    border-left: 0.1vw solid var(--bg-footer);
  }
}

.horizontal_line {
  height: 0.15vh;
  width: 69vw;
  color: var(--bg-footer);

  @media screen and (min-width: 768px) {
    width: 66.2vw;
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
}
//----------------TEXT----------------
.about_text {
  max-width: 69vw;

  @media screen and (min-width: 768px) {
    max-width: 66.2vw;
  }

  @media screen and (min-width: 1024px) {
    max-width: 28vw;
  }
}
//----------------IMAGE---------------
.nemo_icon_Solid {
  display: none;

  @media screen and (min-width: 768px) {
    position: absolute;
    display: block;
    width: 129px;
    top: 10%;
    right: 6%;
  }

  @media screen and (min-width: 1024px) {
    width: 160px;

    right: 1%;
    top: 4.6%;
  }
}
.form_container {
  max-width: fit-content;
}
//----------------FORM----------------
form {
  font-size: var(--label-text);

  label {
    width: 6vw;
    min-width: 98px;
    max-width: 160px;
    clear: left;
    padding-right: 10px;
  }
  input {
    width: 11.5vw;
    height: 5vh;
    min-width: 200px;
    margin-top: -5px;
    margin-bottom: 22px;
    @media screen and (min-width: 768px) {
      width: 14vw;
      min-width: 250px;
    }
  }
  input,
  label {
    float: left;
  }
  textarea {
    width: 100%; // Adapts to content size
    height: 6vh;

    @media screen and (min-width: 768px) {
      height: 10vh;
    }
  }
}
.form_button {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  button {
    margin-left: 20px;
  }
}
</style>
