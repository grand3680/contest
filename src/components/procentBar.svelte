<script lang="ts">

export let lengQuestion : number;
export let CurrentIndex : number;

</script>

<div class="procentBar">  
    <div class="progress" 
    style="width: {(100 / (lengQuestion)) * CurrentIndex}%;"
    >
        {CurrentIndex} / {lengQuestion}
    </div>
</div>  

<style lang="sass">
.procentBar
    position: absolute
    width: 100vw
    height: 25px
    background-color: #b4d1b4
    bottom: 0
.progress 
    position: relative
    transition: all 0.8s
    top: 0
    left: 0
    height: 100%
    background-color: #03fc52
    border-radius: 0px 10px 10px 0px
    
</style>