// @index: import ${variable} from ${relpath};
import accounts from './accounts.controller';
import attachments from './attachments.controller';
import contacts from './contacts.controller';
// /index

export default {
    // @index:${variable},
    accounts,
    attachments,
    contacts,
    // /index
};
