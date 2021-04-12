import React, { useState } from 'react';
import { Blocks } from "../../../shared/type";
import Footer from '../../footer/Footer';
import './MainContentItems.scss';

type Props = {
    contentItem: Blocks,
}

const MainContentItems: React.FC<Props> = ({contentItem}) => {

    const [state, setState] = useState<{
        background: string;
    }>({
        background: ''
    });

    const cangeBack = () => { 
        setState({ background: contentItem.background.replace('.jpg','') });
    }

    return (
        <>
        <div className = {`content ${state.background || cangeBack()}`}>
            <div className="container">
                <div className="content__item">
                    <div className="content__headline">
                        <h1>{ contentItem.headline }</h1>
                    </div>
                    <div className="content__subhead">
                        <h2>{ contentItem.subhead }</h2>
                    </div>
                </div>
            </div>
        </div>
        <Footer contentItemFooter={contentItem.cta}/>
        </>
    )

}

export default MainContentItems;