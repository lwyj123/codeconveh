import * as Path from 'path';
import { CLI, Shim } from 'clime';

const cli = new CLI('ccv', Path.join(__dirname, 'commands'));

const shim = new Shim(cli);
// tslint:disable-next-line:no-floating-promises
shim.execute(process.argv);
