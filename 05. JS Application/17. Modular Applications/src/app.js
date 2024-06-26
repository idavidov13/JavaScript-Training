import { page } from "./lib.js";
import { showCatalog } from "./views/catalog.js";
import { notify } from "./notification.js";
import { showCreate } from "./views/create.js";
import "./data/users.js";
import * as userApi from "./data/users.js";

page("/", showCatalog);
page("/create", showCreate);

page.start();

window.notify = notify;
window.userApi = userApi;

// Fancy form validation + loading indicator
// Notifications
// Error handling on multiple levels
// Modals
