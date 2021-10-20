/** SECTION 3 */

import { Observable } from "rxjs";

const observable$ = new Observable<string>(subscriber => {
  console.log("Observable executed");
  subscriber.next('Alice');
  subscriber.next('Ben');
  setTimeout(() => {
    subscriber.next('Charlie')
    // subscriber.complete();
  }, 2000);
  setTimeout(() => {
    subscriber.error(new Error("Error notification called"));
  }, 4000);

  return () => {
    console.log('Teardown');
  };
});
console.log("Before subscribe");
observable$.subscribe({ 
  next: value => console.log(value),
  error: error => console.error(error.message),
  complete: () => console.log("Completed")
});
console.log("After subscribe");


/** SECTION 2 */

// import { Observable } from 'rxjs';
// import {
//   name$,
//   storeDataOnServer,
//   storeDataOnServerError
// } from './external';

// name$.subscribe(val => console.log(val));

// storeDataOnServer('Some value').subscribe(
//   value => console.log(value)
// );

// storeDataOnServerError('Some value').subscribe({
//   next: value => console.log(value),
//   error: error => console.log('Error whens saving:', error.message)
// });

// Observable, Observer and Subscription

// const observable$ = new Observable<string>(subscriber => {
//   console.log('Observable executed');
//   subscriber.next('Alice');
//   setTimeout(() => {
//     subscriber.next('Ben');
//   }, 2000);
//   setTimeout(() => {
//     subscriber.next('Charlie');
//   }, 4000);
// });

// const observer = {
//   next: (value: string) => console.log(value)
// };

// observable$.subscribe(observer);

// observable$.subscribe({
//   next: (value: string) => console.log(value)
// });

// const subscription = observable$.subscribe((value: string) => console.log(value));
// setTimeout(() => {
//   console.log("Unsubscribe");
//   subscription.unsubscribe();
// }, 3000);

// console.log('Subscription 1 starts');
// observable$.subscribe((value: string) => console.log("Subscription 1: " + value));

// setTimeout(() => {
//   console.log('Subscription 2 starts');
//   observable$.subscribe((value: string) => console.log("Subscription 2: " + value));
// }, 1000);