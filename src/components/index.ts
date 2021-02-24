// @index: export { default as ${variable} } from './${variable}';
export { default as NavBar } from './NavBar';
export { default as ui } from './ui';
// /index

// @index: import ${variable} from './${variable}';
import NavBar from './NavBar';
import ui from './ui';
// /index

export default {
    // @index:${variable},
    NavBar,
    ui,
    // /index
};
