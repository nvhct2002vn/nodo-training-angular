import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

export interface Month {
    id: string;
    isActive: boolean;
    month: string;
    disabled?: boolean;
}
export interface Year {
    id: string;
    isActive: boolean;
    year: string;
    disabled?: boolean;
}
export interface Days {
    id: string;
    isActive: boolean;
    days: string;
    disabled?: boolean;
}

export interface Person {
    id: string;
    isActive: boolean;
    age: number;
    name: string;
    gender: string;
    company: string;
    email: string;
    phone: string;
    disabled?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AdvancedFormService {

  constructor(private http: HttpClient) { }
  getGithubAccounts(term: string | any = null) {
    if (term) {
        return this.http.get<any>(`https://api.github.com/search/users?q=${term}`).pipe(map(rsp => rsp.items));
    } else {
        return of([]);
    }
}
  // Month
  getMonth(term: string | any = null): Observable<Month[]> {
    let items = getMonthList();
    if (term) {
        items = items.filter(x => x.month.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1);
    }
    return of(items).pipe(delay(500));
  }
  // year
  getYear(term: string | any = null): Observable<Year[]> {
    let items = getYearList();
    if (term) {
        items = items.filter(x => x.year.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1);
    }
    return of(items).pipe(delay(500));
  }
  // Days 
  getDays(term: string | any = null): Observable<Days[]> {
    let items = getDaysList();
    if (term) {
        items = items.filter(x => x.days.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1);
    }
    return of(items).pipe(delay(500));
  }
  getPeople(term: string | any = null): Observable<Person[]> {
    let items = getMockPeople();
    if (term) {
        items = items.filter(x => x.name.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1);
    }
    return of(items).pipe(delay(500));
}
}

function getMonthList() {
  return [
      {
          'id': '1',
          'index': 1,
          'isActive': true,
          'month': 'January',
          'label': 'January',
      },
      {
          'id': '2',
          'index': 2,
          'isActive': true,
          'month': 'February',
          'label': 'February',
      },
      {
          'id': '3',
          'index': 3,
          'isActive': true,
          'month': 'March',
          'label': 'March',
      },
      {
          'id': '4',
          'index': 4,
          'isActive': true,
          'month': 'April',
          'label': 'April',
      },
      {
          'id': '5',
          'index': 5,
          'isActive': true,
          'month': 'May',
          'label': 'May',
      },
      {
          'id': '6',
          'index': 6,
          'isActive': true,
          'month': 'June',
          'label': 'June',
      },
      {
          'id': '7',
          'index': 7,
          'isActive': true,
          'month': 'July',
          'label': 'July',
      },
      {
          'id': '8',
          'index': 8,
          'isActive': true,
          'month': 'August',
          'label': 'August',
      },
      {
          'id': '9',
          'index': 9,
          'isActive': true,
          'month': 'September',
          'label': 'September',
      },
      {
          'id': '10',
          'index': 10,
          'isActive': true,
          'month': 'October',
          'label': 'October',
      },
      {
          'id': '11',
          'index': 11,
          'isActive': true,
          'month': 'November',
          'label': 'November',
      },
      {
          'id': '12',
          'index': 12,
          'isActive': true,
          'month': 'December',
          'label': 'December',
      },
  ]
}
function getYearList() {
  return [
      {
          'id': '2014',
          'index': 2014,
          'isActive': true,
          'year': '2014',
      },
      {
          'id': '2013',
          'index': 2013,
          'isActive': true,
          'year': '2013',
      },
      {
          'id': '2012',
          'index': 2012,
          'isActive': true,
          'year': '2012',
      },
      {
          'id': '2011',
          'index': 2011,
          'isActive': true,
          'year': '2011',
      },
      {
          'id': '2010',
          'index': 2010,
          'isActive': true,
          'year': '2010',
      },
      {
          'id': '2009',
          'index': 2009,
          'isActive': true,
          'year': '2009',
      },
      {
          'id': '2008',
          'index': 2008,
          'isActive': true,
          'year': '2008',
      },
      {
          'id': '2007',
          'index': 2007,
          'isActive': true,
          'year': '2007',
      },
      {
          'id': '2006',
          'index': 2006,
          'isActive': true,
          'year': '2006',
      },
      {
          'id': '2005',
          'index': 2005,
          'isActive': true,
          'year': '2005',
      },
      {
          'id': '2004',
          'index': 2004,
          'isActive': true,
          'year': '2004',
      },
      {
          'id': '2003',
          'index': 2003,
          'isActive': true,
          'year': '2003',
      },
      {
          'id': '2002',
          'index': 2002,
          'isActive': true,
          'year': '2002',
      },
      {
          'id': '2001',
          'index': 2001,
          'isActive': true,
          'year': '2001',
      },
      {
          'id': '2000',
          'index': 2000,
          'isActive': true,
          'year': '2000',
      },
      {
          'id': '1999',
          'index': 1999,
          'isActive': true,
          'year': '1999',
      },
      {
          'id': '1998',
          'index': 1998,
          'isActive': true,
          'year': '1998',
      },
      {
          'id': '1997',
          'index': 1997,
          'isActive': true,
          'year': '1997',
      },
      {
          'id': '1996',
          'index': 1996,
          'isActive': true,
          'year': '1996',
      },
      {
          'id': '1995',
          'index': 1995,
          'isActive': true,
          'year': '1995',
      },
      {
          'id': '1994',
          'index': 1994,
          'isActive': true,
          'year': '1994',
      },
      {
          'id': '1993',
          'index': 1993,
          'isActive': true,
          'year': '1993',
      },
      {
          'id': '1992',
          'index': 1992,
          'isActive': true,
          'year': '1992',
      },
      {
          'id': '1991',
          'index': 1991,
          'isActive': true,
          'year': '1991',
      },
      {
          'id': '1990',
          'index': 1990,
          'isActive': true,
          'year': '1990',
      },
  ]
}
function getDaysList() {
  return [
      {
          'id': '1',
          'index': 1,
          'isActive': true,
          'days': '1',
      },
      {
          'id': '2',
          'index': 2,
          'isActive': true,
          'days': '2',
      },
      {
          'id': '3',
          'index': 3,
          'isActive': true,
          'days': '3',
      },
      {
          'id': '4',
          'index': 4,
          'isActive': true,
          'days': '4',
      },
      {
          'id': '5',
          'index': 5,
          'isActive': true,
          'days': '5',
      },
      {
          'id': '6',
          'index': 6,
          'isActive': true,
          'days': '6',
      },
      {
          'id': '7',
          'index': 7,
          'isActive': true,
          'days': '7',
      },
      {
          'id': '8',
          'index': 8,
          'isActive': true,
          'days': '8',
      },
      {
          'id': '9',
          'index': 9,
          'isActive': true,
          'days': '9',
      },
      {
          'id': '10',
          'index': 10,
          'isActive': true,
          'days': '10',
      },
      {
          'id': '11',
          'index': 11,
          'isActive': true,
          'days': '11',
      },
      {
          'id': '12',
          'index': 12,
          'isActive': true,
          'days': '12',
      },
      {
          'id': '13',
          'index': 13,
          'isActive': true,
          'days': '13',
      },
      {
          'id': '14',
          'index': 14,
          'isActive': true,
          'days': '14',
      },
      {
          'id': '15',
          'index': 15,
          'isActive': true,
          'days': '15',
      },
      {
          'id': '16',
          'index': 16,
          'isActive': true,
          'days': '16',
      },
      {
          'id': '17',
          'index': 17,
          'isActive': true,
          'days': '17',
      },
      {
          'id': '18',
          'index': 18,
          'isActive': true,
          'days': '18',
      },
      {
          'id': '19',
          'index': 19,
          'isActive': true,
          'days': '19',
      },
      {
          'id': '20',
          'index': 20,
          'isActive': true,
          'days': '20',
      },
      {
          'id': '21',
          'index': 21,
          'isActive': true,
          'days': '21',
      },
      {
          'id': '22',
          'index': 22,
          'isActive': true,
          'days': '22',
      },
      {
          'id': '23',
          'index': 23,
          'isActive': true,
          'days': '23',
      },
      {
          'id': '24',
          'index': 24,
          'isActive': true,
          'days': '24',
      },
      {
          'id': '25',
          'index': 25,
          'isActive': true,
          'days': '25',
      },
      {
          'id': '26',
          'index': 26,
          'isActive': true,
          'days': '26',
      },
      {
          'id': '27',
          'index': 27,
          'isActive': true,
          'days': '27',
      },
      {
          'id': '28',
          'index': 28,
          'isActive': true,
          'days': '28',
      },
      {
          'id': '29',
          'index': 29,
          'isActive': true,
          'days': '29',
      },
      {
          'id': '30',
          'index': 30,
          'isActive': true,
          'days': '30',
      },
      {
          'id': '31',
          'index': 31,
          'isActive': true,
          'days': '31',
      }
  ]
}

function getMockPeople() {
    return [
        {
            'id': '5a15b13c36e7a7f00cf0d7cb',
            'index': 2,
            'isActive': true,
            'picture': 'http://placehold.it/32x32',
            'age': 23,
            'name': 'Karyn Wright',
            'gender': 'female',
            'company': 'ZOLAR',
            'email': 'karynwright@zolar.com',
            'phone': '+1 (851) 583-2547'
        },
        {
            'id': '5a15b13c2340978ec3d2c0ea',
            'index': 3,
            'isActive': false,
            'picture': 'http://placehold.it/32x32',
            'age': 35,
            'name': 'Rochelle Estes',
            'disabled': true,
            'gender': 'female',
            'company': 'EXTRAWEAR',
            'email': 'rochelleestes@extrawear.com',
            'phone': '+1 (849) 408-2029'
        },
        {
            'id': '5a15b13c663ea0af9ad0dae8',
            'index': 4,
            'isActive': false,
            'picture': 'http://placehold.it/32x32',
            'age': 25,
            'name': 'Mendoza Ruiz',
            'gender': 'male',
            'company': 'ZYTRAX',
            'email': 'mendozaruiz@zytrax.com',
            'phone': '+1 (904) 536-2020'
        },
        {
            'id': '5a15b13cc9eeb36511d65acf',
            'index': 5,
            'isActive': false,
            'picture': 'http://placehold.it/32x32',
            'age': 39,
            'name': 'Rosales Russell',
            'gender': 'male',
            'company': 'ELEMANTRA',
            'email': 'rosalesrussell@elemantra.com',
            'phone': '+1 (868) 473-3073'
        },
        {
            'id': '5a15b13c728cd3f43cc0fe8a',
            'index': 6,
            'isActive': true,
            'picture': 'http://placehold.it/32x32',
            'age': 32,
            'name': 'Marquez Nolan',
            'gender': 'male',
            'company': 'MIRACLIS',
            'disabled': true,
            'email': 'marqueznolan@miraclis.com',
            'phone': '+1 (853) 571-3921'
        },
        {
            'id': '5a15b13ca51b0aaf8a99c05a',
            'index': 7,
            'isActive': false,
            'picture': 'http://placehold.it/32x32',
            'age': 28,
            'name': 'Franklin James',
            'gender': 'male',
            'company': 'CAXT',
            'email': 'franklinjames@caxt.com',
            'phone': '+1 (868) 539-2984'
        },
        {
            'id': '5a15b13cc3b9381ffcb1d6f7',
            'index': 8,
            'isActive': false,
            'picture': 'http://placehold.it/32x32',
            'age': 24,
            'name': 'Elsa Bradley',
            'gender': 'female',
            'company': 'MATRIXITY',
            'email': 'elsabradley@matrixity.com',
            'phone': '+1 (994) 583-3850'
        },
        {
            'id': '5a15b13ce58cb6ff62c65164',
            'index': 9,
            'isActive': true,
            'picture': 'http://placehold.it/32x32',
            'age': 40,
            'name': 'Pearson Thompson',
            'gender': 'male',
            'company': 'EZENT',
            'email': 'pearsonthompson@ezent.com',
            'phone': '+1 (917) 537-2178'
        },
        {
            'id': '5a15b13c90b95eb68010c86e',
            'index': 10,
            'isActive': true,
            'picture': 'http://placehold.it/32x32',
            'age': 32,
            'name': 'Ina Pugh',
            'gender': 'female',
            'company': 'MANTRIX',
            'email': 'inapugh@mantrix.com',
            'phone': '+1 (917) 450-2372'
        },
        {
            'id': '5a15b13c2b1746e12788711f',
            'index': 11,
            'isActive': true,
            'picture': 'http://placehold.it/32x32',
            'age': 25,
            'name': 'Nguyen Elliott',
            'gender': 'male',
            'company': 'PORTALINE',
            'email': 'nguyenelliott@portaline.com',
            'phone': '+1 (905) 491-3377'
        },
        {
            'id': '5a15b13c605403381eec5019',
            'index': 12,
            'isActive': true,
            'picture': 'http://placehold.it/32x32',
            'age': 31,
            'name': 'Mills Barnett',
            'gender': 'male',
            'company': 'FARMEX',
            'email': 'millsbarnett@farmex.com',
            'phone': '+1 (882) 462-3986'
        },
        {
            'id': '5a15b13c67e2e6d1a3cd6ca5',
            'index': 13,
            'isActive': true,
            'picture': 'http://placehold.it/32x32',
            'age': 36,
            'name': 'Margaret Reynolds',
            'gender': 'female',
            'company': 'ROOFORIA',
            'email': 'margaretreynolds@rooforia.com',
            'phone': '+1 (935) 435-2345'
        },
        {
            'id': '5a15b13c947c836d177aa85c',
            'index': 14,
            'isActive': false,
            'picture': 'http://placehold.it/32x32',
            'age': 29,
            'name': 'Yvette Navarro',
            'gender': 'female',
            'company': 'KINETICA',
            'email': 'yvettenavarro@kinetica.com',
            'phone': '+1 (807) 485-3824'
        },
        {
            'id': '5a15b13c5dbbe61245c1fb73',
            'index': 15,
            'isActive': false,
            'picture': 'http://placehold.it/32x32',
            'age': 20,
            'name': 'Elisa Guzman',
            'gender': 'female',
            'company': 'KAGE',
            'email': 'elisaguzman@kage.com',
            'phone': '+1 (868) 594-2919'
        },
        {
            'id': '5a15b13c38fd49fefea8db80',
            'index': 16,
            'isActive': false,
            'picture': 'http://placehold.it/32x32',
            'age': 33,
            'name': 'Jodie Bowman',
            'gender': 'female',
            'company': 'EMTRAC',
            'email': 'jodiebowman@emtrac.com',
            'phone': '+1 (891) 565-2560'
        },
        {
            'id': '5a15b13c9680913c470eb8fd',
            'index': 17,
            'isActive': false,
            'picture': 'http://placehold.it/32x32',
            'age': 24,
            'name': 'Diann Booker',
            'gender': 'female',
            'company': 'LYRIA',
            'email': 'diannbooker@lyria.com',
            'phone': '+1 (830) 555-3209'
        }
    ]
}