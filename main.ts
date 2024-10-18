import { feedbackAgent } from "./langchain/agents.ts";

const input = "A platform that connects people who want to learn new skills with those who can teach them.";

if (import.meta.main) {
  const main = async () => {
    try {
      const result = await feedbackAgent(input, "ollama");
      console.log("Feedback Result:", result);
    } catch (error) {
      console.error("Error occurred:", error); 
    }
  };
  main();
}
