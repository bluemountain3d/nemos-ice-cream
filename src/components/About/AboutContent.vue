<script setup>

import nemoIconSolid from '@/assets/bilder/nemo-solid.jpg'; 

</script>

<template>
  <main>
    <section class="page-section page-container">
      <div > 
        <article class="about_text">
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
        
      </div >
      <div class="vertical-line" ></div>
      <hr class="horizontal-line">
      
      <div class="">
        <img class="nemo_icon_Solid" :src="nemoIconSolid" alt="nemo">
        
        <h1 class="heading-1 about_title">contact</h1>
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
        <div class="form_button">
          <button type="reset" form="contact-formula" value="reset" class="primary-btn">Clear</button>
          <button type="submit" form="contact-formula" value="submit" class="primary-btn submit_button" disabled>Send</button>
        </div>
      </div>
    </section>
  </main>
</template>

<!-- Local Component Specific styling -->
<style scoped lang="scss">

 .page-container{
  display:grid;
  place-content: center;
  max-width: 91.3vw;
  height: auto;
  background-color: var(--bg-section);
  margin-left: 4.35vw;
  grid-template-columns: 323px;
  row-gap: 10px;
  @media screen and (min-width: 768px) {
    //max-width: 91.3vw;
    grid-template-columns: 543px;
    background-color: var(--bg-section);
    margin-top: 53px;
    margin-bottom: 53px;
    margin-left: 4.35vw;
    
  }
  @media screen and (min-width: 1024px) {
    //display: flex;
    grid-template-columns: 450px 1px 500px;
    column-gap: 120px;
    
  }
 }

 .about_title{
  text-align: center;
  font-size: var(--heading-2);
  @media screen and (min-width: 768px) {
    font-size: var(--heading-1);
  }
 }
 .vertical-line{
  display: none;
  @media screen and (min-width: 1024px) {
    width: 0px;
    display: grid;
    height: 500px;
    border-left: 1px solid var(--bg-footer);

  }
}
  .horizontal-line{
    height: 1px;
    width: 269px;
    color: var(--bg-footer);
    @media screen and (min-width: 768px) {
      width: 552px;
    }
    @media screen and (min-width: 1024px) {
    display: none;
    
    }
  }

 
 .about_text{
    //display:flex;
    max-width: 323px;

    @media screen and (min-width: 768px) {
      max-width: 543px;
    }
    
    @media screen and (min-width: 1024px) {
      max-width: 443px;
    

  }
    
    
  }
  
  .nemo_icon_Solid{
    display: none;
    
    @media screen and (min-width: 768px) {
    position: absolute;
    display: block;
    width: 129px;
    top: 100px;
    right: 55px;
  }
  @media screen and (min-width: 1024px) {
    width: 160px;
    height: 109px;
    right: 18px;
    top: 53px;
  }
  }
  form{
   
    font-size: var( --label-text);
    width: fit-content;
    label{
      width: 98px;
      clear:left;
      padding-right: 10px;
      @media screen and (min-width: 400px) {
        width: 120px;
      
    }
    @media screen and (min-width: 768px) {
      margin-left: 60px;
      width: 158px;
      
    }
    
    }
    input{
      width: 224px;
      margin-top: -5px;
      margin-bottom: 22px;
      height: 50px;
      @media screen and (min-width: 768px) {
      width: 275px;
      
    }
    }
    input, label {
    float:left;
    
}
textarea{

  width: 338px;
  height: 139px;
  
  @media screen and (min-width: 768px) {
    width: 443px;
    height: 199px;
    margin-left: 60px;
  }
 
    }
    
  }
  .form_button{
    float: right;
      button{
        margin-left: 20px;
      }
    }

</style>
