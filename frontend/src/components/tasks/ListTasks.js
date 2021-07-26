import React from 'react';
import { Container, Fab, Typography,Chip, Card, CardContent, CardActions, Button,  } from "@material-ui/core";
import { Add, Delete, Edit } from "@material-ui/icons";


import './Styles.css';

const ListTasks = () => {
	return (
		<Container>
			<Typography variant="h5">List Task</Typography>
			<div className="row">
				<div className="col col-sm-4">
					<div className="list-task">
						<Typography variant="h6">Status:
						<span>
							<Chip className="badge bg-primary" size="medium" label="TO-DO" color=""></Chip>
						</span>
						</Typography>
						<Fab variant="extended" size="small" color="primary">
							<Add className=""/>
							Add task
						</Fab>
						
					</div>
					<div className="container-task">
						<Card>
							<CardContent>
								<Typography variant="h6">My task</Typography>
								<p>
									description task
								</p>
							</CardContent>
							<CardActions>
								<Button variant="outlined" className="btn bg-primary">Move</Button>
								<Fab size="small">
									<Edit/>
								</Fab>
								<Fab size="small" color="secondary">
									<Delete/>
								</Fab>
							</CardActions>
						</Card>
					</div>
				</div>
				<div className="col col-sm-4">
					<div className="list-task">
						<Typography variant="h6">Status:
						<span>
							<Chip className="badge bg-warning" size="medium" label="DOING" color=""></Chip>
						</span>
						</Typography>
						
					</div>
					<div className="container-task">
						task
					</div>
				</div>
				<div className="col col-sm-4">
					<div className="list-task">
						<Typography variant="h6">Status:
						<span>
							<Chip className="badge bg-success" size="medium" label="DONE" color=""></Chip>
						</span>
						</Typography>
						
					</div>
					<div className="container-task">
						task
					</div>
				</div>
			</div>
		</Container>
	);
};

export default ListTasks;
