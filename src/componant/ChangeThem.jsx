import { Moon, Sun } from "lucide-react";
import { useEffect,useState } from "react";
import {cn} from "../lib/Utilites.js";
function ChangeThem() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const theme=localStorage.getItem("theme");
        if(theme==="dark"){
            setIsDark(true);
            document.documentElement.classList.add("dark");
        }
        else{
            setIsDark(false);
            document.documentElement.classList.remove("dark");
        }
       
        
    }, []);
    function changeTheme() {
        if (isDark) {
            setIsDark(false);
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            setIsDark(true);
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
       
    }
    return (
        <> 
        <button   onClick={changeTheme} className={cn("fixed top-[21px] right-5 z-50    rounded-full  transition-color duration-300  cursor-pointer")}>{isDark?<Sun className="h-6 w-6 text-yellow-300 "/>:<Moon className="h-6 w-6 text-blue-900 "/>}</button>
        </>
           
        
    );
}
export default ChangeThem;
