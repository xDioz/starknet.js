import { RpcProvider } from '../src';
import { describeIfRpc, getTestProvider } from './fixtures';

describeIfRpc('RPCProvider', () => {
  let provider: RpcProvider;

  beforeAll(async () => {
    provider = getTestProvider() as RpcProvider;
  });

  describe('RPC methods', () => {
    test('getChainId()', async () => {
      const chainId = await provider.getChainId();
      expect(chainId).toBe('0x534e5f474f45524c49');
    });

    test('provider.chainId', async () => {
      const chainId = await provider.chainId;
      expect(chainId).toBe('0x534e5f474f45524c49');
    });
  });
});
