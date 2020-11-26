import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { Link } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
export default class CreateRoomPage extends Component {
  defaultValue=2;
  constructor(props) {
    super(props);
    this.state={
      votesToSkip:this.defaultValue,
      guestCanPause:true,
    }
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleGuestCanPauseChange=this.handleGuestCanPauseChange.bind(this);
    this.handleVotesToSkipChange=this.handleVotesToSkipChange.bind(this);
  }
  handleVotesToSkipChange(e){
    this.setState({votesToSkip:e.target.value});
  }
  handleGuestCanPauseChange(e){
    console.log(e.target.value);
    this.setState({guestCanPause:e.target.value==="true"?true:false,});
  }
  handleSubmit(){
    const options={
      method:"POST",
      headers:{"Content-Type":"application/json",},
      body:JSON.stringify({
        votes_to_skip:this.state.votesToSkip,
        guest_can_pause:this.state.guestCanPause,
      })
    }
    fetch("/api/create-room",options).then((response)=> response.json()).then((data)=>this.props.history.push(`/room/${data.code}`));
  }

  render() {
    return (
      <Grid container spacing={4}>
        <Grid item align="center" xs={12}>
          <Typography component="h4" variant="h4">
            Create a new room
          </Typography>
        </Grid>
        <Grid item align="center" xs={12}>
          <FormControl component="fieldset">
            <FormHelperText>
              <div align="center">Guest control of playback</div>
            </FormHelperText>
            <RadioGroup row defaultValue="true" onChange={this.handleGuestCanPauseChange}>
              <FormControlLabel value="true" control={<Radio color="primary"/>} label="Pause/Start" labelPlacement="bottom"/>
              <FormControlLabel value="false" control={<Radio color="seconary"/>} label="No control" labelPlacement="bottom"/>
            </RadioGroup>
          </FormControl>
          </Grid>
          <Grid item xs={12} align="center">
          <FormControl>
            <TextField defaultValue={this.defaultValue} onChange={this.handleVotesToSkipChange} required={true} type="number" inputProps={{textAlign:"center",min:1,}}/>
            <FormHelperText><div align="center">Votes to skip songs</div></FormHelperText>
          </FormControl>
          </Grid>
          <Grid item xs={12} align="center">
            <Button color="primary" variant="contained" onClick={this.handleSubmit} >Create Room</Button>
          </Grid>
          <Grid item xs={12} align="center">
            <Button color="secondary" variant="contained" to="/" component={Link}>Back </Button>
          </Grid>
      </Grid>
    );
     
  
  }
}