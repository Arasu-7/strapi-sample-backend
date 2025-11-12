import type { Core } from "@strapi/strapi";

const populate = {
  blocks: {
    on: {
      "blocks.hero": {
        populate: {
          image: {
            fields: ["alternativeText", "url"],
          },
          links: true,
        },
      },
      "blocks.section-heading": true,
    },
  },
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query.populate = populate;
    strapi.log.info("In landing-page-populate middleware.");

    await next();
  };
};
