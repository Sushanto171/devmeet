const Banner = () => {
    return (
        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold">Welcome To DevMeet</h1>
            <p className="text-gray-600 mt-2">
                Ask questions and get real answers from real people. Whether
                you&apos;re looking for crossword answers, practical advice or
                you&apos;ve just come for a chat, get answers to your questions. To
                get started all you need to do is register.
            </p>
            <button className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-primary">
                Create A New Account
            </button>
        </div>
    );
};

export default Banner;
