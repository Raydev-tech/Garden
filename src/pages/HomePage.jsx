import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Leaf, Users, Award, Sprout, Scissors, TreePine, Flower, CheckCircle, Star, Clock, HelpCircle } from "lucide-react";

const HomePage = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
  const faqs = [
  {
    question: "Do you offer free consultations?",
    answer:
      "Yes! We provide a free consultation to discuss your garden needs and ideas before starting any project.",
  },
  {
    question: "Are your gardening services eco-friendly?",
    answer:
      "Absolutely. We follow sustainable gardening practices to ensure minimal impact on the environment.",
  },
  {
    question: "How long does a typical garden makeover take?",
    answer:
      "The timeline varies depending on the project's size and complexity, but most projects are completed within 2-4 weeks.",
  },
  {
    question: "Do you provide maintenance services after installation?",
    answer:
      "Yes, we offer tailored maintenance packages to keep your garden looking beautiful all year round.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes, all our professionals are fully licensed and insured for your peace of mind.",
  },
];

  const testimonials = [
  {
    quote:
      "GreenThumb Gardens transformed our backyard into a paradise. Their attention to detail and plant knowledge is exceptional!",
    initials: "SJ",
    name: "Sarah Johnson",
    title: "Homeowner",
  },
  {
    quote:
      "Professional, reliable, and creative. They've been maintaining our commercial property for 3 years now.",
    initials: "MC",
    name: "Mike Chen",
    title: "Business Owner",
  },
  {
    quote:
      "From design to installation, everything was perfect. Our garden is now the envy of the neighborhood!",
    initials: "ER",
    name: "Emily Rodriguez",
    title: "Homeowner",
  },
];

  const features = [
    { title: "Licensed & Insured", desc: "Fully certified professionals" },
    { title: "Eco-Friendly", desc: "Sustainable gardening practices" },
    { title: "Local Expertise", desc: "Native plant specialists" },
    { title: "Satisfaction Guaranteed", desc: "100% customer satisfaction" },
  ];

   const services = [
    {
      title: "Garden Design",
      description: "Custom landscape design tailored to your space, style, and budget preferences.",
      icon: <Sprout className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Maintenance",
      description: "Regular upkeep including pruning, weeding, and seasonal garden care.",
      icon: <Scissors className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Tree Care",
      description: "Professional tree pruning, removal, and health assessment services.",
      icon: <TreePine className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Planting",
      description: "Expert plant selection and installation for beautiful, thriving gardens.",
      icon: <Flower className="h-8 w-8 text-green-600" />,
    },
  ];

  return (
    <>
      <section className="relative bg-gradient-to-br from-green-50 to-emerald-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8" data-aos="fade-right">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Transform Your
                  <span className="text-green-600 block">Garden Dreams</span>
                  Into Reality
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Professional landscaping and garden maintenance services that
                  bring beauty, sustainability, and joy to your outdoor spaces.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-lg">
                  Start Your Project
                </button>
                <button className="border border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg rounded-lg">
                  View Our Work
                </button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-green-600" />
                  <span className="text-gray-600">500+ Happy Clients</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-green-600" />
                  <span className="text-gray-600">Award Winning</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative" data-aos="fade-left">
              <img
                src="https://images.pexels.com/photos/32244651/pexels-photo-32244651/free-photo-of-woman-in-lilac-garden-embracing-springtime-beauty.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Beautiful garden landscape"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              <div
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg"
                data-aos="zoom-in"
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Leaf className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Eco-Friendly</p>
                    <p className="text-sm text-gray-600">
                      Sustainable practices
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="zoom-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Garden Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From design to maintenance, we offer comprehensive garden services to keep your outdoor space thriving
            year-round.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl border border-gray-100 p-8 text-center hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section id="about" className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <img
              src="https://images.pexels.com/photos/5231137/pexels-photo-5231137.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Professional gardener at work"
              width={600}
              height={500}
              className="rounded-2xl shadow-lg w-full"
            />
          </div>

          <div className="space-y-6" data-aos="fade-left">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Growing Beautiful Gardens for Over 15 Years
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At GreenThumb Gardens, we believe every outdoor space has the potential to become a stunning
                sanctuary. Our team of certified horticulturists and landscape designers brings passion, expertise,
                and creativity to every project.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-green-50 border border-green-200 rounded-xl p-8 shadow-md"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-800 font-semibold">{testimonial.initials}</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section id="gallery" className="py-20 bg-green-50" data-aos="fade-up">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Recent Projects</h2>
      <p className="text-lg text-gray-600">
        A glimpse of the green transformations we've crafted for our happy clients.
      </p>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1692795/pexels-photo-1692795.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Garden Project 1"
          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800">Backyard Oasis</h3>
          <p className="text-gray-600 text-sm mt-1">Lush greenery and a serene water feature.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <img
          src="https://images.pexels.com/photos/28129605/pexels-photo-28129605/free-photo-of-innovative-vertical-hydroponic-garden-indoors.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Garden Project 2"
          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800">Modern Garden Design</h3>
          <p className="text-gray-600 text-sm mt-1">Clean lines with elegant planting.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <img
          src="https://images.pexels.com/photos/4906521/pexels-photo-4906521.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Garden Project 3"
          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800">Cozy Courtyard</h3>
          <p className="text-gray-600 text-sm mt-1">Perfect spot for morning coffee and blooms.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <img
          src="https://images.pexels.com/photos/176395/pexels-photo-176395.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Garden Project 4"
          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800">Tropical Retreat</h3>
          <p className="text-gray-600 text-sm mt-1">Exotic plants and vibrant colors.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <img
          src="https://images.pexels.com/photos/29063145/pexels-photo-29063145/free-photo-of-close-up-of-succulent-in-minimalistic-planter.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Garden Project 5"
          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800">Minimal Zen Garden</h3>
          <p className="text-gray-600 text-sm mt-1">Rocks, bamboo, and harmony.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <img
          src="https://images.pexels.com/photos/6204562/pexels-photo-6204562.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Garden Project 6"
          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800">Family-Friendly Space</h3>
          <p className="text-gray-600 text-sm mt-1">Safe, fun, and functional for all ages.</p>
        </div>
      </div>
    </div>
  </div>
</section>

    <section className="py-20 bg-green-600">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8" data-aos="zoom-in">
          <h2 className="text-4xl font-bold text-white">
            Ready to Create Your Dream Garden?
          </h2>
          <p className="text-xl text-green-100">
            Get a free consultation and quote for your garden project. Let's bring your vision to life!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2 text-green-100">
              <Clock className="h-5 w-5" />
              <span>Free consultation within 24 hours</span>
            </div>
          </div>

          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white border border-white text-gray-900 placeholder-gray-500 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-300"
            />
            <button
              type="submit"
              className="bg-white text-green-600 hover:bg-green-50 px-8 py-2 rounded-md font-semibold transition duration-300"
            >
              Get Free Quote
            </button>
          </form>
        </div>
      </div>
    </section>
    <section id="contact" className="py-20 bg-white" data-aos="fade-up">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
      <p className="text-lg text-gray-600">
        Have questions or ready to start your garden transformation? Send us a message!
      </p>
    </div>
    <form className="max-w-2xl mx-auto grid gap-6">
      <div className="grid sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
      <input
        type="text"
        placeholder="Subject"
        className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <textarea
        rows="5"
        placeholder="Your Message"
        className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
      ></textarea>
      <button
        type="submit"
        className="bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition duration-300"
      >
        Send Message
      </button>
    </form>
  </div>
</section>
<section id="faq" className="py-20 bg-green-50" data-aos="fade-up">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-6 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center space-x-4">
                <HelpCircle className="h-8 w-8 text-green-600 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>
              </div>
              {openIndex === index && (
                <p className="mt-4 text-gray-700 leading-relaxed">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    </>
  );
};

export default HomePage;
