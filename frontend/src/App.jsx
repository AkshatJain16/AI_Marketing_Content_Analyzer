import { useState } from 'react'
import './App.css'

function App() {
  const [content, setContent] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  function copyContent(){
    navigator.clipboard.writeText(analysis.improvedContent);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  function analyzeContent() {
    if (content.trim() === '') {
      alert('Please enter some marketing content first.');
      return;
    }
    setLoading(true);
    setError('');

    fetch(`${import.meta.env.VITE_API_URL}/api/analyze`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        content 
      })
    })
    .then((response) => {
      if(!response.ok){
        throw new Error('Failed to analyze content');
      }
      return response.json();
    })
    .then((data) => {
      console.log('Response from backend:', data);
      setAnalysis(data.analysis);
      setLoading(false);
    })
    .catch(error => {
      console.error('Error:', error);
      setError('Something went wrong while analyzing your content. Please try again.')
      setLoading(false);
    });
  }

  let scoreMessage = '';
  if (analysis) {
    if (analysis.marketingScore >= 80) {
      scoreMessage = 'Excellent Content!🤩';
    } else if (analysis.marketingScore >= 60) {
      scoreMessage = 'Good Content!👍';
    } else if (analysis.marketingScore >= 40) {
      scoreMessage = 'Content Needs Improvement.😐';
    }else {
      scoreMessage = 'Poor Content.😞';
    }
  }

  return (
    <div className="app">
      <h1>AI Marketing Content Analyzer</h1>

      <p>
        Analyze your marketing content and get AI-powered insights.
      </p>

      <textarea
        placeholder="Enter your marketing content here..."
        rows="10"
        value={content}
        onChange={(event) => setContent(event.target.value)}
        maxLength="5000"
      ></textarea>
      <p className="character-count">
        {content.length} / 5000 characters
      </p>

      <button onClick={analyzeContent} disabled={loading}>
        {loading ? 'Analyzing' : 'Analyze Content'}
      </button>
      <button onClick={() => {
        setContent('');
        setAnalysis(null);
        setError('');
      }}>
        Clear Content
      </button>

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      {analysis && (
        <div className="results">
          <h2>Analysis Results</h2>

          <div className="marketing-score">
            <h3>Marketing Score</h3>
            <p>
              {analysis.marketingScore} 
              <span>/100</span>
            </p>
            <strong>{scoreMessage}</strong>
          </div>
          
          <div className="result-cards">
            <div className="result-card">
              <h3>Sentiment</h3>
              <p>{analysis.sentiment}</p>
            </div>

            <div className="result-card">
              <h3>Tone</h3>
              <p>{analysis.tone}</p>
            </div>

            <div className="result-card">
              <h3>Clarity</h3>
              <p>{analysis.clarity}</p>
            </div>

            <div className="result-card">
              <h3>Target Audience</h3>
              <p>{analysis.targetAudience}</p>
            </div>
            
            <div className="result-card">
              <h3>Suggestions for Improvement</h3>
              <ul>
                {analysis.suggestions.map((suggestion, index) => (
                  <li key={index}>{suggestion}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="improved-copy">
            <h3>✨ AI-Recommended Content</h3>
            <p>{analysis.improvedContent}</p>

            <button onClick={() => copyContent()} disabled={copied}>
              {copied ? '✅ Copied!' : '📋Copy Content'}
            </button>
          </div>
        </div>
      )
      }
      <footer>
            <p>&copy; 2024 Marketing Content Analyzer. Built with React, Node.js, and AI. Created by Akshat Jain 💜</p>
      </footer>
    </div>
  )
}

export default App
