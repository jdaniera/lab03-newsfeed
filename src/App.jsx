import news_feed from './news_stories.json';
import NewsList from './components/NewsList';

function App() {

  const stories = news_feed.news;

  return (
    <div className="App">
      <h1 className='page-title'>Your Own Curated Vancouver Newsfeed</h1>
      <NewsList stories={stories} />
    </div>
  );
}

export default App;
