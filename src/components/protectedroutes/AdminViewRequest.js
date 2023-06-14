import React, {useContext, useState, useEffect}from 'react'
import {  useLocation, useNavigate, useParams } from "react-router-dom";
import DataContext from '../../context/DataContext';

const AdminViewRequest = () => {

    const { id } = useParams()
    const { request}  = useContext(DataContext)
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    
    const [cargo, setCargo] = useState({});

    useEffect(() => {
        const item = request.find(cargo => cargo.id === Number(id) )
        setCargo(item)
    }, [id]);
  



  return (
    <section>
        <div className='track--result'>
                <span className='close--tab' onClick={() => navigate('/admin-panel')}> back </span>
                <h1 className='result--title'> FastBytes Logistics </h1>
                <h1 className='result--title'>  </h1>
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
            </div>
    </section>
  )
}

export default AdminViewRequest