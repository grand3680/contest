<script lang="ts">
import { createEventDispatcher } from 'svelte'
import Card from './card.svelte';

const dispatch = createEventDispatcher<{
    giveAnswer : string
}>()

export let idStr : string;

function giveAnswer(id : string) : any {
    dispatch("giveAnswer", id)	
}

</script>

<div class="question">
    <h1 class="question-title"><slot></slot></h1>
    <Card idStr={idStr} on:openCard={(e) => {alert(e.detail)}}>test val</Card>
</div>  
    
<style lang="sass">
    .question-title
        font-size: 50px
        color: white

</style>
    