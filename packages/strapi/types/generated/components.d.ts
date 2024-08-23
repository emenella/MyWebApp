import type { Schema, Attribute } from '@strapi/strapi';

export interface UtilsIcon extends Schema.Component {
  collectionName: 'components_utils_icons';
  info: {
    displayName: 'Icon';
    icon: 'apps';
    description: '';
  };
  attributes: {
    Name: Attribute.String;
    Alt: Attribute.Text;
    Invert: Attribute.Boolean;
    Media: Attribute.Media<'images'>;
  };
}

export interface PortfolioTool extends Schema.Component {
  collectionName: 'components_portfolio_tools';
  info: {
    displayName: 'Tool';
    icon: 'scissors';
  };
  attributes: {
    Name: Attribute.String;
    Description: Attribute.Text;
    Icon: Attribute.Component<'utils.icon'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'utils.icon': UtilsIcon;
      'portfolio.tool': PortfolioTool;
    }
  }
}
