---
title: "OpenSSL & secret key generering"
header:
  teaser: /assets/images/postimages/OpenSSLPost/OpenSSLKeyGenerator.png
  image: /assets/images/postimages/OpenSSLPost/OpenSSLKeyGenerator.png
  teaser: /assets/images/postimages/OpenSSLPost/OpenSSLKeyGenerator.png
sidebar:
    image: /assets/images/postimages/OpenSSLPost/OpenSSLKeyGenerator.png
    image_alt: "logo"
---
<h3>Ressourcer:</h3>
<ul>
    <li>Bog: Microservices Security in Action</li>
</ul>
<h2> Da-da-da-daaaaam </h2>
<h4> Vi er nu kommet til at der skal issues JWT-tokens baseret på succesfuldt login og til det skal vores Security Token Service (STS) bruge en secret key. </h4>
<p style="text-align: justify; hyphens: auto;">
Dette er et hurtigt post som jeg laver i forbindelse med generering af en secret key til vores STS til signing af JWT-tokens. 
Efter at have browset rundt på inter-nettet kunne jeg hurtigt konkludere at det at bruge "dinmor32" ikke var en god secret key til at signere JWT-tokens med. Den var ikke lang nok, kunne brute-forces, havde en forudsigelighed i og med at den er orienteret til menneskelig meningsdannelse i form af ord og ja --- det var ikke en random genereret 32 byte string!
</p>
<p style="text-align: justify; hyphens: auto;">
Hvilket værktøj kunne man bruge? Man kunne oprette en C# solution som bestod af givende kode:
<img src="/assets/images/postimages/OpenSSLPost/CSharp_eksempel_key.png">
<br>
køre den, og bruge den kreeret kode...
</p>
<p style="text-align: justify; hyphens: auto;">
<h3> Og man kunne bruge det højtelskede værktøj: <u>OpenSSL</u></h3>
<img src="/assets/images/postimages/OpenSSLPost/OpenSSL_Key.png">
Og bruge den kreeret streng. 
Så simpelt kan det gøres. 
<br>
Det er ikke den key vi har valgt at bruge til vores STS, så lad endelig, <b>lad endelig!</b> bare vær' med at prøve den.
</p>


