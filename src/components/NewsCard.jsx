import { FaEye, FaStar } from "react-icons/fa";
import { MdShare, MdBookmarkBorder } from "react-icons/md";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
    const {
        id,
        title,
        rating,
        total_view,
        author,
        thumbnail_url,
        details,
        tags,
    } = news;

    const formattedDate = new Date(author.published_date).toLocaleDateString(
        "en-US",
        {
            year: "numeric",
            month: "long",
            day: "numeric",
        }
    );

    return (
        <div className="card bg-white shadow-md rounded-lg overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-base-200">
                <div className="flex items-center gap-3">
                    <img
                        src={author?.img}
                        alt={author.name}
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <p className="font-semibold text-sm">{author.name}</p>
                        <p className="text-gray-500 text-xs">{formattedDate}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 text-xl text-gray-500">
                    <MdBookmarkBorder className="cursor-pointer" />
                    <MdShare className="cursor-pointer" />
                </div>
            </div>

            {/* Title */}
            <div className="px-4 pt-4">
                <Link to={`/news-details/${id}`} className="font-bold text-lg hover:underline">
                    {title}
                </Link>
            </div>

            {/* Thumbnail */}
            <div className="px-4 pt-3">
                <img
                    src={thumbnail_url}
                    alt="news"
                    className="w-full rounded-lg object-cover max-h-[220px]"
                />
            </div>

            {/* Tags + Details */}
            <div className="px-4 pt-3 text-sm text-gray-600">
                <p className="mb-1">
                    <strong>Tags:</strong> <span className="text-secondary">{tags.join(", ")}</span>
                </p>
                <p className="line-clamp-3">
                    {details}
                </p>
            </div>

            {/* Read More */}
            <div className="px-4 pt-2">
                <Link to={`/news-details/${id}`} className="text-secondary font-semibold hover:underline">
                    Read More
                </Link>
            </div>

            {/* Footer: Rating & Views */}
            <div className="flex items-center justify-between px-4 py-4 border-t text-sm mt-2">
                <div className="flex items-center text-orange-500 gap-1">
                    {[...Array(rating.number)].map((_, i) => (
                        <FaStar key={i} />
                    ))}
                    <span className="text-gray-800 ml-2">{rating.number}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                    <FaEye />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
