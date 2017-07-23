import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { SeoService } from '../../../shared/seo.service';
import { NavigationService } from '../../../shared/navigation.service';
import { isBrowser } from 'angular2-universal';
import { CommonService } from '../../../shared/common.service';
import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html'
})
export class PostComponent implements OnInit {
  public browser = false
  public blog = {
    title: "",
    articles: [
      {
        "title" : "Gli artigiani del web: 3 semplici modi per aumentare i clienti online",
        "subtitle" : "Hai un attività professionale, sei artigiano, idraulico, elettricista o altro e vuoi utilizzare il web per aumentare la tua clientela? Il web ti da tutti gli strumenti adatti per farlo, basta sapere sfruttarli al meglio.",
        "picture_url" : "https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/artigiani-sul-web.jpg",
        "html_body" : `
        <article>
          <header>
            <h1>Gli artigiani del web: 3 semplici modi per aumentare i clienti online</h1>
            <p>
              <time><i class="fa fa-calendar" aria-hidden="true"></i> 23 Lug, 2017</time>
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
                <a href="https://pinterest.com/pin/create/button/?url=&media=https%3A//www.starbook.co/blog/Gli-artigiani-del-web%3A-3-semplici-modi-per-aumentare-i-clienti-online&description=" title="" target="_blank" rel="nofollow"><i class="fa fa-pinterest-p" aria-hidden="true"></i> <span>Pinterest</span></a>
              </li>
              <li class="linkedin line">
                <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//www.starbook.co/blog/Gli-artigiani-del-web%3A-3-semplici-modi-per-aumentare-i-clienti-online&title=&summary=&source=" title="" target="_blank" rel="nofollow"><i class="fa fa-linkedin" aria-hidden="true"></i> <span>LinkedIn</span></a>
              </li>
              </ul>
            </div>
            <p>
            </p>
          </header>
          <p>Hai un attività professionale, sei un artigiano, idraulico, elettricista o altro e vuoi utilizzare il web per aumentare la tua <strong>clientela</strong>? Il web ti da tutti gli strumenti adatti per farlo, basta sapere sfruttarli al meglio.</p>
          <p><img src="https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/artigiani-sul-web.jpg" alt="Gli artigiani sul web" title="Gli artigiani sul web"/></p>
          <p>Sfruttarlo per aumentare le vostre vendite, crescere il vostre business, vendere i servizi professionali con lo scopo di aumentare il reddito annuale. Ecco quali sono i 3 modi che puoi seguire per utilizzarlo in modo saggio:</p>
          <section>
            <h2>1. Gli annunci</h2>
            <p>Scontato come opzione ma sottovalutato da molti. Ci sono <strong>decina</strong> di siti di annunci disponibili in Italia da anni ormai dove hai la possibilità di inserire l’annuncio della tua azienda, la tua professione o quello che offri in siti come <a href="http://www.subito.it/" rel="nofollow" target="_blank">Subito</a>, <a href="http://www.bakeca.it/" rel="nofollow" target="_blank">Bakeca</a>, <a href="https://www.kijiji.it/" rel="nofollow" target="_blank">Kijiji</a>, <a href="https://www.secondamano.it/" rel="nofollow" target="_blank">Secondamano</a> e molte altre. Abbiamo anche i social network come Facebook con i gruppi professionali dove puoi semplicemente iscriverti e pubblicare il tuo annuncio ad un pubblico selezionato e mirato.</p>
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
                <a href="https://pinterest.com/pin/create/button/?url=&media=https%3A//www.starbook.co/blog/Le-piattaforme-digitali%3A-come-gestire-il-tempo-nell'era-della-new-economy&description=" title="" target="_blank" rel="nofollow"><i class="fa fa-pinterest-p" aria-hidden="true"></i> <span>Pinterest</span></a>
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
                <a href="https://pinterest.com/pin/create/button/?url=&media=https%3A//www.starbook.co/blog/Il-booking-dei-servizi%3A-un-fenomeno-in-crescita-destinato-ad-espandersi&description=" title="" target="_blank" rel="nofollow"><i class="fa fa-pinterest-p" aria-hidden="true"></i> <span>Pinterest</span></a>
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
  }
  public selectedArticle = null
  public SeoData = {}

  public esempio = "<h1>Ciao bello</h1>"

  constructor(private router: Router, private route: ActivatedRoute, private navigationService: NavigationService, private seoService: SeoService, private commonService: CommonService, private fb: FacebookService) {
    // var link = document.location.protocol + '//'+ document.location.hostname
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['article']) {
        var page = params['article']
        var stringpage = page.replace(/-/g, ' ')
        for (var i in this.blog.articles) {
          var article = this.blog.articles[i]
          if (article.title === stringpage) {

            this.SeoData['title'] = article.title
            this.SeoData['description'] = article.subtitle
            this.SeoData['url'] = 'https://www.starbook.co/blog/' + article.title
            this.SeoData['image_url'] = article.picture_url
            this.seoService.setTitle(this.SeoData['title'])
            this.seoService.setMetaElem('description', this.SeoData['description'])
            this.seoService.setOgElem('twitter:card', "summary_large_image")
            this.seoService.setOgElem('twitter:title', this.SeoData['title'])
            this.seoService.setOgElem('twitter:site', "@starbookco")
            this.seoService.setOgElem('twitter:creator', "@HaraldBregu")
            this.seoService.setOgElem('twitter:description', this.SeoData['description'])
            this.seoService.setOgElem('twitter:image', this.SeoData['image_url'])
            this.seoService.setOgElem('og:title', this.SeoData['title'])
            this.seoService.setOgElem('og:description', this.SeoData['description'])
            this.seoService.setOgElem('og:url', this.SeoData['url'])
            this.seoService.setOgElem('og:image', this.SeoData['image_url'])
            this.seoService.setOgElem('og:image:secure_url', this.SeoData['image_url'])

            this.selectedArticle = article
            break;
          }
        }
        if (!this.selectedArticle) {
          this.router.navigate(['/blog'])
        }
      }
    })
    if (isBrowser) {
      this.browser = true;
      window.scrollTo(0, 0)
      let initParams: InitParams = {
        appId: '1108461325907277',
        xfbml: true,
        version: 'v2.8'
      };
      this.fb.init(initParams);
    }
  }

  shareOnFacebook() {
    if (isBrowser) {
      // var sharelink = window.location.href
      var sharelink =  document.location.protocol + '//'+ document.location.hostname + this.router.url
      let left = Math.round((document.documentElement.clientWidth / 2) - 285);
      window.open("http://www.facebook.com/sharer/sharer.php?s=100&u=" + sharelink,
      '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
      return false
    }
  }
  shareOnTwitter() {
    if (isBrowser) {
      // var sharelink = window.location.href
      // var sharelink =  document.location.protocol + '//'+ document.location.hostname +  encodeURI(this.router.url)
      var sharelink =  document.location.protocol + '//'+ document.location.hostname + this.router.url
      let left = Math.round((document.documentElement.clientWidth / 2) - 285);
      window.open("https://twitter.com/home?status=" + sharelink,
      '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
      return false
    }
  }
  shareOnLinkedin() {
    if (isBrowser) {
      // var sharelink = window.location.href
      var sharelink =  document.location.protocol + '//'+ document.location.hostname + this.router.url
      let link = sharelink;
      let title = "Titolo";
      let summary = "Summary";
      let source = "";
      let left = Math.round((document.documentElement.clientWidth / 2) - 285);
      window.open("https://www.linkedin.com/shareArticle?mini=true&url=" + link + "&title=" + title + "&summary=" + summary + "&source=" + source,
      '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
      return false
    }
  }

  shareLink() {
    console.log('share link');
  }
}
