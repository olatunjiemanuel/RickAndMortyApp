import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width={20}
    height={27}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.674.477C2.834-.16 1.471-.16.63.477c-.84.636-.84 1.666 0 2.302l12.652 9.57c.84.636.84 1.666 0 2.302L.63 24.221c-.84.636-.84 1.666 0 2.302.84.636 2.204.636 3.044 0L19.37 14.651c.84-.636.84-1.666 0-2.302L3.674.477Z"
      fill="#fff"
    />
  </Svg>
);

export default SvgComponent;
