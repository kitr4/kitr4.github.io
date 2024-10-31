---
title: "HttpsRedirection i Docker containers"
header:
  teaser: /assets/images/HttpsDockerRedirect.png
  image: /assets/images/HttpsDockerRedirect.png
  teaser: /assets/images/HttpsDockerRedirect.png
sidebar:
    image: /assets/images/HttpsDockerRedirect.png
    image_alt: "logo"
---
<p>
Jeg stod op i dag og satte mig ved computeren med en varm kop kaffe med sødmælk i. Masser af sødmælk.
<br>
for i dag var sgu en god dag. Jeg havde fået sat min API-gateway op i grove træk vha. YARP dagen forinden, og nu skulle jeg ellers bare lige starte op for Wireshark og bekræftige om de pakker der blev sendt fra min UserService til min RabbitMQ-service over 5671 rent faktisk var krypteret vha. TLS...
<br>
Jeg kunne ikke finde transmissionen i nogle af netværks-interfacene i Wireshark --- af gode grunde, da pakkerne blev sendt på docker-netværket angivet i min docker-compose.yml fil --- og det var også fint nok, det skulle jeg nok få løst lidt senere.
<br>
Planen for i dag: Sæt testmiljø op for min STS og kig ind i hvordan man issuer en JWT på baggrund af et succesfuld login. Sæt en READMODEL-datastore op, som automatisk opdateres med username, userid og hashed password, vha. en message fra UserService, når der på UserService registreres en bruger.... men først lige, hvad var der nu der stod i de sticky notes... 
<br>
Få styr på de der HTTPS-warnings den giver mig i docker-logs på de enkelte microservice-containers.
<img src="{{ '/assets/images/postimages/HttpRedirectWarning.png' | relative_url }}" alt="Description of image" style="display: block; margin: 20 auto;">
De små to-do opgaver skal gerne være løst inden jeg begiver mig ud i nyt territorie, så jeg ville lige løse denne.
<br>
Første spørgsmål til mig selv: Giver dette mening med min nuværende viden, og hvor vigtigt er det at få løst det? En httpsredirection er vigtig for mig, da jeg ønsker at hele min backend, bag edge-laget, skal være krypteret end-to-end.
<br> Min STS kommer til at have gøre med sensitive oplysninger, og derfor er det endnu vigtigere at netop denne, har httpsredirects.
<br>
Mine launchSettings så fine ud.
<img src="{{ '/assets/images/postimages/LaunchSettings.png' | relative_url }}" alt="Description of image" style="display: block; margin: 20 auto;">
Og min redirect-middleware var in place:
<img src="{{ '/assets/images/postimages/appUse.png' | relative_url }}" alt="Description of image" style="display: block; margin: 20 auto;">
Og ganske rigtigt blev jeg redirectet til https når jeg startede den op som ene solution på en kestrel server på min localhost. 
Og heri lå svaret selvfølgelig, og viden jeg egentlig troede sad der, blev opfrisket og sidder nu ganske klart: 
<br>
Der er et override hiearki når man går fra localhost deployment og docker environment deployment.
<img src="{{ '/assets/images/postimages/docker_localhost.png' | relative_url }}" alt="Description of image" style="display: block; margin: 20 auto;">
Docker compose > Dockerfile >LaunchSettings. Så selvom jeg exposer to porte i min Dockerfile for min STS, specificerer jeg kun én portmapping mellem min dockercontainer og localhost, og hvilken port skulle så stå for https, og hvordan skulle http-requests redirectes til disse, hvis den ikke stod åben eller var mappet. 
<br>
HTTPS er http med en TLS overbygning, og TLS-handshaket involverer certifikater..... jeg havde nogle dage forinden <b>[link til opslag omkring løsning indsættes her engang snart]</b> nørklet med en TLS-kommunikation imellem en microservice og rabbitmq, og vidste at det kunne være noget omsonst for en uerfaren, at lave certifikaterne og mounte dem ind det rigtige sted i en container... og jeg kom til at tænke på; jamen hvordan kan det egentlig være, at det går så snildt, at redirecte til https på min localhost, uden jeg har siddet og nørklet med nogle certifikater på noget tidspunkt før, men bare brugt HTTPS og tænkt på hvorfor der stadig findes nøgne http-requests.
<br>
Det viser sig at der i .NET SDK'en er en autogenerering af disse certifikater som 'bag scenerne' bekræftes som trustworthy, når man første gang laver sit .NET endpoint projekt. 
<br>
Fint nok, tænkte jeg. Men docker containerne kører jo i så eget miljø, på sin egen maskine, i virtuel og isoleret forstand. Det ville være ren magi hvis disse containers uden videre også kunne danne disse certifikater og udveksle dem ved intern kommunikation --- det ville kort og godt være for nemt. Der skal være evige udfordringer for en studerende som mig, og det viste sig også at være en kæmpe udfordring for mig. Når jeg kigger tilbage kan jeg ikke helt forstå hvor udfordringen bestod, for jeg synes jeg ser klart nu i skrivende stund.
<br>
Så altså: Det gav mening at der ikke kunne redirectes, når jeg kun exposede én port. Det gav mening, at hvis containerne virkede, og der kunne kommunikeres internt, at jeg kunne tilgå STS vha. http://localhost:port, at jeg ikke tilgik den vha. https.
<br> 
Hvad der ikke umiddelbart gav mening var, hvordan jeg fik det til at virke. Jeg skulle expose to porte, det var jeg klar over. <i> Hvis .NET SDKen danner certifikaterne selv, når de køres på localhost, danner de så også sig selv i containerne?</i>
<br>
Lidt googling ledte mig til denne guide 
<br>
<a href="https://learn.microsoft.com/en-us/aspnet/core/security/docker-compose-https?view=aspnetcore-8.0">Configure HTTPS in ASP.NET Core with Docker Compose</a>
<br>
og jeg kunne hurtigt udlede, at jeg blev nødt til at eksportere de selvgenerede certifikater på localhost til en .pfx fil, og mounte dem i min certifikatsfolder i /apps/certs/ folderen i den container hvori jeg ønskede at bruge https
<br>
Hurtigt og hurtigt, 5 timer senere sad jeg stadig og var febrilsk frustreret. 
<br>
Kommandoen så således ud:
<img src="{{ '/assets/images/postimages/ExportPfx.PNG' | relative_url }}" alt="Description of image" style="display: block; margin: 20 auto;">
og nu hvor jeg havde .pfx-certifikatet indeholdende key og cert, skulle denne mountes. Derudover skulle der nogle environmental variables med fra .NET-miljøet med ind i containeren. 
Min docker compose fil så nu sådan ud:
<img src="{{ '/assets/images/postimages/docker_compose_https.PNG' | relative_url }}" alt="Description of image" style="display: block; margin: 20 auto;">
Der var dog stadig issues.... når jeg requestede http://localhost:8002/swagger/index.html, kom jeg stadig ind på http.... når jeg skrev http://localhost:8002, blev jeg (pyha) redirected, uden certifikatproblemer (som jeg også stødte på en del). Og ja, jeg ved det: Et af mine valgfag er IT-sikkerhed, og her har jeg kastet sensitive dage så flamboyansk ind i min docker-compose som også bliver publiceret til vores github (som dog er privat), og endda lagt billedet op her på siden, hvor man tydeligt kan se hvad jeg har gang i. (Det skal også tilføjes, at da billedet kom op i første omgang, stod kodeordet der bare ligeud). Det er work en progress alt sammen, og jeg synes altså jeg træder ret varsomt. Bare ikke lige denne gang. Og det er alt der skal til engang i mellem.

 Jeg løste mine certifikatproblemer ved at skrive følgende i min Dockerfile for STS:
<img src="{{ '/assets/images/postimages/cert_copy_https.PNG' | relative_url }}" alt="Description of image" style="display: block; margin: 20 auto;">
og et sted synes jeg det gav mening, at jeg blev nødt til at tilføje en udledt .cert.crt fil (som jeg eksporterede ud af .pfx filen) og manuelt tilføje denne til cert-storen for den pågældende containers miljø.... det stod dog ikke skrevet nogle steder i microsoft guiden, og jeg hang mig ved, at jeg havde eksporteret den ud af .pfx certifikatet, så den måtte være heri.... om ikke andet løste problemet sig. Nu hvor jeg skriver dette, tænkte jeg at det ikke kunne være rigtigt, at jeg måtte kopierere og tilføje det til cert-storen, når det ikke stod i microsofts' guide, og at cert.crt allerede var indeholdt i .pfx filen, som vi hæftede med på containeren vha en environment variable. Og ganske rigtigt; Jeg har nu udkommenteret denne copy linje i STS-dockerfilen, og det virker stadig. 
Og redirect problemet løste jeg ved at sætte middlewaren HttpsRedirection over swagger-middlewarene, altså:
<img src="{{ '/assets/images/postimages/SwaggerMiddleware.PNG' | relative_url }}" alt="Description of image" style="display: block; margin: 20 auto;">
Og da jeg lå i går aftes og strakte min hjerne ud, slog det mig: Jeg har sgu da ikke brug for httpsredirects på mine microservices. De skal eksklusivt godtage https-requests, og det er kun mit edge-layer (GATEWAYEN) som skal redirect http-trafik om til https så det kan komme videre til mine APIer. 
Og det skulle være nemt at gøre vha. Yarp.
<br>
<b>J</B>eg genlærte hvad jeg engang har lært og senere aflært, og jeg lærte en masse nydt, og jeg fik senere på dagen tilgået min kommunikation på det interne docker network vha. Edgeshark, hvorved jeg kunne se at kommunikationen imellem min UserService og min RabbitMQ server foregik på port 5671 og var krypteret ved TLS. Det skriver jeg om senere. <b> Det blev et hurtigt og knap så velovervejet skriv --- lige som det skal være på bloggen her.



<br> 
<br>

<br>



