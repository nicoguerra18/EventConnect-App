## Test Case: TC_ViewEventOnMap_01 - Map Visualization of Events

**User Story**: View Event on Map
**URL**: [View Event on Map Issue](https://github.com/nicoguerra18/EventConnect-App/issues/15)
**Acceptance Criteria**:
1. When an event is created, an icon representing the event appears on the map at the correct location.
2. The event icon on the map is clearly visible and distinguishable from other icons.

**Preconditions**:
- User has created an event with a specific location.

**Test Steps**:
1. After event creation, navigate to the map view where events are displayed.
2. Locate the icon representing the newly created event on the map.
3. Ensure that the icon is at the correct location and is clearly distinguishable.

**Expected Results**:
- An icon for the new event appears on the map exactly where the event is located.
- The event icon stands out from other icons, making it easily identifiable.

**Actual Results**:
*(To be filled after execution)*

---

## Test Case: TC_EventDetailsFromMap_01 - Accessing Event Details from Map

**User Story**: Event Details from Map
**URL**: [Event Details from Map Issue](https://github.com/nicoguerra18/EventConnect-App/issues/16)
**Acceptance Criteria**:
1. Clicking on an event icon on the map opens a dialog with details about the event.
2. The dialog includes information such as event name, time, location, and description.

**Preconditions**:
- Several events with icons are present on the map.

**Test Steps**:
1. Click on an event icon on the map.
2. Observe the dialog that opens and review the information presented.

**Expected Results**:
- Clicking an event icon triggers a dialog box to appear without any issues.
- The dialog box correctly displays the event's name, time, location, and a description.

**Actual Results**:
*(To be filled after execution)*

---

## Test Case: TC_InteractionInEventDialog_01 - Interaction Component Functionality

**User Story**: Interaction Component in Event Dialog
**URL**: [Interaction Component in Event Dialog Issue](https://github.com/nicoguerra18/EventConnect-App/issues/17)
**Acceptance Criteria**:
1. Within the event dialog, there is a component that allows users to interact with other event attendees.
2. Users can send and receive messages or requests related to the event in the interaction component.

**Preconditions**:
- User is viewing an event dialog with the interaction component enabled.

**Test Steps**:
1. Use the interaction component to send a message or request to another attendee.
2. Verify that the message/request is sent successfully and can be received by the attendee.

**Expected Results**:
- The interaction component within the event dialog allows for smooth communication between event attendees.
- Messages and requests are sent and received in real-time without any errors.

**Actual Results**:
*(To be filled after execution)*

---

## Test Case: TC_LocationBasedSearch_01 - Location-Based Event Search

**User Story**: Location-Based Event Search
**URL**: [Location-Based Event Search Issue](https://github.com/nicoguerra18/EventConnect-App/issues/18)
**Acceptance Criteria**:
1. Users are prompted to input their location and a search radius.
2. The map updates to show events within the specified radius of the user's location.

**Preconditions**:
- User is on the event search page with map view enabled.

**Test Steps**:
1. Input a location in the designated field and define a search radius.
2. Observe the map to ensure it updates to show only events within the specified radius.

**Expected Results**:
- After entering location and radius, the map refreshes to display events only within that area.
- Events outside the specified radius are not shown, confirming the location-based search functionality.

**Actual Results**:
*(To be filled after execution)*
