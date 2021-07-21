import React from 'react';
import { Button, Container, Typography,Card, CardHeader, CardContent} from "@material-ui/core";
import { Link } from 'react-router-dom';
import { Add, People, Delete } from "@material-ui/icons";
import  "./Styles.css";
const ListWorkSpaces = () => {

    return (
        <Container className="container">
            <Typography variant="h5">WorkSpaces</Typography>
            <Button className="btn-purple"  variant="contained" color="primary"><Add/>Add workspaces</Button>
            <hr/>
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
