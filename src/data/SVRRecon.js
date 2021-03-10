const algorithm={
    "name": "SVR reconstruction",
    "input": [
        {
            "command-line-flag":"-i",
            "name":"Input",
            "optional": false,
            "list": true,
            "command-line-key":"[input]",
            "type": "File",
            "id":"input_file",
            "Description": "[stack_1] .. [stack_N]  The input stacks Nifti or Analyze format.",
            "extension":["nii.gz", "nii"]
        },
        {
            "command-line-flag":"-m",
            "name":"Mask",
            "optional": false,
            "list": false,
            "command-line-key":"[mask]",
            "type": "File",
            "id":"mask_file",
            "Description": "Binary mask to define the region od interest. Nifti or Analyze format.",
            "extension":["nii.gz", "nii"]
        },
        {
            "command-line-flag":"-r",
            "name":"Resolution",
            "optional": true,
            "list": false,
            "command-line-key":"[resolution]",
            "type": "Number",
            "id":"resolution",
            "Description": "Binary mask to define the region od interest. Nifti or Analyze format.",
            "extension":""
        },
        {
            "command-line-flag":"-i",
            "name":"Iterations",
            "optional": false,
            "list": false,
            "command-line-key":"[iterations]",
            "type": "Number",
            "id":"resolution",
            "Description": "Number of registration-reconstruction iterations.",
            "extension":""
        },
    ],
    "output": [
        {
            "command-line-flag":"-o",
            "name": "Output",
            "option": false,
            "list" : false,
            "command-line-key":"",
            "type": "File",
            "id": "output_file",
            "description" :"",
            "extension":["nii.gz", "nii"],
            "phase": "_recon"
        }
    ],
    "tool-version":" ",
    "schema-version": "1.0",
    "description": ""
}

export default algorithm;