<template>
    <div class="userSlot">
        <h2>User Sessions</h2>
         <p> No Sessions have been added.</p>
    </div>
        <slot> </slot>
    
</template>

<style>

.userSlot {
    width: 400px;
    height: 200px;
    background-color: #D8D8D8;
    border-radius: 10px;
    display: flex;
    padding: 10px;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    margin: 100px 425px;

}

.userSlot h2 {
    color: #000080;
}


</style>