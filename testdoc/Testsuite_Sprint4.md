## Test Case: TC_CreateGroup_01 - Invitation System
**User Story**: Invitation System
**URL**: [Join a Group Issue](https://github.com/nicoguerra18/EventConnect-App/issues/19)
**Acceptance Criteria**:
1. Users should be able to select an event and choose to invite other users
2. Members can interact with each other within the group's designated area.

**Preconditions**:
- User is logged in to the application.
- Users should be able to search for other users by username or email to send invitations.

**Test Steps**:
1. Navigate to the group search feature.
2. Search for an existing group by name.
3. Request to join 
4. Once accepted, use the group's designated area to interact with other members.

**Expected Results**:
- The search function retrieves the correct group based on the input name.
- The user can submit a request to join the group successfully.
- After joining, the user is able to interact with other group members within the designated area.

**Actual Results**:
- The user can submit a request to join the group successfully.
- After joining, the user is able to interact with other group members within the designated area.

---

## Test Case: TC_CreateGroup_01 - Acceptance System

**User Story**: Acceptance System
**URL**: [Create a Group Issue](https://github.com/nicoguerra18/EventConnect-App/issues/20)
**Acceptance Criteria**:
1. Invited users should receive a notification about the invitation.
2. Invited users must have the option to accept or decline the invitation.

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
- Group details are correct and reflect the creator's input.

---

## Test Case: TC_CreatePrivateEvent_01 - Public and Private Event Creation

**User Story**: Public and Private Event Creation
**URL**: [Create Private Events in Group Issue](https://github.com/nicoguerra18/EventConnect-App/issues/21)
**Acceptance Criteria**:
1. During the event creation process, the creator must have a clear option to mark the event as public or private. 
2. Private events should not be visible in the general 'All Events' listing.

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
1. The user’s profile page should list all events the user has created or joined.
2. The list must update in real-time when a user accepts an invitation to a private event.

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

## Test Case: TC_SearchJoinGroup_01 -Handling Invitations for Events

**User Story**: Search and Join Groups by Name
**URL**: [Search and Join Groups by Name Issue](https://github.com/nicoguerra18/EventConnect-App/issues/23)
**Acceptance Criteria**:
1. Users should receive a notification for an event invitation with options to accept or decline.
2. Upon accepting an invitation, the event should be marked as 'attending' in the user's event list.
3. Upon declining an invitation, the event should be removed from the user's pending invitations list. AC4: The number of confirmed attendees should update accordingly for the event organizer.

**Preconditions**:
- User is logged in and on the group search page.

**Test Steps**:
1. In the search bar, enter the full name of a group to search for.
2. Enter a part of a group name to test partial matching.
3. Attempt to join the groups found through searching.

**Expected Results**:
- The search returns the correct group when the full name is entered, regardless of case.
- The search returns groups that partially match the input.
- The user  can receieve invitation to join groups directly from the search results.

**Actual Results**:
- The search returns the correct group when the full name is entered, regardless of case.
- The search returns groups does not apply the partial match
- The user can receieve invitation to join groups directly from the search results.
