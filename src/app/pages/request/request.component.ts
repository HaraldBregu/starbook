import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { NavigationService } from '../../shared/navigation.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
})
export class RequestComponent implements OnInit {
  public steps = []
  public step = ''
  public loading = false

  constructor(private router: Router, private route: ActivatedRoute, private navigationService: NavigationService) {
    this.navigationService.updateMessage("Richiesta serramenti")
    this.steps = ["propriety", "service", "details", "budget", "timing", "quality", "address", "customer", "end"]
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.step = params['step']
      if (!this.step || (this.steps.indexOf(this.step)<0)) {
        this.router.navigate(['request/' + this.steps[0]])
      }

      // if (this.step==='title') {
      //
      // }
      // else {
      //   this.router.navigate(['request/title']);
      // }

    })
  }

  nextStep() {
    var currentStepIndex = this.steps.indexOf(this.step)
    var nextStep = this.steps[currentStepIndex+1]
    this.router.navigate(['request/' + nextStep]);
  }
  previousStep() {
    var currentStepIndex = this.steps.indexOf(this.step)
    var previousStep = this.steps[currentStepIndex-1]
    this.router.navigate(['request/' + previousStep]);
  }
  getProgressWidth() {
    var numSteps = this.steps.length;
    var currentStep = this.steps.indexOf(this.step) + 1
    return 100/numSteps * currentStep + '%'
  }
}
