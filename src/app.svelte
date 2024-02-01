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

<div class="backGround">
  <div class="el1"></div>
  <div class="el2"></div>
  <div class="el3"></div>
  <div class="el4"></div>
</div>
<main>    

  {#if CurrentIndex + 1 <= QuestionLen}
  <div class="content">
    <Question on:giveAnswer={(e) => giveAnswer(e.detail)} questionsTitle={Questions[CurrentQuestion][CurrentIndex][0].title} questions={Questions[CurrentQuestion][CurrentIndex][0].questions}/>
  </div>
  {:else}
    <h1>Правильных ответов : {correctAnswer} / {QuestionLen}</h1>
  {/if}
  <button on:click={toggleMenu} class="toggleMenuButton">открыть меню</button>
</main>
{#if menuOpen}
<div class="listQuestion">
  <div class="titleBlock"><h1 class="titleTest">Тест открой Белорусь через технологии</h1></div>
  <button on:click={() => chooseQuestion(1)} class="QuestionButton"><h1 class="QuestionTitle">Белорусское партизанское движение</h1></button>
  <button on:click={() => chooseQuestion(2)} class="QuestionButton"><h1 class="QuestionTitle">Техника Второй Мировой Войны</h1></button>
  <button on:click={() => chooseQuestion(0)} class="QuestionButton"><h1 class="QuestionTitle">История Беларуси</h1></button>
  <button on:click={() => chooseQuestion(3)} class="QuestionButton"><h1 class="QuestionTitle">Даты по Второй Мировой Войны</h1></button>
</div>
{/if}

{#if Questions}
<ProcentBar lengQuestion={QuestionLen} CurrentIndex={CurrentIndex + 1 <= QuestionLen ? CurrentIndex+1 : CurrentIndex }/>
{/if}

<style lang="sass">
$rounded: 10px
$elColor1 : #7DDCD6
$elcolor2 : #75BCEE
$elcolor3 : #EA559F


.titleBlock
  display: block
  width: 100%
  padding: 10px

.backGround
  position: absolute
  width: 100%


.el1
  position: relative
  box-shadow: 0px 0px 100px 100px $elColor1
  opacity: 0.6
  top: 0%
  left: 90%
  background-color: $elColor1
  border-radius: 100%
  width: 20em
  height: 20em
  

.el2
  position: relative
  box-shadow: 0px 0px 100px 100px $elcolor2
  opacity: 0.6
  top: 50%
  left: 20%
  background-color: $elcolor2
  border-radius: 100%
  width: 20em
  height: 20em

.el3
  position: relative
  box-shadow: 0px 0px 100px 100px $elcolor3
  opacity: 0.6
  top: 50%
  left: 90%
  background-color: $elcolor3
  border-radius: 100%
  width: 20em
  height: 20em
.el4
  position: relative
  box-shadow: 0px 0px 100px 100px $elcolor3
  opacity: 0.6
  top: 50%
  left: 10%
  background-color: $elcolor3
  border-radius: 100%
  width: 20em
  height: 20em



.titleTest
  display: block
  font-size: 45px
  color: red

.toggleMenuButton
  text-align: center
  position: fixed
  top: 10px
  right: 10px
  cursor: pointer
  width: 70px
  height: 45px
  padding: 0px 10px
  background-color: #7FFFD4
  border: 1px black solid

.listQuestion
  position: absolute
  max-width: 1500px
  max-height: 400px
  display: block
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