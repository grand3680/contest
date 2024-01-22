<script lang="ts">
import { createEventDispatcher } from 'svelte'

const dispatch = createEventDispatcher<{
    openCard : string
}>()

export let idStr : string;

function openCard(id : string) : any {
    dispatch("openCard", id)	
}

</script>

<div class="card">  
    <h1 class="answer">
        <slot></slot>
    </h1>
    <button class="button-card" on:click={() => openCard(idStr)}>click me</button>
</div>  

<style lang="sass">
    .button-card
        width : 100px
        height: 25px
        background-color: #1675e02d
        cursor: pointer

    .answer
        color : black
        font-size: 25px
        font-family: sans-serif

    .card
        padding: 5px 25px
        height: 200px
        width: 180px
        border-radius: 5px
        border: 2px solid gray
        background-color: #37aadb2d


</style>
  