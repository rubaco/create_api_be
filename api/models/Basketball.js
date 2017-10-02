/**
 * Student.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  
    attributes: {
      basketball_id: {
        type: 'integer',
        primaryKey: true,
        autoIncrement: true
      },
      team_name: {
        type: 'string',
        minLength: 2,
        maxLength: 30,
        notNull: true
      },
      city: {
        type: 'string',
        minLength: 2,
        maxLength: 30
      },
      offensive_average: {
        type: 'integer',
        maxLength: 4
      },
    
      logo: {
        type: 'string',
        minLength: 2,
        maxLength: 30,
      },
      mascot: {
        type: 'string',
        minLength: 2,
        maxLength: 30,
      },
    },

  

    autoPK: false
  };
  