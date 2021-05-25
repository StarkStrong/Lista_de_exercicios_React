import { useState } from 'react'
import Formulario from './formulario'
import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import { temaEscuro, temaClaro} from './temas'

const App = () => {

    const [ atual, setTema ] = useState( temaClaro )
    const [ claro, setClaro ] = useState( true )

    const mudarTema = () => {
        if (claro) { 
            setTema( temaEscuro )
            localStorage.setItem("tema", "dark")
        } else {
            setTema( temaClaro )
            localStorage.setItem("tema", "ligth")
        }
        setClaro( !claro )
    }

    return (
        <ThemeProvider theme={ atual }>
            <CssBaseline />
            <Formulario atual={ mudarTema }/>            
        </ThemeProvider>
    )
}

export default App