import TokenService from '../../../src/services/token'
import ContractService from '../../../src/services/contract'

describe('TokenService', () => {
  let tokenService: TokenService

  beforeEach(() => {
    const contractService = new ContractService()
    tokenService = new TokenService(contractService)
  })

  describe('getToken', () => {
    test('given address should return token', async () => {
      const token = await tokenService?.getToken(
        '0xd8Bf72f3e163B9CF0C73dFdCC316417A5ac20670'
      )
      expect(token?.symbol).toBe('WETH')
      expect(token?.name).toBe('Wrapped Ether on Fuse')
      expect(token?.decimals).toBe(18)
    })

    test('given address not in list return token', async () => {
      const token = await tokenService?.getToken(
        '0xb9bB65B958EA30752bb4b4745Ab0BEce2Ca9aDB8'
      )
      expect(token?.symbol).toBe('MOON')
      expect(token?.name).toBe('Moonpay')
      expect(token?.decimals).toBe(18)
    })

    test('given FUSE should return currency', async () => {
      const token = await tokenService?.getToken('FUSE')
      expect(token?.symbol).toBe('FUSE')
      expect(token?.name).toBe('Fuse')
      expect(token?.decimals).toBe(18)
    })
  })
})