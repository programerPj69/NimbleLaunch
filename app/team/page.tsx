"use client";

import { Card } from "components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Linkedin as LinkedIn, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "Elon Musk",
    role: "CEO of Tesla & SpaceX",
    image: "https://images.unsplash.com/photo-1566193232556-39434d30fd96?w=400&h=400&fit=crop",
    bio: "Elon Musk co-founded PayPal and founded SpaceX in 2002. He joined Tesla Motors as chairman in 2004 and became CEO in 2008. His ambitious goals include reducing global warming through sustainable energy production and revolutionizing transportation both on Earth and in space.",
    achievements: [
      "Built Tesla into a $500B+ company",
      "Successfully launched and landed reusable rockets with SpaceX",
      "Pioneered commercial space travel"
    ],
    linkedin: "https://www.linkedin.com/in/elonmusk",
    twitter: "https://twitter.com/elonmusk"
  },
  {
    name: "Satya Nadella",
    role: "CEO of Microsoft",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop",
    bio: "Satya Nadella has served as CEO of Microsoft since 2014. Under his leadership, Microsoft has become one of the world's most valuable companies, with a focus on cloud computing, artificial intelligence, and enterprise solutions.",
    achievements: [
      "Transformed Microsoft's culture and strategy",
      "Led major acquisitions including LinkedIn and GitHub",
      "Increased market value by over $1 trillion"
    ],
    linkedin: "https://www.linkedin.com/in/satyanadella",
    twitter: "https://twitter.com/satyanadella"
  },
  {
    name: "Jeff Bezos",
    role: "Founder of Amazon",
    image: "https://images.unsplash.com/photo-1559974556-c07c5eec8547?w=400&h=400&fit=crop",
    bio: "Jeff Bezos founded Amazon in 1994 as an online bookstore. Under his leadership, Amazon became the world's largest e-commerce company and a leader in cloud computing through AWS. He also founded Blue Origin to pursue his passion for space exploration.",
    achievements: [
      "Built Amazon into a trillion-dollar company",
      "Pioneered e-commerce and cloud computing",
      "Created over a million jobs worldwide"
    ],
    linkedin: "https://www.linkedin.com/in/jeffbezos",
    twitter: "https://twitter.com/jeffbezos"
  }
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Our Leadership Team</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the visionary leaders who inspire and guide the future of technology and innovation.
          </p>
        </div>

        <div className="grid gap-12">
          {teamMembers.map((member, index) => (
            <Card key={index} className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{member.name}</h2>
                    <p className="text-xl text-primary mb-4">{member.role}</p>
                    <p className="text-muted-foreground">{member.bio}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Key Achievements</h3>
                    <ul className="space-y-2">
                      {member.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-4">
                    <Link href={member.linkedin} target="_blank" rel="noopener noreferrer" 
                      className="text-muted-foreground hover:text-primary transition-colors">
                      <LinkedIn className="h-6 w-6" />
                    </Link>
                    <Link href={member.twitter} target="_blank" rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors">
                      <Twitter className="h-6 w-6" />
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}