import React, { Fragment } from "react";
import format from "date-fns/format";

import { Item } from "src/components/blocks";
import { Typography, Photo, Divider } from "src/components/elements";
import { DataGroup } from "src/components/compounds";

import enums from "src/services/enums";

const PersonInformation = ({ data }) => {
  return (
    <Fragment>
      <Item margin="stack-l">
        <DataGroup>
          <DataGroup.Label title="Profile Picture" />

          <DataGroup.Content>
            {data.profilePictureUrl === "" ? (
              <Typography variant="base">No profile picture</Typography>
            ) : (
              <Photo>
                <img src={data.profilePictureUrl} alt="" />
              </Photo>
            )}
          </DataGroup.Content>
        </DataGroup>
      </Item>

      <Item margin="stack-l">
        <DataGroup>
          <DataGroup.Label title="Role" />

          <DataGroup.Content>
            <Typography variant="display-4">{data.role}</Typography>
          </DataGroup.Content>
        </DataGroup>
      </Item>

      {data.role !== enums.roles.ADMINISTRATOR && (
        <Item margin="stack-l">
          <DataGroup>
            <DataGroup.Label title="Group" />

            <DataGroup.Content>
              <Typography variant="display-4">
                {data.roleData.group ? data.roleData.group.name : "N/A"}
              </Typography>
            </DataGroup.Content>
          </DataGroup>
        </Item>
      )}

      <Item margin="stack-base">
        <Divider />
      </Item>

      <Item margin="stack-l">
        <Typography variant="display-3">Account Information</Typography>
      </Item>

      {[
        {
          property: "Username",
          value: data.username,
          roles: [
            enums.roles.ADMINISTRATOR,
            enums.roles.SUPERVISOR,
            enums.roles.TRAINEE,
            enums.roles.EMPLOYEE
          ]
        },
        {
          property: "Email",
          value: data.email,
          roles: [
            enums.roles.ADMINISTRATOR,
            enums.roles.SUPERVISOR,
            enums.roles.TRAINEE,
            enums.roles.EMPLOYEE
          ]
        },
        {
          property: "Training Duration",
          value: data.roleData.trainingDuration,
          roles: [enums.roles.TRAINEE]
        },
        {
          property: "Hours Rendered",
          value: data.roleData.hoursRendered,
          roles: [enums.roles.TRAINEE]
        },
        {
          property: "Date Created",
          value: format(data.dateCreated, "MM-DD-YYYY"),
          roles: [
            enums.roles.ADMINISTRATOR,
            enums.roles.SUPERVISOR,
            enums.roles.TRAINEE,
            enums.roles.EMPLOYEE
          ]
        },
        {
          property: "Date Last Logged In",
          value:
            data.dateLastLoggedIn &&
            format(data.dateLastLoggedIn, "MM-DD-YYYY"),
          roles: [
            enums.roles.ADMINISTRATOR,
            enums.roles.SUPERVISOR,
            enums.roles.TRAINEE,
            enums.roles.EMPLOYEE
          ]
        },
        {
          property: "Account Status",
          value: data.isActive ? "Active" : "Inactive",
          roles: [
            enums.roles.ADMINISTRATOR,
            enums.roles.SUPERVISOR,
            enums.roles.TRAINEE,
            enums.roles.EMPLOYEE
          ]
        }
      ]
        .filter(item => item.roles.includes(data.role))
        .map((item, i) => (
          <Item margin="stack-l" key={i}>
            <DataGroup>
              <DataGroup.Label title={item.property} />

              <DataGroup.Content>
                <Typography variant="body">
                  {item.value === "" || item.value === null
                    ? "N/A"
                    : item.value}
                </Typography>
              </DataGroup.Content>
            </DataGroup>
          </Item>
        ))}

      <Item margin="stack-base">
        <Divider />
      </Item>

      <Item margin="stack-l">
        <Typography variant="display-3">Personal Information</Typography>
      </Item>

      {[
        {
          property: "First Name",
          value: data.firstName,
          roles: [
            enums.roles.ADMINISTRATOR,
            enums.roles.SUPERVISOR,
            enums.roles.TRAINEE,
            enums.roles.EMPLOYEE
          ]
        },
        {
          property: "Middle Name",
          value: data.middleName,
          roles: [
            enums.roles.ADMINISTRATOR,
            enums.roles.SUPERVISOR,
            enums.roles.TRAINEE,
            enums.roles.EMPLOYEE
          ]
        },
        {
          property: "Last Name",
          value: data.lastName,
          roles: [
            enums.roles.ADMINISTRATOR,
            enums.roles.SUPERVISOR,
            enums.roles.TRAINEE,
            enums.roles.EMPLOYEE
          ]
        },
        {
          property: "Nickname",
          value: data.nickname,
          roles: [
            enums.roles.ADMINISTRATOR,
            enums.roles.SUPERVISOR,
            enums.roles.TRAINEE,
            enums.roles.EMPLOYEE
          ]
        },
        {
          property: "Gender",
          value: data.gender,
          roles: [
            enums.roles.ADMINISTRATOR,
            enums.roles.SUPERVISOR,
            enums.roles.TRAINEE,
            enums.roles.EMPLOYEE
          ]
        },
        {
          property: "Date of Birth",
          value:
            data.roleData.dateOfBirth &&
            format(data.roleData.dateOfBirth, "MM-DD-YYYY"),
          roles: [enums.roles.TRAINEE]
        },
        {
          property: "Address",
          value: data.roleData.address,
          roles: [enums.roles.TRAINEE]
        },
        {
          property: "Contact Number",
          value: data.roleData.contactNumber,
          roles: [enums.roles.TRAINEE]
        },
        {
          property: "School",
          value: data.roleData.school,
          roles: [enums.roles.TRAINEE]
        },
        {
          property: "Adviser",
          value: data.roleData.adviserName,
          roles: [enums.roles.TRAINEE]
        },
        {
          property: "Adviser Contact Number",
          value: data.roleData.adviserContactNumber,
          roles: [enums.roles.TRAINEE]
        },
        {
          property: "Guardian Name",
          value: data.roleData.guardianName,
          roles: [enums.roles.TRAINEE]
        },
        {
          property: "Guardian Contact Number",
          value: data.roleData.guardianContactNumber,
          roles: [enums.roles.TRAINEE]
        }
      ]
        .filter(item => item.roles.includes(data.role))
        .map((item, i) => (
          <Item margin="stack-l" key={i}>
            <DataGroup>
              <DataGroup.Label title={item.property} />

              <DataGroup.Content>
                <Typography variant="body">
                  {item.value === "" || item.value === null
                    ? "N/A"
                    : item.value}
                </Typography>
              </DataGroup.Content>
            </DataGroup>
          </Item>
        ))}
    </Fragment>
  );
};

export default PersonInformation;