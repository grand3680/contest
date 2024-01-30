<script lang="ts">
import { createEventDispatcher } from 'svelte'
import * as images from "images/index"

const dispatch = createEventDispatcher<{
    openCard : number
}>()

export let idStr : number;
export let text : string;
export let linkSrc : any;

console.log(linkSrc);
let linkSrcImg : any = images[linkSrc] ?? "";


console.log(linkSrc, linkSrcImg);

function openCard(id : number) : any {
    dispatch("openCard", id)	
}
</script>

<div class="card">  
    <div class="answer">
        {#if linkSrcImg}
        <img class="imgCard" src={linkSrcImg} alt="">
        {/if}
        {#if text}
        <h1 class="answer-text">{text}</h1>
        {/if}

    </div>
    <div class="button-block">
        <button class="button-card" on:click={() => openCard(idStr)}>ответить</button>
    </div>
</div>  

<style lang="sass">
.imgCard  
    width: 100% !important
    height: 100% !important

.button-block
    position: absolute
    width: 100%
    bottom: 0
    left: 0
    display: flex
    align-items: center
    justify-content: center    
    text-align: center 

.button-card
    border : gray 1px solid
    border-radius: 10px 10px 1px 1px
    text-align: center
    font-size: 20px
    padding: 0 25px
    width : 80%
    height: 35px
    background-color: #133955
    color: white
    opacity: 0.9
    cursor: pointer
    transition: all .5s
    opacity: 0.8

    &:hover
        transform: scale(1.05)
        opacity: 0.7

.answer-text
    color: #E0FFFF
    font-size: 30px
    font-family: sans-serif
    text-shadow: 1px 2px 6px rgba(207,95,95,0.24)
    margin: 0
    font-weight: 600

.answer
    display: flex
    width: 90%
    padding: 20px 15px

    text-align: center
    margin: 0 auto
    justify-content: center

.card
    position: relative

    justify-content: center
    text-align: center
    padding: 5px 25px
    margin: 10px
    height: 300px
    max-height: 450px

    max-width: 280px
    width: 250px
    border-radius: 15px
    -webkit-box-shadow: 0px 0px 10px 7px rgba(34, 60, 80, 0.2)
    -moz-box-shadow: 0px 0px 10px 7px rgba(34, 60, 80, 0.2)
    box-shadow: 0px 0px 10px 7px rgba(34, 60, 80, 0.2)

    background-color: #37aadb2d
    transition: all .15s
    &:hover
        box-shadow: 0px 0px 10px .2px gray
        transform: scale(1.01)
</style>