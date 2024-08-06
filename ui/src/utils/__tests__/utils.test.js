import { calculateProjectCost, calculateTokenCost } from '../utils/config';

describe('Utility Functions', () => {
  test('calculateTokenCost should calculate correct token cost', () => {
    const tokens = 1000;
    const model = 'claude-3-opus-20240229';

    const inputCost = calculateTokenCost(tokens, model, true);
    const outputCost = calculateTokenCost(tokens, model, false);

    expect(inputCost).toBe((tokens / 1_000_000) * 15.0);
    expect(outputCost).toBe((tokens / 1_000_000) * 75.0);
  });

  test('calculateProjectCost should calculate correct project cost', () => {
    const project = {
      input_tokens: 1000,
      output_tokens: 2000,
      provider_model: 'claude-3-opus-20240229',
    };

    const projectCost = calculateProjectCost(project);
    const expectedCost = (
      (1000 / 1_000_000) * 15.0 +
      (2000 / 1_000_000) * 75.0
    ).toFixed(2);

    expect(projectCost).toBe(expectedCost);
  });
});
