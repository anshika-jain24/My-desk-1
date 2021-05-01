import React, {useState,useEffect} from 'react';
import './styles.css';
import { ASSIGNMENT_DATA, PROJECT_DATA, TESTS_DATA, MEDICAL_DATA, DOCUMENT_DATA, NOTES_DATA } from '../../data/staticData';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Button from '@material-ui/core/Button';

function Assignment({type}) {
    const [Data, setData] = useState();
    useEffect(() => {
        if(type=="assignment")
        {
            setData(ASSIGNMENT_DATA);
        }
        else if(type=="projects")
        {
            setData(PROJECT_DATA);
        }
        else if(type=="tests")
        {
            setData(TESTS_DATA);
        }
        else if(type=="medical")
        {
            setData(MEDICAL_DATA);
        }
        else if(type=="documents")
        {
            setData(DOCUMENT_DATA);
        }
        else if(type=="notes")
        {
            setData(NOTES_DATA);
        }
    }, [type]);
    
    return (
    Data!=null ? <><div className="row d-flex justify-content-center mt-100 mb-100">
    <div className="col-lg-6">
        <div className="card1">
            <div className="card1-body text-center">
                <h4 className="card1-title m-b-0">{Data.mainTitle}</h4>
            </div>
            <div>
                <div className="upload">
                    <form className="form">
                        <input
                            id="fileInput"
                            type="file"
                            name="image"
                            className="form-input"
                        />
                        <button className="btn_upload" type="submit">
                            Upload
                        </button>
                    </form>
                </div>
            </div>
            <ul className="list-style-none">
                { Data.sections.map( assignmentdata => {
                    return(
                    <li className="d-flex no-block card1-body" style={{borderBottom: '1px solid rgba(0, 0, 0, 0.4)'}}><ArrowForwardIcon style={{marginTop: '8px'}}/>
                        <div> <a href="#" className="m-b-0 font-medium p-0 heading" data-abc="true">{assignmentdata.title}</a> <span className="text-muted">{assignmentdata.description}</span> </div>
                        <div className="ml-auto">
                            <div className="tetx-right">
                                <h5 className="text-muted m-b-0">{assignmentdata.date}</h5> <span className="text-muted font-16">{assignmentdata.month}</span>
                            </div>
                        </div>
                    </li>
                    )
                })}
            </ul>
    </div>
</div>
</div></>:<></>
    )
}

export default Assignment
