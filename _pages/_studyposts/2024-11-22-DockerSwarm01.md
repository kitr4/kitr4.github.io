---
title: "Fra Docker Compose til Docker Swarm"
header:
  teaser: /assets/images/postimages/DockerSwarm/ComposeTilSwarm.png
  image: /assets/images/postimages/DockerSwarm/ComposeTilSwarm.png
sidebar:
    image: /assets/images/postimages/DockerSwarm/ComposeTilSwarm.png
    image_alt: "logo"
---
<p style="text-align: justify; hyphens: auto;">
Det blev ikke Kubernetes, det blev Docker Swarm.
Jeg tænkte at det ville være nemmere at migrere fra Docker Compose og over til swarm. 
<h4> Det startede også let ud; <i>docker swarm init</i> i commandprompten, og så skulle jeg ellers være kørende.</h4>
Meeeeen jeg må sige at mig og dokumentationsfilerne havde det ikke synderligt godt sammen. Til at starte med, jo. Men der var et problem som blev hængende i tre stive dage, og jeg kunne ikke komme ud af flækken, før jeg havde løst det. 
<br>
Ganske simpelt i teorien kan man 'docker stack deploy -c docker-compose.yml <navn på stack>' og så skulle den migrere over. Det skal siges, at man skal have et image liggende og referere det, man kan ikke bare indsætte en build-tilgang.
<br>
Fint, det gjorde jeg så. 
<br>
Mine tomme services, AdminService, PatientService, DiaryService og TherapistService kørte uden problemer. STS og UserService blev ved med at blive rebooted. 
<br>
Healthchecket gik i vasken for de to containere --- UNKNOWN COMMAND IN PATH: CURL
<br>
Væk med healthchecket, ny fejl.
3 dage senere;
Den ville ikke godtage min definerede volume med rabbitmq-relaterede certifikater, kun bind mounte direkte i hver service. Hvor stod det nogen sted? Hvordan giver det mening! Intet forum, ingen chatGBT, intet kunne hjælpe mig. Det var trial and error og til sidst funkede den, sådan da. 
<br>
Nu er fejlen den, at den ikke lader mig bruge min database, og det kigger jeg på i morgen.
<br>
Docker Swarm er smart! Fordi jeg med værktøjet kan orkestrere mine services på tværs af flere nodes vha. et token som bliver generet ved docker swarm init (der også samtidig gør min maskine til en manager-node for container-orkestret). Man kan deploye flere replicas, og docker swarm load balancer automatisk i mellem dem, plus at den rerouter requests fra indgangsporten til de porte replicaer måtte være blevet åbnet på, uden at man som udvikler behøves at vide hvilke porte der er blevet allokeret til diverse replicas.
<h4> Og desuden åbner Docker Swarm op for brugen af Docker Secrets, som jeg synes er et super fedt feature. Mere om det i en anden post </h4>


</p>

