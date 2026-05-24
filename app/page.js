'use client';

import { useEffect, useState } from 'react';

export default function AmitPortfolioMockup() {
  const [activeSkill, setActiveSkill] = useState(null);
  const [displayedCode, setDisplayedCode] = useState('');
  const [activeService, setActiveService] = useState(null);
  const [step, setStep] = useState(1);

  const fullCode = `const ganpati = createDivineUI();

function ModernWebsite() {
  return (
    <PremiumExperience
      animation="smooth"
      seo="optimized"
      performance="fast"
    />
  );
}

deployWebsite();
renderExperience();
`;

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayedCode(fullCode.slice(0, index));
      index++;

      if (index > fullCode.length) {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      title: 'Deep India',
      tech: 'WordPress • NGO',
      url: 'https://deepindia.org',
      image:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Ayurhitam',
      tech: 'WooCommerce Store',
      url: 'https://www.ayurhitam.com',
      image:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Yira.ai',
      tech: 'HealthTech platform',
      url: 'https://yira.ai',
      image:
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Shree 1 Gram Gold Jewellery',
      tech: 'Ecommerce Website',
      url: 'https://shree1gramgoldjewellery.shop',
      image:
        'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Ash Accessories',
      tech: 'Shopify Store',
      url: 'https://ashaccessories.in',
      image:
        'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Ocimum Dentistry',
      tech: 'Premium Dental Clinic',
      url: 'https://ocimumdental.in',
      image:
        'https://images.unsplash.com/photo-1588776814546-ec7e7c7f7d95?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  const skills = [
    {
      name: 'WordPress',
      content:
        'WordPress helps create fast-loading, SEO-friendly and scalable business websites with easy management.',
    },
    {
      name: 'Shopify',
      content:
        'Shopify provides premium ecommerce experience with smooth checkout and secure online selling.',
    },
    {
      name: 'React.js',
      content:
        'React.js creates interactive frontend experiences with fast performance and smooth animations.',
    },
    {
      name: 'HTML/CSS',
      content:
        'HTML and CSS build responsive layouts and visually attractive website interfaces.',
    },
    {
      name: 'JavaScript',
      content:
        'JavaScript adds modern animations, interactions and dynamic website functionality.',
    },
    {
      name: 'WooCommerce',
      content:
        'WooCommerce creates powerful ecommerce stores with flexible customization support.',
    },
    {
      name: 'SEO',
      content:
        'SEO improves Google ranking, visibility and organic traffic for websites.',
    },
    {
      name: 'Webflow',
      content:
        'Webflow creates premium websites with modern UI and advanced animations.',
    },
    {
      name: 'Hosting & SSL',
      content:
        'Secure hosting and SSL improve website trust, speed and security.',
    },
    {
      name: 'Figma',
      content:
        'Figma helps create modern UI/UX design systems and prototypes.',
    },
  ];

  const services = [
    'WordPress Development',
    'Shopify Store Setup',
    'Landing Page Design',
    'Website Speed Optimization',
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-hidden relative">

      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse"></div>

        <div className="absolute top-[30%] left-[40%] w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[120px] animate-bounce"></div>

      </div>

      {/* Navbar */}
      <header className="border-b border-white/10 sticky top-0 backdrop-blur bg-black/70 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

          <h1 className="text-2xl font-bold tracking-wide">
            Amit<span className="text-purple-400">.</span>
          </h1>

          <nav className="hidden md:flex gap-8 text-sm text-white/70">
            <a href="#about" className="hover:text-white transition">
              About
            </a>

            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>

            <a href="#services" className="hover:text-white transition">
              Services
            </a>

            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </nav>

          <button className="bg-purple-500 hover:bg-purple-400 transition px-5 py-2 rounded-full text-sm font-medium">
            Hire Me
          </button>

        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">

        <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -top-10 -left-20"></div>

        <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl bottom-0 right-0"></div>

        <div className="max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-16 items-center relative z-10">

          <div>

            <p className="text-purple-400 uppercase tracking-[4px] text-sm mb-5">
              Freelance Web Developer
            </p>

            <h2 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
              Building Modern
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                {' '}Web Experiences
              </span>
            </h2>

            <p className="text-white/70 text-lg leading-8 max-w-xl mb-10">
              WordPress & Frontend Developer from Pune with experience building modern,
              responsive and SEO-friendly websites for brands, ecommerce businesses,
              NGOs and international clients.
            </p>

            <div className="flex flex-wrap gap-4">

              <button className="bg-white text-black px-7 py-3 rounded-full font-semibold hover:scale-105 transition">
                View Projects
              </button>

              <button className="border border-white/20 px-7 py-3 rounded-full hover:bg-white/10 transition">
                Download Resume
              </button>

            </div>

          </div>

          <div className="relative">

            <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-[40px] p-8 backdrop-blur-lg shadow-2xl">

              <div className="grid grid-cols-2 gap-5">

                <div className="bg-white/5 rounded-3xl p-6 border border-white/10">
                  <h3 className="text-4xl font-bold mb-2">50+</h3>
                  <p className="text-white/60">Projects Completed</p>
                </div>

                <div className="bg-white/5 rounded-3xl p-6 border border-white/10">
                  <h3 className="text-4xl font-bold mb-2">3+</h3>
                  <p className="text-white/60">Years Experience</p>
                </div>

                <div className="bg-white/5 rounded-3xl p-6 border border-white/10 col-span-2">

                  <p className="text-white/60 mb-3">
                    Specialized In
                  </p>

                  <div className="flex flex-wrap gap-3">

                    <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm">
                      WordPress
                    </span>

                    <span className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm">
                      Shopify
                    </span>

                    <span className="bg-pink-500/20 text-pink-300 px-4 py-2 rounded-full text-sm">
                      React.js
                    </span>

                    <span className="bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full text-sm">
                      SEO
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* About */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <p className="text-purple-400 uppercase tracking-[3px] text-sm mb-4">
              About Me
            </p>

            <h3 className="text-4xl font-bold mb-6 leading-tight">
              Crafting websites that look modern and perform smoothly.
            </h3>

            <p className="text-white/70 leading-8 mb-6">
              I’m Amit Patil, a web developer focused on WordPress, Shopify and frontend
              development. I help businesses build responsive, fast-loading and visually
              engaging websites.
            </p>

            <p className="text-white/70 leading-8">
              I’ve worked on NGO websites, ecommerce stores, healthcare websites,
              educational platforms and international client projects.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-5">

            {skills.map((skill) => (

              <button
                key={skill.name}
                onClick={() => setActiveSkill(skill)}
                className="bg-white/5 border border-white/10 rounded-3xl p-5 hover:-translate-y-2 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-cyan-500/20 transition text-left"
              >

                <p className="font-medium">
                  {skill.name}
                </p>

              </button>

            ))}

          </div>

        </div>

      </section>

      {/* Skill Popup */}
      <div
        className={`fixed top-0 right-0 h-screen w-full md:w-[500px] bg-[#0b1120] border-l border-white/10 z-[999] transition duration-500 ${
          activeSkill
            ? 'translate-x-0'
            : 'translate-x-full'
        }`}
      >

        <button
          onClick={() => setActiveSkill(null)}
          className="absolute top-6 right-6 text-3xl text-white/60 hover:text-white"
        >
          ×
        </button>

        {activeSkill && (

          <div className="p-10 pt-24 h-full overflow-y-auto">

            <p className="text-purple-400 uppercase tracking-[4px] text-sm mb-4">
              Technology
            </p>

            <h3 className="text-5xl font-black mb-8">
              {activeSkill.name}
            </h3>

            <p className="text-white/70 leading-9 text-lg mb-8">
              {activeSkill.content}
            </p>

          </div>

        )}

      </div>

      {/* Projects */}
      <section id="projects" className="bg-white/[0.03] py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex justify-between items-end mb-14 flex-wrap gap-5">

            <div>

              <p className="text-purple-400 uppercase tracking-[3px] text-sm mb-4">
                Featured Work
              </p>

              <h3 className="text-4xl font-bold">
                Selected Projects
              </h3>

            </div>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {projects.map((project) => (

              <a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-black border border-white/10 rounded-[30px] overflow-hidden hover:border-purple-400/40 hover:-translate-y-2 transition"
              >

                <div className="h-56 overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                </div>

                <div className="p-7">

                  <p className="text-white/50 text-sm mb-3">
                    {project.tech}
                  </p>

                  <h4 className="text-2xl font-semibold mb-4 group-hover:text-purple-300 transition">
                    {project.title}
                  </h4>

                  <div className="flex justify-between items-center">

                    <span className="text-white/50 text-sm">
                      Visit Website
                    </span>

                    <span className="text-purple-400 text-sm">
                      →
                    </span>

                  </div>

                </div>

              </a>

            ))}

          </div>

        </div>

      </section>

      {/* Services */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-16">

          <p className="text-purple-400 uppercase tracking-[3px] text-sm mb-4">
            Services
          </p>

          <h3 className="text-4xl font-bold">
            What I Can Help You With
          </h3>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          {services.map((service) => (

            <button
              key={service}
              onClick={() => {
                setActiveService(service);
                setStep(1);
              }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-cyan-500/20 hover:-translate-y-2 transition text-left"
            >

              <h4 className="text-xl font-semibold leading-8">
                {service}
              </h4>

            </button>

          ))}

        </div>

      </section>

      {/* Service Popup */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur z-[999] flex items-center justify-center transition ${
          activeService
            ? 'opacity-100 visible'
            : 'opacity-0 invisible'
        }`}
      >

        <div className="w-[95%] max-w-xl bg-[#0b1120] border border-white/10 rounded-[40px] p-10 relative overflow-hidden">

          <button
            onClick={() => setActiveService(null)}
            className="absolute top-5 right-5 text-3xl text-white/60 hover:text-white"
          >
            ×
          </button>

          {step === 1 && (
            <div>

              <p className="text-purple-400 uppercase tracking-[4px] text-sm mb-4">
                Start Your Project
              </p>

              <h3 className="text-4xl font-black mb-8">
                {activeService}
              </h3>

              <input
                type="text"
                placeholder="Business Name"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 mb-5 outline-none"
              />

              <button
                onClick={() => setStep(2)}
                className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 py-4 rounded-2xl font-semibold hover:scale-[1.02] transition"
              >
                Next
              </button>

            </div>
          )}

          {step === 2 && (
            <div>

              <p className="text-purple-400 uppercase tracking-[4px] text-sm mb-4">
                Owner Details
              </p>

              <h3 className="text-4xl font-black mb-8">
                Enter Your Details
              </h3>

              <input
                type="text"
                placeholder="Owner Name"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 mb-5 outline-none"
              />

              <input
                type="text"
                placeholder="Mobile Number"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 mb-5 outline-none"
              />

              <button
                onClick={() => setStep(3)}
                className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 py-4 rounded-2xl font-semibold hover:scale-[1.02] transition"
              >
                Submit
              </button>

            </div>
          )}

          {step === 3 && (
            <div className="text-center py-10">

              <div className="text-7xl mb-6 animate-bounce">
                🚀
              </div>

              <h3 className="text-4xl font-black mb-5">
                Thank You!
              </h3>

              <p className="text-white/70 leading-8 mb-8">
                Your project request has been received successfully.
              </p>

              <button
                onClick={() => {
                  setActiveService(null);
                  setStep(1);
                }}
                className="bg-gradient-to-r from-purple-500 to-cyan-500 px-8 py-4 rounded-2xl font-semibold"
              >
                Close
              </button>

            </div>
          )}

        </div>

      </div>

      {/* Creative Coding Experience */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <p className="text-purple-400 uppercase tracking-[4px] text-sm mb-4">
              Creative Coding Experience
            </p>

            <h3 className="text-5xl font-black leading-tight mb-8">
              Interactive
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
                {' '}Frontend Animations
              </span>
            </h3>

            <p className="text-white/70 leading-9 text-lg">
              Creating premium frontend experiences with smooth coding animations,
              modern interactions and visually engaging UI design.
            </p>

          </div>

          <div className="relative">

            <div className="absolute inset-0 bg-cyan-500/20 blur-[120px] rounded-full"></div>

            <div className="relative bg-[#0f172a] border border-white/10 rounded-[35px] overflow-hidden shadow-2xl">

              <div className="flex items-center gap-3 px-6 py-4 border-b border-white/10 bg-white/5">

                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>

                <p className="text-white/40 text-sm ml-4">
                  ganpati.jsx
                </p>

              </div>

              <div className="p-8 h-[450px] relative overflow-hidden">

                <pre className="text-sm leading-8 text-cyan-300 whitespace-pre-wrap font-mono">
                  {displayedCode}
                </pre>

                <div className="absolute bottom-6 right-6 animate-bounce text-7xl">
                  🙏
                </div>

                {displayedCode.length === fullCode.length && (

                  <div className="absolute bottom-6 left-6 bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm animate-pulse">
                    Code Executed Successfully ✓
                  </div>

                )}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section id="contact" className="px-6 pb-24">

        <div className="max-w-5xl mx-auto bg-gradient-to-r from-purple-600/30 to-cyan-500/20 border border-white/10 rounded-[40px] p-14 text-center">

          <p className="text-purple-300 uppercase tracking-[3px] text-sm mb-4">
            Let’s Work Together
          </p>

          <h3 className="text-5xl font-bold mb-6 leading-tight">
            Have a project idea?
          </h3>

          <p className="text-white/70 max-w-2xl mx-auto leading-8 mb-10">
            I’m currently available for freelance projects and website collaborations.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
              Contact Me
            </button>

            <button className="border border-white/20 px-8 py-4 rounded-full hover:bg-white/10 transition">
              WhatsApp
            </button>

          </div>

        </div>

      </section>

    </div>
  );
}