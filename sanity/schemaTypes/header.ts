export default {
    name: "header",
    title: "Header",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "links",
        title: "Links",
        type: "array",
        of: [{ type: "string" }],
      },
      {
        name: "searchPlaceholder",
        title: "Search Placeholder",
        type: "string", // e.g., "Search for products..."
      },
      {
        name: "showCartBadge",
        title: "Show Cart Badge",
        type: "boolean", // To toggle the cart badge visibility
      },
    ],
  };
  
  