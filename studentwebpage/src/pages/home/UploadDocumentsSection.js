
/**
 * section 3, background image
 */

import React, { useState,useRef,useEffect } from "react";
import './index.css'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const Index = ({}) => {
    const classes = useStyles();
    const [Files,setFiles] = useState([])
    const FileUpload = files =>{
      console.log('FileUpload=',files)
      let filelist = []
      for (let index = 0; index < files.length; index++) {
        filelist.push(files[index])
        // console.log(files[index])
      }
      console.log('filelist=',filelist)

      setFiles(filelist)
    }
    return(
        <div className={'FormSection-container'}>
            <div className={'FormSection-title'}>Upload Documents</div>
            <div className={'FormSection-gap'} />
            <div className={'FormSection-content'}>To avoid delays in processing your application, please upload the following documents here. Please note the following restrictions: File Size: 4MB limit. File Types: pdf (preferred), jpg, doc, docx.</div>
            <ul className={'UploadDocumentsSection-documents'}>
              <li className={'UploadDocumentsSection-document'}>Passport (Domestic students may alternatively upload licence or other photo ID.)</li>
              <li className={'UploadDocumentsSection-document'}>Academic Graduation Certificates</li>
              <li className={'UploadDocumentsSection-document'}>Academic Transcripts of Results</li>
              <li className={'UploadDocumentsSection-document'}>Resume if relevant</li>
              <li className={'UploadDocumentsSection-document'}>Evidence of English language level (International students only)</li>
            </ul>
            <div className={'FormSection-content'}>
              <input
                className={'UploadDocumentsSection-Button'}
                id="contained-button-file"
                multiple
                type="file"
                onChange={e=>FileUpload(e.target.files)}
              />
              <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span">Multiple Files Upload</Button>
              </label>
            </div>
            <div className={'FormSection-gap'} />
            <div className={'FormSection-content'}>Uploaded Files:</div>
            <ul className={'UploadDocumentsSection-documents'}>
              {Files.map((file,index)=>(
                <li className={'UploadDocumentsSection-document'} key={index}>{file.name}</li>
              ))}
            </ul>
        </div>
    )
}
  
export default Index;

const useStyles = makeStyles((theme) => ({
    TextField: {
      flex:1,
      marginLeft:20,
    },
    TextField_left: {
      flex:1,
    },
    formControl: {
      flex:1,
      minWidth: 120,
      marginLeft:20,
    },
    formControl_left: {
      flex:1,
      minWidth: 120,
    },
}));