const BrainLocalization={
    "name":"Brain localizer",
    "input":[
        {
            "command-line-flag":"",
            "name":"Input",
            "optional": false,
            "list": false,
            "command-line-key":"[input]",
            "type": "File",
            "id":"input_file",
            "Description": "Raw single phase .nii.gz or .nii file",
            "extension":["nii.gz", "nii"]
        }
    ],

    "command-line": "detectBrain subject_T2.nii.gz output_folder",
    "output":[
        {
            "command-line-flag":"-o",
            "name":"Output",
            "optional": true,
            "list": true,
            "command-line-key":"",
            "type": "File",
            "id":"output_file",
            "Description": "Output file",
            "extension":["nii.gz", "nii"],
            "prefix": "_mask"
        }
    ],
    "tool-version":"",
    "schema-version":"1.0",
    "description":"This script localizer the brain region and provides binary mask enclosing fetal brain"
}


export default BrainLocalization;