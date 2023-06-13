//Through the dedicated Boolean API at https://flynn.boolean.careers/exercises/api/random/mail, generate 10 email addresses and display them on the page within a list using Vue and Axios, as seen in class.
// Display the email addresses only when they have all been generated.
// The email addresses can also be identical to each other; it is not necessary to verify that they are different.

const { createApp } = Vue;

createApp({

    // Status of the app (data) 
    data() {
        return {
            // Array of emails to be displayed on the page
            emailAddressesList: [

            ],
        }
    },

    methods: {

        // Get 10 email addresses from the API 
        getEmailAddresses() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {

                // Loop 10 times
                for (let i = 0; i < 10; i++) {
                    // Push the email address into the array
                    this.emailAddressesList.push(response.data.response);
                }

                // Display the email addresses on the page
                this.emailAddressesList.forEach((email) => {
                    document.getElementById('email-addresses-list').innerHTML += `<li>${email}</li>`;
                } );
            });
        }
    },

    // When the app is created, but it hasn't been mounted yet, get the email addresses
    created() {
        this.getEmailAddresses();
    },

}).mount('#app');
