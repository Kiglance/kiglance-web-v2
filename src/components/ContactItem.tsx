import { LucideIcon } from 'lucide-react';

interface ContactItemProps {
  icon: LucideIcon;
  text: string;
  href?: string;
  type?: 'address' | 'email' | 'phone';
}

interface SocialIconProps {
  icon: LucideIcon | React.ComponentType<{ size?: number; className?: string }>;
  href: string;
}

export const ContactItem: React.FC<ContactItemProps> = ({ icon: Icon, text, type = 'text' }) => {
  const getHref = (): string => {
    switch (type) {
      case 'email':
        return `mailto:${text}`;
      case 'phone':
        return `tel:${text}`;
      case 'address':
        return `https://maps.google.com/?q=${encodeURIComponent(text)}`;
      default:
        return '#';
    }
  };

  return (
    <div className="flex items-start gap-4">
      <div className="mt-1">
        <Icon size={20} className="text-primary" />
      </div>
      <a
        href={getHref()}
        className="hover:text-primary text-gray-300 transition-colors duration-200"
        target={type === 'address' ? '_blank' : undefined}
        rel={type === 'address' ? 'noopener noreferrer' : undefined}
      >
        {text}
      </a>
    </div>
  );
};

export const SocialIcon: React.FC<SocialIconProps> = ({ icon: Icon, href }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group relative">
      <div
        className={`group-hover:bg-primary flex h-10 w-10 items-center justify-center rounded-lg bg-white transition-transform duration-200 hover:scale-110`}
      >
        <Icon size={18} className="text-black" />
      </div>
    </a>
  );
};
