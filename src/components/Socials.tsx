import Link from 'next/link';
import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
  RiCodeBoxFill,
  RiTwitterFill,
} from 'react-icons/ri';

// Define a type for icons
type IconType = React.FC<{ size?: string | number; color?: string }>;

const icons: { path: string; name: IconType }[] = [
  {
    path: 'https://www.youtube.com/@Romanticlovekdrama',
    name: RiYoutubeFill,
  },
  {
    path: 'https://leetcode.com/shivbhankushwaha862003672001/',
    name: RiCodeBoxFill,
  },
  {
    path: 'https://www.linkedin.com/in/shivbhan-kushwaha-183b18226/',
    name: RiLinkedinFill,
  },
  {
    path: 'https://github.com/ShivBhanKushWaha',
    name: RiGithubFill,
  },
  {
    path: 'https://www.facebook.com/profile.php?id=61559766314030',
    name: RiFacebookFill,
  },
  {
    path: 'https://www.instagram.com/black_lover14444/',
    name: RiInstagramFill,
  },
  {
    path: 'https://twitter.com/technical_jugad',
    name: RiTwitterFill,
  },
];

const Socials: React.FC<{ containerStyles: string; iconsStyles: string }> = ({
  containerStyles,
  iconsStyles,
}) => {
  return (
    <div className={containerStyles}>
      {icons.map((icon, index) => (
        <Link href={icon.path} key={index} className={iconsStyles} target='_blank'>
            <icon.name />
        </Link>
      ))}
    </div>
  );
};

export default Socials;
