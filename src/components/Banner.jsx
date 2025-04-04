const Banner = () => {
    return (
        <div className="bg-gray-100 p-8 text-center rounded-lg shadow-md">
            <h1 className="text-3xl font-bold">Welcome To DevMeet</h1>
            <p className="text-gray-600 mt-2">
                Ask questions and get real answers from real people.
            </p>
            <button className="mt-4 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
                Create A New Account
            </button>
        </div>
    );
};

export default Banner;