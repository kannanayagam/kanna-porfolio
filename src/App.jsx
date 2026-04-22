import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AboutMe from "./pages/AboutMe";
import Career from "./pages/Career";
import Projects from "./pages/Projects";
import Starfield from "./components/Starfield";
import FadeInSection from "./components/FadeInSection";

const skillGroups = [
    {
        category: "Automation & Scripting",
        icon: String.fromCodePoint(0x2699, 0xFE0F),
        skills: ["Linux", "Bash", "CIM Tools", "MES SIview", "MSP SEMI", "FDC EES", "XSITE Collection"],
    },
    {
        category: "AI & Data",
        icon: String.fromCodePoint(0x1F9E0),
        skills: ["ML Data Prep", "IBM Data Science", "Machine Vision", "Klarity Defect", "AI/ML"],
    },
    {
        category: "Hardware & IoT",
        icon: String.fromCodePoint(0x1F916),
        skills: ["ROS (Robot Operating System)", "Arduino", "Microelectronics", "Embedded Systems"],
    },
    {
        category: "Web & Development",
        icon: String.fromCodePoint(0x1F4BB),
        skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "GitHub"],
    },
    {
        category: "Languages Spoken",
        icon: String.fromCodePoint(0x1F310),
        skills: ["Tamil (Native)", "English (Full Professional)", "Malay (Full Professional)"],
    },
];

const MainPortfolio = () => {
    return (
        <div className="min-h-screen relative">
            <Starfield />
            <Header />
            <main className="pt-20">
                <section id="about">
                    <FadeInSection>
                        <AboutMe />
                    </FadeInSection>
                </section>
                <section id="career" className="py-20">
                    <FadeInSection>
                        <Career />
                    </FadeInSection>
                </section>
                <section id="projects" className="py-20">
                    <FadeInSection>
                        <Projects />
                    </FadeInSection>
                </section>
                <section id="skills" className="py-20">
                    <FadeInSection>
                        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                                    <span className="text-gray-500">&lt;</span>
                                    Skills
                                    <span className="text-gray-500">/&gt;</span>
                                </h2>
                                <p className="text-gray-400">
                                    <span className="text-cyber-cyan">//</span> Areas of expertise
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {skillGroups.map((group) => (
                                    <div
                                        key={group.category}
                                        className="bg-glass-dark backdrop-blur-md p-6 rounded-lg border border-glass-border hover:border-cyber-cyan/30 transition-all duration-300"
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-2xl">{group.icon}</span>
                                            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">{group.category}</h3>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {group.skills.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="px-2.5 py-1 text-xs bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/20 rounded font-mono"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeInSection>
                </section>
                <section id="contact" className="py-20">
                    <FadeInSection>
                        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                            <div className="bg-glass-dark backdrop-blur-md rounded-lg border border-glass-border p-12 text-center">
                                <div className="text-5xl mb-4">{String.fromCodePoint(0x1F4E1)}</div>
                                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                                    <span className="text-gray-500">&lt;</span>
                                    {"Let's work together"}
                                    <span className="text-gray-500">/&gt;</span>
                                </h2>
                                <p className="text-gray-400 max-w-xl mx-auto mb-8">
                                    Open to new opportunities, collaborations, and exciting projects. Feel free to reach out!
                                </p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <a href="mailto:kanna.nayagam@gmail.com" className="retro-button flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        kanna.nayagam@gmail.com
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/kannanayagam-61414b170"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="retro-button flex items-center gap-2"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                        LinkedIn
                                    </a>
                                </div>
                                <p className="mt-8 text-gray-600 text-sm font-mono">+65 8849 4871 · Singapore</p>
                            </div>
                        </div>
                    </FadeInSection>
                </section>
            </main>
            <footer className="py-6 border-t border-glass-border text-center">
                <p className="text-gray-600 text-xs font-mono">
                    {String.fromCodePoint(0xA9)} {new Date().getFullYear()} Kanna Nayagam · Built with React + Tailwind CSS
                </p>
            </footer>
        </div>
    );
};

function App() {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<MainPortfolio />} />
            </Routes>
        </Router>
    );
}

export default App;