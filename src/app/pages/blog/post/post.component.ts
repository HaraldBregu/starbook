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
        "title" : "Il booking dei servizi: un fenomeno in crescita destinato ad espandersi",
        "subtitle" : "Nuovi sistemi innovativi, nuove tecnologie è nuovi modi per trovare o prenotare quello che ti serve.",
        "picture_url" : "https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/prenotazioni-servizi-professionali-online.jpg",
        "markdown_body" : `
        \n*Nuovi sistemi innovativi, nuove tecnologie è nuovi modi per trovare o prenotare quello che ti serve.*

        \n![Il booking dei servizi](https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/prenotazioni-servizi-professionali-online.jpg "Il booking dei servizi")

        \nNegli ultimi anni, si è sentito parlare sempre più spesso del booking dei servizi e dei vantaggi che può offrire. Ormai da qualche tempo, infatti, il web si è popolato di piattaforme per la prenotazione di servizi che promettono ai loro utilizzatori notevoli vantaggi in termini non soltanto di tempo, ma anche di denaro: sconti dedicati, professionisti a completa disposizione della clientela e uno staff in grado di garantire il suo supporto sono stati i punti a favore di questo nuovo fenomeno che, stando ad alcune statistiche, sembra destinato ad espandersi. Scopriamo come funziona il booking dei servizi e perché è tanto apprezzato.
        \n## Come funziona e perché ha riscosso tanto successo
        \nIl funzionamento dei sistemi di booking on line è in realtà più semplice di quanto si potrebbe pensare. Basta collegarsi alla piattaforma scelta, inserire il tipo di servizio desiderato e la data in cui si desidera godere di quel determinato servizio e avviare la ricerca. In pochi secondi, sarà possibile visualizzare le diverse offerte disponibili e prenotare direttamente l'intervento desiderato.
        \nFacile intuire il motivo di tanto apprezzamento da parte degli utilizzatori di questo servizio: oltre alla già citata semplicità di utilizzo e ai prezzi convenienti, a rassicurare coloro che scelgono i servizi di booking on line è la selezione dei professionisti che si appoggiano a queste piattaforme. Lo staff, infatti, garantisce che ogni addetto viene scelto per la sua capacità di rispondere alle richieste della clientela, rispettando obblighi di legge e standard elevati. Un ottimo modo per fare sì che domanda e offerta si incontrino.
        \n## Un servizio da non sottovalutare
        \nIl consiglio, pertanto, non può che essere quello di provare questo tipo di servizio. Sia che si tratti di trovare un professionista che possa tinteggiare casa o, magari, installare dei nuovi sanitari, un motore di ricerca dedicato potrà aiutare il padrone di casa a mettersi in contatto con uno staff attento alle richieste della clientela e in grado di intervenire in poco tempo.
        `,
        "author": {
          "fullname" : "Starbook Team",
          "headline" : "Piattaforma di booking per i servizi professionali.",
          "picture_url" : "https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/5920099fde98d19d5836ef56/avatar/0"
        },
        "updated_at" : "16 Lug 2017",
        "timing" : "3 min lettura"
      },
      {
        "title" : "Le piattaforme digitali: come gestire il tempo nell'era della new economy",
        "subtitle" : "Il tempo è un'illusione eppure è l'unica risorsa con maggior valore nella nostra vita e nel era digitale il tempo è diventato uno strumento difficile da gestire ma cruciale per sopravvivere.",
        "picture_url" : "https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/online-booking-servizi.png",
        "markdown_body" : `
        \n*Il tempo è un'illusione eppure è l'unica risorsa con maggior valore nella nostra vita e nel era digitale il tempo è diventato uno strumento difficile da gestire ma cruciale per sopravvivere.*

        \n![Piattaforme digitali](https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/online-booking-servizi.png "Piattaforme digitali")

        \nNegli ultimi anni molte piattaforme, alcune per le esigenze altre per risolvere  problemi importanti sono nate e hanno avuto un notevole successo proprio perché hanno anticipato quello che il mondo avrebbe avuto bisogno oggi.

        \nParliamo dell’economia on demand e della condivisione che hanno avuto un influenza dirompente nel futuro del mondo e del lavoro.
        \n## Perché adattarsi alla nuova era digitale
        \nL’economia on demand è l’acquisto di quel particolare bene materiale o prestazione occasionale solo quando hai bisogno senza sprecare tempo. Infatti solo quando hai bisogno di un passaggio in auto chiami un Uber. Quando vuoi mangiare a pranzo, te lo fai portare da Deliveroo, Foodora, JustEat. Quando devi fare delle commissioni, utilizzi Jobby o Vicker che sono nate in Italia negli ultimi mesi. Ce persino l’app dei traslochi Traslochino che ti connette con persone che ti possono aiutare a fare il trasloco.
        \nPerché non adattarsi se per ogni esigenza o un problema esiste una piattaforma che ti fa risparmiare tempo?
        \nPotremmo semplicemente dire che viviamo non più nell’era d'internet ma delle piattaforme on demand. Questi grandi componenti dell'economia digitale che occupano maggior parte della nostra vita risolvendo problemi che prima le risolvevamo in un altro modo e più lentamente ma ora ci fanno risparmiare molto tempo.
        \n## Il tempo è prezioso, conviene gestirlo
        \nIl tempo costa ed è per questo che deve essere sfruttato e non trascurato. Il consiglio non è altro che scegliere la piattaforma o l’app che fa al caso vostro per le vostre esigenze.

        \nSteve Jobs una volta ha paragonato i computer ad Aristotele, cosi come un mentore per le persone i computer hanno istruito il mondo. Quello che oggi noi vorremo dai computer è di fare ciò che noi ordiniamo di eseguire senza farci perdere tempo.

        \nAvere un aiutante digitale nella vostra vita che vi aiuta nei lavori di casa, trasporti, nelle commissioni da fare e molto altro ha un enorme vantaggio nel tempo e costi.
        `,
        "author": {
          "fullname" : "Harald Bregu",
          "headline" : "Sviluppatore, Software, Starbook, Startup",
          "picture_url" : "https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/595ccfb42bf14e6650ce6e3d/avatar/0"
        },
        "updated_at" : "19 Lug 2017",
        "timing" : "3 min lettura"
      },
    ]
  }
  public selectedArticle = null
  public SeoData = {}

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
}
