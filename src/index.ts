import {
  name$,
  storeDataOnServer,
  storeDataOnServerError
} from './external';

// name$.subscribe(val => console.log(val));

storeDataOnServer('Some value').subscribe(
  value => console.log(value)
);