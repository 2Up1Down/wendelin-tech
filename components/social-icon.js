import React from 'react';

import { FaLinkedin, FaGithubSquare, FaInstagramSquare } from 'react-icons/fa';

const SocialIcon = ({ channel, url }) => {
  if (!url) return <></>;

  const icon = getIconByChannel(channel);

  return <span className="text-4xl">{icon}</span>;
};

const getIconByChannel = (channel) => {
  let icon = {};
  switch (channel) {
    case 'linkedin':
      icon = <FaLinkedin />;
      break;

    case 'github':
      icon = <FaGithubSquare />;
      break;

    case 'instagram':
      icon = <FaInstagramSquare />;
      break;

    default:
  }

  return icon;
};

export default SocialIcon;
