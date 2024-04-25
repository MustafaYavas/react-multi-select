import { FiX } from 'react-icons/fi';

type IconProps = {
  size?: number;
  className?: string;
  iconName: string;
  color?: string;
};

const Icon = ({ size, className, iconName, color }: IconProps) => {
  if (iconName === 'FiX') {
    return (
      <FiX
        className={className}
        color={color ? color : 'inherit'}
        size={size}
      />
    );
  } else {
    return null;
  }
};

export default Icon;
