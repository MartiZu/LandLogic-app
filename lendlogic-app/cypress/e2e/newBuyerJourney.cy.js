describe("New Buyer Journey", () => {
    it("should navigate to the page", () => {
        // Load localhost:3000
        cy.visit("http://localhost:3000/");
        // check that that there are 2 buttons on the page and an image
        cy.contains("Jenny's journey");
// click the second button

// if clicked, check that the url is now localhost:3000/questionnaire

// assert that we have made it to the questionnaire page

// check that there is a heading that it contains Welcome to LendLogic

// check that there is a button that contains Get Started

// check that there is a paragragh that contains "we're here to guide you"

// click the button

// expect to see a heading that contains "which of the following bes describes you?"

// Kat clicks "New Buyer" button

// expect to see a heading that contains "How comfortable are you with mortgage terminology?"

// Kat clicks "I'm not comfortable" button

// expect to see loading spinner

// expect to be redirected to /dashboard

// expect to see "New Buyer Checklist" heading with "find out more" button

// expect to see new buyer report

// expect to see paragraph containing £15000

// Kat enters postcode into input field

// Kat clicks search button

// expect to see updated postcode and deposit in paragraph

// Kat clicks "find out more" button

// expect see paragraph containing "your monthly savings could be"

// expect to see a button containing text "hide"
})});