import { observable, action, decorate } from "mobx";
// import { Auth } from "../helper";

class ProjectStore {
  loading = false;
  errors = {};
  successMessage = '';

  projectDetails = {
    project_details: {
      project: "",
      sub_project: "",
      implementing_agency: "",
      project_ouput: "",
      project_technology: "",
      project_fit_non: "",
      project_county: "",
      project_constituency: ""
    },
    project_desc: {
      project_location: "",
      project_scope: "",
      project_benefit: "",
      project_finaciers: "",
      project_consultant: "",
      project_contractor: ""
    },
    finances: {
      project_foreign_funding: "",
      project_gok_funding: "",
      project_direct_loan: "",
      project_other_contributor: "",
      project_approved_variation: "",
      project_cumulative_expenditure: "",
      project_allocation: "",
      project_actual_expenditure: "",
      project_balance: ""
    },
    timelines: {
      project_start_date: "",
      project_initial_completion: "",
      project_revised_completion: "",
      project_actual_completion: ""
    }
  };
  handelErrors(error) {
    if (error.response) {
      this.errors = error.response.data.errors;
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      // console.log(error.response.data);
      // console.log(error.response.status);
      // console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      this.errors = { "network": "No response received" }
    } else {
      // Something happened in setting up the request that triggered an Error
      this.errors = { "unknown": error.message };
    }
  }
  // addProject() {
  //   this.loading = true;
  //   this.errors = {};
  //   return Auth.register(
  //     this.userDetails.firstName,
  //     this.userDetails.lastName,
  //     this.userDetails.email,
  //     this.userDetails.password
  //   )
  //     .then(response => {
  //       console.log("User registered");
  //     })
  //     .catch(
  //       (error => {
  //         this.handelErrors(error)
  //         throw error;
  //       }
  //       )
  //     )
  //     .finally(
  //       action(
  //         () => {
  //           this.loading = false;
  //         }
  //       )
  //     );
  // }
}
decorate(ProjectStore, {
  projectDetails: observable,
  loading: observable,
  errors: observable,
  successMessage: observable,
  // addProject: action,
});

export default new ProjectStore();
