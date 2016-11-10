import development from './development'
import production from './production'
import staging from './staging'
import test from './test'

let env = null;
switch(process.env.NODE_ENV){
  case 'development':
    env = development;
    break;
  case 'production':
    env = production;
    break;
  case 'staging':
    env = staging;
    break;
  case 'test':
    env = test;
    break;
  default:
    env = development;
    break;
}

export default env;
