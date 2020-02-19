<template>
  <div class="about">
    <h1>Add showtimes</h1>
    <button class="btn-small red" v-on:click="saveMovies()" style="width: 300px; margin: 15px;">Movies import to database</button>
    <button class="btn-small red" v-on:click="saveShowtimes()" style="width: 300px; margin: 15px;">Showtimes Import to database</button>
  </div>
</template>

<script>
export default {
  data() {
    return {   
    };
  },
  methods: {
    saveMovies(){
     this.$store.dispatch("publishMovies", {movies:[{ 
            id: 1, 
            age: 15, 
            title: 'Joker', 
            image: 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
            imageOfCarousel: 'https://robbreportedit.files.wordpress.com/2019/10/joker-2019.jpg?w=1000&h=563',
            trailer: 'zAGVQLHvwOY',
            videoImage: 'https://uhdwallpapers.org/uploads/converted/19/09/21/joker-4k-poster-1920x1080_666674-mm-90.jpg',
            director: 'Todd Phillips',
            actors: ['Joaquin Phoenix', 'Robert De Niro', 'Zazie Beetz', 'Frances Conroy'],
            genre: ['Drama', 'Thriller'],
            language: 'Engelska',
            plot: 'Arthur, en man som möts av grymhet och förakt av samhället. Dagtid arbetar han som clown och på kvällarna försöker han slå igenom som stand-up komiker… men det känns som att skratten alltid är på hans bekostnad. Han är helt ur synk med verkligheten och hans okontrollerbara och opassande skratt, som bara ökar när han försöker behärska det leder till mer hån och även våld.',
            time: '2 tim 2 min'
            }]})

      this.$store.dispatch("publishMovies", {movies:[{ 
            id: 2, 
            age: 7, 
            title: 'Frozen 2', 
            image: 'https://m.media-amazon.com/images/M/MV5BMjA0YjYyZGMtN2U0Ni00YmY4LWJkZTItYTMyMjY3NGYyMTJkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_UX182_CR0,0,182,268_AL_.jpg',
            imageOfCarousel: 'https://i0.wp.com/www.adventuresinpoortaste.com/wp-content/uploads/2019/11/frozen-2-header-2.jpg?resize=1000%2C563&ssl=1',
            trailer: 'Zi4LMpSDccc',
            videoImage: 'https://wallpapercave.com/wp/wp3968984.jpg',
            director: 'Chris Buck',
            actors:['Kristen Bell', 'Idina Menzel', 'Josh Gad', 'Jonathan Groff'],
            genre: ['Animerat', 'Äventyr'],
            language: 'Svenska',
            plot: 'Varför föddes Elsa med magiska krafter? Svaret hotar hennes kungarike. Tillsammans med Anna, Kristoffer, Olof och Sven ger hon sig ut på en farlig men häpnadsväckande resa. I Frost var Elsa rädd för att hennes krafter var för mycket för världen. I Frost 2 får hon hoppas att de är tillräckliga.',
            time: '1 tim 43 min'
            }]})

      this.$store.dispatch("publishMovies", {movies:[{ 
            id: 3, 
            age: 7, 
            title: 'Cats', 
            image: 'https://m.media-amazon.com/images/M/MV5BNjRlNTY3MTAtOTViMS00ZjE5LTkwZGItMGYwNGQwMjg2NTEwXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UX182_CR0,0,182,268_AL_.jpg',
            imageOfCarousel: 'https://pmcvariety.files.wordpress.com/2019/10/cats-e1574351786496.jpg?crop=0px%2C0px%2C998px%2C562px&resize=1000%2C563',
            trailer: 'gq50F-IDXDc',
            videoImage: 'https://www.etonline.com/sites/default/files/styles/video_1920x1080/public/images/2019-07/eto_clip_cats_071819vidpic.png.jpg?itok=of-uGh-7',
            director: 'Tom Hooper',
            actors: ['Jennifer Hudson', 'Judi Dench', 'Taylor Swift', 'Robbie Fairchild'],
            genre: ['Musikal'],
            language: 'Engelska',
            plot: 'Filmversion av musikalklassikern av Andrew Lloyd Webber med ikonisk musik, fantastiska skådespelare, dansare i världsklass, spektakulära miljöer, otrolig ny teknologi och alla tänkbara dansstilar.',
            time: '1 tim 50 min'
            }]})

      this.$store.dispatch("publishMovies", {movies:[{ 
            id: 4, 
            age: 7,
            title: 'Spies in disguise', 
            image: 'https://m.media-amazon.com/images/M/MV5BMDQ4ZTQ3ZGYtODFhNi00NmY2LThlYzItYTNmMDQ0YTczOWE0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
            imageOfCarousel: 'https://pmcvariety.files.wordpress.com/2019/12/spies-in-disguise.jpg?w=1000&h=563&crop=1',
            trailer: 'A05s7OM-8Oc',
            videoImage: 'https://img.reelgood.com/content/movie/767ab5f7-d016-411a-bc0e-3bf7aaae5ccd/backdrop-1920.jpg',
            director: 'Nick Bruno',
            actors: ['Rachel Brosnahan', 'Jarrett Bruno', 'Claire Crosby', 'Will Smith'],
            genre: ['Animerat','Action', 'Äventyr', 'Familj'],
            language: 'Svenska',
            plot: 'Superspionen Lance Sterling och vetenskapsmannen Walter Beckett är varandras raka motsatser. Lance är charmig och smidig. Walter är… det inte. Men vad Walter saknar i sociala färdigheter väger han upp med smarta uppfinningar som Lance använder under sina episka uppdrag. En oväntad vändning gör dock att Walter och Lance tvingas förlita sig på varandra på ett helt nytt sätt. Om det udda paret inte kan lära sig att samarbeta är hela världen i fara.',
            time: '1 tim 42 min'
            }]})

      this.$store.dispatch("publishMovies", {movies:[{ 
            id: 5, 
            age: 15, 
            title: 'Bad boys for life', 
            image: 'https://m.media-amazon.com/images/M/MV5BMWU0MGYwZWQtMzcwYS00NWVhLTlkZTAtYWVjOTYwZTBhZTBiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg', 
            imageOfCarousel: 'https://images-ext-1.discordapp.net/external/rnifkDhdWd47Iw-Jpjr9yKAseZn0vmG3S4q4YC1Fp-M/https/img1.looper.com/img/gallery/the-5-best-and-5-worst-things-in-bad-boys-for-life/intro-1579267525.jpg',
            trailer: 'jKCj3XuPG8M',
            videoImage: 'https://images-ext-1.discordapp.net/external/rnifkDhdWd47Iw-Jpjr9yKAseZn0vmG3S4q4YC1Fp-M/https/img1.looper.com/img/gallery/the-5-best-and-5-worst-things-in-bad-boys-for-life/intro-1579267525.jpg',
            director: 'Adil El Arbi',
            actors: ['Will Smith', 'Martin Lawrence', 'Vanessa Hudgens', 'Alexander Ludwig','Charles Melton'],
            genre: ['Action', 'Komedi'],
            plot: 'Poliserna Mike Lowrey och Marcus Burnett är tillbaka en sista gång i "Bad Boys for Life',
            time: '2 tim 4 min'
            }]})
      /*
      this.$store.dispatch("publishMovies", {movies:[{ 
            id: , 
            age: , 
            title: '', 
            image: '',
            imageOfCarousel: '',
            trailer: '',
            videoImage: '',
            director: '',
            actors: ['', '', '', ''],
            genre: ['', ''],
            plot: ''
            }]})*/
    },
    saveShowtimes(){
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 1, auditoriumId: 1, showtimeId: 1, startDatetime: 1581883217}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 1, auditoriumId: 1, showtimeId: 2, startDatetime: 1582578000}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 1, auditoriumId: 1, showtimeId: 3, startDatetime: 1582725600}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 1, auditoriumId: 1, showtimeId: 4, startDatetime: 1582750800}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 1, auditoriumId: 1, showtimeId: 5, startDatetime: 1582898400}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 1, auditoriumId: 1, showtimeId: 6, startDatetime: 1582923600}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 1, auditoriumId: 1, showtimeId: 7, startDatetime: 1583071200}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 1, auditoriumId: 1, showtimeId: 8, startDatetime: 1583096400}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 1, auditoriumId: 1, showtimeId: 9, startDatetime: 1583244000}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 1, auditoriumId: 1, showtimeId: 10, startDatetime: 1583269200}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 1, auditoriumId: 1, showtimeId: 11, startDatetime: 1583416800}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 1, auditoriumId: 1, showtimeId: 12, startDatetime: 1583442000}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 1, auditoriumId: 1, showtimeId: 13, startDatetime: 1583589600}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 1, auditoriumId: 1, showtimeId: 14, startDatetime: 1583614800}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 1, auditoriumId: 1, showtimeId: 15, startDatetime: 1583762400}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 1, auditoriumId: 1, showtimeId: 16, startDatetime: 1583787600}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 1, auditoriumId: 1, showtimeId: 17, startDatetime: 1583935200}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 1, auditoriumId: 1, showtimeId: 18, startDatetime: 1583960400}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 1, auditoriumId: 1, showtimeId: 19, startDatetime: 1584108000}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 1, auditoriumId: 1, showtimeId: 20, startDatetime: 1584133200}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 1, auditoriumId: 1, showtimeId: 21, startDatetime: 1584280800}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 1, auditoriumId: 1, showtimeId: 22, startDatetime: 1584306000}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 1, auditoriumId: 1, showtimeId: 23, startDatetime: 1584453600}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 1, auditoriumId: 1, showtimeId: 24, startDatetime: 1584478800}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 1, auditoriumId: 1, showtimeId: 25, startDatetime: 1584626400}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 1, auditoriumId: 1, showtimeId: 26, startDatetime: 1584651600}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 1, auditoriumId: 1, showtimeId: 27, startDatetime: 1584799200}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 1, auditoriumId: 1, showtimeId: 28, startDatetime: 1584824400}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 1, auditoriumId: 2, showtimeId: 29, startDatetime: 1582567200}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 1, auditoriumId: 2, showtimeId: 30, startDatetime: 1582740000}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 1, auditoriumId: 2, showtimeId: 31, startDatetime: 1582912800}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 1, auditoriumId: 2, showtimeId: 32, startDatetime: 1583085600}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 1, auditoriumId: 2, showtimeId: 33, startDatetime: 1583258400}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 1, auditoriumId: 2, showtimeId: 34, startDatetime: 1583431200}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 1, auditoriumId: 2, showtimeId: 35, startDatetime: 1583604000}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 1, auditoriumId: 2, showtimeId: 36, startDatetime: 1583776800}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 1, auditoriumId: 2, showtimeId: 37, startDatetime: 1583949600}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 1, auditoriumId: 2, showtimeId: 38, startDatetime: 1584122400}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 1, auditoriumId: 2, showtimeId: 39, startDatetime: 1584295200}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 1, auditoriumId: 2, showtimeId: 40, startDatetime: 1584468000}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 1, auditoriumId: 2, showtimeId: 41, startDatetime: 1584640800}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 1, auditoriumId: 2, showtimeId: 42, startDatetime: 1584813600}]})

      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 3, auditoriumId: 1, showtimeId: 43, startDatetime: 1582563600}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 3, auditoriumId: 1, showtimeId: 44, startDatetime: 1582736400}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 3, auditoriumId: 1, showtimeId: 45, startDatetime: 1582909200}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 3, auditoriumId: 1, showtimeId: 46, startDatetime: 1583082000}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 3, auditoriumId: 1, showtimeId: 47, startDatetime: 1583254800}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 3, auditoriumId: 1, showtimeId: 48, startDatetime: 1583427600}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 3, auditoriumId: 1, showtimeId: 49, startDatetime: 1583600400}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 3, auditoriumId: 1, showtimeId: 50, startDatetime: 1583773200}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 3, auditoriumId: 1, showtimeId: 51, startDatetime: 1583946000}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 3, auditoriumId: 1, showtimeId: 52, startDatetime: 1584118800}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 3, auditoriumId: 1, showtimeId: 53, startDatetime: 1584291600}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 3, auditoriumId: 1, showtimeId: 54, startDatetime: 1584464400}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 3, auditoriumId: 1, showtimeId: 55, startDatetime: 1584637200}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 3, auditoriumId: 1, showtimeId: 53, startDatetime: 1584810000}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 3, auditoriumId: 2, showtimeId: 57, startDatetime: 1582556400}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 3, auditoriumId: 2, showtimeId: 58, startDatetime: 1582578000}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 3, auditoriumId: 2, showtimeId: 59, startDatetime: 1582729200}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 3, auditoriumId: 2, showtimeId: 60, startDatetime: 1582750800}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 3, auditoriumId: 2, showtimeId: 61, startDatetime: 1582902000}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 3, auditoriumId: 2, showtimeId: 62, startDatetime: 1582923600}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 3, auditoriumId: 2, showtimeId: 63, startDatetime: 1583074800}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 3, auditoriumId: 2, showtimeId: 64, startDatetime: 1583096400}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 3, auditoriumId: 2, showtimeId: 65, startDatetime: 1583247600}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 3, auditoriumId: 2, showtimeId: 66, startDatetime: 1583269200}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 3, auditoriumId: 2, showtimeId: 67, startDatetime: 1583420400}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 3, auditoriumId: 2, showtimeId: 68, startDatetime: 1583442000}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 3, auditoriumId: 2, showtimeId: 69, startDatetime: 1583593200}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 3, auditoriumId: 2, showtimeId: 70, startDatetime: 1583614800}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 3, auditoriumId: 2, showtimeId: 71, startDatetime: 1583766000}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 3, auditoriumId: 2, showtimeId: 72, startDatetime: 1583787600}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 3, auditoriumId: 2, showtimeId: 73, startDatetime: 1583938800}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 3, auditoriumId: 2, showtimeId: 74, startDatetime: 1583960400}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 3, auditoriumId: 2, showtimeId: 75, startDatetime: 1584111600}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 3, auditoriumId: 2, showtimeId: 76, startDatetime: 1584133200}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 3, auditoriumId: 2, showtimeId: 77, startDatetime: 1584284400}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 3, auditoriumId: 2, showtimeId: 78, startDatetime: 1584306000}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 3, auditoriumId: 2, showtimeId: 79, startDatetime: 1584457200}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 3, auditoriumId: 2, showtimeId: 80, startDatetime: 1584478800}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 3, auditoriumId: 2, showtimeId: 81, startDatetime: 1584630000}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 3, auditoriumId: 2, showtimeId: 82, startDatetime: 1584651600}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 3, auditoriumId: 2, showtimeId: 83, startDatetime: 1584802800}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 3, auditoriumId: 2, showtimeId: 84, startDatetime: 1584824400}]})

      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 2, auditoriumId: 1, showtimeId: 85, startDatetime: 1582617600}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 2, auditoriumId: 1, showtimeId: 86, startDatetime: 1582632000}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 2, auditoriumId: 1, showtimeId: 87, startDatetime: 1582790400}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 2, auditoriumId: 1, showtimeId: 88, startDatetime: 1582804800}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 2, auditoriumId: 1, showtimeId: 89, startDatetime: 1582963200}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 2, auditoriumId: 1, showtimeId: 90, startDatetime: 1582977600}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 2, auditoriumId: 1, showtimeId: 91, startDatetime: 1583136000}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 2, auditoriumId: 1, showtimeId: 92, startDatetime: 1583150400}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 2, auditoriumId: 1, showtimeId: 93, startDatetime: 1583308800}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 2, auditoriumId: 1, showtimeId: 94, startDatetime: 1583323200}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 2, auditoriumId: 1, showtimeId: 95, startDatetime: 1583481600}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 2, auditoriumId: 1, showtimeId: 96, startDatetime: 1583496000}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 2, auditoriumId: 1, showtimeId: 97, startDatetime: 1583654400}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 2, auditoriumId: 1, showtimeId: 98, startDatetime: 1583668800}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 2, auditoriumId: 1, showtimeId: 99, startDatetime: 1583827200}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 2, auditoriumId: 1, showtimeId: 100, startDatetime: 1583841600}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 2, auditoriumId: 1, showtimeId: 101, startDatetime: 1584000000}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 2, auditoriumId: 1, showtimeId: 102, startDatetime: 1584014400}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 2, auditoriumId: 1, showtimeId: 103, startDatetime: 1584172800}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 2, auditoriumId: 1, showtimeId: 104, startDatetime: 1584187200}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 2, auditoriumId: 1, showtimeId: 105, startDatetime: 1584345600}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 2, auditoriumId: 1, showtimeId: 106, startDatetime: 1584360000}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 2, auditoriumId: 1, showtimeId: 107, startDatetime: 1584518400}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 2, auditoriumId: 1, showtimeId: 108, startDatetime: 1584532800}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 2, auditoriumId: 1, showtimeId: 109, startDatetime: 1584691200}]})
     // this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 2, auditoriumId: 1, showtimeId: 110, startDatetime: 1584705600}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 2, auditoriumId: 1, showtimeId: 111, startDatetime: 1584864000}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 2, auditoriumId: 1, showtimeId: 112, startDatetime: 1584878400}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 2, auditoriumId: 2, showtimeId: 113, startDatetime: 1582642800}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 2, auditoriumId: 2, showtimeId: 114, startDatetime: 1582815600}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 2, auditoriumId: 2, showtimeId: 115, startDatetime: 1582988400}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 2, auditoriumId: 2, showtimeId: 116, startDatetime: 1583161200}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 2, auditoriumId: 2, showtimeId: 117, startDatetime: 1583334000}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 2, auditoriumId: 2, showtimeId: 118, startDatetime: 1583506800}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 2, auditoriumId: 2, showtimeId: 119, startDatetime: 1583679600}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 2, auditoriumId: 2, showtimeId: 120, startDatetime: 1583852400}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 2, auditoriumId: 2, showtimeId: 121, startDatetime: 1584025200}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 2, auditoriumId: 2, showtimeId: 122, startDatetime: 1584198000}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 2, auditoriumId: 2, showtimeId: 123, startDatetime: 1584370800}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 2, auditoriumId: 2, showtimeId: 124, startDatetime: 1584543600}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 2, auditoriumId: 2, showtimeId: 125, startDatetime: 1584716400}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 2, auditoriumId: 2, showtimeId: 126, startDatetime: 1584889200}]})

      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 5, auditoriumId: 1, showtimeId: 127, startDatetime: 1582646400}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 5, auditoriumId: 1, showtimeId: 128, startDatetime: 1582819200}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 5, auditoriumId: 1, showtimeId: 129, startDatetime: 1582992000}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 5, auditoriumId: 1, showtimeId: 130, startDatetime: 1583164800}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 5, auditoriumId: 1, showtimeId: 131, startDatetime: 1583337600}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 5, auditoriumId: 1, showtimeId: 132, startDatetime: 1583510400}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 5, auditoriumId: 1, showtimeId: 133, startDatetime: 1583683200}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 5, auditoriumId: 1, showtimeId: 134, startDatetime: 1583856000}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 5, auditoriumId: 1, showtimeId: 135, startDatetime: 1584028800}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 5, auditoriumId: 1, showtimeId: 136, startDatetime: 1584201600}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 5, auditoriumId: 1, showtimeId: 137, startDatetime: 1584374400}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 5, auditoriumId: 1, showtimeId: 138, startDatetime: 1584547200}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 5, auditoriumId: 1, showtimeId: 139, startDatetime: 1584720000}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 5, auditoriumId: 1, showtimeId: 140, startDatetime: 1584892800}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 5, auditoriumId: 2, showtimeId: 141, startDatetime: 1582628400}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 5, auditoriumId: 2, showtimeId: 142, startDatetime: 1582664400}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 5, auditoriumId: 2, showtimeId: 143, startDatetime: 1582801200}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 5, auditoriumId: 2, showtimeId: 144, startDatetime: 1582837200}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 5, auditoriumId: 2, showtimeId: 145, startDatetime: 1582974000}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 5, auditoriumId: 2, showtimeId: 146, startDatetime: 1583010000}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 5, auditoriumId: 2, showtimeId: 147, startDatetime: 1583146800}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 5, auditoriumId: 2, showtimeId: 148, startDatetime: 1583182800}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 5, auditoriumId: 2, showtimeId: 149, startDatetime: 1583319600}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 5, auditoriumId: 2, showtimeId: 150, startDatetime: 1583355600}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 5, auditoriumId: 2, showtimeId: 151, startDatetime: 1583492400}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 5, auditoriumId: 2, showtimeId: 152, startDatetime: 1583528400}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 5, auditoriumId: 2, showtimeId: 153, startDatetime: 1583665200}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 5, auditoriumId: 2, showtimeId: 154, startDatetime: 1583701200}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 5, auditoriumId: 2, showtimeId: 155, startDatetime: 1583838000}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 5, auditoriumId: 2, showtimeId: 156, startDatetime: 1583874000}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 5, auditoriumId: 2, showtimeId: 157, startDatetime: 1584010800}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 5, auditoriumId: 2, showtimeId: 158, startDatetime: 1584046800}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 5, auditoriumId: 2, showtimeId: 159, startDatetime: 1584183600}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 5, auditoriumId: 2, showtimeId: 160, startDatetime: 1584219600}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 5, auditoriumId: 2, showtimeId: 161, startDatetime: 1584356400}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 5, auditoriumId: 2, showtimeId: 162, startDatetime: 1584392400}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 5, auditoriumId: 2, showtimeId: 163, startDatetime: 1584529200}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 5, auditoriumId: 2, showtimeId: 164, startDatetime: 1584565200}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 5, auditoriumId: 2, showtimeId: 165, startDatetime: 1584702000}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 5, auditoriumId: 2, showtimeId: 166, startDatetime: 1584738000}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 5, auditoriumId: 2, showtimeId: 167, startDatetime: 1584874800}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 5, auditoriumId: 2, showtimeId: 168, startDatetime: 1584910800}]})

      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 4, auditoriumId: 1, showtimeId: 169, startDatetime: 1582657200}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 4, auditoriumId: 1, showtimeId: 170, startDatetime: 1582830000}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 4, auditoriumId: 1, showtimeId: 171, startDatetime: 1583002800}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 4, auditoriumId: 1, showtimeId: 172, startDatetime: 1583175600}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 4, auditoriumId: 1, showtimeId: 173, startDatetime: 1583348400}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 4, auditoriumId: 1, showtimeId: 174, startDatetime: 1583521200}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 4, auditoriumId: 1, showtimeId: 175, startDatetime: 1583694000}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 4, auditoriumId: 1, showtimeId: 176, startDatetime: 1583866800}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 4, auditoriumId: 1, showtimeId: 177, startDatetime: 1584039600}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 4, auditoriumId: 1, showtimeId: 178, startDatetime: 1584212400}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 4, auditoriumId: 1, showtimeId: 179, startDatetime: 1584385200}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 4, auditoriumId: 1, showtimeId: 180, startDatetime: 1584558000}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 4, auditoriumId: 1, showtimeId: 181, startDatetime: 1584730800}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 4, auditoriumId: 1, showtimeId: 182, startDatetime: 1584903600}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 4, auditoriumId: 2, showtimeId: 183, startDatetime: 1582614000}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 4, auditoriumId: 2, showtimeId: 184, startDatetime: 1582653600}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 4, auditoriumId: 2, showtimeId: 185, startDatetime: 1582786800}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 4, auditoriumId: 2, showtimeId: 186, startDatetime: 1582826400}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 4, auditoriumId: 2, showtimeId: 187, startDatetime: 1582959600}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 4, auditoriumId: 2, showtimeId: 188, startDatetime: 1582999200}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 4, auditoriumId: 2, showtimeId: 189, startDatetime: 1583132400}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 4, auditoriumId: 2, showtimeId: 190, startDatetime: 1583172000}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 4, auditoriumId: 2, showtimeId: 191, startDatetime: 1583305200}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 4, auditoriumId: 2, showtimeId: 192, startDatetime: 1583344800}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 4, auditoriumId: 2, showtimeId: 193, startDatetime: 1583478000}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 4, auditoriumId: 2, showtimeId: 194, startDatetime: 1583517600}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 4, auditoriumId: 2, showtimeId: 195, startDatetime: 1583650800}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 4, auditoriumId: 2, showtimeId: 196, startDatetime: 1583690400}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 4, auditoriumId: 2, showtimeId: 197, startDatetime: 1583823600}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 4, auditoriumId: 2, showtimeId: 198, startDatetime: 1583863200}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 4, auditoriumId: 2, showtimeId: 199, startDatetime: 1583996400}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 4, auditoriumId: 2, showtimeId: 200, startDatetime: 1584036000}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 4, auditoriumId: 2, showtimeId: 201, startDatetime: 1584169200}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 4, auditoriumId: 2, showtimeId: 202, startDatetime: 1584208800}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 4, auditoriumId: 2, showtimeId: 203, startDatetime: 1584342000}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 4, auditoriumId: 2, showtimeId: 204, startDatetime: 1584381600}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 4, auditoriumId: 2, showtimeId: 205, startDatetime: 1584514800}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 4, auditoriumId: 2, showtimeId: 206, startDatetime: 1584554400}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 4, auditoriumId: 2, showtimeId: 207, startDatetime: 1584687600}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 4, auditoriumId: 2, showtimeId: 208, startDatetime: 1584727200}]})
      this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 4, auditoriumId: 2, showtimeId: 209, startDatetime: 1584860400}]})
      //this.$store.dispatch("publishShowtimes", {showtimes:[{ movieId: 4, auditoriumId: 2, showtimeId: 210, startDatetime: 1584900000}]})
    }
  }
}
</script>
