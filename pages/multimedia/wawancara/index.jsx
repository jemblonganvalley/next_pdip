import React from 'react'
import BreadCrumbs from '../../../components/breadcrumbs/BreadCrumbs'
import VMedia from '../../../components/VMedia/VMedia'
import MainDivider from '../../../components/divider/MainDivider'
import './Wawancara.scss'
import WawancaraPagination from './pagination/WawancaraPagination'

const Wawancara = ()=> {
    return (
        <div className="wrapperWW">
        <div className="linkedWW">
            <BreadCrumbs link1="Home"
                            to1="/"
                            link2="Multimedia"
                            to2="/multimedia"
                            page3="Wawancara" />
        </div>

        <div className="videoDokumen">
            <VMedia headline="Megawati Soekarnoputri, Ketua Umum PDI Perjuangan" source="https://www.youtube.com/embed/4Y9vU1dCk78" />
        </div>

        <div className="dividerWW">
                <MainDivider text="Wawancara" />
        </div>

        <div className="cardWW">
            <div className="listWW">
                <WawancaraPagination />
            </div>
        </div>
    </div>
    )
}

export default Wawancara