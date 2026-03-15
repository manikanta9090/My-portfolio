export interface Project {
  name: string;
  desc: string;
  tech: string[];
  github: string;
}

export const projects: Project[] = [
  {
    name: "Paytm Fintech Wallet",
    desc: "Full stack wallet with P2P transfers and live market dashboard.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    github: "https://github.com/manikanta9090/Paytm"
  },
  {
    name: "Kovon Assignment",
    desc: "Full stack technical assignment demonstrating API integration.",
    tech: ["Flutter", "Node.js"],
    github: "https://github.com/manikanta9090/kovon-home-assignment"
  },
  {
    name: "Lost & Found Platform",
    desc: "MERN application for managing and searching lost items.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/manikanta9090/Lost-and-Found-application"
  },
  {
    name: "AI Face Recognition Voting",
    desc: "Secure voting system using biometric authentication.",
    tech: ["React", "Firebase"],
    github: "https://github.com/manikanta9090/FACE-RECOGNITION-VOTING-WEB-APPLICATION"
  }
];
