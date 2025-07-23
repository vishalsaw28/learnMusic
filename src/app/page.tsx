import FeaturedCourses from "@/components/FeaturedCourses";
import { GridBackgroundDemo } from "@/components/GridBackground";
import HeroSection from "@/components/HeroSection";
import StickyScrollRevel from "@/components/StickyScrollRevel";
import MusicSchoolTestimonialCards from "@/components/TestimonialCards";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <StickyScrollRevel />
      <MusicSchoolTestimonialCards />
    </main>
  );
}
