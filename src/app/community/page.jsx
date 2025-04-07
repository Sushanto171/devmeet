import { FiPlus } from "react-icons/fi";
import Container from "@/components/Container";

const CommunityPage = () => {
    const posts = [
        {
            id: 1,
            title: "How to get started with open-source contributions?",
            author: "John Doe",
            date: "April 5, 2025",
            description:
                "Looking for tips and resources to start contributing to open-source projects.",
            tags: ["Open Source", "Beginner"],
        },
        {
            id: 2,
            title: "Best practices for remote team collaboration",
            author: "Jane Smith",
            date: "April 3, 2025",
            description:
                "What tools and strategies work best for remote teams?",
            tags: ["Remote Work", "Collaboration"],
        },
    ];

    return (
        <Container>
            <div className="mx-auto py-12">
                <h1 className="text-3xl font-bold mb-6 text-center">
                    Community Discussions
                </h1>
                <div className="space-y-8">
                    {posts.map((post) => (
                        <div
                            key={post.id}
                            className="border p-4 rounded-lg shadow-md"
                        >
                            <h2 className="text-xl font-semibold">
                                {post.title}
                            </h2>
                            <p className="text-sm text-gray-500">
                                By {post.author} on {post.date}
                            </p>
                            <p className="mt-2 text-gray-700">
                                {post.description}
                            </p>
                            <div className="mt-4 flex gap-2">
                                {post.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="bg-gray-200 text-gray-700 text-sm px-2 py-1 rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center flex justify-center">
                    <button className="bg-primary text-white px-6 py-2 rounded-full shadow-lg hover:bg-secondary transition duration-300 hover:text-black flex items-center gap-2">
                        <FiPlus className="text-lg" />
                        Start a New Discussion
                    </button>
                </div>
            </div>
        </Container>
    );
};

export default CommunityPage;
