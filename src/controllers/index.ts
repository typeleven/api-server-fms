// @index: export { default as ${variable} } from './${variable}.controller';
export { default as accounts } from './accounts.controller';
export { default as attachments } from './attachments.controller';
export { default as contacts } from './contacts.controller';
// /index

// @index: import ${variable} from './${variable}.controller';
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
