import WebServiceProvider from './WebServiceProvider';
import { Container } from 'inversify';
import IServiceProvider from '../types/IServiceProvider';
import Newable from '../types/Newable';

const providers: Newable<IServiceProvider>[] = [WebServiceProvider];

export default providers;
