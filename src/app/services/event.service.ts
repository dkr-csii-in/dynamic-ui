import { Injectable } from '@angular/core';
import { Subject, Subscription, filter, map } from 'rxjs';

interface Event {
  type: string;
  payload?: any;
}

type EventCallback = (payload: any) => void;

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private handler = new Subject<Event>();
  constructor() { }

  /**
   * Broadcast the event
   * @param type type of event
   * @param payload payload
   */
  broadcast(type: string, payload = {}) {
    this.handler.next({ type, payload });
  }

  /**
   * Subscribe to event
   * @param type type of event
   * @param callback call back function
   */
  subscribe(type: string[] | string, callback: EventCallback): Subscription {
    return this.handler.pipe(
      filter(event => {
        //  console.log(event.type, type)

        return Array.isArray(type) ? type.includes(event.type) : type === event.type;
      })).pipe(
        map(event => event.payload))
      .subscribe(callback);
  }
}
