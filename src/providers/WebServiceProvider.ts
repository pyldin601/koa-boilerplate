import { Container } from 'inversify';
import * as Koa from 'koa';
import IServiceProvider from '../types/IServiceProvider';

export default class WebServiceProvider implements IServiceProvider {
  register(app: Container) {
    app.bind(Koa).toConstantValue(new Koa());
  }
}
