var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import { Icon } from '../Icon';

export var Alarm = function Alarm(props) {
  return React.createElement(
    Icon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Alarm' }, props),
    React.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M21,13 C21,17.971 16.971,22 12,22 C7.029,22 3,17.971 3,13 C3,8.029 7.029,4 12,4 C16.971,4 21,8.029 21,13 L21,13 Z M5.5,19.5 L2,23 L5.5,19.5 Z M18.5,19.5 L22,23 L18.5,19.5 Z M9,4 C8.29078014,2.90780142 6.88179669,2 5,2 C2.90070922,2 1,3.90070922 1,6 C1,7.88179669 1.90780142,9.29078014 3,10 M21,10 C22.0921986,9.29078014 23,7.88179669 23,6 C23,3.90070922 21.0992908,2 19,2 C17.1182033,2 15.7092199,2.90780142 15,4 M12,8 L12,13 L15,16' })
  );
};