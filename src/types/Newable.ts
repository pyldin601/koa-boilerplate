import { Container } from 'inversify';

export default interface Newable<T> {
  new (): T;
};
