<script lang="ts">
  import Question from "components/question.svelte";
  const Questions = ["1quest", "2quest"]

  function giveAnswer(answer : number) {
    console.log(answer);
  }

</script>

<main>    
  <div class="content">
    <Question on:giveAnswer={(e) => giveAnswer(e.detail)} questions={Questions} on:openCard={(e) => {console.log(e.detail)}}>some question</Question>
  </div>
</main>

<style lang="sass">
  $rounded: 10px

  main
    display: flex
    justify-content: center
    align-items: center
    text-align: center
    height: 100vh
    background: #C7EEF5

  .content
    display: flex
    justify-content: center
    gap: 25px
    align-items: top
    border-radius: $rounded
    width: 100vw

</style>