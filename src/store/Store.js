import authStore from "../Auth/authStore";
import userStore from "../User/userStore";

const appStore = {
    authStore,
    userStore
};
window._____APP_STATE_____ = appStore;

export default appStore;
