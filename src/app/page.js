import Container from "@/components/Container";
import Banner from "@/components/home/Banner";
import LeftContent from "@/components/home/LeftContent";
import QuestionCard from "@/components/home/QuestionCard";
import RightContent from "@/components/home/RightContent";

export default function Home() {
    return (
        <Container>
            <Banner />

            {/* main content */}
            <main className="grid md:grid-cols-12 gap-6">
                <aside className="col-span-3">
                    <LeftContent />
                </aside>
                <section className="col-span-6">
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
                </section>
                <aside className="col-span-3">
                    <RightContent />
                </aside>
            </main>
        </Container>
    );
}
