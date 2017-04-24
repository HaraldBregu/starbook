import { Injectable } from '@angular/core';
import { isBrowser } from 'angular2-universal';
declare let ga: Function;

export interface ITiming {
  category: string;
  timingVar: string;
  timingValue: number;
}

export interface IEvent {
  category: string;
  action: string;
  label: string;
}

@Injectable()
export class AnalyticsService {

  constructor() { }

  sendTiming(timingData: ITiming) {
    if(isBrowser) {
      ga('send', 'timing', timingData.category, timingData.timingVar, timingData.timingValue);
    }
  }

  sendEvent(event: IEvent) {
    if (isBrowser) {
      ga('send', 'event', event.category, event.action, event.label);
    }
  }

  sendPageViewUrl(url) {
    if (isBrowser) {
      ga('send', 'pageview', url);
    }
  }
}
