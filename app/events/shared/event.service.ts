import { Injectable } from '@angular/core'


@Injectable()
export class EventService {

    getEvents() {
        return EVENTS
    }

    getEvent(id: number) {
        return EVENTS.find(event => event.id === id)
    }
}

const EVENTS = [
]
