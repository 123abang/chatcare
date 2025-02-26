import Navbar from '../components/nav';
import Hero from '../components/hero';
import AboutUs from '../components/Index1';
import RecentClients from '../components/RecentClient';
import WhyChooseUs from '../components/Why';
import Testimonies from '../components/Testimonies';
import MeetOurTeam from '../components/TeamMembers';
import Footer from '../components/Footer';
import DiscussSection from '../components/Discuss';
import Partners from '../components/Partners';
import Services from '../pages/Services'

const Home = () => {
    return ( 
    <div>
        <Navbar />
        <Hero />
        <AboutUs />
        <RecentClients />
        <WhyChooseUs />
        <Testimonies />
        <DiscussSection />
        <Partners />
        <MeetOurTeam />
        <Footer />
    </div>
     );
}
 
export default Home;