const ENV = {
  basePath:
    process.env.NODE_ENV === "production" ? "" : process.env.REACT_APP_DEV_URL,
};
const Types = {
  uploadImageFormats: [
    "image/jpg",
    "image/jpeg",
    "image/png",
    "image/bmp",
    "image/heic",
    "application/pdf",
  ],
};

export { ENV, Types };