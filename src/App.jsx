import news_feed from './news_stories.json';
import Newslist from './components/Newslist';

function App() {

  const stories = news_feed.news;

  return (
    <div className="App">
      <h1 className='page-title'>Your Own Curated Vancouver Newsfeed</h1>
      <Newslist stories={stories} />
    </div>
  );
}

export default App;
