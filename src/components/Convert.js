import { useEffect, useState } from "react";
import GoogleTranslate from "../apis/GoogleTranslate";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState('');
  const [debounceText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setInterval(() => {
      setDebouncedText(text);
    }, 500);

    return () => {
      clearInterval(timerId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await GoogleTranslate('/language/translate/v2', {
        method: 'POST',
        params: {
          q: debounceText,
          target: language.value
        }
      });

      setTranslated(data.data.translations[0].translatedText);
    };

    if (debounceText) {
      doTranslation();
    } else {
      setTranslated('');
    }
  }, [language, debounceText]);

  return (
    <div className="convert">
      <h1 className="ui header">{translated}</h1>
    </div>
  );
}

export default Convert;
