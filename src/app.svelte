<script lang="ts">
  import Question from "components/question.svelte";
  import { ENV_OBJ } from "lib/env";

  const URL = ENV_OBJ.URL;
  const Questions = ["some", "some"]

</script>

<main>    
  <div class="content">
    <Question idStr="1" titleQuestion="example Question" questions={Questions} on:openCard={(e) => {console.log(e.detail)}}></Card>
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