import React, { memo } from 'react';
import Svg, { Rect, G, Polyline } from "react-native-svg"

const ChevronLeftIcon = ({ width = 13, height = 20, fill = '#FFFFFF' }) => (
  <Svg width={width} height={height} viewBox="0 0 13 20" version="1.1">
    <G stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <G transform="translate(-13.000000, -37.000000)">
        <Rect fill="transparent" x="0" y="0" width="414" height="75" />
        <Polyline stroke={fill} strokeWidth="3" strokeLinecap="round" points="24 39 16 47.5669 24 55" />
      </G>
    </G >
  </Svg >
)

export default memo(ChevronLeftIcon);
