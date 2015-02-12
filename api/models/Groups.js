/**
* Groups.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
    autoCreatedAt: true,
    autoUpdatedAt: true,
    attributes: {
        name: {
            type: 'string',
            required: true,
            notEmpty: true
        },
        owner: {
            model: 'users'
        },
        members: {
            collection: 'users',
            via: 'groups',
            dominant: true
        },
        announcements: {
            collection: 'announcements',
            via: 'group'
        }
    }
};

