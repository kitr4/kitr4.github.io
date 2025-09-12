---
title: "RateLimiting i Gatewayen"
header:
  teaser: /assets/images/postimages/RateLimiting/RateLimiting.PNG
  image: /assets/images/postimages/RateLimiting/RateLimiting.PNG
sidebar:
    image: /assets/images/postimages/RateLimiting/RateLimiting.PNG
    image_alt: "logo"
---
<h4> I forbindelse med at UserService blev ristet på sit endpoint /register med 200 users som ville registrere sig over 20 sekunder, men ikke på 150 users over 20 sekunder, valgte vi at indsætte en ratelimiting vha. NuGet-pakken <i>System.Threading.RateLimiting</i>. </h4>
<p style="text-align: justify; hyphens: auto;">
Ratelimiting i softwareudvikling er af min erfaring et relativt simpelt begreb. Jeg vil her hurtigt indskyde, at <b>jeg</b> opfatter det som et simpelt begreb, men af hvad jeg kan fornemme på ressourser, afhænger kompleksiteten af implementeringen af de krav og udfordringer et system står overfor. Ratelimiting går ud på hvilke regler (begrænsinger, limits) man sætter op for en ratio af requests over et givent tidspunkt, og man bruger det til at beskytte serverressourser, undgå overbelastning og forbedre et systems stabilitet. 
</p>
<p style="text-align: justify; hyphens: auto;">
Jeg må ærligt indrømme at det har været begrænset med hvor dybt jeg har gået i fht. optimering og tests og jeg er ikke sikker på jeg har ramt det mest optimale sweetspot i fht. vores ratelimiting politik. Den er blevet foretaget på baggrund af 7 tests og for at imødekomme SIMPLE DDOS-angreb.
</p>
<p style="text-align: justify; hyphens: auto;">
Vores politik ser således ud:
<br>
<img src="/assets/images/postimages/RateLimiting/Policy.PNG">
<br>
og er 'naturligvis' implementeret i Gatewayen, da vi i vores arkitektur har valgt at centralisere load-balancing og ratelimiting i denne, da alle requests fra clients bliver ført igennem denne. 
<br>
Dertil jeg implementeret en middleware som håndhæver politikken:
<img src="/assets/images/postimages/RateLimiting/RLimitMiddleware.PNG">
<br>
Og det var egentlig hvad jeg havde at sige om ratelimiting for denne gang.
</p>

