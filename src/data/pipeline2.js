
const pipeline=
    {
        "connections": {
            "connection": [
                {
                    _source:"input_angle_rep_unique_id2",
                    _sink:"output_mask_file_unique_id1"
                },
                {
                    _source:"",
                    _sink:""
                }

            ]
        },
        "moduleGroup": {
            module: [
                {
                    "id": "unique_id1",
                    "name": "BET",
                    "command-line": "nipype_cmd nipype.interfaces.fsl BET [A",
                    "tool-version": "5.0.6",
                    "docker-index": "http://index.docker.io",
                    "schema-version": "0.2-snapshot",
                    "inputs": [
                        {
                            "command-line-flag": "—args",
                            "name": "Args",
                            "optional": true,
                            "list": false,
                            "command-line-key": "[ARGS]",
                            "type": "String",
                            "id": "input_args_unique_id1",
                            "description": "A string. Additional parameters to the command.",
                            "value": "555555555555555555555555"
                        },
                        {
                            "command-line-flag": "—threshold",
                            "name": "Threshold",
                            "optional": true,
                            "list": false,
                            "command-line-key": "[THRESHOLD]",
                            "type": "String",
                            "id": "input_threshold_unique_id1",
                            "description": "A boolean. Apply thresholding to segmented brain image and mask.",
                            "value": "asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf"
                        }
                    ],
                    "output-files": [
                        {
                            "path-template": "[OUT_FILE]_mask.nii.gz",
                            "optional": true,
                            "type": "File",
                            "name": "Mask file",
                            "id": "output_mask_file_unique_id1",
                            "value": "///////somepath///////"
                        }
                    ],
                },
                {
                    "id": "unique_id2",
                    "inputs":[
                        {
                            "command-line-flag": "—angle_rep",
                            "name": "Angle rep",
                            "optional": true,
                            "list": false,
                            "command-line-key": "[ANGLE_REP]",
                            "type": "String",
                            "id": "input_angle_rep_unique_id2",
                            "description": "’quaternion’ or ‘euler’. Representation of rotation angles."
                        },
                        {
                            "command-line-flag": "—apply_isoxfm",
                            "name": "Apply isoxfm",
                            "optional": true,
                            "list": false,
                            "command-line-key": "[APPLY_ISOXFM]",
                            "type": "Number",
                            "id": "input_apply_isoxfm_unique_id2",
                            "description": "A float. As applyxfm but forces isotropic resampling."
                        }
                    ],
                    "output-files":[
                        {
                            "path-template": "[OUT_FILE]",
                            "optional": true,
                            "type": "File",
                            "name": "Out file",
                            "id": "output_out_file"
                        }
                    ]
                }
            ]
        },
        name:"created_pipeline"

    }