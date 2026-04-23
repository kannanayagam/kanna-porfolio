import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAws } from '@fortawesome/free-brands-svg-icons';

const Career = () => {
    const [activeMainTab, setActiveMainTab] = useState('experience');
    const [selectedExpId, setSelectedExpId] = useState(1);
    const [selectedEduId, setSelectedEduId] = useState(1);

    const experienceData = [
        {
            id: 1,
            role: 'Apprentice',
            company: 'Singapore University of Social Sciences (SUSS)',
            period: 'Dec 2025 – Feb 2026',
            location: 'Singapore',
            description: 'Participated in the SUSS Global Impact startup initiative, a prestigious program focused on leveraging technology for social good at a global scale.',
            highlights: [
                'Selected to represent SUSS in the Global Impact startup program held in Mumbai, India.',
                'Collaborated with multidisciplinary teams on social innovation challenges.',
            ],
            technologies: ['Entrepreneurship', 'Social Innovation', 'Technology'],
        },
        {
            id: 2,
            role: 'Experiential Learning',
            company: 'Octgen',
            period: 'Jul 2025 – Jan 2026',
            location: 'Singapore',
            description: 'As leader of Octgen, explored and experimented with AI use cases and products targeted at B2B users. Built and audited automation projects at scale.',
            highlights: [
                'Explored viable AI product use cases for B2B clients.',
                'Built and audited vibe-coded automation projects for scale.',
                'Led cross-functional experimentation on emerging AI tools.',
            ],
            technologies: ['AI/ML', 'Automation', 'B2B Products', 'Python'],
        },
        {
            id: 3,
            role: 'Assoc Eng — Mfg Systems Engineering (CIM AE)',
            company: 'GlobalFoundries',
            period: 'Oct 2022 – Dec 2025',
            location: 'Singapore',
            description: 'Managed CIM assets and production automation tools across semiconductor manufacturing systems. Achieved all supervisor targets and received appreciation awards.',
            highlights: [
                'Managed creation of tools across multiple production applications.',
                'Linux scripting for automation of manufacturing workflows.',
                'Managed CIM assets from deployment, diagnostics to installation.',
                'Performed routine backups and system maintenance.',
                'Familiar with MES SIview, MSP SEMI, FDC EES, XSITE Collection.',
            ],
            technologies: ['Linux', 'Bash', 'CIM', 'MES SIview', 'MSP SEMI', 'FDC EES', 'XSITE'],
        },
        {
            id: 4,
            role: 'Project Intern',
            company: 'GlobalFoundries',
            period: 'Mar 2022 – Sep 2022',
            location: 'Singapore',
            description: 'Introduced to practical application of ML and AI within the semiconductor industry. Contributed to data preparation for an AI machine vision model to improve manufacturing productivity.',
            highlights: [
                'Data cleaning and preparation to train AI machine vision model.',
                'Prepared wafer maps using Klarity Defect.',
                'Routine check on equipment and data collection mechanisms.',
            ],
            technologies: ['AI/ML', 'Data Preparation', 'Klarity Defect', 'Machine Vision'],
        },
        {
            id: 5,
            role: 'Retail Sales Associate',
            company: 'IKEA',
            period: 'Apr 2020 – Feb 2022',
            location: 'Singapore',
            description: 'Delivered customer-focused service while developing strong interpersonal and operational skills in a high-volume retail environment.',
            highlights: [
                'Guided customers on placing orders and processing requests.',
                'General upkeep and stock inventory management.',
            ],
            technologies: ['Customer Service', 'Inventory Management'],
        },
    ];

    const educationData = [
        {
            id: 1,
            degree: 'Bachelor of Science — Information & Communication Technology',
            institution: 'Singapore University of Social Sciences (SUSS)',
            period: 'Aug 2023 – Oct 2026',
            location: 'Singapore',
            description: 'Pursuing BSc in Information and Communication Technology with focus on software development, data science, and AI applications.',
            highlights: [
                'Active participation in Global Impact startup program.',
                'Coursework in software engineering, AI, and ICT systems.',
            ],
            technologies: ['ICT', 'Software Development', 'AI', 'Data Science'],
        },
        {
            id: 2,
            degree: 'Diploma — Electrical & Electronics Engineering, Microelectronics',
            institution: 'Republic Polytechnic',
            period: 'Apr 2019 – Apr 2022',
            location: 'Singapore',
            description: 'Diploma specializing in Microelectronics with strong foundations in circuit design, embedded systems, and electronics engineering.',
            highlights: [
                'Module Prize in Integrated Circuit Design and Layout.',
                'Director Roll of Honour recipient.',
                'Specialization in Microelectronics and circuit-level design.',
            ],
            technologies: ['Microelectronics', 'Circuit Design', 'Embedded Systems', 'Arduino', 'Electronics'],
        },
    ];

    const certifications = [
        {
            name: 'Amazon Web Services Cloud Practitioner',
            icon: <FontAwesomeIcon icon={faAws} className="text-cyber-cyan" />,
        },
        
        { 
            name: 'IBM Data Science Professional Certificate',
            icon: <img src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/ibm.svg" alt="IBM" className="h-8 w-8" /> },
        { name: 'Introduction to Web Design and Development', icon: '🌐' },
        { name: 'JavaScript: Security Essentials', icon: '🔐' },
        { name: 'Creating a Responsive Web Design', icon: '📱' },
        { name: 'Practical GitHub Code Search', icon: '🔍' },
    ];

    const currentData = activeMainTab === 'experience' ? experienceData : educationData;
    const selectedId = activeMainTab === 'experience' ? selectedExpId : selectedEduId;
    const setSelectedId = activeMainTab === 'experience' ? setSelectedExpId : setSelectedEduId;
    const selectedItem = currentData.find(item => item.id === selectedId) || currentData[0];

    return (
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                    <span className="text-gray-500">&lt;</span>
                    Career
                    <span className="text-gray-500">/&gt;</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    <span className="text-cyber-cyan">//</span> My professional journey and educational background
                </p>
            </div>

            {/* Main Tab Buttons */}
            <div className="flex justify-center gap-4 mb-8">
                {['experience', 'education', 'certifications'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveMainTab(tab)}
                        className={`px-6 py-2 text-sm font-medium tracking-wide uppercase border rounded transition-all duration-300 ${activeMainTab === tab
                            ? 'bg-white/10 border-cyber-cyan/40 text-cyber-cyan'
                            : 'border-gray-700 text-gray-500 hover:text-gray-300 hover:border-gray-500'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Certifications tab */}
            {activeMainTab === 'certifications' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {certifications.map((cert) => (
                        <div key={cert.name} className="bg-glass-dark backdrop-blur-md p-5 rounded-lg border border-glass-border hover:border-cyber-cyan/30 transition-all duration-300">
                            <div className="text-3xl mb-3">{cert.icon}</div>
                            <p className="text-white text-sm font-medium leading-relaxed">{cert.name}</p>
                        </div>
                    ))}
                </div>
            ) : (
                /* Split Layout: 30% Tabs | 70% Details */
                <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-6">
                    {/* Left Panel */}
                    <div className="bg-glass-dark backdrop-blur-md p-4 rounded-lg border border-glass-border space-y-2 max-h-[60vh] overflow-y-auto">
                        {currentData.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setSelectedId(item.id)}
                                className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${selectedId === item.id
                                    ? 'bg-white/10 border-l-2 border-l-cyber-cyan'
                                    : 'hover:bg-white/5'
                                    }`}
                            >
                                <p className={`font-medium text-sm mb-1 ${selectedId === item.id ? 'text-cyber-cyan' : 'text-gray-300'}`}>
                                    {activeMainTab === 'experience' ? item.role : item.degree}
                                </p>
                                <p className="text-gray-400 text-xs mb-2">
                                    {activeMainTab === 'experience' ? item.company : item.institution}
                                </p>
                                <div className="flex items-center justify-between text-xs">
                                    <span className="text-gray-500">{item.period}</span>
                                    <span className="text-gray-500">{item.location}</span>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Right Panel */}
                    <div className="bg-glass-dark backdrop-blur-md p-6 lg:p-8 rounded-lg border border-glass-border">
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-white mb-2">
                                {activeMainTab === 'experience' ? selectedItem.role : selectedItem.degree}
                            </h3>
                            <p className="text-cyber-cyan text-sm">
                                {activeMainTab === 'experience' ? selectedItem.company : selectedItem.institution}
                            </p>
                            <div className="flex items-center gap-3 mt-2 text-sm">
                                <span className="text-gray-500">{selectedItem.period}</span>
                                <span className="text-gray-700">•</span>
                                <span className="text-gray-500">{selectedItem.location}</span>
                            </div>
                        </div>

                        <div className="mb-6">
                            <p className="text-gray-400 leading-relaxed">{selectedItem.description}</p>
                        </div>

                        <div className="mb-6">
                            <h4 className="text-xs text-gray-600 uppercase tracking-wider mb-3">Key Highlights</h4>
                            <ul className="space-y-2">
                                {selectedItem.highlights.map((h, i) => (
                                    <li key={i} className="text-gray-400 text-sm flex items-start gap-3">
                                        <span className="text-cyber-cyan mt-0.5">→</span>
                                        <span>{h}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-xs text-gray-600 uppercase tracking-wider mb-3">Technologies</h4>
                            <div className="flex flex-wrap gap-2">
                                {selectedItem.technologies.map((tech) => (
                                    <span key={tech} className="px-2.5 py-1 text-xs bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/20 rounded">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Career;
