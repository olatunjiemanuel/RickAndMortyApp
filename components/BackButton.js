import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const BackButton = props => (
  <Svg
    width={20}
    height={27}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.326.477c.84-.636 2.203-.636 3.044 0 .84.636.84 1.666 0 2.302l-12.652 9.57c-.84.636-.84 1.666 0 2.302l12.652 9.57c.84.636.84 1.666 0 2.302-.84.636-2.204.636-3.044 0L.63 14.651c-.84-.636-.84-1.666 0-2.302L16.326.477Z"
      fill="#fff"
    />
  </Svg>
);

export default BackButton;
