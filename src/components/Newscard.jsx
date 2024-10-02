import '../App.css'
export default function Newscard({ title, link, author, image_url, content }) {

    function handleDelete(e) {
        if (e.target.tagName !== 'SPAN') {
            return;
        }
        e.currentTarget.remove();
    }

    return (
        <div 
            className="news-container"
            onClick={handleDelete}
        >
            <div className='close-button'>
                <span>Close X</span>
            </div>
            
            <div className="news-title">
                <h1><a href={link} target="_blank" rel="noopener noreferrer">{title}</a></h1>
                <h3>By: {author}</h3>
            </div>
            <div className='news-content'>
                <img src={image_url} alt={title} className="news-img"/>
                <p>{content}</p> 
            </div>
        </div>
    );
}
