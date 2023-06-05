import Modal from '@mui/material/Modal';
import React from 'react';
import './ModalForm.css';


function ModalForm(props) {
    console.log(props)

    return (
        < div >

            <Modal aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className='Modal1' open={props.modalIsOpen}>
                <div className='modal'>
                    <button className='closeModal' onClick={() => props.setModalIsOpenToFalse()}>x</button>
                    <div className='coinName'> {props.crypto?.name}</div>
                    <div className='content'> 

                        <img src={props.crypto?.image} className='img' />
                        <div className='rank'> Rank : {props.crypto?.market_cap_rank}</div>
                        <div className='currentPrice' >Current Price: {props.crypto?.current_price}</div>
                        <div className='marketCap'>Market Cap :  {props.crypto?.market_cap}</div>
                        <div>Price Change Percentage Of 24h In Currency :  {props.crypto?.price_change_percentage_24h_in_currency} % </div>
                    </div>
                </div>
            </Modal>

        </div>
    )
}

export default ModalForm;