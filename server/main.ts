import {Meteor} from 'meteor/meteor';

import './imports/publications/users';
import '../lib/methods/users.methods';

Meteor.startup(() => {
    const admins = ['epezhman@gmail.com',].map(email => Accounts.findUserByEmail(email));
    Roles.addUsersToRoles(admins, 'admin');
});


