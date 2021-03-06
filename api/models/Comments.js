/**
* Comments.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
    autoCreatedAt: true,
    autoUpdatedAt: true,
    attributes: {
        text: {
            type: 'string',
            required: true,
            notEmpty: true
        },
        announcement: {
            model: 'announcements'
        },
        user: {
            model: 'users'
        }
    }
};

