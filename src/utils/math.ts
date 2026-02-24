/**
 * Calculates the swap output based on Uniswap V2 formula
 */
export function getAmountOut(
  amountIn: bigint,
  reserveIn: bigint,
  reserveOut: bigint
): bigint {
  if (amountIn <= 0n) throw new Error('INSUFFICIENT_INPUT_AMOUNT');
  if (reserveIn <= 0n || reserveOut <= 0n) throw new Error('INSUFFICIENT_LIQUIDITY');

  const amountInWithFee = amountIn * 997n; 
  const numerator = amountInWithFee * reserveOut;
  const denominator = (reserveIn * 1000n) + amountInWithFee;
  
  return numerator / denominator;
}

/**
 * Calculates price impact percentage
 */
export function calculatePriceImpact(midPrice: number, executionPrice: number): string {
  const impact = ((midPrice - executionPrice) / midPrice) * 100;
  return impact.toFixed(2) + '%';
}
