<template>
    <div class="main-body">
        HELLO
        <svg class="defs-only">
            <filter id="monochrome" 
            color-interpolation-filters="sRGB"
            x="0" y="0" height="100%" width="100%">
            <feColorMatrix type="matrix"
            values="1.00 0 0 0 0 
            0.80 0 0 0 0 
            0.65 0 0 0 0
            0    0 0 1 0" />
            </filter>
        </svg>
        <img class="ticket" src="https://www.pngkey.com/png/full/19-196604_large-raffle-ticket-printable-raffle-tickets.png">
    </div>
</template>

<style>
.ticket{
    -webkit-filter: url(#monochrome);
  filter:  url(#monochrome);
  box-shadow: #224 0.2em 0.2em 0.6em 0.1em;
}

.defs-only{
    position: absolute;
    height: 0; width: 0;
    overflow: none;
    left: -100%;
}

</style>