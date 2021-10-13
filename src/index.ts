import {
  name$,
  storeDataOnServer,
  storeDataOnServerError
} from './external';

// name$.subscribe(val => console.log(val));

// storeDataOnServer('Some value').subscribe(
//   value => console.log(value)
// );

storeDataOnServerError('Some value').subscribe({
  next: value => console.log(value),
  error: error => console.log('Error whens saving:', error.message)
});