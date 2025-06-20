import { scrollToSection } from "@/lib/utils";
import { useState } from "react";
import axios from "axios";
import kisyangaLogo from "../assets/kisyanga-logo.jpg";
import { useForm } from "react-hook-form";

export default function Footer() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<{ email: string }>();

  const onSubmit = async (data: { email: string }) => {
    setLoading(true);
    // try {
    //   await axios.post('http://localhost:5000/api/v1/settings/subscribe', {
    //     email: data.email,
    //     sheet: "Kisyanga Subscriptions"
    //   });
    //   reset();
    // } catch (error) {
    //   console.error('Subscription failed:', error);
    // } finally {
    //   setLoading(false);
    // }

    setTimeout(() => {
      setLoading(false);
    }, 1000); // 1000 milliseconds = 1 seconds
  };

  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={kisyangaLogo}
                alt="Kisyanga FC Logo"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="font-bold text-xl">Kisyanga FC</span>
            </div>
            <p className="text-gray-300 mb-4">
              Brotherhood, Grit & Glory since 2006. The Golden Basya represents
              the spirit of unity and resilience.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/kisyanga_fc"
                className="text-gray-300 hover:text-secondary transition"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a
                href="https://twitter.com/kisyangafc"
                className="text-gray-300 hover:text-secondary transition"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-secondary transition"
              >
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-secondary transition"
              >
                <i className="fab fa-youtube text-xl"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { id: "home", label: "Home" },
                { id: "team", label: "Team" },
                { id: "fixtures", label: "Fixtures" },
                { id: "news", label: "News" },
                { id: "history", label: "History" },
              ].map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-gray-300 hover:text-secondary transition"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-secondary transition"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-secondary transition"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-secondary transition"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-secondary transition"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates and exclusive
              content.
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col space-y-2"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary text-gray-800"
                {...register("email", {
                  // required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                disabled={loading}
              />
              {errors.email && (
                <span className="text-red-400 text-sm">
                  {errors.email.message}
                </span>
              )}
              <button
                type="submit"
                className="bg-secondary text-primary font-bold py-2 px-4 rounded-md hover:bg-accent transition"
                disabled={loading}
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © 2023 Kisyanga FC. All rights reserved.
          </p>
          <div className="flex flex-col items-center md:items-end">
            {/* <p className="text-gray-400 mt-2 md:mt-0">Designed and developed with <i className="fas fa-heart text-secondary"></i> for the Golden Basya</p> */}
            <p className="text-gray-400">Designed by Atom Software Solutions</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
