import Navbar from './Components/Navbar.js'
import AboutUs from './Components/AboutUs.js';
import MembershipSection from './Components/MembershipSection.js';
import LoginWidget from './Components/LoginWidget.js';
function App() {
    return (
        <div>
            HowRU
            <Navbar />
            
            <AboutUs about_us_text="HowRU is an app which seeks to help manage your anxiety and stress. This app provides various features such as a daily mood diary where you can put how you feel each day by asking various questions. Additionally, immediate breathing exercises are available to calm your anxiety level at a moments notice.  "/>
            <MembershipSection />
            <LoginWidget />
        </div>
        
    )
}

export default App;