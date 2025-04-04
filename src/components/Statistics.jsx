const Statistics = () => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Our Statistics</h2>
            <div className="mt-2 space-y-2">
                <div className="bg-blue-500 text-white p-2 rounded">Questions: 17</div>
                <div className="bg-red-500 text-white p-2 rounded">Answers: 39</div>
                <div className="bg-green-500 text-white p-2 rounded">Best Answers: 5</div>
                <div className="bg-yellow-500 text-white p-2 rounded">Users: 127</div>
            </div>
        </div>
    );
};

export default Statistics;
