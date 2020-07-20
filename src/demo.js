/* eslint-disable no-use-before-define */
import React, { Component } from "react";
import useAutocomplete from "@material-ui/lab/useAutocomplete";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import styled from "styled-components";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default class sample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedroles: [],
      data: [
        { name: "SVM chennai", oid: "svmchn" },
        { name: "SVM IIT", oid: "svmiit" },
        { name: "SVM Beacon", oid: "39757" }
      ]
    };
  }

  componentDidMount() {
    let value = [{ name: "Solverminds chennai", oid: "svmchn" }];
    this.setState({
      selectedroles: value
    });
  }
  onRolesChange = value => {
    this.setState({
      selectedroles: value
    });
  };
  render() {
    return (
      <div>
        <Grid item xs={12} sm={12} lg={12} md={12}>
          <Autocomplete
            size="small"
            multiple
            id="roles"
            options={this.state.data}
            getOptionLabel={option => option.name}
            value={this.state.selectedroles}
            renderInput={params => (
              <TextField
                {...params}
                variant="outlined"
                label="Select recipient insitute"
                placeholder="placeholder"
              />
            )}
            onChange={(event, value) => this.onRolesChange(value)}
            getOptionSelected={(option, value) => {
              value = this.state.selectedroles;
              for (let y = 0; y < value.length; y++) {
                console.log("option.rlid\t", option.oid, value[y].oid);
                if (option.oid === value[y].oid)
                  return option.oid === value[y].oid;
              }

              return false;
            }}
            filterSelectedOptions
          />
        </Grid>
      </div>
    );
  }
}
