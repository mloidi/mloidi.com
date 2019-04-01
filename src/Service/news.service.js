const url =
  process.env.REACT_APP_NEWS_URL +
  'sources?language=en&category=technology' +
//   'everything?q=react&language=en&from=2019-03-31&to=2019-03-31&sortBy=popularity' +
  '&apiKey=' +
  process.env.REACT_APP_NEWS_API;

export const NewsService = {
  getTopHeadlines: () => {
    var req = new Request(url);
    fetch(req).then(function(response) {
      console.log(response.json());
    });
  }
};
