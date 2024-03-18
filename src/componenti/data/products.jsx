const products = [
    {
        id: 1,
        name: 'SOLSTICE',
        Link: 'PageSolsticeborsasechiello',
        imageSrc: '/solstice(borsasechiello).jpeg',
        imageAlt: "Borsa a secchiello in pelle",
        price: '€1790',
        color: 'bg-black',
        filters: ["Borsa a Sechiello", "Nero","SOLSTICE"]
      },
      {
        id: 2,
        name: 'LUMINA',
        href: 'PageLuminaborsasechiello',
        imageSrc: '/lumina(borsasechiello).jpeg',
        imageAlt: "Paula's Ibiza Borsa a secchiello in rafia con finiture in pelle",
        price: '€480',
        color: 'bg-white ',
        filters: ["Borsa a Sechiello", "Bianco","LUMINA"]
      },
      {
        id: 3,
        name: 'CELESTIA',
        href: 'PageCelestiaborsasechiello',
        imageSrc: '/celestia(borsasechiello).jpeg',
        imageAlt: "Borsa a secchiello in pelle testurizzata bicolore Marcie",
        price: '€1180',
        color: 'bg-yellow-950',
        filters: ["Borsa a Sechiello", "Marrone","CELESTIA"]
      },
      {
        id: 4,
        name: 'ARCADIA',
        href: 'PageArcadiaborsasechiello',
        imageSrc: '/arcadia(borsasechiello).jpeg',
        description: "Borsa a secchiello mini in tela jacquard e pelle Ophidia",
        price: '€1480',
        color: 'bg-yellow-950',
        filters: ["Borsa a Sechiello", "Marrone","ARCADIA"]
      },
      {
        id: 5,
        name: 'VELLORA',
        href: 'PageVelloraborsasechiello',
        imageSrc: '/vellora(borsasechiello).jpeg',
        description: "Borsa a secchiello piccola in pelle con motivo Intrecciato Cassette",
        price: '€1600',
        color: 'bg-yellow-950',
        filters: ["Borsa a Sechiello", "Marrone","VELLORA"]
      },
      {
        id: 6,
        name: 'SOLSTICE',
        href: '#',
        imageSrc: '/solstice(borsaspalla).jpg',
        imageAlt: "Borsa a Spalla pelle testurizzata Bea",
        price: '€1790',
        color: 'bg-black',
        filters: ["Borsa a Spalla", "Nero","SOLSTICE"]
      },
      {
        id: 7,
        name: 'LUMINA',
        href: '#',
        imageSrc: '/lumina(borsaspalla).jpeg',
        imageAlt: "Borsa a spalla in pelle Paseo",
        price: '€480',
        color: 'bg-white',
        filters: ["Borsa a Spalla", "Bianco","LUMINA"]
      },
      {
        id: 8,
        name: 'CELESTIA',
        href: '#',
        imageSrc: '/celestia(borsaspalla).jpeg',
        imageAlt: "Borsa a spalla in camoscio con finiture in pelle Marcie",
        price: '€1180',
        color: 'bg-yellow-950',
        filters: ["Borsa a Spalla", "Marrone","CELESTIA"]
      },
      {
        id: 9,
        name: 'ARCADIA',
        href: '#',
        imageSrc: '/arcadia(borsaspalla).jpeg',
        description: "Borsa a spalla  in tela rivestita e pelle scamosciata Dionysus",
        price: '€1480',
        color: 'bg-yellow-950',
        filters: ["Borsa a Spalla", "Marrone","ARCADIA"]
      },
      {
        id: 10,
        name: 'VELLORA',
        href: '#',
        imageSrc: '/vellora(borsaspalla).jpeg',
        description: "Borsa a spalla in pelle con motivo Intrecciato Mini Wallace",
        price: '€1600',
        color: 'bg-green-500',
        filters: ["Borsa a Spalla", "Verde","VELLORA"]
      },
      {
        id: 11,
        name: 'SOLSTICE',
        href: '#',
        imageSrc: '/solstice(borsatracolla).jpeg',
        imageAlt: "Borsa a secchiello in rafia con finiture in pelle Le 37",
        price: '€1790',
        color: 'bg-yellow-950',
        filters: ["Borsa a Tracolla", "Marrone","SOLSTICE"]
      },
      {
        id: 12,
        name: 'LUMINA',
        href: '#',
        imageSrc: '/lumina(borsatracolla).jpeg',
        imageAlt: "Borsa a tracolla piccola in pelle testurizzata Puzzle Edge",
        price: '€480',
        color: 'bg-yellow-950',
        filters: ["Borsa a Tracolla", "Marrone","LUMINA"]
      },
      {
        id: 13,
        name: 'CELESTIA',
        href: '#',
        imageSrc: '/celestia(borsatracolla).jpeg',
        imageAlt: "Borsa a spalla in pelle testurizzata Marcie",
        price: '€1180',
        color: 'bg-black',
        filters: ["Borsa a Tracolla", "Nero","CELESTIA"]
      },
      {
        id: 14,
        name: 'ARCADIA',
        href: '#',
        imageSrc: '/arcadia(borsatracolla).jpeg',
        description: "Borsa a tracolla in pelle Jackie",
        price: '€1480',
        color: 'bg-black',
        filters: ["Borsa a Tracolla", "Nero","ARCADIA"]
      },
      {
        id: 15,
        name: 'VELLORA',
        href: '#',
        imageSrc: '/vellora(borsatracolla).jpeg',
        description: "Borsa a tracolla in pelle metallizzata con motivo Intrecciato Sardine",
        price: '€1600',
        color: 'bg-emerald-50',
        filters: ["Borsa a Tracolla", "Argento","VELLORA"]
      },
      {
        id: 16,
        name: 'SOLSTICE',
        href: '#',
        imageSrc: '/solstice(borsamini).jpeg',
        imageAlt: "Borsa mini in rafia con finiture in pelle Le 37",
        price: '€1790',
        color: 'bg-black',
        filters: ["Borsa Mini", "Nera","SOLSTICE"]
      },
      {
        id: 17,
        name: 'LUMINA',
        href: '#',
        imageSrc: '/lumina(borsamini).jpeg',
        imageAlt: "Borsa mini in pelle Flamenco",
        price: '€480',
        color: 'bg-black',
        filters: ["Borsa Mini", "Nera","LUMINA"]
      },
      {
        id: 18,
        name: 'CELESTIA',
        href: '#',
        imageSrc: '/celestia(borsamini).jpeg',
        imageAlt: "bag mini in lino con finiture in pelle Woody",
        price: '€1180',
        color: 'bg-white',
        filters: ["Borsa Mini", "Bianco","CELESTIA"]
      },
      {
        id: 19,
        name: 'ARCADIA',
        href: '#',
        imageSrc: '/arcadia(borsamini).jpeg',
        description: "bag mini in tela spalmata stampata con finiture in pelle e nastro Web Ophidia",
        price: '€1480',
        color: 'bg-red-900',
        filters: ["Borsa Mini", "Rossa","ARCADIA"]
      },
      {
        id: 20,
        name: 'VELLORA',
        href: '#',
        imageSrc: '/vellora(borsamini).jpeg',
        description: "Borsa mini in pelle con motivo intrecciato Loop",
        price: '€1600',
        color: 'bg-white',
        filters: ["Borsa Mini", "Bianco","VELLORA"]
      },
      {
        id: 21,
        name: 'SOLSTICE',
        href: '#',
        imageSrc: '/solstice(borsclutch).jpeg',
        imageAlt: "Clutch in vernice Daria",
        price: '€1790',
        color: 'bg-black',
        filters: ["Clutch", "Nera","SOLSTICE"]
      },
      {
        id: 22,
        name: 'LUMINA',
        href: '#',
        imageSrc: '/lumina(borsclutch).jpeg',
        imageAlt: "Clutch in pelle goffrata",
        price: '€480',
        color: 'bg-orange-600',
        filters: ["Clutch", "Arancione","LUMINA"]
      },
      {
        id: 23,
        name: 'CELESTIA',
        href: '#',
        imageSrc: '/celestia(borsaclutch).jpeg',
        imageAlt: "Clutch in velluto con finiture in pelle Penelope",
        price: '€1180',
        color: 'bg-black',
        filters: ["Clutch", "Nero","CELESTIA"]
      },
      {
        id: 24,
        name: 'ARCADIA',
        href: '#',
        imageSrc: '/arcadia(borsaclutch).jpeg',
        description: "Clutch in raso testurizzato decorata Dionysus",
        price: '€1480',
        color: 'bg-pink-400',
        filters: ["Clutch", "Rosa","ARCADIA"]
      },
      {
        id: 25,
        name: 'VELLORA',
        href: '#',
        imageSrc: '/vellora(borsaclutch).jpeg',
        description: "Borsa mini in pelle con motivo intrecciato Loop",
        price: '€1600',
        color: 'bg-yellow-200',
        filters: ["Clutch", "Oro","VELLORA"]
      },
      /* {
        id: 25,
        name: 'VELLORA',
        href: '#',
        imageSrc: '/vellora(borsaclutch).jpeg',
        description: "Borsa mini in pelle con motivo intrecciato Loop",
        price: '€1600',
        filters: ["Clutch", "Oro","VELLORA"]
      }, */
      {
        id: 26,
        name: 'SOLSTICE',
        href: '#',
        imageSrc: '/solstice(borsatotebag).jpeg',
        imageAlt: "Clutch in vernice Daria",
        price: '€1790',
        color: 'bg-black',
        filters: ["Tote Bag", "Nero","SOLSTICE"]
      },
      {
        id: 27,
        name: 'LUMINA',
        href: '#',
        imageSrc: '/lumina(borsatotebag).jpeg',
        imageAlt: "Clutch in pelle goffrata",
        price: '€480',
        color: 'bg-black',
        filters: ["Tote Bag", "Nero","LUMINA"]
      },
      {
        id: 28,
        name: 'CELESTIA',
        href: '#',
        imageSrc: '/celestia(borsatotebag).jpeg',
        imageAlt: "Clutch in velluto con finiture in pelle Penelope",
        price: '€1180',
        color: 'bg-black',
        filters: ["Tote Bag", "Nero","CELESTIA"]
      },
      {
        id: 29,
        name: 'ARCADIA',
        href: '#',
        imageSrc: '/arcadia(borsatotebag).jpeg',
        description: "Clutch in raso testurizzato decorata Dionysus",
        price: '€1480',
        color: 'bg-yellow-950',
        filters: ["Tote Bag", "Marrone","ARCADIA"]
      },
      {
        id: 30,
        name: 'VELLORA',
        href: '#',
        imageSrc: '/vellora(borsatotebag).jpeg',
        description: "Borsa mini in pelle con motivo intrecciato Loop",
        price: '€1600',
        color: 'bg-yellow-200',
        filters: ["Tote Bag", "Oro","VELLORA"]
      },
      
]


export default products