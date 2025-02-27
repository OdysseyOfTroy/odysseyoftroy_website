import CoreblueScreen from "./components/coreblue_screen"
import IntroductionScreen from "./components/introduction_screen"

export default function App() {
  return <div className="snap-y snap-mandatory h-screen w-screen overflow-auto"> 
    <IntroductionScreen />
    <CoreblueScreen />  
  </div>
}
