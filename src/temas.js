import { createMuiTheme } from '@material-ui/core/styles'

const temaEscuro = createMuiTheme(({
    palette: {
        type: 'dark',
        primary: {
          main: '#D3D3D3',
        },
        background: {
          default: '#000000',
          paper: '#000000',
        },
      },
}))

const temaClaro = createMuiTheme(({
    palette: {
        type: 'light',
        primary: {
          main: '#000000',
        },
        background: {
          default: '#DCDCDC',
          paper: '#DCDCDC',
        },
      },    

}))



export { temaEscuro, temaClaro }