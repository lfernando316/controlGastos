import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'
import { formatearFecha } from "../helpers";
import iconoAhorro from '../assets/img/icono_ahorro.svg'
import iconoCasa from '../assets/img/icono_casa.svg'
import iconoComida from '../assets/img/icono_comida.svg'
import iconoGastos from '../assets/img/icono_gastos.svg'
import iconoOcio from '../assets/img/icono_ocio.svg'
import iconoSalud from '../assets/img/icono_salud.svg'
import iconoSuscripciones from '../assets/img/icono_suscripciones.svg'

const diccionarioIconos = {
    Ahorro: iconoAhorro,
    Comida: iconoComida,
    Casa: iconoCasa,
    Gastos: iconoGastos,
    Ocio: iconoOcio,
    Salud: iconoSalud,
    suscripciones: iconoSuscripciones
}

const Gasto = ({ gasto }) => {
    const { categoria, nombre, cantidad, id, fecha } = gasto

    const leadingActions = () => {
        console.log('Editar...');
    }

    const trailingActions = () => {
        console.log('Eliminar...');
    }

    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions}
                trailingActions={trailingActions}
            >
                <div className="gasto sombra">
                    <div className="contenido-gasto">
                        <img
                            src={diccionarioIconos[categoria]}
                            alt="icono gasto" />
                        <div className="descripcion-gasto">
                            <p className="categoria">{categoria}</p>
                            <p className="nombre-gasto">{nombre}</p>
                            <p className="fecha-gasto">
                                Agregado el: {''}
                                <span>{formatearFecha(fecha)}</span>
                            </p>
                        </div>
                    </div>
                    <p className="cantidad-gasto">${cantidad}</p>
                </div>
            </SwipeableListItem>
        </SwipeableList>
    );
};

export default Gasto;
