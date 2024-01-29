<script lang="ts">
    let TankSprite2 = "https://gamefaqs.gamespot.com/a/box/1/5/9/767159_front.jpg"

    export let x: number;
    export let y: number;
  </script>
  
  <style>
    .tank {
      position: absolute;
      width: 50px;
      height: 50px;
      background-image: url("https://gamefaqs.gamespot.com/a/box/1/5/9/767159_front.jpg");
      background-size: cover;
    }
  </style>
  
  <div class="tank" style="left: {x * 50}px; top: {y * 50}px;"></div>