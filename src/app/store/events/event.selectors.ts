import {
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import {
  EventState
} from './event.reducer';

export const selectEventState =

  createFeatureSelector<EventState>(
    'events'
  );

export const selectAllEvents =

  createSelector(

    selectEventState,

    state => state.events

  );

export const selectLoading =

  createSelector(

    selectEventState,

    state => state.loading

  );