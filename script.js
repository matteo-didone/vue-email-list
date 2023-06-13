//Through the dedicated Boolean API at https://flynn.boolean.careers/exercises/api/random/mail, generate 10 email addresses and display them on the page within a list using Vue and Axios, as seen in class.
// Display the email addresses only when they have all been generated.

const { createApp } = Vue;

createApp({

    // Status of the app (data) 
    data() {
        return {
            // Array of emails to be displayed on the page
            emailAddressesList: [],
        };
    },


    computed: {
        allEmailAddressesGenerated() {
            return this.emailAddressesList.length === 10;
        },
    },


    methods: {
        // Get 10 email addresses from the API 
        getEmailAddresses() {

            // Loop 10 times
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                    
                    // Push the email address into the array
                    this.emailAddressesList.push(response.data.response);

                    // Set the flag to true
                    this.allEmailAddressesGenerated = true;

                    if (this.allEmailAddressesGenerated) {
                        // Display the email addresses on the page
                        this.emailAddressesList.forEach((email) => {
                            document.getElementById('email-addresses-list').innerHTML += `<li>${email}</li>`;
                        });
                    }
                });
            }

        }
    },

    // When the app is created, but it hasn't been mounted yet, get the email addresses
    created() {
        this.getEmailAddresses();
    },

}).mount('#app');
