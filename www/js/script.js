let animaux = [
    {
    "id": 1,
    "nom": "Eléphant",
    "description": "L'éléphant d'Afrique, qui peut atteindre 7 tonnes, est le plus gros animal terrestre actuel, mais il est loin derrière la Baleine bleue (Balaenoptera musculus) qui peut peser jusqu'à 200 tonnes et dépasser 30 mètres de long",
    "src": "img/Elephant.jpg"
    },
    {
    "id": 2,
    "nom": "Girafe",
    "description": "Il s'agit de l'animal actuel le plus grand en hauteur, pouvant, grâce à la longueur de son cou, atteindre 5,50 m et même 5,80 m9. Les girafes femelles mesurent, à l'âge adulte, entre 4,00 et 4,60 mètres de hauteur, soit 4,30 m en moyenne.",
    "src": "img/Girafe.jpg"
    },
    {
    "id": 3,
    "nom": "Tigre",
    "description": "Le Tigre (Panthera tigris) est une espèce de mammifère carnivore de la famille des félidés (Felidae) du genre Panthera. Aisément reconnaissable à sa fourrure rousse rayée de noir, il est le plus grand félin sauvage et l'un des plus grands carnivores terrestres",
    "src": "img/Tigre.jpg"
    },
    {
    "id":4,
    "nom":"Colibri",
    "description":`Colibri est un nom général du vocabulaire français qui ne correspond pas exactement à un niveau de classification scientifique des oiseaux-mouches.`,
    "src":"img/Colibri.png"
    },
    {
    "id":5,
    "nom":"Perroquet",
    "description":`Le terme perroquet (/pɛ.ʁɔ.kɛ/) est un terme du vocabulaire courant qui désigne plusieurs espèces d'oiseaux psittaciformes ayant généralement un gros bec crochu, une taille importante, des couleurs vives et qui sont doués pour l'imitation des sons ou de la parole.`,
    "src":"img/Perroquet.png"
    },
    {
        "id":6,
        "nom":"Grenouille Verte",
        "description":`Cette petite grenouille verte d'Europe mesure de 45 à 80 mm au maximum : en moyenne le mâle mesure de 45 à 55 mm et la femelle de 55 à 65 mm.`,
        "src":"img/Grenouille_Verte.jpg"
    },
    {
        "id":7,
        "nom":"Requin",
        "description":`Les requins, squales ou sélachimorphes forment un super-ordre de poissons cartilagineux, possédant cinq à sept fentes branchiales sur les côtés de la tête et les nageoires pectorales qui ne sont pas fusionnées à la tête. `,
        "src":"img/Requin.jpg"
    },
    {
        "id":8,
        "nom":"Grenouille Fraise",
        "description":`Cette espèce mesure de 17 à 24 mm4. Elle présente de nombreux morphes : les "pumilio bribri" étant les plus grandes formes.`,
        "src":"img/Grenouille_Fraise.jpg"
    },
    {
    "id":9,
    "nom":"Bec en sabot",
    "description":`Le Bec-en-sabot du Nil (Balaeniceps rex) est une espèce d'oiseau massif. C'est la seule espèce du genre Balaeniceps et de la famille des Balaenicipitidae.`,
    "src":"img/Bec_en_Sabot.jpg"
    },
    {
    "id":10,
    "nom":"Narval",
    "description":`Le Narval ou Licorne des mers (Monodon monoceros) est une espèce de cétacés de la famille des Monodontidae vivant dans l'océan Arctique`,
    "src":"img/Narval.jpg"
    }]


$("#elephant").on("click", function() {
    console.log(animaux[0].id)
    $("#number").text(animaux[0].id)
    $("#name").text(animaux[0].nom)
    $("#description").text(animaux[0].description)
    $("#img").attr("src",`${animaux[0].src}`)
    // $("#img").html(`img alt="" $[Pro] id="img"`)
})
$("#girafe").on("click", function() {
    console.log(animaux[1].src)
    $("#number").text(animaux[1].id)
    $("#name").text(animaux[1].nom)
    $("#description").text(animaux[1].description)
    $("#img").attr("src",`${animaux[1].src}`)
    // $("#").text()
})
$("#tigre").on("click", function() {
    console.log(animaux[2].id)
    $("#number").text(animaux[2].id)
    $("#name").text(animaux[2].nom)
    $("#description").text(animaux[2].description)
    $("#img").attr("src",`${animaux[2].src}`)
    // $("#").text()
})
$("#colibri").on("click", function() {
    console.log(animaux[3].id)
    $("#number").text(animaux[3].id)
    $("#name").text(animaux[3].nom)
    $("#description").text(animaux[3].description)
    $("#img").attr("src",`${animaux[3].src}`)
    // $("#").text()
})
$("#perroquet").on("click", function() {
    console.log(animaux[4].id)
    $("#number").text(animaux[4].id)
    $("#name").text(animaux[4].nom)
    $("#description").text(animaux[4].description)
    $("#img").attr("src",`${animaux[4].src}`)
    // $("#").text()
})
$("#grenouilleV").on("click", function() {
    console.log(animaux[5].id)
    $("#number").text(animaux[5].id)
    $("#name").text(animaux[5].nom)
    $("#description").text(animaux[5].description)
    $("#img").attr("src",`${animaux[5].src}`)
    // $("#").text()
})
$("#requin").on("click", function() {
    console.log(animaux[6].id)
    $("#number").text(animaux[6].id)
    $("#name").text(animaux[6].nom)
    $("#description").text(animaux[6].description)
    $("#img").attr("src",`${animaux[6].src}`)
    // $("#").text()
})
$("#grenouilleF").on("click", function() {
    console.log(animaux[7].id)
    $("#number").text(animaux[7].id)
    $("#name").text(animaux[7].nom)
    $("#description").text(animaux[7].description)
    $("#img").attr("src",`${animaux[7].src}`)
    // $("#").text()
})
$("#bec").on("click", function() {
    console.log(animaux[8].id)
    $("#number").text(animaux[8].id)
    $("#name").text(animaux[8].nom)
    $("#description").text(animaux[8].description)
    $("#img").attr("src",`${animaux[8].src}`)
    // $("#").text()
})
$("#narval").on("click", function() {
    console.log(animaux[9].id)
    $("#number").text(animaux[9].id)
    $("#name").text(animaux[9].nom)
    $("#description").text(animaux[9].description)
    $("#img").attr("src",`${animaux[9].src}`)
    // $("#").text()
})