import axios from "axios";
const KEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';

const GoogleTranslate = axios.create({
  baseURL: 'https://translation.googleapis.com',
  params: {
    key: KEY
  }
});

export default GoogleTranslate;
