<script lang="ts">
import { createEventDispatcher } from 'svelte'
import Card from './card.svelte';

const dispatch = createEventDispatcher<{
    giveAnswer : number
}>()

export let questions : string[];
console.log(questions);
let imgSrc = "https://cloudmakers.ru/wp-content/uploads/2018/05/800x600_mixed.png";

function giveAnswer(id : number) : any {
    dispatch("giveAnswer", id)	
}

</script>

<div class="question">
    <h1 class="question-title"><slot></slot></h1>
    <span class="questions">
        {#each questions as question, index}
        {index}
        <Card text={question} idStr={index} linkSrc={imgSrc} on:openCard={(e) => {giveAnswer(e.detail)}}></Card>
        {/each}
    </span>
</div>  
    
<style lang="sass">
    .question-title
        font-size: 50px
        color: black
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
    