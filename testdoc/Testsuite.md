# EventConnect-App Test Suite

This document outlines the test cases for the EventConnect application. Each test case is designed based on the acceptance criteria of its respective user story.

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
*(To be filled after execution)*

---

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
*(To be filled after execution)*
