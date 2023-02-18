import React from "react";
import "./style.css";
import {
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
} from "react-icons/fa";
import { SocialProfiles } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {SocialProfiles.twitter && (
          <li>
            <a href={SocialProfiles.twitter}>
              <FaTwitter />
            </a>
          </li>
        )}
        {SocialProfiles.github && (
          <li>
            <a href={SocialProfiles.github}>
              <FaGithub />
            </a>
          </li>
        )}
        {SocialProfiles.facebook && (
          <li>
            <a href={SocialProfiles.facebook}>
              <FaFacebookF />
            </a>
          </li>
        )}
        {SocialProfiles.linkedin && (
          <li>
            <a href={SocialProfiles.linkedin}>
              <FaLinkedin />
            </a>
          </li>
        )}
        {SocialProfiles.youtube && (
          <li>
            <a href={SocialProfiles.youtube}>
              <FaYoutube />
            </a>
          </li>
        )}
        {SocialProfiles.twitch && (
          <li>
            <a href={SocialProfiles.twitch}>
              <FaTwitch />
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
