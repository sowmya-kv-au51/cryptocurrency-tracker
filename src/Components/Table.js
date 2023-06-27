import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import { useEffect, useState } from 'react';
import data from "../data";
import ModalForm from './ModalForm/ModalForm';
import "./Table.css";

export default function BasicTable() {
    const [crypto, setCrypto] = useState([])
    const [loading, setLoading] = useState(false)

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [selectedCrypto, setSelectedCrypto] = useState({})

    const setModalIsOpenToTrue = () => {
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse = () => {
        setModalIsOpen(false)
    }


    useEffect(() => {
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h")
            .then(response => response.json())
            .then(json => setCrypto(json))
            .finally(() => {
                setLoading(false)
            })
            .catch(() => setCrypto(data))
    }, [])


    console.log(crypto)
    console.log(selectedCrypto)

    return (

        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (

                <div>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table"
                            className='tableContent'
                        >
                            <TableRow  >
                                <TableCell className='tableStyle' align="left">coin&nbsp;(g)</TableCell>
                                <TableCell className='tableStyle' align="center">Price&nbsp;(g)</TableCell>
                                <TableCell className='tableStyle' align="center">24 Change&nbsp;(g)</TableCell>
                                <TableCell className='tableStyle' align="center">Market Cap&nbsp;(g)</TableCell>
                            </TableRow>
                            <TableBody>
                                {crypto.map((singleCrypto) => (
                                    <TableRow
                                        key={singleCrypto.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell onClick={() => {
                                            setModalIsOpenToTrue()
                                            setSelectedCrypto(singleCrypto)
                                        }} className='main-coin' align="left" component="th" scope="row">
                                            <div style={{ marginRight: "10px" }}><img width="25px" src={singleCrypto.image} /></div>
                                            <div style={{ marginRight: "10px" }}>{singleCrypto.symbol}</div>
                                            <div className='coin1'> {singleCrypto.name}</div>
                                        </TableCell>
                                        <TableCell className='coin' align="center">₹&nbsp;{singleCrypto.current_price}</TableCell>
                                        <TableCell className='coin' align="center">{singleCrypto.price_change_percentage_24h.toFixed(2)}&nbsp;%</TableCell>
                                        <TableCell className='coin' align="center">{singleCrypto.market_cap}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <ModalForm modalIsOpen={modalIsOpen} setModalIsOpenToFalse={setModalIsOpenToFalse} crypto={selectedCrypto} />
                </div>
            )}

        </div>
    );
}
