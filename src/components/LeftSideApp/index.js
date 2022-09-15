import './style.scss'
import {createElement} from "helpers/createElement";
import List from "components/List";
import customButton from "components/CustomButton";

/** Add left side app **/
const leftSide = () => {
    let node = `
    <div class="left-side">
        ${List()}
        ${customButton().outerHTML}
     </div>
 `
    return node

}

export default leftSide
