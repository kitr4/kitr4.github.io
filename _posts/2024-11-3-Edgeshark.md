---
title: "Edgeshark: Docker-network analysis tool"
header:
  teaser: /assets/images/postimages/EdgesharkPost/EdgesharkPost.png
  image: /assets/images/postimages/EdgesharkPost/EdgesharkPost.png
  teaser: /assets/images/postimages/EdgesharkPost/EdgesharkPost.png
sidebar:
    image: /assets/images/postimages/EdgesharkPost/EdgesharkPost.png
    image_alt: "logo"
---
<h3>Ressourcer:</h3>
<ul>
    <li><a href="https://edgeshark.siemens.io/#/">https://edgeshark.siemens.io/#/</a></li>
</ul>

<p> Her en post om Edgeshark, og hvordan det har hjulpet mig. Jeg nævnte kort Edgeshark i indlægget <a href="https://j3pp3.dev/posts/2024-10-30-docker_redirect/"> HttpsRedirections i Docker containers</a>, og her tænkte jeg at jeg kort ville vise hvordan UI'et ser ud, og hvordan det tilgåes, og hvorfor jeg synes det er smart.
<br>
Edgeshark reddede mig ud af et formiddags-eftermiddags-frustrationsmarathon, hvor jeg nørklede med at tilgå mine docker-containers fra Wireshark. Edgeshark er et værktøj som integrerer sig med Wireshark. Dvs. at de (for mig at se) interessante resultater af Edgesharks proces kan ses i Wireshark UI'et. Wireshark er et uendeligt fedt netværksanalysetool, men det har også sine begrænsninger. Det kan ikke uden videre tilgå container networks. Edgeshark er bygget specifikt til at overkomme denne umiddelbare begræsning hos Wireshark, og overkommer denne vha. de to hjælper-services: Ghostwire og Packetflix. Ghostwire står for at identificere og expose docker network namespacet, og packetflix står for at fange pakkerne og viderestreame disse til Wireshark. Edgeshark hooker sig op på Wireshark vha. et extcap plugin, som er en udvidelsesmekanisme hos Wireshark, der enabler packet captures fra tredjeparts software og som gør at denne packet capture (i det givne namespace) kan vises i Wireshark's network interface. 
Nok om alt det kedelige - nu skal vi frem til det visuelle. 
<br>
Nå, jo, og inden:
<br>
Edgeshark kan hentes her:
https://github.com/siemens/edgeshark
<br>
Og programmet spinnes op som en docker container.
Når containeren er oppe og køre, er det ganske enkelt. Tilgå endpointet for interfacet (kører by default på port 5001) og så kommer man ind på denne fine landingsside:
<img src="{{ '/assets/images/postimages/EdgesharkPost/Edgeshark_UI.png' | relative_url }}" alt="Description of image" style="display: block; margin: 20 auto;">
På billedet kan i se 'cerebralparesemidt_cpm-network' som er netværket for vores projekt. Her trykker man ganske enkelt på hajfinnen, og så starter WireShark op.
Her kan i se, og ja, jeg er sgu begejstret over det! at RabbitMQ og UserService (eller, så skal i jo kende IP'erne, men jaja, her kommer de ihvertfald kommunikerer over TLS (så i kan ligeså godt lade være med at prøve at komme ind! [indsæt (acid) ASCII-emoji her])).
<img src="{{ '/assets/images/postimages/EdgesharkPost/Edgeshark_5671.png' | relative_url }}" alt="Description of image" style="display: block; margin: 20 auto;">
Det var alt for denne post. Edgeshark er fedt! Og skud ud til Ghostwire, Packetflix og extcap-pluginnet. Under and out.

