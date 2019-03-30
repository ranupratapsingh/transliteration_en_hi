import axios from 'axios';
import cache from './cache';

async function getFromGoogle(englishString){
  let url = 'https://www.google.com/inputtools/request';
  let params = {
    text: englishString,
    ime:'transliteration_en_hi',
    num: 5,
    ie:'utf-8',
    oe:'utf-8'
  };
  return axios.get(url, {params: params});
}

async function getHindiString(englishString) {
  if(!englishString)
    return englishString;
  let response = await getFromGoogle(englishString);
  let hindi;
  try {
    hindi = response.data[1][0][1][0];
  }catch{
    hindi = '';
    console.error('some error in getting data');
  }
  return hindi;
}

async function transliterateEnToHi(englishText){
  let engTextArr = englishText.split('.');
  let hiTextArrPomise = engTextArr.map(async (englishText) => {
    let hindiText;
    if(!englishText){
      hindiText = englishText;
      cache.set(englishText, hindiText);
    }
    hindiText = cache.get(englishText);
    if(!hindiText){
      hindiText = await getHindiString(englishText);
      cache.set(englishText, hindiText);
    }
    return hindiText;
  });
  let hiTextArr = await Promise.all(hiTextArrPomise);
  let hindiText = await hiTextArr.join('.');
  return hindiText;
}

export default transliterateEnToHi;
