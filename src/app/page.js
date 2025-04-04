import Banner from "@/components/Banner";
import QuestionCard from "@/components/QuestionCard";
import Statistics from "@/components/Statistics";

export default function Home() {
    return (
        <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-3">
                <Banner />
            </div>
            <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Recent Questions</h2>
                <QuestionCard
                    user="Sophie Taylor"
                    date="January 4, 2023"
                    category="Comic Books"
                    title="What five Marvel characters do you choose to ensure your safety?"
                    description="The entire DC Universe is out to assassinate you. What five Marvel characters do you choose to ensure your safety and why?"
                    tags={["Comic", "Dc"]}
                    likes={194}
                    comments={1}
                    views={11000}
                />
                <QuestionCard
                    user="Sophie Taylor"
                    date="January 12, 2023"
                    category="Education"
                    title="Would it be possible to give a human artificial gills?"
                    description="Would it be possible to give a human artificial gills, capable of allowing humans to breathe underwater (with no outside source of oxygen except from H2O)?"
                    tags={["Education", "Science"]}
                    likes={90}
                    comments={2}
                    views={6000}
                />
            </div>
            <Statistics />
        </div>
    );
}
