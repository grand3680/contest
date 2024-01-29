<script lang="ts">
	import Game from './components/game.svelte';
  import Question from "components/question.svelte";
  import ProcentBar from "components/procentBar.svelte";
  import someQuest from "questions/main.json"

  console.log("1 -- ", someQuest);
  const Questions : any[] = someQuest;
  let correctAnswer : number = 0;

  let CurrentIndex = 0;
  console.log(Questions[0][0].titleBig);
  console.log(Questions[CurrentIndex].questions);

  function giveAnswer(answer : number) {
    if (Questions[CurrentIndex][0].questions[answer].correctAnsw === true) correctAnswer++;
    console.log("some - ", correctAnswer);

    CurrentIndex += 1;
  }

</script>

<main>    
  {#if CurrentIndex + 1 <= Questions.length}
  <div class="content">
    <Question on:giveAnswer={(e) => giveAnswer(e.detail)} questionsTitle={Questions[CurrentIndex][0].title} questions={Questions[CurrentIndex][0].questions}/>
  </div>
  {:else}
    <h1>end, you Questions {correctAnswer} / {Questions.length}</h1>
  {/if}

  <!-- <Game/> -->

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