var $j = jQuery.noConflict();

$j(document).ready(function(){
  if($j('body').hasClass('dokan-dashboard')){
    const tour = new Shepherd.Tour({
      defaultStepOptions: {
        cancelIcon: {
          enabled: true
        },
        classes: 'tour-step',
        scrollTo: { behavior: 'smooth', block: 'center' }
      }
    });

    tour.addStep({
      title: 'Welcome To Your Dashboard!',
      text: `Click through to learn about everything that is possible!`,
      buttons: [
        {
          action() {
            return this.back();
          },
          classes: 'shepherd-button-secondary',
          text: 'Back'
        },
        {
          action() {
            return this.next();
          },
          text: 'Next'
        }
      ],
      id: 'welcome'
    });

    tour.addStep({
      title: 'Dashboard',
      text: `Here you'll get an overview of your sales, earnings, page views and orders. Everything you need to see how your store is doing!`,
      attachTo: {
        element: '.dokan-dashboard-menu .dashboard',
        on: 'right'
      },
      buttons: [
        {
          action() {
            return this.back();
          },
          classes: 'shepherd-button-secondary',
          text: 'Back'
        },
        {
          action() {
            return this.next();
          },
          text: 'Next'
        }
      ],
      id: 'dashboard'
    });

    tour.addStep({
      title: 'Products',
      text: `View all the products you have in your store and add new ones here!`,
      attachTo: {
        element: '.dokan-dashboard-menu .products',
        on: 'right'
      },
      buttons: [
        {
          action() {
            return this.back();
          },
          classes: 'shepherd-button-secondary',
          text: 'Back'
        },
        {
          action() {
            return this.next();
          },
          text: 'Next'
        }
      ],
      id: 'products'
    });

    tour.addStep({
      title: 'Orders',
      text: `View orders your customers have placed here`,
      attachTo: {
        element: '.dokan-dashboard-menu .orders',
        on: 'right'
      },
      buttons: [
        {
          action() {
            return this.back();
          },
          classes: 'shepherd-button-secondary',
          text: 'Back'
        },
        {
          action() {
            return this.next();
          },
          text: 'Next'
        }
      ],
      id: 'orders'
    });

    tour.addStep({
      title: 'Coupons',
      text: `Add and manage coupons and discounts for your products`,
      attachTo: {
        element: '.dokan-dashboard-menu .coupons',
        on: 'right'
      },
      buttons: [
        {
          action() {
            return this.back();
          },
          classes: 'shepherd-button-secondary',
          text: 'Back'
        },
        {
          action() {
            return this.next();
          },
          text: 'Next'
        }
      ],
      id: 'coupons'
    });

    tour.addStep({
      title: 'Reports',
      text: `View in depth reports on your sales and earnings`,
      attachTo: {
        element: '.dokan-dashboard-menu .reports',
        on: 'right'
      },
      buttons: [
        {
          action() {
            return this.back();
          },
          classes: 'shepherd-button-secondary',
          text: 'Back'
        },
        {
          action() {
            return this.next();
          },
          text: 'Next'
        }
      ],
      id: 'reports'
    });

    tour.addStep({
      title: 'Reviews',
      text: `View reviews your customers have left`,
      attachTo: {
        element: '.dokan-dashboard-menu .reviews',
        on: 'right'
      },
      buttons: [
        {
          action() {
            return this.back();
          },
          classes: 'shepherd-button-secondary',
          text: 'Back'
        },
        {
          action() {
            return this.next();
          },
          text: 'Next'
        }
      ],
      id: 'reviews'
    });

    tour.addStep({
      title: 'Withdraw',
      text: `Withdraw your earnings`,
      attachTo: {
        element: '.dokan-dashboard-menu .withdraw',
        on: 'right'
      },
      buttons: [
        {
          action() {
            return this.back();
          },
          classes: 'shepherd-button-secondary',
          text: 'Back'
        },
        {
          action() {
            return this.next();
          },
          text: 'Next'
        }
      ],
      id: 'withdraw'
    });

    tour.addStep({
      title: 'Followers',
      text: `Find out who is following your store`,
      attachTo: {
        element: '.dokan-dashboard-menu .followers',
        on: 'right'
      },
      buttons: [
        {
          action() {
            return this.back();
          },
          classes: 'shepherd-button-secondary',
          text: 'Back'
        },
        {
          action() {
            return this.next();
          },
          text: 'Next'
        }
      ],
      id: 'followers'
    });

    tour.addStep({
      title: 'Booking',
      text: `Setup and manage products that require bookings here`,
      attachTo: {
        element: '.dokan-dashboard-menu .booking',
        on: 'right'
      },
      buttons: [
        {
          action() {
            return this.back();
          },
          classes: 'shepherd-button-secondary',
          text: 'Back'
        },
        {
          action() {
            return this.next();
          },
          text: 'Next'
        }
      ],
      id: 'booking'
    });

    tour.addStep({
      title: 'Announcements',
      text: `View the sitewide announcements we occassionally send out`,
      attachTo: {
        element: '.dokan-dashboard-menu .announcement',
        on: 'right'
      },
      buttons: [
        {
          action() {
            return this.back();
          },
          classes: 'shepherd-button-secondary',
          text: 'Back'
        },
        {
          action() {
            return this.next();
          },
          text: 'Next'
        }
      ],
      id: 'announcement'
    });

    tour.addStep({
      title: 'Support',
      text: `Customer support requests appear here`,
      attachTo: {
        element: '.dokan-dashboard-menu .support',
        on: 'right'
      },
      buttons: [
        {
          action() {
            return this.back();
          },
          classes: 'shepherd-button-secondary',
          text: 'Back'
        },
        {
          action() {
            return this.next();
          },
          text: 'Next'
        }
      ],
      id: 'support'
    });

    tour.addStep({
      title: 'Settings',
      text: `View settings for your account Here`,
      attachTo: {
        element: '.dokan-dashboard-menu .settings',
        on: 'right'
      },
      buttons: [
        {
          action() {
            return this.back();
          },
          classes: 'shepherd-button-secondary',
          text: 'Back'
        },
        {
          action() {
            return this.next();
          },
          text: 'Next'
        }
      ],
      id: 'settings'
    });
    tour.start();
  }

});
