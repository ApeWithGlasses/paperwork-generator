import { useState, ChangeEvent } from "react"

import Swal from "sweetalert2"

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

    const [textareas, setTextareas] = useState(['', '']);

    const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>, index: number) => {
        const newTextareas = [...textareas];
        newTextareas[index] = e.target.value;
        setTextareas(newTextareas);
        e.target.style.height = 'auto';
        e.target.style.height = `${Math.max(e.target.scrollHeight, 20)}px`;
    };

    // Basic Information
    const [adultsArrested, setAdultsArrested] = useState(0);
    const [classification, setClassification] = useState('');
    const [incidentDate, setIncidentDate] = useState('');
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

    // Incident Narrative
    const [incidentNarrative, setIncidentNarrative] = useState('');

    // Evidence
    const [evidence, setEvidence] = useState('');

  return (
    <>
        <Navbar/>
        <section className="container">
            <section className="converter--container">
                <div className="form">
                    <form>
                        <div className="basic--information">
                            <label htmlFor="arrestedAdults">Adultos Arrestados</label>
                            <input type="number" min={0} value={adultsArrested} onChange={(e) => setAdultsArrested(e.target.valueAsNumber)}/>

                            <label htmlFor="clasification">Clasificación</label>
                            <input type="text" value={classification} onChange={(e) => setClassification(e.target.value)}/>

                            <label htmlFor="incidentDate">Fecha/Hora/Día de lo ocurrido</label>
                            <input type="text" value={incidentDate} onChange={(e) => setIncidentDate(e.target.value)}/>

                            <label htmlFor="bussinesName">Nombre del lugar(Si aplica)</label>
                            <input type="text" value={bussinesName} onChange={(e) => setBussinesName(e.target.value)}/>
                        </div>
                        
                        <hr />

                        <span>Rellenar solo si aplica</span>

                        <div className="registerOne">
                            <label htmlFor="codeRegisterOne">Código</label>
                            <select name="codeRegisterOne" id="codeRegisterOne" value={codeRegisterOne} onChange={(e) => setCodeRegisterOne(e.target.value)}>
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
                            <select name="genderOne" id="genderOne" value={genderOne} onChange={(e) => setGenderOne(e.target.value)}>
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

                        <div className="registerTwo">
                            <label htmlFor="codeRegisterTwo">Código</label>
                            <select name="codeRegisterTwo" id="codeRegisterTwo" value={codeRegisterTwo} onChange={(e) => setCodeRegisterTwo(e.target.value)}>
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
                            <select name="genderTwo" id="genderTwo" value={genderTwo} onChange={(e) => setGenderTwo(e.target.value)}>
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

                        // TODO: Add the rest of the registers
                        <div className="registerThree">
                            <label htmlFor="codeRegisterThree">Código</label>
                            <select name="codeRegisterThree" id="codeRegisterThree">
                                <option disabled selected></option>
                                <option value="S">S - Sospechoso</option>
                                <option value="P">P - Paciente</option>
                            </select>
                            
                            <label htmlFor="lastNameThree">Apellido</label>
                            <input type="text" />

                            <label htmlFor="firstNameThree">Nombre</label>
                            <input type="text" />

                            <label htmlFor="genderThree">Sexo</label>
                            <select name="genderThree" id="genderThree">
                                <option value="M">Masculino</option>
                                <option value="F">Femenino</option>
                            </select>

                            <label htmlFor="ageThree">Edad</label>
                            <input type="number" />

                            <label htmlFor="addressThree">Dirección de residencia</label>
                            <input type="text" />

                            <label htmlFor="chargesThree">Cargos</label>
                            <input type="text" />

                            <label htmlFor="bookingNumberThree">Número de Booking</label>
                            <input type="text" />
                        </div>

                        <div className="registerFour">
                            <label htmlFor="codeRegisterFour">Código</label>
                            <select name="codeRegisterFour" id="codeRegisterFour">
                                <option disabled selected></option>
                                <option value="S">S - Sospechoso</option>
                                <option value="P">P - Paciente</option>
                            </select>
                            
                            <label htmlFor="lastNameFour">Apellido</label>
                            <input type="text" />

                            <label htmlFor="firstNameFour">Nombre</label>
                            <input type="text" />

                            <label htmlFor="genderFour">Sexo</label>
                            <select name="genderFour" id="genderFour">
                                <option value="M">Masculino</option>
                                <option value="F">Femenino</option>
                            </select>

                            <label htmlFor="ageFour">Edad</label>
                            <input type="number" />

                            <label htmlFor="addressFour">Dirección de residencia</label>
                            <input type="text" />

                            <label htmlFor="chargesFour">Cargos</label>
                            <input type="text" />

                            <label htmlFor="bookingNumberFour">Número de Booking</label>
                            <input type="text" />
                        </div>

                        <div className="employee">
                            <label htmlFor="employeeName">Nombre del empleado</label>
                            <input type="text" />

                            <label htmlFor="employeeNumber">Número de empleado</label>
                            <input type="text" />

                            <label htmlFor="carOrUnit"># Unidad/Carro</label>
                            <input type="text" />
                        </div>

                        <div className="vehicle--one">
                            <label htmlFor="plateNumberOne">Número de matrícula</label>
                            <input type="text" />

                            <label htmlFor="modelVehicleOne">Modelo</label>
                            <input type="text" />

                            <label htmlFor="colorVehicleOne">Color</label>
                            <input type="text" />

                            <label htmlFor="registeredOwnerVehicleOne">Propietario Registrado</label>
                            <input type="text" />

                            <label htmlFor="statusVehicleOne">Estado</label>
                            <input type="text" />

                            <label htmlFor="damagesVehicleOne">Descripción de los daños</label>
                            <textarea name="damagesVehicleOne" id="damagesVehicleOne"></textarea>
                        </div>

                        <div className="vehicle--two">
                            <label htmlFor="plateNumberTwo">Número de matrícula</label>
                            <input type="text" />

                            <label htmlFor="modelVehicleTwo">Modelo</label>
                            <input type="text" />

                            <label htmlFor="colorVehicleTwo">Color</label>
                            <input type="text" />

                            <label htmlFor="registeredOwnerVehicleTwo">Propietario Registrado</label>
                            <input type="text" />

                            <label htmlFor="statusVehicleTwo">Estado</label>
                            <input type="text" />

                            <label htmlFor="damagesVehicleTwo">Descripción de los daños</label>
                            <textarea name="damagesVehicleTwo" id="damagesVehicleTwo"></textarea>
                        </div>
                        
                        <div className="incident--narrative">
                            <label htmlFor="incidentNarrative">Narrativa del incidente</label>
                            <textarea name="incidentNarrative" id="incidentNarrative" onChange={(e) => handleTextChange(e, 0)}>
                            </textarea>
                        </div>

                        <div className="evidence">
                            <label htmlFor="evidence">Sección de evidencias</label>
                            <textarea name="evidence" id="evidence" onChange={(e) => handleTextChange(e, 1)}>
                            </textarea>
                        </div>
                    </form>
                </div>
                <div className="code--section">
                    <button className="primary--btn">Copiar Título</button>
                    <button className="primary--btn" onClick={copyCode}>Copiar Código</button>
                    <div className="bbcode">
                        [Textarea]<br />
                        [divbox=#3D6641]<br />
                        [br]<br />
                        [color=#FFFFFF]<br />
                        [center]COUNTY OF LOS SANTOS SHERIFF'S DEPARTMENT[/center]<br />
                        [align=center][b]REPORTE DE INCIDENTE[/b][/align]<br />
                        [right][size=70][b]FECHA:[/b][/size][color=transparent]--[/color]10/17/2023[/right]<br />
                        [/color]<br />
                        [/divbox]<br />
                        [size=70][color=transparent]---[/color]A TRADITION OF SERVICE[/size]<br />
                        [br]<br />
                        [Textarea]<br />
                        [size=85][b]# ADULTOS ARRESTADOS:[/b][/size] 1<br />
                        [size=85][b]CLASIFICACIÓN:[/b][/size] Homicidio<br />
                        [size=85][b]FECHA/HORA/DÍA DE LO OCURRIDO:[/b][/size] 10-17-23, 1648, Martes<br />
                        [size=85][b]DIRECCIÓN DE LO OCURRIDO:[/b][/size] 2363 Vespucci Boulevard, SA 97321<br />
                        [size=85][b]NOMBRE DEL LUGAR (SI APLICA):[/b][/size] Bean Machine<br />
                        [/Textarea]<br />
                        [br]<br />
                        [b][size=75]CÓDIGO: [color=transparent]--[/color] V - VÍCTIMA [color=transparent]--[/color] ° [color=transparent]--[/color] T - TESTIGO [color=transparent]--[/color] ° [color=transparent]--[/color] I - INFORMANTE[/size][/b]<br />
                        [Textarea]<br />
                        [size=85][b]CÓDIGO:[/b][/size] V<br />
                        [size=85][b]APELLIDO:[/b][/size] Doe [color=transparent]--[/color] [size=85][b]NOMBRE:[/b][/size] John [color=transparent]--[/color] [size=85][b]SEXO:[/b][/size] Masculino [color=transparent]--[/color] [size=85][b]EDAD:[/b][/size] 37<br />
                        [size=85][b]DIRECCIÓN DE RESIDENCIA:[/b][/size] 4565 Mangellan Avenue<br />
                        [size=85][b]VÍCTIMA DE LAS OFENSAS:[/b][/size] Homicidio<br />
                        [/Textarea]<br />
                        [Textarea]<br />
                        [size=85][b]CÓDIGO:[/b][/size] V<br />
                        [size=85][b]APELLIDO:[/b][/size] Doe [color=transparent]--[/color] [size=85][b]NOMBRE:[/b][/size] John [color=transparent]--[/color] [size=85][b]SEXO:[/b][/size] Masculino [color=transparent]--[/color] [size=85][b]EDAD:[/b][/size] 37<br />
                        [size=85][b]DIRECCIÓN DE RESIDENCIA:[/b][/size] 4565 Mangellan Avenue<br />
                        [size=85][b]VÍCTIMA DE LAS OFENSAS:[/b][/size] Homicidio<br />
                        [/Textarea]<br />
                        [br]<br />
                        [b][size=75]CÓDIGO: [color=transparent]--[/color] S - SOSPECHOSO [color=transparent]--[/color] ° [color=transparent]--[/color] P - PACIENTE [color=transparent]--[/color][/size][/b]<br />
                        [Textarea]<br />
                        [size=85][b]CÓDIGO:[/b][/size] S<br />
                        [size=85][b]APELLIDO:[/b][/size] Doe [color=transparent]--[/color] [size=85][b]NOMBRE:[/b][/size] John [color=transparent]--[/color] [size=85][b]SEXO:[/b][/size] Masculino [color=transparent]--[/color] [size=85][b]EDAD:[/b][/size] 37<br />
                        [size=85][b]DIRECCIÓN DE RESIDENCIA:[/b][/size] 4565 Mangellan Avenue<br />
                        [hr][/hr]<br />
                        [size=85][b]CARGOS:[/b][/size] 187 PC [color=transparent]--[/color] [size=85][b]NÚMERO DE BOOKING:[/b][/size] 65415<br />
                        [/Textarea]<br />
                        [Textarea]<br />
                        [size=85][b]CÓDIGO:[/b][/size] S<br />
                        [size=85][b]APELLIDO:[/b][/size] Doe [color=transparent]--[/color] [size=85][b]NOMBRE:[/b][/size] John [color=transparent]--[/color] [size=85][b]SEXO:[/b][/size] Masculino [color=transparent]--[/color] [size=85][b]EDAD:[/b][/size] 37<br />
                        [size=85][b]DIRECCIÓN DE RESIDENCIA:[/b][/size] 4565 Mangellan Avenue<br />
                        [hr][/hr]<br />
                        [size=85][b]CARGOS:[/b][/size] 187 PC [color=transparent]--[/color] [size=85][b]NÚMERO DE BOOKING:[/b][/size] 65415<br />
                        [/Textarea]<br />
                        [br]<br />
                        [Textarea]<br />
                        [size=85][b]POR EL EMPLEADO:[/b][/size] Lopez, E. [color=transparent]--[/color] [size=85][b]NÚMERO DE EMPLEADO:[/b][/size] 51451 [color=transparent]--[/color] [size=85][b]UNIDAD/CARRO #:[/b][/size] 281A<br />
                        [/Textarea]<br />
                        [br]<br />
                        [Textarea]<br />
                        [size=85][b]VEHÍCULO[/b][/size]<br />
                        [hr][/hr]<br />
                        [size=85][b]NÚMERO DE MATRÍCULA:[/b][/size] 545ASD [color=transparent]--[/color] [size=85][b]MODELO:[/b][/size] Dinka Blista [color=transparent]--[/color] [size=85][b]COLOR:[/b][/size] Blanco [color=transparent]--[/color] [size=85][b]PROPIETARIO REGISTRADO:[/b][/size] John Doe<br />
                        [size=85][b]ESTADO:[/b][/size] Robado<br />
                        [size=85][b]DESCRIPCIÓN DE DAÑOS:[/b][/size] Daño en faro trasero.<br />
                        [/Textarea]<br />
                        [Textarea]<br />
                        [size=85][b]VEHÍCULO[/b][/size]<br />
                        [hr][/hr]<br />
                        [size=85][b]NÚMERO DE MATRÍCULA:[/b][/size] 545ASD [color=transparent]--[/color] [size=85][b]MODELO:[/b][/size] Dinka Blista [color=transparent]--[/color] [size=85][b]COLOR:[/b][/size] Blanco [color=transparent]--[/color] [size=85][b]PROPIETARIO REGISTRADO:[/b][/size] John Doe<br />
                        [size=85][b]ESTADO:[/b][/size] Robado<br />
                        [size=85][b]DESCRIPCIÓN DE DAÑOS:[/b][/size] Daño en faro trasero.<br />
                        [/Textarea]<br />
                        [br]<br />
                        [Textareagrey]NARRATIVA DEL INCIDENTE[/Textareagrey]<br />
                        [Textarea]Redactar acá[/Textarea]<br />
                        [br]<br />
                        [Textareagrey]SECCIÓN DE EVIDENCIAS[/Textareagrey]<br />
                        [Textarea]Adjunte sus evidencias acá[/Textarea]<br />
                    </div>
                </div>
            </section>
        </section>
    </>
  )
}

export default Incidents