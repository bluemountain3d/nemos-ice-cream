<script setup>
// Javascript here

</script>

<template>
  <main class="page-section page-container">
    <section class="object-gap"> <!--Behöver fixa ett bättre namn för alla variabler-->
      <article>
        <h1 class="heading-1 about_title">about us</h1>
        <p>
          At Nemo’s Ice Cream, we believe that every scoop should be an adventure! Inspired by the wonders of the ocean, 
          we craft artisanal ice cream that blends bold flavors with stunning, sea-inspired designs. 
          From vibrant coral swirls to deep-sea blues, every creation is a tribute to the beauty of the underwater world.
        </p>
        <p>
          Sustainability is at the heart of what we do. We use natural ingredients, 
          eco-friendly packaging, and support ocean conservation initiatives to ensure that every indulgence is as kind to the planet as it is delicious.
        </p>
        <p>
          Whether you're diving into a classic flavor or exploring something new,
          Nemo’s Ice Cream brings joy, creativity, and a splash of ocean magic to every scoop. So grab your spoon and just keep scooping!
        </p>
      </article>
      
    </section >
    <div class="vertical-line object-gap" >
      
    </div>
    <section class="">
      <img class="nemo-icon" src="../../../assets/images/nemo-solid.PNG" alt="nemo">
      <h1 class="heading-1">contact</h1>
      <form action="" id="contact-formula">
        <label for="name">Name*</label>
        <input type="text" id="name" required><br>
        <label for="mail">Email*</label> 
        <input type="email" id="Email" required><br>
        <label for="phone">Phone</label>
        <input type="number" id="phone"><br>
        <label for="subject">Subject*</label>
        <input type="text" id="subject" required><br>
        <label for="message">Message*</label><br>
        <textarea name="message" id="message" required></textarea>
      </form>
      <button type="submit" form="contact-formula" value="submit" class="primary-btn" disabled>Submit</button>
    </section>
  </main>
</template>

<!-- Local Component Specific styling -->
<style scoped lang="scss">

 .page-container{
  max-width: 91.3vw;
  background-color: var(--bg-section);
  margin-top: 53px;
  margin-bottom: 53px;
  margin-left: 4.35vw;
  height: 842px;
 }
 .vertical-line{
  height: 500px;
  border-left: 1px solid var(--bg-footer);

 }
  form{
    font-size: var( --label-text);
    label{
      width: 158px;
      clear:left;
      padding-right: 10px;
    }
    input{
      width: 275px;
      margin-top: -5px;
      margin-bottom: 22px;
      height: 50px;
    }
    input, label {
    float:left;
    
}
textarea{
      width: 443px;
      height: 199px;
    }
  }
  .object-gap{
    padding-inline-end: 8.944vw;
    
    //margin-left: 8.944vw;
    
  }

  article{
    max-width: 443px;
    h1{
      text-align: center;
    }
  }
  .nemo-icon{
    position: absolute;
    width: 160px;
    height: 109px;
    right: 18px;
    top: 53px;
  }
</style>
