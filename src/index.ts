/** SECTION 5 */

/** FROMEVENT */

import { fromEvent, Observable } from "rxjs";

const triggerButton = document.querySelector('button#trigger');

// const subscription = fromEvent<PointerEvent>(triggerButton, 'click').subscribe(event => {
//   console.log(event.type, event.x, event.y);
// });

const triggerClick$ = new Observable(subscriber => {
  const clickHandlerFn = (event: any) => {
    console.log('Event callback executed');
    subscriber.next(event);
  };

  triggerButton?.addEventListener('click', clickHandlerFn);

  return () => {
    triggerButton?.removeEventListener('click', clickHandlerFn);
  }
});

const subscription = triggerClick$.subscribe({
  next: event => console.log(event.type, event.x, event.y)
});

setTimeout(() => {
  console.log("unsubscribe");
  subscription.unsubscribe();
}, 5000);

/** FROM */

// import { from } from "rxjs";

// from(['Alice', 'Ben', 'Charlie']).subscribe({
//   next: value => console.log(value),
//   complete: () => console.log("Completed from")
// });

// const somePromise = new Promise((resolve, reject) => {
//   // resolve('Resolved!');
//   reject('Rejected');
// });

// const observableFromPromise$ = from(somePromise);

// observableFromPromise$.subscribe({
//   next: value => console.log(value),
//   error: err => console.log("ERROR: " + err),
//   complete: () => console.log("Completed from Promise")
// })

/** OF */
// import { Observable, of } from "rxjs";

// of('Alice', 'Ben', 'Charlie').subscribe({
//   next: value => console.log(value),
//   complete: () => console.log("Completed")
// });

// ourOwnOf('Alice', 'Ben', 'Charlie').subscribe({
//   next: value => console.log(value),
//   complete: () => console.log("Completed Own Of")
// });

// const names$ = new Observable<string>(subscriber => {
//   subscriber.next('Alice');
//   subscriber.next('Ben');
//   subscriber.next('Charlie');
//   subscriber.complete();
// });

// names$.subscribe({
//   next: value => console.log(value),
//   complete: () => console.log("Completed")
// });

// function ourOwnOf(...args: string[]): Observable<string> {
//   return new Observable<string>(subscriber => {
//     for(let i = 0; i < args.length; i++) {
//       subscriber.next(args[i]);
//     }
//     subscriber.complete();
//   });
// }

/** SECTION 4 */

// import { Observable } from 'rxjs';
// import {ajax} from 'rxjs/ajax';

// // Cold event: new data for each subscription
// const ajax$ = ajax<any>('https://random-data-api.com/api/name/random_name');

// ajax$.subscribe(data => console.log("Sub 1: ", data.response.first_name));
// ajax$.subscribe(data => console.log("Sub 2: ", data.response.first_name));
// ajax$.subscribe(data => console.log("Sub 3: ", data.response.first_name));

// const helloButton = document.querySelector<any>('button#hello');
// const helloClick$ = new Observable(subscriber => {
//   helloButton.addEventListener('click', (event: MouseEvent) => {
//     subscriber.next(event);
//   });
// });

// // Hot event: same data emitted to all subscriptions
// helloClick$.subscribe((event: any) => console.log("Sub 1:",event.type, event.x, event.y));
// setTimeout(() => {
//   console.log('Subscription 2 started');
//   helloClick$.subscribe((event: any) => console.log("Sub 2:",event.type, event.x, event.y));
// }, 5000);

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