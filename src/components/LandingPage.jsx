import HeroSection from './HeroSection.jsx';
import HowItWorks from './HowItWorks.jsx';
import FeaturesSection from './FeaturesSection.jsx';
import CommunitySection from './CommunitySection.jsx';
import CallToAction from './CallToAction.jsx';
import Footer from './Footer.jsx';

export default function LandingPage() {
    return (
        <div className='bg-white'>
            <HeroSection />
            <HowItWorks />
            <FeaturesSection />
            <CommunitySection />
            <CallToAction />
            <Footer />
        </div>
    );
}
