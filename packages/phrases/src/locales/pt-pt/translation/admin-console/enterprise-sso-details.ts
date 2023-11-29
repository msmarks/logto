const enterprise_sso_details = {
  /** UNTRANSLATED */
  back_to_sso_connectors: 'Back to enterprise SSO',
  /** UNTRANSLATED */
  page_title: 'Enterprise SSO connector details',
  /** UNTRANSLATED */
  readme_drawer_title: 'Enterprise SSO',
  /** UNTRANSLATED */
  readme_drawer_subtitle: 'Set up enterprise SSO connectors to enable end users SSO',
  /** UNTRANSLATED */
  tab_experience: 'Experience',
  /** UNTRANSLATED */
  tab_connection: 'Connection',
  /** UNTRANSLATED */
  general_settings_title: 'General',
  /** UNTRANSLATED */
  custom_branding_title: 'Display',
  /** UNTRANSLATED */
  custom_branding_description:
    'Customize the selection button for user accounts with multiple enterprise identity providers. When empty, defaults are used.',
  /** UNTRANSLATED */
  email_domain_field_name: 'Enterprise email domain',
  /** UNTRANSLATED */
  email_domain_field_description:
    'Users with this email domain can use SSO for authentication. Please verify the domain belongs to the enterprise.',
  /** UNTRANSLATED */
  email_domain_field_placeholder: 'Email domain',
  /** UNTRANSLATED */
  sync_profile_field_name: 'Sync profile information from the identity provider',
  sync_profile_option: {
    /** UNTRANSLATED */
    register_only: 'Only sync at first sign-in',
    /** UNTRANSLATED */
    each_sign_in: 'Always sync at each sign-in',
  },
  /** UNTRANSLATED */
  connector_name_field_name: 'Connector name',
  /** UNTRANSLATED */
  display_name_field_name: 'Display name',
  /** UNTRANSLATED */
  connector_logo_field_name: 'Display logo',
  /** UNTRANSLATED */
  connector_logo_field_description: 'Each image should under 500KB, SVG, PNG, JPG, JPEG only.',
  /** UNTRANSLATED */
  branding_logo_context: 'Upload logo',
  /** UNTRANSLATED */
  branding_logo_error: 'Upload logo error: {{error}}',
  /** UNTRANSLATED */
  branding_logo_field_name: 'Logo',
  /** UNTRANSLATED */
  branding_logo_field_placeholder: 'https://your.domain/logo.png',
  /** UNTRANSLATED */
  branding_dark_logo_context: 'Upload dark mode logo',
  /** UNTRANSLATED */
  branding_dark_logo_error: 'Upload dark mode logo error: {{error}}',
  /** UNTRANSLATED */
  branding_dark_logo_field_name: 'Logo (dark mode)',
  /** UNTRANSLATED */
  branding_dark_logo_field_placeholder: 'https://your.domain/dark-mode-logo.png',
  /** UNTRANSLATED */
  check_connection_guide: 'Connection guide',
  /** UNTRANSLATED */
  enterprise_sso_deleted: 'Enterprise SSO connector has been successfully deleted',
  /** UNTRANSLATED */
  delete_confirm_modal_title: 'Delete enterprise SSO connector',
  /** UNTRANSLATED */
  delete_confirm_modal_content:
    'Are you sure you want to delete this enterprise connector? Users from identity providers will not utilize Single Sign-On.',
  /** UNTRANSLATED */
  upload_idp_metadata_title_saml: 'Upload the metadata',
  /** UNTRANSLATED */
  upload_idp_metadata_description_saml: 'Configure the metadata copied from the identity provider.',
  /** UNTRANSLATED */
  upload_idp_metadata_title_oidc: 'Upload the credentials',
  /** UNTRANSLATED */
  upload_idp_metadata_description_oidc:
    'Configure the credentials and OIDC token information copied from the identity provider.',
  /** UNTRANSLATED */
  upload_idp_metadata_button_text: 'Upload metadata XML file',
  /** UNTRANSLATED */
  configure_domain_field_info_text:
    'Add email domain to guide enterprise users to their identity provider for Single Sign-on.',
  /** UNTRANSLATED */
  email_domain_field_required: 'Email domain is required to enable enterprise SSO.',
  /** UNTRANSLATED */
  upload_saml_idp_metadata_info_text_url:
    'Paste the metadata URL from the identity provider to connect.',
  /** UNTRANSLATED */
  upload_saml_idp_metadata_info_text_xml:
    'Paste the metadata from the identity provider to connect.',
  /** UNTRANSLATED */
  upload_saml_idp_metadata_info_text_manual:
    'Fill in the metadata from the identity provider to connect.',
  /** UNTRANSLATED */
  upload_oidc_idp_info_text: 'Fill in the information from the identity provider to connect.',
  /** UNTRANSLATED */
  service_provider_property_title: 'Configure in the IdP',
  /** UNTRANSLATED */
  service_provider_property_description:
    'Create a new application integration by {{protocol}} in the identity provider and then paste the generated value there.',
  /** UNTRANSLATED */
  attribute_mapping_title: 'Attribute mappings',
  /** UNTRANSLATED */
  attribute_mapping_description:
    "To sync the user profile from the identity provider, the user's 'id' and 'email' are necessary. Alternatively, you can specify the claim name and value mapping within the identity provider.",
  saml_preview: {
    /** UNTRANSLATED */
    sign_on_url: 'Sign on URL',
    /** UNTRANSLATED */
    entity_id: 'Issuer',
    /** UNTRANSLATED */
    x509_certificate: 'Signing certificate',
  },
  oidc_preview: {
    /** UNTRANSLATED */
    authorization_endpoint: 'Authorization endpoint',
    /** UNTRANSLATED */
    token_endpoint: 'Token endpoint',
    /** UNTRANSLATED */
    userinfo_endpoint: 'User information endpoint',
    /** UNTRANSLATED */
    jwks_uri: 'JSON web key set endpoint',
    /** UNTRANSLATED */
    issuer: 'Issuer',
  },
};

export default Object.freeze(enterprise_sso_details);