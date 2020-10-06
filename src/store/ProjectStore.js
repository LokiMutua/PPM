import { observable, action, decorate } from "mobx";
import { Auth } from "../helper";

class ProjectStore {
  currentUser;
  updateUser(newUser) {
    this.currentUser = newUser;
  }

  forgetUser() {
    this.currentUser = undefined;
  }

  pullUser() {
    this.loadingUser = true;
    return Auth.current()
      .then(action((response) => {
        this.currentUser = response.data;
      }))
      .catch(error=>{
          console.log(error)
      })
      .finally(action(() => { this.loadingUser = false; }))
  }
}
decorate(UserStore, {
  currentUser: observable,
  loadingUser: observable,
  updateUser: action,
  forgetUser: action,
  pullUser: action
});

export default new ProjectStore();
