// const SplitVolume=[
//     {
//         "inputs": [
//             {
//                 "command-line-flag": "",
//                 "name": "Input",
//                 "optional": false,
//                 "list": false,
//                 "command-line-key": "[input]",
//                 "type": "File",
//                 "id": "input_file",
//                 "description": "Input File to split volumes"
//             },
//         ],
//         "name": "Split Volumes",
//         "command-line": "splitvolume [input] [out] [options]",
//         "tool-version": "",
//         "output-files": [
//             {
//                 "path-template": "[OUT_FILE]_phase_??.nii.gz",
//                 "optional": true,
//                 "type": "File",
//                 "name": "Phase file",
//                 "command-line-key":"[out]",
//                 "id": "output_phase_file"
//             },
//         ],
//         "description": "BET, as implemented in Nipype (module: nipype.interfaces.fsl, interface: BET)."
//     }
//
//
// ]
// let add = {
//     name: "add",
//     input:[
//         {name: "i_var_1",  optional: false},
//         {name: "i_var_2",  optional: false}
//     ],
//     output:[
//         {name: "o_var_1",  optional: false}
//     ]
// }
//
// let sub = {
//     name: "sub",
//     input:[
//         {name: "i_var_1",  optional: false},
//         {name: "i_var_2",  optional: false}
//     ],
//     output:[
//         {name: "o_var_1",  optional: false}
//     ]
// }
//
// let mul = {
//     name: "mul",
//     input:[
//         {name: "i_var_1",  optional: false},
//         {name: "i_var_2",  optional: false}
//     ],
//     output:[
//         {name: "o_var_1",  optional: false}
//     ]
// }
//
// let div = {
//     name: "div",
//     input:[
//         {name: "i_var_1",  optional: false},
//         {name: "i_var_2",  optional: false}
//     ],
//     output:[
//         {name: "o_var_1",  optional: false}
//     ]
// }
//
// // const pipeline={
// //     id:"0203030405050ie0234234",
// //     connections:{
// //         connection:[
// //             {
// //                 source: "add_1.o_var_1",
// //                 sink: "sub_1.i_var_1"
// //             }
// //         ]
// //     },
// //     modules:[
// //         {
// //             id: "add_1",
// //             name: "add",
// //             input:[
// //                 {
// //                     id:"add_1.i_var_1",
// //                     name:"i_var_1",
// //                     optional: false,
// //                     value: 5
// //                 },
// //                 {
// //                     id:"add_1.i_var_2",
// //                     name:"i_var_2",
// //                     optional: false,
// //                     value: 10
// //                 }
// //             ],
// //             output:[
// //                 {
// //                     id:"add_1.o_var_1",
// //                     name:"o_var_1",
// //                     value: 0
// //                 }
// //             ]
// //         },
// //         {
// //             id: "sub_1",
// //             name: "sub",
// //             input:[
// //                 {
// //                     id:"sub_1.i_var_1",
// //                     optional: false,
// //                     name:"i_var_1",
// //                 },
// //                 {
// //                     id:"sub_1.i_var_2",
// //                     optional: false,
// //                     name:"i_var_2",
// //                     value: 10
// //                 }
// //             ],
// //             output:[
// //                 {
// //                     id:"sub_1.o_var_1",
// //                     name:"o_var_1",
// //                 }
// //             ]
// //         }
// //     ]
// // }
//
// get_source = (pipeline, id) => {
//     let sink = pipeline.connections.connection.find((source) => {
//         return source.sink === id
//     })
//     return sink.source.split('.')
// }
//
// validate_source = (source_type, sinc_type) => {
//
// }
//
// executor = (action,a) => {
//     var result;
//     var action = action
//     console.log(action)
//     switch (action) {
//         case 'add':
//             result = a[0]+a[1]
//             break;
//         case 'sub':
//             result = a[0]-a[1]
//             break;
//         case 'mul':
//             result = a[0]*a[1]
//             break;
//         case 'div':
//             result = a[0]/a[1]
//             break;
//         default:
//             result = 0
//     }
//     console.log(result)
//     return result
// }
//
// execute_pipeline = (pipeline) => {
//     pipeline.modules.map((each_module) => {
//         // get input
//         // sub_1.i_var_1 = add_1.o_var_1
//         // add_1.o_var_1 = add_1.i_var_1 + add_1.i_var_2
//         // sub_1.o_var_1 = sub_1.i_var_1 + sub_1.i_var_2
//         // execute & return action
//
//         var algo_name = each_module.name
//         var input = []
//
//         each_module.input.map((each_module_input) => {
//             if (each_module_input.optional===false && each_module_input.value===undefined){
//                 // console.log(get_source(pipeline, each_module_input.id))
//             } else{
//                 // input.push(each_module_input.name)
//                 input.push(each_module_input.value)
//             }
//         })
//         executor(algo_name, input)
//         // console.log(input)
//         // console.log(algo_name+' '+input)
//     })
// }
// run_pipeline = (pipeline) => {
//     // validate pipeline
//     execute_pipeline(pipeline)
// }
//
// var pipeline = {
//     connection: [],
//     modules: []
// }
// makeid = (length) => {
//     var text = "";
//     var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//
//     for (var i = 0; i < length; i++)
//         text += possible.charAt(Math.floor(Math.random() * possible.length));
//
//     return text;
// }
//
// add_algorithm_to_pipeline = (pipeline, algorithm) => {
//     var unique_id = makeid(5)
//     algorithm.id = algorithm.name+'_'+unique_id
//     // algorithm.input.map((each_input) =>{
//     //     each_input.id = each_input.name+'_'+unique_id
//     // })
//     // algorithm.output.map((each_output) =>{
//     //     each_output.id = each_output.name+'_'+unique_id
//     // })
//     pipeline.modules.push(algorithm)
//     return pipeline
// }
//
// update_pipeline_input = (pipeline,id, attr, value) => {
//     var pipeline_to_update = pipeline.modules.find((module) => {
//         return module.id === id
//     })
//     var input_index_to_update = pipeline_to_update.input.findIndex((ip) => {
//         return ip.name === attr
//     })
//     pipeline_to_update.input[input_index_to_update].value = value
//     // var attribut_to_update = pipeline_to_update
//     // pipeline.modules.push(algorithm)
//     return pipeline
// }
//
// connect_pipeline = (pipeline, source, sink, source_id, sink_id) => {
//     pipeline.connection.push({source: source+'.'+source_id, sink: sink+'.'+sink_id})
//     console.log(pipeline)
//     return pipeline
// }
//
// add_algorithm_to_pipeline(pipeline, add)
// update_pipeline_input(pipeline, pipeline.modules[0].id,'i_var_1', 1)
// update_pipeline_input(pipeline, pipeline.modules[0].id,'i_var_2', 2)
//
// add_algorithm_to_pipeline(pipeline, div)
// connect_pipeline(pipeline, pipeline.modules[0].id, pipeline.modules[1].id,'o_var_1', 'i_var_1')
// update_pipeline_input(pipeline, pipeline.modules[1].id,'i_var_2', 3)
//
// add_algorithm_to_pipeline(pipeline, mul)
// connect_pipeline(pipeline, pipeline.modules[1].id, pipeline.modules[2].id,'o_var_1', 'i_var_1')
// update_pipeline_input(pipeline, pipeline.modules[2].id,'i_var_2', 4)
//
// add_algorithm_to_pipeline(pipeline, SplitVolume)
// // execute_pipeline(pipeline)



var _ =require('lodash')


const obj={
    subject_id:'fetus_002022', roi_values:[{uid: 'scan_1', ga:20,cerebellum:300},{uid: 'scan_2',ga:22,cerebellum:301}]
}

console.log(_.filter(obj.roi_values, 'cerebellum'));

handleDelete = (response) => {
    notification[response.type]({message: response.message, description: response.description});
}


this.handleDelete(response)
