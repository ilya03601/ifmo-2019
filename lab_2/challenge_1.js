// Link to realisation on kodaktor.ru: https://kodaktor.ru/?!=xmlt_b3024
fetch('//kodaktor.ru/x/unsafe_20229')
  .then(response => response.text())
  .then(str => {
    Out.log('XML Document:');
    Out.log(str);
        
    return (new window.DOMParser()).parseFromString(str, "text/xml")
  })
  .then((data) => {
    Out.log('Login: ', data.getElementsByTagName('login')[3].childNodes[0].nodeValue);
  });