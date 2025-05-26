import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import logo from "./logo.png"

const socialLinkData = [
  { id: "github", icon: FaGithub, color: "black" },
  { id: "twitter", icon: FaTwitter, color: "blue" },
  { id: "linkedin", icon: FaLinkedin, color: "sky" },
  { id: "instagram", icon: FaInstagram, color: "red" },
];

const membersData = [
  {
    id: "developer1",
    name: "Vishal Kumar",
    role: "President(CSE 2013-17)",
    bio: "",
    socialLinks: [
      { ...socialLinkData[0], href: "https://github.com/developer1" },
      { ...socialLinkData[1], href: "https://twitter.com/developer1" },
      { ...socialLinkData[2], href: "https://linkedin.com/in/developer1" },
      { ...socialLinkData[3], href: "https://instagram.com/developer1" },
    ],
  },
  {
    id: "developer2",
    name: "Amit Kumar",
    role: "Core Committee Member(CSE 2014-18)",
    bio: "",
    socialLinks: [
      { ...socialLinkData[0], href: "https://github.com/developer1" },
      { ...socialLinkData[1], href: "https://twitter.com/developer1" },
      { ...socialLinkData[2], href: "https://linkedin.com/in/developer1" },
      { ...socialLinkData[3], href: "https://instagram.com/developer1" },
    ],
  },
  {
    id: "developer 3",
    name: "Abhishek Mishra",
    role: "Core Committee Member(CSE 2014-18)",
    bio: "",
    socialLinks: [
      { ...socialLinkData[0], href: "https://github.com/developer1" },
      { ...socialLinkData[1], href: "https://twitter.com/developer1" },
      { ...socialLinkData[2], href: "https://linkedin.com/in/developer1" },
      { ...socialLinkData[3], href: "https://instagram.com/developer1" },
    ],
  },
  {
    id: "developer 4",
    name: "Kumar Saurav",
    role: "Core Committee Member(CSE 2015-19)",
    bio: "",
    socialLinks: [
      { ...socialLinkData[0], href: "https://github.com/developer1" },
      { ...socialLinkData[1], href: "https://twitter.com/developer1" },
      { ...socialLinkData[2], href: "https://linkedin.com/in/developer1" },
      { ...socialLinkData[3], href: "https://instagram.com/developer1" },
    ],
  },

  {
    id: "developer 5",
    name: "Navneet Prashant",
    role: "Core Committee Member(CSE 2015-19)",
    bio: "",
    socialLinks: [
      { ...socialLinkData[0], href: "https://github.com/developer1" },
      { ...socialLinkData[1], href: "https://twitter.com/developer1" },
      { ...socialLinkData[2], href: "https://linkedin.com/in/developer1" },
      { ...socialLinkData[3], href: "https://instagram.com/developer1" },
    ],
  },
  {
    id: "developer 6",
    name: "Ayush Kumar",
    role: "Core Committee Member(CSE 2015-19)",
    bio: "",
    socialLinks: [
      { ...socialLinkData[0], href: "https://github.com/developer1" },
      { ...socialLinkData[1], href: "https://twitter.com/developer1" },
      { ...socialLinkData[2], href: "https://linkedin.com/in/developer1" },
      { ...socialLinkData[3], href: "https://instagram.com/developer1" },
    ],
  },
  {
    id: "developer 7",
    name: "Keshav Singh",
    role: "Executive Committee Member(IT 2013-17)",
    bio: "",
    socialLinks: [
      { ...socialLinkData[0], href: "https://github.com/developer1" },
      { ...socialLinkData[1], href: "https://twitter.com/developer1" },
      { ...socialLinkData[2], href: "https://linkedin.com/in/developer1" },
      { ...socialLinkData[3], href: "https://instagram.com/developer1" },
    ],
  },
  {
    id: "developer 8",
    name: "Rahul Bhattacharjee",
    role: "Executive Committee Member(IT 2014-18)",
    bio: "",
    socialLinks: [
      { ...socialLinkData[0], href: "https://github.com/developer1" },
      { ...socialLinkData[1], href: "https://twitter.com/developer1" },
      { ...socialLinkData[2], href: "https://linkedin.com/in/developer1" },
      { ...socialLinkData[3], href: "https://instagram.com/developer1" },
    ],
  },
  {
    id: "developer 9",
    name: "Piyush Kumar",
    role: "Executive Committee Member(ECE 2014-18)",
    bio: "",
    socialLinks: [
      { ...socialLinkData[0], href: "https://github.com/developer1" },
      { ...socialLinkData[1], href: "https://twitter.com/developer1" },
      { ...socialLinkData[2], href: "https://linkedin.com/in/developer1" },
      { ...socialLinkData[3], href: "https://instagram.com/developer1" },
    ],
  },
  // Add more members here
];

function SocialIcon({ href, icon: Icon, color }) {
  return (
    <a
      href={href}
      className={`text-${color}-300`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon size={24} />
    </a>
  );
}

function MemberCard({ name, role, bio, socialLinks }) {
  return (
    <div className="w-full bg-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row mb-4">
      <div className="w-full md:w-2/5 h-30">
        <img
          className="w-40 h-40"
          src={logo}
          alt={`${name}'s photo`}
        />
      </div>
      <div className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
        <p className="text-xl text-white font-bold">{name}</p>
        <p className="text-base text-gray-400 font-normal">{role}</p>
        <p className="text-base leading-relaxed text-gray-500 font-normal">
          {bio}
        </p>
        <div className="flex justify-between mx-6">
          {socialLinks.map((link) => (
            <SocialIcon
              key={link.id}
              href={link.href || "#"}
              icon={link.icon}
              color={link.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Founders() {
  return (
    <div className="py-[8rem] mx-6">
      <h1 className="text-[3rem] text-white text-center pb-10">Our Founders</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mx-auto">
        {membersData.map((member) => (
          <MemberCard key={member.id} {...member} />
        ))}
      </div>
    </div>
  );
}

export default Founders;
