import { useEffect, useState } from "react";
import GoogleTranslate from "../apis/GoogleTranslate";

const Convert = ({ language, text }) => {
  const [translatedText, setTranslatedText] = useState('');

  useEffect(() => {
    const googleRequest = async () => {
      const response = await GoogleTranslate('/language/translate/v2', {
        params: {
          q: text,
          target: language.value
        }
      });

      setTranslatedText(response.data.data.translations[0].translatedText);
    };
    googleRequest();
  }, [language, text]);

  return (
    <div className="convert">
      <h1>Translated text is: {translatedText}</h1>
    </div>
  );
}

export default Convert;
