// NO FULL WORDS IN CARDS, JUST LETTERS


const locations_data = {
    mainland: [
        // north to south. west to east.
        {
            name: "Nongso",
            id:"mainland_nongso",
            height: "500mt",
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
             id:"mainland_aengsan",
            height: "500mt",
            top: "210",
            left: "330",
            difficulty: "A",
            length: "3km",
            steepness: "very steep",
            duration: "3h",
            picture_folder: "image_path.jpg"
        },
        {
            name: "Daegumsan",
            id: "mainland_daegumsan",
            height: "500mt",
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
            id: "mainland_mangwolsan",
            height: "500mt",
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
            id: "mainland_mangchisan",
            height: "500mt",
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
            id: "mainland_guksabong",
            height: "500mt",
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
            id: "mainland_siraesan",
            height: "500mt",
            top: "360",
            left: "80",
            difficulty: "D",
            length: "3km",
            steepness: "very steep",
            duration: "3H",
            picture_folder: "image_path.jpg"
        },
        {
            name: "Dundeok-Kiseong",
            id: "mainland_dundeok-Kiseong",
            height: "500mt",
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
            id: "mainland_sangbangsan",
            height: "mainland_sangbangsan",
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
            id: "mainland_gyeryongsan",
            height: "500mt",
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
            id: "undong",
            height: "mainland_mundong",
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
            id: "mainland_oknyeobong",
            height: "500mt",
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
            id: "mainland_seonjasan",
            height: "500mt",
            top: "510",
            left: "360",
            difficulty: "D",
            length: "3km",
            steepness: "very steep",
            duration: "3H",
            picture_folder: "image_path.jpg"
        },
         {
            name: "Gucheonjeosooji",
            id: "mainland_gucheonjeosooji",
            height: "500mt",
            top: "520",
            left: "400",
            difficulty: "D",
            length: "3km",
            steepness: "very steep",
            duration: "3H",
            picture_folder: "image_path.jpg"
        },
         {
            name: "Bukbyeongsan",
            id: "mainland_bukbyeongsan",
            height: "500mt",
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
            id: "mainland_garasan",
            height: "500mt",
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
            id: "mainland_jayeon-hyuyangrim",
            height: "500mt",
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
            id: "mainland_naebongsan",
            height: "500mt",
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
            id: "seaside_guyeong",
            sand: "no",
            parking: "yes",
            cafes: "yes",
            top: "15",
            left: "490",
            picture_folder: ""
        },
         {
            name: "Hwangpo",
            id: "seaside_hwangpo",
            sand: "no",
            parking: "yes",
            cafes: "yes",
            top: "80",
            left: "400",
            picture_folder: ""
        },
         {
            name: "Mul-an",
            id: "seaside-mul-an",
            sand: "no",
            parking: "yes",
            cafes: "yes",
            top: "80",
            left: "520",
            picture_folder: ""
        },
         {
            name: "Sibangseon",
            id: "seaside_sibangseon",
            sand: "no",
            parking: "yes",
            cafes: "yes",
            top: "210",
            left: "525",
            picture_folder: ""
        },
         {
            name: "Deokpo",
            id: "seaside_deokpo",
            sand: "no",
            parking: "yes",
            cafes: "yes",
            top: "320",
            left: "540",
            picture_folder: ""
        },
         {
            name: "Wahyeon",
            id: "seaside_wahyeon",
            sand: "no",
            parking: "yes",
            cafes: "yes",
            top: "630",
            left: "565",
            picture_folder: ""
        },
         {
            name: "Gujora",
            id: "seaside_gujora",
            sand: "no",
            parking: "yes",
            cafes: "yes",
            top: "570",
            left: "480",
            picture_folder: ""
        },
         {
            name: "Mangchi",
            id: "seaside_mangchi",
            sand: "no",
            parking: "yes",
            cafes: "yes",
            top: "660",
            left: "420",
            picture_folder: ""
        },
         {
            name: "Baram-ui Ondeok",
            id: "seaside_baram-uiondeok",
            sand: "no",
            parking: "yes",
            cafes: "yes",
            top: "740",
            left: "480",
            picture_folder: ""
        },
         {
            name: "Dolteumi",
            id: "seaside_dolteumi",
            sand: "no",
            parking: "yes",
            cafes: "yes",
            top: "745",
            left: "420",
            picture_folder: ""
        },
         {
            name: "Yeocha",
            id: "seaside_yeocha",
            sand: "no",
            parking: "yes",
            cafes: "yes",
            top: "815",
            left: "360",
            picture_folder: ""
        },
         {
            name: "Geunpo Maeul",
            id: "seaside_geunpomaeul",
            sand: "no",
            parking: "yes",
            cafes: "yes",
            top: "780",
            left: "290",
            picture_folder: ""
        },
         {
            name: "Deokwon",
            id: "seaside_deokwon",
            sand: "no",
            parking: "yes",
            cafes: "yes",
            top: "650",
            left: "280",
            picture_folder: ""
        },
         {
            name: "Jukrim",
            id: "seaside_jukrim",
            sand: "no",
            parking: "yes",
            cafes: "yes",
            top: "500",
            left: "290",
            picture_folder: ""
        },
         {
            name: "Sagok",
            id: "seaside_sagok",
            sand: "no",
            parking: "yes",
            cafes: "yes",
            top: "350",
            left: "210",
            picture_folder: ""
        },
    ],

    islets: [
        // north to south. clockwise.
        {
            name: "Jeo-do",
            id: "islet_jeo-do",
            sand: "sand and hike",
            car: "yes",
            eat: "there are restaurants",
            bridge: "no",
            top: "100",
            left: "500",
            picture_folder: ""
        },
        {
            name: "Daeju-do",
            id: "islet_daeju-do",
            sand: "sand and hike",
            car: "yes",
            eat: "there are restaurants",
            bridge: "no",
            top: "100",
            left: "620",
            picture_folder: ""
        },
        {
            name: "Isu-do",
            id: "islet_isu-do",
            sand: "sand and hike",
            car: "yes",
            eat: "there are restaurants",
            bridge: "no",
            top: "200",
            left: "500",
            picture_folder: ""
        },
        {
            name: "Jisim-do",
            id: "islet_jisim-do",
            sand: "sand and hike",
            car: "yes",
            eat: "there are restaurants",
            bridge: "no",
            top: "500",
            left: "520",
            picture_folder: ""
        },
        {
            name: "Nae-do",
            id: "islet_nae-do",
            sand: "sand and hike",
            car: "yes",
            eat: "there are restaurants",
            bridge: "no",
            top: "600",
            left: "430",
            picture_folder: ""
        },
        {
            name: "Oe-do",
            id: "islet_oe-do",
            sand: "sand and hike",
            car: "yes",
            eat: "there are restaurants",
            bridge: "no",
            top: "670",
            left: "430",
            picture_folder: ""
        },
        {
            name: "Jangsa-do",
            id: "islet_jangsa-do",
            sand: "sand and hike",
            car: "yes",
            eat: "there are restaurants",
            bridge: "no",
            top: "740",
            left: "100",
            picture_folder: ""
        },
        {
            name: "Sandal-do",
            id: "islet_sandal-do",
            sand: "sand and hike",
            car: "yes",
            eat: "there are restaurants",
            bridge: "no",
            top: "500",
            left: "110",
            picture_folder: ""
        },
        {
            name: "Gajo-do",
            id: "islet_gajo-do",
            sand: "sand and hike",
            car: "yes",
            eat: "there are restaurants",
            bridge: "no",
            top: "178",
            left: "40",
            picture_folder: ""
        },
      
    ]
}

export default locations_data;

