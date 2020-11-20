import React, { Component } from "react";
import {Button} from "@material-ui/core";

export default class CreateRoomPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Button color="primary">create</Button>;
  }
}