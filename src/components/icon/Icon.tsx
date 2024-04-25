import { FiX } from 'react-icons/fi';
import { IconProps } from '../../types/componentPropsType';
import { MdKeyboardArrowDown } from 'react-icons/md';

const Icon = ({ size, className, iconName, color }: IconProps) => {
  if (iconName === 'FiX') {
    return (
      <FiX
        className={className}
        color={color ? color : 'inherit'}
        size={size}
      />
    );
  } else if (iconName === 'MdKeyboardArrowDown') {
    return (
      <MdKeyboardArrowDown
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
