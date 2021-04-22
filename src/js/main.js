var vue = new Vue(
  {
    el: '#root',
    data: {
      index: 0,
      currentLink: `href="#"`, //bind all'href di li
      navContacts: [
        {
          name: 'Home',
        },
        {
          name: 'Service',
        },
        {
          name: 'Why Us',
        },
        {
          name: 'Case Studies',
        },
        {
          name: 'About',
        },
        {
          name: 'Blog',
        },
      ],
    },
    methods: {
      onSelectedContact: function () {
        var currentContact = this.navContacts[this.index];
        this.currentLink = 'href="#"';
      },
    }
  });
