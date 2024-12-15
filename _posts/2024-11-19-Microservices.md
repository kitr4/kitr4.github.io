---
title: "Microservices - et forsøg på overtalelse"
header:
  teaser: /assets/images/postimages/Microservices/Microservices.PNG
  image: /assets/images/postimages/Microservices/Microservices.PNG
sidebar:
    image: /assets/images/postimages/Microservices/Microservices.PNG
    image_alt: "logo"
---
Ressourser:
<br>
<a href="https://www.manning.com/books/microservices-security-in-action">Bog: Microservices Security in Action</a>
<br>
Kursus: Ambar: Microservices architechture
<br>
Gåture: Refleksioner over hvad jeg har lært
<br>
<h4>Jeg synes efterhånden at microservices er så cool en ting, at hvis jeg i dag skulle kode en simpel additiv lommeregner, ville jeg kode den med microservices og en API Gateway... og mTLS.
</h4>
<p style="text-align: justify; hyphens: auto;">
Det ville jeg nok egentlig ikke, men jeg synes simpelthen, at alt hvad jeg har lært om microservices har fået mig til at se på alt hvad jeg har lært på studiet her, i et klarere lys, som har givet mig blod på tanden på at lære mere og mere og mere.
</p>
<p style="text-align: justify; hyphens: auto;">
Måske vi skulle starte med at skrive mine tanker om hvorfor en monolit er fed. 
At programmere indenfor en monolitisk arkitektur er ældre end microservices, og er også den mest intuitive måde, at gå til værks til det hele på. Hvad skal min løsning løse? Okay, åben IDEen og begynd at kode. Man skal som softwareudvikler have styr på hele domænet monolitten prøver at løse, da alt er tættere koblet i en monolit. Det kan både være godt og skidt. Det tager lang tid at sætte sig ind i, men når man har sat sig ind i det, har man også godt styr på hele businessdomænet (forhåbentlig). Det er dog ressoursedyrt for arbejdsgiveren og kognitivt dyrt for den enkelte koder. En monolit er nemmere at sikre, da angrebsfladerne er væsentlig mindre, end hos en microservice løsning, hvor hver microservice eksponerer en angrebsflade. 
<br>
En monolit er god når produktet eller løsningen er relativt simpel, for så kan den laves hurtigt, og når det er lavet, er den færdig. En monolit er god, når man ikke forventer uhyr mange requests eller generel trafik, da den er tung at skalere (fordi man skalerer hele løsningen frem for de dele af løsningen, som bliver ekstra belastet eller udsættes for ekstra trafik) og pågrund af dens størrelse kan den også være tung at skalere rent diskpladsmæssigt. Løsningen kan være umulig at distribuere. Dertil kommer der spørgsmål internt på udviklerholdet: Hvilken stack skal vi bruge til at lave løsningen? Nogle af udviklerne kan have rigtig gode argumenter for hvorfor de ønsker én stack, andre gode argumenter for hvorfor de ønsker en anden; hvorfor? Fordi nogle stacks kan være bedre til at løse visse problemstillinger, hvorimod andre stacks kan være langt bedre til noget andet. Dertil kommer det, at en monolit kan være langt mindre agil, fordi man af naturlige årsager er tættere koblet: et hold kunne sidde og vente på at nogle blive færdige med noget i en anden afdeling, før de kan komme videre. 
<br>
<h5> "An API is not merely a tool—it is a language of connection, the syntax of innovation. In this digital cosmos, we are but nodes, harmonizing in an interconnected symphony." - ChatGBT.</h5>
Vi lever i dag i en API verden og det er nemmere at kommunikere med andre api'er, når man er på samme størrelse. Og størrelsestrenden er mindre og mindre services og api'er, som skal bruge noget enkelt, fra en anden lille API. 
<br>
Microservices introducerer mere overhead i starten af en løsning (måske kunne man sige at det bare generelt er lidt mere omsonst på nogle punkter), - det er sværere at sætte op, og kræver mere refleksionskraft i fht. uddeligering af ansvarsområder og datastorage- og scheme principper. 
<br>
<br>
<p style="text-align: justify; hyphens: auto;">
<b>Agilitet:</b> Men når bounded contexts først er sat, kan man begyndte at danne de ansvarlige hold for hver microservice, og hvert holdt kan internt fokusere på en lille del af et business domæne, og beslutte sig for hvilken stack de vil bruge, til netop den løsning, uden at behøves at tænke på de andre hold og andre domæner, for alle ressourser der er brug for i andre api'er, kan præsenteres og konsumeres vha. en API på microservicesen. Af den grund bliver udviklingen langt mere agil.
</p>
<p style="text-align: justify; hyphens: auto;">
<b>Skalerbarhed:</b> Såfremt man har udarbejdet sin arkitektur ud fra veldefinerede bounded contexts (meningsgrænser) og af denne grund kommmet frem til single responsibility microservices, vil horisontal skalering være langt nemmere, og på den måde, bliver løsningen som helhed langt mere robust og dynamisk. 
</p>
<p style="text-align: justify; hyphens: auto;">
<b>Distribuerbarhed:</b> Microservicene fylder langt mindre og er generelt mindre ressoursekrævende, og der er derfor ikke ligeså store nodekrav, som hos en monolit.
</p>
