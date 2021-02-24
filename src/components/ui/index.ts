// @index: export { default as ${variable} } from './${variable}';
export { default as Toggle } from './Toggle';
// /index

// @index: import ${variable} from './${variable}';
import Toggle from './Toggle';
// /index

export default {
    // @index:${variable},
    Toggle,
    // /index
};
