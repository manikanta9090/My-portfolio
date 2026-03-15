export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: ["Rust", "TypeScript", "JavaScript", "Python", "Java", "SQL"]
  },
  {
    category: "Frontend Development",
    skills: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3"]
  },
  {
    category: "Backend Development",
    skills: ["Node.js", "Express.js", "REST APIs"]
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Firebase"]
  },
  {
    category: "Blockchain / Web3",
    skills: ["Solidity", "Ethereum", "Web3.js", "IPFS", "Soroban Smart Contracts", "Avalanche", "Internet Computer (ICP)"]
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "Postman", "Linux", "VS Code", "Cursor AI"]
  }
];
