import { LucideIcon } from 'lucide-react';

interface ContactItemProps {
  icon: LucideIcon;
  text: string;
  href?: string;
  type?: 'link' | 'email' | 'phone';
}

interface SocialIconProps {
  icon: LucideIcon | React.ComponentType<{ size?: number; className?: string }>;
  href: string;
}

export const ContactItem: React.FC<ContactItemProps> = ({
  icon: Icon,
  text,
  href,
  type = 'link',
}) => {
  const baseClasses =
    'flex items-center gap-3 text-gray-300 hover:text-primary transition-colors duration-200';

  if (type === 'email') {
    return (
      <a href={`mailto:${text}`} className={baseClasses}>
        <Icon size={18} />
        <span>{text}</span>
      </a>
    );
  }

  if (type === 'phone') {
    return (
      <a href={`tel:${text}`} className={baseClasses}>
        <Icon size={18} />
        <span>{text}</span>
      </a>
    );
  }

  return (
    <a href={href} className={baseClasses} target="_blank" rel="noopener noreferrer">
      <Icon size={18} />
      <span>{text}</span>
    </a>
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
