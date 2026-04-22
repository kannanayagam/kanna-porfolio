import { useState, useEffect } from 'react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('about');
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            const sections = ['about', 'career', 'projects', 'skills', 'contact'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { id: 'about', label: 'About' },
        { id: 'career', label: 'Career' },
        { id: 'projects', label: 'Projects' },
        { id: 'skills', label: 'Skills' },
        { id: 'contact', label: 'Contact' },
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMenuOpen(false);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-deep-space/90 backdrop-blur-lg shadow-glow border-b border-glass-border'
                : 'bg-transparent'
                }`}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <a
                        href="#about"
                        onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
                        className="flex items-center gap-1 group"
                    >
                        <span className="text-cyber-cyan text-xl font-bold group-hover:animate-pulse-glow">[</span>
                        <span className="text-white font-semibold text-lg tracking-wide">Kanna Nayagam</span>
                        <span className="text-cyber-cyan text-xl font-bold group-hover:animate-pulse-glow">]</span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className={`px-4 py-2 text-sm font-medium tracking-wider uppercase transition-all duration-300 relative ${activeSection === link.id ? 'text-cyber-cyan' : 'text-gray-400 hover:text-white'}`}
                            >
                                <span className="text-cyber-cyan opacity-50">&lt;</span>
                                {link.label}
                                <span className="text-cyber-cyan opacity-50">/&gt;</span>
                                {activeSection === link.id && (
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-cyber-cyan shadow-glow" />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-cyber-cyan p-2 border border-cyber-cyan/30 rounded hover:bg-cyber-cyan/10 transition-colors"
                            aria-label="Menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile dropdown */}
                {menuOpen && (
                    <div className="md:hidden bg-deep-space/95 border-t border-glass-border py-2">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className={`block w-full text-left px-4 py-3 text-sm tracking-wider uppercase transition-colors ${activeSection === link.id ? 'text-cyber-cyan' : 'text-gray-400 hover:text-white'}`}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
