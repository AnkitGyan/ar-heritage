import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import MonumentsCarousel from '../components/sections/MonumentsCarousel';
import MonumentFilterBar from '../components/sections/MonumentFilterBar';
import MonumentExternalCard from '../components/ui/MonumentExternalCard';
import { MONUMENTS } from '../data/monuments';

const Monuments = ()=>{
  return(
    <>
      <Navbar />
      <MonumentsCarousel/>
      <MonumentFilterBar />
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MONUMENTS.map((monument) => (
            <MonumentExternalCard key={monument.id} monument={monument} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Monuments;