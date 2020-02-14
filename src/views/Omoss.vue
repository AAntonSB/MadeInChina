<template>
    <div class="flexdirectioncolumn">
        <div id="kontaktPanel" class="flexdirectioncolumn">
            <span class="boxTitle"><b>Kontakta oss</b></span> 
            <div class="flexdirectionrow" style="justify-content: center;">
                <div class="contactTextBox">
                    Smålandsgatan 53<br>
                    710 00 Småland<br>

                    Tel: 010-123 45<br>
                    Email: info@madeinchina.se<br>
                </div>
                <div class="mapbox">   
                    <img id="map-icon" src="@/assets/map.jpg" alt="map icon">
                </div>
            </div>
        </div>
        <div id="jobbPanel">
            <div class="flexdirectioncolumn">
                <span class="boxTitle"><b>Jobba hos oss</b></span>
                <ul>
                    <li>Ekonomiavdelningen</li>
                    <li>Marknadsavdelning</li>
                    <li>Programavdelning</li>
                    <li>Driftavdelning</li>
                    <li>Försäljningsavdelning</li>
                    <li>HR avdelning</li>
                    <li>Sommarjobb och praktik</li>
                </ul>
            </div>
        </div>


        <div id="historyPanel">
            <div class="flexdirectioncolumn">
            <span class="boxTitle"><b>Vår histora</b></span>
                <div>
                    <div style="text-align: left; width: 60%; margin: 15px auto;">Made in China grundades år 1985 av Kalle Smålänning. Hans passion för film startade iden om att använda sitt arv från hans far till att starta Made in China.
                    Namnet kommer från att hans far levde och arbetade i China under många år av sitt liv. <br>
                    Made in China AB är ett av Smålands ledande leverantörer av kultur och nöje med ca 1 miljon biobesök per år. 
                    Vi ingår i Asian Cinemas Group som ägs av världens största biografkedja AMC Theatres.<br>
                    Made in Chinas huvudkontor ligger i Smålandsgatan 53inns våra stabsfunktioner:
                    </div>
                    <br>
                    <ul>
                        <li>Ledning</li>
                        <li>Ekonomiavdelning</li>
                        <li>Marknadsavdelning</li>
                        <li>Programavdelning</li>
                        <li>Driftavdelning</li>
                        <li>Försäljningsavdelning</li>
                        <li>HR-avdelning</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#kontaktPanel, #jobbPanel, #historyPanel{
    width: 95%;
    background-color: #efefef;
	color: #000;
    margin: 15px;
    padding: 30px;
    border-radius: 5px;
    text-align: center;
    font-style: normal;
    font-size: 14,5;
    display: flex; 
    justify-content: center;
}
.mapbox{
    width: 200px;
    height: 200px;
    margin: 15px;
}
#map-icon{
 width:100%;
 height: 100%;    
}
.contactTextBox{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.boxTitle{
    text-align: center;
    font-size: 20px;
    margin: 20px;
}
</style>
