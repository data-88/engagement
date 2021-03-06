import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

import ReactTable from "react-table";
import "react-table/react-table.css";

import { Main } from "src/pages/App/components";

import { getPeople } from "src/services/session/actions/peopleActionCreators";

export class Requests extends Component {
  componentDidMount() {
    const { getPeople } = this.props;

    getPeople();
  }

  render() {
    const {
      people: { data, isLoading },
      history,
      match
    } = this.props;

    let filteredData = [];

    if (data) {
      filteredData = data.filter(
        person =>
          person.role === "trainee" &&
          person.roleData.clockCorrectionRequest.isActive === true
      );
    }

    const columns = [
      {
        Header: "Username",
        accessor: "username",
        filterable: true
      },
      {
        id: "groupName",
        Header: "Group",
        accessor: d => d.roleData.group.name
      },
      {
        Header: "Request",
        Cell: props => "Clock Correction"
      }
    ];

    return (
      <Main>
        <Main.Header title="Requests" />

        <Main.Body isLoading={isLoading}>
          {data && (
            <StyledTable>
              <ReactTable
                data={filteredData}
                showPageSizeOptions={false}
                resizable={false}
                defaultPageSize={14}
                columns={columns}
                className="-highlight"
                getTrProps={(state, rowInfo, column, instance) => {
                  return {
                    onClick: () => {
                      history.push(
                        `${match.url}/person/${
                          rowInfo.original._id
                        }/daily-time-record`
                      );
                    }
                  };
                }}
              />
            </StyledTable>
          )}
        </Main.Body>
      </Main>
    );
  }
}

const StyledTable = styled.div`
  margin: var(--size-base);
  background-color: ${p => p.theme.color.white};
  box-shadow: ${p => p.theme.shadow[1]};
  padding: var(--size-base);
  border-radius: var(--size-base);

  .item-people-role {
    width: 50%;
  }
`;
export default withRouter(
  connect(
    state => ({
      people: state.people
    }),
    { getPeople: getPeople }
  )(Requests)
);
