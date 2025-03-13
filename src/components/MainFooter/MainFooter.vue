<script setup>
import nemoLogo from '@/assets/images/nemo-logo.webp';
</script>

<template>
  <footer class="footer">
    <p class="footer__copyright">&copy; 2025, Clownfiskarna</p>
    <div class="footer__section-left">
      <div class="footer__logo-container">
        <img :src="nemoLogo" alt="Nemo's logo" loading="lazy" width="882" height="1352" />
      </div>
      <div>
        <h3>Visit Us</h3>
        <p>
          <span class="footer__street">Faux Street 123</span>
          <span>Cityname</span>
          <span>123 45</span>
        </p>
        <svg
          class="footer__visually-hidden-mobile"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 1.5C4.41624 1.5 1.5 4.41624 1.5 8V17C1.5 20.5838 4.41624 23.5 8 23.5H17C20.5838 23.5 23.5 20.5838 23.5 17V8C23.5 4.41624 20.5838 1.5 17 1.5H8ZM8 2.5H17C20.0432 2.5 22.5 4.95676 22.5 8V17C22.5 20.0432 20.0432 22.5 17 22.5H8C4.95676 22.5 2.5 20.0432 2.5 17V8C2.5 4.95676 4.95676 2.5 8 2.5ZM18.5 5.5C18.2348 5.5 17.9804 5.60536 17.7929 5.79289C17.6054 5.98043 17.5 6.23478 17.5 6.5C17.5 6.76522 17.6054 7.01957 17.7929 7.20711C17.9804 7.39464 18.2348 7.5 18.5 7.5C18.7652 7.5 19.0196 7.39464 19.2071 7.20711C19.3946 7.01957 19.5 6.76522 19.5 6.5C19.5 6.23478 19.3946 5.98043 19.2071 5.79289C19.0196 5.60536 18.7652 5.5 18.5 5.5ZM12.5 7C9.46836 7 7 9.46836 7 12.5C7 15.5316 9.46836 18 12.5 18C15.5316 18 18 15.5316 18 12.5C18 9.46836 15.5316 7 12.5 7ZM12.5 8C14.9912 8 17 10.0088 17 12.5C17 14.9912 14.9912 17 12.5 17C10.0088 17 8 14.9912 8 12.5C8 10.0088 10.0088 8 12.5 8Z"
            fill="#FFF3E0"
          />
        </svg>
      </div>
      <div class="footer__links-section footer__visually-hidden-mobile">
        <h3>Links</h3>
        <ul>
          <li><RouterLink to="/about">About us</RouterLink></li>
          <li><RouterLink to="/about#contact">Contact Us</RouterLink></li>
        </ul>
      </div>
    </div>
    <div class="footer__section-right">
      <h1 class="footer__visually-hidden-mobile">Nemo</h1>
      <svg
        class="footer__visually-hidden-tablet"
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 1.5C4.41624 1.5 1.5 4.41624 1.5 8V17C1.5 20.5838 4.41624 23.5 8 23.5H17C20.5838 23.5 23.5 20.5838 23.5 17V8C23.5 4.41624 20.5838 1.5 17 1.5H8ZM8 2.5H17C20.0432 2.5 22.5 4.95676 22.5 8V17C22.5 20.0432 20.0432 22.5 17 22.5H8C4.95676 22.5 2.5 20.0432 2.5 17V8C2.5 4.95676 4.95676 2.5 8 2.5ZM18.5 5.5C18.2348 5.5 17.9804 5.60536 17.7929 5.79289C17.6054 5.98043 17.5 6.23478 17.5 6.5C17.5 6.76522 17.6054 7.01957 17.7929 7.20711C17.9804 7.39464 18.2348 7.5 18.5 7.5C18.7652 7.5 19.0196 7.39464 19.2071 7.20711C19.3946 7.01957 19.5 6.76522 19.5 6.5C19.5 6.23478 19.3946 5.98043 19.2071 5.79289C19.0196 5.60536 18.7652 5.5 18.5 5.5ZM12.5 7C9.46836 7 7 9.46836 7 12.5C7 15.5316 9.46836 18 12.5 18C15.5316 18 18 15.5316 18 12.5C18 9.46836 15.5316 7 12.5 7ZM12.5 8C14.9912 8 17 10.0088 17 12.5C17 14.9912 14.9912 17 12.5 17C10.0088 17 8 14.9912 8 12.5C8 10.0088 10.0088 8 12.5 8Z"
          fill="#FFF3E0"
        />
      </svg>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background-color: var(--bg-footer);
  color: var(--text-light);
  width: 100vw;
  height: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  font-family: var(--ff-secondary);
  font-size: 0.875rem;
  position: absolute;
  z-index: 9;

  .footer__copyright {
    font-size: 0.75rem;
    position: absolute;
    bottom: 0.5em;
    right: 0.75em;
    margin: 0;
  }

  .footer__visually-hidden-mobile {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
  .footer__section-left {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    height: 100%;

    h3 {
      margin-block: 0;
      font-family: var(--ff-secondary);
      font-size: 1.5rem;
      margin-top: 1.5rem;
    }

    img {
      width: 4.875rem;
      height: 7.5rem;
      justify-self: end;
      position: relative;
      bottom: 20%;
      margin-left: 1.875rem;
    }

    p {
      display: flex;
      flex-direction: column;
      margin-block: 0;

      .footer__street {
        width: 11ch;
      }
    }
  }

  .footer__section-right {
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    justify-items: end;
    align-items: center;
    margin-right: 1rem;

    svg {
      grid-row: 3;
    }
  }
}

@media screen and (min-width: 768px) {
  .footer {
    font-size: 1rem;

    .footer__copyright {
      font-size: 0.875rem;
      bottom: 0.5em;
      right: unset;
      left: 0.75em;
      margin: 0;
    }

    .footer__visually-hidden-mobile {
      clip: auto;
      clip-path: none;
      height: auto;
      overflow: visible;
      position: static;
      white-space: normal;
      width: auto;
    }

    .footer__visually-hidden-tablet {
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }
    .footer__section-left {
      grid-template-columns: repeat(3, 1fr);
      gap: 3.4rem;
      .footer__logo-container {
        display: flex;
        flex-direction: column;
        img {
          width: 6.438rem;
          height: 9.863rem;
        }
      }
      svg {
        margin-top: 0.4rem;
      }
      .footer__links-section {
        justify-self: start;
        ul {
          padding: 0;
          margin-top: 0;
          li {
            display: flex;
            align-items: center;
            list-style-type: none;
            position: relative;
            padding-left: 1.5rem;
            width: 11ch;
            color: var(--text-link);

            &:hover {
              color: var(--text-light);
            }

            &::before {
              content: url('/src/assets/images/star-icon.svg');
              position: absolute;
              left: 0;
              width: 1rem;
              height: 1rem;
              display: flex;
              justify-content: center;
              align-items: center;
              object-fit: contain;
            }
          }
        }
      }
    }

    .footer__section-right {
      grid-template-rows: 1fr;
      justify-content: end;
      h1 {
        font-family: var(--ff-tertiary);
        font-weight: 400;
        font-size: 6rem;
        line-height: 0.8;
        text-transform: lowercase;
        margin: 0;
        text-align: end;
        align-self: end;
        justify-self: end;
        position: relative;
        bottom: 0;
        right: 1.5rem;
        overflow: clip;
      }
    }
  }
}
@media screen and (min-width: 1152px) {
  .footer {
    .footer__section-left {
      gap: 5.375rem;
      .footer__logo-container {
        img {
          width: 9.188rem;
          height: 14.083rem;
        }
      }

      h3 {
        font-size: var(--heading-2);
        width: 7ch;
      }
    }

    .footer__section-right {
      h1 {
        font-size: 10rem;
      }
    }
  }
}
</style>
