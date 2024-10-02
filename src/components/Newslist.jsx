import React from "react";
import Newscard from "./Newscard"; 

export default function Newslist({ stories }) {
    return (
        <div>
            {stories.map((newsItem, index) => (
                <Newscard
                    key={index}
                    title={newsItem.title}
                    link={newsItem.link}
                    author={newsItem.author.join(", ")}
                    image_url={newsItem.image_url}
                    content={newsItem.content}
                />
            ))}
        </div>
    );
}
