---
title: "Docker Secrets - Sikker håndtering af følsomme data"
header:
  teaser: /assets/images/postimages/DockerSecrets/DockerSecrets.png
  image: /assets/images/postimages/DockerSecrets/DockerSecrets.png
sidebar:
    image: /assets/images/postimages/DockerSecrets/DockerSecrets.png
    image_alt: "logo"
---
<h4> Docker Secrets! Så blev det slut med sensitiv informationer injected som environmental variables </h4>
<article>
        <p>
            I udviklingen af mit microservice-projekt <strong>CerebralPareseMidt</strong> stødte jeg på behovet for at håndtere følsomme data som adgangskoder, API-nøgler og certifikater på en sikker måde. Docker tilbyder en løsning kaldet <strong>Docker Secrets</strong>, som jeg har brugt til at sikre følsomme oplysninger i mit Docker Swarm-setup.
        </p>
        <section>
            <h2>Hvad er Docker Secrets?</h2>
            <p>
                Docker Secrets er en mekanisme til sikker håndtering af følsomme data. Secrets bliver krypteret, når de lagres, og distribueres kun til de containere, der eksplicit anmoder om dem. Secrets bliver monteret som filer i containerens hukommelse, så de aldrig bliver gemt på disk i selve containeren.
            </p>
        </section>
        <section>
            <h2>Docker Secrets og Swarm</h2>
            <p>
                En væsentlig egenskab ved Docker Secrets er, at de kræver Docker Swarm for at fungere. Swarm er Dockers clustering-teknologi, der gør det muligt at køre tjenester (services) på tværs af flere noder. Jeg brugte Docker Swarm i mit projekt og kunne dermed udnytte Docker Secrets til at håndtere følsomme oplysninger sikkert.
            </p>
        </section>
        <section>
            <h2>Min tilgang: Docker Secrets i praksis</h2>
            <p>
                I mit projekt har jeg gemt følsomme data som adgangskoder og certifikater som Docker Secrets, hvilket sikrer, at de kun er tilgængelige for de containere, der har behov for dem. Secrets blev defineret som en del af min Docker Compose-konfiguration og distribueret sikkert via Swarm.
            </p>
            <p>
                Ved hjælp af Docker Secrets kunne jeg undgå at gemme følsomme data direkte i konfigurationsfiler eller miljøvariabler. Dette øgede sikkerheden i mit setup betydeligt og gjorde det lettere at vedligeholde og rotere secrets, når det var nødvendigt.
            </p>
        </section>
        <section>
            <h2>Fordele og udfordringer</h2>
            <h3>Fordele:</h3>
            <ul>
                <li>Krypteret lagring og distribution af følsomme data.</li>
                <li>Kun adgang for autoriserede containere.</li>
                <li>Let integration med Docker Swarm.</li>
            </ul>
            <h3>Udfordringer:</h3>
            <ul>
                <li>Docker Secrets kræver Swarm, hvilket betyder, at funktionen ikke kan bruges i en standard Docker Compose-opsætning uden clustering.</li>
                <li>Opsætning og vedligeholdelse af Swarm kan være en udfordring i mindre projekter.</li>
            </ul>
        </section>
        <section>
            <h2>Læring fra processen</h2>
            <p>
                Ved at bruge Docker Secrets i mit Swarm-setup har jeg fået en dybere forståelse for, hvordan man håndterer følsomme data sikkert i containeriserede miljøer. Arbejdet med Swarm og Secrets har lært mig vigtigheden af at beskytte følsomme oplysninger, både mod utilsigtet eksponering og uautoriseret adgang.
            </p>
            <p>
                I fremtidige projekter planlægger jeg at udvide denne viden og undersøge yderligere værktøjer som HashiCorp Vault eller cloud-baserede løsninger, når projekterne vokser i kompleksitet.
            </p>
        </section>
    </article>
