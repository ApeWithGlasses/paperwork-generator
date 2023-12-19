import { ChangeEvent, useState } from "react";
import Navbar from "../components/Navbar"
import { copyCode } from "./utils/copyCode"
import { copyTitle } from "./utils/copyTitle"

import moment from "moment";

moment.defineLocale('es', {
    months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
    monthsShort: 'Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.'.split('_'),
    weekdays: 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado'.split('_'),
    weekdaysShort: 'Dom._Lun._Mar._Mier._Jue._Vier._Sab.'.split('_'),
    weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_')
});

const Cases = () => {
    const [textareas, setTextareas] = useState(['', '']);

    const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>, index: number) => {
        const newTextareas = [...textareas];
        newTextareas[index] = e.target.value;
        setTextareas(newTextareas);
        e.target.style.height = 'auto';
        e.target.style.height = `${Math.max(e.target.scrollHeight, 20)}px`;
    };

    const [caseNumber, setCaseNumber] = useState('0000');

    // Creation Date
    const creationDate = moment().format('DD-MM-YYYY');

    // General info
    // const [dateWasCreated, setDateWasCreated] = useState('');
    const [detectives, setDetectives] = useState('');
    const [involvedPersonnel, setInvolvedPersonnel] = useState('');

    // PersonOne
    const [namePersonOne, setNamePersonOne] = useState('');
    const [monikerPersonOne, setMonikerPersonOne] = useState('');
    const [sexPersonOne, setSexPersonOne] = useState('');
    const [etnecyPersonOne, setEtnecyPersonOne] = useState('');
    const [agePersonOne, setAgePersonOne] = useState('');
    const [priorityPersonOne, setPriorityPersonOne] = useState('');
    const [statusPersonOne, setStatusPersonOne] = useState('');
    const [historialLinkPersonOne, setHistorialLinkPersonOne] = useState('');

    // PersonTwo
    const [namePersonTwo, setNamePersonTwo] = useState('');
    const [monikerPersonTwo, setMonikerPersonTwo] = useState('');
    const [sexPersonTwo, setSexPersonTwo] = useState('');
    const [etnecyPersonTwo, setEtnecyPersonTwo] = useState('');
    const [agePersonTwo, setAgePersonTwo] = useState('');
    const [priorityPersonTwo, setPriorityPersonTwo] = useState('');
    const [statusPersonTwo, setStatusPersonTwo] = useState('');
    const [historialLinkPersonTwo, setHistorialLinkPersonTwo] = useState('');

    // PersonThree
    const [namePersonThree, setNamePersonThree] = useState('');
    const [monikerPersonThree, setMonikerPersonThree] = useState('');
    const [sexPersonThree, setSexPersonThree] = useState('');
    const [etnecyPersonThree, setEtnecyPersonThree] = useState('');
    const [agePersonThree, setAgePersonThree] = useState('');
    const [priorityPersonThree, setPriorityPersonThree] = useState('');
    const [statusPersonThree, setStatusPersonThree] = useState('');
    const [historialLinkPersonThree, setHistorialLinkPersonThree] = useState('');

    // EvidenceOne
    const [detailEvidenceOne, setDetailEvidenceOne] = useState('');
    const [locationEvidenceOne, setLocationEvidenceOne] = useState('');
    const [graphicSupportEvidenceOne, setGraphicSupportEvidenceOne] = useState('');

    // EvidenceTwo
    const [detailEvidenceTwo, setDetailEvidenceTwo] = useState('');
    const [locationEvidenceTwo, setLocationEvidenceTwo] = useState('');
    const [graphicSupportEvidenceTwo, setGraphicSupportEvidenceTwo] = useState('');
    // EvidenceThree
    const [detailEvidenceThree, setDetailEvidenceThree] = useState('');
    const [locationEvidenceThree, setLocationEvidenceThree] = useState('');
    const [graphicSupportEvidenceThree, setGraphicSupportEvidenceThree] = useState('');

  return (
    <>
        <Navbar />
        <section className="container">
            <section className="converter--container">
                <div className="form">
                    <form>
                        <h4>Debe poner el número de caso acá</h4>
                        <span className="warning">Siga el formato 0001,0002, etc...</span>
                        <div className="general--info">
                            <label htmlFor="caseNumber">Número de caso</label>
                            <input type="text" value={caseNumber} onChange={(e) => setCaseNumber(e.target.value)}/>
                            
                            <br />
                            <hr />
                            <br />

                            <h4>Información general</h4>

                            <label htmlFor="detectives">Detectives a cargo</label>
                            <input type="text" value={detectives} onChange={(e) => setDetectives(e.target.value)} />

                            <label htmlFor="involvedPersonnel">Personal involucrado</label>
                            <input type="text" value={involvedPersonnel} onChange={(e) => setInvolvedPersonnel(e.target.value)} />

                            <label htmlFor="summary">Resumen de los acontecimientos</label>
                            <textarea value={textareas[0]} onChange={(e) => handleTextChange(e, 0)} />
                        </div>
                        
                        <h4>Formulario</h4>
                        <span className="warning">Deje en blanco los espacios que no sean aplicables en su caso.</span>

                        <hr />

                        <h4>Involucrado 1</h4>

                        <div className="person--one">
                            <label htmlFor="namePersonOne">Nombre</label>
                            <input type="text" value={namePersonOne} onChange={(e) => setNamePersonOne(e.target.value)} />

                            <label htmlFor="monikerPersonOne">Moniker</label>
                            <input type="text" value={monikerPersonOne} onChange={(e) => setMonikerPersonOne(e.target.value)} />

                            <label htmlFor="sexPersonOne">Sexo</label>
                            <input type="text" value={sexPersonOne} onChange={(e) => setSexPersonOne(e.target.value)} />

                            <label htmlFor="etnecyPersonOne">Etnicidad</label>
                            <input type="text" value={etnecyPersonOne} onChange={(e) => setEtnecyPersonOne(e.target.value)} />

                            <label htmlFor="agePersonOne">Edad</label>
                            <input type="text" value={agePersonOne} onChange={(e) => setAgePersonOne(e.target.value)} />

                            <label htmlFor="priorityPersonOne">Prioridad</label>
                            <input type="text" value={priorityPersonOne} onChange={(e) => setPriorityPersonOne(e.target.value)} />

                            <label htmlFor="statusPersonOne">Estado</label>
                            <input type="text" value={statusPersonOne} onChange={(e) => setStatusPersonOne(e.target.value)} />

                            <label htmlFor="historialLinkPersonOne">Enlace de Historial</label>
                            <input type="text" value={historialLinkPersonOne} onChange={(e) => setHistorialLinkPersonOne(e.target.value)} />
                        </div>

                        <hr />

                        <h4>Involucrado 2</h4>

                        <div className="person--two">
                            <label htmlFor="namePersonTwo">Nombre</label>
                            <input type="text" value={namePersonTwo} onChange={(e) => setNamePersonTwo(e.target.value)} />

                            <label htmlFor="monikerPersonTwo">Moniker</label>
                            <input type="text" value={monikerPersonTwo} onChange={(e) => setMonikerPersonTwo(e.target.value)} />

                            <label htmlFor="sexPersonTwo">Sexo</label>
                            <input type="text" value={sexPersonTwo} onChange={(e) => setSexPersonTwo(e.target.value)} />

                            <label htmlFor="etnecyPersonTwo">Etnicidad</label>
                            <input type="text" value={etnecyPersonTwo} onChange={(e) => setEtnecyPersonTwo(e.target.value)} />

                            <label htmlFor="agePersonTwo">Edad</label>
                            <input type="text" value={agePersonTwo} onChange={(e) => setAgePersonTwo(e.target.value)} />

                            <label htmlFor="priorityPersonTwo">Prioridad</label>
                            <input type="text" value={priorityPersonTwo} onChange={(e) => setPriorityPersonTwo(e.target.value)} />

                            <label htmlFor="statusPersonTwo">Estado</label>
                            <input type="text" value={statusPersonTwo} onChange={(e) => setStatusPersonTwo(e.target.value)} />

                            <label htmlFor="historialLinkPersonTwo">Enlace de Historial</label>
                            <input type="text" value={historialLinkPersonTwo} onChange={(e) => setHistorialLinkPersonTwo(e.target.value)} />
                        </div>

                        <hr />

                        <h4>Involucrado 3</h4>

                        <div className="person--three">
                            <label htmlFor="namePersonThree">Nombre</label>
                            <input type="text" value={namePersonThree} onChange={(e) => setNamePersonThree(e.target.value)} />

                            <label htmlFor="monikerPersonThree">Moniker</label>
                            <input type="text" value={monikerPersonThree} onChange={(e) => setMonikerPersonThree(e.target.value)} />

                            <label htmlFor="sexPersonThree">Sexo</label>
                            <input type="text" value={sexPersonThree} onChange={(e) => setSexPersonThree(e.target.value)} />

                            <label htmlFor="etnecyPersonThree">Etnicidad</label>
                            <input type="text" value={etnecyPersonThree} onChange={(e) => setEtnecyPersonThree(e.target.value)} />

                            <label htmlFor="agePersonThree">Edad</label>
                            <input type="text" value={agePersonThree} onChange={(e) => setAgePersonThree(e.target.value)} />

                            <label htmlFor="priorityPersonThree">Prioridad</label>
                            <input type="text" value={priorityPersonThree} onChange={(e) => setPriorityPersonThree(e.target.value)} />

                            <label htmlFor="statusPersonThree">Estado</label>
                            <input type="text" value={statusPersonThree} onChange={(e) => setStatusPersonThree(e.target.value)} />

                            <label htmlFor="historialLinkPersonThree">Enlace de Historial</label>
                            <input type="text" value={historialLinkPersonThree} onChange={(e) => setHistorialLinkPersonThree(e.target.value)} />
                        </div>

                        <hr />

                        <h4>Evidencia 1</h4>

                        <div className="evidence--one">
                            <label htmlFor="detailEvidenceOne">Detalle</label>
                            <input type="text" value={detailEvidenceOne} onChange={(e) => setDetailEvidenceOne(e.target.value)} />

                            <label htmlFor="locationEvidenceOne">Ubicación</label>
                            <input type="text" value={locationEvidenceOne} onChange={(e) => setLocationEvidenceOne(e.target.value)} />

                            <label htmlFor="descriptionEvidenceOne">Descripción</label>
                            <textarea value={textareas[1]} onChange={(e) => handleTextChange(e, 1)} />

                            <label htmlFor="graphicSupportEvidenceOne">Soporte Gráfico</label>
                            <input type="text" value={graphicSupportEvidenceOne} onChange={(e) => setGraphicSupportEvidenceOne(e.target.value)} />

                            <label htmlFor="commentaryEvidenceOne">Comentario</label>
                            <textarea value={textareas[2]} onChange={(e) => handleTextChange(e, 2)} />
                        </div>

                        <hr />

                        <h4>Evidencia 2</h4>

                        <div className="evidence--two">
                            <label htmlFor="detailEvidenceTwo">Detalle</label>
                            <input type="text" value={detailEvidenceTwo} onChange={(e) => setDetailEvidenceTwo(e.target.value)} />

                            <label htmlFor="locationEvidenceTwo">Ubicación</label>
                            <input type="text" value={locationEvidenceTwo} onChange={(e) => setLocationEvidenceTwo(e.target.value)} />

                            <label htmlFor="descriptionEvidenceTwo">Descripción</label>
                            <textarea value={textareas[3]} onChange={(e) => handleTextChange(e, 3)} />

                            <label htmlFor="graphicSupportEvidenceTwo">Soporte Gráfico</label>
                            <input type="text" value={graphicSupportEvidenceTwo} onChange={(e) => setGraphicSupportEvidenceTwo(e.target.value)} />

                            <label htmlFor="commentaryEvidenceTwo">Comentario</label>
                            <textarea value={textareas[4]} onChange={(e) => handleTextChange(e, 4)} />
                        </div>

                        <hr />

                        <h4>Evidencia 3</h4>

                        <div className="evidence--three">
                            <label htmlFor="detailEvidenceThree">Detalle</label>
                            <input type="text" value={detailEvidenceThree} onChange={(e) => setDetailEvidenceThree(e.target.value)} />

                            <label htmlFor="locationEvidenceThree">Ubicación</label>
                            <input type="text" value={locationEvidenceThree} onChange={(e) => setLocationEvidenceThree(e.target.value)} />

                            <label htmlFor="descriptionEvidenceThree">Descripción</label>
                            <textarea value={textareas[6]} onChange={(e) => handleTextChange(e, 5)} />

                            <label htmlFor="graphicSupportEvidenceThree">Soporte Gráfico</label>
                            <input type="text" value={graphicSupportEvidenceThree} onChange={(e) => setGraphicSupportEvidenceThree(e.target.value)} />

                            <label htmlFor="commentaryEvidenceThree">Comentario</label>
                            <textarea value={textareas[7]} onChange={(e) => handleTextChange(e, 6)} />
                        </div>
                    </form>
                </div>
                <div className="code--section">
                    <button className="primary--btn" onClick={copyTitle}>Copiar Título</button>
                    <button className="primary--btn" onClick={copyCode}>Copiar Código</button>
                    <div className="bbcode--title">{`OSSB CASE ${ caseNumber }`}</div>
                    <div className="bbcode">
                        [Textarea] <br />
                        [i]Los Santos Sheriff’s Department -  Operation Safe Street Bureau <br />
                        District Attorney’s Office [right] Case-{caseNumber}[/right] <br />
                        [hr=#00ff00][/hr] <br />
                        [center][img]https://cdn.discordapp.com/attachments/943629819122442290/943631820543651890/bd4a7b167ea2d29301c8a8343a86c8a9-1.png?ex=657a2d1d&is=6567b81d&hm=892315bb51064afdbd44418c8717ceb3002272e279d92b473baac671c5a2fa3c&[/img][/center] <br /><br />

                        [font=Courier][b][align=center][u][size=200]INFORME DE CASO[/size][/u][/align][/b][/font][align=center][font=Courier][b][size=85]OSSB-{caseNumber}[/size][/b][/font][font=Courier] <br />
                        [b]FECHA DE REDACCION:[/b] { creationDate } <br />
                        [b]DETECTIVE(S) A CARGO:[/b] { detectives } <br />
                        [b]PERSONAL INVOLUCRADO:[/b] { involvedPersonnel } <br /><br />


                        [center][font=Courier][b]RESUMEN DE LOS ACONTECIMIENTOS:[/b][/font][/center] <br />
                        [font=Courier]{ textareas[0] }[/font] <br />
                        [/align] <br /><br />

                        [hr][hr] <br /><br />


                        [center][font=Courier][size=200][b][u]PARTES INVOLUCRADAS[/u][/b][/size][/font][/center] <br /><br />


                        [center][font=Courier][b][i]PERSONA[/i](1)[/b] <br />
                        [b]NOMBRE COMPLETO:[/b] { namePersonOne } <br />
                        [b]ALIAS/MONIKER:[/b] { monikerPersonOne } <br />
                        [b]SEXO:[/b] { sexPersonOne } <br />
                        [b]ETNIA:[/b] { etnecyPersonOne } <br />
                        [b]EDAD:[/b] { agePersonOne } <br />
                        [b]IMPORTANCIA:[/b] { priorityPersonOne } <br />
                        [b]ESTADO:[/b] { statusPersonOne } <br />
                        [b]HISTORIAL DELICTIVO:[/b] { historialLinkPersonOne } <br />
                        [/font][/center] <br /><br />



                        [center][font=Courier][b][i]PERSONA[/i](2)[/b] <br />
                        [b]NOMBRE COMPLETO:[/b] { namePersonTwo } <br />
                        [b]ALIAS/MONIKER:[/b] { monikerPersonTwo } <br />
                        [b]SEXO:[/b] { sexPersonTwo } <br />
                        [b]ETNIA:[/b] { etnecyPersonTwo } <br />
                        [b]EDAD:[/b] { agePersonTwo } <br />
                        [b]IMPORTANCIA:[/b] { priorityPersonTwo } <br />
                        [b]ESTADO:[/b] { statusPersonTwo } <br />
                        [b]HISTORIAL DELICTIVO:[/b] { historialLinkPersonThree } <br />
                        [/font][/center] <br /><br />



                        [center][font=Courier][b][i]PERSONA[/i](3)[/b] <br />
                        [b]NOMBRE COMPLETO:[/b] { namePersonThree } <br />
                        [b]ALIAS/MONIKER:[/b] { monikerPersonThree } <br />
                        [b]SEXO:[/b] { sexPersonThree } <br />
                        [b]ETNIA:[/b] { etnecyPersonThree } <br />
                        [b]EDAD:[/b] { agePersonThree } <br />
                        [b]IMPORTANCIA:[/b] { priorityPersonThree } <br />
                        [b]ESTADO:[/b] { statusPersonThree } <br />
                        [b]HISTORIAL DELICTIVO:[/b] { historialLinkPersonThree } <br />
                        [/font][/center] <br /><br />

                        [hr][hr] <br /><br />


                        [center][font=Courier][b][size=200][u]EVIDENCIA[/u][/size][/b][/center] <br /><br />

                        [center][b][u]Evidencia N°001[/u][/b] <br />
                        [b]DETALLE:[/b] { detailEvidenceOne } <br />
                        [b]UBICACION DE RECOLECCION:[/b] { locationEvidenceOne } <br />
                        [b]DESCRIPCION: [/b] { textareas[1] } <br />
                        [b]SOPORTE FOTOGRAFICO[/b] { graphicSupportEvidenceOne } <br />
                        [b]COMENTARIO[/b]: { textareas[2] } <br />
                        [/center] <br /><br />

                        [center][b][u]Evidencia N°002[/u][/b] <br />
                        [b]DETALLE:[/b] { detailEvidenceTwo } <br />
                        [b]UBICACION DE RECOLECCION:[/b] { locationEvidenceTwo } <br />
                        [b]DESCRIPCION: [/b] { textareas[3] } <br />
                        [b]SOPORTE FOTOGRAFICO[/b] { graphicSupportEvidenceTwo } <br />
                        [b]COMENTARIO[/b]: { textareas[4] } <br />
                        [/center] <br /><br />

                        [center][b][u]Evidencia N°003[/u][/b] <br />
                        [b]DETALLE:[/b] { detailEvidenceThree } <br />
                        [b]UBICACION DE RECOLECCION:[/b] { locationEvidenceThree } <br />
                        [b]DESCRIPCION: [/b] { textareas[5] } <br />
                        [b]SOPORTE FOTOGRAFICO[/b] { graphicSupportEvidenceThree } <br />
                        [b]COMENTARIO[/b]: { textareas[6] } <br />
                        [/font][/center] <br />
                        [hr=#00ff00][/hr] <br />
                        [right][i]Los Santos Sheriff’s Department -  Operation Safe Street Bureau <br />
                        District Attorney’s Office[/right] <br />
                        [/Textarea]
                    </div>
                </div>
            </section>
        </section>
    </>
  )
}

export default Cases