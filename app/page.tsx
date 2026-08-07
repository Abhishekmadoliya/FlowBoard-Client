import type { Metadata } from "next";
import CloudvynBanner from "@/components/landing/CloudvynBanner";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import AiAgentsShowcase from "@/components/landing/AiAgentsShowcase";
import IntegrationsShowcase from "@/components/landing/IntegrationsShowcase";
import FeatureGrid from "@/components/landing/FeatureGrid";
import SeeItInAction from "@/components/landing/SeeItInAction";
import TemplateGallery from "@/components/landing/TemplateGallery";
import CloudvynPricingSection from "@/components/landing/CloudvynPricingSection";
import Testimonials from "@/components/landing/Testimonials";
import FaqSection from "@/components/landing/FaqSection";
import CtaBanner from "@/components/landing/CtaBanner";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Flowboard — Multi-collaborator canvas powered by autonomous AI | Cloudvyn",
  description:
    "Real-time collaborative whiteboard app with autonomous AI agents. Included in your cloudvyn.com subscription.",
};

export default function Home() {
  return (
    <div className="bg-white text-zinc-900 min-h-screen flex flex-col font-sans">
      <CloudvynBanner />
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AiAgentsShowcase />
        <IntegrationsShowcase />
        <FeatureGrid />
        <SeeItInAction />
        <TemplateGallery />
        <CloudvynPricingSection />
        <Testimonials />
        <FaqSection />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}