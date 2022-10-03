import React from "react";

const PricingInfoCard = ({ pricingInfo }) => {
  const {
    type,
    price,
    noOfUsers,
    storage,
    publicProjects,
    accessType,
    privateProjects,
    checkPrivateProjects,
    support,
    checkSupport,
    subdomain,
    checkSubdomain,
    reports,
    checkReports,
  } = pricingInfo;

  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            {type}
          </h5>
          <h6 className="card-price text-center">
            ${price}
            <span className="period">/month</span>
          </h6>
          <hr />
          <ul className="fa-ul">
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {noOfUsers}
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {storage} Storage
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {publicProjects} Public Projects
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {accessType}
            </li>
            <li className={!checkPrivateProjects && "text-muted"}>
              <span className="fa-li">
                {checkPrivateProjects ? (
                  <i className="fas fa-check"></i>
                ) : (
                  <i className="fas fa-times"></i>
                )}
              </span>
              {privateProjects} Private Projects
            </li>
            <li className={!checkSupport && "text-muted"}>
              <span className="fa-li">
                {checkSupport ? (
                  <i className="fas fa-check"></i>
                ) : (
                  <i className="fas fa-times"></i>
                )}
              </span>
              {support}
            </li>
            <li className={!checkSubdomain && "text-muted"}>
              <span className="fa-li">
                {checkSubdomain ? (
                  <i className="fas fa-check"></i>
                ) : (
                  <i className="fas fa-times"></i>
                )}
              </span>
              {subdomain === "Unlimited" ? (
                <span>
                  <strong>{subdomain} </strong>
                  Free Subdomains
                </span>
              ) : (
                `${subdomain} Subdomain`
              )}
            </li>
            <li className={!checkReports && "text-muted"}>
              <span className="fa-li">
                {checkReports ? (
                  <i className="fas fa-check"></i>
                ) : (
                  <i className="fas fa-times"></i>
                )}
              </span>
              {reports}
            </li>
          </ul>
          <div className="d-grid">
            <a href="#!" className="btn btn-primary text-uppercase">
              Select
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingInfoCard;
