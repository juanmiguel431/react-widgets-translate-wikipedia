import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState('programming');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
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

      setResults(response.data.query.search);
    };

    search();
  }, [term]);

  const renderedResults = results.map(result => {
    return (
      <div key={result.pageid} className="item">
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
