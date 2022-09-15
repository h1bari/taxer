import './style.scss'
import {List, customButton,CustomUpload,Details} from 'components'
import {createElement} from "helpers/createElement";
import LeftSideApp from "components/LeftSideApp";
import RightSideApp from "components/RightSideApp";
import ASN1 from '@lapo/asn1js';
import Hex from '@lapo/asn1js/hex';

const Home = () => {
    let details = true
    const changeScreen = () => {
        details = !details
    }

    let root = document.getElementById('root')
    createElement('div','wrap','',root)
    let wrap = document.querySelector('.wrap')
    wrap.innerHTML += LeftSideApp()
    wrap.innerHTML += RightSideApp()

    let button = document.querySelector('.change-button')
    let rightWrap = document.querySelector('.right-side')
    rightWrap.innerHTML = CustomUpload()
    button.addEventListener('click', () => {
        changeScreen()
        if(details){
            rightWrap.innerHTML = CustomUpload()
            button.innerHTML = 'Скасувати'
        }else{
            rightWrap.innerHTML = Details()
            button.innerHTML = 'Додати'
        }
    })

    let file = document.querySelector('#file_upload')
    let reader = new FileReader();
    const handleFiles = () => {
        const selectedFiles = file.files[0];
        reader.decodeBinaryString(r.result);
        reader.onload = () => {
            // console.log(reader.result)
            const res = ASN1.decode(reader.result);
            // const result = ASN1.decode(reader.result);
            // if (result.typeName() !== 'SEQUENCE') {
            //     throw 'Неправильна структура конверта сертифіката (очікується SEQUENCE)';
            // }
            const tbsCertificate = res.sub[0];
            console.log(res)
            // console.log(tbsCertificate)
        };
    }
    file.addEventListener("change", handleFiles);



}
export default Home
