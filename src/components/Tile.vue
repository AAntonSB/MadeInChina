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
  border-radius: 0 0 40% 40%;
  height: 60%;
  width: 15px;
  border:none;
}
.clickSeat:hover{
    background-color: darkgoldenrod;
}
/* Se nedan för färg på upptaget seat. */
/*   background-color: #C02215;
  border: #C02215;  */

</style>