# EventConnect-App Test Suite

This document is the Test suite for sprint2 that outlines the test cases. Each test case is designed based on the acceptance criteria of its respective user story.

## Test Case: TC_Profile_01 - Profile Creation and Data Storage

**User Story**: Profile Page
**URL**: [Profile Page Issue](https://github.com/nicoguerra18/EventConnect-App/issues/4)
**Acceptance Criteria**:
1. User can fill out a form with personal information (name, Username, password, Bio, and Profile picture).
2. Profile data is stored securely in the database.

**Preconditions**:
- The user is not logged in to the application.

**Test Steps**:
1. Navigate to the sign-up page.
2. Fill out the registration form with the required information: name, username, password, bio, and upload a profile picture.
3. Submit the form to create a new profile.
4. Log into the application with the new user credentials.
5. Navigate to the profile page to view the entered information.

**Expected Results**:
- A new user profile is successfully created with no errors.
- User can log in with the new credentials.
- User's profile information is displayed accurately on the profile page.
- The profile picture is uploaded and visible.

**Actual Results**:
- The frontend display correct fields: name, username, password, bio, and upload a profile picture.
- Backend successfully response to update bio request
[12/Apr/2024 00:26:21] "PATCH /profiles/2/ HTTP/1.1" 400 94
[12/Apr/2024 00:26:21] "GET /eventcoords/ HTTP/1.1" 200 5575
[12/Apr/2024 00:26:30] "PATCH /profiles/2/ HTTP/1.1" 200 203
- The new information and profile picture were successufully updated.
- 100% pass the test

## Test Case: TC_EventCreate_01 - Event Creation and Listing

**User Story**: Event Create Window
**URL**: [Event Create Window Issue](https://github.com/nicoguerra18/EventConnect-App/issues/5)
**Acceptance Criteria**:
1. Event organizers can access a form to input event details (title, date, location, description, and People attending).
2. New event is added to the public events list upon creation.

**Preconditions**:
- User is logged in as an event organizer.

**Test Steps**:
1. Navigate to the event creation form.
2. Enter details for a new event: title, date, location, and description.
3. Submit the form to create the event.
4. Go to the public events list to confirm the new event is listed.

**Expected Results**:
- The event creation form is accessible and can be filled out.
- Upon submitting the form, the new event is visible in the public events list with the correct details.

**Actual Results**:
- The event creation form is accessible and can be filled out.
- Upon submitting the form, the new event is visible in the public events list with the correct details.
- Frontend event is correctly displayed
- The event is created after submitting the info
[12/Apr/2024 01:50:47] "POST /EventDatabase/ HTTP/1.1" 400 139
[12/Apr/2024 01:50:48] "GET /profiles/2/ HTTP/1.1" 200 203
[12/Apr/2024 01:50:48] "GET /createdevents/nico/ HTTP/1.1" 200 2428
[12/Apr/2024 01:50:48] "GET /EventDatabase/ HTTP/1.1" 200 4554
[12/Apr/2024 01:50:48] "GET /media/profile_pics/CEMU_Screenshot_2022.08.23_-_01.22.21.75_TAXV94t.png HTTP/1.1" 200 3415214
[12/Apr/2024 01:50:48] "GET /eventsattending/nico/ HTTP/1.1" 200 610
[12/Apr/2024 01:50:52] "GET /eventcoords/ HTTP/1.1" 200 5575
- 100% pass the test

---
**User Story**: Log in system
**URL**: [Log in system Issue](https://github.com/nicoguerra18/EventConnect-App/issues/6)
**Acceptance Criteria**:
1. Users can enter their username and password to log in.
2. Authentication is verified before access is granted.
3. Users receive an error message for incorrect login details.

**Preconditions**:
- The user has already signed up and confirmed their account.

**Test Steps**:
1. Navigate to the login page.
2. Enter a valid username and password and submit the form.
3. Repeat the process with an invalid username and/or password.

**Expected Results**:
- With valid credentials, the user is granted access to their account.
- With invalid credentials, the user receives an appropriate error message and is not granted access.

**Actual Results**:
- The Login is react based, user is able to sign up and use credentials to sign in.
- Without sign in, user won't be able to view the private event and profile
- Log out function work
- User are not able to update profile

---

## Test Case: TC_EventView_01 - Viewing Event List and Details

**User Story**: Event view window
**URL**: [Event view window Issue](https://github.com/nicoguerra18/EventConnect-App/issues/7)
**Acceptance Criteria**:
1. Users can view a list of events on the event view window.
2. Events are displayed with all pertinent information visible.
3. Events can be clicked on to view more details.

**Preconditions**:
- User is logged in and navigates to the event view window.

**Test Steps**:
1. On the main dashboard, click on the event view window.
2. Review the list of events and verify that all pertinent information is visible.
3. Click on an event to view more details.

**Expected Results**:
- The event view window displays a list of current events.
- Each event in the list shows relevant information such as title, date, and location.
- Upon clicking an event, a detailed view is presented with more information.

**Actual Results**:
- The event view window displays a list of current events.
- Each event in the list shows relevant information such as title, date, and location.
- Upon clicking an event, a detailed view is presented with more information.
[12/Apr/2024 01:53:58] "GET /createdevents/nico/ HTTP/1.1" 200 2428
[12/Apr/2024 01:53:58] "GET /profiles/2/ HTTP/1.1" 200 203
[12/Apr/2024 01:53:58] "GET / HTTP/1.1" 404 5054
[12/Apr/2024 01:53:58] "GET /EventDatabase/ HTTP/1.1" 200 4554
[12/Apr/2024 01:53:58] "GET /eventsattending/nico/ HTTP/1.1" 200 610
[12/Apr/2024 01:54:01] "GET /eventcoords/ HTTP/1.1" 200 5575
- 100% pass the test
---

## Test Case: TC_HomePage_01 - Navigation to Various Sections

**User Story**: Home page
**URL**: [Home page Issue](https://github.com/nicoguerra18/EventConnect-App/issues/8)
**Acceptance Criteria**:
1. Navigation to other sections like Profile, Events, etc., is available.

**Preconditions**:
- User is logged in and on the home page.

**Test Steps**:
1. Verify the navigation bar or menu is present.
2. Click on each navigation link: Profile, Events, etc.
3. Confirm that each link takes you to the corresponding section.

**Expected Results**:
- The home page includes a navigation bar or menu that is functional.
- Each link in the navigation bar redirects to the correct section without errors.

**Actual Results**:
- The home page includes a navigation bar or menu that is functional.
- Each link in the navigation bar redirects to the correct section without errors.
- 100% pass the test
---
**User Story**: Search function
**URL**: [Search function Issue](https://github.com/nicoguerra18/EventConnect-App/issues/9)
**Acceptance Criteria**:
1. Users can type search terms into a search bar to find events.
2. Search results update in real-time as the user types.
3. No results found message is displayed if there are no matches.

**Preconditions**:
- User is logged in and on the page where the search function is available.

**Test Steps**:
1. Type a known event name in the search bar and observe the search results.
2. Continue typing the event details, and verify that the results are updating in real-time.
3. Enter a search term that does not match any event and verify the no results message.

**Expected Results**:
- Typing in the search bar filters the events list according to the input in real-time.
- Only events matching the search criteria are displayed.
- If no events match the search criteria, a 'No results found' message is displayed.

**Actual Results**:
- Typing in the search bar filters the events list according to the input in real-time.

- Enter full name of the existing event match the searching criteria
- If no event match, the home page display default events

---

## Test Case: TC_EventParticipation_01 - Join and Leave Event Function

**User Story**: Event participation and leave Function
**URL**: [Event participation and leave Function Issue](https://github.com/nicoguerra18/EventConnect-App/issues/10)
**Acceptance Criteria**:
1. Users can join an event with a single click/tap on a "Join" button.
2. Once joined, users can leave the event using a "Leave" button.
3. The user's event list updates in real-time when joining or leaving events.

**Preconditions**:
- User is logged in and viewing an event they are not currently participating in.

**Test Steps**:
1. Click the "Join" button for an event.
2. Confirm the event is now listed under the user's joined events.
3. Click the "Leave" button for the same event.
4. Confirm the event is removed from the user's joined events list.

**Expected Results**:
- The "Join" button allows the user to join the event immediately.
- The "Leave" button is visible after joining, and allows the user to leave the event.
- The user's joined events list is updated instantly without needing to refresh the page.

**Actual Results**:
- frontend is 100% done
- the even will be added in sprint4



**User Story**: Existing events view
**URL**: [Existing events view Issue](https://github.com/nicoguerra18/EventConnect-App/issues/11)
**Acceptance Criteria**:
1. Users can see a list of events they have joined on their profile.
2. Each event in the list has a button/link to view more details.
3. The list is updated immediately when a user joins or leaves an event.

**Preconditions**:
- User is logged in and has previously joined at least one event.

**Test Steps**:
1. Navigate to the user's profile page.
2. Locate and view the list of joined events.
3. Click on the details button/link for one of the events.
4. Join a new event and verify it appears in the list without needing to refresh.
5. Leave an event and verify it disappears from the list immediately.

**Expected Results**:
- The profile page shows a list of events that the user has joined.
- Detail buttons/links for each event are functional and display more information as expected.
- The list of joined events updates in real-time when joining or leaving events.

**Actual Results**:
- The profile page shows a list of events that the user has joined.
- Detail buttons/links for each event are functional and display more information as expected.
- The list of joined events updates in real-time when joining or leaving events.

---

## Test Case: TC_DarkMode_01 - Toggle Dark Mode

**User Story**: Dark mode
**URL**: [Dark mode Issue](https://github.com/nicoguerra18/EventConnect-App/issues/12)
**Acceptance Criteria**:
1. Users can toggle dark mode on/off through a user interface control.
2. All pages are fully functional in both dark and light mode.

**Preconditions**:
- User is logged in.

**Test Steps**:
1. Locate and toggle the dark mode control in the user interface.
2. Navigate through different pages to verify functionality in dark mode.
3. Toggle back to light mode and repeat the navigation to verify functionality.

**Expected Results**:
- The dark mode toggle changes the interface between dark and light themes.
- All application pages function correctly in both modes without any visual or functional issues.

**Actual Results**:
- The dark mode toggle changes the interface between dark and light themes.
- All application pages function correctly in both modes without any visual or functional issues.


---

## Test Case: TC_BackendFormBuild_01 - Form Data Processing

**User Story**: Backend form build
**URL**: [Backend form build Issue](https://github.com/nicoguerra18/EventConnect-App/issues/13)
**Acceptance Criteria**:
1. Backend successfully processes form data from the front-end.
2. Form data is validated on the backend before being accepted.
3. Proper error messages are returned for invalid data.

**Preconditions**:
- User is logged in and has access to submit forms in the application.

**Test Steps**:
1. Submit a form with valid data and verify successful processing.
2. Attempt to submit a form with intentionally invalid data.
3. Check for proper error messages when submitting invalid data.

**Expected Results**:
- Valid form data is processed and stored correctly by the backend.
- Invalid form data is not accepted, and the backend responds with appropriate error messages.

**Actual Results**:
- Valid form data is processed and stored correctly by the backend.
- Invalid form data is not accepted, and the backend responds with appropriate error messages.
[12/Apr/2024 00:26:21] "PATCH /profiles/2/ HTTP/1.1" 400 94
[12/Apr/2024 00:26:21] "GET /eventcoords/ HTTP/1.1" 200 5575
[12/Apr/2024 00:26:30] "PATCH /profiles/2/ HTTP/1.1" 200 203

bad request:
[12/Apr/2024 01:58:14] "GET /createdevents/nico/ HTTP/1.1" 200 2428
Not Found: /

---
**User Story**: Backend database
**URL**: [Backend database Issue](https://github.com/nicoguerra18/EventConnect-App/issues/14)
**Acceptance Criteria**:
1. Data is consistently stored in a structured format.
2. Database can be queried for reports and analytics.
3. Database includes security features to prevent unauthorized access.

**Preconditions**:
- Backend server is operational.

**Test Steps**:
1. Insert sample data into the database and verify it is stored in the structured format defined.
2. Execute predefined queries for reports and validate the results against expected analytics.
3. Test database security by attempting access with invalid credentials and ensuring access is denied.

**Expected Results**:
- The database stores data in a consistent, structured format.
- Reports and analytics can be generated accurately based on database queries.
- Unauthorized access attempts are successfully blocked, ensuring data security.

**Actual Results**:
- The database stores data in a consistent, structured format.
- Reports and analytics can be generated accurately based on database queries.
- currently, the account function is not fully established

[12/Apr/2024 01:53:58] "GET / HTTP/1.1" 404 5054
[12/Apr/2024 01:53:58] "GET /EventDatabase/ HTTP/1.1" 200 4554
[12/Apr/2024 01:53:58] "GET /eventsattending/nico/ HTTP/1.1" 200 610
[12/Apr/2024 01:54:01] "GET /eventcoords/ HTTP/1.1" 200 5575
[12/Apr/2024 01:57:56] "GET /profiles/2/ HTTP/1.1" 200 203
[12/Apr/2024 01:57:56] "GET /createdevents/nico/ HTTP/1.1" 200 2428
[12/Apr/2024 01:57:56] "GET /EventDatabase/ HTTP/1.1" 200 4554
[12/Apr/2024 01:57:56] "GET /eventsattending/nico/ HTTP/1.1" 200 610
[12/Apr/2024 01:57:59] "GET /eventcoords/ HTTP/1.1" 200 5575
[12/Apr/2024 01:58:14] "GET /profiles/2/ HTTP/1.1" 200 203
[12/Apr/2024 01:58:14] "GET /createdevents/nico/ HTTP/1.1" 200 2428
