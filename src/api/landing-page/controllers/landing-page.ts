/**
 * landing-page controller
 */

import { factories } from "@strapi/strapi";


export default factories.createCoreController(
  "api::landing-page.landing-page",
//   ({ strapi }) => ({
//     async find(ctx) {
//       const entity = await strapi.db.query("api::landing-page.landing-page").findOne({
//         where: {},
//         populate: {
//           blocks: {
//             on:{
//                 "blocks.hero":{
//                     populate: {
//                       image: {
//                         fields: ["alternativeText", "url"],
//                       },
//                       links: true
//                     },
//                 }
//             }
//           },
//         },
//       });

//       const sanitized = await this.sanitizeOutput(entity, ctx);
//       return this.transformResponse(sanitized);
//     },
//   })
);
