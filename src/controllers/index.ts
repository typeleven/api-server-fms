// @index: export { default as ${variable} } from './${variable}';
export { default as accounts } from './accounts';
export { default as attachments } from './attachments';
export { default as contacts } from './contacts';
// /index

// @index: import ${variable} from './${variable}';
import accounts from './accounts';
import attachments from './attachments';
import contacts from './contacts';
// /index

export default {
    // @index:${variable},
    accounts,
    attachments,
    contacts,
    // /index
};
