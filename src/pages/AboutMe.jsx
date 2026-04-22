import TechStack from '../components/TechStack';

const AboutMe = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    const stats = [
        { value: '4+', label: 'Years Experience' },
        { value: '5+', label: 'Certifications' },
        { value: '4+', label: 'Companies' },
    ];

    const awards = [
        '🏆 Director Roll of Honor (x2)',
        '🥇 Module Prize — Integrated Circuit Design & Layout',
    ];

    const pills = ['ROS', 'Arduino', 'AI/ML', 'Linux', 'Python', 'CIM Systems'];

    return (
        <div className="min-h-screen px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="min-h-[85vh] flex items-center py-12">
                <div className="bg-glass-dark backdrop-blur-md p-8 lg:p-12 rounded-lg border border-glass-border w-full">
                    {/* Terminal header */}
                    <div className="mb-6">
                        <span className="text-gray-500 text-sm">$ whoami</span>
                    </div>

                    <div className="space-y-4">
                        <p className="text-gray-400 text-lg">
                            <span className="text-gray-500">&gt;</span> Hello, World! I am
                        </p>

                        <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-white">
                            Kanna Nayagam
                            <span className="text-cyber-cyan cursor-blink ml-1">_</span>
                        </h1>

                        <h2 className="text-xl lg:text-2xl text-cyber-cyan font-medium">
                            ICT Professional · Singapore
                        </h2>

                        <div className="mt-4 space-y-3 text-gray-400 leading-relaxed max-w-3xl">
                            <p>
                                Dedicated ICT professional pursuing a <span className="text-white">BSc at Singapore University of Social Sciences (SUSS)</span>.
                                My experience spans IT operations in semiconductor manufacturing at <span className="text-white">GlobalFoundries</span>,
                                where I contributed to automation initiatives and AI/ML data preparation.
                                As my side project, I started <span className="text-white">Octgen</span>, where I explore innovative AI use cases for B2B users.
                            </p>
                        </div>

                        {/* Skill pills */}
                        <div className="flex flex-wrap gap-2 mt-4">
                            {pills.map((p) => (
                                <span key={p} className="px-3 py-1 text-xs font-mono bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan rounded-full">
                                    {p}
                                </span>
                            ))}
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10">
                            {stats.map((s) => (
                                <div key={s.label} className="text-center">
                                    <div className="text-3xl font-bold text-cyber-cyan">{s.value}</div>
                                    <div className="text-xs text-gray-500 mt-1">{s.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Awards */}
                        <div className="mt-6 space-y-2">
                            {awards.map((a) => (
                                <div key={a} className="text-sm text-gray-400 font-mono">{a}</div>
                            ))}
                        </div>

                        {/* Status */}
                        <div className="flex flex-wrap gap-6 mt-6 text-sm">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                <span className="text-gray-400">Open to opportunities</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-cyber-cyan rounded-full" />
                                <span className="text-gray-400">Based in Singapore</span>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 mt-10 pt-8 border-t border-white/10">
                            <button onClick={() => scrollToSection('career')} className="retro-button">
                                View Career
                            </button>
                            <button onClick={() => scrollToSection('projects')} className="retro-button">
                                Explore Projects
                            </button>
                            <a
                                href="https://www.linkedin.com/in/kanna-nayagam-61414b170/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="retro-button flex items-center gap-2"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                                LinkedIn
                            </a>
                            <a
                                href="mailto:kanna.nayagam@gmail.com"
                                className="retro-button flex items-center gap-2"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Email Me
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tech Stack marquee */}
            <TechStack />
        </div>
    );
};

export default AboutMe;
