// import prod from './prod';
import dev from './dev';

let keys = dev; 
if (process.env.NODE_ENV === 'production') {
    // prod set of keys
    // keys = prod
  } 
export default keys;