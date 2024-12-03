// NO FULL WORDS IN CARDS, JUST LETTERS

// s is for location detantion for mobile card layout.
const locations_data = {
    mainland: [
        // north to south. west to east.
        {
            name: "Nongso",
            s: 'm', 
            subtitle:"The beatiful mountain of Geoje",
            description: "This place offers view in all directions, including the South Sea, Jindo Bay, Changwon, Gimhae, and Busan. On top you can find the Geoje Nongsori Tomb, discovered in 2004, which was built around 6th century.",
            id:"mainland_nongso",
            height: "500mt",
            mtop: "3",
            mleft: "48",
            top: "20",
            left: "500",
            difficulty: "A",
            length: "3km",
            steepness: "very steep",
            duration: "3h",
            picture_folder: "image_path.jpg"
        },
         {
             name: "Aengsan",
             s: 'm',
             subtitle:"The beatiful mountain of Geoje",
             description: "The trailhead starts in Hacheong-myeon. Park at the jjimjilbang (which I believe is abandoned and possibly becoming a type of car-wash, based on the overhead canopies in the parking lot currently.) Cross the street, and start walking up the hill towards the neighborhood. You will see the trail starting on your left before you get to the houses.",
             id:"mainland_aengsan",
            height: "500mt",
            mtop: "25",
            mleft: "35",
            top: "210",
            left: "0",
            difficulty: "A",
            length: "3km",
            steepness: "very steep",
            duration: "3h",
            picture_folder: "image_path.jpg"
        },
        {
            name: "Daegumsan",
            s: 'm',
            subtitle:"The beatiful mountain of Geoje",
            description: "Famous for its stunning azalea field, Daegumsan is most visited in late March when the flowers are in bloom. Daegeumsan offers pretty views year round though, and, like most Korean mountains, has several routes to the top.",
            id: "mainland_daegumsan",
            height: "500mt",
            mtop: "22",
            mleft: "45",
            top: "220",
            left: "500",
            difficulty: "B",
            length: "3km",
            steepness: "very steep",
            duration: "3H",
            picture_folder: "image_path.jpg"
        },
         {
             name: "Mangwolsan",
             s: 'm',
             subtitle:"The beatiful mountain of Geoje",
             description: "I “discovered” this hike last year and it has easily turned into one of my favorites. I was quite surprised that this is a lesser known trail but one that I highly recommend. It's a great hike if you're short on time due to its distance and elevation. The trailhead starts in Oepo, close to Daeheung Temple (대흥사). The hike is a short one and relatively easy with lots of wooden stairs to carry you up. As you are reaching the top, there are two main lookout areas. The peak of this mountain is off to the left and you can take in the views all around on a large wooden platform. Unfortunately, it’s a small mountain so there is no summit stone.",
            id: "mainland_mangwolsan",
            height: "500mt",
            mtop: "27",
            mleft: "51",
            top: "270",
            left: "520",
            difficulty: "D",
            length: "3km",
            steepness: "very steep",
            duration: "3H",
            picture_folder: "image_path.jpg"
        },
        {
            name: "Mangchisan",
            s: 'm',
            subtitle:"The beatiful mountain of Geoje",
            description: "Mangchisan is on the western side of the island heading towards Tongyeong. It’s a relatively short hike, but offers some great views of Gajodo, as well as Tongyeong. If you have your own transportation, or are taking the bus, park/get off near Seongpo Middle School, before walking down the hill and crossing under the highway. This is where the trailhead begins.It was very easy to follow starting out, simply walk up the narrow concrete road passing a few houses along the way. Follow the trail, and soon enough, you’ll emerge at a dirt road where you can go right or left. Turning right will take you to private property, so you have to go left. ",
            id: "mainland_mangchisan",
            height: "500mt",
            mtop: "37",
            mleft: "12",
            top: "310",
            left: "180",
            difficulty: "D",
            length: "3km",
            steepness: "very steep",
            duration: "3H",
            picture_folder: "image_path.jpg"
        },
        {
            name: "Guksabong",
            s: 'm',
            subtitle:"The beatiful mountain of Geoje",
            description: "Probably one of the better known mountains in Geoje among the expat community, due to its ease of access and great views. Other common trailheads will be mentioned in the alternative routes below, but this post will focus on my usual route from “Aju proper”. I really enjoy this route because there are a few flat-ish areas along the way that really break up the climb. The trailhead starts behind Hanulchae Apartments behind a church. I usually arrive on foot or by bike and take the long set of stairs behind the apartments as my pre-hike warm up. ",
            id: "mainland_guksabong",
            height: "500mt",
            mtop: "46",
            mleft: "10",
            top: "330",
            left: "450",
            difficulty: "D",
            length: "3km",
            steepness: "very steep",
            duration: "3H",
            picture_folder: "image_path.jpg"
        },
         {
            name: "Siraesan",
            s: 'm',
            subtitle:"The beatiful mountain of Geoje",
            description: "The trailhead starts in the neighborhood with all of the fairy-tale style houses that I’ve always noticed when crossing the bridge back to Geoje. The road does continue all the way to Unseongsa (temple), which is the halfway point to the peak, but the road is very steep and I didn’t want to make my old car work that hard so I chose to park and walk. Once you reach the temple area follow the stairs on the right and you will see the sign marking the trail opposite the temple. it’s ony .52 kilometers to the peak from here!",
            id: "mainland_siraesan",
            height: "500mt",
            mtop: "43",
            mleft: "1",
            top: "360",
            left: "80",
            difficulty: "D",
            length: "3km",
            steepness: "very steep",
            duration: "3H",
            picture_folder: "image_path.jpg"
        },
        {
            name: "Dundeok",
            s: 'm',
            subtitle:"The beatiful mountain of Geoje",
            description: "After following the access road to the top, you will arrive at Dundeok Fortress itself. You can go explore the grounds here but personally, I was more excited about the view at Woodubong that awaited, so we opted to immediately turn right at the fortress. A few more steps to the right, you will see a mostly grass-covered trail heading into the mountain. Follow this path. The trail to Woodubong is a bit steep here as well, after roughly 600 meters you’ll reach a wooden gazebo. There isn’t much of a view here, but if you need a rest it’s a good spot to stop. ",
            id: "mainland_dundeok-Kiseong",
            height: "500mt",
            mtop: "55",
            mleft: "12",
            top: "410",
            left: "100",
            difficulty: "D",
            length: "3km",
            steepness: "very steep",
            duration: "3H",
            picture_folder: "image_path.jpg"
        },
         {
            name: "Sangbangsan",
            s: 'm',
            subtitle:"The beatiful mountain of Geoje",
            description: "Sanbangsan is another breathtaking mountain in Geoje's repertoire of natural beauty. Looking out over western Geoje, you'll enjoy a 360° view from the top. The trailhead starts near Sanbangsan Biwon (aka Secret Garden). Just a little further up the road from here you will see a place to park almost across the street from the start. (If you’re looking for an easier way to reach the peak of this mountain, check out the first alternate route, newly listed below). About halfway up the mountain, you'll emerge at a rocky outcrop offering you your first views looking back over Dundeok-myeon. This is a great spot to take a little rest before continuing the climb upwards.",
            id: "mainland_sangbangsan",
            height: "mainland_sangbangsan",
            mtop: "45",
            mleft: "19",
            top: "430",
            left: "170",
            difficulty: "D",
            length: "3km",
            steepness: "very steep",
            duration: "3H",
            picture_folder: "image_path.jpg"
        },
         {
            name: "Gyeryongsan",
            s: 'm',
            subtitle:"The beatiful mountain of Geoje",
            description: "You will follow a utility road for a bit, passing under the highway, then continuing up the mountain. Eventually, you’ll come to a platform viewing point and a fork in the road. Make a sharp right rather than going straight at this point. Keep following the road until you come to an exercise area and can see the golf course on the other side. From here you will start hiking the actual trail by turning left into the forest.",
            id: "mainland_gyeryongsan",
            height: "500mt",
            mtop: "40",
            mleft: "30",
            top: "430",
            left: "320",
            difficulty: "D",
            length: "3km",
            steepness: "very steep",
            duration: "3H",
            picture_folder: "image_path.jpg"
        },
         {
            name: "Mundong",
            s: 'm',
            subtitle:"The beatiful mountain of Geoje",
            description: "I should start by saying that this is more of a walk than a hike, as much of it is roadway. That being said, if you are looking for a kid-friendly outing or just don’t want to over exert yourself, this could be for you. Usually Mundong Waterfalls is more of a trickle than a “fall”, but if you visit after a heavy rain it can be quite pretty. Today’s visit was after a light rain shower in the morning, so it was slightly better than usual, but not at its prime. The trailhead starts very close to Mundong Waterfall. Simply follow the stone-pavers up the hill. You will pass camping platforms on either side before emerging at Mundong Waterfalls.  ",
            id: "undong",
            height: "mainland_mundong",
            mtop: "45",
            mleft: "40",
            top: "460",
            left: "400",
            difficulty: "D",
            length: "3km",
            steepness: "very steep",
            duration: "3H",
            picture_folder: "image_path.jpg",
            special: "waterfall"
        },
         {
             name: "Oknyeobong",
             s: 'm',
             subtitle:"The beatiful mountain of Geoje",
             description: "Oknyeobong is the beautiful backdrop which encircles Aju-dong.  It offers great views of the neighborhood, DSME shipyard, and on the opposite side of the mountain - Jisepo. To take the main trail up, start behind the Aju Community Center (linked in the trailhead above).  The trailhead will have you walking across a dirt roadway at first before entering the forest. Once you enter the forest you can choose from two routes to reach the top. Turn left for the steepest route which is murder on your quads or knees (depending on which direction you are going. For an easier climb with a clearer path, stay to the right (on the most obvious path), passing by the back of the Geoje Middle and High Schools. This is the route I recommend. ",
            id: "mainland_oknyeobong",
            height: "500mt",
            mtop: "57",
            mleft: "40" ,
            top: "470",
            left: "460",
            difficulty: "D",
            length: "3km",
            steepness: "very steep",
            duration: "3H",
            picture_folder: "image_path.jpg"
        },
         {
            name: "Seonjasan",
            s: 'm',
            subtitle:"The beatiful mountain of Geoje",
            description: "I’ve been to the peak of Seonjasan several times, but it has usually just been as part of the G.R.T. so I had used the Gyeryongsan trailhead previously. Recently, on a cloudy Sunday morning I decided to hike up Seonjasan as it’s own destination. Sidenote: The G.R.T: The Geoje Ridgeline Trail is a 30km hike that takes you over many peaks as you work your way from Geoje City, in the middle of the island, all the way to Nambumyeon in the south. At the trailhead, there is a tiiiiiny bit of parking at the side of the road, but be sure not to block the dirt roadway that’s still in use.",
            id: "mainland_seonjasan",
            height: "500mt",
            mtop: "45",
            mleft: "60",
            top: "510",
            left: "360",
            difficulty: "D",
            length: "3km",
            steepness: "very steep",
            duration: "3H",
            picture_folder: "image_path.jpg"
        },
         {
            name: "Bukbyeongsan",
            s: 'm',
            subtitle:"The beatiful mountain of Geoje",
            description: "Possibly my favorite hike in Geoje for its relative ease and amazing views. The trailhead to Bukbyeongsan starts halfway up the mountain so you won’t have too far to go to start taking in the views.There is parking available on the roadside across the street from the trail head. The peak itself is just 1.4km from here. There are a few rocky outcrops near the top that are great spots where you can relax and have a picnic while taking in the views over Irun-myeon and Gujora Beach. ",
            id: "mainland_bukbyeongsan",
            height: "500mt",
            mtop: "65",
            mleft: "50",
            top: "630",
            left: "410",
            difficulty: "D",
            length: "3km",
            steepness: "very steep",
            duration: "3H",
            picture_folder: "image_path.jpg"
        },
         {
            name: "Garasan",
            s: 'm',
            subtitle:"The beatiful mountain of Geoje",
            description: "Garasan is the tallest mountain on Geoje Island and there are several trails to the peak with options for turning it into a longer hike towards Nojasan or even as part of the GRT Day 2. The trailhead mentioned above will take you just 2.4km to the peak itself, but the best part of this hike is a further 0.3km. A short drive past Hakdong Pebble Beach is a small parking area on the side of the road where vegetables are usually sold. Park here and start your hike. Starting out, you will follow an old dirt road by-passing a fenced off farming area on your left. Continue on the road and soon it will turn into a proper trail. ",
            id: "mainland_garasan",
            height: "500mt",
            mtop: "70",
            mleft: "25",
            top: "390",
            left: "450",
            difficulty: "A",
            length: "3km",
            steepness: "very steep",
            duration: "3H",
            picture_folder: "image_path.jpg"
        },
         {
            name: "Jayeon-Hyuyangrim",
            s: 'm',
            subtitle:"The beatiful mountain of Geoje",
            description: "Jayeon-Hyuyangrim is another breathtaking mountain in Geoje's repertoire of natural beauty. Looking out over Geoje, you'll enjoy a 360° view from the top. The trailhead starts near Jayeon-Hyuyangrim Biwon (aka Secret Garden). Just a little further up the road from here you will see a place to park almost across the street from the start. ",
            id: "mainland_jayeon-hyuyangrim",
            height: "500mt",
            mtop: "75",
            mleft: "35",
            top: "580",
            left: "380",
            difficulty: "A",
            length: "3km",
            steepness: "very steep",
            duration: "3H",
            picture_folder: "image_path.jpg"
        },
        {
            name: "Naebongsan",
            s: 'm',
            subtitle:"The beatiful mountain of Geoje",
            description: "Possibly my favorite hike in Geoje for its relative ease and amazing views. The trailhead to Bukbyeongsan starts halfway up the mountain so you won’t have too far to go to start taking in the views.There is parking available on the roadside across the street from the trail head. The peak itself is just 1.4km from here. There are a few rocky outcrops near the top that are great spots where you can relax and have a picnic while taking in the views over Irun-myeon and Gujora Beach.",
            id: "mainland_naebongsan",
            height: "500mt",
            mtop: "93",
            mleft: "29",
            top: "780",
            left: "360",
            difficulty: "A",
            length: "3km",
            steepness: "very steep",
            duration: "3H",
            picture_folder: "image_path.jpg"
        },
        
    ],

    seaside: [
        // north to south. clockwise.
        {
         name: "Guyeong",
            s: 'm',
            subtitle:"The beatiful beach of Geoje",
            description: "A serene haven with golden sands and clear waters, Guyeong Beach offers stunning sunsets and gentle waves, perfect for quiet strolls or family picnics by the shore.",
            id: "seaside_guyeong",
            sand: "no",
            parking: "yes",
            cafes: "yes",
            top: "15",
            left: "490",
            mtop: "1",
            mleft: "42",
            picture_folder: ""
        },
         {
            name: "Hwangpo",
            s: 's',
            subtitle:"The beatiful beach of Geoje",
            description: "Nestled amidst lush greenery, Hwangpo Beach boasts calm, shallow waters ideal for wading. Discover hidden coves and enjoy a tranquil escape from bustling city life.",
            id: "seaside_hwangpo",
            sand: "no",
            parking: "yes",
            cafes: "yes",
            top: "80",
            left: "400",
            mtop: "2",
            mleft: "56",
            picture_folder: ""
        },
         {
            name: "Mul-an",
            s: 's',
            subtitle:"The beatiful beach of Geoje",
            description: "Famous for its crystal-clear waters, Mul-an Beach invites visitors to swim, snorkel, or paddleboard. Nearby seafood shacks serve the freshest local delicacies to complete your day.",
            id: "seaside-mul-an",
            sand: "no",
            parking: "yes",
            cafes: "yes",
            top: "80",
            left: "520",
            mtop: "9",
            mleft: "35",
            picture_folder: ""
        },
         {
            name: "Sibangseon",
            s: 's',
            subtitle:"The beatiful beach of Geoje",
            description: "A hidden gem for nature lovers, Sibangseon Beach is surrounded by dramatic cliffs. Enjoy hiking trails leading to panoramic views and cool ocean breezes.",
            id: "seaside_sibangseon",
            sand: "no",
            parking: "yes",
            cafes: "yes",
            top: "210",
            left: "525",
            mtop: "22",
            mleft: "51",
            picture_folder: ""
        },
         {
            name: "Deokpo",
            s: 's',
            subtitle:"The beatiful beach of Geoje",
            description: "Deokpo Beach features soft white sand and calm waters, making it ideal for families. The nearby cafes provide a cozy retreat with delicious coffee and local treats.",
            id: "seaside_deokpo",
            sand: "no",
            parking: "yes",
            cafes: "yes",
            top: "320",
            left: "540",
            mtop: "35",
            mleft: "50",
            picture_folder: ""
        },
         {
            name: "Wahyeon",
            s: 's',
            subtitle:"The beatiful beach of Geoje",
            description: "A paradise for water sports enthusiasts, Wahyeon Beach offers kayaking, jet skiing, and paddleboarding. Its vibrant marine life makes it a hotspot for snorkeling.",
            id: "seaside_wahyeon",
            sand: "no",
            parking: "yes",
            cafes: "yes",
            top: "630",
            left: "565",
            mtop: "66",
            mleft: "58",
            picture_folder: ""
        },
         {
            name: "Gujora",
            s: 's',
            subtitle:"The beatiful beach of Geoje",
            description: "This crescent-shaped beach boasts golden sands and turquoise waters. Relax under the shade of pine trees or explore charming fishing villages nearby.",
            id: "seaside_gujora",
            sand: "no",
            parking: "yes",
            cafes: "yes",
            top: "570",
            left: "480",
            mtop: "60",
            mleft: "45",
            picture_folder: ""
        },
         {
            name: "Mangchi",
            s: 's',
            subtitle:"The beatiful beach of Geoje",
            description: "Mangchi Beach’s rugged beauty is perfect for adventurers. Explore tide pools, photograph dramatic rock formations, or fish off its scenic coastal cliffs.",
            id: "seaside_mangchi",
            sand: "no",
            parking: "yes",
            cafes: "yes",
            top: "660",
            left: "420",
            mtop: "73",
            mleft: "40",
            picture_folder: ""
        },
         {
            name: "Baram-ui Ondeok",
            s: 's',
            subtitle:"The beatiful beach of Geoje",
            description: "Known for its strong sea breezes, Baram Beach is a favorite for kite flying and windsurfing. The sound of waves creates a peaceful, meditative atmosphere.",
            id: "seaside_baram-uiondeok",
            sand: "no",
            parking: "yes",
            cafes: "yes",
            top: "740",
            left: "480",
            mtop: "85",
            mleft: "53",
            picture_folder: ""
        },
         {
            name: "Dolteumi",
            s: 's',
            subtitle:"The beatiful beach of Geoje",
            description: "A secluded spot with pebble shores, Dolteumi Beach is a dream for photographers and sunset chasers. Its quiet charm makes it perfect for romantic getaways.",
            id: "seaside_dolteumi",
            sand: "no",
            parking: "yes",
            cafes: "yes",
            top: "745",
            left: "420",
            mtop: "40",
            mleft: "10",
            picture_folder: ""
        },
         {
            name: "Yeocha",
            s: 's',
            subtitle:"The beatiful beach of Geoje",
            description: "Yeocha Beach offers pristine sands and calm waters, ideal for swimming. Take a boat tour to explore nearby islands and marvel at their untouched beauty.",
            id: "seaside_yeocha",
            sand: "no",
            parking: "yes",
            cafes: "yes",
            top: "815",
            left: "360",
            mtop: "92",
            mleft: "43",
            picture_folder: ""
        },
         {
            name: "Geunpo Maeul",
            s: 's',
            subtitle:"The beatiful beach of Geoje",
            description: "With vibrant coastal flora and a lively boardwalk, Geunpo Beach blends natural beauty with cultural flair. Don’t miss the nightly seafood markets along the shore.",
            id: "seaside_geunpomaeul",
            sand: "no",
            parking: "yes",
            cafes: "yes",
            top: "780",
            left: "290",
            mtop: "92",
            mleft: "34",
            picture_folder: ""
        },
         {
            name: "Deokwon",
            s: 's',
            subtitle:"The beatiful beach of Geoje",
            description: "Deokwon Beach is a paradise for birdwatchers. The nearby wetlands teem with rare species, making it a unique destination for nature enthusiasts and photographers.",
            id: "seaside_deokwon",
            sand: "no",
            parking: "yes",
            cafes: "yes",
            top: "650",
            left: "280",
            mtop: "90",
            mleft: "20",
            picture_folder: ""
        },
         {
            name: "Jukrim",
            s: 's',
            subtitle:"The beatiful beach of Geoje",
            description: "Bordered by a tranquil bamboo forest, Jukrim Beach offers a unique blend of sand and shade. Perfect for relaxing with a book or enjoying yoga by the sea.",
            id: "seaside_jukrim",
            sand: "no",
            parking: "yes",
            cafes: "yes",
            top: "500",
            left: "290",
            mtop: "72",
            mleft: "25",
            picture_folder: ""
        },
         {
            name: "Sagok",
            s: 's',
            subtitle:"The beatiful beach of Geoje",
            description: "Sagok Beach’s unique black sand and volcanic rock formations provide an otherworldly backdrop. Enjoy quiet meditation or marvel at its geological wonders.",
            id: "seaside_sagok",
            sand: "no",
            parking: "yes",
            cafes: "yes",
            top: "350",
            left: "210",
            mtop: "57",
            mleft: "29",
            picture_folder: ""
        },
    ],

    islets: [
        // north to south. clockwise.
        {
            name: "Jeo-do",
            s: 'i',
            subtitle:"The beatiful islet of Geoje",
            description: "Jeo-do enchants with secluded beaches, hiking trails through dense forests, and panoramic ocean vistas. It’s perfect for explorers seeking tranquility and natural beauty.",
            id: "islet_jeo-do",
            sand: "sand and hike",
            car: "yes",
            eat: "there are restaurants",
            bridge: "no",
            top: "100",
            left: "500",
            mtop: "10",
            mleft: "60",
            picture_folder: ""
        },
        {
            name: "Daeju-do",
            s: 'i',
            subtitle:"The beatiful islet of Geoje",
            description: "Known for its vibrant fishing villages, Daeju-do offers fresh seafood, charming coastal scenery, and crystal-clear waters ideal for boating and snorkeling.",
            id: "islet_daeju-do",
            sand: "sand and hike",
            car: "yes",
            eat: "there are restaurants",
            bridge: "no",
            top: "100",
            left: "620",
            mtop: "14",
            mleft: "80",
            picture_folder: "p"
        },
        {
            name: "Isu-do",
            s: 'i',
            subtitle:"The beatiful islet of Geoje",
            description: "Isu-do is a paradise for divers, featuring vibrant coral reefs and abundant marine life. Enjoy peaceful hiking trails leading to breathtaking cliffside views.",
            id: "islet_isu-do",
            sand: "sand and hike",
            car: "yes",
            eat: "there are restaurants",
            bridge: "no",
            top: "200",
            left: "500",
            mtop: "28",
            mleft: "60",
            picture_folder: "ciao"
        },
        {
            name: "Jisim-do",
            s: 'i',
            subtitle:"The beatiful islet of Geoje",
            description: "Blanketed in colorful wildflowers, Jisim-do is a hiker’s dream. Its scenic walking paths reveal stunning ocean vistas, and its warm community welcomes every visitor.",
            id: "islet_jisim-do",
            sand: "sand and hike",
            car: "yes",
            eat: "there are restaurants",
            bridge: "no",
            top: "500",
            left: "520",
            mtop: "58",
            mleft: "74",
            picture_folder: ""
        },
        {
            name: "Nae-do",
            s: 'i',
            subtitle:"The beatiful islet of Geoje",
            description: "This tranquil hideaway features pristine sandy beaches and calm bays. Nae-do’s serene ambiance makes it ideal for kayaking, picnics, or just soaking in the sun.",
            id: "islet_nae-do",
            sand: "sand and hike",
            car: "yes",
            eat: "there are restaurants",
            bridge: "no",
            top: "600",
            left: "430",
            mtop: "72",
            mleft: "59",
            picture_folder: ""
        },
        {
            name: "Oe-do",
            s: 'i',
            subtitle:"The beatiful islet of Geoje",
            description: "Famous for its lush botanical garden, Oe-do is a visual treat. Discover exotic plants, manicured landscapes, and breathtaking views from every corner.",
            id: "islet_oe-do",
            sand: "sand and hike",
            car: "yes",
            eat: "there are restaurants",
            bridge: "no",
            top: "670",
            left: "430",
            mtop: "83",
            mleft: "62",
            picture_folder: ""
        },
        {
            name: "Jangsa-do",
            s: 'i',
            subtitle:"The beatiful islet of Geoje",
            description: "Jangsa-do’s rich cultural history complements its stunning nature. Visit ancient temples, explore coastal trails, or relax on its serene beaches.",
            id: "islet_jangsa-do",
            sand: "sand and hike",
            car: "yes",
            eat: "there are restaurants",
            bridge: "no",
            top: "740",
            left: "100",
            mtop: "82",
            mleft: "10",
            picture_folder: ""
        },
        {
            name: "Sandal-do",
            s: 'i',
            subtitle:"The beatiful islet of Geoje",
            description: "Sandal-do captivates with dramatic cliffs and crystal-clear coves. Its unique rock formations and hidden beaches are a haven for adventurous photographers.",
            id: "islet_sandal-do",
            sand: "sand and hike",
            car: "yes",
            eat: "there are restaurants",
            bridge: "no",
            top: "500",
            mtop: "50",
            mleft: "10",
            left: "110",
            picture_folder: ""
        },
        {
            name: "Gajo-do",
            s: 'i',
            subtitle:"The beatiful islet of Geoje",
            description: "Known for its picturesque fishing ports, Gajo-do offers vibrant local culture, fresh seafood, and scenic boat tours around its rugged coastline.",
            id: "islet_gajo-do",
            sand: "sand and hike",
            car: "yes",
            eat: "there are restaurants",
            bridge: "no",
            top: "178",
            mtop: "8",
            mleft: "0",
            left: "40",
            picture_folder: ""
        },
      
    ]
}

export default locations_data;

