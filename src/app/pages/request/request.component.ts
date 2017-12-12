import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { NavigationService } from '../../shared/navigation.service';
import * as globals from '../../globals';
import { isBrowser } from "angular2-universal";
import { CommonService } from '../../shared/common.service';
import { MapsService } from '../../maps/maps.service';
import { SeoService } from '../../shared/seo.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
})
export class RequestComponent implements OnInit {
  public steps = []
  public step = ""
  public Request = {
    description: "",
    details: [],
    address: null,
    customer: {
      complete: true,
    },
    status: {
      active: true
    },
    _acl: {
      "*" : {
        read: true
      }
    },
  }
  public RequestState = {
    loading: false,
    error: null,
    created: false,
  }
  public Addresses = []
  public PostDetailOption = globals.PostDetailOption
  public SeoData = {}

  constructor(private router: Router, private route: ActivatedRoute, private navigationService: NavigationService, public commonService: CommonService, private mapsService: MapsService, public myElement: ElementRef, private seoService: SeoService) {
    this.navigationService.updateMessage("Richiesta preventivo")
    this.steps = ["service", "category", "real", "details", "options", "customer", "end"]
    if (this.commonService.readObjectForKey("request_service")) {
      this.Request = this.commonService.readObjectForKey("request_service")
      // console.log("Request array is: \n" + JSON.stringify(this.Request.details))
    }
    this.commonService.scrollToTop()

    this.SeoData['title'] = "Preventivo infissi - Maggior risparmio con la migliore azienda"
    this.SeoData['description'] = "Ricevi Gratis il miglior preventivo qualità/prezzo per il rinnovo o installazione degli infissi. Ti offriamo la migliore azienda della tua zona in poco tempo e senza impegni."
    this.SeoData['url'] = 'https://www.starbook.co' + this.router.url
    this.seoService.setTitle(this.SeoData['title'])
    this.SeoData['image_url'] = "https://s3-eu-west-1.amazonaws.com/starbook-s3/website/richiesta-infissi-serramenti.jpg"

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
    this.route.params.subscribe((params: Params) => {
      this.step = params['step']
      if (!this.step || (this.steps.indexOf(this.step)<0)) {
        this.router.navigate(['request/' + this.steps[0]])
      }
      if (this.RequestState.created && this.step!=="end") {
        this.RequestState.created = false
        this.router.navigate(['request/' + this.steps[0]])
      }
      if (this.step==="end") {
        this.commonService.deleteObjectForKey("request_service")
      }
      if (this.step!=="end") {
        this.commonService.saveObjectForKey(this.Request, "request_service")
      }

      // var keys = Object.keys(this.PostDetailOption)
      // var arr =  _.any(keys, function(key) {
      //   console.log("key: \n" + key)
      //   // return _.isEqual(obj, detail)
      //   if (key==="category") {
      //     return true
      //   }
      // })
      // console.log("arr: \n" + arr)


      // for (let index in keys) {
      //   var key = keys[index]
      //   var page = this.PostDetailOption[key]
      //   // console.log("page: \n" + JSON.stringify(page))
      //   var forms = page.forms
      //   // console.log("forms: \n" + JSON.stringify(forms))
      //   for (let index in forms) {
      //     var form = forms[index]
      //     // console.log("form: \n" + JSON.stringify(form))
      //     for (let index in form.details) {
      //       var detail = form.details[index]
      //       // console.log("detail: \n" + JSON.stringify(detail))
      //       if (this.Request.details.length===0) {
      //         this.router.navigate(['request/' + this.steps[0]])
      //       }
      //       for (let index in this.Request.details) {
      //         var reqDetail = this.Request.details[index]
      //         // console.log("req detail: \n" + JSON.stringify(reqDetail))
      //
      //         if (_.isMatch(detail, reqDetail) && key===this.step) {
      //           break
      //         }
      //         else if (!_.isMatch(detail, reqDetail)) {
      //           this.router.navigate(['request/' + key])
      //           break
      //         }
      //       }
      //     }
      //   }
      // }


      // var page = this.PostDetailOption[this.step]
      //
      // if (page) {
      //   var forms = page.forms
      //   for (let i=0; i<forms.length; i++) {
      //     var form = forms[i]
      //     if (form.required===true) {
      //       var details = form.details
      //       if (details) {
      //         for (let i=0; i<details.length; i++) {
      //           var detail = details[i]
      //           // console.log(JSON.stringify(detail))
      //           var requestDetails = this.Request.details
      //
      //           var objectExist =  _.any(requestDetails, function(obj){
      //             return _.isEqual(obj, detail)
      //           })
      //           console.log("Oject exist: " + objectExist)
      //         }
      //       }
      //     }
      //   }
      // }
    })
  }

  sendRequest() {
    // console.log(JSON.stringify(this.Request))
    if (this.RequestState.loading) { return }
    this.commonService.disableScroll()
    this.RequestState.loading = true

    var errors = "Per favore inserisci i campi: "
    if (!this.Request.customer['firstname']) {
      errors = errors + "Nome, "
    }
    else if (!this.Request.customer['lastname']) {
      errors = errors + "Cognome, "
    }
    else if (!this.Request.customer['email']) {
      errors = errors + "Email, "
    }
    else if (!this.Request.customer['phone_number']) {
      errors = errors + "Telefono, "
    }
    // else if (this.Request.description.length===0) {
    //   errors = errors + "Descrizione, "
    // }
    else if (!this.Request.address || !this.Request.address['postal_code']) {
      errors = errors + "Indirizzo o cap"
    } else {
      errors = null
    }
    this.RequestState.error = errors
    if (this.RequestState.error) {
      this.commonService.enableScroll()
      this.RequestState.loading = false
      return
    }
    this.commonService.saveObjectForKey(this.Request, "request_service")
    // console.log(JSON.stringify(this.Request))
    this.commonService.postMethod('posts', this.Request).then((data) => {
      // console.log(JSON.stringify(data.result))
      this.RequestState.loading = false
      this.RequestState.created = true
      this.commonService.enableScroll()
      this.nextStep()
      this.commonService.deleteObjectForKey("request_service")
    }).catch((error) => {
      this.RequestState.loading = false
      this.commonService.enableScroll()
    })
  }

  nextStep() {
    var currentStepIndex = this.steps.indexOf(this.step)
    var nextStep = this.steps[currentStepIndex+1]

    // If one of previus steps or current is not complete turn back or stay
    // Give an error

    // var keys = Object.keys(this.PostDetailOption)
    //
    // var loadedSteps = []
    // _.some(keys, function(key) {
    //   loadedSteps.push(key)
    //   if (key===nextStep) return true
    // })
    // console.log(loadedSteps)



    // var arr =  _.any(keys, function(key) {
    //   console.log("key: \n" + key)
    //   // return _.isEqual(obj, detail)
    //   if (key===nextStep) {
    //     return true
    //   }
    // })

    // Funziona
    // var a = _.every(keys, function (key, i) {
    //   console.log(i)
    //   // return (key===nextStep)
    //   if (key!==nextStep) {
    //     return true
    //   } else {
    //     return false
    //   }
    // })
    // console.log(a)

    // Ritorna l'oggetto che trova
    // var arr = _.filter(keys, function(key) {
    //   console.log("key is: \n" + key)
    //   if (key==nextStep) return true
    // })
    // console.log(arr)

   //  var filteredArray = _.filter(keys,function(key) {
   //   return (key===nextStep)
   // })
   // var finalArray = _.map(filteredArray, function(obj) {
   //     return obj.myProperty;
   // })
   // console.log(finalArray)


   // _.reduce(keys, function (acc, key) {
   //   if (!key) {
   //     acc.push(key)
   //   }
   //   return acc;
   // }, [])


    // var anyarray = _.any(keys, function (key) {
    //   console.log(key)
    //   if (key==nextStep) return true; // break
    // })
    // console.log(anyarray)

    // console.log("arr prev: \n" + arr)
    // var result = _.filter(keys, function(key) {
    //   return key===nextStep;
    // })
    // console.log("arr prev: \n" + result)

    // var hasValueLessThanTen = keys.some(function (key) {
    //   // return key < 10;
    //   if (key===nextStep) {
    //     return key
    //   }
    // })
    // console.log("arr prev: \n" + hasValueLessThanTen)


    this.router.navigate(['request/' + nextStep])
    this.commonService.scrollToTop()
  }
  previousStep() {
    var currentStepIndex = this.steps.indexOf(this.step)
    var previousStep = this.steps[currentStepIndex-1]

    // Make a query of all since the previus step
    // Turning back if one of the previus step is not complete turn back on that step
    // If they are complete only show the previus step
    // var keys = Object.keys(this.PostDetailOption)
    // var arr =  _.any(keys, function(key) {
    //   console.log("key: \n" + key)
    //   // return _.isEqual(obj, detail)
    //   if (key===previousStep) {
    //     return true
    //   }
    // })
    // console.log("arr next: \n" + arr)

    this.router.navigate(['request/' + previousStep])
    this.commonService.scrollToTop()
  }

  toggleItemInArray(item, array) {
    var isMatch = false
    for(let index in array) {
      var obj = array[index]
      if(_.isMatch(obj, item)) {
        isMatch = true
        break
      }
    }

    if (isMatch) {
      var newArray = _.filter(array, function(object) {
        if (_.isMatch(object, item)) {
          return false
        } else {
          return true
        }
      })
      array = []
      array = newArray
      this.Request.details = array
    } else {
      this.Request.details.push(item)
    }
    // this.commonService.saveObjectForKey(this.Request, "request_service")
    // console.log(JSON.stringify(this.Request.details))

    // var arr = _.filter(array, function(object) {
    //   // console.log("object is: \n" + JSON.stringify(object))
    //
    //   if (_.isMatch(object, {"value":1, "title":"Quantità degli elementi","description":"La quantita degli infissi e serramenti. Ogni infisso viene considerato come un unità.","type":"NUMBER"})) {
    //     console.log("is match")
    //     return false
    //   } else {
    //     console.log("not match")
    //     // array.push(object)
    //     return true
    //   }
    // })


    // var itemExistInArray = _.any(array, function(obj){return _.isEqual(obj, item)})
    // if (!itemExistInArray) {
    //   array.push(item)
    // } else {
    //   // var check = function(thelist, props) {
    //   //   var pnames = _.keys(props)
    //   //   return _.find(thelist, function (obj) {
    //   //     return _.all(pnames, function (pname) {
    //   //       return obj[pname] == props[pname]
    //   //     })
    //   //   })
    //   // }
    //   // var index = _.indexOf(array, item)
    //   // array.splice(index, 1)
    //   // console.log(index)
    //
    //   array = _.filter(array, function(obj){
    //     // if (JSON.stringify(item)===JSON.stringify(obj)) {
    //     //   return false
    //     // }
    //     if (_.isMatch(obj, item)) {
    //       console.log("is match")
    //       return false
    //     } else {
    //       console.log("not match")
    //       return true
    //     }
    //
    //     // return true
    //   })
    //   console.log(JSON.stringify(array))
    //
    // }
    // console.log(JSON.stringify(this.Request))
  }
  selectItemInArray(item, array) {
    if (item.type==="TITLE") {
      for (let i=0; i<array.length; i++) {
        let itm = array[i]
        if (itm.type==="TITLE") {
          array.splice(i, 1)
        }
      }
      array.push(item)
    } else if (item.type==="SERVICE") {
      for (let i=0; i<array.length; i++) {
        let itm = array[i]
        if (itm.type==="SERVICE") {
          array.splice(i, 1)
        }
      }
      array.push(item)
    } else if (item.type==="LOCATION") {
      for (let i=0; i<array.length; i++) {
        let itm = array[i]
        if (itm.type==="LOCATION") {
          array.splice(i, 1)
        }
      }
      array.push(item)
    } else {
      if (array.indexOf(item) === -1) {
        array.push(item)
      }
    }
    this.nextStep()
  }
  arrayContainItem(array, item) {
    var isMatch = false
    for(let index in array) {
      var obj = array[index]
      if(_.isMatch(obj, item)) {
        isMatch = true
        break
      }
    }
    return isMatch
  }
  updateFormItemToArray(item, array) {
    // console.log(item)
    var isMatch = false
    for(let index in array) {
      var obj = array[index]
      if (obj.title===item.title) {
        isMatch = true
        break
      }
      // if(_.isMatch(obj, item)) {
      //   isMatch = true
      //   break
      // }
    }
    // console.log("Match: " + isMatch)
    if (isMatch) {
      // console.log("is match")
      // var newArray = _.filter(array, function(object) {
      //   if (_.isMatch(object, item)) {
      //     return false
      //   } else {
      //     return true
      //   }
      // })
      // array = []
      // array = newArray
      // this.Request.details = array
      // console.log(JSON.stringify(this.Request.details))
    } else {
      // console.log("is not match")
      this.Request.details.push(item)
    }
    // console.log(JSON.stringify(this.Request.details))
    return item.value
  }
  validateItemValue(value, item)  {
    value < 1 ? item.value = 1 : (value > 50 ? item.value = 50 : item.value = value)
  }
  decrementItemValue(item) {
    item.value--
    if (item.value<1) { item.value = 1}
  }
  incrementItemValue(item) {
    item.value++
    if (item.value>50) { item.value = 50}
  }

  getAddresses(event) {
    this.mapsService.getAddresses(event.query).then((addresses) => {
      this.Addresses = []
      this.Addresses = addresses
      // console.log(JSON.stringify(addresses))
    }).catch((error) => {
      // console.log(error);
    })
  }
  selectAddress(value) {
    this.Request.address = value
  }
  setProgressWidth() {
    var numSteps = this.steps.length;
    var currentStep = this.steps.indexOf(this.step) + 1
    return 100/numSteps * currentStep + '%'
  }
  selectStepAtIndex(index) {
    if (this.step==="service") { 
      if (index<1) {
        return true
      }
    }
    else if (this.step==="category" || this.step==="real") {
      if (index<2) {
        return true
      }
    }
    else if (this.step==="details" || this.step==="options") {
      if (index<3) {
        return true
      }
    } else if (this.step==="customer") {
      if (index<4) {
        return true
      }
    } else if (this.step==="end") {
      if (index<5) {
        return true
      }
    }
  }
  getSteps() {
    return [
      {
        title: "Servizio",
        icon: "fa-briefcase",
        selected: false,
      },
      {
        title: "Categoria",
        icon: "fa-th",
        selected: false,
      },
      {
        title: "Dettagli",
        icon: "fa-info",
        selected: false,
      },
      {
        title: "Cliente",
        icon: "fa-user",
        selected: false,
      },
      {
        title: "Fine",
        icon: "fa-check",
        selected: false,
      },
    ]
  }
}
