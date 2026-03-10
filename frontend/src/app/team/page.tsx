"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail, User, Target, Users, Award, TrendingUp } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio?: string;
  imageUrl?: string;
  category: string;
}

interface TeamCategory {
  title: string;
  members: TeamMember[];
}

export default function TeamPage() {
  const teamCategories: TeamCategory[] = [
    {
      title: "Leadership",
      members: [
        {
          id: "1",
          name: "Md Nur Mohammad Shomrat",
          role: "Founder, Chairman & Managing Director",
          bio: "Visionary leader driving the company's strategic direction and global expansion.",
          imageUrl: "/assets/shomrat.jpg",
          category: "Leadership"
        },
        {
          id: "2",
          name: "Md Moniruzzaman Sabbir",
          role: "Founder & CEO",
          bio: "Expert in operations management and business development across international markets.",
          imageUrl: "/assets/shishu.jpg",
          category: "Leadership"
        },
        {
          id: "3",
          name: "Fatema Akter Mishuk",
          role: "Managing Director",
          bio: "Specialist in strategic planning and corporate governance with extensive industry experience.",
          imageUrl: "/assets/fatema.jpg",
          category: "Leadership"
        },
        {
          id: "4",
          name: "MD. Abdullah Al Jarif",
          role: "Director",
          bio: "Strategic leader with expertise in corporate development and business operations.",
          imageUrl: "/assets/jarif.jpg",
          category: "Leadership"
        }
      ]
    },
    {
      title: "Management",
      members: [
        {
          id: "5",
          name: "Md. Toukir Ahmed",
          role: "General Manager",
          bio: "Experienced manager overseeing daily operations and team coordination.",
          imageUrl: "/assets/Taukir.jpg",
          category: "Management"
        },
        {
          id: "6",
          name: "Munna Badruzzaman",
          role: "Manager",
          bio: "Dedicated professional managing key business operations and client relations.",
          imageUrl: "/assets/munna.jpg",
          category: "Management"
        },
        {
          id: "7",
          name: "Md. Ruhul Amin",
          role: "Supervisor",
          bio: "Skilled supervisor ensuring quality standards and operational excellence.",
          imageUrl: "/assets/ruhul.jpg",
          category: "Management"
        }
      ]
    },
    {
      title: "Executive Officers",
      members: [
        {
          id: "8",
          name: "Md. Yusuf Hossain",
          role: "Executive Officer",
          bio: "Dynamic executive handling critical business functions and client services.",
          imageUrl: "/assets/Yousuf.jpg",
          category: "Executive"
        },
        {
          id: "9",
          name: "Md. Inzaman Badhon",
          role: "Executive Officer",
          bio: "Committed professional driving operational efficiency and excellence.",
          imageUrl: "/assets/badhon.jpg",
          category: "Executive"
        },
        {
          id: "10",
          name: "Md. Mafuzur Rahman",
          role: "Executive Officer",
          bio: "Results-oriented executive focused on delivering exceptional outcomes.",
          imageUrl: "/assets/mafuz.jpg",
          category: "Executive"
        }
      ]
    }
  ];
  const [loading, setLoading] = useState(false);

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-amber-500 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
          >
            <span className="text-white font-inter font-semibold text-sm tracking-wider">OUR LEADERSHIP</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl md:text-7xl font-light text-white mb-8 leading-tight"
          >
            Meet Our Team
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed"
          >
            Experienced professionals driving excellence across multiple industries.
          </motion.p>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-outfit font-black text-foreground mb-6">Our Strength</h2>
            <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto">A diverse team of professionals committed to excellence and innovation.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { stat: "10+", label: "Team Members", icon: <Users className="w-8 h-8" /> },
              { stat: "5+", label: "Years Experience", icon: <Award className="w-8 h-8" /> },
              { stat: "200+", label: "Global Partners", icon: <TrendingUp className="w-8 h-8" /> },
              { stat: "60+", label: "Countries Served", icon: <Target className="w-8 h-8" /> }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-card p-8 rounded-2xl shadow-lg border border-border text-center"
              >
                <div className="bg-gradient-to-br from-primary to-secondary text-white p-4 rounded-xl inline-flex mb-4">{item.icon}</div>
                <div className="text-5xl font-outfit font-black text-primary mb-2">{item.stat}</div>
                <p className="text-muted-foreground font-inter font-semibold">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid by Category */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-secondary"></div>
            <p className="mt-4 text-muted-foreground">Loading team members...</p>
          </div>
        ) : (
          <div className="space-y-20">
            {teamCategories.map((category, catIndex) => (
              <div key={category.title}>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-outfit font-black text-foreground mb-12 text-center"
                >
                  {category.title}
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.members.map((member, index) => (
                    <motion.div
                      key={member.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="relative h-[400px] w-full rounded-2xl overflow-hidden mb-6 shadow-xl">
                        {member.imageUrl ? (
                          <img 
                            src={member.imageUrl} 
                            alt={member.name} 
                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" 
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                            <User className="w-24 h-24 text-white/50" />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="flex space-x-3 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                            <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl hover:bg-secondary hover:scale-110 transition-all cursor-pointer">
                              <Linkedin className="w-4 h-4 text-primary" />
                            </div>
                            <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl hover:bg-secondary hover:scale-110 transition-all cursor-pointer">
                              <Mail className="w-4 h-4 text-primary" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <h3 className="text-2xl font-outfit font-black text-foreground mb-2">{member.name}</h3>
                      <p className="text-black font-inter font-bold text-sm mb-3">{member.role}</p>
                      {member.bio && (
                        <p className="text-muted-foreground font-inter text-sm leading-relaxed line-clamp-3">
                          {member.bio}
                        </p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Our Culture */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-outfit font-black text-foreground mb-6">Our Culture</h2>
            <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto">We foster an environment of collaboration, innovation, and continuous growth.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Innovation First", desc: "Encouraging creative thinking and embracing new ideas to drive business forward." },
              { title: "Team Collaboration", desc: "Working together across departments to achieve common goals and excellence." },
              { title: "Continuous Learning", desc: "Investing in professional development and skill enhancement for all team members." },
              { title: "Global Mindset", desc: "Operating with international perspective and cultural awareness in all markets." },
              { title: "Integrity & Ethics", desc: "Maintaining highest standards of business ethics and transparent operations." },
              { title: "Customer Focus", desc: "Putting client needs first and delivering exceptional value in every interaction." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-card p-8 rounded-2xl shadow-lg border border-border"
              >
                <h3 className="text-2xl font-outfit font-black text-foreground mb-4">{item.title}</h3>
                <p className="text-muted-foreground font-inter leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-outfit font-black text-foreground mb-6">Join Our Journey</h2>
            <p className="text-xl text-muted-foreground font-inter mb-8">Be part of a dynamic team that's shaping the future of global trade and business.</p>
            <div className="space-y-4">
              {[
                "Competitive compensation and benefits",
                "Professional development opportunities",
                "International exposure and travel",
                "Collaborative work environment",
                "Work-life balance initiatives",
                "Performance-based growth"
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-lg font-inter text-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
                alt="Team collaboration" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-3xl font-outfit font-black text-white mb-2">Build Your Career</h3>
                <p className="text-white/90 font-inter">Grow with a company that values your contribution</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-outfit font-black text-white mb-6"
          >
            Join Our Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 font-inter mb-10"
          >
            We're always looking for talented individuals to join our growing team.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="/contact"
              className="inline-block bg-white hover:bg-gray-100 text-primary font-outfit font-bold px-10 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
