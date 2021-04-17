import { Button } from '@material-ui/core';
import axios from 'axios';

import React, { Component } from 'react';

class FileUpload extends Component {

    state = {

        // Initially, no file is selected
        selectedFile: null
    };

    // On file select (from the pop up)
    onFileChange = event => {

        // Update the state
        this.setState({ selectedFile: event.target.files[0] });

    };

    // On file upload (click the upload button)
    onFileUpload = () => {

        // Create an object of formData
        const formData = new FormData();

        // Update the formData object
        formData.append(
            "myFile",
            this.state.selectedFile,
            this.state.selectedFile.name
        );

        // Details of the uploaded file
        console.log(this.state.selectedFile);

        // Request made to the backend api
        // Send formData object
        axios.post("api/uploadfile", formData);
    };

    // File content to be displayed after
    // file upload is complete
    fileData = () => {

        if (this.state.selectedFile) {

            return (
                <div>
                    <h2 style={{padding: '1rem', fontSize: '2rem'}}>File Details:</h2>

                    <p>File Name: {this.state.selectedFile.name}</p>


                    <p>File Type: {this.state.selectedFile.type}</p>


                    <p>
                        Last Modified:{" "}
                        {this.state.selectedFile.lastModifiedDate.toDateString()}
                    </p>

                </div>
            );
        } else {
            return (
                <div>
                    <br />
                    <h4>Choose before Pressing the Upload button</h4>
                </div>
            );
        }
    };

    render() {

        return (
            <div style={{marginTop: '4rem'}}>
                <h2 style={{padding: '2rem', fontSize: '3rem'}}>
                    ADD ASSIGNMENT
			    </h2>
                <div>
                    <input type="file" onChange={this.onFileChange} />
                    <Button variant="contained" color="primary" onClick={this.onFileUpload}>
                        Upload
				</Button>
                </div>
                {this.fileData()}
            </div>
        );
    }
}

export default FileUpload;
