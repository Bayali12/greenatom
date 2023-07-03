import fetchJsonp from 'fetch-jsonp';

export const fetchQuote = (setQuote) =>
  fetchJsonp(
    'https://api.forismatic.com/api/1.0/?method=getQuote&key=random&format=jsonp&lang=ru',
    {
      jsonpCallback: 'jsonp',
    },
  )
    .then((res) => res.json())
    .then((data) => setQuote(data))
    .catch((error) => {
      console.error(error);
    });
