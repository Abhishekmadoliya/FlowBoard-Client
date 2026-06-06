import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import LogoBar from "@/components/landing/LogoBar";
import FeatureGrid from "@/components/landing/FeatureGrid";
import SeeItInAction from "@/components/landing/SeeItInAction";
import TemplateGallery from "@/components/landing/TemplateGallery";
import Testimonials from "@/components/landing/Testimonials";
import CtaBanner from "@/components/landing/CtaBanner";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Flowboard — Where Ideas Flow Together",
  description:
    "Real-time collaborative whiteboard for async and live team sessions. Build wireframes, plan sprints, and brainstorm without limits.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <LogoBar />
        <FeatureGrid />
        <SeeItInAction />
        <TemplateGallery />
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}