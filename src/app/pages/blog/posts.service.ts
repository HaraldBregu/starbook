import { Injectable } from '@angular/core';

@Injectable()
export class PostsService {
  public articles = [
    // {
    //   "title" : "Crescere la tua impresa edile, facile come fissare un tassello",
    //   "subtitle" : "Fai anche tu parte dei professionisti che acquistano contatti di potenziali clienti online? Non sei l’unico perché ci sono migliaia di altri professionisti come te che hanno deciso di utilizzare le piattaforme di preventivi online per poter crescere la loro impresa.",
    //   "picture_url" : "https://pixabay.com/get/e836b2082af6073ecd0b4606e248459ee66ae3d019b0154396f5c17a.jpg",
    //   "author": {
    //     "fullname" : "Harald Bregu",
    //     "headline" : "Sviluppatore, Software, Starbook, Startup",
    //     "picture_url" : "https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/595ccfb42bf14e6650ce6e3d/avatar/0"
    //   },
    //   "updated_at" : "28 Lug 2017",
    //   "timing" : "3 min lettura",
    //   "html_body" : `
    //   <article>
    //     <header>
    //       <h1>Preventivi online? Cosa devi sapere e cosa non ti viene detto</h1>
    //       <p>
    //         <time><i class="fa fa-calendar" aria-hidden="true"></i> 28 Lug, 2017</time>
    //         <time><i class="fa fa-clock-o" aria-hidden="true"></i> 3 min</time>
    //         <author><i class="fa fa-user" aria-hidden="true"></i> Harald Bregu</author>
    //       </p>
    //       <div class="share-links">
    //         <ul>
    //         <li class="facebook">
    //           <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//www.starbook.co/blog/Preventivi-online%3F-Cosa-devi-sapere-e-cosa-non-ti-viene-detto" title="" target="_blank" rel="nofollow"><i class="fa fa-facebook" aria-hidden="true"></i> <span>Facebook</span></a>
    //         </li>
    //         <li class="twitter line">
    //           <a href="https://twitter.com/home?status=https%3A//www.starbook.co/blog/Preventivi-online%3F-Cosa-devi-sapere-e-cosa-non-ti-viene-detto" title="" target="_blank" rel="nofollow"><i class="fa fa-twitter" aria-hidden="true"></i> <span>Twitter</span></a>
    //         </li>
    //         <li class="google line">
    //           <a href="https://plus.google.com/share?url=https%3A//www.starbook.co/blog/Preventivi-online%3F-Cosa-devi-sapere-e-cosa-non-ti-viene-detto" title="" target="_blank" rel="nofollow"><i class="fa fa-google-plus" aria-hidden="true"></i> <span>Google+</span></a>
    //         </li>
    //         <li class="pinterest line">
    //           <a href="https://pinterest.com/pin/create/button/?url=https%3A//www.starbook.co/blog/Preventivi-online%3F-Cosa-devi-sapere-e-cosa-non-ti-viene-detto&media=https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/preventivi-online-cosa-sapere-e-cosa-non-ti-dicono.jpg&description=Preventivi online? Cosa devi sapere e cosa non ti viene detto" title="" target="_blank" rel="nofollow"><i class="fa fa-pinterest-p" aria-hidden="true"></i> <span>Pinterest</span></a>
    //         </li>
    //         <li class="linkedin line">
    //           <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//www.starbook.co/blog/Preventivi-online%3F-Cosa-devi-sapere-e-cosa-non-ti-viene-detto&title=Preventivi online? Cosa devi sapere e cosa non ti viene detto&summary=Fai anche tu parte dei professionisti che acquistano contatti di potenziali clienti online? Non sei l’unico perché ci sono migliaia di altri professionisti come te che hanno deciso di utilizzare le piattaforme di preventivi online per poter crescere la loro impresa&source=" title="" target="_blank" rel="nofollow"><i class="fa fa-linkedin" aria-hidden="true"></i> <span>LinkedIn</span></a>
    //         </li>
    //         </ul>
    //       </div>
    //     </header>
    //     <p>Fai anche tu parte dei professionisti che acquistano contatti di potenziali clienti online? Non sei l’unico perché ci sono migliaia di altri professionisti come te che hanno deciso di utilizzare le piattaforme di preventivi online per poter crescere la loro impresa.</p>
    //     <p><img src="https://pixabay.com/get/ec36b8092dfd1c3e81594601e24f4e93fe76e7d518b317409cf9c1.jpg" alt="Gli artigiani sul web" title="Gli artigiani sul web"/></p>
    //     <p>Molti professionisti hanno deciso di dare una svolta nella crescita della loro azienda, che sia di costruzioni, pulizia, edilizia o idraulica. Tuttavia ci sono cose che devi conoscere prima di iniziare ad utilizzarli e prima di spendere soldi inutilmente.</p>
    //     <section>
    //       <h2>Il funzionamento</h2>
    //       <p>Come abbiamo già parlato anche in un <a href="/blog/Gli-artigiani-del-web%3A-3-semplici-modi-per-aumentare-i-clienti-online" target="_blank">altro articolo</a> su come aumentare i clienti online, il funzionamento di questi siti è semplice. Ti iscrivi come impresa, inserisci la P.IVA, selezioni la tua professione e inizi a ricevere offerte di lavoro. Ogni volta che c’è una nuova richiesta di preventivo ti arriva una notifica email e un SMS. A quel punto decidi di comprare il contatto e d’inviarli un preventivo. I prezzi variano dai 5 ai 20€ per ogni preventivo o contatto acquistato. Dal altra parte il cliente riceve fino a 5 preventivi da altri professionisti e imprese che hanno acquistato il contatto come te.</p>
    //     </section>
    //     <section>
    //       <h2>Problema</h2>
    //       <p>Analizziamo i vantaggi e svantaggi. Questi sistemi sono ottimi per trovare contatti e trasformarli in clienti, ma non è detto che il contatto sia reale o veramente interessato. Facendo due conti per ogni preventivo solo 1 su 5 delle imprese vince il lavoro. Quindi in media dovresti fare 5 preventivi per vincere uno. Non solo vincerlo ma anche assicurarti che il cliente sia regolare, che non cambi idea al ultimo minuto è che abbia chiaro la data del inizio dei lavori. Riassumendo in punti i problemi sono:</p>
    //       <ul>
    //         <li><strong>Nessuna garanzia di lavoro</strong></li>
    //         <li><strong>Alto tasso d'insuccesso</strong></li>
    //         <li><strong>Clienti non interessati</strong></li>
    //         <li><strong>Molta concorrenza</strong></li>
    //         <li><strong>Facilmente adatto alle truffe</strong></li>
    //       </ul>
    //     </section>
    //     <section>
    //       <h2>Soluzione</h2>
    //       <p>La soluzione non è standard per tutte le imprese che acquistano contatti online. Si potrebbero trovare centinaia di soluzioni validi, ma visto che i sistemi di cui parliamo sono online, le soluzioni si focalizzano in quel contesto. In sintesi le soluzioni sono:</p>
    //       <ul>
    //         <li><strong>Verifica dei contatti acquistati</strong></li>
    //         <li><strong>Controllare l'interessamento del cliente</strong></li>
    //         <li><strong>Inviare email professionali</strong></li>
    //         <li><strong>Inviare SMS professionali</strong></li>
    //         <li><strong>Aumentare il successo dei preventivi online</strong></li>
    //         <li><strong>Diventare competitivi</strong></li>
    //       </ul>
    //       <p>Questi sono delle soluzioni validi per verificare i vostri clienti, crescere il successo dei preventivi, chiedere rimborsi e ovviamente crescere i guadagni.</p>
    //     </section>
    //   </article>
    //   `
    // },
    {
      "title" : "Preventivi online? Cosa devi sapere e cosa non ti viene detto",
      "subtitle" : "Fai anche tu parte dei professionisti che acquistano contatti di potenziali clienti online? Non sei l’unico perché ci sono migliaia di altri professionisti come te che hanno deciso di utilizzare le piattaforme di preventivi online per poter crescere la loro impresa.",
      "picture_url" : "https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/preventivi-online-cosa-sapere-e-cosa-non-ti-dicono.jpg",
      "author": {
        "fullname" : "Harald Bregu",
        "headline" : "Sviluppatore, Software, Starbook, Startup",
        "picture_url" : "https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/595ccfb42bf14e6650ce6e3d/avatar/0"
      },
      "updated_at" : "28 Lug 2017",
      "timing" : "3 min lettura",
      "html_body" : `
      <article>
        <header>
          <h1>Preventivi online? Cosa devi sapere e cosa non ti viene detto</h1>
          <p>
            <time><i class="fa fa-calendar" aria-hidden="true"></i> 28 Lug, 2017</time>
            <time><i class="fa fa-clock-o" aria-hidden="true"></i> 3 min</time>
            <author><i class="fa fa-user" aria-hidden="true"></i> Harald Bregu</author>
          </p>
          <div class="share-links">
            <ul>
            <li class="facebook">
              <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//www.starbook.co/blog/Preventivi-online%3F-Cosa-devi-sapere-e-cosa-non-ti-viene-detto" title="" target="_blank" rel="nofollow"><i class="fa fa-facebook" aria-hidden="true"></i> <span>Facebook</span></a>
            </li>
            <li class="twitter line">
              <a href="https://twitter.com/home?status=https%3A//www.starbook.co/blog/Preventivi-online%3F-Cosa-devi-sapere-e-cosa-non-ti-viene-detto" title="" target="_blank" rel="nofollow"><i class="fa fa-twitter" aria-hidden="true"></i> <span>Twitter</span></a>
            </li>
            <li class="google line">
              <a href="https://plus.google.com/share?url=https%3A//www.starbook.co/blog/Preventivi-online%3F-Cosa-devi-sapere-e-cosa-non-ti-viene-detto" title="" target="_blank" rel="nofollow"><i class="fa fa-google-plus" aria-hidden="true"></i> <span>Google+</span></a>
            </li>
            <li class="pinterest line">
              <a href="https://pinterest.com/pin/create/button/?url=https%3A//www.starbook.co/blog/Preventivi-online%3F-Cosa-devi-sapere-e-cosa-non-ti-viene-detto&media=https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/preventivi-online-cosa-sapere-e-cosa-non-ti-dicono.jpg&description=Preventivi online? Cosa devi sapere e cosa non ti viene detto" title="" target="_blank" rel="nofollow"><i class="fa fa-pinterest-p" aria-hidden="true"></i> <span>Pinterest</span></a>
            </li>
            <li class="linkedin line">
              <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//www.starbook.co/blog/Preventivi-online%3F-Cosa-devi-sapere-e-cosa-non-ti-viene-detto&title=Preventivi online? Cosa devi sapere e cosa non ti viene detto&summary=Fai anche tu parte dei professionisti che acquistano contatti di potenziali clienti online? Non sei l’unico perché ci sono migliaia di altri professionisti come te che hanno deciso di utilizzare le piattaforme di preventivi online per poter crescere la loro impresa&source=" title="" target="_blank" rel="nofollow"><i class="fa fa-linkedin" aria-hidden="true"></i> <span>LinkedIn</span></a>
            </li>
            </ul>
          </div>
        </header>
        <p>Fai anche tu parte dei professionisti che acquistano contatti di potenziali clienti online? Non sei l’unico perché ci sono migliaia di altri professionisti come te che hanno deciso di utilizzare le piattaforme di preventivi online per poter crescere la loro impresa.</p>
        <p><img src="https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/preventivi-online-cosa-sapere-e-cosa-non-ti-dicono.jpg" alt="Gli artigiani sul web" title="Gli artigiani sul web"/></p>
        <p>Molti professionisti hanno deciso di dare una svolta nella crescita della loro azienda, che sia di costruzioni, pulizia, edilizia o idraulica. Tuttavia ci sono cose che devi conoscere prima di iniziare ad utilizzarli e prima di spendere soldi inutilmente.</p>
        <section>
          <h2>Il funzionamento</h2>
          <p>Come abbiamo già parlato anche in un <a href="/blog/Gli-artigiani-del-web%3A-3-semplici-modi-per-aumentare-i-clienti-online" target="_blank">altro articolo</a> su come aumentare i clienti online, il funzionamento di questi siti è semplice. Ti iscrivi come impresa, inserisci la P.IVA, selezioni la tua professione e inizi a ricevere offerte di lavoro. Ogni volta che c’è una nuova richiesta di preventivo ti arriva una notifica email e un SMS. A quel punto decidi di comprare il contatto e d’inviarli un preventivo. I prezzi variano dai 5 ai 20€ per ogni preventivo o contatto acquistato. Dal altra parte il cliente riceve fino a 5 preventivi da altri professionisti e imprese che hanno acquistato il contatto come te.</p>
        </section>
        <section>
          <h2>Problema</h2>
          <p>Analizziamo i vantaggi e svantaggi. Questi sistemi sono ottimi per trovare contatti e trasformarli in clienti, ma non è detto che il contatto sia reale o veramente interessato. Facendo due conti per ogni preventivo solo 1 su 5 delle imprese vince il lavoro. Quindi in media dovresti fare 5 preventivi per vincere uno. Non solo vincerlo ma anche assicurarti che il cliente sia regolare, che non cambi idea al ultimo minuto è che abbia chiaro la data del inizio dei lavori. Riassumendo in punti i problemi sono:</p>
          <ul>
            <li><strong>Nessuna garanzia di lavoro</strong></li>
            <li><strong>Alto tasso d'insuccesso</strong></li>
            <li><strong>Clienti non interessati</strong></li>
            <li><strong>Molta concorrenza</strong></li>
            <li><strong>Facilmente adatto alle truffe</strong></li>
          </ul>
        </section>
        <section>
          <h2>Soluzione</h2>
          <p>La soluzione non è standard per tutte le imprese che acquistano contatti online. Si potrebbero trovare centinaia di soluzioni validi, ma visto che i sistemi di cui parliamo sono online, le soluzioni si focalizzano in quel contesto. In sintesi le soluzioni sono:</p>
          <ul>
            <li><strong>Verifica dei contatti acquistati</strong></li>
            <li><strong>Controllare l'interessamento del cliente</strong></li>
            <li><strong>Inviare email professionali</strong></li>
            <li><strong>Inviare SMS professionali</strong></li>
            <li><strong>Aumentare il successo dei preventivi online</strong></li>
            <li><strong>Diventare competitivi</strong></li>
          </ul>
          <p>Questi sono delle soluzioni validi per verificare i vostri clienti, crescere il successo dei preventivi, chiedere rimborsi e ovviamente crescere i guadagni.</p>
        </section>
      </article>
      `
    },
    {
      "title" : "Gli artigiani del web: 3 semplici modi per aumentare i clienti online",
      "subtitle" : "Hai un attività professionale, sei artigiano, idraulico, elettricista o altro e vuoi utilizzare il web per aumentare la tua clientela? Il web ti dà tutti gli strumenti adatti per farlo, basta sapere sfruttarli al meglio.",
      "picture_url" : "https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/artigiani-sul-web.jpg",
      "author": {
        "fullname" : "Harald Bregu",
        "headline" : "Sviluppatore, Software, Starbook, Startup",
        "picture_url" : "https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/595ccfb42bf14e6650ce6e3d/avatar/0"
      },
      "updated_at" : "24 Lug 2017",
      "timing" : "3 min lettura",
      "html_body" : `
      <article>
        <header>
          <h1>Gli artigiani del web: 3 semplici modi per aumentare i clienti online</h1>
          <p>
            <time><i class="fa fa-calendar" aria-hidden="true"></i> 24 Lug, 2017</time>
            <time><i class="fa fa-clock-o" aria-hidden="true"></i> 2 min</time>
            <author><i class="fa fa-user" aria-hidden="true"></i> Harald Bregu</author>
          </p>
          <div class="share-links">
            <ul>
            <li class="facebook">
              <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//www.starbook.co/blog/Gli-artigiani-del-web%3A-3-semplici-modi-per-aumentare-i-clienti-online" title="" target="_blank" rel="nofollow"><i class="fa fa-facebook" aria-hidden="true"></i> <span>Facebook</span></a>
            </li>
            <li class="twitter line">
              <a href="https://twitter.com/home?status=https%3A//www.starbook.co/blog/Gli-artigiani-del-web%3A-3-semplici-modi-per-aumentare-i-clienti-online" title="" target="_blank" rel="nofollow"><i class="fa fa-twitter" aria-hidden="true"></i> <span>Twitter</span></a>
            </li>
            <li class="google line">
              <a href="https://plus.google.com/share?url=https%3A//www.starbook.co/blog/Gli-artigiani-del-web%3A-3-semplici-modi-per-aumentare-i-clienti-online" title="" target="_blank" rel="nofollow"><i class="fa fa-google-plus" aria-hidden="true"></i> <span>Google+</span></a>
            </li>
            <li class="pinterest line">
              <a href="https://pinterest.com/pin/create/button/?url=https%3A//www.starbook.co/blog/Gli-artigiani-del-web%3A-3-semplici-modi-per-aumentare-i-clienti-online&media=https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/artigiani-sul-web.jpg&description=Gli artigiani del web: 3 semplici modi per aumentare i clienti online" title="" target="_blank" rel="nofollow"><i class="fa fa-pinterest-p" aria-hidden="true"></i> <span>Pinterest</span></a>
            </li>
            <li class="linkedin line">
              <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//www.starbook.co/blog/Gli-artigiani-del-web%3A-3-semplici-modi-per-aumentare-i-clienti-online&title=&summary=&source=" title="" target="_blank" rel="nofollow"><i class="fa fa-linkedin" aria-hidden="true"></i> <span>LinkedIn</span></a>
            </li>
            </ul>
          </div>
          <p>
          </p>
        </header>
        <p>Hai un attività professionale, sei un artigiano, idraulico, elettricista o altro e vuoi utilizzare il web per aumentare la tua <strong>clientela</strong>? Il web ti dà tutti gli strumenti adatti per farlo, basta sapere sfruttarli al meglio.</p>
        <p><img src="https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/artigiani-sul-web.jpg" alt="Gli artigiani sul web" title="Gli artigiani sul web"/></p>
        <p>Sfruttarlo per aumentare le vostre vendite, crescere il vostre business, vendere i servizi professionali con lo scopo di aumentare il reddito annuale. Ecco quali sono i 3 modi che puoi seguire per utilizzarlo in modo saggio:</p>
        <section>
          <h2>1. Gli annunci</h2>
          <p>Scontato come opzione ma sottovalutato da molti. Ci sono <strong>decina</strong> di siti di annunci disponibili in Italia da anni ormai dove puoi inserire la tua azienda, la tua professione o quello che offri. Siti come <a href="http://www.subito.it/" rel="nofollow" target="_blank">Subito</a>, <a href="http://www.bakeca.it/" rel="nofollow" target="_blank">Bakeca</a>, <a href="https://www.kijiji.it/" rel="nofollow" target="_blank">Kijiji</a>, <a href="https://www.secondamano.it/" rel="nofollow" target="_blank">Secondamano</a> e molte altre. Abbiamo anche i social network come Facebook con i gruppi professionali dove puoi semplicemente iscriverti e pubblicare il tuo annuncio a un pubblico selezionato e mirato.</p>
          <p>Gli annunci anche se un metodo classico di promozione per alcuni professionisti funzionano ancora, ma di certo <strong>esiste di meglio</strong>.</p>
        </section>
        <section>
          <h2>2. Le piattaforme</h2>
          <p>Poi ci sono le piattaforme di servizi locali adatte ai professionisti che vogliono avere un rapporto diretto con il potenziale cliente. Potenziale cliente perché queste piattaforme funzionano tramite l’acquisto di un contatto (il cliente). Dopo l’acquisto è nelle mani del professionista puntare sulla comunicazione e sul prezzo per convertire il contatto in un cliente.</p>
          <p>Tuttavia alcune di queste piattaforme partono con un piano gratuito, altre con un periodo di prova e altre sono a pagamento per sempre. Per elencare alcune: <a href="https://www.prontopro.it/" rel="nofollow" target="_blank">ProntoPro</a>, <a href="https://www.fazland.com/" rel="nofollow" target="_blank">Fazland</a>, <a href="https://www.habitissimo.it/" rel="nofollow" target="_blank">Habitissimo</a>, <a href="https://www.instapro.it/" rel="nofollow" target="_blank">Instapro</a>, <a href="https://www.preventivi.it/" rel="nofollow" target="_blank">Preventivi</a> e molte altre.</p>
          <p>Le scelte attuali di un professionista sono queste ma non è detto che non si possa trovare o fare di meglio.</p>
        </section>
        <section>
          <h2>3. Pubblicità online</h2>
          <p>La pubblicità online invece è un altro metodo valido per poter promuovere la propria attività e acquisire nuovi clienti. Diversamente dagli altri modi questo dipende sia dal tuo annuncio, dal prezzo che spendi per l’annuncio e dalla tua comunicazione.</p>
          <p>Uno strumento semplice da utilizzare se sei confidente con il web e relativamente economico si chiama <a href="https://adwords.google.com/express/" rel="nofollow" target="_blank">Google Adwords Express</a>.</p>
          <p>Un altro strumento è <a href="https://www.facebook.com/business" rel="nofollow" target="_blank">Facebook Ads</a> che è leggermente più complessa ma vale la pena provare.</p>
        </section>
      </article>
      `
    },
    {
      "title" : "Le piattaforme digitali: come gestire il tempo nell'era della new economy",
      "subtitle" : "Il tempo è un'illusione eppure è l'unica risorsa con maggior valore nella nostra vita e nel era digitale il tempo è diventato uno strumento difficile da gestire ma cruciale per sopravvivere.",
      "picture_url" : "https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/online-booking-servizi.png",
      "author": {
        "fullname" : "Harald Bregu",
        "headline" : "Sviluppatore, Software, Starbook, Startup",
        "picture_url" : "https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/595ccfb42bf14e6650ce6e3d/avatar/0"
      },
      "updated_at" : "19 Lug 2017",
      "timing" : "3 min lettura",
      "html_body" : `
      <article>
        <header>
          <h1>Le piattaforme digitali: come gestire il tempo nell'era della new economy</h1>
          <p>
            <time><i class="fa fa-calendar" aria-hidden="true"></i> 19 Lug 2017</time>
            <time><i class="fa fa-clock-o" aria-hidden="true"></i> 3 min</time>
            <author><i class="fa fa-user" aria-hidden="true"></i> Harald Bregu</author>
          </p>
          <div class="share-links">
            <ul>
            <li class="facebook">
              <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//www.starbook.co/blog/Le-piattaforme-digitali%3A-come-gestire-il-tempo-nell'era-della-new-economy" title="" target="_blank" rel="nofollow"><i class="fa fa-facebook" aria-hidden="true"></i> <span>Facebook</span></a>
            </li>
            <li class="twitter line">
              <a href="https://twitter.com/home?status=https%3A//www.starbook.co/blog/Le-piattaforme-digitali%3A-come-gestire-il-tempo-nell'era-della-new-economy" title="" target="_blank" rel="nofollow"><i class="fa fa-twitter" aria-hidden="true"></i> <span>Twitter</span></a>
            </li>
            <li class="google line">
              <a href="https://plus.google.com/share?url=https%3A//www.starbook.co/blog/Le-piattaforme-digitali%3A-come-gestire-il-tempo-nell'era-della-new-economy" title="" target="_blank" rel="nofollow"><i class="fa fa-google-plus" aria-hidden="true"></i> <span>Google+</span></a>
            </li>
            <li class="pinterest line">
              <a href="https://pinterest.com/pin/create/button/?url=https%3A//www.starbook.co/blog/Le-piattaforme-digitali%3A-come-gestire-il-tempo-nell&media=https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/online-booking-servizi.png&description=Le piattaforme digitali: come gestire il tempo nell'era della new economy'era-della-new-economy" title="" target="_blank" rel="nofollow"><i class="fa fa-pinterest-p" aria-hidden="true"></i> <span>Pinterest</span></a>
            </li>
            <li class="linkedin line">
              <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//www.starbook.co/blog/Le-piattaforme-digitali%3A-come-gestire-il-tempo-nell'era-della-new-economy&title=&summary=&source=" title="" target="_blank" rel="nofollow"><i class="fa fa-linkedin" aria-hidden="true"></i> <span>LinkedIn</span></a>
            </li>
            </ul>
          </div>
          <p>
          </p>
        </header>
        <p>Il tempo è un'illusione eppure è l'unica risorsa con maggior valore nella nostra vita e nel era digitale il tempo è diventato uno strumento difficile da gestire ma cruciale per sopravvivere.</p>
        <p><img src="https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/online-booking-servizi.png" alt="Piattaforme digitali" title="Piattaforme digitali"/></p>
        <p>Parliamo dell’economia on demand e della condivisione che hanno avuto un influenza dirompente nel futuro del mondo e del lavoro.</p>
        <section>
          <h2>Perché adattarsi alla nuova era digitale</h2>
          <p>L’economia on demand è l’acquisto di quel particolare bene materiale o prestazione occasionale solo quando hai bisogno senza sprecare tempo. Infatti solo quando hai bisogno di un passaggio in auto chiami un Uber. Quando vuoi mangiare a pranzo, te lo fai portare da Deliveroo, Foodora, JustEat. Quando devi fare delle commissioni, utilizzi Jobby o Vicker che sono nate in Italia negli ultimi mesi. Ce persino l’app dei traslochi Traslochino che ti connette con persone che ti possono aiutare a fare il trasloco.</p>
          <p>Perché non adattarsi se per ogni esigenza o un problema esiste una piattaforma che ti fa risparmiare tempo?</p>
          <p>Potremmo semplicemente dire che viviamo non più nell’era d'internet ma delle piattaforme on demand. Questi grandi componenti dell'economia digitale che occupano maggior parte della nostra vita risolvendo problemi che prima le risolvevamo in un altro modo e più lentamente ma ora ci fanno risparmiare molto tempo.</p>
        </section>
        <section>
          <h2>Il tempo è prezioso, conviene gestirlo</h2>
          <p>Il tempo costa ed è per questo che deve essere sfruttato e non trascurato. Il consiglio non è altro che scegliere la piattaforma o l’app che fa al caso vostro per le vostre esigenze.</p>
          <p>Steve Jobs una volta ha paragonato i computer ad Aristotele, cosi come un mentore per le persone i computer hanno istruito il mondo. Quello che oggi noi vorremo dai computer è di fare ciò che noi ordiniamo di eseguire senza farci perdere tempo.</p>
          <p>Avere un aiutante digitale nella vostra vita che vi aiuta nei lavori di casa, trasporti, nelle commissioni da fare e molto altro ha un enorme vantaggio nel tempo e costi.</p>
        </section>
      </article>
      `
    },
    {
      "title" : "Il booking dei servizi: un fenomeno in crescita destinato ad espandersi",
      "subtitle" : "Nuovi sistemi innovativi, nuove tecnologie è nuovi modi per trovare o prenotare quello che ti serve.",
      "picture_url" : "https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/prenotazioni-servizi-professionali-online.jpg",
      "author": {
        "fullname" : "Starbook Team",
        "headline" : "Piattaforma di booking per i servizi professionali.",
        "picture_url" : "https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/5920099fde98d19d5836ef56/avatar/0"
      },
      "updated_at" : "16 Lug 2017",
      "timing" : "3 min lettura",
      "html_body" : `
      <article>
        <header>
          <h1>Il booking dei servizi: un fenomeno in crescita destinato ad espandersi</h1>
          <p>
            <time datetime="2009-07-13"><i class="fa fa-calendar" aria-hidden="true"></i> 16 Lug 2017</time>
            <time><i class="fa fa-clock-o" aria-hidden="true"></i> 3 min</time>
            <author><i class="fa fa-user" aria-hidden="true"></i> Starbook Team</author>
          </p>
          <div class="share-links">
            <ul>
            <li class="facebook">
              <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//www.starbook.co/blog/Il-booking-dei-servizi%3A-un-fenomeno-in-crescita-destinato-ad-espandersi" title="" target="_blank" rel="nofollow"><i class="fa fa-facebook" aria-hidden="true"></i> <span>Facebook</span></a>
            </li>
            <li class="twitter line">
              <a href="https://twitter.com/home?status=https%3A//www.starbook.co/blog/Il-booking-dei-servizi%3A-un-fenomeno-in-crescita-destinato-ad-espandersi" title="" target="_blank" rel="nofollow"><i class="fa fa-twitter" aria-hidden="true"></i> <span>Twitter</span></a>
            </li>
            <li class="google line">
              <a href="https://plus.google.com/share?url=https%3A//www.starbook.co/blog/Il-booking-dei-servizi%3A-un-fenomeno-in-crescita-destinato-ad-espandersi" title="" target="_blank" rel="nofollow"><i class="fa fa-google-plus" aria-hidden="true"></i> <span>Google+</span></a>
            </li>
            <li class="pinterest line">
              <a href="https://pinterest.com/pin/create/button/?url=https%3A//www.starbook.co/blog/Il-booking-dei-servizi%3A-un-fenomeno-in-crescita-destinato-ad-espandersi&media=https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/prenotazioni-servizi-professionali-online.jpg&description=&description=Il booking dei servizi: un fenomeno in crescita destinato ad espandersi" title="" target="_blank" rel="nofollow"><i class="fa fa-pinterest-p" aria-hidden="true"></i> <span>Pinterest</span></a>
            </li>
            <li class="linkedin line">
              <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//www.starbook.co/blog/Il-booking-dei-servizi%3A-un-fenomeno-in-crescita-destinato-ad-espandersi&title=&summary=&source=" title="" target="_blank" rel="nofollow"><i class="fa fa-linkedin" aria-hidden="true"></i> <span>LinkedIn</span></a>
            </li>
            </ul>
          </div>
        </header>
        <p>Nuovi sistemi innovativi, nuove tecnologie è nuovi modi per trovare o prenotare quello che ti serve.</p>
        <p><img src="https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/prenotazioni-servizi-professionali-online.jpg" alt="Il booking dei servizi" title="Il booking dei servizi"/></p>
        <p>Negli ultimi anni, si è sentito parlare sempre più spesso del booking dei servizi e dei vantaggi che può offrire. Ormai da qualche tempo, infatti, il web si è popolato di piattaforme per la prenotazione di servizi che promettono ai loro utilizzatori notevoli vantaggi in termini non soltanto di tempo, ma anche di denaro: sconti dedicati, professionisti a completa disposizione della clientela e uno staff in grado di garantire il suo supporto sono stati i punti a favore di questo nuovo fenomeno che, stando ad alcune statistiche, sembra destinato ad espandersi. Scopriamo come funziona il booking dei servizi e perché è tanto apprezzato.</p>
        <section>
          <h2>Come funziona e perché ha riscosso tanto successo</h2>
          <p>Il funzionamento dei sistemi di booking on line è in realtà più semplice di quanto si potrebbe pensare. Basta collegarsi alla piattaforma scelta, inserire il tipo di servizio desiderato e la data in cui si desidera godere di quel determinato servizio e avviare la ricerca. In pochi secondi, sarà possibile visualizzare le diverse offerte disponibili e prenotare direttamente l'intervento desiderato.</p>
          <p>Facile intuire il motivo di tanto apprezzamento da parte degli utilizzatori di questo servizio: oltre alla già citata semplicità di utilizzo e ai prezzi convenienti, a rassicurare coloro che scelgono i servizi di booking on line è la selezione dei professionisti che si appoggiano a queste piattaforme. Lo staff, infatti, garantisce che ogni addetto viene scelto per la sua capacità di rispondere alle richieste della clientela, rispettando obblighi di legge e standard elevati. Un ottimo modo per fare sì che domanda e offerta si incontrino.</p>
        </section>
        <section>
          <h2>Un servizio da non sottovalutare</h2>
          <p>Il consiglio, pertanto, non può che essere quello di provare questo tipo di servizio. Sia che si tratti di trovare un professionista che possa tinteggiare casa o, magari, installare dei nuovi sanitari, un motore di ricerca dedicato potrà aiutare il padrone di casa a mettersi in contatto con uno staff attento alle richieste della clientela e in grado di intervenire in poco tempo.</p>
        </section>
      </article>
      `
    },
  ]
  constructor() { }
}
