// @index: export { default as ${variable} } from './${variable}';
export { default as NavBar } from './NavBar';
export { default as UiToggle } from './UiToggle';
// /index

// @index: import ${variable} from './${variable}';
import NavBar from './NavBar';
import UiToggle from './UiToggle';
// /index

export default {
    // @index:${variable},
    NavBar,
    UiToggle,
    // /index
};
