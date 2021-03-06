import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { animated } from "react-spring/renderprops";

/*
  >>> spacingProperties
  Padding — Inset: base, xs, s, m, l, xl
  Padding — Squish: s, m, l
  Padding — Stretch: s, m
  Margin — Stack: base, xs, s, m, l, xl
  Margin — Inline: base, xs, s, m, l, xl
*/
const spacingProperties = ({
  padding,
  margin,
  theme: { size, sizeMobile }
}) => {
  // >>> CSS shorthand reference: top, right, bottom, left
  // >>> Padding — Inset: base, xs, s, m, l, xl
  const insetBase = `${size.base} ${size.base} ${size.base} ${size.base}`;
  const insetXs = `${size.xs} ${size.xs} ${size.xs} ${size.xs}`;
  const insetS = `${size.s} ${size.s} ${size.s} ${size.s}`;
  const insetM = `${size.m} ${size.m} ${size.m} ${size.m}`;
  const insetL = `${size.l} ${size.l} ${size.l} ${size.l}`;
  const insetXl = `${size.xl} ${size.xl} ${size.xl} ${size.xl}`;

  // >>> Padding — Squish: s, m, l
  const squishS = `${size.xs} ${size.s} ${size.xs} ${size.s}`;
  const squishM = `${size.s} ${size.m} ${size.s} ${size.m}`;
  const squishBase = `${size.baseHalf} ${size.base} ${size.baseHalf} ${
    size.base
  }`;
  const squishL = `${size.m} ${size.l} ${size.m} ${size.l}`;

  // >>> Padding — Stretch: s, m
  const stretchS = `${size.m} ${size.s} ${size.m} ${size.s}`;
  const stretchM = `${size.base} ${size.m} ${size.base} ${size.m}`;

  // >>> Margin — Stack: base, xs, s, m, l, xl
  const stackBase = `0 0 ${size.base} 0`;
  const stackXs = `0 0 ${size.xs} 0`;
  const stackS = `0 0 ${size.s} 0`;
  const stackM = `0 0 ${size.m} 0`;
  const stackL = `0 0 ${size.l} 0`;
  const stackXl = `0 0 ${size.xl} 0`;

  // >>> Margin — Inline: base, xs, s, m, l, xl
  const inlineBase = `0 ${size.base} 0 0`;
  const inlineXs = `0 ${size.xs} 0 0`;
  const inlineS = `0 ${size.s} 0 0`;
  const inlineM = `0 ${size.m} 0 0`;
  const inlineL = `0 ${size.l} 0 0`;
  const inlineXl = `0 ${size.xl} 0 0`;

  // >>> Margin — Wrap: base, xs, s, m, l, xl
  const wrapBase = `0 ${size.base} ${size.base} 0`;
  const wrapXs = `0 ${size.xs} ${size.xs} 0`;
  const wrapS = `0 ${size.s} ${size.s} 0`;
  const wrapM = `0 ${size.m} ${size.m} 0`;
  const wrapL = `0 ${size.l} ${size.l} 0`;
  const wrapXl = `0 ${size.xl} ${size.xl} 0`;

  // //////////// Mobile ////////////
  // >>> Padding — Inset: base, xs, s, m, l, xl
  const insetBaseMobile = `${sizeMobile.base} ${sizeMobile.base} ${
    sizeMobile.base
  } ${sizeMobile.base}`;
  const insetXsMobile = `${sizeMobile.xs} ${sizeMobile.xs} ${sizeMobile.xs} ${
    sizeMobile.xs
  }`;
  const insetSMobile = `${sizeMobile.s} ${sizeMobile.s} ${sizeMobile.s} ${
    sizeMobile.s
  }`;
  const insetMMobile = `${sizeMobile.m} ${sizeMobile.m} ${sizeMobile.m} ${
    sizeMobile.m
  }`;
  const insetLMobile = `${sizeMobile.l} ${sizeMobile.l} ${sizeMobile.l} ${
    sizeMobile.l
  }`;
  const insetXlMobile = `${sizeMobile.xl} ${sizeMobile.xl} ${sizeMobile.xl} ${
    sizeMobile.xl
  }`;

  // >>> Padding — Stretch: s, m
  const stretchSMobile = `${sizeMobile.m} ${sizeMobile.s} ${sizeMobile.m} ${
    sizeMobile.s
  }`;
  const stretchMMobile = `${sizeMobile.base} ${sizeMobile.m} ${
    sizeMobile.base
  } ${sizeMobile.m}`;

  // >>> Margin — Inline: base, xs, s, m, l, xl
  const inlineBaseMobile = `0 ${sizeMobile.base} 0 0`;
  const inlineXsMobile = `0 ${sizeMobile.xs} 0 0`;
  const inlineSMobile = `0 ${sizeMobile.s} 0 0`;
  const inlineMMobile = `0 ${sizeMobile.m} 0 0`;
  const inlineLMobile = `0 ${sizeMobile.l} 0 0`;
  const inlineXlMobile = `0 ${sizeMobile.xl} 0 0`;

  return css`
    padding: ${(padding === "inset-base" && insetBase) ||
      (padding === "inset-xs" && insetXs) ||
      (padding === "inset-s" && insetS) ||
      (padding === "inset-m" && insetM) ||
      (padding === "inset-l" && insetL) ||
      (padding === "inset-xl" && insetXl) ||
      (padding === "squish-s" && squishS) ||
      (padding === "squish-m" && squishM) ||
      (padding === "squish-base" && squishBase) ||
      (padding === "squish-l" && squishL) ||
      (padding === "stretch-s" && stretchS) ||
      (padding === "stretch-m" && stretchM)};

    margin: ${(margin === "stack-base" && stackBase) ||
      (margin === "stack-xs" && stackXs) ||
      (margin === "stack-s" && stackS) ||
      (margin === "stack-m" && stackM) ||
      (margin === "stack-l" && stackL) ||
      (margin === "stack-xl" && stackXl) ||
      (margin === "inline-base" && inlineBase) ||
      (margin === "inline-xs" && inlineXs) ||
      (margin === "inline-s" && inlineS) ||
      (margin === "inline-m" && inlineM) ||
      (margin === "inline-l" && inlineL) ||
      (margin === "inline-xl" && inlineXl) ||
      (margin === "wrap-base" && wrapBase) ||
      (margin === "wrap-xs" && wrapXs) ||
      (margin === "wrap-s" && wrapS) ||
      (margin === "wrap-m" && wrapM) ||
      (margin === "wrap-l" && wrapL) ||
      (margin === "wrap-xl" && wrapXl)};

    @media (max-width: 45em) {
      padding: ${(padding === "inset-base" && insetLMobile) ||
        (padding === "inset-xs" && insetXsMobile) ||
        (padding === "inset-s" && insetSMobile) ||
        (padding === "inset-m" && insetMMobile) ||
        (padding === "inset-l" && insetBaseMobile) ||
        (padding === "inset-xl" && insetXlMobile) ||
        (padding === "stretch-s" && stretchSMobile) ||
        (padding === "stretch-m" && stretchMMobile)};

      margin: ${(margin === "inline-base" && inlineBaseMobile) ||
        (margin === "inline-xs" && inlineXsMobile) ||
        (margin === "inline-s" && inlineSMobile) ||
        (margin === "inline-m" && inlineMMobile) ||
        (margin === "inline-l" && inlineLMobile) ||
        (margin === "inline-xl" && inlineXlMobile)};
    }
  `;
};

/* 
  >>> Item
  (positioning) topleft, top, topright, right, center, bottomleft, bottom, bottomright
  padding: [refer to spacingProperties]
  margin: [refer to spacingProperties]
  animate: Boolean
  NAME: String
  inline: Boolean
*/
const StyledItem = styled.div`
  ${spacingProperties}
  display: ${props => (props.inline ? "inline-flex" : "flex")};
  justify-content: ${props =>
    ((props.topleft || props.left || props.bottomleft) && "flex-start") ||
    ((props.top || props.center || props.bottom) && "center") ||
    ((props.topright || props.right || props.bottomright) && "flex-end")};
  align-items: ${props =>
    ((props.topleft || props.top || props.topright) && "flex-start") ||
    ((props.left || props.center || props.right) && "center") ||
    ((props.bottomleft || props.bottom || props.bottomright) && "flex-end")};
`;

const AnimatedItem = animated(StyledItem);

const Item = ({ NAME, center, ...props }) => {
  return props.animate ? (
    <AnimatedItem
      style={props.animate}
      className={NAME ? `item item-${NAME}` : "item"}
      center={center ? 1 : 0}
      {...props}
    >
      {props.children}
    </AnimatedItem>
  ) : (
    <StyledItem
      className={NAME ? `item item-${NAME}` : "item"}
      center={center ? 1 : 0}
      {...props}
    >
      {props.children}
    </StyledItem>
  );
};

Item.propTypes = {
  padding: PropTypes.string,
  margin: PropTypes.string,
  animate: PropTypes.object,
  NAME: PropTypes.string,
  topleft: PropTypes.bool,
  top: PropTypes.bool,
  topright: PropTypes.bool,
  right: PropTypes.bool,
  center: PropTypes.bool,
  bottomleft: PropTypes.bool,
  bottom: PropTypes.bool,
  bottomright: PropTypes.bool,
  inline: PropTypes.bool
};

/* 
  >>> Box
  row / column
  wrap / nowrap
  grow
  justify: [ justify-content values]
  align: [ align-items values ]
  padding: [refer to spacingProperties]
  margin: [refer to spacingProperties]
  animate: Boolean
  NAME: String
*/
const StyledBox = styled.div`
  ${spacingProperties}
  display: flex;
  flex-flow: ${props => (props.row && "row") || (props.column && "column")};
  flex-wrap: ${props => (props.wrap && "wrap") || (props.nowrap && "nowrap")};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  flex-grow: ${props => props.grow && "1"};
`;

const AnimatedBox = animated(StyledBox);

const Box = ({ NAME, wrap, ...props }) => {
  return props.animate ? (
    <AnimatedBox
      style={props.animate}
      className={NAME ? `box box-${NAME}` : "box"}
      wrap={wrap ? 1 : 0}
      {...props}
    >
      {props.children}
    </AnimatedBox>
  ) : (
    <StyledBox
      className={NAME ? `box box-${NAME}` : "box"}
      wrap={wrap ? 1 : 0}
      {...props}
    >
      {props.children}
    </StyledBox>
  );
};

Box.propTypes = {
  padding: PropTypes.string,
  margin: PropTypes.string,
  animate: PropTypes.object,
  NAME: PropTypes.string,
  row: PropTypes.bool,
  column: PropTypes.bool,
  wrap: PropTypes.bool,
  nowrap: PropTypes.bool,
  justify: PropTypes.string,
  align: PropTypes.string
};

/* 
  >>> Container
  padding: [refer to spacingProperties]
  margin: [refer to spacingProperties]
  animate: Boolean
  NAME: String
*/
const StyledContainer = styled.div`
  ${spacingProperties};
`;

const AnimatedContainer = animated(StyledContainer);

const Container = ({ NAME, ...props }) => {
  return props.animate ? (
    <AnimatedContainer
      style={props.animate}
      className={NAME ? `container container-${NAME}` : "container"}
      {...props}
    >
      {props.children}
    </AnimatedContainer>
  ) : (
    <StyledContainer
      className={NAME ? `container container-${NAME}` : "container"}
      {...props}
    >
      {props.children}
    </StyledContainer>
  );
};

Container.propTypes = {
  padding: PropTypes.string,
  margin: PropTypes.string,
  animate: PropTypes.object,
  NAME: PropTypes.string
};

/* 
  >>> Area
  padding: [refer to spacingProperties]
  margin: [refer to spacingProperties]
  animate: Boolean
  NAME: String
*/
const StyledArea = styled.div`
  ${spacingProperties};
`;

const AnimatedArea = animated(StyledArea);

const Area = ({ NAME, ...props }) => {
  return props.animate ? (
    <AnimatedArea
      style={props.animate}
      className={NAME ? `area area-${NAME}` : "area"}
      {...props}
    >
      {props.children}
    </AnimatedArea>
  ) : (
    <StyledArea className={NAME ? `area area-${NAME}` : "area"} {...props}>
      {props.children}
    </StyledArea>
  );
};

Area.propTypes = {
  padding: PropTypes.string,
  margin: PropTypes.string,
  animate: PropTypes.object,
  NAME: PropTypes.string
};

export { Item, Box, Container, Area };
