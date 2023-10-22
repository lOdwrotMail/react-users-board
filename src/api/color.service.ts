import { Color } from '../types';
import { client } from './fetchClient';

export const getColors = () => {
  return client.get<Color[]>('/colors');
};
