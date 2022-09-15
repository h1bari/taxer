import './style.scss'
import {createElement} from "helpers/createElement";
/** Add details **/
const CustomUpload = () => {
    let node = `
        <h1 class="title">Upload</h1>
        <div class="upload-container">
            <input type="file" id="file_upload" accept="cer/*" title=" "/>
        </div>
    `
    return node
    
}

export default CustomUpload
