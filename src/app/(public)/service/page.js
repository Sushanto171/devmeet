import Container from "@/components/Container";
import { Layout, Shield, Users } from "lucide-react";
import Image from "next/image";
import aboutImage from "./about-hero.png";
import missionImage from "./our-mission.png";

export default function About() {
  return (
    <Container>
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Welcome to our platform! We are committed to delivering innovative solutions to empower your business.
        </p>
        <div className="mt-8">
          <Image src={aboutImage} alt="About Hero" className="mx-auto rounded-2xl shadow-md" />
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50 rounded-xl mt-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <Image src={missionImage} alt="Our Mission" className="rounded-xl shadow-lg" />
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              We aim to create powerful digital experiences that connect people and drive results. Our mission is to bring your vision to life with technology that is both beautiful and functional.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16">
        <h2 className="text-3xl font-semibold text-center mb-12">What We Value</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
            <div className="mb-4 text-indigo-600">
              <Users size={36} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
            <p className="text-gray-600">
              We believe in teamwork and building meaningful relationships with clients and users.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
            <div className="mb-4 text-indigo-600">
              <Shield size={36} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Integrity</h3>
            <p className="text-gray-600">
              Honesty and transparency guide all our actions and decisions.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
            <div className="mb-4 text-indigo-600">
              <Layout size={36} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Design & Innovation</h3>
            <p className="text-gray-600">
              We deliver cutting-edge designs paired with innovative solutions to meet modern needs.
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
}
