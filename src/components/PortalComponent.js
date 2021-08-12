import React from 'react';
import { Button, Card, CardTitle, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

function Portal() {
    return(
        <div className="container card-container">
            <div className="row justify-content-center">
                <Card className="col-md-3 card" >
                    <CardTitle className="text-center titles"><h3>Create Citation</h3></CardTitle>
                    <CardBody className="text-center">Create an in-house citation that can be printed, submitted and added to a searchable database.</CardBody>                 
                    <Button clasName="btn btn-secondary" style={{marginBottom: 15}} tag={Link} to='/citation'>Create Citation</Button>                    
                </Card>
                <Card className="col-md-3 card">
                    <CardTitle className="text-center titles" ><h3>Create Report</h3></CardTitle>
                    <CardBody className="text-center">Create an incident report to print, sumbit to supervisor, and add to a searchable database.</CardBody>
                    <Button clasName="btn btn-secondary" style={{marginBottom: 15}} tag={Link} to='/report'>Create Report</Button> 
                </Card>
                <Card className="col-md-3 card">
                    <CardTitle className="text-center titles"><h3>Search</h3></CardTitle>
                    <CardBody className="text-center">Search for previously submitted citations and incident reports by name, case number, and ticket number.</CardBody>
                    <Button clasName="btn btn-secondary" style={{marginBottom: 15}}>Search</Button>
                </Card>
            </div>
        </div>
    );
}

export default Portal;