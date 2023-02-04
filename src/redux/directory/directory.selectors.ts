import { createSelector } from 'reselect';
import { RootState } from '../store';
import { DirectoryState } from './directory.reducer';

const selectDirectory = (state: RootState): DirectoryState => state.directory;

export const selectDirectorySections = createSelector([selectDirectory], directory => directory.sections);
