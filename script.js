//Through the dedicated Boolean API at https://flynn.boolean.careers/exercises/api/random/mail, generate 10 email addresses and display them on the page within a list using Vue and Axios, as seen in class.
// Display the email addresses only when they have all been generated.

// Import Vue and Axios from the CDN and assign them to variables for later use in the app (Vue is used to create the app, Axios is used to make the API call)
const { createApp } = Vue;

// Create the app and mount it to the #app div in the HTML
createApp({
    // Status of the app (data) 
    data() {
        // Return the data to be used in the app
        return {
            // Initializing an empty array of emails to be displayed on the page
            emailAddressesList: [],
        };
    },

    // Methods of the app (functions)
    methods: {
        // Get 10 email addresses from the API and add them to the emailAddressesList array, initialized in the data section
        // async and await are used to make sure that the API call is completed before the email addresses are displayed on the page
        async getEmailAddresses() {
            // Get 10 email addresses from the API and add them to the emailAddressesList array using a for loop
            for (let i = 0; i < 10; i++) {
                // Make the API call and store the response in a variable
                const response = await axios.get('https://flynn.boolean.careers/exercises/api/random/mail');
                // Add the email address to the emailAddressesList array
                this.emailAddressesList.push(response.data.response);
            }

            // Display the email addresses on the page

            // Get the #email-addresses-list element and set its innerHTML to li elements containing the email addresses
            this.emailAddressesList.forEach((email) => {
                document.getElementById('email-addresses-list').innerHTML += `<li>${email}</li>`;
            });
        },
    },

    // When the app is created, but it hasn't been mounted yet, get the email addresses
    created() {
        // Get the email addresses from the API and display them on the page when the app is created (before it is mounted)
        this.getEmailAddresses();
    },

// Mount the app to the #app div in the HTML
}).mount('#app');
