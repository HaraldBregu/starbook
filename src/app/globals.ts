'use strict';

// export const sep='/';
// export const version: string="22.2.2";

export const emailPattern = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

export const it_calendar = {
  firstDayOfWeek: 1,
  dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  dayNamesMin: ['Do', 'Lu', 'Ma', 'Me', 'Gi', 'Ve', 'Sa'],
  monthNames: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno',
    'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
  monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
}

export const months = [
  { value: 0, display: "mese" },
  { value: 1, display: "Gennaio" },
  { value: 2, display: "Febbraio" },
  { value: 3, display: "Marzo" },
  { value: 4, display: "Aprile" },
  { value: 5, display: "Maggio" },
  { value: 6, display: "Giugno" },
  { value: 7, display: "Luglio" },
  { value: 8, display: "Agosto" },
  { value: 9, display: "Settembre" },
  { value: 10, display: "Ottobre" },
  { value: 11, display: "Novembre" },
  { value: 12, display: "Dicembre" },
];

export const genders = [
  { value: 'none', display:"seleziona" },
  { value: 'female', display:"Donna" },
  { value: 'male', display:"Uomo" },
  { value: 'other', display:"Altro" }
];

export const contact_platforms = [
  { value: 'none', display:"nessuno" },
  { value: 'Habitissimo.it', display:"Habitissimo.it" },
  { value: 'Preventivi.it', display:"Preventivi.it" },
  { value: 'Fazland.com', display:"Fazland.com" },
  { value: 'Prontopro.it', display:"Prontopro.it" },
  { value: 'Instapro.it', display:"Instapro.it" },
  { value: 'StarOfService.it', display:"StarOfService.it" },
  { value: 'Preventivalo.it', display:"Preventivalo.it" },
  { value: 'Edilnet.it', display:"Edilnet.it" },
  // { value: 'Facebook.com', display:"Facebook.com" },
  { value: 'other', display:"altro" },
];

export const years = [{"value":0,"display":"anno"},{"value":1950,"display":"1950"},{"value":1951,"display":"1951"},{"value":1952,"display":"1952"},{"value":1953,"display":"1953"},{"value":1954,"display":"1954"},{"value":1955,"display":"1955"},{"value":1956,"display":"1956"},{"value":1957,"display":"1957"},{"value":1958,"display":"1958"},{"value":1959,"display":"1959"},{"value":1960,"display":"1960"},{"value":1961,"display":"1961"},{"value":1962,"display":"1962"},{"value":1963,"display":"1963"},{"value":1964,"display":"1964"},{"value":1965,"display":"1965"},{"value":1966,"display":"1966"},{"value":1967,"display":"1967"},{"value":1968,"display":"1968"},{"value":1969,"display":"1969"},{"value":1970,"display":"1970"},{"value":1971,"display":"1971"},{"value":1972,"display":"1972"},{"value":1973,"display":"1973"},{"value":1974,"display":"1974"},{"value":1975,"display":"1975"},{"value":1976,"display":"1976"},{"value":1977,"display":"1977"},{"value":1978,"display":"1978"},{"value":1979,"display":"1979"},{"value":1980,"display":"1980"},{"value":1981,"display":"1981"},{"value":1982,"display":"1982"},{"value":1983,"display":"1983"},{"value":1984,"display":"1984"},{"value":1985,"display":"1985"},{"value":1986,"display":"1986"},{"value":1987,"display":"1987"},{"value":1988,"display":"1988"},{"value":1989,"display":"1989"},{"value":1990,"display":"1990"},{"value":1991,"display":"1991"},{"value":1992,"display":"1992"},{"value":1993,"display":"1993"},{"value":1994,"display":"1994"},{"value":1995,"display":"1995"},{"value":1996,"display":"1996"},{"value":1997,"display":"1997"},{"value":1998,"display":"1998"},{"value":1999,"display":"1999"},{"value":2000,"display":"2000"},{"value":2001,"display":"2001"},{"value":2002,"display":"2002"},{"value":2003,"display":"2003"},{"value":2004,"display":"2004"},{"value":2005,"display":"2005"},{"value":2006,"display":"2006"},{"value":2007,"display":"2007"},{"value":2008,"display":"2008"},{"value":2009,"display":"2009"}];

export const days = [{"value":0,"display":"giorno"},{"value":1,"display":"1"},{"value":2,"display":"2"},{"value":3,"display":"3"},{"value":4,"display":"4"},{"value":5,"display":"5"},{"value":6,"display":"6"},{"value":7,"display":"7"},{"value":8,"display":"8"},{"value":9,"display":"9"},{"value":10,"display":"10"},{"value":11,"display":"11"},{"value":12,"display":"12"},{"value":13,"display":"13"},{"value":14,"display":"14"},{"value":15,"display":"15"},{"value":16,"display":"16"},{"value":17,"display":"17"},{"value":18,"display":"18"},{"value":19,"display":"19"},{"value":20,"display":"20"},{"value":21,"display":"21"},{"value":22,"display":"22"},{"value":23,"display":"23"},{"value":24,"display":"24"},{"value":25,"display":"25"},{"value":26,"display":"26"},{"value":27,"display":"27"},{"value":28,"display":"28"},{"value":29,"display":"29"},{"value":30,"display":"30"},{"value":31,"display":"31"}]

export const Promotion_State = {
  loading : false,
  error_message : null,
}

export const Promotion = {
  min_start_date : new Date(),
  start_date : new Date(),
  facebook : {
    days : 0,
    daily_budget : 200,
  },
  google : {
    days : 0,
    daily_budget : 200,
    indexing : true,
    mapping : true,
  }
}

export const FacebookPromotion = {
  active : false,
  time_options : [
    {
      count: 1,
      item: "Settimana"
    },
    {
      count: 2,
      item: "Settimane"
    },
    {
      count: 4,
      item: "Settimane"
    },
  ],
  default_time_option : {
    count: 4,
    item: "Settimane"
  },
  price_options : [
    {
      price: 200,
      currency: "€"
    },
    {
      price: 400,
      currency: "€"
    },
    {
      price: 800,
      currency: "€"
    },
  ],
  default_price_options : {
    price: 200,
    currency: "€"
  }
}

export const GooglePromotion = {
  active : false,
  time_options : [
    {
      count: 1,
      item: "Settimana"
    },
    {
      count: 2,
      item: "Settimane"
    },
    {
      count: 4,
      item: "Settimane"
    },
  ],
  default_time_option : {
    count: 4,
    item: "Settimane"
  },
  price_options : [
    {
      price: 200,
      currency: "€"
    },
    {
      price: 400,
      currency: "€"
    },
    {
      price: 800,
      currency: "€"
    },
  ],
  default_price_options : {
    price: 200,
    currency: "€"
  }
}
