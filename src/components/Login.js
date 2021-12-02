import React from "react";
import { Form, Button } from "react-bootstrap";
import Colors from "../utils/Colors";
import logo from "../assets/halosun.png";

export default function Login() {
  function NewMeetupForm() {}

  function submitHandler(event) {
    event.preventDefault();
  }

  return (
    <>
      <div className="header-background"></div>
      <div className="content">
        <div className="box">
          <h3 className="top-font">Sign In</h3>
          <form>
            <div className="center-container">
            <div className="login-form form-group">
              <label>Email / Mobile Number</label>
              <input type="text" class="form-control"/>
            </div>
            <div className="login-form form-group">
                      <div className="row mt-4">
                        <div className="col-md-12">
                          <label>Password</label>
                          <i
                            className={ "fas fa-eye"}
                          ></i>
                          <input
                            type={'password'}
                            placeholder="•••••••••••••••••"
                            class="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="forgot-pass form-group">
                      <div className="checkbox-fade">
                        <label>
                      <input type="checkbox" id="checkbox" name="remember"/>
                      <span class="cr"><i class="cr-icon fa fa-check"></i></span>
                      <span class="text-inverse">Remember me</span>
                        </label>
                        </div>
                        <div className="forgot-phone text-right float-right">
                        <p
                          className="cursor-pointer">
                          Forgot password?
                      </p>
                          </div>
                      
                      <button class="btn btn-search m-t-20">
                        Log In
                      </button>
                    </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
