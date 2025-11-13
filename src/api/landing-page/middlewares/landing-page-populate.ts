import type { Core } from "@strapi/strapi";
import { link } from "fs";

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
      "blocks.card-grid": {
        populate: {
          cards: true,
        },
      },
      "blocks.content-with-image": {
        populate: {
          link: true,
          image: {
            fields: ["alternativeText", "url"],
          },
        },
      },
      "blocks.markdown": true,
      "blocks.person-card": {
        populate: {
          image: {
            fields: ["alternativeText", "url"],
          },
        },
      },
      "blocks.faq": {
        populate: {
          faq: true,
        },
      },
      "blocks.newsletter": true,
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
