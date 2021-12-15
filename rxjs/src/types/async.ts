import {Observable} from 'rxjs';

/**
 * Type that represents pure value or value obtained by promise or value obtained by Observable
 */
export type PromiseObservableOr<TValue> = Observable<TValue>|Promise<TValue>|TValue;
