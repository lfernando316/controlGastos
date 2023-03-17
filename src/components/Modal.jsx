import { useState } from 'react';
import Mensaje from './Mensaje';
import CerrarBtn from '../assets/img/cerrar.svg'



const Modal = ({ setModal, animarModal, setanimarModal, guardarGasto }) => {

    const [mensaje, setMensaje] = useState('');
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [categoria, setCategoria] = useState('');

    const ocultarModal = () => {
        setanimarModal(false);
        setTimeout(() => {
            setModal(false);
        }, 500);
    }

    const handleSubmit = e => {
        e.preventDefault()
        if ([nombre, cantidad, categoria].includes('')) {
            setMensaje('Todos los campos son obligatorios')

            setTimeout(() => {
                setMensaje('')
            }, 3000);
            return
        }

        guardarGasto({ nombre, cantidad, categoria })

    }

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img
                    src={CerrarBtn}
                    alt="cerrar modal"
                    onClick={ocultarModal}
                />
            </div>
            <form
                onSubmit={handleSubmit}
                className={`formulario ${animarModal ? "animar" : "cerrar"}`}>

                <legend>Nuevo gasto</legend>
                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

                <div className="campo">
                    <label htmlFor="nombre">Nombre Gasto</label>

                    <input
                        id="nombre"
                        type="text"
                        placeholder="Añade el Nombre del gasto"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />

                    <label htmlFor="nombre">Cantidad</label>

                    <input
                        id="cantidad"
                        type="number"
                        placeholder="Añade la Cantidad del gasto: ej. 300"
                        value={cantidad}
                        onChange={e => setCantidad(Number(e.target.value))}
                    />

                    <label htmlFor="categoria">Categoria</label>

                    <select
                        id="categoria"
                        value={categoria}
                        onChange={e => setCategoria(e.target.value)}
                    >
                        <option value="">-- Selecione --</option>
                        <option value="Ahorro">Ahorro</option>
                        <option value="Comida">Comida</option>
                        <option value="Casa">Casa</option>
                        <option value="Gastos">Gastos Varios</option>
                        <option value="Ocio">Ocio</option>
                        <option value="Salud">Salud</option>
                        <option value="suscripciones">suscripciones</option>
                    </select>
                </div>

                <input
                    type="submit"
                    value="añadir Gasto"
                />
            </form>
        </div>
    );
};

export default Modal;
