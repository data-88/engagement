import React, { Component } from "react";
import styled from "styled-components";
import { Transition } from "react-spring/renderprops";
import { Route, Switch, withRouter, Link } from "react-router-dom";
import { Button, Typography } from "../../../../components/elements";
import { Item, Box, Container, Area } from "../../../../layout";

import CreatePerson from "./scenes/CreatePerson";
import PeopleTable from "./components/PeopleTable";

import PersonModal from "src/pages/Admin/components/PersonModal/PersonModal";
import adminScenesStyles from "src/pages/Admin/adminScenesStyles";

const StyledPeople = styled.div`
  ${adminScenesStyles}
`;

export class People extends Component {
  render() {
    const { match, location } = this.props;

    return (
      <StyledPeople>
        <Area NAME="admin-content-header" padding="inset-base">
          <Box wrap align="flex-start">
            <Item margin="wrap-base">
              <Typography variant="display-1">People</Typography>
            </Item>

            <Item margin="wrap-base">
              <Button
                variant="primary"
                as={Link}
                to={`${match.url}/create-person`}
              >
                <Item margin="inline-s">
                  <i className="fas fa-plus" />
                </Item>
                Create Person
              </Button>
            </Item>
          </Box>
        </Area>

        {/* >>> Content body */}
        <Area NAME="admin-content-body" padding="inset-base">
          <PeopleTable />
        </Area>

        <Transition
          native
          items={location}
          keys={location.pathname
            .split("/")
            .slice(2, 4)
            .join("/")}
          from={{ transform: "translateX(-100%)" }}
          enter={{ transform: "translateX(0%)" }}
          leave={{ transform: "translateX(-100%)" }}
        >
          {loc => style => (
            <Switch location={loc}>
              <Route
                path={`${match.url}/create-person`}
                render={() => (
                  <Container NAME="admin-create" animate={style}>
                    <CreatePerson />
                  </Container>
                )}
              />
            </Switch>
          )}
        </Transition>

        <Transition
          native
          items={location}
          keys={location.pathname
            .split("/")
            .slice(2, 4)
            .join("/")}
          from={{ transform: "translateX(-100%)" }}
          enter={{ transform: "translateX(0%)" }}
          leave={{ transform: "translateX(-100%)" }}
        >
          {loc => style => (
            <Switch location={loc}>
              <Route
                path={`${match.url}/person/:id`}
                render={() => (
                  <Container NAME="admin-person" animate={style}>
                    <PersonModal />
                  </Container>
                )}
              />
            </Switch>
          )}
        </Transition>
      </StyledPeople>
    );
  }
}

export default withRouter(People);
