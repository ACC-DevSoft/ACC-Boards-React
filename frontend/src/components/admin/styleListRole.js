import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
    container: {
        padding: '25px 16px 0',
    },
    table: {
        fontFamily: 'arial, sans-serif',
        borderCollapse: 'collapse',
        width: '100%',
        overflowY:'scroll',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    td: {
        border: '1px solid #42414D',
        textAlign: 'left',
        padding: '8px',
    },
    th: {
        border: '1px solid #42414D',
        textAlign: 'left',
        padding: '8px',
    },

  }));