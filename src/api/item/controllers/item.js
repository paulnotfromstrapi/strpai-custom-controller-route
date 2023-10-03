"use strict";

/**
 * item controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::item.item", ({ strapi }) => ({
  async customQuery(ctx) {
    const entry = await strapi.db.query('api::item.item').findOne();
    return entry;
    
  },
}));
