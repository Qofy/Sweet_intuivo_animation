import { FloatingCTA } from './components/FloationCTA';
import {Header} from './sections/Header'
import { Hero } from './sections/Hero';

function App() {

  return (
   <div className="text-white text-base not-italic normal-nums font-normal accent-auto bg-neutral-950 box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc min-h-full pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-nhaasgrotesktxpro">
      <FloatingCTA />
      <Header />
      <Hero />
   </div>
  )
}

export default App
