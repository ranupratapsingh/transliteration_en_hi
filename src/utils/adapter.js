import axios from 'axios';

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
  let response = await getFromGoogle(englishString);
  let hindi;
  try {
    hindi = response.data[1][0][1][0];
  }catch{
    hindi = 'some error in getting data';
  }
  return hindi;
}

async function transliterateEnToHi(englishText){
  let hindiText = await getHindiString(englishText);
  return hindiText;
}

export default transliterateEnToHi;
