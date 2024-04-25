**User Story**: Join a Group
**URL**: [Join a Group Issue](https://github.com/nicoguerra18/EventConnect-App/issues/19)
**Acceptance Criteria**:
1. Users can search for groups by name and request to join as a member.
2. Members can interact with each other within the group's designated area.

**Preconditions**:
- User is logged in to the application.
- At least one group is available to join.

**Test Steps**:
1. Navigate to the group search feature.
2. Search for an existing group by name.
3. Request to join the group.
4. Once accepted, use the group's designated area to interact with other members.

**Expected Results**:
- The search function retrieves the correct group based on the input name.
- The user can submit a request to join the group successfully.
- After joining, the user is able to interact with other group members within the designated area.

**Actual Results**:
- The user can submit a request to join the group successfully.
- After joining, the user is able to interact with other group members within the designated area.
- search
---

## Test Case: TC_CreateGroup_01 - Creating a New Group

**User Story**: Create a Group
**URL**: [Create a Group Issue](https://github.com/nicoguerra18/EventConnect-App/issues/20)
**Acceptance Criteria**:
1. Users have the option to create a new group.
2. The creator can set up group details such as name, description, and privacy settings.

**Preconditions**:
- User is logged in to the application and has permissions to create a group.

**Test Steps**:
1. Navigate to the create group page.
2. Fill out the form to create a new group, including name, description, and privacy settings.
3. Submit the form and verify that the new group is created.
4. Check that the group details match the information entered during creation.

**Expected Results**:
- The joining group page is accessible and functional.
- Upon form submission, a new group is created with the specified details.
- Group details are correct and reflect the creator's input.

**Actual Results**:
- The joining group page is accessible and functional.
- user are not able to edit the group detail

---

## Test Case: TC_CreatePrivateEvent_01 - Creating Private Events in a Group

**User Story**: Create Private Events in Group
**URL**: [Create Private Events in Group Issue](https://github.com/nicoguerra18/EventConnect-App/issues/21)
**Acceptance Criteria**:
1. Creators of a group can create private events that are only visible to group members.
2. Private events have all the functionalities of public events but are hidden from non-members.

**Preconditions**:
- User is logged in, owns a group, and is on the group's page.

**Test Steps**:
1. Access the group management panel.
2. Create a new event and set it to 'Private'.
3. Complete the event creation process.
4. Log in as a different user who is not a member of the group and verify that the event is not visible.

**Expected Results**:
- The group owner can create a private event successfully.
- The private event includes all standard event functionalities.
- The event is only visible to members of the group and not to outsiders.

**Actual Results**:
- User within the group can chat with each other.
- The private event includes all standard event functionalities.
- The event is only visible to members of the group and not to outsiders.

---

## Test Case: TC_NavigateGroups_01 - Navigating Through User Groups

**User Story**: Navigate Through Groups
**URL**: [Navigate Through Groups Issue](https://github.com/nicoguerra18/EventConnect-App/issues/22)
**Acceptance Criteria**:
1. Users can navigate through a list of groups they are a part of on a separate page.
2. Each group in the list provides a direct link to the group's page.

**Preconditions**:
- User is logged in and is a member of multiple groups.

**Test Steps**:
1. Navigate to the list of groups the user is a member of.
2. Click on each group to be redirected to the group's individual page.

**Expected Results**:
- The application presents a navigable list of all groups the user is a member of.
- Each group link directs the user to the correct group page.

**Actual Results**:
- The application presents a navigable list of all groups the user is a member of.
- Each group link directs the user to the correct group page.

---

## Test Case: TC_SearchJoinGroup_01 - Search and Join Groups by Name

**User Story**: Search and Join Groups by Name
**URL**: [Search and Join Groups by Name Issue](https://github.com/nicoguerra18/EventConnect-App/issues/23)
**Acceptance Criteria**:
1. Users can join groups by searching for the exact group name.
2. Search for groups is case-insensitive and allows partial name matching.

**Preconditions**:
- User is logged in and on the group search page.

**Test Steps**:
1. In the search bar, enter the full name of a group to search for.
2. Enter a part of a group name to test partial matching.
3. Attempt to join the groups found through searching.

**Expected Results**:
- The search returns the correct group when the full name is entered, regardless of case.
- The search returns groups that partially match the input.
- The user can request to join groups directly from the search results.

**Actual Results**:
- The search returns the correct group when the full name is entered, regardless of case.
- The search returns groups does not apply the partial match
- The user can request to join groups directly from the search results.
