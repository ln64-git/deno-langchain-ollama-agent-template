import { Ollama } from 'npm:@langchain/ollama';
import { ChatPromptTemplate } from "npm:@langchain/core/prompts";

// Initialize Ollama LLM
const llm = new Ollama({
  baseUrl: 'http://localhost:11434',  // Ensure the local model is running
  model: 'llama3.1',
});

export async function agentExecutor(input: Record<string, string>): Promise<string> {
  // Define your prompt template inline
  const prompt = ChatPromptTemplate.fromTemplate(`
    You are an AI agent designed to validate business ideas.
    Given the following business idea: "{idea}"
    And the context or scratchpad: "{agent_scratchpad}",
    please provide feedback on the viability of the business idea.
  `);
  // Generate the prompt text with input data
  const promptPrototype = {
    idea: input,
    agent_scratchpad: ""
  };
  // Format the prompt by passing the input values
  const formattedPrompt = await prompt.format(promptPrototype);
  return llm._call(formattedPrompt, { options: {} });
}
