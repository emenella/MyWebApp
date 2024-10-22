import type { Schema, Attribute } from '@strapi/strapi';

export interface UtilsPicture extends Schema.Component {
  collectionName: 'components_utils_pictures';
  info: {
    displayName: 'Picture';
  };
  attributes: {
    Title: Attribute.String;
    Image: Attribute.Media<'images'> & Attribute.Required;
    Alt: Attribute.Text & Attribute.Required;
  };
}

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

export interface PortfolioProjets extends Schema.Component {
  collectionName: 'components_portfolio_projets';
  info: {
    displayName: 'Projets';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'utils.picture': UtilsPicture;
      'utils.icon': UtilsIcon;
      'portfolio.tool': PortfolioTool;
      'portfolio.projets': PortfolioProjets;
    }
  }
}
