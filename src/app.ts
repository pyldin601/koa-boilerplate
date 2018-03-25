import 'reflect-metadata';
import { Container } from 'inversify';
import providers from './providers';

const container = new Container();

providers.forEach(Provider => new Provider().register(container));

export default container;
