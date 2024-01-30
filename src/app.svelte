<script lang="ts">
	import Game from './components/game.svelte';
  import Question from "components/question.svelte";
  import ProcentBar from "components/procentBar.svelte";
  import someQuest from "questions/main.json"

  console.log("1 -- ", someQuest);
  const Questions : any[] = someQuest;

  let correctAnswer : number = 0;
  let CurrentIndex = 0;
  let CurrentQuestion = 0;

  console.log(Questions[CurrentQuestion][0][0].titleBig);
  console.log(Questions[CurrentQuestion][CurrentIndex].questions);

  function giveAnswer(answer : number) {
    if (Questions[CurrentQuestion][CurrentIndex][0].questions[answer].correctAnsw === true) correctAnswer++;

    CurrentIndex += 1;
    if ((CurrentIndex >= Questions[CurrentQuestion].length) && CurrentQuestion + 1 < Questions.length) {
      CurrentQuestion++;
      CurrentIndex = 0;
    }
  }

</script>

<main>    
  {#if CurrentIndex + 1 <= Questions[CurrentQuestion].length}
  <div class="content">
    <Question on:giveAnswer={(e) => giveAnswer(e.detail)} questionsTitle={Questions[CurrentQuestion][CurrentIndex][0].title} questions={Questions[CurrentQuestion][CurrentIndex][0].questions}/>
  </div>
  {:else}
    <h1>end, you Questions {correctAnswer} / {Questions[CurrentQuestion].length}</h1>
  {/if}

  
</main>
<ProcentBar lengQuestion={Questions[CurrentQuestion].length} CurrentIndex={CurrentIndex + 1}/>
<!-- <Game/>r -->

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