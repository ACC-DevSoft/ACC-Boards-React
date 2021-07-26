import React, {useSate, useState} from 'react';
import { Button, Container, Typography,Card, CardContent, Modal,Paper, TextField} from "@material-ui/core";
import { Link } from 'react-router-dom';
import { Add, People, Delete } from "@material-ui/icons";
import AddWorkSpaces from './AddWorkSpaces';
import  "./Styles.css";
const ListWorkSpaces = () => {

    const [open, setOpen] = useState(false);

    const openForm = ()=>{
        setOpen(true);
    };

    const closeForm = () =>{
            setOpen(false);
    };
    const workForm = (
        <Card>
            <Typography>Add WorkSpace</Typography>
            <h/>
            <Paper>
            <form className noValidate autoComplete="off">
                 <TextField label="input" variant="filled" type="text"/>
                 <TextField label="input" variant="filled" type="text"/>
            </form>
            </Paper>
        </Card>

    );

    return (
        <Container className="container">
            <Typography variant="h5">WorkSpaces</Typography>
            <AddWorkSpaces id={localStorage.getItem("current")}/>
            <hr/>
            <Modal open={open} onClose={closeForm}  aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description">
                    {workForm}
            </Modal>
            <div className="row">
                <div className="col">
                    <h3>My work Spaces</h3>
                </div>
                <div className="col">
                 <h4>1 - workspaces</h4>
                </div>
            </div>
           <div className="">
               <Card  className="bg-blue">
                   <div className="row">
                       <div className="col">
                            <h3>workSpace</h3>
                       </div>
                       <div className="col">
                            <Button variant="outlined" color="primary"><Add/>Add Board</Button>
                            <Button variant="contained" color="primary"><People/>&nbsp;members</Button>
                            <Button variant="contained" color="secondary"><Delete/>Delete</Button>
                       </div>
                   </div>
                   <hr/>
                   <CardContent>
                       <Link to="/" className="link">
                        <div  variant="outlined" className="board bg-grayTwo">
                            <Typography color="darks">Board</Typography>
                        </div>
                       </Link>
                   </CardContent>
               </Card>

           </div>
        </Container>
    )
}

export default ListWorkSpaces
