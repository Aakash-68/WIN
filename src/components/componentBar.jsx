
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, FileDown } from 'lucide-react';

// Define contact platforms with their icons and URLs
const contactPlatforms = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/' },
  { name: 'Email', icon: Mail, url: 'mailto:example@example.com' },
  { name: 'Download Resume', icon: FileDown, url: '/resume.pdf' }
];

export default function ContactBar() {
  // Track which item is being pressed
  const [pressedItem, setPressedItem] = useState(null);
  
  // Custom CSS for noise texture and hover effects
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .noise-bg {
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.12'/%3E%3C/svg%3E");
        background-position: center;
        background-size: 200px;
      }
      
      .contact-icon {
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
      }
      
      .contact-icon:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #b3b2b1;
        opacity: 0;
        border-radius: 50%;
        transition: opacity 0.3s ease, transform 0.3s ease;
        transform: scale(0.8);
        z-index: -1;
      }
      
      .contact-icon:hover:before {
        opacity: 0.2;
        transform: scale(1);
      }
      
      .contact-icon:active:before {
        opacity: 0.3;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);
  
  return (
    <div className="w-full flex justify-center mx-auto p-4">
      <div className="inline-flex items-center px-4 py-3 rounded-full backdrop-blur-sm bg-gray-200/20 shadow-lg noise-bg">
        {/* Contact Platform Icons - Compact layout with exactly 4 items */}
        <div className="flex items-center gap-3">
          {contactPlatforms.map((platform, index) => {
            const Icon = platform.icon;
            const isPressed = pressedItem === index;
            
            return (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`contact-icon relative group flex items-center justify-center bg-gray-400/10 backdrop-blur-md rounded-full h-12 w-12
                  ${isPressed ? 'shadow-none transform translate-y-px' : 'shadow-md'} 
                  transition-all duration-200 ease-in-out hover:bg-gray-300/15`}
                onMouseDown={() => setPressedItem(index)}
                onMouseUp={() => setPressedItem(null)}
                onMouseLeave={() => setPressedItem(null)}
                download={platform.name === 'Download Resume' ? true : undefined}
              >
                <Icon 
                  size={22} 
                  className="text-gray-600 group-hover:text-gray-800 transition-colors" 
                />
                
                {/* Enhanced Glassmorphic Tooltip on hover */}
                <div className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-gray-800/70 text-white text-xs px-3 py-1.5 rounded-lg pointer-events-none backdrop-blur-md transform group-hover:translate-y-0 translate-y-2 shadow-lg">
                  {platform.name}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}