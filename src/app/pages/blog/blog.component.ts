import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { SeoService } from '../../shared/seo.service';
import { NavigationService } from '../../shared/navigation.service';
import { PostsService } from './posts.service';
import { ContactService } from '../../shared/contact.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
})
export class BlogComponent implements OnInit {
  public articles = []
  public SeoData = {}
  public Lead = {
    email : '',
    loading : false,
    generated: false
  }

  constructor(private router: Router, private navigationService: NavigationService, private seoService: SeoService, private postsService: PostsService, private contactService: ContactService) {
    this.navigationService.updateMessage("")
    this.articles = this.postsService.articles
    this.SeoData['title'] = "Starbook Blog"
    this.SeoData['description'] = "Starbook è una piattaforma che ti connette ai professionisti in modo piu sicuro e diretto."
    this.SeoData['url'] = "https://www.starbook.co/blog/Il-booking-dei-servizi%3A-un-fenomeno-in-crescita-destinatoad-espandersi"
    this.SeoData['image_url'] = "https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/prenotazioni-servizi-professionali-online.jpg"
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
  }

  ngOnInit() {

  }

  showArticle(article) {
    this.router.navigate(['/blog/' + article.title.replace(/\s+/g, '-')])
  }

  // LEAD
  sendEmail() {
    if (this.Lead.email.length===0) {return}
    if (this.Lead.loading) {return}
    var email = {
      subject : "Iscrizione agli aggiornamenti blog",
      message : 'email: ' + this.Lead.email
    }
    this.Lead.loading = true
    this.contactService.sendEmail(email).then((response) => {
      this.Lead.loading = false
      this.Lead.generated = true
    }).catch((error) => {
      this.Lead.loading = false
      this.Lead.generated = true
    });
  }
}
