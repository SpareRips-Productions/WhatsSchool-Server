/**
* Announcements.js
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
        logo: {
            type: 'string',
            enum: ['ion-calendar', 'ion-clock', 'ion-coffee']
        },
        group: {
            model: 'groups'
        },
        comments: {
            collection: 'comments',
            via: 'announcement'
        }
    }
};

