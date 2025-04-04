const QuestionCard = ({ user, date, category, title, description, tags, likes, comments, views }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-4">
            <div className="flex items-center space-x-2">
                <span className="font-bold text-pink-500">{user}</span>
                <span className="bg-blue-500 text-white px-2 py-1 text-xs rounded">Enlightened</span>
                <span className="text-gray-500 text-sm">Asked: {date}</span>
                <span className="text-gray-500 text-sm">{category}</span>
            </div>
            <h3 className="text-lg font-semibold mt-2">{title}</h3>
            <p className="text-gray-600 mt-1">{description}</p>
            <div className="flex space-x-2 mt-2">
                {tags.map(tag => (
                    <span key={tag} className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded">{tag}</span>
                ))}
            </div>
            <div className="flex items-center justify-between mt-4 text-gray-500 text-sm">
                <div className="flex items-center space-x-2">
                    <span>👍 {likes} Users</span>
                    <span>💬 {comments}</span>
                    <span>👀 {views} Views</span>
                </div>
                <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">Vote</button>
            </div>
        </div>
    );
};

export default QuestionCard;