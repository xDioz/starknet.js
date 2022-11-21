import shell from 'shelljs';

// TODO: decide if this should run with all the tests or separately
describe('Module build', () => {
  test('cjs', async () => {
    shell.exec('node __tests__/utils/build/test.js');
    expect(shell.error()).toBeFalsy();
  });

  test('esm', async () => {
    shell.exec('node __tests__/utils/build/test.mjs');
    expect(shell.error()).toBeFalsy();
  });

  // TODO: iife
});
