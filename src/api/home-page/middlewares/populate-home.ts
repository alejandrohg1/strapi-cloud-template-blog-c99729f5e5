/**
 * `populate-home` middleware
 */


const populate= {
   hero:{
    populate:"*"
  },
  
  introSection:{
    populate:"*"
  },
  
  serviceSection:{
    populate:{
      serviceCard:{
        populate:{
          image:{
            fields:["alternativeText","name","url"]
          },
          ButtonLink:{
            populate:"*"
          },
          dropdownItem:{
            populate:"*"
          }
        }
      }
    }
  },
  
  industrySection:{
    populate:{
      industryCard:{
        populate:{
          image:{
            fields:["name","alternativeText","url"]
          },
          tags:{
            populate:"*"
          }
        }
      }
    }
  },
  
  aboutUs:{
    
    populate:{
    
    
      howWeDoItCard:{
        populate:{
          image:{
            fields:["url","alternativeText","name"]
          }
        }
      },
      
      cultureCard:{
        populate:{
          dropdownItem:{
            populate:"*"
          }
        }
      },
      
      missionCard:{
        populate:{
          image:{
            fields:["url","alternativeText","name"]
          }
        }
      }
      
    }
    
  },
  
  
  resourceSection:{
    
    populate:{
      image:{
        fields:["url","name","alternativeText"]
      },
      buttonLink:{
        populate:"*"
      }
    
    }
    
    
  },
  
  blogCards:{
  
  populate:{
    
    image:{
      fields:["url","alternativeText","name"]
    }
    
  }
  
  
  }
  
}

import type { Core } from '@strapi/strapi';

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In populate-home middleware.');
    ctx.query = { populate: populate, ...ctx.query };
    await next();
  };
};
