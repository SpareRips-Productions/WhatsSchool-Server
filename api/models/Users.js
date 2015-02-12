/**
* Users.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
    autoCreatedAt: true,
    autoUpdatedAt: true,
    attributes: {
        email: {
            type: 'string',
            unique: true,
            required: true,
            notEmpty: true,
            email: true
        },
        firstName: {
            type: 'string',
            required: true,
            notEmpty: true
        },
        lastName: {
            type: 'string',
            required: true,
            notEmpty: true
        },
        role: {
            type: 'string',
            enum: ['student', 'teacher', 'admin']
        },
        ownedGroups: {
            collection: 'groups',
            via: 'owner'
        },
        groups: {
          collection: 'groups',
          via: 'members'
        }
    }
};

