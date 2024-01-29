<script lang="ts">
  import Question from "components/question.svelte";
  import ProcentBar from "components/procentBar.svelte";
  import someQuest from "questions/main.json"

  console.log("1 -- ", someQuest);
  const Questions : any[] = someQuest;

  let CurrentIndex = 0;


  function giveAnswer(answer : number) {
    console.log(answer);
    CurrentIndex += 1;
  }

</script>

<main>    
  {#if CurrentIndex + 1 <= Questions.length}
  <div class="content">
    <Question on:giveAnswer={(e) => giveAnswer(e.detail)} questions={Questions[CurrentIndex]} on:openCard={(e) => {console.log(e.detail)}}>some question</Question>
  </div>
  {:else}
    <h1>end</h1>
  {/if}


  <ProcentBar lengQuestion={Questions.length} CurrentIndex={CurrentIndex + 1}/>
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