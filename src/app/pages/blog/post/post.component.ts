import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { SeoService } from '../../../shared/seo.service';
import { NavigationService } from '../../../shared/navigation.service';
import { isBrowser } from 'angular2-universal';
import { CommonService } from '../../../shared/common.service';
import { FacebookService, InitParams } from 'ngx-facebook';
import { ContactService } from '../../../shared/contact.service';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html'
})
export class PostComponent implements OnInit {
  public browser = false
  public articles = []
  public selectedArticle = null
  public SeoData = {}
  public Lead = {
    email : '',
    loading : false,
    generated: false
  }

  constructor(private router: Router, private route: ActivatedRoute, private navigationService: NavigationService, private seoService: SeoService, private commonService: CommonService, private fb: FacebookService, private contactService: ContactService, private postsService: PostsService) {
    this.articles = this.postsService.articles

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['article']) {
        var page = params['article']
        var stringpage = page.replace(/-/g, ' ')
        for (var i in this.articles) {
          var article = this.articles[i]
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


  // LEAD
  sendEmail() {
    if (this.Lead.email.length===0) {return}
    if (this.Lead.loading) {return}
    var email = {
      subject : "Iscrizione agli aggiornamenti sull'artigianato",
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

  // Share links
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
