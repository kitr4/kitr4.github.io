---
title: "RabbitMQ, [KONFIGURATIONER] QueueDeclare og ExchangeDeclare."
header:
  teaser: /assets/images/postimages/RabbitMQ/RabbitMQConf.png
  image: /assets/images/postimages/RabbitMQ/RabbitMQConf.png
sidebar:
    image: /assets/images/postimages/RabbitMQ/RabbitMQConf.png
    image_alt: "logo"
---
<article>
    Ressourser: 
    <br>
    <a href="https://www.rabbitmq.com/docs">RabbitMQ Docs</a> (RabbitMQ Docs er exceptionel god synes jeg!)
            <section>
            <h1>Kort skitsering af de forskellige justeringer man kan gøre på QueueDeclare og ExchangeDeclare</h1>
            <h2>QueueDeclare</h2>
            <p>
                Metoden <code>QueueDeclare</code> bruges til at definere en kø i RabbitMQ. Her kan du specificere forskellige parametre:
            </p>
            <ul>
                <li>
                    <code>queue</code>: Navnet på køen. Hvis du lader den være tom, vil RabbitMQ generere et unikt navn.
                </li>
                <li>
                    <code>durable</code>: Hvis <code>true</code>, overlever køen en genstart af RabbitMQ-serveren.
                </li>
                <li>
                    <code>exclusive</code>: Hvis <code>true</code>, kan køen kun bruges af den forbindelse, der oprettede den.
                </li>
                <li>
                    <code>autoDelete</code>: Hvis <code>true</code>, slettes køen automatisk, når den sidste forbindelse stopper med at bruge den.
                </li>
                <li>
                    <code>arguments</code>: Brugerdefinerede parametre for køen, såsom TTL (Time-To-Live) for beskeder.
                </li>
            </ul>
        </section>
        <section>
            <h2>ExchangeDeclare</h2>
            <p>
                Metoden <code>ExchangeDeclare</code> bruges til at oprette en exchange, som styrer, hvordan beskeder distribueres til køer. Parametre inkluderer:
            </p>
            <ul>
                <li>
                    <code>exchange</code>: Navnet på exchangen.
                </li>
                <li>
                    <code>type</code>: Typen af exchange (beskrives nedenfor).
                </li>
                <li>
                    <code>durable</code>: Hvis <code>true</code>, overlever exchangen en genstart af RabbitMQ-serveren.
                </li>
                <li>
                    <code>autoDelete</code>: Hvis <code>true</code>, slettes exchangen automatisk, når den ikke længere har nogle køer bundet til sig.
                </li>
                <li>
                    <code>arguments</code>: Brugerdefinerede parametre for exchangen.
                </li>
            </ul>
        </section>
        <section>
            <h2>Exchange-typer</h2>
            <p>RabbitMQ understøtter flere typer exchanges:</p>
            <ul>
                <li>
                    <strong>Direct Exchange</strong>: Beskeder sendes til køer baseret på en præcis routing key.
                </li>
                <li>
                    <strong>Fanout Exchange</strong>: Sender beskeder til alle køer, der er bundet til exchangen, uanset routing key.
                </li>
                <li>
                    <strong>Topic Exchange</strong>: Muliggør beskedrouting baseret på mønstre i routing keys (fx <code>*.error</code>).
                </li>
                <li>
                    <strong>Headers Exchange</strong>: Bruger beskedheaders i stedet for routing keys til at matche køer.
                </li>
            </ul>
        </section>
        <section>
            <h2>Køtyper</h2>
            <ul>
                <li>
                    <strong>Standard Queue</strong>: En almindelig FIFO-kø (First In, First Out).
                </li>
                <li>
                    <strong>Priority Queue</strong>: Tillader beskeder med højere prioritet at blive behandlet først.
                </li>
                <li>
                    <strong>Lazy Queue</strong>: Gemmer beskeder på disk for at reducere hukommelsesforbrug.
                </li>
                <li>
                    <strong>Quorum Queue</strong>: En køtype designet til høj tilgængelighed og dataintegritet.
                </li>
            </ul>
        </section>
    </article>