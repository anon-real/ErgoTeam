export default {
  palette: {
    primary: {
      light: '',
      main: '#1B92E8',
      contrastText: '#fff'
    },
    secondary: {
      light: '#FFAA47',
      main: '#E88A1B',
      contrastText: '#fff'
    }
  },
  overrides: {
    MuiButton:{
      root: {
        borderRadius:10,
        borderWidth:'2px!important',
        textTransform: 'none',
        boxShadow:'none',
        WebkitBoxShadow:'none',
        MozBoxShadow:'none'
      },
    },
    MuiAvatar:{
      rounded:{
        borderRadius:10,
      }
    },
    MuiPaper:{
      root:{
        boxShadow: "none",
        backgroundColor:'#262637',
        color:'white'
      },
      rounded:{
        borderRadius:10,
      }
    },
    MuiInput:{
      root:{
        borderRadius:10,
      }
    },
    MuiCard: {
        root: {
            boxShadow: "none",
            WebkitBoxShadow: "none",
            MozBoxShadow: "none",
            borderRadius:10,
            backgroundColor:'#1E1D2B',
            padding:20
        }
    },
    MuiTableCell: {
        root:{
            borderBottomColor:'#3f3e58'
        },
        head:{
            color:'#808080',
            borderBottomColor:'#58557c'
        },
        body: {
            // Some CSS
            color: 'white',
        },
    },
    MuiPopover : {
      paper: {
        boxShadow: "0 12px 30.1px 4.9px rgba(51,105,158,.1)",
        WebkitBoxShadow: "0 12px 30.1px 4.9px rgba(51,105,158,.1)",
        MozBoxShadow: "0 12px 30.1px 4.9px rgba(51,105,158,.1)",
        borderRadius:10,
        marginTop:20,
      }
    },
    MuiInputBase:{
      root:{
        backgroundColor:'#282739',
        borderRadius:5,
        padding: '0rem 1rem',
        color:'white'
      }
    }
  },
};
