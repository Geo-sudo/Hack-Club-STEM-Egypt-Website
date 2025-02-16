
//component 
import BgHomePage from "@/components/bgHomePage";
import HomeContent from "@/components/Home-Content";


// for cloudFlare
export const runtime = "edge";


export default function Home() {

  return (
   <div className="text-white">

      <BgHomePage/>
      <HomeContent/>
    

   </div>
  );
}
