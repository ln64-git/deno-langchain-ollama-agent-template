import { ChatPromptTemplate } from "npm:@langchain/core/prompts";
import { callModel } from "./models.ts";

export async function feedbackAgent(idea: string, model: string): Promise<string> {
  const formattedPrompt = await ChatPromptTemplate.fromTemplate(`
    You are an AI agent designed to validate business ideas.
    Given the following business idea: "{idea}"
    And the context or scratchpad: "{agent_scratchpad}",
    please provide feedback on the viability of the business idea.
  `).format({
    idea: idea, 
    agent_scratchpad: ""  
  });
  return callModel(model, formattedPrompt);
}
