export default {
    name: "product",
    title: "Product",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "image",
        title: "Image",
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true, // Allow the image to be cropped in the studio
        },
      },
      {
        name: "price",
        title: "Price",
        type: 'array',
        of: [{ type: 'number' }],
      },
      // Add other fields like description, etc.
    ],
  };
  