<script lang="ts">
  import Question from "components/question.svelte";
  import ProcentBar from "components/procentBar.svelte";
  import someQuest from "questions/main.json"

  const Questions : any[] = someQuest;

  let correctAnswer : number = 0;
  let CurrentIndex = 0;
  let CurrentQuestion = 1;
  let menuOpen = true;

  let QuestionLen = Questions[CurrentQuestion].length;

  function giveAnswer(answer : number) {
    if (Questions[CurrentQuestion][CurrentIndex][0].questions[answer].correctAnsw === true) correctAnswer++;

    CurrentIndex += 1;
  }

  function chooseQuestion(countQuest : number) {
    if (countQuest == CurrentQuestion) {menuOpen = false; return}
    CurrentQuestion = countQuest;
    CurrentIndex = 0;
    correctAnswer = 0;
    QuestionLen = Questions[CurrentQuestion].length;

    menuOpen = false;
  }

  function toggleMenu() : void {
    menuOpen = !menuOpen;
  }
</script>

<main>    
  {#if CurrentIndex + 1 <= QuestionLen}
  <div class="content">
    <Question on:giveAnswer={(e) => giveAnswer(e.detail)} questionsTitle={Questions[CurrentQuestion][CurrentIndex][0].title} questions={Questions[CurrentQuestion][CurrentIndex][0].questions}/>
  </div>
  {:else}
    <h1>end, you Questions {correctAnswer} / {QuestionLen}</h1>
  {/if}
  <button on:click={toggleMenu} class="toggleMenuButton">открыть меню</button>
</main>
{#if menuOpen}
<div class="listQuestion">
  <button on:click={() => chooseQuestion(1)} class="QuestionButton"><h1 class="QuestionTitle">Партизаны СССР</h1></button>
  <button on:click={() => chooseQuestion(2)} class="QuestionButton"><h1 class="QuestionTitle">Техника Второй Мирвоой Войны</h1></button>
  <button on:click={() => chooseQuestion(0)} class="QuestionButton"><h1 class="QuestionTitle">Старая Беларусь</h1></button>
</div>
{/if}

{#if Questions}
<ProcentBar lengQuestion={QuestionLen} CurrentIndex={CurrentIndex + 1 <= QuestionLen ? CurrentIndex+1 : CurrentIndex }/>
{/if}

<style lang="sass">
$rounded: 10px

.toggleMenuButton
  width: 70px
  height: 35px
  padding: 0px 10px
  background-color: #7FFFD4
  border: 1px black solid

.listQuestion
  position: absolute
  max-width: 500px
  max-height: 800px
  width: 80%
  height: 80%
  background-color: rgb(64, 224, 208, 0.9)
  border-radius: 1.5em
  justify-content: center
  text-align: center
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)

.QuestionButton
  display: block
  cursor: pointer
  margin: 20px auto
  padding: 15px
  width: 20em
  height: 7em
  background-color: #C7EEF5
  border-radius: 10em
  border : 1px black solid
  transition: all .2s
  &:hover
    transform: scale(1.05)
    opacity: 0.7
    

.QuestionTitle
  font-size: 20px
  font-family: sans-serif

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