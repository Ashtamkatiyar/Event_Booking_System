import {
  createReducer,
  on
} from '@ngrx/store';

import * as EventActions
from './event.actions';

export interface EventState {

  events: any[];

  loading: boolean;

  error: any;

}

export const initialState:
EventState = {

  events: [],

  loading: false,

  error: null

};

export const eventReducer =
  createReducer(

    initialState,

    on(
      EventActions.loadEvents,
      state => ({

        ...state,

        loading: true

      })
    ),

    on(
      EventActions.loadEventsSuccess,

      (state, { events }) => ({

        ...state,

        loading: false,

        events

      })
    ),

    on(
      EventActions.loadEventsFailure,

      (state, { error }) => ({

        ...state,

        loading: false,

        error

      })
    )

  );