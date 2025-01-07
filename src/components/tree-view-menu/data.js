export const menus = [
    {
      label: "Home",
      to: "/home",
      children: []
    },
    {
      label: "About",
      to: "/about",
      children: [
        {
          label: "Our Team",
          to: "/about/team",
          children: [
            {
              label: "Management",
              to: "/about/team/management",
              children: []
            },
            {
              label: "Development",
              to: "/about/team/development",
              children: []
            }
          ]
        },
        {
          label: "Our Story",
          to: "/about/story",
          children: []
        }
      ]
    },
    {
      label: "Services",
      to: "/services",
      children: [
        {
          label: "Web Development",
          to: "/services/web-development",
          children: [
            {
              label: "Frontend",
              to: "/services/web-development/frontend",
              children: []
            },
            {
              label: "Backend",
              to: "/services/web-development/backend",
              children: []
            }
          ]
        },
        {
          label: "Consulting",
          to: "/services/consulting",
          children: [
            {
              label: "Strategy",
              to: "/services/consulting/strategy",
              children: []
            },
            {
              label: "Technical",
              to: "/services/consulting/technical",
              children: []
            }
          ]
        }
      ]
    },
    {
      label: "Contact",
      to: "/contact",
      children: []
    }
  ];

  export default menus;
  