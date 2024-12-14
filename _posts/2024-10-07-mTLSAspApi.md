---
title: "mTLS mellem ASP NET CORE API og Frontend"
header:
  teaser: /assets/images/postimages/TLS/mTLS_AspNetCore.png
  image: /assets/images/postimages/TLS/mTLS_AspNetCore.png
sidebar:
    image: /assets/images/postimages/TLS/mTLS_AspNetCore.png
    image_alt: "logo"
---
Ressourser:
<br>
<a href="https://learn.microsoft.com/en-us/azure/api-management/api-management-howto-mutual-certificates">Windows Docs on API mTLS</a>

<h3> <i> "Who are you, if you are not me?" </i></h3>
<p style="text-align: justify; hyphens: auto;">
Det var med min erfaring indenfor certifikater og mTLS fra rabbitmq's opsætning relativt lige til at sætte mTLS op i mellem min gateway og frontend. <br>
I gatewayen's program.cs:
<br>
<img src="/assets/images/postimages/TLS/mTLSprogram1.PNG">
<br>
og så udbyggede jeg ellers authentication middlewaren med følgende:
<br>
<img src="/assets/images/postimages/TLS/mTLSprogram2.PNG">
<br>
og så var næste step egentlig bare at udbygge simuleringen af frontend-requests i Postman med certifikatet som var lavet til frontenden.
<br>
I Postman:
<br>
Settings -> Certificates -> importer frontend certifikat og specificer gatewayens indgang (i mit tilfælde https://localhost:8000). I alle requests der laves til gatewayen hæfter Postman nu dette certifikat på og så virker det hele ellers.
<br>
<h5> Virker, funker! </h5>
</p>
