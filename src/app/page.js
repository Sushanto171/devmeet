
import Container from "@/components/Container";
import Banner from "@/components/Home/Banner";
import ServiceCard from "@/components/Home/ServiceCard";
import RightContent from "@/components/Home/RightContent";

const services = [
    {
        id: 1,
        image: "/images/web-development.jpg",
        service: "Web Development",
        description:
            "We build modern, responsive, and scalable websites tailored to your business needs.",
    },
    {
        id: 2,
        image: "/images/app-development.jpg",
        service: "App Development",
        description:
            "We develop powerful and user-friendly mobile applications for iOS and Android.",
    },
    {
        id: 3,
        image: "/images/cloud-services.jpg",
        service: "Cloud Services",
        description:
            "We provide secure and scalable cloud solutions for your business.",
    },
    {
        id: 4,
        image: "/images/cyber-security.jpg",
        service: "Cyber Security",
        description:
            "We help protect your systems, applications, and business data.",
    },
    {
        id: 5,
        image: "/images/ui-ux.jpg",
        service: "UI/UX Design",
        description:
            "We create clean and user-friendly interfaces for web and mobile applications.",
    },
    {
        id: 6,
        image: "/images/software-development.jpg",
        service: "Software Development",
        description:
            "We develop custom software solutions based on your business requirements.",
    },
    {
        id: 7,
        image: "/images/it-support.jpg",
        service: "IT Support",
        description:
            "We provide reliable technical support and maintenance for your IT systems.",
    },
    {
        id: 8,
        image: "/images/data-analytics.jpg",
        service: "Data Analytics",
        description:
            "We turn your business data into useful insights and reports.",
    },
];

export default function Home() {
    return (
        <Container>
            <Banner />

            {/* Main Content */}
            <main className="grid grid-cols-12 gap-6">
                {/* Services */}
                <section className="col-span-12 lg:col-span-9">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service) => (
                            <ServiceCard
                                key={service.id}
                                image={service.image}
                                service={service.service}
                                description={service.description}
                            />
                        ))}
                    </div>
                </section>

                {/* Right Sidebar */}
                <aside className="col-span-12 lg:col-span-3">
                    <RightContent />
                </aside>
            </main>
        </Container>
    );
}

