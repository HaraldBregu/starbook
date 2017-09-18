import { Injectable } from '@angular/core';

@Injectable()
export class PostsService {
  public articles = [
    {
      "title" : "Preventivi dinamici: come funzionano e perché usarli",
      "subtitle" : "Avrai sicuramente inviato preventivi almeno una volta nella vita se sei un professionista. Quello che non hai visto è quanto sia stato efficiente la tua offerta. La soluzione? Semplice, utilizzando i preventivi dinamici misurabili e professionali.",
      "picture_url" : "https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/preventivi-dinamici-blog.png",
      "author": {
        "fullname" : "Harald Bregu",
        "headline" : "Sviluppatore, Software, Starbook, Startup",
        "picture_url" : "https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/595ccfb42bf14e6650ce6e3d/avatar/0"
      },
      "updated_at" : "18 Set 2017",
      "timing" : "3 min lettura",
      "html_body" : `
      <article>
        <header>
          <h1>Preventivi dinamici: come funzionano e perché usarli</h1>
          <p>
            <time><i class="fa fa-calendar" aria-hidden="true"></i> 18 Set 2017</time>
            <time><i class="fa fa-clock-o" aria-hidden="true"></i> 3 min</time>
            <author><i class="fa fa-user" aria-hidden="true"></i> Harald Bregu</author>
          </p>
          <div class="share-links">
            <ul>
            <li class="facebook">
              <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//www.starbook.co/blog/Preventivi-dinamici%3A-come-funzionano-e-perché-usarli" title="" target="_blank" rel="nofollow"><i class="fa fa-facebook" aria-hidden="true"></i> <span>Facebook</span></a>
            </li>
            <li class="twitter line">
              <a href="https://twitter.com/home?status=https%3A//www.starbook.co/blog/Preventivi-dinamici%3A-come-funzionano-e-perché-usarli" title="" target="_blank" rel="nofollow"><i class="fa fa-twitter" aria-hidden="true"></i> <span>Twitter</span></a>
            </li>
            <li class="google line">
              <a href="https://plus.google.com/share?url=https%3A//www.starbook.co/blog/Preventivi-dinamici%3A-come-funzionano-e-perché-usarli" title="" target="_blank" rel="nofollow"><i class="fa fa-google-plus" aria-hidden="true"></i> <span>Google+</span></a>
            </li>
            <li class="pinterest line">
              <a href="https://pinterest.com/pin/create/button/?url=https%3A//www.starbook.co/blog/Preventivi-dinamici%3A-come-funzionano-e-perché-usarli&media=https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/preventivi-dinamici-blog.png&description=Preventivi dinamici: come funzionano e perché usarli?" title="" target="_blank" rel="nofollow"><i class="fa fa-pinterest-p" aria-hidden="true"></i> <span>Pinterest</span></a>
            </li>
            <li class="linkedin line">
              <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//www.starbook.co/blog/Preventivi-dinamici%3A-come-funzionano-e-perché-usarli&title=Preventivi dinamici: come funzionano e perché usarli?&summary=Avrai sicuramente inviato preventivi almeno una volta per acqisire un potenziale cliente. A volte è andato bene ed è stato accettato dal cliente, altre volte invece non è andato a buon fine. Quelle volte che non è andato come speravi non sapevi nemmeno il motivo.&source=" title="" target="_blank" rel="nofollow"><i class="fa fa-linkedin" aria-hidden="true"></i> <span>LinkedIn</span></a>
            </li>
            </ul>
          </div>
        </header>
        <p>Avrai sicuramente inviato preventivi almeno una volta per acquisire un potenziale cliente. A volte è andato bene ed è stato accettato dal cliente, altre volte invece non è andato a buon fine. Quelle volte che non è andato come speravi non sapevi nemmeno il motivo. </p>
        <p><img src="https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/preventivi-dinamici-blog.png" alt="Preventivi dinamici" title="Preventivi dinamici"/></p>
        <p>Con i preventivi dinamici si può fare più di una semplice proposta al tuo cliente. Puoi inviare la tua proposta in modo più professionale e attivando anche le notifiche in modo da arrivare al cliente prima dei tuoi concorrenti.</p>
        <section>
          <h2>1. Crea</h2>
          <p>Scrivi il preventivo come qualsiasi altro preventivo. Inserisci un titolo e la descrizione della tua offerta. <a href="https://www.starbook.co/company/quotations" rel="nofollow" target="_blank">Inizia qui.</a></p>
          <p><img src="https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/oggetto-preventivo.png" alt="Oggetto del preventivo e la descrizione" title="Oggetto del preventivo e la descrizione"/></p>
        </section>
        <section>
          <h2>2. Dati del cliente</h2>
          <p>Inserisci i dati del cliente per poter inviare il preventivo, nome, cognome, email e telefono.</p>
          <p><img src="https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/dati-cliente-preventivo.png" alt="Dati del cliente sul preventivo" title="Dati del cliente sul preventivo"/></p>
        </section>
        <section>
          <h2>3. Opzioni</h2>
          <p>Hai un opzione per il formato <strong>PDF</strong> e un opzione per la notifica tramite <strong>SMS</strong>. Il <strong>PDF</strong> viene allegato al preventivo spedito, invece <strong>l’SMS</strong> viene utilizzato per notificare il potenziale cliente prima dei tuoi concorrenti.</p>
          <p><img src="https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/opzioni-preventivo.png" alt="Opzioni del preventivo" title="Opzioni del preventivo"/></p>
        </section>
        <section>
          <h2>4. Invia preventivo</h2>
          <p>Invia il preventivo dopo aver inserito tutti i campi del form. Se hai scelto le opzioni SMS e PDF di verrà addebitato 50 cent per ciascuna. Se invece invii il preventivo senza nessun opzione il cliente riceverà solo la mail.</p>
          <p><img src="https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/invia-preventivo.png" alt="Invia preventivo" title="Invia preventivo"/></p>
        </section>
        <section>
          <h2>5. Analizza</h2>
          <p>Dopo aver inviato il preventivo vedrai e analizzerai quante volte il cliente ha aperto il preventivo e ha visto la pagina della tua offerta. In questo modo puoi sapere se il tuo preventivo è stato efficiente o meno.</p>
          <p><img src="https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/analizza-preventivo.png" alt="Analizza il preventivo" title="Analizza il preventivo"/></p>
        </section>
      </article>
      `
    },
    {
      "title" : "Crescere la tua impresa online, facile come fissare un tassello",
      "subtitle" : "Ci sono due scenari: primo che hai un'impresa edile giovane e che vuoi farla crescere, secondo è che hai già un'impresa edile ma che è in crisi e non hai fatturato abbastanza l’ultimo anno. La soluzione è semplice, investi online per incrementare il fatturato e crescere la tua impresa.",
      "picture_url" : "https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/crescere-la-tua-impresa-online-facile-come-fissare-un-tassello.jpg",
      "author": {
        "fullname" : "Harald Bregu",
        "headline" : "Sviluppatore, Software, Starbook, Startup",
        "picture_url" : "https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/595ccfb42bf14e6650ce6e3d/avatar/0"
      },
      "updated_at" : "31 Lug 2017",
      "timing" : "2 min lettura",
      "html_body" : `
      <article>
        <header>
          <h1>Crescere la tua impresa online, facile come fissare un tassello</h1>
          <p>
            <time><i class="fa fa-calendar" aria-hidden="true"></i> 31 Lug, 2017</time>
            <time><i class="fa fa-clock-o" aria-hidden="true"></i> 2 min</time>
            <author><i class="fa fa-user" aria-hidden="true"></i> Harald Bregu</author>
          </p>
          <div class="share-links">
            <ul>
            <li class="facebook">
              <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//www.starbook.co/blog/Crescere-la-tua-impresa-online%2C-facile-come-fissare-un-tassello" title="" target="_blank" rel="nofollow"><i class="fa fa-facebook" aria-hidden="true"></i> <span>Facebook</span></a>
            </li>
            <li class="twitter line">
              <a href="https://twitter.com/home?status=https%3A//www.starbook.co/blog/Crescere-la-tua-impresa-online%2C-facile-come-fissare-un-tassello" title="" target="_blank" rel="nofollow"><i class="fa fa-twitter" aria-hidden="true"></i> <span>Twitter</span></a>
            </li>
            <li class="google line">
              <a href="https://plus.google.com/share?url=https%3A//www.starbook.co/blog/Crescere-la-tua-impresa-online%2C-facile-come-fissare-un-tassello" title="" target="_blank" rel="nofollow"><i class="fa fa-google-plus" aria-hidden="true"></i> <span>Google+</span></a>
            </li>
            <li class="pinterest line">
              <a href="https://pinterest.com/pin/create/button/?url=https%3A//www.starbook.co/blog/Crescere-la-tua-impresa-online%2C-facile-come-fissare-un-tassello&media=https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/crescere-la-tua-impresa-online-facile-come-fissare-un-tassello.jpg&description=Crescere la tua impresa online, facile come fissare un tassello" title="" target="_blank" rel="nofollow"><i class="fa fa-pinterest-p" aria-hidden="true"></i> <span>Pinterest</span></a>
            </li>
            <li class="linkedin line">
              <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//www.starbook.co/blog/Crescere-la-tua-impresa-online%2C-facile-come-fissare-un-tassello&title=Crescere la tua impresa online, facile come fissare un tassello&summary=Ci sono due scenari: primo che hai un'impresa edile giovane e che vuoi farla crescere, secondo è che hai già un'impresa edile ma che è in crisi e non hai fatturato abbastanza l’ultimo anno. La soluzione è semplice, investi online per incrementare il fatturato e crescere la tua impresa&source=" title="" target="_blank" rel="nofollow"><i class="fa fa-linkedin" aria-hidden="true"></i> <span>LinkedIn</span></a>
            </li>
            </ul>
          </div>
        </header>
        <p>Ci sono <strong>due</strong> scenari: <strong>primo</strong> che hai un'impresa edile giovane e che vuoi farla crescere, <strong>secondo</strong> è che hai già un'impresa edile ma che è in crisi e non hai fatturato abbastanza l’ultimo anno. La soluzione è semplice, investi online per incrementare il fatturato e crescere la tua impresa.</p>
        <p><img src="https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/crescere-la-tua-impresa-online-facile-come-fissare-un-tassello.jpg" alt="Gli artigiani sul web" title="Gli artigiani sul web"/></p>
        <p>Pochi sono quelli che utilizzano il web come uno strumento per poter crescere la propria attività e in questo caso la loro impresa edile. Proprio per questo fatto solo chi sarà tra i primi a utilizzare il web nel modo corretto avrà i benefici. Non pensarci troppo, mettiti seduto per 2 minuti, leggi questo articolo e scopri perché il web e la tua salvezza.</p>
        <section>
          <h2>Più web, più clienti</h2>
          <p>Il web non è solo uno strumento di divertimento. Si possono trovare <strong>migliaia di clienti</strong> utilizzando i canali giusti. Nel web non hai bisogno di essere conosciuto per poter trovare un cliente, ti basta migliorare la tua <strong>immagine aziendale</strong> e <strong>tecniche di marketing</strong> per farlo. Adesso i consumatori sono più fiduciari nei sistemi digitali. Comprano, prenotano senza avere il timore di essere truffati. Il web stesso è più sicuro che mai, le transazioni sono più sicure. Quindi offrire i tuoi servizi online è già un <strong>vantaggio competitivo</strong> che dovresti avere.</p>
        </section>
        <section>
          <h2>Poca concorrenza</h2>
          <p>Essendo che il web venga utilizzato da pochi impresari, la <strong>concorrenza è minima</strong> ed è un altro motivo perché dovresti investire per trovare clienti online invece che continuare con i sistemi tradizionali. La concorrenza non lo batterai mai con la qualità del tuo lavoro ma innovandoti giorno dopo giorno, nuovi sistemi di promozione ogni giorno e avrai sempre <strong>nuove opportunità</strong>.</p>
        </section>
        <section>
          <h2>Prezzo giusto ma più guadagni</h2>
          <p>Un altro motivo perché dovresti utilizzare il web per promuovere la tua attività è che non devi fare <strong>troppi sconti</strong>. Se sei unico sei anche prezioso e quindi il cliente non ha molta scelta. L’innovazione ti permette di essere <strong>all’avanguardia</strong> e di decidere anche il prezzo. Questo ti permette non solo di lavorare nel modo giusto ma anche di <strong>crescere i guadagni</strong> e il fatturato.</p>
        </section>
        <section>
          <h2>Vuoi sapere di più? Inviami la tua email qui sotto.</h2>
        </section>
      </article>
      `
    },
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
