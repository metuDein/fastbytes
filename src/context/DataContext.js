import { createContext, useState } from "react";;




const DataContext = createContext({});




export const DataProvider = ({ children }) => {
    const [request, setRequest] = useState([
        {
            id: 123224,
            tracking_id: 134567676,
            tpMode: 'Air freight',
            commodity: 'letter box',
            cargoType: 'containers',
            cargoQuantity: 12,
            cargoUnit: 'pellets',
            weight: 124,
            weightUnit: 'KG',
            dimension: '12 by 12',
            companyName: 'horizon',
            name: 'boss man',
            email: 'meetdein8767@gmail.com',
            address: '44 greensburg avenue',
            country: 'united kingdom',
            phone: 468709 - 98764,
            fax: 234587907,
            recieverAddress: '5 maka street',
            city: 'warri',
            Zipcode: 330310,
            recieverCountry: 'Nigeria',
            message: 'you wan crase now',
            
        }
    ])
    const [admins, setAdmins] =  useState([
        {
            email : "maxdein12@microsoft.com",
            password : "Deinzoke"
        }
    ])

    return (
        <DataContext.Provider value={{
            request,
            admins,
            setAdmins,
            setRequest
        }}>
            {children}
        </DataContext.Provider>
    )


}

export default DataContext