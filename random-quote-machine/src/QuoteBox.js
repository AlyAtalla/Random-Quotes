import React, { useEffect, useState } from 'react';

const QuoteBox = () => {
  const [quote, setQuote] = useState({ text: '', author: '' });
  const category = 'happiness';
  const apiKey = 'OhpcRmKmxfUs5IPMTvw8bw==xr3PY1r1UAdtMq7O';

  const fetchQuote = async () => {
    const apiUrl = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
    try {
      const response = await fetch(apiUrl, {
        headers: { 'X-Api-Key': apiKey }
      });
      if (response.ok) {
        const data = await response.json();
        if (data.length > 0) {
          setQuote({ text: data[0].quote, author: data[0].author });
        } else {
          console.error("No quotes found");
        }
      } else {
        console.error("Error:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const tweetQuote = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text="${quote.text}" - ${quote.author}`;
    window.open(tweetUrl, '_blank');
  };

  return (
    <div className="text-center" id="quote-box" data-testid="quote-box">
      <h1 id="text">{quote.text}</h1>
      <h3 id="author">{quote.author}</h3>
      <button className="btn btn-primary" id="new-quote" onClick={fetchQuote}>New Quote</button>
      <a className="btn btn-info" href="#!" id="tweet-quote" onClick={tweetQuote}>Tweet Quote</a>
    </div>
  );
};

export default QuoteBox;