<script lang="ts">
  import Question from "components/question.svelte";


  let imgSrc = "https://cloudmakers.ru/wp-content/uploads/2018/05/800x600_mixed.png";

  const Questions : any[] = [
    {title : "1quest", src : imgSrc}, 
    {title : "2quest"}, 
    {title : "122112"}
  ];

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