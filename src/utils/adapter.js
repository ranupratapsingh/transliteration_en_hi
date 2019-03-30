import axios from 'axios';

function getHindiString(englishString){
  let url = 'https://www.google.com/inputtools/request';
  let params = {
    text: englishString,
    ime:'transliteration_en_hi',
    num: 5,
    ie:'utf-8',
    oe:'utf-8'
  };
    // -H 'Referer: http://indiatyping.com/index.php/english-to-hindi-typing
  return axios.get(url, {params: params});
    // .then(function (response) {
    //   let hindi = response.data[1][0][1][0];
    // //   console.log(hindi);
    //   return hindi;
    // })
    // .catch(function (error) {
    //   console.log(error);
    // })
    // .then(function () {
    // // always executed
    // });
}

export default getHindiString;
