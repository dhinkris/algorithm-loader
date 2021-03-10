let data = [
    {
        commandtoExecute: "command 1",
        name: "brainlocalization"
    },
    {
        commandtoExecute: "command 2",
        name: "svrrecon"
    },
    {
        commandtoExecute: "command 3",
        name: "reorient"
    },
    {
        commandtoExecute: "command 4",
        name: "brain extraction"
    },
    {
        commandtoExecute: "command 5",
        name: "brain segmentation"
    }
]

data.map((pipeline)=> {
    console.log(pipeline.commandtoExecute)
})