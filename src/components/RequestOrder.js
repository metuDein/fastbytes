import { useState, useContext, useRef} from 'react';
import emailjs from '@emailjs/browser';
import DataContext from '../context/DataContext';
import { v4 as uuid } from 'uuid'


const RequestOrder = () => {
    const form = useRef()
    const { request, setRequest } = useContext(DataContext);
    console.log(request);

    const [currentPage, setCurrentPage] = useState(1);
    const [requestMade, setRequestMade] = useState(false);

    
    const [tpMode, setTpMode] = useState('')
    const [commodity, setCommodity] = useState('')
    const [cargoType, setCargoType] = useState('')
    const [cargoQuantity, setCargoQuantity] = useState('')
    const [cargoUnit, setCargoUnit] = useState('')
    const [weight, setWeight] = useState('') 
    const [weightUnit, setWeightUnit] = useState('') 
    const [dimension, setDimension] = useState('') 
    
    
    const [companyName, setCompanyName] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [country, setCountry] = useState('');
    const [phone, setPhone] = useState('');
    const [fax, setFax] = useState('');
    
    const [recieverAddress, setRecieverAddress] = useState('');
    const [city, setCity] = useState('');
    const [Zipcode, setZipcode] = useState('');
    const [recieverCountry, setRecieverCountry] = useState('');
    const [message, setMessage] = useState('');
    

    const handleNextPage = (e) => {
        e.preventDefault()
        setCurrentPage(currentPage + 1);
    };

    const handlePreviousPage = (e) => {
        e.preventDefault()
        setCurrentPage(currentPage - 1);
    };

    const handleNewRequest = (e) => {
        e.preventDefault();

        if(!tpMode || !commodity || !cargoType || !cargoQuantity || !cargoUnit || !weight || !weightUnit ||!dimension || !companyName || !name || !email || !address || !country || !phone || !recieverAddress || !city || !Zipcode || !recieverCountry) return window.alert('all fields required');

        

        const newRequest = {
            id  : uuid(),
            tracking_id : uuid(),
            tpMode : tpMode,
            commodity : commodity,
            cargoType: cargoType,
            cargoQuantity : cargoQuantity,
            cargoUnit : cargoUnit,
            weight : weight,
            weightUnit : weightUnit,
            dimension : dimension,
            companyName : companyName,
            name : name,
            email : email,
            address : address,
            country : country,
            phone : phone,
            fax : fax,
            recieverAddress : recieverAddress,
            city : city,
            Zipcode : Zipcode,
            recieverCountry: recieverCountry,
            message : message


        };
        emailjs.sendForm('service_vqfpiiq', 'template_41pqsoa', form.current, 'W4owCvwkXbIZxWl9N')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        setRequest ( old => [ ...old, newRequest]);
        console.log(request)
        
        setRequestMade(true)
        setTpMode('')
        setCommodity('')
        setCargoType('')
        setCargoQuantity('')
        setCargoUnit('')
        setWeight('')
        setWeightUnit('')
        setDimension('');
        setCompanyName('');
        setName('');
        setEmail('');
        setAddress('')
        setCountry('')
        setPhone('')
        setFax('')
        setRecieverAddress('')
        setCity('')
        setZipcode('')
        setRecieverCountry('')
        setMessage('');
        console.log('request successful');
        window.alert('request made')
    }


    
  

    

    const renderFormPage = () => {
        switch (currentPage) {
            case 1:
                return (
                    <>
                        <h2 className='current--form--title'> Cargo Info</h2>
                    <div className='form--1'>
                        <hr />
                        <div className='text-input'>
                            <label htmlFor='tp-mode'>
                                Transportation mode <span> * </span>
                            </label>
                            <select value={tpMode} id="tp-mode" name='tp-mode' onChange={e => setTpMode(e.target.value)}>
                                <option></option>
                                <option value="Air freight" > Air </option>
                                <option value="Road freight" > Road </option>
                                <option value="Ocean freight" > Ocean </option>
                                <option value="Rail freight" > Rail </option>
                            </select>
                        </div>
                        <div className='text-input'>
                            <label htmlFor='product--desc'>
                                Commodity /  Description
                            </label>
                            <textarea rows={'5'} cols={'100'} id={'product--desc'} value={commodity} onChange={e => setCommodity(e.target.value)} />
                        </div>
                        <div className='text-input'>
                            <label htmlFor='tp-mode'>
                                Cargo Type <span> * </span>
                            </label>
                            <select value={cargoType} onChange={e => setCargoType(e.target.value)}>
                                <option value="General Purposes" > General Purpose  </option>
                                <option value="Oversized Cargo" > Oversized Cargo </option>
                                <option value="Harzardous Materials" > Harzardous Materials </option>
                                <option value="Food Stuff" > Food Stuff </option>
                                <option value="Other" > Other</option>
                            </select>
                        </div>
                        <div className='side--by--side'>
                            <div className='text-input text'>
                                <label htmlFor='tp-mode'>
                                    Cargo Quantity <span> * </span>
                                </label>
                                <input type="text" placeholder='1' value={cargoQuantity} onChange={e => setCargoQuantity(e.target.value)}/>
                            </div>
                            <div className='text-input text'>
                                <label htmlFor='tp-mode'>
                                    Cargo Unit <span> * </span>
                                </label>
                                <input type="text" placeholder='e.g pallets' value={cargoUnit} onChange={e => setCargoUnit(e.target.value)}/>
                            </div>
                        </div>
                        <div className='side--by--side'>
                            <div className='text-input text'>
                                <label htmlFor='tp-mode'>
                                    Weight <span> * </span>
                                </label>
                                <input type="text" placeholder='' value={weight} onChange={e => setWeight(e.target.value)}/>
                            </div>
                            <div className='text-input text'>
                                <label htmlFor='tp-mode'>
                                    Weight Unit <span> * </span>
                                </label>
                                <select value={weightUnit} onChange={e => setWeightUnit(e.target.value)}>
                                <option></option>
                                <option value="KG" > Kg </option>
                                <option value="Lbs" > Lbs </option>
                            </select>
                            </div>
                        </div>
                        <div className='text-input'>
                            <label htmlFor='dimension'>
                                Dimensions
                            </label>
                            <textarea rows={'5'} cols={'100'} id={'dimension'} value={dimension} onChange={e => setDimension(e.target.value)}/>
                        </div>
                    </div>
                    </>
                );
            case 2:
                return (
                    <>
                        <h2 className='current--form--title'> Enter Your Information</h2>
                    <div className='form--1'>

                        <div className='side--by--side'>
                            <div className='text-input text'>
                                <label htmlFor='tp-mode'>
                                    Shipper / Company name <span> * </span>
                                </label>
                                <input type="text" name='company-name' value={companyName} onChange={e => setCompanyName(e.target.value)}/>
                            </div>

                        </div>
                        <div className='side--by--side'>
                            <div className='text-input text'>
                                <label htmlFor='tp-mode'>
                                    Your Name <span> * </span>
                                </label>
                                <input type="text" value={name} onChange={e => setName(e.target.value)}/>
                            </div>

                        </div>
                        <div className='side--by--side'>
                            <div className='text-input text'>
                                <label htmlFor='email'>
                                    Email <span> * </span>
                                </label>
                                <input type="text" id="email" name='shipper__email' value={email} onChange={e => setEmail(e.target.value)}/>
                            </div>

                        </div>
                        <div className='side--by--side'>
                            <div className='text-input text address'>
                                <label htmlFor='tp-mode'>
                                    Address <span> * </span>
                                </label>
                                <input type="text" value={address} onChange={e => setAddress(e.target.value)}/>
                            </div>

                        </div>
                        <div className='text-input text'>
                            <label htmlFor='country'>
                                Shipper Country <span> * </span>
                            </label>
                            <select value={country} onChange={e => setCountry(e.target.value)}  id="country" class="medium gfield_select" aria-required="true" aria-invalid="false">
                                <option value="-- select a Location --" selected="selected">-- select a Location --</option><option value="Afghanistan">Afghanistan</option><option value="Albania">Albania</option><option value="Algeria">Algeria</option><option value="American Samoa">American Samoa</option><option value="Andorra">Andorra</option><option value="Angola">Angola</option><option value="Antigua and Barbuda">Antigua and Barbuda</option><option value="Argentina">Argentina</option><option value="Armenia">Armenia</option><option value="Australia">Australia</option><option value="Austria">Austria</option><option value="Azerbaijan">Azerbaijan</option><option value="Bahamas">Bahamas</option><option value="Bahrain">Bahrain</option><option value="Bangladesh">Bangladesh</option><option value="Barbados">Barbados</option><option value="Belarus">Belarus</option><option value="Belgium">Belgium</option><option value="Belize">Belize</option><option value="Benin">Benin</option><option value="Bermuda">Bermuda</option><option value="Bhutan">Bhutan</option><option value="Bolivia">Bolivia</option><option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option><option value="Botswana">Botswana</option><option value="Brazil">Brazil</option><option value="Brunei">Brunei</option><option value="Bulgaria">Bulgaria</option><option value="Burkina Faso">Burkina Faso</option><option value="Burundi">Burundi</option><option value="Cambodia">Cambodia</option><option value="Cameroon">Cameroon</option><option value="Canada">Canada</option><option value="Cape Verde">Cape Verde</option><option value="Cayman Islands">Cayman Islands</option><option value="Central African Republic">Central African Republic</option><option value="Chad">Chad</option><option value="Chile">Chile</option><option value="China">China</option><option value="Colombia">Colombia</option><option value="Comoros">Comoros</option><option value="Congo, Democratic Republic of the">Congo, Democratic Republic of the</option><option value="Congo, Republic of the">Congo, Republic of the</option><option value="Costa Rica">Costa Rica</option><option value="Côte d'Ivoire">Côte d'Ivoire</option><option value="Croatia">Croatia</option><option value="Cuba">Cuba</option><option value="Curaçao">Curaçao</option><option value="Cyprus">Cyprus</option><option value="Czech Republic">Czech Republic</option><option value="Denmark">Denmark</option><option value="Djibouti">Djibouti</option><option value="Dominica">Dominica</option><option value="Dominican Republic">Dominican Republic</option><option value="East Timor">East Timor</option><option value="Ecuador">Ecuador</option><option value="Egypt">Egypt</option><option value="El Salvador">El Salvador</option><option value="Equatorial Guinea">Equatorial Guinea</option><option value="Eritrea">Eritrea</option><option value="Estonia">Estonia</option><option value="Ethiopia">Ethiopia</option><option value="Faroe Islands">Faroe Islands</option><option value="Fiji">Fiji</option><option value="Finland">Finland</option><option value="France">France</option><option value="French Polynesia">French Polynesia</option><option value="Gabon">Gabon</option><option value="Gambia">Gambia</option><option value="Georgia">Georgia</option><option value="Germany">Germany</option><option value="Ghana">Ghana</option><option value="Greece">Greece</option><option value="Greenland">Greenland</option><option value="Grenada">Grenada</option><option value="Guam">Guam</option><option value="Guatemala">Guatemala</option><option value="Guinea">Guinea</option><option value="Guinea-Bissau">Guinea-Bissau</option><option value="Guyana">Guyana</option><option value="Haiti">Haiti</option><option value="Honduras">Honduras</option><option value="Hong Kong">Hong Kong</option><option value="Hungary">Hungary</option><option value="Iceland">Iceland</option><option value="India">India</option><option value="Indonesia">Indonesia</option><option value="Iran">Iran</option><option value="Iraq">Iraq</option><option value="Ireland">Ireland</option><option value="Israel">Israel</option><option value="Italy">Italy</option><option value="Jamaica">Jamaica</option><option value="Japan">Japan</option><option value="Jordan">Jordan</option><option value="Kazakhstan">Kazakhstan</option><option value="Kenya">Kenya</option><option value="Kiribati">Kiribati</option><option value="North Korea">North Korea</option><option value="South Korea">South Korea</option><option value="Kosovo">Kosovo</option><option value="Kuwait">Kuwait</option><option value="Kyrgyzstan">Kyrgyzstan</option><option value="Laos">Laos</option><option value="Latvia">Latvia</option><option value="Lebanon">Lebanon</option><option value="Lesotho">Lesotho</option><option value="Liberia">Liberia</option><option value="Libya">Libya</option><option value="Liechtenstein">Liechtenstein</option><option value="Lithuania">Lithuania</option><option value="Luxembourg">Luxembourg</option><option value="Macedonia">Macedonia</option><option value="Madagascar">Madagascar</option><option value="Malawi">Malawi</option><option value="Malaysia">Malaysia</option><option value="Maldives">Maldives</option><option value="Mali">Mali</option><option value="Malta">Malta</option><option value="Marshall Islands">Marshall Islands</option><option value="Mauritania">Mauritania</option><option value="Mauritius">Mauritius</option><option value="Mexico">Mexico</option><option value="Micronesia">Micronesia</option><option value="Moldova">Moldova</option><option value="Monaco">Monaco</option><option value="Mongolia">Mongolia</option><option value="Montenegro">Montenegro</option><option value="Morocco">Morocco</option><option value="Mozambique">Mozambique</option><option value="Myanmar">Myanmar</option><option value="Namibia">Namibia</option><option value="Nauru">Nauru</option><option value="Nepal">Nepal</option><option value="Netherlands">Netherlands</option><option value="New Zealand">New Zealand</option><option value="Nicaragua">Nicaragua</option><option value="Niger">Niger</option><option value="Nigeria">Nigeria</option><option value="Northern Mariana Islands">Northern Mariana Islands</option><option value="Norway">Norway</option><option value="Oman">Oman</option><option value="Pakistan">Pakistan</option><option value="Palau">Palau</option><option value="Palestine, State of">Palestine, State of</option><option value="Panama">Panama</option><option value="Papua New Guinea">Papua New Guinea</option><option value="Paraguay">Paraguay</option><option value="Peru">Peru</option><option value="Philippines">Philippines</option><option value="Poland">Poland</option><option value="Portugal">Portugal</option><option value="Puerto Rico">Puerto Rico</option><option value="Qatar">Qatar</option><option value="Romania">Romania</option><option value="Russia">Russia</option><option value="Rwanda">Rwanda</option><option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option><option value="Saint Lucia">Saint Lucia</option><option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option><option value="Samoa">Samoa</option><option value="San Marino">San Marino</option><option value="Sao Tome and Principe">Sao Tome and Principe</option><option value="Saudi Arabia">Saudi Arabia</option><option value="Senegal">Senegal</option><option value="Serbia">Serbia</option><option value="Seychelles">Seychelles</option><option value="Sierra Leone">Sierra Leone</option><option value="Singapore">Singapore</option><option value="Sint Maarten">Sint Maarten</option><option value="Slovakia">Slovakia</option><option value="Slovenia">Slovenia</option><option value="Solomon Islands">Solomon Islands</option><option value="Somalia">Somalia</option><option value="South Africa">South Africa</option><option value="Spain">Spain</option><option value="Sri Lanka">Sri Lanka</option><option value="Sudan">Sudan</option><option value="Sudan, South">Sudan, South</option><option value="Suriname">Suriname</option><option value="Swaziland">Swaziland</option><option value="Sweden">Sweden</option><option value="Switzerland">Switzerland</option><option value="Syria">Syria</option><option value="Taiwan">Taiwan</option><option value="Tajikistan">Tajikistan</option><option value="Tanzania">Tanzania</option><option value="Thailand">Thailand</option><option value="Togo">Togo</option><option value="Tonga">Tonga</option><option value="Trinidad and Tobago">Trinidad and Tobago</option><option value="Tunisia">Tunisia</option><option value="Turkey">Turkey</option><option value="Turkmenistan">Turkmenistan</option><option value="Tuvalu">Tuvalu</option><option value="Uganda">Uganda</option><option value="Ukraine">Ukraine</option><option value="United Arab Emirates">United Arab Emirates</option><option value="United Kingdom">United Kingdom</option><option value="United States">United States</option><option value="Uruguay">Uruguay</option><option value="Uzbekistan">Uzbekistan</option><option value="Vanuatu">Vanuatu</option><option value="Vatican City">Vatican City</option><option value="Venezuela">Venezuela</option><option value="Vietnam">Vietnam</option><option value="Virgin Islands, British">Virgin Islands, British</option><option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option><option value="Yemen">Yemen</option><option value="Zambia">Zambia</option><option value="Zimbabwe">Zimbabwe</option>
                            </select>
                        </div>
                        <div className='side--by--side'>
                            <div className='text-input text'>
                                <label htmlFor='phone'>
                                    Telephone <span> * </span>
                                </label>
                                <input type="text" id='phone' value={phone} onChange={e => setPhone(e.target.value)}/>
                            </div>

                        </div>
                        <div className='side--by--side'>
                            <div className='text-input text'>
                                <label htmlFor='fax'>
                                    Fax <span> * </span>
                                </label>
                                <input type="text" id='fax' value={fax} onChange={e => setFax(e.target.value)}/>
                            </div>

                        </div>
                    </div>
                    </>
                );
            case 3:
                return (
                    <>
                        <h2 className='current--form--title'> Enter the Reciever Details</h2>
                    <div className='form--1'>
                        <div className='side--by--side'>
                            <div className='text-input text address'>
                                <label htmlFor='tp-mode'>
                                    Address <span> * </span>
                                </label>
                                <input type="text" name='reciever--address' value={recieverAddress} onChange={e => setRecieverAddress(e.target.value)}/>
                            </div>

                        </div>
                        <div className='side--by--side'>
                            <div className='text-input text'>
                                <label htmlFor='city' >
                                    City <span> * </span>
                                </label>
                                <input type="text" id='city' value={city} onChange={e => setCity(e.target.value)}/>
                            </div>
                            <div className='text-input text'>
                                <label htmlFor='zipcode'>
                                    Zipcode <span> * </span>
                                </label>
                                <input type="text"  id='zipcode' value={Zipcode} onChange={e => setZipcode(e.target.value)}/>
                            </div>

                        </div>
                        <div className='text-input text'>
                            <label htmlFor='r-country'>
                                Country <span> * </span>
                            </label>
                            <select  value={recieverCountry} onChange={e => setRecieverCountry(e.target.value)}  id="r-country" class="medium gfield_select" aria-required="true" aria-invalid="false">
                                <option value="-- select a Location --" selected="selected">-- select a Location --</option><option value="Afghanistan">Afghanistan</option><option value="Albania">Albania</option><option value="Algeria">Algeria</option><option value="American Samoa">American Samoa</option><option value="Andorra">Andorra</option><option value="Angola">Angola</option><option value="Antigua and Barbuda">Antigua and Barbuda</option><option value="Argentina">Argentina</option><option value="Armenia">Armenia</option><option value="Australia">Australia</option><option value="Austria">Austria</option><option value="Azerbaijan">Azerbaijan</option><option value="Bahamas">Bahamas</option><option value="Bahrain">Bahrain</option><option value="Bangladesh">Bangladesh</option><option value="Barbados">Barbados</option><option value="Belarus">Belarus</option><option value="Belgium">Belgium</option><option value="Belize">Belize</option><option value="Benin">Benin</option><option value="Bermuda">Bermuda</option><option value="Bhutan">Bhutan</option><option value="Bolivia">Bolivia</option><option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option><option value="Botswana">Botswana</option><option value="Brazil">Brazil</option><option value="Brunei">Brunei</option><option value="Bulgaria">Bulgaria</option><option value="Burkina Faso">Burkina Faso</option><option value="Burundi">Burundi</option><option value="Cambodia">Cambodia</option><option value="Cameroon">Cameroon</option><option value="Canada">Canada</option><option value="Cape Verde">Cape Verde</option><option value="Cayman Islands">Cayman Islands</option><option value="Central African Republic">Central African Republic</option><option value="Chad">Chad</option><option value="Chile">Chile</option><option value="China">China</option><option value="Colombia">Colombia</option><option value="Comoros">Comoros</option><option value="Congo, Democratic Republic of the">Congo, Democratic Republic of the</option><option value="Congo, Republic of the">Congo, Republic of the</option><option value="Costa Rica">Costa Rica</option><option value="Côte d'Ivoire">Côte d'Ivoire</option><option value="Croatia">Croatia</option><option value="Cuba">Cuba</option><option value="Curaçao">Curaçao</option><option value="Cyprus">Cyprus</option><option value="Czech Republic">Czech Republic</option><option value="Denmark">Denmark</option><option value="Djibouti">Djibouti</option><option value="Dominica">Dominica</option><option value="Dominican Republic">Dominican Republic</option><option value="East Timor">East Timor</option><option value="Ecuador">Ecuador</option><option value="Egypt">Egypt</option><option value="El Salvador">El Salvador</option><option value="Equatorial Guinea">Equatorial Guinea</option><option value="Eritrea">Eritrea</option><option value="Estonia">Estonia</option><option value="Ethiopia">Ethiopia</option><option value="Faroe Islands">Faroe Islands</option><option value="Fiji">Fiji</option><option value="Finland">Finland</option><option value="France">France</option><option value="French Polynesia">French Polynesia</option><option value="Gabon">Gabon</option><option value="Gambia">Gambia</option><option value="Georgia">Georgia</option><option value="Germany">Germany</option><option value="Ghana">Ghana</option><option value="Greece">Greece</option><option value="Greenland">Greenland</option><option value="Grenada">Grenada</option><option value="Guam">Guam</option><option value="Guatemala">Guatemala</option><option value="Guinea">Guinea</option><option value="Guinea-Bissau">Guinea-Bissau</option><option value="Guyana">Guyana</option><option value="Haiti">Haiti</option><option value="Honduras">Honduras</option><option value="Hong Kong">Hong Kong</option><option value="Hungary">Hungary</option><option value="Iceland">Iceland</option><option value="India">India</option><option value="Indonesia">Indonesia</option><option value="Iran">Iran</option><option value="Iraq">Iraq</option><option value="Ireland">Ireland</option><option value="Israel">Israel</option><option value="Italy">Italy</option><option value="Jamaica">Jamaica</option><option value="Japan">Japan</option><option value="Jordan">Jordan</option><option value="Kazakhstan">Kazakhstan</option><option value="Kenya">Kenya</option><option value="Kiribati">Kiribati</option><option value="North Korea">North Korea</option><option value="South Korea">South Korea</option><option value="Kosovo">Kosovo</option><option value="Kuwait">Kuwait</option><option value="Kyrgyzstan">Kyrgyzstan</option><option value="Laos">Laos</option><option value="Latvia">Latvia</option><option value="Lebanon">Lebanon</option><option value="Lesotho">Lesotho</option><option value="Liberia">Liberia</option><option value="Libya">Libya</option><option value="Liechtenstein">Liechtenstein</option><option value="Lithuania">Lithuania</option><option value="Luxembourg">Luxembourg</option><option value="Macedonia">Macedonia</option><option value="Madagascar">Madagascar</option><option value="Malawi">Malawi</option><option value="Malaysia">Malaysia</option><option value="Maldives">Maldives</option><option value="Mali">Mali</option><option value="Malta">Malta</option><option value="Marshall Islands">Marshall Islands</option><option value="Mauritania">Mauritania</option><option value="Mauritius">Mauritius</option><option value="Mexico">Mexico</option><option value="Micronesia">Micronesia</option><option value="Moldova">Moldova</option><option value="Monaco">Monaco</option><option value="Mongolia">Mongolia</option><option value="Montenegro">Montenegro</option><option value="Morocco">Morocco</option><option value="Mozambique">Mozambique</option><option value="Myanmar">Myanmar</option><option value="Namibia">Namibia</option><option value="Nauru">Nauru</option><option value="Nepal">Nepal</option><option value="Netherlands">Netherlands</option><option value="New Zealand">New Zealand</option><option value="Nicaragua">Nicaragua</option><option value="Niger">Niger</option><option value="Nigeria">Nigeria</option><option value="Northern Mariana Islands">Northern Mariana Islands</option><option value="Norway">Norway</option><option value="Oman">Oman</option><option value="Pakistan">Pakistan</option><option value="Palau">Palau</option><option value="Palestine, State of">Palestine, State of</option><option value="Panama">Panama</option><option value="Papua New Guinea">Papua New Guinea</option><option value="Paraguay">Paraguay</option><option value="Peru">Peru</option><option value="Philippines">Philippines</option><option value="Poland">Poland</option><option value="Portugal">Portugal</option><option value="Puerto Rico">Puerto Rico</option><option value="Qatar">Qatar</option><option value="Romania">Romania</option><option value="Russia">Russia</option><option value="Rwanda">Rwanda</option><option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option><option value="Saint Lucia">Saint Lucia</option><option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option><option value="Samoa">Samoa</option><option value="San Marino">San Marino</option><option value="Sao Tome and Principe">Sao Tome and Principe</option><option value="Saudi Arabia">Saudi Arabia</option><option value="Senegal">Senegal</option><option value="Serbia">Serbia</option><option value="Seychelles">Seychelles</option><option value="Sierra Leone">Sierra Leone</option><option value="Singapore">Singapore</option><option value="Sint Maarten">Sint Maarten</option><option value="Slovakia">Slovakia</option><option value="Slovenia">Slovenia</option><option value="Solomon Islands">Solomon Islands</option><option value="Somalia">Somalia</option><option value="South Africa">South Africa</option><option value="Spain">Spain</option><option value="Sri Lanka">Sri Lanka</option><option value="Sudan">Sudan</option><option value="Sudan, South">Sudan, South</option><option value="Suriname">Suriname</option><option value="Swaziland">Swaziland</option><option value="Sweden">Sweden</option><option value="Switzerland">Switzerland</option><option value="Syria">Syria</option><option value="Taiwan">Taiwan</option><option value="Tajikistan">Tajikistan</option><option value="Tanzania">Tanzania</option><option value="Thailand">Thailand</option><option value="Togo">Togo</option><option value="Tonga">Tonga</option><option value="Trinidad and Tobago">Trinidad and Tobago</option><option value="Tunisia">Tunisia</option><option value="Turkey">Turkey</option><option value="Turkmenistan">Turkmenistan</option><option value="Tuvalu">Tuvalu</option><option value="Uganda">Uganda</option><option value="Ukraine">Ukraine</option><option value="United Arab Emirates">United Arab Emirates</option><option value="United Kingdom">United Kingdom</option><option value="United States">United States</option><option value="Uruguay">Uruguay</option><option value="Uzbekistan">Uzbekistan</option><option value="Vanuatu">Vanuatu</option><option value="Vatican City">Vatican City</option><option value="Venezuela">Venezuela</option><option value="Vietnam">Vietnam</option><option value="Virgin Islands, British">Virgin Islands, British</option><option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option><option value="Yemen">Yemen</option><option value="Zambia">Zambia</option><option value="Zimbabwe">Zimbabwe</option>
                            </select>
                        </div>


                    </div>
                    </>
                );
            case 4:
                return (
                    <>
                        <h2 className='current--form--title'> Confirm your quote</h2>
                    <div className='summary'>
                        <div className='full-details'>
                        
                            <h1>GENERAL INFORMATION</h1>
                           <div className='oreder--details'>
                                <span className='order---span' ><p className='firstp'> Transportation Mode</p> <p className='other--p'> {tpMode}</p></span>
                                <span className='order---span'> <p className='firstp'>Commodity/Description</p> <p className='other--p'> {commodity}</p></span>
                                <span className='order---span'><p className='firstp'> Cargo Type</p> <p className='other--p'> {cargoType}</p></span>
                                <span className='order---span'><p className='firstp'>Cargo Quantity</p > <p className='other--p'> {cargoQuantity}{cargoUnit}</p></span>
                                <span className='order---span'> <p className='firstp'>Weight</p> <p className='other--p'> {weight} {weightUnit} </p></span>
                                <span className='order---span'> <p className='firstp'>Dimensions</p> <p className='other--p'> {dimension}</p></span>
                                </div>
                        
                        </div>


                        <div className='full-details'>
                      
                        <h1>YOUR INFORMATION</h1>
                        <div className='oreder--details'>
                        <span className='order---span' > <p className='firstp'>Shipper/Company Name</p> <p className='other--p'> {companyName}</p></span>
                        <span className='order---span' > <p className='firstp'>your Name</p> <p className='other--p'> {name}</p></span>
                        <span className='order---span' > <p className='firstp'>Email</p> <p className='other--p'> {email}</p></span>
                        <span className='order---span' > <p className='firstp'>Cargo Quantity</p> <p className='other--p'> {cargoQuantity}</p></span>
                        <span className='order---span' > <p className='firstp'>Address</p> <p className='other--p'> {address}</p></span>
                        <span className='order---span' > <p className='firstp'>Shipper Country</p> <p className='other--p'> {country}</p></span>
                        <span className='order---span' > <p className='firstp'>Telephone</p> <p className='other--p'> {phone}</p></span>
                        <span className='order---span' > <p className='firstp'>Fax</p> <p className='other--p'> {fax}</p></span>
                                 </div>
                      
                        </div>



                        <div className='full-details'>
                        
                       <h1>DESTINATION INFO</h1> 
                       <div className='oreder--details'>
                                 <span className='order---span'> <p className='firstp'>Address</p> <p className='other--p'>{`${recieverAddress}, ${recieverCountry}, ${Zipcode}`}</p></span>
                                 </div>
                        
                        </div>

                    </div>
                    </>
                );
            case 5:
                return (
                <>
                        <h2 className='current--form--title'> Would you like to leave a message? </h2>
                    <div className='form--1'>
                        <div className='text-input'>
                            <label htmlFor='message'>
                                Your Message
                            </label>
                            <textarea rows={'5'} cols={'100'} id={'message'} value={message} onChange={e => setMessage(e.target.value)}/>
                        </div>

                    </div>
                    </>
                );

            default:
                return null;
        }
    };




    return (
        <section className='request--section'>
            { requestMade && <div className='message--sent'>
                <span>
                    <img src="https://www.iconpacks.net/icons/2/free-send-mail-icon-2574-thumb.png" alt="" />
                    <p> Request delivered We'll contact you Shortly </p>

                        <button className='closeBtn' onClick={ () => setRequestMade(old=> !old)}> close </button>
                </span>
            </div>}
            <article className='form--banner'>

            </article>
            <form onSubmit={handleNewRequest} ref={form}>
                {renderFormPage()}


               
                    {currentPage > 1 && <button onClick={handlePreviousPage}> previous </button>}
                    {currentPage < 5 && 
                    <button onClick={handleNextPage}> next </button>}
                    {currentPage >= 5 && <button> Submit</button>}
                
            </form>
            <form ref={form} onSubmit={e => e.preventDefault()} style={{ height : '0', padding : '0', overflow :'hidden',}}>
            <>
                        <h2 className='current--form--title'> Cargo Info</h2>
                    <div className='form--1'>
                        <hr />
                        <div className='text-input'>
                            <label htmlFor='tp-mode'>
                                Transportation mode <span> * </span>
                            </label>
                            <select value={tpMode} id="tp-mode" name='tp-mode' onChange={e => setTpMode(e.target.value)}>
                                <option></option>
                                <option value="Air freight" > Air </option>
                                <option value="Road freight" > Road </option>
                                <option value="Ocean freight" > Ocean </option>
                                <option value="Rail freight" > Rail </option>
                            </select>
                        </div>
                        <div className='text-input'>
                            <label htmlFor='product--desc'>
                                Commodity /  Description
                            </label>
                            <textarea rows={'5'} cols={'100'} id={'product--desc'} value={commodity} onChange={e => setCommodity(e.target.value)} />
                        </div>
                        <div className='text-input'>
                            <label htmlFor='tp-mode'>
                                Cargo Type <span> * </span>
                            </label>
                            <select value={cargoType} onChange={e => setCargoType(e.target.value)}>
                                <option value="General Purposes" > General Purpose  </option>
                                <option value="Oversized Cargo" > Oversized Cargo </option>
                                <option value="Harzardous Materials" > Harzardous Materials </option>
                                <option value="Food Stuff" > Food Stuff </option>
                                <option value="Other" > Other</option>
                            </select>
                        </div>
                        <div className='side--by--side'>
                            <div className='text-input text'>
                                <label htmlFor='tp-mode'>
                                    Cargo Quantity <span> * </span>
                                </label>
                                <input type="text" placeholder='1' value={cargoQuantity} onChange={e => setCargoQuantity(e.target.value)}/>
                            </div>
                            <div className='text-input text'>
                                <label htmlFor='tp-mode'>
                                    Cargo Unit <span> * </span>
                                </label>
                                <input type="text" placeholder='e.g pallets' value={cargoUnit} onChange={e => setCargoUnit(e.target.value)}/>
                            </div>
                        </div>
                        <div className='side--by--side'>
                            <div className='text-input text'>
                                <label htmlFor='tp-mode'>
                                    Weight <span> * </span>
                                </label>
                                <input type="text" placeholder='' value={weight} onChange={e => setWeight(e.target.value)}/>
                            </div>
                            <div className='text-input text'>
                                <label htmlFor='tp-mode'>
                                    Weight Unit <span> * </span>
                                </label>
                                <select value={weightUnit} onChange={e => setWeightUnit(e.target.value)}>
                                <option></option>
                                <option value="KG" > Kg </option>
                                <option value="Lbs" > Lbs </option>
                            </select>
                            </div>
                        </div>
                        <div className='text-input'>
                            <label htmlFor='dimension'>
                                Dimensions
                            </label>
                            <textarea rows={'5'} cols={'100'} id={'dimension'} value={dimension} onChange={e => setDimension(e.target.value)}/>
                        </div>
                    </div>
                    </>
                    <>
                        <h2 className='current--form--title'> Enter Your Information</h2>
                    <div className='form--1'>

                        <div className='side--by--side'>
                            <div className='text-input text'>
                                <label htmlFor='tp-mode'>
                                    Shipper / Company name <span> * </span>
                                </label>
                                <input type="text" name='company-name' value={companyName} onChange={e => setCompanyName(e.target.value)}/>
                            </div>

                        </div>
                        <div className='side--by--side'>
                            <div className='text-input text'>
                                <label htmlFor='tp-mode'>
                                    Your Name <span> * </span>
                                </label>
                                <input type="text" value={name} onChange={e => setName(e.target.value)}/>
                            </div>

                        </div>
                        <div className='side--by--side'>
                            <div className='text-input text'>
                                <label htmlFor='email'>
                                    Email <span> * </span>
                                </label>
                                <input type="text" id="email" name='shipper__email' value={email} onChange={e => setEmail(e.target.value)}/>
                            </div>

                        </div>
                        <div className='side--by--side'>
                            <div className='text-input text address'>
                                <label htmlFor='tp-mode'>
                                    Address <span> * </span>
                                </label>
                                <input type="text" value={address} onChange={e => setAddress(e.target.value)}/>
                            </div>

                        </div>
                        <div className='text-input text'>
                            <label htmlFor='country'>
                                Shipper Country <span> * </span>
                            </label>
                            <select value={country} onChange={e => setCountry(e.target.value)}  id="country" class="medium gfield_select" aria-required="true" aria-invalid="false">
                                <option value="-- select a Location --" selected="selected">-- select a Location --</option><option value="Afghanistan">Afghanistan</option><option value="Albania">Albania</option><option value="Algeria">Algeria</option><option value="American Samoa">American Samoa</option><option value="Andorra">Andorra</option><option value="Angola">Angola</option><option value="Antigua and Barbuda">Antigua and Barbuda</option><option value="Argentina">Argentina</option><option value="Armenia">Armenia</option><option value="Australia">Australia</option><option value="Austria">Austria</option><option value="Azerbaijan">Azerbaijan</option><option value="Bahamas">Bahamas</option><option value="Bahrain">Bahrain</option><option value="Bangladesh">Bangladesh</option><option value="Barbados">Barbados</option><option value="Belarus">Belarus</option><option value="Belgium">Belgium</option><option value="Belize">Belize</option><option value="Benin">Benin</option><option value="Bermuda">Bermuda</option><option value="Bhutan">Bhutan</option><option value="Bolivia">Bolivia</option><option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option><option value="Botswana">Botswana</option><option value="Brazil">Brazil</option><option value="Brunei">Brunei</option><option value="Bulgaria">Bulgaria</option><option value="Burkina Faso">Burkina Faso</option><option value="Burundi">Burundi</option><option value="Cambodia">Cambodia</option><option value="Cameroon">Cameroon</option><option value="Canada">Canada</option><option value="Cape Verde">Cape Verde</option><option value="Cayman Islands">Cayman Islands</option><option value="Central African Republic">Central African Republic</option><option value="Chad">Chad</option><option value="Chile">Chile</option><option value="China">China</option><option value="Colombia">Colombia</option><option value="Comoros">Comoros</option><option value="Congo, Democratic Republic of the">Congo, Democratic Republic of the</option><option value="Congo, Republic of the">Congo, Republic of the</option><option value="Costa Rica">Costa Rica</option><option value="Côte d'Ivoire">Côte d'Ivoire</option><option value="Croatia">Croatia</option><option value="Cuba">Cuba</option><option value="Curaçao">Curaçao</option><option value="Cyprus">Cyprus</option><option value="Czech Republic">Czech Republic</option><option value="Denmark">Denmark</option><option value="Djibouti">Djibouti</option><option value="Dominica">Dominica</option><option value="Dominican Republic">Dominican Republic</option><option value="East Timor">East Timor</option><option value="Ecuador">Ecuador</option><option value="Egypt">Egypt</option><option value="El Salvador">El Salvador</option><option value="Equatorial Guinea">Equatorial Guinea</option><option value="Eritrea">Eritrea</option><option value="Estonia">Estonia</option><option value="Ethiopia">Ethiopia</option><option value="Faroe Islands">Faroe Islands</option><option value="Fiji">Fiji</option><option value="Finland">Finland</option><option value="France">France</option><option value="French Polynesia">French Polynesia</option><option value="Gabon">Gabon</option><option value="Gambia">Gambia</option><option value="Georgia">Georgia</option><option value="Germany">Germany</option><option value="Ghana">Ghana</option><option value="Greece">Greece</option><option value="Greenland">Greenland</option><option value="Grenada">Grenada</option><option value="Guam">Guam</option><option value="Guatemala">Guatemala</option><option value="Guinea">Guinea</option><option value="Guinea-Bissau">Guinea-Bissau</option><option value="Guyana">Guyana</option><option value="Haiti">Haiti</option><option value="Honduras">Honduras</option><option value="Hong Kong">Hong Kong</option><option value="Hungary">Hungary</option><option value="Iceland">Iceland</option><option value="India">India</option><option value="Indonesia">Indonesia</option><option value="Iran">Iran</option><option value="Iraq">Iraq</option><option value="Ireland">Ireland</option><option value="Israel">Israel</option><option value="Italy">Italy</option><option value="Jamaica">Jamaica</option><option value="Japan">Japan</option><option value="Jordan">Jordan</option><option value="Kazakhstan">Kazakhstan</option><option value="Kenya">Kenya</option><option value="Kiribati">Kiribati</option><option value="North Korea">North Korea</option><option value="South Korea">South Korea</option><option value="Kosovo">Kosovo</option><option value="Kuwait">Kuwait</option><option value="Kyrgyzstan">Kyrgyzstan</option><option value="Laos">Laos</option><option value="Latvia">Latvia</option><option value="Lebanon">Lebanon</option><option value="Lesotho">Lesotho</option><option value="Liberia">Liberia</option><option value="Libya">Libya</option><option value="Liechtenstein">Liechtenstein</option><option value="Lithuania">Lithuania</option><option value="Luxembourg">Luxembourg</option><option value="Macedonia">Macedonia</option><option value="Madagascar">Madagascar</option><option value="Malawi">Malawi</option><option value="Malaysia">Malaysia</option><option value="Maldives">Maldives</option><option value="Mali">Mali</option><option value="Malta">Malta</option><option value="Marshall Islands">Marshall Islands</option><option value="Mauritania">Mauritania</option><option value="Mauritius">Mauritius</option><option value="Mexico">Mexico</option><option value="Micronesia">Micronesia</option><option value="Moldova">Moldova</option><option value="Monaco">Monaco</option><option value="Mongolia">Mongolia</option><option value="Montenegro">Montenegro</option><option value="Morocco">Morocco</option><option value="Mozambique">Mozambique</option><option value="Myanmar">Myanmar</option><option value="Namibia">Namibia</option><option value="Nauru">Nauru</option><option value="Nepal">Nepal</option><option value="Netherlands">Netherlands</option><option value="New Zealand">New Zealand</option><option value="Nicaragua">Nicaragua</option><option value="Niger">Niger</option><option value="Nigeria">Nigeria</option><option value="Northern Mariana Islands">Northern Mariana Islands</option><option value="Norway">Norway</option><option value="Oman">Oman</option><option value="Pakistan">Pakistan</option><option value="Palau">Palau</option><option value="Palestine, State of">Palestine, State of</option><option value="Panama">Panama</option><option value="Papua New Guinea">Papua New Guinea</option><option value="Paraguay">Paraguay</option><option value="Peru">Peru</option><option value="Philippines">Philippines</option><option value="Poland">Poland</option><option value="Portugal">Portugal</option><option value="Puerto Rico">Puerto Rico</option><option value="Qatar">Qatar</option><option value="Romania">Romania</option><option value="Russia">Russia</option><option value="Rwanda">Rwanda</option><option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option><option value="Saint Lucia">Saint Lucia</option><option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option><option value="Samoa">Samoa</option><option value="San Marino">San Marino</option><option value="Sao Tome and Principe">Sao Tome and Principe</option><option value="Saudi Arabia">Saudi Arabia</option><option value="Senegal">Senegal</option><option value="Serbia">Serbia</option><option value="Seychelles">Seychelles</option><option value="Sierra Leone">Sierra Leone</option><option value="Singapore">Singapore</option><option value="Sint Maarten">Sint Maarten</option><option value="Slovakia">Slovakia</option><option value="Slovenia">Slovenia</option><option value="Solomon Islands">Solomon Islands</option><option value="Somalia">Somalia</option><option value="South Africa">South Africa</option><option value="Spain">Spain</option><option value="Sri Lanka">Sri Lanka</option><option value="Sudan">Sudan</option><option value="Sudan, South">Sudan, South</option><option value="Suriname">Suriname</option><option value="Swaziland">Swaziland</option><option value="Sweden">Sweden</option><option value="Switzerland">Switzerland</option><option value="Syria">Syria</option><option value="Taiwan">Taiwan</option><option value="Tajikistan">Tajikistan</option><option value="Tanzania">Tanzania</option><option value="Thailand">Thailand</option><option value="Togo">Togo</option><option value="Tonga">Tonga</option><option value="Trinidad and Tobago">Trinidad and Tobago</option><option value="Tunisia">Tunisia</option><option value="Turkey">Turkey</option><option value="Turkmenistan">Turkmenistan</option><option value="Tuvalu">Tuvalu</option><option value="Uganda">Uganda</option><option value="Ukraine">Ukraine</option><option value="United Arab Emirates">United Arab Emirates</option><option value="United Kingdom">United Kingdom</option><option value="United States">United States</option><option value="Uruguay">Uruguay</option><option value="Uzbekistan">Uzbekistan</option><option value="Vanuatu">Vanuatu</option><option value="Vatican City">Vatican City</option><option value="Venezuela">Venezuela</option><option value="Vietnam">Vietnam</option><option value="Virgin Islands, British">Virgin Islands, British</option><option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option><option value="Yemen">Yemen</option><option value="Zambia">Zambia</option><option value="Zimbabwe">Zimbabwe</option>
                            </select>
                        </div>
                        <div className='side--by--side'>
                            <div className='text-input text'>
                                <label htmlFor='phone'>
                                    Telephone <span> * </span>
                                </label>
                                <input type="text" id='phone' value={phone} onChange={e => setPhone(e.target.value)}/>
                            </div>

                        </div>
                        <div className='side--by--side'>
                            <div className='text-input text'>
                                <label htmlFor='fax'>
                                    Fax <span> * </span>
                                </label>
                                <input type="text" id='fax' value={fax} onChange={e => setFax(e.target.value)}/>
                            </div>

                        </div>

                    </div>
                    </>
                    <>
                        <h2 className='current--form--title'> Enter the Reciever Details</h2>
                    <div className='form--1'>
                        <div className='side--by--side'>
                            <div className='text-input text address'>
                                <label htmlFor='tp-mode'>
                                    Address <span> * </span>
                                </label>
                                <input type="text" name='reciever--address' value={recieverAddress} onChange={e => setRecieverAddress(e.target.value)}/>
                            </div>

                        </div>
                        <div className='side--by--side'>
                            <div className='text-input text'>
                                <label htmlFor='city' >
                                    City <span> * </span>
                                </label>
                                <input type="text" id='city' value={city} onChange={e => setCity(e.target.value)}/>
                            </div>
                            <div className='text-input text'>
                                <label htmlFor='zipcode'>
                                    Zipcode <span> * </span>
                                </label>
                                <input type="text"  id='zipcode' value={Zipcode} onChange={e => setZipcode(e.target.value)}/>
                            </div>

                        </div>
                        <div className='text-input text'>
                            <label htmlFor='r-country'>
                                Country <span> * </span>
                            </label>
                            <select  value={recieverCountry} onChange={e => setRecieverCountry(e.target.value)}  id="r-country" class="medium gfield_select" aria-required="true" aria-invalid="false">
                                <option value="-- select a Location --" selected="selected">-- select a Location --</option><option value="Afghanistan">Afghanistan</option><option value="Albania">Albania</option><option value="Algeria">Algeria</option><option value="American Samoa">American Samoa</option><option value="Andorra">Andorra</option><option value="Angola">Angola</option><option value="Antigua and Barbuda">Antigua and Barbuda</option><option value="Argentina">Argentina</option><option value="Armenia">Armenia</option><option value="Australia">Australia</option><option value="Austria">Austria</option><option value="Azerbaijan">Azerbaijan</option><option value="Bahamas">Bahamas</option><option value="Bahrain">Bahrain</option><option value="Bangladesh">Bangladesh</option><option value="Barbados">Barbados</option><option value="Belarus">Belarus</option><option value="Belgium">Belgium</option><option value="Belize">Belize</option><option value="Benin">Benin</option><option value="Bermuda">Bermuda</option><option value="Bhutan">Bhutan</option><option value="Bolivia">Bolivia</option><option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option><option value="Botswana">Botswana</option><option value="Brazil">Brazil</option><option value="Brunei">Brunei</option><option value="Bulgaria">Bulgaria</option><option value="Burkina Faso">Burkina Faso</option><option value="Burundi">Burundi</option><option value="Cambodia">Cambodia</option><option value="Cameroon">Cameroon</option><option value="Canada">Canada</option><option value="Cape Verde">Cape Verde</option><option value="Cayman Islands">Cayman Islands</option><option value="Central African Republic">Central African Republic</option><option value="Chad">Chad</option><option value="Chile">Chile</option><option value="China">China</option><option value="Colombia">Colombia</option><option value="Comoros">Comoros</option><option value="Congo, Democratic Republic of the">Congo, Democratic Republic of the</option><option value="Congo, Republic of the">Congo, Republic of the</option><option value="Costa Rica">Costa Rica</option><option value="Côte d'Ivoire">Côte d'Ivoire</option><option value="Croatia">Croatia</option><option value="Cuba">Cuba</option><option value="Curaçao">Curaçao</option><option value="Cyprus">Cyprus</option><option value="Czech Republic">Czech Republic</option><option value="Denmark">Denmark</option><option value="Djibouti">Djibouti</option><option value="Dominica">Dominica</option><option value="Dominican Republic">Dominican Republic</option><option value="East Timor">East Timor</option><option value="Ecuador">Ecuador</option><option value="Egypt">Egypt</option><option value="El Salvador">El Salvador</option><option value="Equatorial Guinea">Equatorial Guinea</option><option value="Eritrea">Eritrea</option><option value="Estonia">Estonia</option><option value="Ethiopia">Ethiopia</option><option value="Faroe Islands">Faroe Islands</option><option value="Fiji">Fiji</option><option value="Finland">Finland</option><option value="France">France</option><option value="French Polynesia">French Polynesia</option><option value="Gabon">Gabon</option><option value="Gambia">Gambia</option><option value="Georgia">Georgia</option><option value="Germany">Germany</option><option value="Ghana">Ghana</option><option value="Greece">Greece</option><option value="Greenland">Greenland</option><option value="Grenada">Grenada</option><option value="Guam">Guam</option><option value="Guatemala">Guatemala</option><option value="Guinea">Guinea</option><option value="Guinea-Bissau">Guinea-Bissau</option><option value="Guyana">Guyana</option><option value="Haiti">Haiti</option><option value="Honduras">Honduras</option><option value="Hong Kong">Hong Kong</option><option value="Hungary">Hungary</option><option value="Iceland">Iceland</option><option value="India">India</option><option value="Indonesia">Indonesia</option><option value="Iran">Iran</option><option value="Iraq">Iraq</option><option value="Ireland">Ireland</option><option value="Israel">Israel</option><option value="Italy">Italy</option><option value="Jamaica">Jamaica</option><option value="Japan">Japan</option><option value="Jordan">Jordan</option><option value="Kazakhstan">Kazakhstan</option><option value="Kenya">Kenya</option><option value="Kiribati">Kiribati</option><option value="North Korea">North Korea</option><option value="South Korea">South Korea</option><option value="Kosovo">Kosovo</option><option value="Kuwait">Kuwait</option><option value="Kyrgyzstan">Kyrgyzstan</option><option value="Laos">Laos</option><option value="Latvia">Latvia</option><option value="Lebanon">Lebanon</option><option value="Lesotho">Lesotho</option><option value="Liberia">Liberia</option><option value="Libya">Libya</option><option value="Liechtenstein">Liechtenstein</option><option value="Lithuania">Lithuania</option><option value="Luxembourg">Luxembourg</option><option value="Macedonia">Macedonia</option><option value="Madagascar">Madagascar</option><option value="Malawi">Malawi</option><option value="Malaysia">Malaysia</option><option value="Maldives">Maldives</option><option value="Mali">Mali</option><option value="Malta">Malta</option><option value="Marshall Islands">Marshall Islands</option><option value="Mauritania">Mauritania</option><option value="Mauritius">Mauritius</option><option value="Mexico">Mexico</option><option value="Micronesia">Micronesia</option><option value="Moldova">Moldova</option><option value="Monaco">Monaco</option><option value="Mongolia">Mongolia</option><option value="Montenegro">Montenegro</option><option value="Morocco">Morocco</option><option value="Mozambique">Mozambique</option><option value="Myanmar">Myanmar</option><option value="Namibia">Namibia</option><option value="Nauru">Nauru</option><option value="Nepal">Nepal</option><option value="Netherlands">Netherlands</option><option value="New Zealand">New Zealand</option><option value="Nicaragua">Nicaragua</option><option value="Niger">Niger</option><option value="Nigeria">Nigeria</option><option value="Northern Mariana Islands">Northern Mariana Islands</option><option value="Norway">Norway</option><option value="Oman">Oman</option><option value="Pakistan">Pakistan</option><option value="Palau">Palau</option><option value="Palestine, State of">Palestine, State of</option><option value="Panama">Panama</option><option value="Papua New Guinea">Papua New Guinea</option><option value="Paraguay">Paraguay</option><option value="Peru">Peru</option><option value="Philippines">Philippines</option><option value="Poland">Poland</option><option value="Portugal">Portugal</option><option value="Puerto Rico">Puerto Rico</option><option value="Qatar">Qatar</option><option value="Romania">Romania</option><option value="Russia">Russia</option><option value="Rwanda">Rwanda</option><option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option><option value="Saint Lucia">Saint Lucia</option><option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option><option value="Samoa">Samoa</option><option value="San Marino">San Marino</option><option value="Sao Tome and Principe">Sao Tome and Principe</option><option value="Saudi Arabia">Saudi Arabia</option><option value="Senegal">Senegal</option><option value="Serbia">Serbia</option><option value="Seychelles">Seychelles</option><option value="Sierra Leone">Sierra Leone</option><option value="Singapore">Singapore</option><option value="Sint Maarten">Sint Maarten</option><option value="Slovakia">Slovakia</option><option value="Slovenia">Slovenia</option><option value="Solomon Islands">Solomon Islands</option><option value="Somalia">Somalia</option><option value="South Africa">South Africa</option><option value="Spain">Spain</option><option value="Sri Lanka">Sri Lanka</option><option value="Sudan">Sudan</option><option value="Sudan, South">Sudan, South</option><option value="Suriname">Suriname</option><option value="Swaziland">Swaziland</option><option value="Sweden">Sweden</option><option value="Switzerland">Switzerland</option><option value="Syria">Syria</option><option value="Taiwan">Taiwan</option><option value="Tajikistan">Tajikistan</option><option value="Tanzania">Tanzania</option><option value="Thailand">Thailand</option><option value="Togo">Togo</option><option value="Tonga">Tonga</option><option value="Trinidad and Tobago">Trinidad and Tobago</option><option value="Tunisia">Tunisia</option><option value="Turkey">Turkey</option><option value="Turkmenistan">Turkmenistan</option><option value="Tuvalu">Tuvalu</option><option value="Uganda">Uganda</option><option value="Ukraine">Ukraine</option><option value="United Arab Emirates">United Arab Emirates</option><option value="United Kingdom">United Kingdom</option><option value="United States">United States</option><option value="Uruguay">Uruguay</option><option value="Uzbekistan">Uzbekistan</option><option value="Vanuatu">Vanuatu</option><option value="Vatican City">Vatican City</option><option value="Venezuela">Venezuela</option><option value="Vietnam">Vietnam</option><option value="Virgin Islands, British">Virgin Islands, British</option><option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option><option value="Yemen">Yemen</option><option value="Zambia">Zambia</option><option value="Zimbabwe">Zimbabwe</option>
                            </select>
                        </div>


                    </div>
                    </>
            </form>
        </section>
    )
}

export default RequestOrder