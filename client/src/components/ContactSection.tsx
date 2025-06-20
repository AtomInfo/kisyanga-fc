import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<{ name: string; email: string; subject: string; message: string }>();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: { name: string; email: string; subject: string; message: string }) => {
    setLoading(true);
    // try {
    //   await axios.post('http://localhost:5000/api/v1/settings/message', {
    //     ...data,
    //     sheet: "Kisyanga Contact Us"
    //   });
    //   // Optionally show a success message here
    //   reset();
    // } catch (error) {
    //   // Optionally handle error here
    //   console.error('Message send failed:', error);
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <section id="contact" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Contact Us</h2>
        <p className="text-center mb-12 text-gray-600 max-w-3xl mx-auto">
          Have questions or want to get in touch with Kisyanga FC? We'd love to hear from you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="order-2 md:order-1">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  {...register('name', { required: 'Full name is required' })}
                  disabled={loading}
                />
                {errors.name && (
                  <span className="text-red-400 text-sm">{errors.name.message}</span>
                )}
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Invalid email address'
                    }
                  })}
                  disabled={loading}
                />
                {errors.email && (
                  <span className="text-red-400 text-sm">{errors.email.message}</span>
                )}
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  {...register('subject', { required: 'Subject is required' })}
                  disabled={loading}
                />
                {errors.subject && (
                  <span className="text-red-400 text-sm">{errors.subject.message}</span>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  {...register('message', { required: 'Message is required' })}
                  disabled={loading}
                ></textarea>
                {errors.message && (
                  <span className="text-red-400 text-sm">{errors.message.message}</span>
                )}
              </div>

              <button
                type="submit"
                className="bg-primary text-white font-bold py-3 px-6 rounded-md hover:bg-primary/90 transition w-full md:w-auto"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          <div className="order-1 md:order-2">
            <div className="bg-gray-100 p-6 rounded-lg h-full">
              <h3 className="font-bold text-xl mb-4">Connect With Us</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-primary mt-1 mr-4">
                    <i className="fas fa-map-marker-alt text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold">Home Ground</h4>
                    <p className="text-gray-600">Ntare School Grounds, Mbarara, Uganda</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-primary mt-1 mr-4">
                    <i className="fas fa-envelope text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-600">info@kisyangafc.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-primary mt-1 mr-4">
                    <i className="fas fa-phone text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-gray-600">+256 700 123 456</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a target="_blank" href="https://instagram.com/kisyanga_fc" className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-accent transition">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a target="_blank" href="https://twitter.com/kisyangafc" className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-accent transition">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a target="_blank" href="#" className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-accent transition">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a target="_blank" href="#" className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-accent transition">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>

              <div className="mt-8 h-48 bg-gray-300 rounded-lg">
                {/* Google Maps placeholder */}
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-gray-600">Google Maps Integration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
