import { useEffect, useState } from "react";
import GoogleTranslate from "../apis/GoogleTranslate";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState('');

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await GoogleTranslate('/language/translate/v2', {
        method: 'POST',
        params: {
          q: text,
          target: language.value
        }
      });

      setTranslated(data.data.translations[0].translatedText);
    };
    doTranslation();
  }, [language, text]);

  return (
    <div className="convert">
      <h1 className="ui header">{translated}</h1>
    </div>
  );
}

export default Convert;
