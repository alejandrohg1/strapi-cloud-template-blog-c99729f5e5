import type { Schema, Struct } from '@strapi/strapi';

export interface HomeBlogCard extends Struct.ComponentSchema {
  collectionName: 'components_home_blog_cards';
  info: {
    displayName: 'blog-card';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeCultureCard extends Struct.ComponentSchema {
  collectionName: 'components_home_culture_cards';
  info: {
    displayName: 'cultureCard';
  };
  attributes: {
    dropdownItem: Schema.Attribute.Component<'ui.dropdown-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface HomeHowWeDoItCard extends Struct.ComponentSchema {
  collectionName: 'components_home_how_we_do_it_cards';
  info: {
    displayName: 'howWeDoItCard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    headline: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface HomeIndustryCard extends Struct.ComponentSchema {
  collectionName: 'components_home_industry_cards';
  info: {
    displayName: 'industry-card';
    icon: 'book';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    tags: Schema.Attribute.Component<'ui.tag', true>;
    title: Schema.Attribute.String;
  };
}

export interface HomeServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_home_service_cards';
  info: {
    displayName: 'service-card';
    icon: 'dashboard';
  };
  attributes: {
    ButtonLink: Schema.Attribute.Component<'ui.button-link', false>;
    dropdownItem: Schema.Attribute.Component<'ui.dropdown-item', true>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutAboutUs extends Struct.ComponentSchema {
  collectionName: 'components_layout_aboutuses';
  info: {
    displayName: 'aboutUs';
  };
  attributes: {
    cultureCard: Schema.Attribute.Component<'home.culture-card', false>;
    howWeDoItCard: Schema.Attribute.Component<'home.how-we-do-it-card', false>;
    leftColumParagraph: Schema.Attribute.Text;
    missionCard: Schema.Attribute.Component<'ui.image-card', true>;
    rightColumnParagraph: Schema.Attribute.Text;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LayoutHero extends Struct.ComponentSchema {
  collectionName: 'components_layout_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LayoutIndustrySection extends Struct.ComponentSchema {
  collectionName: 'components_layout_industry_sections';
  info: {
    displayName: 'industrySection';
  };
  attributes: {
    industryCard: Schema.Attribute.Component<'home.industry-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutIntroSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_intro_sections';
  info: {
    displayName: 'introSection';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LayoutResourceSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_resource_sections';
  info: {
    displayName: 'resourceSection';
  };
  attributes: {
    buttonLink: Schema.Attribute.Component<'ui.button-link', false>;
    headline: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    leftColumnContent: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    rightColumnContent: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    title: Schema.Attribute.String;
  };
}

export interface LayoutServiceSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_service_sections';
  info: {
    displayName: 'serviceSection';
  };
  attributes: {
    serviceCard: Schema.Attribute.Component<'home.service-card', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface UiButtonLink extends Struct.ComponentSchema {
  collectionName: 'components_ui_button_links';
  info: {
    displayName: 'ButtonLink';
  };
  attributes: {
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface UiDropdownItem extends Struct.ComponentSchema {
  collectionName: 'components_ui_dropdown_items';
  info: {
    displayName: 'dropdown-item';
  };
  attributes: {
    content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    title: Schema.Attribute.String;
  };
}

export interface UiImageCard extends Struct.ComponentSchema {
  collectionName: 'components_ui_image_cards';
  info: {
    displayName: 'image-card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    tagText: Schema.Attribute.String;
  };
}

export interface UiTag extends Struct.ComponentSchema {
  collectionName: 'components_ui_tags';
  info: {
    displayName: 'tag';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'home.blog-card': HomeBlogCard;
      'home.culture-card': HomeCultureCard;
      'home.how-we-do-it-card': HomeHowWeDoItCard;
      'home.industry-card': HomeIndustryCard;
      'home.service-card': HomeServiceCard;
      'layout.about-us': LayoutAboutUs;
      'layout.hero': LayoutHero;
      'layout.industry-section': LayoutIndustrySection;
      'layout.intro-section': LayoutIntroSection;
      'layout.resource-section': LayoutResourceSection;
      'layout.service-section': LayoutServiceSection;
      'ui.button-link': UiButtonLink;
      'ui.dropdown-item': UiDropdownItem;
      'ui.image-card': UiImageCard;
      'ui.tag': UiTag;
    }
  }
}
