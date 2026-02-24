import { ChainId } from '../constants';

export class Token {
  constructor(
    public readonly chainId: ChainId,
    public readonly address: string,
    public readonly decimals: number,
    public readonly symbol?: string,
    public readonly name?: string
  ) {}

  public equals(other: Token): boolean {
    return this.chainId === other.chainId && this.address === other.address;
  }
}
