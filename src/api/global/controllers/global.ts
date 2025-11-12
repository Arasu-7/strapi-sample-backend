/**
 * global controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::global.global');

/**
 * global controller - with populate
 */

// import { factories } from "@strapi/strapi";

// export default factories.createCoreController(
//   "api::global.global",
//   ({ strapi }) => ({
//     async find(ctx) {
//       const entity = await strapi.db.query("api::global.global").findOne({
//         where: {},
//         populate: {
//           banner: {
//             populate: {
//               link: true,
//             },
//           },
//           header: {
//             populate: {
//               logo: {
//                 populate: {
//                   image: {
//                     fields: ["alternativeText", "url"],
//                   },
//                 },
//               },
//               navItems: true,
//               cta: true,
//             },
//           },
//           footer: {
//             populate: {
//               logo: {
//                 populate: {
//                   image: {
//                     fields: ["alternativeText", "url"],
//                   },
//                 },
//               },
//               navItems: true,
//               socialLinks: {
//                 populate: {
//                   image: {
//                     fields: ["alternativeText", "url"],
//                   },
//                 },
//               },
//             },
//           },
//         },
//       });

//       const sanitized = await this.sanitizeOutput(entity, ctx);
//       return this.transformResponse(sanitized);
//     },
//   })
// );
