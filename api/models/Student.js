/**
 * Student.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    student_id: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },
    first_name: {
      type: 'string',
      minLength: 2,
      maxLength: 30
    },
    last_name: {
      type: 'string',
      minLength: 2,
      maxLength: 30
    },
    gpa: {
      type: 'decimal',
    },
    sat: {
      type: 'integer',
      maxLength: 4
    },
    major_id: {
      type: 'integer',
    },
    start_date: {
      type: 'date'
    },
    toJSON: function() {
      var obj = this.toObject();
      obj.start_date = obj.start_date.slice(0,-14);
      return obj;
    }
  },
  autoPK: false
};
