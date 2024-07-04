<style src="./style/index.scss" scoped></style>
<style src="./style/3d.scss" scoped></style>
<style src="./style/border.scss" scoped></style>
<style src="./style/card2.scss" scoped></style>
<style src="./style/card3.scss" scoped></style>
<style src="./style/card4.scss" scoped></style>

<script setup lang="ts">
import { onMounted } from "vue";
import VanillaTilt from 'vanilla-tilt';

onMounted(() => {
  VanillaTilt.init(document.querySelector(".card3"), {
  max: 50,
  speed: 400
 });

 //It also supports NodeList
 VanillaTilt.init(document.querySelectorAll(".card3"));
});

</script>

## 效果 1

<div class="card card1">
  Magic Card
</div>

## 效果 2

<section class="product">
 <div class="product__photo">
  <div class="photo-container">
   <div class="photo-main">
    <div class="controls">
     <i class="material-icons">share</i>
     <i class="material-icons">favorite_border</i>
    </div>
    <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537291846/codepen/delicious-apples/green-apple-with-slice.png" alt="green apple slice">
   </div>
   <div class="photo-album">
    <ul>
     <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple"></li>
     <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303532/codepen/delicious-apples/half-apple.png" alt="half apple"></li>
     <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303160/codepen/delicious-apples/green-apple-flipped.png" alt="green apple"></li>
     <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303708/codepen/delicious-apples/apple-top.png" alt="apple top"></li>
    </ul>
   </div>
  </div>
 </div>
 <div class="product__info">
  <div class="title">
   <h1>Delicious Apples</h1>
   <span>COD: 45999</span>
  </div>
  <div class="price">
   R$ <span>7.93</span>
  </div>
  <div class="variant">
   <h3>SELECT A COLOR</h3>
   <ul>
    <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple"></li>
    <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302752/codepen/delicious-apples/yellow-apple.png" alt="yellow apple"></li>
    <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302427/codepen/delicious-apples/orange-apple.png" alt="orange apple"></li>
    <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302285/codepen/delicious-apples/red-apple.png" alt="red apple"></li>
   </ul>
  </div>
  <div class="description">
   <h3>BENEFITS</h3>
   <ul>
    <li>Apples are nutricious</li>
    <li>Apples may be good for weight loss</li>
    <li>Apples may be good for bone health</li>
    <li>They're linked to a lowest risk of diabetes</li>
   </ul>
  </div>
  <button class="buy--btn">ADD TO CART</button>
 </div>
</section>

## 效果 3

<div class="card card2">
    <img src="/logo.png" alt="">
    <div class="text">
        <h2>How disciplined you are, how free you are.</h2>
        <p>你有多自律，就有多自由。</p>
    </div>
</div>

## 效果 4

<div class="card card3" data-tilt>
    <div class="content">
        <h2>01</h2>
        <h3>Card One</h3>
        <p>Realistic glass card hover effect, realistic glass card hover effect, realistic glass card hover
            effect.</p>
        <a href="#">Read More</a>
    </div>
</div>

## 效果 5

<div class="card card4">
  <div class="wrapper">
    <img src="/images/dark_rider-cover.jpg" class="cover-image" />
  </div>
  <img src="/images/dark_rider-title.png" class="title" />
  <img src="/images/dark_rider-character.webp" class="character" />
</div>
