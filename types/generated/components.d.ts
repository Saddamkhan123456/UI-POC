import type { Schema, Attribute } from '@strapi/strapi';

export interface GoDocsAchPaymentAuthorization extends Schema.Component {
  collectionName: 'components_go_docs_ach_payment_authorizations';
  info: {
    displayName: 'ACHPaymentAuthorization';
    icon: 'apps';
    description: '';
  };
  attributes: {
    state: Attribute.Component<'go-docs.state', true>;
    isVisible: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    information: Attribute.RichText & Attribute.Required;
  };
}

export interface GoDocsCashCollateralSecurityAgreement
  extends Schema.Component {
  collectionName: 'components_go_docs_cash_collateral_security_agreements';
  info: {
    displayName: 'CashCollateralSecurityAgreement';
    icon: 'apps';
    description: '';
  };
  attributes: {
    state: Attribute.Component<'go-docs.state', true>;
    isVisible: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    information: Attribute.RichText;
  };
}

export interface GoDocsConstructionLoanAgreementSubSection
  extends Schema.Component {
  collectionName: 'components_go_docs_construction_loan_agreement_sub_sections';
  info: {
    displayName: 'ConstructionLoanAgreementSubSection';
    icon: 'apps';
    description: '';
  };
  attributes: {
    isVisible: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    State: Attribute.Component<'go-docs.state', true>;
    information: Attribute.RichText & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface GoDocsConstructionLoanAgreement extends Schema.Component {
  collectionName: 'components_go_docs_construction_loan_agreements';
  info: {
    displayName: 'ConstructionLoanAgreement';
    icon: 'apps';
    description: '';
  };
  attributes: {
    State: Attribute.Component<'go-docs.state', true>;
    isVisible: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    information: Attribute.RichText;
    title: Attribute.String & Attribute.Required;
  };
}

export interface GoDocsConstructionLoanPromissoryNote extends Schema.Component {
  collectionName: 'components_go_docs_construction_loan_promissory_notes';
  info: {
    displayName: 'ConstructionLoanPromissoryNote';
    icon: 'apps';
    description: '';
  };
  attributes: {
    State: Attribute.Component<'go-docs.state', true>;
    isVisible: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    information: Attribute.RichText;
    title: Attribute.String & Attribute.Required;
  };
}

export interface GoDocsConstructionMortgage extends Schema.Component {
  collectionName: 'components_go_docs_construction_mortgages';
  info: {
    displayName: 'ConstructionMortgage';
    icon: 'apps';
    description: '';
  };
  attributes: {
    State: Attribute.Component<'go-docs.state', true>;
    isVisible: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    information: Attribute.RichText;
    title: Attribute.String & Attribute.Required;
  };
}

export interface GoDocsCorporateBorrowingResolution extends Schema.Component {
  collectionName: 'components_go_docs_corporate_borrowing_resolutions';
  info: {
    displayName: 'CorporateBorrowingResolution';
    icon: 'apps';
    description: '';
  };
  attributes: {
    state: Attribute.Component<'go-docs.state', true>;
    isVisible: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    information: Attribute.RichText;
  };
}

export interface GoDocsEnvironmentalIndemnityAgreement
  extends Schema.Component {
  collectionName: 'components_go_docs_environmental_indemnity_agreements';
  info: {
    displayName: 'EnvironmentalIndemnityAgreement';
    icon: 'apps';
    description: '';
  };
  attributes: {
    State: Attribute.Component<'go-docs.state', true>;
    isVisible: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    information: Attribute.RichText;
  };
}

export interface GoDocsInformation extends Schema.Component {
  collectionName: 'components_go_docs_information';
  info: {
    displayName: 'Information';
    icon: 'apps';
    description: '';
  };
  attributes: {
    information: Attribute.RichText;
  };
}

export interface GoDocsLimitedPowerAttorney extends Schema.Component {
  collectionName: 'components_go_docs_limited_power_attorneys';
  info: {
    displayName: 'LimitedPowerAttorney';
    icon: 'apps';
    description: '';
  };
  attributes: {
    state: Attribute.Component<'go-docs.state', true>;
    isVisible: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    information: Attribute.RichText;
  };
}

export interface GoDocsState extends Schema.Component {
  collectionName: 'components_go_docs_states';
  info: {
    displayName: 'State';
    icon: 'apps';
    description: '';
  };
  attributes: {
    state: Attribute.Enumeration<
      ['All', 'California', 'Utah', 'Washington', 'Not Applicable']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'All'>;
  };
}

export interface GoDocsUcc1 extends Schema.Component {
  collectionName: 'components_go_docs_ucc_1s';
  info: {
    displayName: 'UCC1';
    icon: 'apps';
    description: '';
  };
  attributes: {
    state: Attribute.Component<'go-docs.state', true>;
    isVisible: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    information: Attribute.RichText;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'go-docs.ach-payment-authorization': GoDocsAchPaymentAuthorization;
      'go-docs.cash-collateral-security-agreement': GoDocsCashCollateralSecurityAgreement;
      'go-docs.construction-loan-agreement-sub-section': GoDocsConstructionLoanAgreementSubSection;
      'go-docs.construction-loan-agreement': GoDocsConstructionLoanAgreement;
      'go-docs.construction-loan-promissory-note': GoDocsConstructionLoanPromissoryNote;
      'go-docs.construction-mortgage': GoDocsConstructionMortgage;
      'go-docs.corporate-borrowing-resolution': GoDocsCorporateBorrowingResolution;
      'go-docs.environmental-indemnity-agreement': GoDocsEnvironmentalIndemnityAgreement;
      'go-docs.information': GoDocsInformation;
      'go-docs.limited-power-attorney': GoDocsLimitedPowerAttorney;
      'go-docs.state': GoDocsState;
      'go-docs.ucc-1': GoDocsUcc1;
    }
  }
}
