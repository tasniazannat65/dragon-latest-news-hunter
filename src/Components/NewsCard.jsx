import React from "react";
import { FaStar, FaEye, FaShareAlt, FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    thumbnail_url,
    details,
    rating,
    total_view,
    id
    
  } = news;

  const publishedDate = new Date(author.published_date).toLocaleDateString();

  return (
    <div className="card bg-base-100 shadow-xl border border-gray-200 hover:shadow-2xl transition duration-300">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold text-sm">{author.name}</h2>
            <p className="text-xs text-gray-500">{publishedDate}</p>
          </div>
        </div>
        <button className="text-gray-500 hover:text-primary flex gap-1">
            <FaRegBookmark size={18} />
          <FaShareAlt size={18} />
        </button>
      </div>

      {/* Title */}
      <div className="px-4 pt-3">
        <h3 className="font-bold text-lg text-gray-800 hover:text-primary cursor-pointer">
          {title}
        </h3>
      </div>

      {/* Image */}
      <figure className="px-4 pt-3">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-xl w-full object-cover"
        />
      </figure>

      {/* Details */}
      <div className="p-4 text-sm text-accent">
        {details.length > 200 ? (
          <>
            {details.slice(0, 200)}...{" "}
            <Link to={`/news-details/${id}`} className="text-orange-400 font-semibold cursor-pointer hover:underline">
              Read More
            </Link>
          </>
        ) : (
          details
        )}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center border-t border-t-gray-200 px-4 py-5 text-sm">
        <div className="flex items-center gap-2 text-yellow-500">
            {Array.from({length: rating.number}).map((_, i)=>(<FaStar key={i} />))}
          
          <span className="font-semibold text-gray-700">{rating.number}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>

      
    </div>
  );
};

export default NewsCard;
