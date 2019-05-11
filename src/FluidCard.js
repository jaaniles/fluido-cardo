import React, { useState } from "react";

import styled from "styled-components";
import posed from "react-pose";

import programming from "./svg/programming.svg"
import DownIcon from "./svg/downIcon";

import * as ds from "./design";

const CardStyle = styled.div({
  ...ds.flexCol,
  background: ds.colors.blue,
  color: ds.colors.white,
  padding: 16,
  position: "relative",

  fontWeight: 600,

  img: {
    width: 200,
    height: 200,
    padding: 16,
  }
});

const Card = posed(styled.div({
  width: "100%",
  position: "relative",
}))({})

const bottomExpandPoses = {
  default: {
    y: 0
  },
  expand: {
    transition: {
      ease: "anticipate",
      duration: 1300
    },
    y: 120
  }
}

const Top = posed(
  styled(CardStyle)(props => ({
    minHeight: 150,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: props.expand ? 20 : 0,
    borderBottomRightRadius: props.expand ? 20 : 0,

    transition: "all 50ms linear"
  }))
)({});
const Bottom = posed(styled(CardStyle)(props => ({
  borderBottomLeftRadius: 20,
  borderBottomRightRadius: 20,
  borderTopLeftRadius: props.expand ? 20 : 0,
  borderTopRightRadius: props.expand ? 20 : 0,
})))({
  ...bottomExpandPoses,
});

const FluidBottom = posed(styled.div({
  width: "100%",
  position: "absolute",
  top: -25,
  height: 200
}))(bottomExpandPoses)

const FluidTop = styled.div({
  width: "100%",
  position: "absolute",
  bottom: -25
})

const FluidCard = () => {
  const [expand, setExpand] = useState(false)

  const toggleExpand = React.useCallback(() => setExpand(!expand), [expand, setExpand])

  return (
    <Card pose={expand ? 'expand' : 'default'}>
      <Top expand={expand}>
        <p>FLUID CARD</p>
        <img src={programming} alt="Programming illustration" />
        <Button onClick={toggleExpand}>
          <DownIcon flip={expand} />
        </Button>
      </Top>
      <Fluids>
        <FluidTop>
          <Fluid />
          <Fluid />
          <Fluid />
          <Fluid />
        </FluidTop>
        <FluidBottom>
          <Fluid />
          <Fluid />
          <Fluid />
          <Fluid />
        </FluidBottom>
      </Fluids>
      <Bottom expand={expand}>
        <BottomContent>
          <h1>EXPANDED</h1>
        </BottomContent>
      </Bottom>
    </Card>
  );
};

export default FluidCard;

const BottomContent = posed.div({
  default: {
    opacity: 0
  },
  expand: {
    delay: 650,
    opacity: 1
  }
})

const Fluids = styled.div({
  "> div": {
    display: "flex",
    justifyContent: "space-around",
  },
  filter: "url(#goo)",
  position: "absolute",
  width: "100%",
  left: 0,
})

const Fluid = posed(styled.div({
  width: 32,
  height: 75,
  background: ds.colors.blue,
  borderRadius: "50%",
  transformOrigin: "top bottom",

  ":nth-of-type(2)": {
    marginLeft: 64
  }
}))({
  default: {
    delay: 100,
    opacity: 1,
  },
  expand: {
    opacity: 0,
    transition: {
      delay: 650,
      duration: 100,
      ease: "linear"
    }
  }
})

const Button = styled.div({
  ...ds.flexCol,
  justifyContent: "center",

  width: 50,
  height: 50,

  boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",

  svg: {
    width: 35,
    height: 35
  },

  borderRadius: 20,
  background: ds.colors.white,
  color: ds.colors.blue,

  position: "absolute",
  bottom: -25,
  left: "50%",
  transform: "translateX(-50%)",

  zIndex: 1,

  cursor: "pointer",
});
