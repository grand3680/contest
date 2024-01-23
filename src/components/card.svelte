<script lang="ts">
import { createEventDispatcher } from 'svelte'

const dispatch = createEventDispatcher<{
    openCard : number
}>()

export let idStr : number;
export let text : string;
export let linkSrc : string = "";

function openCard(id : number) : any {
    dispatch("openCard", id)	
}

</script>

<div class="card">  
    <h1 class="answer">
        {#if linkSrc}
        <img class="imgCard" src="{linkSrc}" alt="">
        {/if}
        {text}
        
    </h1>
    <button class="button-card" on:click={() => openCard(idStr)}>click me</button>
</div>  

<style lang="sass">
    .imgCard  
        width: 100% !important
        height: 100% !important

    .button-card
        position: absolute
        bottom: 10px
        left : 30px

        border : gray 1px solid
        padding: 0 25px
        width : 100px
        height: 25px
        background-color: black
        color: white
        opacity: 0.9
        cursor: pointer
        transition: all .5s
        &:hover
            transform: scale(1.25)
            opacity: 0.7


    .answer
        color : black
        font-size: 25px
        font-family: sans-serif

    .card
        position: relative
        justify-content: center
        text-align: center
        padding: 5px 25px
        margin: 10px
        height: 350px
        width: 280px
        border-radius: 5px
        border: 2px solid gray
        background-color: #37aadb2d


</style>
  