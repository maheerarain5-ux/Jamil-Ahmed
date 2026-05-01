import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Plane, 
  MapPin, 
  ChevronRight, 
  Globe, 
  ShieldCheck, 
  Users, 
  GraduationCap, 
  Phone, 
  Mail, 
  Clock,
  Ticket,
  Moon,
  Compass,
  Play
} from 'lucide-react';

const GOLD_GRADIENT = "bg-gradient-to-r from-[#D4AF37] via-[#F9E2AF] to-[#D4AF37] bg-clip-text text-transparent";
const GOLD_BORDER = "border-[#D4AF37]/30";

const SERVICES = [
  {
    title: "Air Ticketing",
    description: "Global flight reservations at best rates",
    icon: Ticket,
    bg: "https://images.unsplash.com/photo-1436491865332-7a61a109c05d?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Hajj & Umrah Services",
    description: "Spiritual journeys with luxury and ease",
    icon: Moon,
    bg: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Visa Consultancy",
    description: "Expert guidance for your global travels",
    icon: Globe,
    bg: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Visa Processing",
    description: "Fast-track documentation and submission",
    icon: ShieldCheck,
    bg: "https://images.unsplash.com/photo-1585829365294-bb8c6f028881?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Overseas Employment",
    description: "Connecting talent with global opportunities",
    icon: Users,
    bg: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Education Abroad",
    description: "Building your future in world-class institutions",
    icon: GraduationCap,
    bg: "https://images.unsplash.com/photo-1523050335192-ce125a4312bd?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Domestic Tour",
    description: "Explore the breathtaking beauty of Pakistan",
    icon: Compass,
    bg: "https://images.unsplash.com/photo-1584043232678-75f1b672728f?auto=format&fit=crop&q=80&w=1000"
  }
];

const COMMERCIAL_SCENES = [
  {
    title: "Spritual Excellence",
    subtitle: "Complete Hajj & Umrah Packages",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1920",
    description: "Tailored luxury for your most sacred journey."
  },
  {
    title: "Global Horizons",
    subtitle: "Visa & Education Consultancy",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1920",
    description: "Unlocking doors to world-class opportunities."
  },
  {
    title: "Breathtaking Travels",
    subtitle: "Domestic & International Tours",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1920",
    description: "Discover the hidden gems of Pakistan and the world."
  }
];

const ACCREDITATIONS = [
  { name: "IATA", label: "Accredited Agent" },
  { name: "DTS", label: "Approved Agent" },
  { name: "NAST", label: "International Promoter" },
  { name: "SST", label: "Consultants" }
];

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeScene, setActiveScene] = useState(0);
  const { scrollYProgress } = useScroll();
  const yScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setActiveScene((prev) => (prev + 1) % COMMERCIAL_SCENES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      {/* Dynamic Cinematic Overlay */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
          >
            <div className="text-center">
              <motion.div 
                animate={{ scale: [0.9, 1.1, 1], opacity: [0, 1, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="text-[#D4AF37] text-4xl font-extralight tracking-[1em] mb-4"
              >
                AL SIRAJ
              </motion.div>
              <div className="h-0.5 w-12 bg-[#D4AF37]/30 mx-auto" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Luxury Navigation */}
      <nav className="fixed top-0 w-full z-[60] bg-gradient-to-b from-black/80 to-transparent backdrop-blur-[2px]">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <div className="w-12 h-12 rounded-full border-2 border-[#D4AF37] flex items-center justify-center p-1 bg-black shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              <div className="w-full h-full rounded-full bg-[#D4AF37] flex items-center justify-center">
                <span className="text-black font-black text-sm">ASG</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold tracking-tighter leading-none ${GOLD_GRADIENT}`}>
                AL SIRAJ GROUP
              </span>
              <span className="text-[10px] text-gray-400 tracking-[0.3em] uppercase mt-1">Private Limited</span>
            </div>
          </motion.div>

          <div className="hidden lg:flex items-center space-x-12 text-gray-400">
            {["Home", "Commercial", "Services", "Contact"].map((item, idx) => (
              <motion.a 
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
                href={`#${item.toLowerCase()}`} 
                className="text-[11px] font-bold uppercase tracking-[0.2em] hover:text-[#D4AF37] transition-all relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#D4AF37] group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="group relative px-8 py-3 bg-[#D4AF37] text-black font-black text-[10px] uppercase tracking-[0.2em] rounded-sm overflow-hidden hover:scale-105 transition-transform"
          >
            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 skew-x-12" />
            <span className="relative z-10 font-sans">Get In Touch</span>
          </motion.button>
        </div>
      </nav>

      {/* Video-Enhanced Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div style={{ scale: yScale }} className="w-full h-full">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="w-full h-full object-cover opacity-50 contrast-125"
            >
              <source src="https://player.vimeo.com/external/370338571.sd.mp4?s=75d7411277a83d46d0c10b4c849767664687ed4b&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0A0A0A]" />
          </motion.div>
        </div>

        <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <motion.div 
                initial={{ letterSpacing: "1em", opacity: 0 }}
                animate={{ letterSpacing: "0.2em", opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-[#D4AF37] font-black italic text-sm md:text-base mb-6 border-l-4 border-[#D4AF37] pl-4"
              >
                EXPERIENCE THE PINNACLE OF TRAVEL
              </motion.div>
              <h1 className="text-7xl md:text-9xl font-black mb-6 tracking-tighter leading-[0.85] text-white">
                ELITE<br />
                <span className={GOLD_GRADIENT}>JOURNEYS</span>
              </h1>
              <p className="max-w-xl text-lg text-gray-400 font-light leading-relaxed mb-10 border-l border-white/10 pl-8">
                Al Siraj Group redefines travel through precision, luxury, and spiritual dedication. 
                Your premier destination for global visa processing and sacred pilgrimages.
              </p>
              <div className="flex flex-wrap gap-6">
                <button className="flex items-center space-x-3 bg-white text-black px-8 py-4 rounded-none font-bold uppercase tracking-widest hover:bg-[#D4AF37] transition-colors">
                  <Play size={18} fill="currentColor" />
                  <span>Start Journey</span>
                </button>
                <div className="flex items-center space-x-4 px-6 py-4 border border-white/10 backdrop-blur-md">
                  <div className="flex -space-x-3">
                    {[1,2,3].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-gray-800" />)}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37]">Trusted by 10k+ Families</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-4 hidden lg:block">
            <motion.div 
              animate={{ rotateY: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="relative w-80 h-80 rounded-full border-2 border-[#D4AF37]/20 flex items-center justify-center p-8 bg-black/40 backdrop-blur-xl shadow-[0_0_50px_rgba(212,175,55,0.1)]"
            >
              <div className="absolute inset-4 rounded-full border border-[#D4AF37]/40 animate-pulse" />
              <div className="text-center">
                <div className="text-5xl font-black text-[#D4AF37]">24/7</div>
                <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-300 mt-2">Expert Support</div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-12 left-6 z-20 flex flex-col items-center space-y-4">
          <div className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#D4AF37] transform -rotate-180 mb-4" style={{ writingMode: 'vertical-rl' }}>SCROLL</div>
          <motion.div 
            animate={{ height: [0, 60, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px bg-[#D4AF37] origin-top"
          />
        </div>
      </section>

      {/* Auto-playing Commercial Slider */}
      <section id="commercial" className="py-0 relative h-[80vh] flex items-center bg-black overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeScene}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />
            <motion.img 
              initial={{ scale: 1.1, x: -20 }}
              animate={{ scale: 1, x: 0 }}
              transition={{ duration: 6 }}
              src={COMMERCIAL_SCENES[activeScene].image} 
              className="w-full h-full object-cover opacity-60"
              referrerPolicy="no-referrer"
              alt={COMMERCIAL_SCENES[activeScene].title}
            />
          </motion.div>
        </AnimatePresence>

        <div className="container mx-auto px-6 relative z-20">
          <motion.div 
            key={`${activeScene}-content`}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-2xl"
          >
            <span className="text-[#D4AF37] text-xs font-black tracking-[0.4em] uppercase mb-4 block">FEATURED SHOWCASE</span>
            <h2 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter uppercase leading-none">
              {COMMERCIAL_SCENES[activeScene].title}
            </h2>
            <p className={`text-2xl md:text-3xl font-light italic mb-8 ${GOLD_GRADIENT}`}>{COMMERCIAL_SCENES[activeScene].subtitle}</p>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg">{COMMERCIAL_SCENES[activeScene].description}</p>
            
            <div className="flex items-center space-x-12">
              <div className="flex space-x-2">
                {COMMERCIAL_SCENES.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1 transition-all duration-500 ${i === activeScene ? 'w-12 bg-[#D4AF37]' : 'w-4 bg-white/20'}`} 
                  />
                ))}
              </div>
              <div className="text-[10px] font-bold tracking-widest text-[#D4AF37]">0{activeScene + 1} / 0{COMMERCIAL_SCENES.length}</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-32 px-6 bg-[#050505] relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8">
            <div className="max-w-2xl">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-[#D4AF37] text-xs font-bold tracking-[0.5em] block mb-4 uppercase"
              >
                Our Portoflio
              </motion.span>
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-none">
                PREMIUM <span className={GOLD_GRADIENT}>SERVICES</span>
              </h2>
            </div>
            <p className="text-gray-500 max-w-sm text-sm border-l border-[#D4AF37]/30 pl-6">
              Expert solutions tailored for global mobility, spiritual fulfillment, and educational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group h-[450px] overflow-hidden rounded-none border border-white/5 cursor-pointer"
              >
                <div className="absolute inset-0 z-0">
                  <img 
                    src={service.bg} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[50%] group-hover:grayscale-0" 
                    referrerPolicy="no-referrer"
                    alt={service.title}
                  />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                </div>
                
                <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                  <div className="w-12 h-12 rounded-none bg-[#D4AF37] flex items-center justify-center mb-6 -translate-x-12 group-hover:translate-x-0 transition-transform duration-500 delay-100">
                    <service.icon className="text-black" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 tracking-tighter group-hover:text-[#D4AF37] transition-colors">{service.title}</h3>
                  <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200">
                    {service.description}
                  </p>
                  <div className="mt-8 flex items-center text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.2em]">
                    Consult Now <div className="w-6 h-px bg-[#D4AF37] ml-2 group-hover:w-12 transition-all" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
          {[
            { value: "15k+", label: "VISA PROCESSED", icon: ShieldCheck },
            { value: "850+", label: "SUCCESSFUL TOURS", icon: MapPin },
            { value: "24/7", label: "ELITE SUPPORT", icon: Clock },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center md:items-start">
              <stat.icon className="text-[#D4AF37] mb-6" size={40} strokeWidth={1} />
              <div className="text-6xl font-black mb-2 tracking-tighter">{stat.value}</div>
              <div className="text-xs font-bold tracking-[0.3em] text-[#D4AF37]/60 uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#020202] pt-40 pb-12 border-t border-white/5 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 bg-[#111] p-12 shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-[#D4AF37]/20">
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-black mb-4 tracking-tighter">PLAN YOUR NEXT MOVE</h3>
              <p className="text-gray-400 max-w-md text-sm mb-0">Our expert consultants are ready to assist you with global visa guidelines and spiritual packages.</p>
            </div>
            <div className="flex items-center lg:justify-end mt-8 lg:mt-0">
              <button className="bg-[#D4AF37] text-black px-12 py-5 font-black uppercase text-xs tracking-widest hover:scale-105 transition-transform">
                Consult Experts
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-20 mb-32">
            <div className="lg:col-span-2">
               <div className="flex items-center space-x-3 mb-10">
                <div className="w-10 h-10 rounded-full border border-[#D4AF37] flex items-center justify-center bg-[#D4AF37] text-black font-black text-xs">AS</div>
                <span className={`text-2xl font-black tracking-tighter ${GOLD_GRADIENT}`}>AL SIRAJ GROUP</span>
              </div>
              <p className="text-gray-500 font-light leading-relaxed mb-10 max-w-sm">
                A legacy of excellence in travel management. We specialize in high-stakes visa processing, 
                educational placements, and sacred pilgrimages.
              </p>
            </div>

            <div>
              <h4 className="text-white text-xs font-black tracking-widest uppercase mb-10">Headquarters</h4>
              <div className="space-y-6 text-sm text-gray-400">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-[#D4AF37]" size={20} />
                  <span>Garden Town, Phase 3, Gujranwala</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="text-[#D4AF37]" size={20} />
                  <span>+92 306 600 1334</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white text-xs font-black tracking-widest uppercase mb-10">Contact Matrix</h4>
              <div className="space-y-6 text-sm text-gray-400">
                <div className="flex items-center space-x-4">
                  <Mail className="text-[#D4AF37]" size={20} />
                  <span className="break-all">alsirajtravelspk13@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 text-center text-[10px] font-bold tracking-[0.3em] text-gray-600 uppercase">
            © 2026 AL SIRAJ GROUP PRIVATE LIMITED. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}
