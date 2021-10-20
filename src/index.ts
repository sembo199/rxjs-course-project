/** SECTION 4 */

import {ajax} from 'rxjs/ajax';

const ajax$ = ajax<any>('https://random-data-api.com/api/name/random_name');

ajax$.subscribe(data => console.log("Sub 1: ", data.response.first_name));
ajax$.subscribe(data => console.log("Sub 2: ", data.response.first_name));
ajax$.subscribe(data => console.log("Sub 3: ", data.response.first_name));

/** SECTION 3 */

// import { Observable, Subscription } from "rxjs";

// const observable$ = new Observable<number>(subscriber => {
//   console.log("Observable executed");
//   let i = 1;
//   const interval = setInterval(() => {
//     console.log("Emit " , i);
//     subscriber.next(i++);
//   }, 2000);
  // setTimeout(() => {
  //   subscriber.complete();
  // }, 7000);
  // subscriber.next('Alice');
  // setTimeout(() => {
  //   subscriber.next('Ben');
  //   // subscriber.error(new Error("Error notification called"));
  // }, 2000);
  // setTimeout(() => {
  //   subscriber.next('Charlie')
  //   subscriber.complete();
  // }, 4000);

//   return () => {
//     clearInterval(interval);
//     console.log('Teardown');
//   };
// });
// console.log("Before subscribe");
// const subscription: Subscription = observable$.subscribe({ 
//   next: value => console.log(value),
//   error: error => console.error(error.message),
//   complete: () => console.log("Completed")
// });
// console.log("After subscribe");
// setTimeout(() => {
//   subscription.unsubscribe();
// }, 7000);


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