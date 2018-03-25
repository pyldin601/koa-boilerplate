import { Container } from 'inversify';

export default interface IServiceProvider {
  register(app: Container): void;
};
