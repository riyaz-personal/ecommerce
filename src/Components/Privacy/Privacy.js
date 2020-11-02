import React, { Component } from "react";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// import 'bootstrap/dist/css/bootstrap.min.css';

import "./Privacy.css";

export class Privacy extends Component {
  render() {
    return (
      <>
        <Header />
        <Banner title={"Privacy Policy"} />
        <section style={{paddingTop:"20px"}} className="bg-section-secondary slice">
          <div className="container">
            <div className="row">
              <div className="col-4">
                <div className="card hover-shadow-lg" style={{marginBottom: "5px"}}>
                  <div className="card-body py-2">
                    <a href="#one">Log Data</a>
                  </div>
                </div>
                <div className="card hover-shadow-lg" style={{marginBottom: "5px"}}>
                  <div className="card-body py-2">
                    <a href="#two">Cookies</a>
                  </div>
                </div>
                <div className="card hover-shadow-lg" style={{marginBottom: "5px"}}>
                  <div className="card-body py-2">
                    <a href="#three">Service Providers</a>
                  </div>
                </div>
                <div className="card hover-shadow-lg" style={{marginBottom: "5px"}}>
                  <div className="card-body py-2">
                    <a href="#three2">Security</a>
                  </div>
                </div>
                <div className="card hover-shadow-lg" style={{marginBottom: "5px"}}>
                  <div className="card-body py-2">
                    <a href="#four">Links to Other Sites</a>
                  </div>
                </div>
                <div className="card hover-shadow-lg" style={{marginBottom: "5px"}}>
                  <div className="card-body py-2">
                    <a href="#five">Children’s Privacy</a>
                  </div>
                </div>
                <div className="card hover-shadow-lg" style={{marginBottom: "5px"}}>
                  <div className="card-body py-2">
                    <a href="#six">Changes to This Privacy Policy</a>
                  </div>
                </div>
                <div className="card hover-shadow-lg" style={{marginBottom: "5px"}}>
                  <div className="card-body py-2">
                    <a href="#seven">Contact Us</a>
                  </div>
                </div>
              </div>
              <div className="col-8">
                <div className="card hover-shadow-lg" style={{marginBottom: "5px"}}>
                  <div className="card-body py-4">
                    <p>
                      Bluebury Apps built the bluebury app as a Free app. This
                      SERVICE is provided by Bluebury Apps at no cost and is
                      intended for use as is.
                    </p>

                    <p>
                      This page is used to inform visitors regarding our
                      policies with the collection, use, and disclosure of
                      Personal Information if anyone decided to use our Service.{" "}
                    </p>

                    <p>
                      If you choose to use our Service, then you agree to the
                      collection and use of information in relation to this
                      policy. The Personal Information that we collect is used
                      for providing and improving the Service. We will not use
                      or share your information with anyone except as described
                      in this Privacy Policy.
                    </p>

                    <p>
                      The terms used in this Privacy Policy have the same
                      meanings as in our Terms and Conditions, which is
                      accessible at thebluebury.com unless otherwise defined in
                      this Privacy Policy.{" "}
                    </p>

                    <p></p>
                    <div className="strong">Information Collection and Use</div>
                    <p></p>

                    <p>
                      For a better experience, while using our Service, we may
                      require you to provide us with certain personally
                      identifiable information, including but not limited to
                      firstname, surname, telephone, geolocation, address. The
                      information that we request will be retained by us and
                      used as described in this privacy policy.{" "}
                    </p>

                    <p>
                      {" "}
                      The app does use third party services that may collect
                      information used to identify you.{" "}
                    </p>

                    <div>
                      <p>
                        {" "}
                        Link to privacy policy of third party service providers
                        used by the app{" "}
                      </p>
                      <a
                        href="https://www.google.com/policies/privacy/"                        
                      >
                        Google Play Services
                      </a>
                    </div>

                    <p></p>
                    <div className="strong" id="one">
                      Log Data
                    </div>
                    <p></p>

                    <p>
                      {" "}
                      We want to inform you that whenever you use our Service,
                      in a case of an error in the app we collect data and
                      information (through third party products) on your phone
                      called Log Data. This Log Data may include information
                      such as your device Internet Protocol (“IP”) address,
                      device name, operating system version, the configuration
                      of the app when utilizing our Service, the time and date
                      of your use of the Service, and other statistics.
                    </p>

                    <p></p>
                    <div className="strong" id="two">
                      Cookies
                    </div>
                    <p></p>

                    <p>
                      Cookies are files with a small amount of data that are
                      commonly used as anonymous unique identifiers. These are
                      sent to your browser from the websites that you visit and
                      are stored on your device's internal memory.
                    </p>

                    <p>
                      {" "}
                      This Service does not use these “cookies” explicitly.
                      However, the app may use third party code and libraries
                      that use “cookies” to collect information and improve
                      their services. You have the option to either accept or
                      refuse these cookies and know when a cookie is being sent
                      to your device. If you choose to refuse our cookies, you
                      may not be able to use some portions of this Service.{" "}
                    </p>

                    <p></p>
                    <div className="strong" id="three">
                      Service Providers
                    </div>
                    <p></p>

                    <p>
                      {" "}
                      We may employ third-party companies and individuals due to
                      the following reasons:
                    </p>

                    <ul>
                      <li>To facilitate our Service;</li>
                      <li>To provide the Service on our behalf;</li>
                      <li>To perform Service-related services; or</li>
                      <li>
                        To assist us in analyzing how our Service is used.
                      </li>
                    </ul>

                    <p>
                      {" "}
                      We want to inform users of this Service that these third
                      parties have access to your Personal Information. The
                      reason is to perform the tasks assigned to them on our
                      behalf. However, they are obligated not to disclose or use
                      the information for any other purpose.
                    </p>

                    <p></p>
                    <div className="strong" id="three2">
                      Security
                    </div>
                    <p></p>

                    <p>
                      {" "}
                      We value your trust in providing us your Personal
                      Information, thus we are striving to use commercially
                      acceptable means of protecting it. But remember that no
                      method of transmission over the internet, or method of
                      electronic storage is 100% secure and reliable, and we
                      cannot guarantee its absolute security.{" "}
                    </p>

                    <p></p>
                    <div className="strong" id="four">
                      Links to Other Sites
                    </div>
                    <p></p>

                    <p>
                      {" "}
                      This Service may contain links to other sites. If you
                      click on a third-party link, you will be directed to that
                      site. Note that these external sites are not operated by
                      us. Therefore, we strongly advise you to review the
                      Privacy Policy of these websites. We have no control over
                      and assume no responsibility for the content, privacy
                      policies, or practices of any third-party sites or
                      services.
                    </p>

                    <p></p>
                    <div className="strong" id="five">
                      Children’s Privacy
                    </div>
                    <p></p>

                    <p>
                      {" "}
                      These Services do not address anyone under the age of 13.
                      We do not knowingly collect personally identifiable
                      information from children under 13. In the case we
                      discover that a child under 13 has provided us with
                      personal information, we immediately delete this from our
                      servers. If you are a parent or guardian and you are aware
                      that your child has provided us with personal information,
                      please contact us so that we will be able to do necessary
                      actions.{" "}
                    </p>

                    <p></p>
                    <div className="strong" id="six">
                      Changes to This Privacy Policy
                    </div>
                    <p></p>

                    <p>
                      {" "}
                      We may update our Privacy Policy from time to time. Thus,
                      you are advised to review this page periodically for any
                      changes. We will notify you of any changes by posting the
                      new Privacy Policy on this page. These changes are
                      effective immediately after they are posted on this page.{" "}
                    </p>

                    <p></p>
                    <div className="strong" id="seven">
                      Contact Us
                    </div>
                    <p></p>

                    <p>
                      {" "}
                      If you have any questions or suggestions about our Privacy
                      Policy, do not hesitate to contact us at
                      <a href="mailto:dev.kaushik@gmail.com">
                        dev.kaushik@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default Privacy;
