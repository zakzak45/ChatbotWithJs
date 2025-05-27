import OpenAI from "openai";
import readline from "readline";

// Set up the OpenAI instance with your API key
const openai = new OpenAI({
  apiKey: "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", // WARNING: Don't hardcode your API key in production
  organization: "org-0nmrFWw6wSm6xIJXSbx4FpTw",
});

// Set up terminal input
const userInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "You: ",
});

userInterface.prompt();

userInterface.on("line", async (input) => {
  try {
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: input }],
    });

    console.log("Bot:", chatCompletion.choices[0].message.content);
  } catch (error) {
    console.error("Error:", error);
  }

  userInterface.prompt();
});
