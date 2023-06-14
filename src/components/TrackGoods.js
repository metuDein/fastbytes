import React, { useEffect, useState, useContext } from 'react'
import { v4 as uuid } from 'uuid'
import JsBarcode from 'jsbarcode';
import DataContext from '../context/DataContext';


const TrackGoods = () => {

    const {request, setRequest} = useContext(DataContext);
    const [cargo, setCargo] = useState({})


    const [open, setOpen] = useState(false);
    const [barcode, setBarcode] = useState('');
    const [error, setError] = useState(null);
    const [trackEmail, setTrackEmail] = useState('');
    const [trackId, setTrackId] = useState('');

    const handleTracking = (e) => {
        e.preventDefault();

        const result = request.find( cargo => {
            return cargo.tracking_id === trackId
        })
        if(!result) return window.alert('item needed')
        setOpen(true)
        console.log(result);
        setCargo(result)

    }

  useEffect(() => {
    const generateBarcode = () => {
        const newBarcode = uuid(); // Generate a unique barcode using UUID

        try {
            JsBarcode('#barcode', newBarcode, {
                format: 'CODE128',
                displayValue: true,
            });
            setBarcode(newBarcode);
            setError(null);
        } catch (err) {
            setError('Failed to generate barcode');
            console.error(err);
        }
    };
    generateBarcode()

  }, [])
    return (
        <section className='track--sect'>
            <div className='track--form'>
                <form onSubmit={handleTracking}>
                    <input type="email" placeholder='Enter your Email' value={trackEmail} onChange={e => setTrackEmail(e.target.value)} />
                    <input type="text" placeholder='Tracking ID' value={trackId} onChange={e => setTrackId(e.target.value)} />
                    <button> search </button>
                </form>

            </div>
            {open && <div className='track--result'>
                <span className='close--tab' onClick={() => setOpen(false)}> close </span>
                <h1 className='result--title'> FastBytes Logistics </h1>
                <h1 className='result--title'> {barcode} </h1>
                                <div className='shipment--info'>
                    <article>
                        <h3>Shipper information</h3>
                        <ul>
                            <li>{cargo.companyName}</li>
                            <li>{cargo.address}</li>
                            <li>{cargo.phone}</li>
                            <li>{cargo.email}</li>
                        </ul>
                    </article>
                    <article>
                        <h3>Reciever information</h3>
                        <ul>
                            <li>{cargo.recieverAddress}</li>
                            <li>{cargo.recieverCountry}</li>
                            <li>{''}</li>
                            <li>{''}</li>
                        </ul>
                    </article>
                </div>
                <h3 className='product--status'> Shipmebnt status in transit</h3>

                <h3 className='details--title'>Shipment information</h3>
                <div className='shippment--details'>
                    <ul>
                        <li className='detail--heading'>
                            Origin :
                        </li>
                        <li>{cargo.country}</li>
                    </ul>
                    <ul>
                        <li className='detail--heading'>
                            Package :
                        </li>
                        <li>{cargo.cargoType}</li>
                    </ul>
                    <ul>
                        <li className='detail--heading'>
                            Status :
                        </li>
                        <li>In transit</li>
                    </ul>
                    <ul>
                        <li className='detail--heading'>
                            Destination :
                        </li>
                        <li>{cargo.recieverCountry}</li>
                    </ul>
                    <ul>
                        <li className='detail--heading'>
                            Carrier :
                        </li>
                        <li>DHL</li>
                    </ul>
                    <ul>
                        <li className='detail--heading'>
                            Type of Shipment :
                        </li>
                        <li>{cargo.cargoUnit}</li>
                    </ul>
                    <ul>
                        <li className='detail--heading'>
                            weight :
                        </li>
                        <li>{cargo.weight} {cargo.weightUnit}</li>
                    </ul>
                    <ul>
                        <li className='detail--heading'>
                            Shipment Mode :
                        </li>
                        <li>{cargo.tpMode}</li>
                    </ul>
                    <ul>
                        <li className='detail--heading'>
                            Carrier Reference No :
                        </li>
                        <li>{cargo.tracking_id}</li>
                    </ul>
                    <ul>
                        <li className='detail--heading'>
                            Product :
                        </li>
                        <li>{cargo.commodity}</li>
                    </ul>
                    <ul>
                        <li className='detail--heading'>
                            Qty:
                        </li>
                        <li>{cargo.cargoQuantity}</li>
                    </ul>
                    <ul>
                        <li className='detail--heading'>
                            Payment Mode :
                        </li>
                        <li>cheque</li>
                    </ul>
                    <ul>
                        <li className='detail--heading'>
                            Pick-up Date:
                        </li>
                        <li>2023-24-4</li>
                    </ul>
                    <ul>
                        <li className='detail--heading'>
                            Pick-up Time :
                        </li>
                        <li>10:45 pm</li>
                    </ul>
                </div>
                <h3 className='details--title comments'>Comments : {cargo.message}</h3>
            </div>}
        </section>
    )
}

export default TrackGoods