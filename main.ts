import { agentExecutor } from "./langchain.ts";
import type { LLMResult } from "npm:@langchain/core";

const idea = "A platform that connects people who want to learn new skills with those who can teach them.";""

if (import.meta.main) {
  // Pass both 'idea' and 'agent_scratchpad' to the agent
  agentExecutor({
    idea: idea,  // This is your business idea
  }).then((result: LLMResult) => {
    console.log(result);  // Output the result
  }).catch((error) => {
    console.error("Error:", error);  // Handle potential errors
  });
}
