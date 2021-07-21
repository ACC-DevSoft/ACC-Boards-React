import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
    form: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '50px 0px 0px 0px',
    },
    formContent: {
        marginTop: '20px',
        minWidth: '150px',
        maxWidth: '500px',
        width: '100%',
    },
    title: {
        margin:'20px',
        textAlign:'center',
    },
    cardContent: {
        display:'flex',
        justifyContent: 'space-evenly',
    },
    tags: {
        fontWeight: 'bold',
    },
  }));