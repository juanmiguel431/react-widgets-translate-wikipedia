import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      let data;
      if (term) {
        const response = await axios.get('/w/api.php', {
          baseURL: 'https://en.wikipedia.org',
          params: {
            action: 'query',
            list: 'search',
            origin: '*',
            format: 'json',
            srsearch: term
          }
        });
        data = response.data.query.search
      } else {
        data = [];
      }

      setResults(data);
    };

    search();
  }, [term]);

  const renderedResults = results.map(result => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className="ui button"
            target="_blank"
            rel="noreferrer"
          >Go</a>
        </div>
        <div className="content">
          <div className="header">
            <span dangerouslySetInnerHTML={{ __html: result.title }}/>
          </div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}/>
        </div>
      </div>
    );
  });

  return (
    <div className="search">
      <div className="ui form">
        <div className="field">
          <label>Enter search term</label>
          <input
            value={term}
            onChange={e => setTerm(e.target.value)}
            type="text"
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">
        {renderedResults}
      </div>
    </div>
  );
}

export default Search;
