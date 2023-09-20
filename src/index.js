import DisplayComponent from "./display.vue";

export default {
  id: "vimeopro-display",
  name: "Vimeo Pro",
  icon: "subscriptions",
  description: "Display data from the Vimeo Pro interface extension",
  component: DisplayComponent,
  options: [
    {
      field: "show_name",
      type: "boolean",
      name: "Show video title",
      meta: {
        interface: "boolean",
        options: {
          label: "Yes",
        },
        width: "half",
      },
    },
  ],
  types: ["json"],
};
