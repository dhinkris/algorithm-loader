const SplitVolume=[
    {
        "inputs": [
            {
                "command-line-flag": "",
                "name": "Input",
                "optional": false,
                "list": false,
                "command-line-key": "[input]",
                "type": "File",
                "id": "input_file",
                "description": "Input File to split volumes"
            },
        ],
        "name": "Split Volumes",
        "command-line": "splitvolume [input] [out] [options]",
        "tool-version": "",
        "output-files": [
            {
                "path-template": "[OUT_FILE]_phase_??.nii.gz",
                "optional": true,
                "type": "File",
                "name": "Phase file",
                "command-line-key":"[out]",
                "id": "output_phase_file"
            },
        ],
        "description": "BET, as implemented in Nipype (module: nipype.interfaces.fsl, interface: BET)."
    }


]
export default SplitVolume;