"use client"

import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MarketingPlan from "@/components/MarketingPlan";
import ProcessBuying from "@/components/ProcessBuying";
import ProcessSelling from "@/components/ProcessSelling";
import RealtorInfo from "@/components/RealtorInfo";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <Hero />
      <MarketingPlan />
      <ProcessSelling />
      <ProcessBuying />
      <RealtorInfo />
      <WhyUs />
      <CallToAction />
      <Footer />
    </>
  );
}
