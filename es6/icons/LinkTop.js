var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import { Icon } from '../Icon';

export var LinkTop = function LinkTop(props) {
  return React.createElement(
    Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'LinkTop' }, props),
    React.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M12,5 L12,23 M4,13 L12,5 L20,13 M2,2 L22,2' })
  );
};