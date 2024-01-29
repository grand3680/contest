<script lang="ts">
import { createEventDispatcher } from 'svelte'
import Card from './card.svelte';

const dispatch = createEventDispatcher<{
    giveAnswer : number
}>()

export let questions : any;
export let questionsTitle : string;

console.log(questions);

function giveAnswer(id : number) : any {
    dispatch("giveAnswer", id)	
}

</script>

<div class="question">
    <h1 class="question-title">{questionsTitle}</h1>
    <span class="questions">
        {#each questions as question, index}
        <Card text={question.title} idStr={index} linkSrc={question.src} on:openCard={(e) => {giveAnswer(e.detail)}}></Card>
        {/each}
    </span>
</div>  
    
<style lang="sass">
    .question-title
        font-size: 50px
        color: #133955
        margin-bottom: 40px
        font-family: Arial, Helvetica, sans-serif
    .questions
        text-align: center
        justify-content: center 
        text-align: start
        flex-wrap: wrap
        margin: 10px 10px
        padding: 0 20px
        display: flex

</style>
    