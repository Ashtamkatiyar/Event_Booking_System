import { Injectable, inject } from '@angular/core';

import {
  Actions,
  createEffect,
  ofType
} from '@ngrx/effects';

import {
  switchMap,
  map,
  catchError,
  of
} from 'rxjs';

import * as EventActions
from './event.actions';

import {
  EventService
} from '../../services/event.service';

@Injectable()
export class EventEffects {

  private actions$ = inject(Actions);

  private eventService =
    inject(EventService);

  loadEvents$ = createEffect(() =>

    this.actions$.pipe(

      ofType(
        EventActions.loadEvents
      ),

      switchMap(() =>

        this.eventService
          .getEvents()
          .pipe(

            map(events =>

              EventActions
                .loadEventsSuccess({
                  events
                })

            ),

            catchError(error =>

              of(

                EventActions
                  .loadEventsFailure({
                    error
                  })

              )

            )

          )

      )

    )

  );

}