const SplitVolume=
    {
        "inputs": [
            {
                "command-line-flag": "-i",
                "name": "Input",
                "optional": false,
                "list": true,
                "command-line-key": "[input]",
                "type": "File",
                "id": "input_file",
                "description": "Input File to split volumes"
            },
            {
                "command-line-flag": "-t",
                "name": "Options",
                "optional": false,
                "list": false,
                "command-line-key": "[optitons]",
                "type": "String",
                "id": "options",
                "description": "Options to split"
            }
        ],
        "output-files": [
            {
                "command-line-flag": "-o",
                "path-template": "[OUT_FILE]_phase_??.nii.gz",
                "optional": true,
                "type": "File",
                "name": "Phase file",
                "command-line-key":"[out]",
                "id": "output_phase_file",
                "prefix":"_phase_"
            },
        ],
        "name": "Split Volumes",
        "command-line": "splitvolume --input-files [input] --output-files [output] --options [options]",
        "tool-version": "",
        "description": "Split multiphase SSFSEs to individual phases."
    }
export default SplitVolume;