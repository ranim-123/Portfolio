import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import toast from "react-hot-toast";
import { cn } from "../lib/Utilites.js";
import { useState } from "react";


function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(true);
 
  function handleFormSubmit(e) {
    e.preventDefault();
    console.log("form submitted");
    toast("thank you for your message", {
      style: {
        background: "#070a20ff",
        color: "#fff",
        borderRadius: "20px",
      },
      duration: 3000,
      removeDelay: 0,
    });
    setIsSubmitted(false); 
    setTimeout(() => {
      setIsSubmitted(true);
    }, 3000);
  }

  return (
    <section
      id="contact"
      className="py-24 md:px-20 lg:px-40 mx-auto relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Git in<span className="text-primary"> Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to cillaborateb? fell free to reach
          out. I'm always open to new opportunities
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2     gap-12">
        <div className="mt-6 space-y-8">
          <h3 className="text-2xl font-semibold mb-10">Contact Information</h3>
          <div className="space-y-6 justify-center  lg:ml-40 p-5 lg:p-0 md: p-0 sm:p-0">
            <div className="flex items-start space-x-4 ">
              <div className="p-3 rounded-full bg-primary/20  ">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <a
                  href="mailto:ranim.taieb@univ-constantine2.dz"

                  className="text-muted-foreground hover:text-primary transation-color "
                >
                  ranim.taieb@univ-constantine2.dz
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4 ">
              <div className="p-3 rounded-full bg-primary/20  ">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div className="ml-13">
                <h4 className="font-medium">phone</h4>
                <a
                  href="tell:+213555000000"
                  className="text-muted-foreground  hover:text-primary transation-color "
                >
                  +1 (123) 456-7890
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4 ">
              <div className="p-3 rounded-full bg-primary/20  ">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div className="ml-19">
                <h4 className="font-medium">Location</h4>
                <a className="text-muted-foreground hover:text-primary transation-color ">
                  constantine
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 lg:mr-8 sm: mr-4">
            <h4 className="font-meduim mb-4 ">Connect with me</h4>
            <div className="flex space-x-4 justify-center">
              <a href="#">
                {" "}
                <Linkedin />
              </a>
              <a href="#">
                {" "}
                <Twitter />
              </a>
              <a href="#">
                {" "}
                <Instagram />
              </a>
              <a href="#">
                {" "}
                <Twitch />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-card p-8 rounded-lg shadow-xs space-y-4">
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8">
            Send a Messege
          </h3>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none placeholder:text-gray-600"
                placeholder="Jhon"
              />
            </div>
            <div>
              <label htmlFor="Email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="text"
                name="Email"
                id="Email"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none placeholder:text-gray-600"
                placeholder="Jhon@gmail.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none placeholder:text-gray-600 resize-none"
                placeholder="write what you want ...."
              />
            </div>
            <div>
              <button
                disabled={!isSubmitted}
                onClick={handleFormSubmit}
                type="submit "
                className={cn(
                  "mx-auto cosmic-button w-full flex justify-center gap-2"
                )}
              >
                {isSubmitted ? "Send Messege" : "Sending..."}
                <Send className="mt-1" size={16} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
