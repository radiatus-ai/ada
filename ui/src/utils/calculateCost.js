// Function to calculate project cost based on model and token usage
const calculateProjectCost = (project) => {
  let projectCost = 0;

  if (project.input_tokens > 0) {
    const inputCost = calculateTokenCost(
      project.input_tokens,
      project.provider_model,
      true
    );
    const outputCost = calculateTokenCost(
      project.output_tokens,
      project.provider_model,
      false
    );
    projectCost = inputCost + outputCost;
  }

  return projectCost.toFixed(2); // Return cost as a string with two decimal places
};

const calculateTokenCost = (tokens, model, isInputToken = true) => {
  let cost = 0;
  let inputMultiplier = 0;
  let outputMultiplier = 0;

  switch (model) {
    case 'claude-3-opus-20240229':
      inputMultiplier = 15.0;
      outputMultiplier = 75.0;
      break;
    case 'claude-3-sonnet-20240229':
      inputMultiplier = 3.0;
      outputMultiplier = 15.0;
      break;
    case 'gemini-1.0-pro-latest':
      inputMultiplier = 0.000125 * 1000;
      outputMultiplier = 0.000375 * 1000;
      break;
    case 'gemini-1.5-pro-latest':
      inputMultiplier = 7.0;
      outputMultiplier = 21.0;
      break;
    case 'gpt-3.5-turbo-0125':
      inputMultiplier = 0.5;
      outputMultiplier = 1.5;
      break;
    case 'gpt-4-turbo-2024-04-09':
      inputMultiplier = 10.0;
      outputMultiplier = 30.0;
      break;
    default:
      inputMultiplier = 0;
      outputMultiplier = 0;
    // Add cases for other models as needed
  }
  if (isInputToken) {
    cost = (tokens / 1_000_000) * inputMultiplier;
  } else {
    cost = (tokens / 1_000_000) * outputMultiplier;
  }

  return cost;
};

export { calculateProjectCost, calculateTokenCost };
