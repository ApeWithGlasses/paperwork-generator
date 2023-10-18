import { useState, useEffect, ChangeEvent } from "react";

import moment from "moment";

moment.defineLocale('es', {
    months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
    monthsShort: 'Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.'.split('_'),
    weekdays: 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado'.split('_'),
    weekdaysShort: 'Dom._Lun._Mar._Mier._Jue._Vier._Sab.'.split('_'),
    weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_')
});

import Swal from "sweetalert2";

import Navbar from "../components/Navbar"

const Incidents = () => {

    const copyCode = () => {
        const code = document.querySelector('.bbcode') as HTMLDivElement;
        const textArea = document.createElement('textarea');
        textArea.value = code.innerText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Texto copiado correctamente',
            showConfirmButton: false,
            timer: 1500
        });
    }

    const copyTitle = () => {
        const title = document.querySelector('.bbcode--title') as HTMLDivElement;
        const textArea = document.createElement('textarea');
        textArea.value = title.innerText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Texto copiado correctamente',
            showConfirmButton: false,
            timer: 1500
        });
    }

    const [textareas, setTextareas] = useState(['', '']);

    const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>, index: number) => {
        const newTextareas = [...textareas];
        newTextareas[index] = e.target.value;
        setTextareas(newTextareas);
        e.target.style.height = 'auto';
        e.target.style.height = `${Math.max(e.target.scrollHeight, 20)}px`;
    };

    // Creation Date
    const creationDate = moment().format('DD-MM-YYYY');

    // Supervisor name
    const [supervisor, setSupervisor] = useState('');

    // Basic Information
    const [adultsArrested, setAdultsArrested] = useState(0);
    const [classification, setClassification] = useState('');
    const [incidentDate, setIncidentDate] = useState('');
    const [incidentAddress, setIncidentAddress] = useState('');
    const [ dateOfIncident, setDateOfIncident ] = useState('');
    const [bussinesName, setBussinesName] = useState('');

    // Register One
    const [codeRegisterOne, setCodeRegisterOne] = useState('');
    const [lastNameOne, setLastNameOne] = useState('');
    const [firstNameOne, setFirstNameOne] = useState('');
    const [genderOne, setGenderOne] = useState('');
    const [ageOne, setAgeOne] = useState(0);
    const [addressOne, setAddressOne] = useState('');
    const [victimOne, setVictimOne] = useState('');

    // Register Two
    const [codeRegisterTwo, setCodeRegisterTwo] = useState('');
    const [lastNameTwo, setLastNameTwo] = useState('');
    const [firstNameTwo, setFirstNameTwo] = useState('');
    const [genderTwo, setGenderTwo] = useState('');
    const [ageTwo, setAgeTwo] = useState(0);
    const [addressTwo, setAddressTwo] = useState('');
    const [victimTwo, setVictimTwo] = useState('');

    // Register Three
    const [codeRegisterThree, setCodeRegisterThree] = useState('');
    const [lastNameThree, setLastNameThree] = useState('');
    const [firstNameThree, setFirstNameThree] = useState('');
    const [genderThree, setGenderThree] = useState('');
    const [ageThree, setAgeThree] = useState(0);
    const [addressThree, setAddressThree] = useState('');
    const [chargesThree, setChargesThree] = useState('');
    const [bookingNumberThree, setBookingNumberThree] = useState('');

    // Register Four
    const [codeRegisterFour, setCodeRegisterFour] = useState('');
    const [lastNameFour, setLastNameFour] = useState('');
    const [firstNameFour, setFirstNameFour] = useState('');
    const [genderFour, setGenderFour] = useState('');
    const [ageFour, setAgeFour] = useState(0);
    const [addressFour, setAddressFour] = useState('');
    const [chargesFour, setChargesFour] = useState('');
    const [bookingNumberFour, setBookingNumberFour] = useState('');

    // Employee
    const [employeeName, setEmployeeName] = useState('');
    const [employeeNumber, setEmployeeNumber] = useState('');
    const [carOrUnit, setCarOrUnit] = useState('');

    // Vehicle One
    const [plateNumberOne, setPlateNumberOne] = useState('');
    const [modelVehicleOne, setModelVehicleOne] = useState('');
    const [colorVehicleOne, setColorVehicleOne] = useState('');
    const [registeredOwnerVehicleOne, setRegisteredOwnerVehicleOne] = useState('');
    const [statusVehicleOne, setStatusVehicleOne] = useState('');
    const [damagesVehicleOne, setDamagesVehicleOne] = useState('');

    // Vehicle Two
    const [plateNumberTwo, setPlateNumberTwo] = useState('');
    const [modelVehicleTwo, setModelVehicleTwo] = useState('');
    const [colorVehicleTwo, setColorVehicleTwo] = useState('');
    const [registeredOwnerVehicleTwo, setRegisteredOwnerVehicleTwo] = useState('');
    const [statusVehicleTwo, setStatusVehicleTwo] = useState('');
    const [damagesVehicleTwo, setDamagesVehicleTwo] = useState('');

    useEffect(() => {
        let incidentDateFormatted = moment(incidentDate).format("DD-MM-YY, HH:mm");
        let date = moment(incidentDate);
        let day = date.format('dddd');
        let formattedDate = incidentDateFormatted + ", " + day;
        setDateOfIncident(formattedDate.toString());
    },[incidentDate]);

  return (
    <>
        <Navbar/>
        <section className="container">
            <section className="converter--container">
                <div className="form">
                    <form>
                        <h4>Debe ingresar el nombre del supervisor acá</h4>
                        <span className="warning">Obligatorio</span>
                        <input type="text" value={supervisor} onChange={(e) => setSupervisor(e.target.value)}/>

                        <h4>Formulario</h4>
                        <span className="warning">Deje en blanco los espacios que no son aplicables.</span>

                        <div className="basic--information">
                            <label htmlFor="arrestedAdults">Adultos Arrestados</label>
                            <input type="number" min={0} value={adultsArrested} onChange={(e) => setAdultsArrested(e.target.valueAsNumber)}/>

                            <label htmlFor="clasification">Clasificación</label>
                            <input type="text" value={classification} onChange={(e) => setClassification(e.target.value)}/>

                            <label htmlFor="incidentDate">Fecha/Hora/Día de lo ocurrido</label>
                            <input type="datetime-local" value={incidentDate} onChange={(e) => setIncidentDate(e.target.value)}/>

                            <label htmlFor="incidentAddress">Dirección de lo ocurrido</label>
                            <input type="text" value={incidentAddress} onChange={(e) => setIncidentAddress(e.target.value)}/>

                            <label htmlFor="bussinesName">Nombre del lugar(Si aplica)</label>
                            <input type="text" value={bussinesName} onChange={(e) => setBussinesName(e.target.value)}/>
                        </div>
                        
                        <hr />

                        <h4>Víctima/Testigo/Informante 1</h4>
                        <span className="warning">Rellenar solo si aplica</span>

                        <div className="registerOne">
                            <label htmlFor="codeRegisterOne">Código</label>
                            <select name="codeRegisterOne" id="codeRegisterOne" defaultValue={codeRegisterOne} onChange={(e) => setCodeRegisterOne(e.target.value)}>
                                <option disabled selected></option>
                                <option value="V">V - Víctima</option>
                                <option value="T">T - Testigo</option>
                                <option value="I">I - Informante</option>
                            </select>
                            
                            <label htmlFor="lastNameOne">Apellido</label>
                            <input type="text" value={lastNameOne} onChange={(e) => setLastNameOne(e.target.value)}/>

                            <label htmlFor="firstNameOne">Nombre</label>
                            <input type="text" value={firstNameOne} onChange={(e) => setFirstNameOne(e.target.value)}/>

                            <label htmlFor="genderOne">Sexo</label>
                            <select name="genderOne" id="genderOne" defaultValue={genderOne} onChange={(e) => setGenderOne(e.target.value)}>
                                <option disabled selected></option>
                                <option value="M">Masculino</option>
                                <option value="F">Femenino</option>
                            </select>

                            <label htmlFor="ageOne">Edad</label>
                            <input type="number" value={ageOne} onChange={(e) => setAgeOne(e.target.valueAsNumber)}/>

                            <label htmlFor="addressOne">Dirección de residencia</label>
                            <input type="text" value={addressOne} onChange={(e) => setAddressOne(e.target.value)}/>

                            <label htmlFor="victimOne">Victima de las ofensas</label>
                            <input type="text" placeholder="Homicidio - Robo - Etc" value={victimOne} onChange={(e) => setVictimOne(e.target.value)}/>
                        </div>

                        <h4>Víctima/Testigo/Informante 2</h4>
                        <span className="warning">Rellenar solo si aplica</span>

                        <div className="registerTwo">
                            <label htmlFor="codeRegisterTwo">Código</label>
                            <select name="codeRegisterTwo" id="codeRegisterTwo" defaultValue={codeRegisterTwo} onChange={(e) => setCodeRegisterTwo(e.target.value)}>
                                <option disabled selected></option>
                                <option value="V">V - Víctima</option>
                                <option value="T">T - Testigo</option>
                                <option value="I">I - Informante</option>
                            </select>
                            
                            <label htmlFor="lastNameTwo">Apellido</label>
                            <input type="text" value={lastNameTwo} onChange={(e) => setLastNameTwo(e.target.value)}/>

                            <label htmlFor="firstNameTwo">Nombre</label>
                            <input type="text" value={firstNameTwo} onChange={(e) => setFirstNameTwo(e.target.value)}/>

                            <label htmlFor="genderTwo">Sexo</label>
                            <select name="genderTwo" id="genderTwo" defaultValue={genderTwo} onChange={(e) => setGenderTwo(e.target.value)}>
                                <option disabled selected></option>
                                <option value="M">Masculino</option>
                                <option value="F">Femenino</option>
                            </select>

                            <label htmlFor="ageTwo">Edad</label>
                            <input type="number" value={ageTwo} onChange={(e) => setAgeTwo(e.target.valueAsNumber)}/>

                            <label htmlFor="addressTwo">Dirección de residencia</label>
                            <input type="text" value={addressTwo} onChange={(e) => setAddressTwo(e.target.value)}/>

                            <label htmlFor="victimTwo">Victima de las ofensas</label>
                            <input type="text" placeholder="Homicidio - Robo - Etc" value={victimTwo} onChange={(e) => setVictimTwo(e.target.value)}/>
                        </div>

                        <hr />

                        <h4>Sospechoso/Paciente 1</h4>
                        <span className="warning">Rellenar solo si aplica</span>

                        <div className="registerThree">
                            <label htmlFor="codeRegisterThree">Código</label>
                            <select name="codeRegisterThree" id="codeRegisterThree" defaultValue={codeRegisterThree} onChange={(e) => setCodeRegisterThree(e.target.value)}>
                                <option disabled selected></option>
                                <option value="S">S - Sospechoso</option>
                                <option value="P">P - Paciente</option>
                            </select>
                            
                            <label htmlFor="lastNameThree">Apellido</label>
                            <input type="text" value={lastNameThree} onChange={(e) => setLastNameThree(e.target.value)}/>

                            <label htmlFor="firstNameThree">Nombre</label>
                            <input type="text" value={firstNameThree} onChange={(e) => setFirstNameThree(e.target.value)}/>

                            <label htmlFor="genderThree">Sexo</label>
                            <select name="genderThree" id="genderThree" defaultValue={genderThree} onChange={(e) => setGenderThree(e.target.value)}>
                                <option disabled selected></option>
                                <option value="M">Masculino</option>
                                <option value="F">Femenino</option>
                            </select>

                            <label htmlFor="ageThree">Edad</label>
                            <input type="number" value={ageThree} onChange={(e) => setAgeThree(e.target.valueAsNumber)}/>

                            <label htmlFor="addressThree">Dirección de residencia</label>
                            <input type="text" value={addressThree} onChange={(e) => setAddressThree(e.target.value)}/>

                            <label htmlFor="chargesThree">Cargos</label>
                            <input type="text" value={chargesThree} onChange={(e) => setChargesThree(e.target.value)}/>

                            <label htmlFor="bookingNumberThree">Número de Booking</label>
                            <input type="text" value={bookingNumberThree} onChange={(e) => setBookingNumberThree(e.target.value)}/>
                        </div>

                        <h4>Sospechoso/Paciente 2</h4>
                        <span className="warning">Rellenar solo si aplica</span>

                        <div className="registerFour">
                            <label htmlFor="codeRegisterFour">Código</label>
                            <select name="codeRegisterFour" id="codeRegisterFour" defaultValue={codeRegisterFour} onChange={(e) => setCodeRegisterFour(e.target.value)}>
                                <option disabled selected></option>
                                <option value="S">S - Sospechoso</option>
                                <option value="P">P - Paciente</option>
                            </select>
                            
                            <label htmlFor="lastNameFour">Apellido</label>
                            <input type="text" value={lastNameFour} onChange={(e) => setLastNameFour(e.target.value)}/>

                            <label htmlFor="firstNameFour">Nombre</label>
                            <input type="text" value={firstNameFour} onChange={(e) => setFirstNameFour(e.target.value)}/>

                            <label htmlFor="genderFour">Sexo</label>
                            <select name="genderFour" id="genderFour" defaultValue={genderFour} onChange={(e) => setGenderFour(e.target.value)}>
                                <option disabled selected></option>
                                <option value="M">Masculino</option>
                                <option value="F">Femenino</option>
                            </select>

                            <label htmlFor="ageFour">Edad</label>
                            <input type="number" value={ageFour} onChange={(e) => setAgeFour(e.target.valueAsNumber)}/>

                            <label htmlFor="addressFour">Dirección de residencia</label>
                            <input type="text" value={addressFour} onChange={(e) => setAddressFour(e.target.value)}/>

                            <label htmlFor="chargesFour">Cargos</label>
                            <input type="text" value={chargesFour} onChange={(e) => setChargesFour(e.target.value)}/>

                            <label htmlFor="bookingNumberFour">Número de Booking</label>
                            <input type="text" value={bookingNumberFour} onChange={(e) => setBookingNumberFour(e.target.value)}/>
                        </div>

                        <hr />

                        <h4>Información del empleado</h4>
                        <span className="warning">Obligatorio</span>

                        <div className="employee">
                            <label htmlFor="employeeName">Nombre del empleado</label>
                            <input type="text" value={employeeName} onChange={(e) => setEmployeeName(e.target.value)}/>

                            <label htmlFor="employeeNumber">Número de empleado</label>
                            <input type="text" value={employeeNumber} onChange={(e) => setEmployeeNumber(e.target.value)}/>

                            <label htmlFor="carOrUnit"># Unidad/Carro</label>
                            <input type="text" value={carOrUnit} onChange={(e) => setCarOrUnit(e.target.value)}/>
                        </div>

                        <hr />
                        
                        <h4>Vehículo 1</h4>
                        <span className="warning">Rellenar solo si aplica</span>

                        <div className="vehicle--one">
                            <label htmlFor="plateNumberOne">Número de matrícula</label>
                            <input type="text" value={plateNumberOne} onChange={(e) => setPlateNumberOne(e.target.value)}/>

                            <label htmlFor="modelVehicleOne">Modelo</label>
                            <input type="text" value={modelVehicleOne} onChange={(e) => setModelVehicleOne(e.target.value)}/>

                            <label htmlFor="colorVehicleOne">Color</label>
                            <input type="text" value={colorVehicleOne} onChange={(e) => setColorVehicleOne(e.target.value)}/>

                            <label htmlFor="registeredOwnerVehicleOne">Propietario Registrado</label>
                            <input type="text" value={registeredOwnerVehicleOne} onChange={(e) => setRegisteredOwnerVehicleOne(e.target.value)}/>

                            <label htmlFor="statusVehicleOne">Estado</label>
                            <input type="text" value={statusVehicleOne} onChange={(e) => setStatusVehicleOne(e.target.value)}/>

                            <label htmlFor="damagesVehicleOne">Descripción de los daños</label>
                            <textarea name="damagesVehicleOne" id="damagesVehicleOne" value={damagesVehicleOne} onChange={(e) => setDamagesVehicleOne(e.target.value)}></textarea>
                        </div>
                        
                        <h4>Vehículo 2</h4>
                        <span className="warning">Rellenar solo si aplica</span>

                        <div className="vehicle--two">
                            <label htmlFor="plateNumberTwo">Número de matrícula</label>
                            <input type="text" value={plateNumberTwo} onChange={(e) => setPlateNumberTwo(e.target.value)}/>

                            <label htmlFor="modelVehicleTwo">Modelo</label>
                            <input type="text" value={modelVehicleTwo} onChange={(e) => setModelVehicleTwo(e.target.value)}/>

                            <label htmlFor="colorVehicleTwo">Color</label>
                            <input type="text" value={colorVehicleTwo} onChange={(e) => setColorVehicleTwo(e.target.value)}/>

                            <label htmlFor="registeredOwnerVehicleTwo">Propietario Registrado</label>
                            <input type="text" value={registeredOwnerVehicleTwo} onChange={(e) => setRegisteredOwnerVehicleTwo(e.target.value)}/>

                            <label htmlFor="statusVehicleTwo">Estado</label>
                            <input type="text" value={statusVehicleTwo} onChange={(e) => setStatusVehicleTwo(e.target.value)}/>

                            <label htmlFor="damagesVehicleTwo">Descripción de los daños</label>
                            <textarea name="damagesVehicleTwo" id="damagesVehicleTwo" value={damagesVehicleTwo} onChange={(e) => setDamagesVehicleTwo(e.target.value)}></textarea>
                        </div>

                        <hr />
                        
                        <div className="incident--narrative">
                            <label htmlFor="incidentNarrative">Narrativa del incidente</label>
                            <textarea name="incidentNarrative" id="incidentNarrative" onChange={(e) => handleTextChange(e, 0)}></textarea>
                        </div>

                        <div className="evidence">
                            <label htmlFor="evidence">Sección de evidencias</label>
                            <textarea name="evidence" id="evidence" onChange={(e) => handleTextChange(e, 1)}></textarea>
                        </div>
                    </form>
                </div>
                <div className="code--section">
                    <button className="primary--btn" onClick={copyTitle}>Copiar Título</button>
                    <button className="primary--btn" onClick={copyCode}>Copiar Código</button>
                    <div className="bbcode--title">{`[IRE#${employeeNumber}] ${creationDate},${supervisor}`}</div>
                    <div className="bbcode">
                        [Textarea]<br />
                        [divbox=#3D6641]<br />
                        [br]<br />
                        [color=#FFFFFF]<br />
                        [center]COUNTY OF LOS SANTOS SHERIFF'S DEPARTMENT[/center]<br />
                        [align=center][b]REPORTE DE INCIDENTE[/b][/align]<br />
                        [right][size=70][b]FECHA:[/b][/size][color=transparent]--[/color]{ creationDate }[/right]<br />
                        [/color]<br />
                        [/divbox]<br />
                        [size=70][color=transparent]---[/color]A TRADITION OF SERVICE[/size]<br />
                        [br]<br />
                        [Textarea]<br />
                        [size=85][b]# ADULTOS ARRESTADOS:[/b][/size] { adultsArrested }<br />
                        [size=85][b]CLASIFICACIÓN:[/b][/size] { classification }<br />
                        [size=85][b]FECHA/HORA/DÍA DE LO OCURRIDO:[/b][/size] { dateOfIncident }<br />
                        [size=85][b]DIRECCIÓN DE LO OCURRIDO:[/b][/size] { incidentAddress }<br />
                        [size=85][b]NOMBRE DEL LUGAR (SI APLICA):[/b][/size] { bussinesName }<br />
                        [/Textarea]<br />
                        [br]<br />
                        [b][size=75]CÓDIGO: [color=transparent]--[/color] V - VÍCTIMA [color=transparent]--[/color] ° [color=transparent]--[/color] T - TESTIGO [color=transparent]--[/color] ° [color=transparent]--[/color] I - INFORMANTE[/size][/b]<br />
                        [Textarea]<br />
                        [size=85][b]CÓDIGO:[/b][/size] { codeRegisterOne }<br />
                        [size=85][b]APELLIDO:[/b][/size] { lastNameOne } [color=transparent]--[/color] [size=85][b]NOMBRE:[/b][/size] { firstNameOne } [color=transparent]--[/color] [size=85][b]SEXO:[/b][/size] { genderOne } [color=transparent]--[/color] [size=85][b]EDAD:[/b][/size] { ageOne }<br />
                        [size=85][b]DIRECCIÓN DE RESIDENCIA:[/b][/size] { addressOne }<br />
                        [size=85][b]VÍCTIMA DE LAS OFENSAS:[/b][/size] { victimOne } <br />
                        [/Textarea]<br />
                        [Textarea]<br />
                        [size=85][b]CÓDIGO:[/b][/size] { codeRegisterTwo } <br />
                        [size=85][b]APELLIDO:[/b][/size] { lastNameTwo } [color=transparent]--[/color] [size=85][b]NOMBRE:[/b][/size] { firstNameTwo } [color=transparent]--[/color] [size=85][b]SEXO:[/b][/size] { genderTwo } [color=transparent]--[/color] [size=85][b]EDAD:[/b][/size] { ageTwo }<br />
                        [size=85][b]DIRECCIÓN DE RESIDENCIA:[/b][/size] { addressTwo }<br />
                        [size=85][b]VÍCTIMA DE LAS OFENSAS:[/b][/size] { victimTwo }<br />
                        [/Textarea]<br />
                        [br]<br />
                        [b][size=75]CÓDIGO: [color=transparent]--[/color] S - SOSPECHOSO [color=transparent]--[/color] ° [color=transparent]--[/color] P - PACIENTE [color=transparent]--[/color][/size][/b]<br />
                        [Textarea]<br />
                        [size=85][b]CÓDIGO:[/b][/size] { codeRegisterThree }<br />
                        [size=85][b]APELLIDO:[/b][/size] { lastNameThree } [color=transparent]--[/color] [size=85][b]NOMBRE:[/b][/size] { firstNameThree } [color=transparent]--[/color] [size=85][b]SEXO:[/b][/size] { genderThree } [color=transparent]--[/color] [size=85][b]EDAD:[/b][/size] { ageThree }<br />
                        [size=85][b]DIRECCIÓN DE RESIDENCIA:[/b][/size] { addressThree }<br />
                        [hr][/hr]<br />
                        [size=85][b]CARGOS:[/b][/size] { chargesThree } [color=transparent]--[/color] [size=85][b]NÚMERO DE BOOKING:[/b][/size] { bookingNumberThree }<br />
                        [/Textarea]<br />
                        [Textarea]<br />
                        [size=85][b]CÓDIGO:[/b][/size] { codeRegisterFour }<br />
                        [size=85][b]APELLIDO:[/b][/size] { lastNameFour } [color=transparent]--[/color] [size=85][b]NOMBRE:[/b][/size] { firstNameFour } [color=transparent]--[/color] [size=85][b]SEXO:[/b][/size] { genderFour } [color=transparent]--[/color] [size=85][b]EDAD:[/b][/size] { ageFour }<br />
                        [size=85][b]DIRECCIÓN DE RESIDENCIA:[/b][/size] { addressFour }<br />
                        [hr][/hr]<br />
                        [size=85][b]CARGOS:[/b][/size] { chargesFour } [color=transparent]--[/color] [size=85][b]NÚMERO DE BOOKING:[/b][/size] { bookingNumberFour }<br />
                        [/Textarea]<br />
                        [br]<br />
                        [Textarea]<br />
                        [size=85][b]POR EL EMPLEADO:[/b][/size] { employeeName } [color=transparent]--[/color] [size=85][b]NÚMERO DE EMPLEADO:[/b][/size] { employeeNumber } [color=transparent]--[/color] [size=85][b]UNIDAD/CARRO #:[/b][/size] { carOrUnit }<br />
                        [/Textarea]<br />
                        [br]<br />
                        [Textarea]<br />
                        [size=85][b]VEHÍCULO[/b][/size]<br />
                        [hr][/hr]<br />
                        [size=85][b]NÚMERO DE MATRÍCULA:[/b][/size] { plateNumberOne } [color=transparent]--[/color] [size=85][b]MODELO:[/b][/size] { modelVehicleOne } [color=transparent]--[/color] [size=85][b]COLOR:[/b][/size] { colorVehicleOne } [color=transparent]--[/color] [size=85][b]PROPIETARIO REGISTRADO:[/b][/size] { registeredOwnerVehicleOne }<br />
                        [size=85][b]ESTADO:[/b][/size] { statusVehicleOne }<br />
                        [size=85][b]DESCRIPCIÓN DE DAÑOS:[/b][/size] { damagesVehicleOne }<br />
                        [/Textarea]<br />
                        [Textarea]<br />
                        [size=85][b]VEHÍCULO[/b][/size]<br />
                        [hr][/hr]<br />
                        [size=85][b]NÚMERO DE MATRÍCULA:[/b][/size] { plateNumberTwo } [color=transparent]--[/color] [size=85][b]MODELO:[/b][/size] { modelVehicleTwo } [color=transparent]--[/color] [size=85][b]COLOR:[/b][/size] { colorVehicleTwo } [color=transparent]--[/color] [size=85][b]PROPIETARIO REGISTRADO:[/b][/size] { registeredOwnerVehicleTwo }<br />
                        [size=85][b]ESTADO:[/b][/size] { statusVehicleTwo }<br />
                        [size=85][b]DESCRIPCIÓN DE DAÑOS:[/b][/size] { damagesVehicleTwo }<br />
                        [/Textarea]<br />
                        [br]<br />
                        [Textareagrey]NARRATIVA DEL INCIDENTE[/Textareagrey]<br />
                        [Textarea]{ textareas[0] }[/Textarea]<br />
                        [br]<br />
                        [Textareagrey]SECCIÓN DE EVIDENCIAS[/Textareagrey]<br />
                        [Textarea]{ textareas[1] }[/Textarea]<br />
                    </div>
                </div>
            </section>
        </section>
    </>
  )
}

export default Incidents