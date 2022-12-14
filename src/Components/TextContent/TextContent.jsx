import React from "react";
import "./TextContent.scss";

function TextContent({ projectItem, inView }) {
  const {
    number,
    projectName,
    projectDesc,
    projectType,
    roles,
    siteUrl,
    codeUrl,
  } = projectItem;

  return (
    <div
      className="text-container"
      style={{
        display: `${inView ? "flex" : "none"}`,
      }}
    >
      <div className="project-id">
        <span
          className={`block-text-reveal ${
            inView ? "block-text-reveal_appear" : "block-text-reveal_disappear"
          }`}
        >
          {number}
        </span>
      </div>
      <div className="project-details-container">
        <div className="project-details">
          <div className="project-name">
            <div
              className={`block-text-reveal ${
                inView
                  ? "block-text-reveal_appear"
                  : "block-text-reveal_disappear"
              }`}
            >
              {projectName}
            </div>
          </div>
          <div className="my-role">
            <div
              className={`block-text-reveal ${
                inView
                  ? "block-text-reveal_appear"
                  : "block-text-reveal_disappear"
              }`}
            >
              {roles.map((role) => (
                <span key={role}>{role}</span>
              ))}
            </div>
          </div>
          <div className="project-description">
            <div
              className={`block-text-reveal ${
                inView
                  ? "block-text-reveal_appear"
                  : "block-text-reveal_disappear"
              }`}
            >
              {projectDesc}
            </div>
          </div>

          <div className="project-links">
            <a
              className={`project-link block-text-reveal ${
                inView
                  ? "block-text-reveal_appear"
                  : "block-text-reveal_disappear"
              }`}
              href={siteUrl || ""}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => (siteUrl ? null : e.preventDefault())}
            >
              {siteUrl ? "????????" : "??????????"}
            </a>
            <a
              className={`project-link block-text-reveal ${
                inView
                  ? "block-text-reveal_appear"
                  : "block-text-reveal_disappear"
              }`}
              href={codeUrl}
              target="_blank"
              rel="noreferrer"
            >
              ??????
            </a>
          </div>
        </div>
      </div>
      <div className="project-type">
        <div
          className={`block-text-reveal ${
            inView ? "block-text-reveal_appear" : ""
          }`}
        >
          {projectType}
        </div>
      </div>
    </div>
  );
}

export default TextContent;
