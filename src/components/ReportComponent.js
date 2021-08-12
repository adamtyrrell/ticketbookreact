import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, Card, CardTitle, CardBody } from 'reactstrap';
import SignatureCanvas from 'react-signature-canvas'

class Report extends Component {
    constructor(props){
        super(props);
        this.state = {
            shift: '',
            dateSubmitted: '',
            timeSubmitted: '',
            reportNumber: '',
            incidentClass: '',
            beginningDate: '',
            beginningTime: '',
            location: '',
            endDate: '',
            endTime: '',
            narrative:'',
            parties:[]
        }
    }

    addParty(){
        this.setState({parties:[...this.state.parties, ""]});
    }

    removeParty(index){
        this.state.parties.splice(index,1);

        this.setState({parties: this.state.parties});

    }

    render(){
        return(
            <div className="col-md-8 offset-md-2">
            <Card className="">
                <CardTitle className="text-center">Create Report</CardTitle>
                    <CardBody>
                        <Form onSubmit={this.handleSubmit}>

                            {/*Shift, Date Submitted, Time Submitted, Report Number fields*/}
                            
                            <div className="row">
                                <FormGroup className="col-3">
                                    <Label htmlFor="Shift">Shift</Label>
                                        <Input type="select" id="shift" name="shift"
                                            innerRef={input => this.shift = input}>
                                            <option value="" disabled selected>Select a Shift</option>
                                            <option>A Days</option>
                                            <option>A Nights</option>
                                            <option>B Days</option>
                                            <option>B Nights </option>
                                        </Input>
                                </FormGroup>
                                <FormGroup className="col-3">
                                    <Label htmlFor="dateSubmitted">Date Submitted</Label>
                                    <Input type="date" id="dateSubmitted" name="dateSubmitted"
                                        innerRef={input => this.dateSubmitted = input} />
                                </FormGroup>
                                <FormGroup className="col-3">
                                    <Label htmlFor="timeSubmitted">Time Submitted</Label>
                                    <Input type="time" id="timeSubmitted" name="timeSubmitted"
                                        innerRef={input => this.time = input} />
                                </FormGroup>
                                <FormGroup className="col-3">
                                    <Label htmlFor="reportNumber">Report Number</Label>
                                        <Input type="text" id="reportNumber" name="reportNumber"
                                        innerRef={input => this.reportNumber = input} />
                                </FormGroup>
                            </div>

                            {/*Date, time, and housing number fields.*/}

                            <div className="row">
                                <FormGroup className="col-4">
                                    <Label htmlFor="Shift">Incident Classification</Label>
                                        <Input type="select" id="shift" name="shift"
                                            innerRef={input => this.shift = input}>
                                            <option value="" disabled selected>Select a Shift</option>
                                            <option>Informative</option>
                                            <option>Staff Ticket</option>
                                            <option>Defensive Action</option>
                                        </Input>
                                </FormGroup>
                                <FormGroup className="col-4">
                                    <Label htmlFor="dateIncident">Beginning Date of Incident</Label>
                                    <Input type="date" id="dateIncident" name="dateIncident"
                                        innerRef={input => this.dateIncident = input} />
                                </FormGroup>
                                <FormGroup className="col-4">
                                    <Label htmlFor="beginningTime">Beginning Time</Label>
                                    <Input type="time" id="beginningTime" name="beginningTime"
                                        innerRef={input => this.beginningTime = input} />
                                </FormGroup>
                            </div>

                            {/*Form fields for Location of incident and violation. Violation field will be drop down options*/}

                            <div className="row">
                                <FormGroup className="col-4">
                                    <Label htmlFor="location">Location Of Incident:</Label>
                                        <Input type="select" id="location" name="location"
                                        innerRef={input => this.location = input}>
                                            <option value="" disabled selected>Select a Location</option>
                                            <option>A Pod</option>
                                            <option>B1 Pod</option>
                                            <option>B2 Pod</option>
                                            <option>B3 Pod</option>
                                            <option>B Pod Hallway</option>
                                            <option>C1 Pod</option>
                                            <option>C2 Pod</option>
                                            <option>C3 Pod</option>
                                            <option>C Pod Hallway</option>
                                            <option>D1 Pod</option>
                                            <option>D2 Pod</option>
                                            <option>D3 Pod</option>
                                            <option>D4 Pod</option>
                                            <option>E Pod</option>
                                            <option>F Pod</option>
                                            <option>G Pod</option>
                                            <option>H Pod</option>
                                            <option>I Pod</option>
                                            <option>Intake</option>
                                        </Input>                   
                                </FormGroup>
                                <FormGroup className="col-4">
                                    <Label htmlFor="dateIncident">End Date of Incident</Label>
                                    <Input type="date" id="dateIncident" name="dateIncident"
                                        innerRef={input => this.dateIncident = input} />
                                </FormGroup>
                                <FormGroup className="col-4">
                                    <Label htmlFor="beginningTime">End Time</Label>
                                    <Input type="time" id="beginningTime" name="beginningTime"
                                        innerRef={input => this.beginningTime = input} />
                                </FormGroup>
                            </div>

                            {/*Area for parties involved. Allows user to add additional fields as needed*/}
                            <div className="row"><p className="col">Parties Involved:</p></div>
                            <div className="row border">
                                
                                <FormGroup className="col-2">
                                    <Label htmlFor="vpw">V/P/W</Label>
                                        <Input type="select" id="vpw" name="vpw">
                                            <option value="" disabled selected>Select V/P/W</option>
                                            <option>Victim</option>
                                            <option>Perpetrator</option>
                                            <option>Witness</option>
                                        </Input>
                                </FormGroup>
                                <FormGroup className="col-2">
                                    <Label htmlFor="firstName">First Name</Label>
                                    <Input type="text" id="firstName" name="firstName" placeholder="First Name"></Input>
                                </FormGroup>
                                <FormGroup className="col-2">
                                    <Label htmlFor="lastName">Last Name</Label>
                                    <Input type="text" id="lastName" name="lastName" placeholder="Last Name"></Input>
                                </FormGroup>
                                <FormGroup className="col-2">
                                    <Label htmlFor="race">Race</Label>
                                        <Input type="select" id="Race" name="Race">
                                            <option value="" disabled selected>Select Race</option>
                                            <option>Asian</option>
                                            <option>Black</option>
                                            <option>Hispanic</option>
                                            <option>White</option>
                                        </Input>
                                </FormGroup>
                                <FormGroup className="col-2">
                                    <Label htmlFor="idNumber">ID Number</Label>
                                    <Input type="text" id="idNumber" name="idNumber" placeholder="ID Number"></Input>
                                </FormGroup>
                                <FormGroup className="col-2">
                                    <Label htmlFor="race">Agency</Label>
                                        <Input type="select" id="Race" name="Race">
                                            <option value="" disabled selected>Select Agency</option>
                                            <option>Bonner Springs</option>
                                            <option>County</option>
                                            <option>Edwardsville</option>
                                            <option>KCK PD</option>
                                            <option>Sheriff</option>
                                        </Input>
                                </FormGroup>                             
                            </div>
                            {
                                this.state.parties.map((party, index) => {
                                    return (
                                        <div key={index}>
                                            <div className="row border">                               
                                                <FormGroup className="col-2" value={party}>
                                                    <Label htmlFor="vpw">V/P/W</Label>
                                                        <Input type="select" id="vpw" name="vpw">
                                                            <option value="" disabled selected>Select V/P/W</option>
                                                            <option>Victim</option>
                                                            <option>Perpetrator</option>
                                                            <option>Witness</option>
                                                        </Input>
                                                </FormGroup>
                                                <FormGroup className="col-2">
                                                    <Label htmlFor="firstName">First Name</Label>
                                                    <Input type="text" id="firstName" name="firstName" placeholder="First Name"></Input>
                                                </FormGroup>
                                                <FormGroup className="col-2">
                                                    <Label htmlFor="lastName">Last Name</Label>
                                                    <Input type="text" id="lastName" name="lastName" placeholder="Last Name"></Input>
                                                </FormGroup>
                                                <FormGroup className="col-2">
                                                    <Label htmlFor="race">Race</Label>
                                                        <Input type="select" id="Race" name="Race">
                                                            <option value="" disabled selected>Select Race</option>
                                                            <option>Asian</option>
                                                            <option>Black</option>
                                                            <option>Hispanic</option>
                                                            <option>White</option>
                                                        </Input>
                                                </FormGroup>
                                                <FormGroup className="col-2">
                                                    <Label htmlFor="idNumber">ID Number</Label>
                                                    <Input type="text" id="idNumber" name="idNumber" placeholder="ID Number"></Input>
                                                </FormGroup>
                                                <FormGroup className="col-2">
                                                    <Label htmlFor="race">Agency</Label>
                                                        <Input type="select" id="Race" name="Race">
                                                            <option value="" disabled selected>Select Agency</option>
                                                            <option>Bonner Springs</option>
                                                            <option>County</option>
                                                            <option>Edwardsville</option>
                                                            <option>KCK PD</option>
                                                            <option>Sheriff</option>
                                                        </Input>
                                                </FormGroup>  
                                                <Button onClick={() => this.removeParty(index)}>Remove</Button>
                                            </div>
                                        </div>
                                    );
                                })
                            }

                            <Button className="offset-11" onClick={(e) => this.addParty(e)}>Add +</Button>

                            {/*Text area for narrative.*/}
                            <div className="row">
                            <FormGroup className="col">
                                <Label htmlFor="narrative">Narrative</Label>
                                    <Input type="textarea" id="narrative" name="narrative" placeholder="Write Narrative"
                                    innerRef={input => this.narrative = input}>
                                    </Input>
                            </FormGroup>
                            </div>

                            <div className="row">
                                <FormGroup className="col">
                                    <p>Action Taken</p>
                                    <FormGroup check className="form-check-inline">
                                        <Label check className="form-check-inline">
                                            <Input type="radio" name="radio1" />{' '}
                                    Warning
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check className="form-check-inline">
                                        <Label check className="form-check-inline">
                                            <Input type="radio" name="radio1" />{' '}
                                    Informal Resolution
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check className="form-check-inline">
                                        <Label check className="form-check-inline">
                                            <Input type="radio" name="radio1" />{' '}
                                    Staff Resolution
                                        </Label>
                                    </FormGroup>
                                </FormGroup>
                                <FormGroup className="col-7">
                                <Label htmlFor="sanction">Sanctions:</Label>
                                    <Input type="textarea" id="sanction" name="sanction" 
                                    innerRef={input => this.sanction = input}>
                                    </Input>
                            </FormGroup>
                            </div>

                            <div className="row">

                            </div>

                            {/*This section is for the signature canvas. will need to be configured for clearing and saving the signature. 
                            A border will need to be added a long with a label for the signature field.*/}
                            
                            <div className="row"> 
                            <FormGroup className="col-5">
                                <Label htmlFor="officer">Officer Name:</Label>
                                    <Input type="text" id="officer" name="officer"
                                        innerRef={input => this.officer = input} />
                            </FormGroup>
                            <FormGroup className="col-5">
                                <Label htmlFor="offSerial">Officer Serial:</Label>
                                    <Input type="text" id="offSerial" name="offSerial"
                                        innerRef={input => this.offSerial = input} />
                            </FormGroup>
                            </div>
                            <div className="row">
                                <FormGroup>
                                    <p>Officer Signature:</p>
                                    <SignatureCanvas penColor='blue'
                                        canvasProps={{width:500, height:100, className: 'sigCanvas border border-secondary'}} />
                                </FormGroup>
                            </div>
                                <Button type="submit" value="submit" color="primary">Submit</Button>
                        </Form>
                </CardBody>
            </Card>
        </div>
        );
    }



}


export default Report;