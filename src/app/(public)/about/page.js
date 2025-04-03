import Container from "@/components/Container";
import { Layout, Shield, Users } from "lucide-react";
import aboutImage from "./about-hero.png";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen text-gray-900 mb-12">
      {/* Hero Section with Background Image */}
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutImage.src})` }}
        >
          {/* Hero Background Image */}
        </div>
        <div className="relative z-10 text-center py-20 sm:py-32 lg:py-44">
          <h1 className="text-4xl font-bold text-white mb-4">About DevMeet</h1>
          <p className="text-lg text-white">
            Empowering Developers Through Knowledge Sharing
          </p>
        </div>
      </div>

      {/* About Section */}
      <Container>
        <div className="mt-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-primary">Our Mission</h2>
            <p className="mt-4 text-gray-700">
              DevMeet is designed to be a knowledge-sharing hub where developers
              can collaborate, discuss, and learn from each other. We aim to
              create an engaging and supportive community for developers of all
              levels.
            </p>
          </div>
          <div>
            <Image src={aboutImage} alt="Our Mission" width={500} height={300} />
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-primary text-center">
            Key Features
          </h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <Users className="mx-auto h-12 w-12 text-primary transition duration-300 transform hover:scale-110" />
              <h3 className="text-xl font-semibold mt-4">Community Driven</h3>
              <p className="text-gray-600 mt-2">
                A platform for developers to share insights and collaborate.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <Layout className="mx-auto h-12 w-12 text-primary transition duration-300 transform hover:scale-110" />
              <h3 className="text-xl font-semibold mt-4">Modern UI/UX</h3>
              <p className="text-gray-600 mt-2">
                A sleek, intuitive interface for a seamless experience.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <Shield className="mx-auto h-12 w-12 text-primary transition duration-300 transform hover:scale-110" />
              <h3 className="text-xl font-semibold mt-4">Secure & Scalable</h3>
              <p className="text-gray-600 mt-2">
                Built with Next.js and MongoDB for high performance.
              </p>
            </div>
          </div>
        </div>

         {/* Contributors Section */}
         <div className="mt-16">
          <h2 className="text-2xl font-semibold text-primary text-center">
            Our Contributors
          </h2>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <Image
                src={aboutImage}
                alt="Contributor 3"
                className="mx-auto h-24 w-24 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <Image
                src={aboutImage}
                alt="Contributor 3"
                className="mx-auto h-24 w-24 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <Image
                src={aboutImage}
                alt="Contributor 3"
                className="mx-auto h-24 w-24 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-gray-600">UI/UX Designer</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <Image
                src={aboutImage}
                alt="Contributor 3"
                className="mx-auto h-24 w-24 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">Alice Johnson</h3>
              <p className="text-gray-600">Backend Developer</p>
            </div>
          </div>
          </div>
      </Container>
    </div>
  );
}
