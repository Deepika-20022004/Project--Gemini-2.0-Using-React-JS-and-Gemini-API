// Go to https://aistudio.google.com/apikey and create an api key and paste it here 
// const apiKey="AIzaSyB2B0Ks8AeFKSovLNTcFh_Po-O6j2oi_4k"

// Now go to https://aistudio.google.com/prompts/new_chat and click on Get code in right, copy the javascript version of the code, paste it here
import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai"
  
  const apiKey = "AIzaSyB2B0Ks8AeFKSovLNTcFh_Po-O6j2oi_4k";
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) { //give parameter as prompt
    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage(prompt); // give parameter as prompt
    console.log(result.response.text());
    return result.response.text();
  }
  
//   change run() to export default run
  export default run;

//   now in terminal, run >npm install @google/generative-ai
