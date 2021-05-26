import React from "react";
import IMG from "../Image/badge-header.svg";
import "../Pages/styles/BadgeNew.css";
import BadgeForm from "../Components/BadgeForm";
import Badge from "../Components/Badge";
class BadgeNew extends React.Component {
    state = {
        form: {
          firstName: '',
          lastName: '',
          email: '',
          jobTitle: '',
          twitter: '',
        },
      };
      handleChange = e => {
        this.setState({
          form: {
            ...this.state.form,
            [e.target.name]: e.target.value,
          },
        });
      };
  render() {
    return (
      <div>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={IMG} />
        </div>
      
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
               firstName={this.state.form.firstName}
               lastName={this.state.form.lastName}
               twitter={this.state.form.twitter}
               jobTitle={this.state.form.jobTitle}
               email={this.state.form.email}
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BadgeNew;
