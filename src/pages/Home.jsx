import Hero from "../components/Hero";
import Header from "../components/Header";
import HowItWorks from "../components/HowItWorks";
import PricingSection from "../components/PriceCardSection";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/Faq";
import Footer from "../components/Footer";

export default function Home(){
    return(
        <>
        <Header/>
        <Hero/>
        <HowItWorks/>
        <PricingSection/>
        <Testimonials/>
        <FAQ/>
        <Footer/>
        </>
    )
}