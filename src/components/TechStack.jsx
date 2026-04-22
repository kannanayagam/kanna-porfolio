const TechStack = () => {
    const technologies = [
        { name: 'ROS', icon: String.fromCodePoint(0x1F916) },
        { name: 'Arduino', icon: String.fromCodePoint(0x26A1) },
        { name: 'Linux', icon: String.fromCodePoint(0x1F427) },
        { name: 'Python', icon: String.fromCodePoint(0x1F40D) },
        { name: 'AI/ML', icon: String.fromCodePoint(0x1F9E0) },
        { name: 'CIM Systems', icon: String.fromCodePoint(0x1F3ED) },
        { name: 'GitHub', icon: String.fromCodePoint(0x1F419) },
        { name: 'Tailwind CSS', icon: String.fromCodePoint(0x1F3A8) },
        { name: 'Data Science', icon: String.fromCodePoint(0x1F4CA) },
        { name: 'Microelectronics', icon: String.fromCodePoint(0x1F52C) },
        { name: 'React', icon: String.fromCodePoint(0x269B, 0xFE0F) },
        { name: 'Next.js', icon: String.fromCodePoint(0x25B2) },
    ];

    const duplicated = [...technologies, ...technologies];

    return (
        <div className="marquee-container py-6 overflow-hidden">
            <div className="animate-marquee flex gap-4 w-fit">
                {duplicated.map((tech, index) => (
                    <div
                        key={`${tech.name}-${index}`}
                        className="flex-shrink-0 px-4 py-2 flex items-center gap-2 min-w-[140px] bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
                    >
                        <span className="text-xl">{tech.icon}</span>
                        <span className="text-sm font-medium text-gray-300">{tech.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechStack;