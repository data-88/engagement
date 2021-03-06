import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import MainHeader from "./components/MainHeader";
import MainBody from "./components/MainBody";
import MainSideModal from "./components/MainSideModal";
import MainFullModal from "./components/MainFullModal";

import { Group } from "src/components/fragments";

import {
  SideModalCreatePerson,
  SideModalCreateGroup,
  SideModalPerson,
  SideModalCreateAnnouncement,
  SideModalAnnouncement,
  SideModalCreateTask,
  SideModalTask
} from "src/components/layouts/SideModal/compositions";

import enums from "src/services/enums";

const StyledMain = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-flow: column;
`;

class Main extends Component {
  static Header = MainHeader;
  static Body = MainBody;
  static SideModal = MainSideModal;
  static FullModal = MainFullModal;

  render() {
    const {
      auth: {
        user: { role }
      }
    } = this.props;

    return (
      <StyledMain>
        {this.props.children}

        {role === enums.roles.ADMINISTRATOR && (
          <Fragment>
            <MainFullModal routePath="/group/:id" routeLevel={2}>
              <Group />
            </MainFullModal>

            <MainSideModal routePath="/group/:id/person/:id" routeLevel={4}>
              <SideModalPerson />
            </MainSideModal>

            <MainSideModal routePath="/create-group">
              <SideModalCreateGroup />
            </MainSideModal>

            <MainSideModal routePath="/create-person">
              <SideModalCreatePerson />
            </MainSideModal>

            <MainSideModal routePath="/group/:id/create-person">
              <SideModalCreatePerson />
            </MainSideModal>

            <MainSideModal routePath="/group/:id/create-announcement">
              <SideModalCreateAnnouncement />
            </MainSideModal>
          </Fragment>
        )}

        {role === enums.roles.TRAINEE && (
          <Fragment>
            <MainSideModal routePath="/create-task">
              <SideModalCreateTask />
            </MainSideModal>

            <MainSideModal routePath="/task/:id">
              <SideModalTask />
            </MainSideModal>
          </Fragment>
        )}

        <MainSideModal routePath="/create-announcement">
          <SideModalCreateAnnouncement />
        </MainSideModal>

        <MainSideModal routePath="/person/:id" routeLevel={2}>
          <SideModalPerson />
        </MainSideModal>

        <MainSideModal routePath="/announcement/:id" routeLevel={2}>
          <SideModalAnnouncement />
        </MainSideModal>
      </StyledMain>
    );
  }
}

export default connect(state => ({
  auth: state.auth
}))(Main);
