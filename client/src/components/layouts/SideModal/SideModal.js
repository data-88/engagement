import React, { Component } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import { Area } from "src/components/blocks";

import { SideModalContent, SideModalHeader, SideModalBody } from "./components";

const StyledSideModal = styled.div`
  position: relative;
  height: 100%;
  display: grid;
  grid-template-areas: "content back";
  grid-template-columns: 3fr 1fr;

  > * {
    z-index: 100;
  }

  .area-sideModal-back {
    grid-area: back;
    grid-column: 1 / -1;
    background-image: linear-gradient(
      to top right,
      ${p => p.theme.color.primary.dark},
      ${p => p.theme.color.primary.main}
    );
    opacity: 0.8;
    z-index: 99;
  }
`;

export class SideModal extends Component {
  static Header = SideModalHeader;
  static Body = SideModalBody;

  render() {
    const { children, history } = this.props;

    return (
      <StyledSideModal>
        <SideModalContent>{children}</SideModalContent>

        <Area
          NAME="sideModal-back"
          onClick={() => {
            history.goBack();
          }}
        />
      </StyledSideModal>
    );
  }
}

export default withRouter(SideModal);
