import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Alex Chen',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Visionary leader with 15+ years in tech innovation',
      socials: {
        linkedin: 'https://linkedin.com/in/alexchen',
        twitter: 'https://twitter.com/alexchen'
      }
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'AI and blockchain expert, leading technical innovation',
      socials: {
        linkedin: 'https://linkedin.com/in/sarahjohnson',
        github: 'https://github.com/sarahj'
      }
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Lead Designer',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Award-winning designer specializing in UI/UX',
      socials: {
        dribbble: 'https://dribbble.com/marcusr',
        behance: 'https://behance.net/marcusrodriguez'
      }
    },
    {
      name: 'Emily Zhang',
      role: 'Lead Developer',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Full-stack developer passionate about clean code',
      socials: {
        github: 'https://github.com/emilyzhang',
        linkedin: 'https://linkedin.com/in/emilyzhang'
      }
    }
  ];

  return (
    <section id="team" className="section bg-light-primary dark:bg-dark-primary relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10"></div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="section-title text-center">Meet Our Team</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="card group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm">{member.bio}</p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{member.name}</h3>
              <p className="text-primary dark:text-secondary font-medium mb-2">{member.role}</p>
              
              <div className="flex space-x-3">
                {Object.entries(member.socials).map(([platform, url], idx) => (
                  <a
                    key={idx}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-secondary transition-colors duration-200"
                  >
                    <i className={`fab fa-${platform}`}></i>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-20 rotate-180 text-light-secondary dark:text-dark-secondary"
          fill="currentColor"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Team;