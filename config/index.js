module.exports = {
  username: process.env.TEXTNOW_USERNAME || "",
  password: process.env.TEXTNOW_PASSWORD || "",
  recipient: process.env.TEXTNOW_RECIPIENT || "(726) 666-0002",
  message: process.env.TEXTNOW_MESSAGE || "autosend message",
  cookies_str: process.env.TEXTNOW_COOKIES || ""
};