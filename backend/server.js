const express = require('express');
const cors = require('cors');

require('dotenv').config();
const {GoogleGenAI} = require('@google/genai')

const app = express();
const USE_MOCK_DATA = true; // Set to true to use mock data for testing

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('AI Marketing Content Analyzer Backend is running')
});

app.post('/api/analyze', async(req, res) => {
  const content = req.body.content;

  console.log('Received content:', content);

  try {
    if (USE_MOCK_DATA) {
        const mockAnalysis = {
            marketingScore: 87,
            sentiment: 'Positive and persuasive',
            tone: 'Personal, welcoming, and urgent',
            clarity: '9/10 - Clear and concise',
            targetAudience: 'Existing customers and deal-seekers',
            suggestions: [
                'Add a direct call-to-action',
                'Specify the exact deadline',
                'Add more personalized recommendations',
                'Mention any important offer restrictions'
            ],
            improvedContent: '🔥 Weekend Sale! Get 30% off everything with code SAVE30. Shop now before the offer ends Sunday!'
        };

        console.log('Using mock AI response:', mockAnalysis);

        return res.json({
            analysis: mockAnalysis
        });
    }
    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: `Analyze the following marketing content and provide insights, suggestions for improvement:
      ${content}
      
      Return the analysis as a JSON Object with these fields:
      
      {
        "marketingScore": 0,
        "sentiment": "",
        "tone": "",
        "clarity": "",
        "targetAudience": "",
        "suggestions": [],
        improvedContent: ""
      }
        
      Rules:
      - marketingScore should be an overall score from 0 to 100 on clarity, persuasiveness, audience fit, call-to-action strength, and overall marketing effectiveness.
      - Sentiment should describe the overall sentiment.
      - tone should describe the communication style.
      - clarity should give a score out of 10 with a brief explanation.
      - targetAudience should describe the intended audience.
      - suggestions should contain 3 to 5 practical suggestions for improvement.
      - Return only valid JSON.
      - Do not include Markdown or code fences
      - Try to use emojis in the suggestions to make them more engaging.
      - improvedContent should be concise, engaging, persuasive, and appropriate for the original marketing context.
      - Do not invent discounts, promo codes, products, deadlines, or claims that are not supported by the original content.`,
    });

    const analysis = JSON.parse(response.text);

    console.log('AI Response:', analysis);

    res.json({ 
        analysis: analysis 
    });
    } catch (error) {
        console.error('Error: ', error);
        res.status(500).json({ 
            message: 'Failed to analyze content' 
        });
    }
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})