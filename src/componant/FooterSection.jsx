import { ArrowUp } from "lucide-react";

function FooterSection() {
  return (
    <div className="py-10 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items.center ">
      <p className="text-md py-2"> &copy; {new Date().getFullYear()} Pedrotech.co , All rights reserved.</p>
      <div className="bg-background px-2 py-2 border rounded-full hover:bg-background/70 transition duration-300 active: border-primary ">
         <a href="#home"><ArrowUp/></a>
      </div>
     
    </div>
    
  );
}

export default FooterSection;
