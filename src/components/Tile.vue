<template>

    <div>
        <button class="clickSeat"></button>

    </div>

</template>

<script>
export default {
    props: ['position']
}
</script>

<style>
.clickSeat{
  margin: 2px;
  border-radius: 40%;
  height: 70%;
  width: 15px;
}

</style>