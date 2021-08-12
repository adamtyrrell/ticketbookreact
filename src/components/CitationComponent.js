import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, Card, CardTitle, CardBody } from 'reactstrap';
import SignatureCanvas from 'react-signature-canvas'
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';


class Citation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName:'',
            lastName:'',
            bookingNumber:'',
            date:'',
            time:'',
            housingNumber:'',
            location:'',
            code:'',
            violation:'',
            narative:'',
            actionTaken:'',
            sanctions: '',
            officer:'',
            offSerial:'',
            offSig: null,
            startDate: new Date()
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    canvas ={
        clear: () => {},
        toDataURL: (param) => {
            return "";
        },
    };

    reset() {
        this.canvas.clear();
    }

    save() {
        const offSig = this.canvas.toDataURL('image/png');
        this.setState({offSig: offSig});
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        alert('Ticket was submitted' + JSON.stringify(this.state));
        event.preventDefault();
    }
    render(){
        return(
            <React.Fragment>
            <div className="col-md-8 offset-md-2">
                <Card className="">
                    <CardTitle className="text-center">Create Citation</CardTitle>
                    <CardBody>
                        <Form onSubmit={this.handleSubmit}>

                            {/*First name, last name, booking number fields*/}

                            <div className="row">
                            <FormGroup className="col-4">
                                <Label htmlFor="firstName">First Name</Label>
                                    <Input type="text" id="firstName" name="firstName"
                                        value={this.state.firstName}
                                        onChange={this.handleInputChange} />                                        
                            </FormGroup>
                            <FormGroup className="col-4">
                                <Label htmlFor="lastName">Last Name</Label>
                                    <Input type="lastName" id="lastName" name="lastName"
                                        value={this.state.lastName}
                                        onChange={this.handleInputChange} />
                            </FormGroup>                           
                            <FormGroup className="col-4">
                                <Label htmlFor="bookingNumber">Booking Number</Label>
                                    <Input type="bookingNumber" id="bookingNumber" name="bookingNumber"
                                        value={this.state.bookingNumber}
                                        onChange={this.handleInputChange} />
                            </FormGroup>
                            </div>

                            {/*Date, time, and housing number fields.*/}

                            <div className="row">
                            <FormGroup className="col-4">
                                <Label htmlFor="date">Date</Label>
                                <Input type="date" id="date" name="date"
                                    value={this.state.date}
                                    onChange={this.handleInputChange}/>
                            </FormGroup>
                            <FormGroup className="col-4">
                                <Label htmlFor="time">Time</Label>
                                <Input type="time" id="time" name="time"
                                    value={this.state.time}
                                    onChange={this.handleInputChange} />
                            </FormGroup>
                            <FormGroup className="col-4">
                                <Label htmlFor="housingNumber">Housing Number</Label>
                                    <Input type="housingNumber" id="housingNumber" name="housingNumber"
                                    value={this.state.housingNumber}
                                    onChange={this.handleInputChange} />
                            </FormGroup>
                            </div>

                            {/*Form fields for Location of incident and violation. Violation field will be drop down options*/}

                            <div className="row">
                            <FormGroup className="col-6">
                                <Label htmlFor="location">Location Of Incident:</Label>
                                    <Input type="select" id="location" name="location"
                                        value={this.state.location}
                                        onChange={this.handleInputChange}>
                                        <option value="" disabled defaultValue>Select a Location</option>
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
                            <FormGroup className="col-6">
                                <Label htmlFor="violation">Violation</Label>
                                    <Input type="select" id="violation" name="violation" placeholder="Select a Violation"
                                        value={this.state.violation}
                                        onChange={this.handleInputChange}>
                                        <option value="" disabled defaultValue>Select a Violation</option>
                                        <option>001. Killing (Murder)</option>
                                        <option>002. Battery</option>
                                        <option>003. Fighting with another person</option>
                                        <option>004. Assaulting any person (threatening another with bodily harm, or any 
                                                other offense against his person or property).</option>
                                        <option>005. Extortion, blackmail, protection:demanding or receiving money or 
                                                anything of value in return for protection against others to avoid 
                                                bodily harm, or under threat of informing on others.</option>
                                        <option>006. Escape</option>
                                        <option>008. Setting a fire</option>
                                        <option>009. Destroying, altering or damaging Detention Center Property or the 
                                                property of another person, when the value of the damaged property 
                                                exceeds $50.00</option>
                                        <option>010. Stealing (Theft)</option>
                                        <option>011. Tampering with or blocking of any locking device</option>
                                        <option>013. Possession or introduction of a gun, firearm, weapon, sharpened 
                                                instrument, knife or unauthorized tool</option>
                                        <option>014. Possession, introduction, or use of any narcotics, narcotic 
                                                paraphernalia, drugs, or intoxicants not prescribed for the individual 
                                                by medical services</option>
                                    </Input>
                            </FormGroup>
                            </div>

                            {/*Text area for narrative.*/}
                            <div className="row">
                            <FormGroup className="col">
                                <Label htmlFor="narrative">Narrative</Label>
                                    <Input type="textarea" id="narrative" name="narrative" placeholder="Write Narrative"
                                        value={this.state.narrative}
                                        onChange={this.handleInputChange}>
                                    </Input>
                            </FormGroup>
                            </div>

                            <div className="row">
                                <FormGroup className="col">
                                <Label htmlFor="actionTaken">Action Taken:</Label>
                                    <Input type="select" id="actionTaken" name="actionTaken"
                                        value={this.state.actionTaken}
                                        onChange={this.handleInputChange}>
                                        <option value="" disabled defaultValue>Select Action Taken</option>
                                        <option>Warning</option>
                                        <option>Informal Resolution</option>
                                        <option>Staff Resolution</option>
                                    </Input>                  
                                </FormGroup>
                                <FormGroup className="col-7">
                                <Label htmlFor="sanction">Sanctions:</Label>
                                    <Input type="textarea" id="sanction" name="sanction" 
                                        value={this.state.sanction}
                                        onChange={this.handleInputChange}>
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
                                        value={this.state.officer}
                                        onChange={this.handleInputChange} />
                            </FormGroup>
                            <FormGroup className="col-5">
                                <Label htmlFor="offSerial">Officer Serial:</Label>
                                    <Input type="text" id="offSerial" name="offSerial"
                                        value={this.state.offSerial}
                                        onChange={this.handleInputChange} />
                            </FormGroup>
                            </div>
                            <div className="row">
                                <SignatureCanvas
                                    penColor="blue"
                                    canvasProps={{
                                    className: "write-name-canvas col-6 border",
                                    }}
                                    ref={(ref) => {
                                    this.canvas = ref;
                                    }}
                                />
                                <div>
                                    <img
                                    className="write-name-img"
                                    src={
                                        this.state.offSig === ""
                                        ? (this.state.offSig = "")
                                        : this.state.offSig                                  
                                    }
                                    alt=""
                                    />
                                </div>
                                <div className="write-name-operation">
                                                <Button onClick={() => this.reset()} style={{marginLeft: 5, marginRight: 5, marginTop: 100}}>Reset Signature</Button>
                                                <Button onClick={() => this.save()} style={{marginTop:100}}>Save Signature</Button>
                                </div>
                                </div>
                                <Button type="submit" value="submit" color="primary" style={{marginTop:10}}>Submit</Button>
                        </Form>
                    </CardBody>
                </Card>
            </div>
            
            </React.Fragment>
            
        );
        
    }

}


export default Citation;