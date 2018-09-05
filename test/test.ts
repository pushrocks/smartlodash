import { tap, expect } from '@pushrocks/tapbundle';
import smartlodash from '../ts/index';

tap.test('should have types in place', async () => {
  smartlodash;
});

tap.start();
