import { Ollama } from "npm:@langchain/ollama";

export function callModel(
  model: string,
  prompt: string,
  options: Record<string, unknown> = {}
): Promise<string> {
  switch (model) {
    case "ollama":
      return ollama._call(prompt, { ...options });
    default:
      throw new Error(`Unknown model: ${model}`);
  }
}

export const ollama = new Ollama({
  baseUrl: 'http://localhost:11434',
  model: 'llama3.1',
});

