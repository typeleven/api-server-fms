// @index: export { default as ${variable} } from './${variable}.model';
export { default as accounts } from './accounts.model';
export { default as attachments } from './attachments.model';
export { default as contacts } from './contacts.model';
// /index

// @index: import ${variable} from './${variable}.model';
import accounts from './accounts.model';
import attachments from './attachments.model';
import contacts from './contacts.model';
// /index

export default {
    // @index:${variable},
    accounts,
    attachments,
    contacts,
    // /index
};
