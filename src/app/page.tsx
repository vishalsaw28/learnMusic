import FeaturedCourses from "@/components/FeaturedCourses";
import { GridBackgroundDemo } from "@/components/GridBackground";
import HeroSection from "@/components/HeroSection";
import StickyScrollRevel from "@/components/StickyScrollRevel";
import MusicSchoolTestimonialCards from "@/components/TestimonialCards";
import Image from "next/image";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";
//import Mateor from "@/components/ui/MateorShower";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <StickyScrollRevel />
      <MusicSchoolTestimonialCards />
      <UpcomingWebinar />
      <Instructors />
      <Footer />
    </main>
  );
}
