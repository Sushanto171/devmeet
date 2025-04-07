"use client";

import { FiPlus, FiSearch } from "react-icons/fi";
import Container from "@/components/Container";
import { useState } from "react";

const CommunityPage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedTag, setSelectedTag] = useState("");
    const [visiblePosts, setVisiblePosts] = useState(2); // For pagination

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
        {
            id: 3,
            title: "How to build a personal portfolio website?",
            author: "Alice Johnson",
            date: "April 1, 2025",
            description:
                "Looking for tips and tools to create a personal portfolio website.",
            tags: ["Portfolio", "Web Development"],
        },
    ];

    // Filter posts based on search query and selected tag
    const filteredPosts = posts.filter(
        (post) =>
            (post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.description
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())) &&
            (selectedTag === "" || post.tags.includes(selectedTag))
    );

    // Load more posts
    const handleLoadMore = () => {
        setVisiblePosts((prev) => prev + 2);
    };

    return (
        <Container>
            <div className="mx-auto py-12">
                <h1 className="text-3xl font-bold mb-6 text-center">
                    Community Discussions
                </h1>

                {/* Search Bar */}
                <div className="flex justify-center mb-8">
                    <div className="relative w-full max-w-md">
                        <FiSearch className="absolute left-3 top-3 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search discussions..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>
                </div>

                {/* Filter by Tags */}
                <div className="flex justify-center gap-4 mb-8">
                    {[
                        "All",
                        "Open Source",
                        "Beginner",
                        "Remote Work",
                        "Collaboration",
                        "Portfolio",
                        "Web Development",
                    ].map((tag) => (
                        <button
                            key={tag}
                            onClick={() =>
                                setSelectedTag(tag === "All" ? "" : tag)
                            }
                            className={`px-4 py-1 rounded-full ${
                                selectedTag === tag ||
                                (tag === "All" && selectedTag === "")
                                    ? "bg-primary text-white"
                                    : "bg-gray-200 text-gray-700"
                            }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                {/* Posts */}
                <div className="space-y-8">
                    {filteredPosts.slice(0, visiblePosts).map((post) => (
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

                {/* Load More Button */}
                {visiblePosts < filteredPosts.length && (
                    <div className="mt-8 text-center">
                        <button
                            onClick={handleLoadMore}
                            className="bg-primary text-white px-6 py-2 rounded-full shadow-lg hover:bg-secondary transition duration-300 hover:text-black"
                        >
                            Load More
                        </button>
                    </div>
                )}

                {/* Start a New Discussion Button */}
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
