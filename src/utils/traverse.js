import _ from "lodash";
import { algo } from '../algorithm/fetalBrainPipelineInterface';

// console.log(algo.binaryMaths)
// const data = [
//   'splitVolume',
//   'localizeBrain',
//   'svrecon',
//   'dlbasedonreorientation',
//   'binaryMaths',
//   'flirt',
//   'flirt',
//   'dlbasedonwholebrain',
//   'fslmaths',
//   'dlbasedonsegmentation'
// ]


// console.log(binaryMaths)
const _data = [
  {"splitVolume1":algo.splitVolume},
  {"localizeBrain1":algo.localizeBrain},
  {"svrRecon1":algo.svrRecon},
  {"wholeBrainSegmentaion_nr1":algo.wholeBrainSegmentaion_nr},
  {"binaryMaths1":algo.binaryMaths},
  {"flirt1":algo.flirt},
  {"flirt2":algo.flirt},
  {"wholeBrainSegmentation1":algo.wholeBrainSegmentation},
  {"wholeBrainSegmentaion_nr1":algo.wholeBrainSegmentaion_nr}
]
const data = [
  {
    id: 1,
    name: "box1",
    output: [
      {
        name: "box1-output",
        value: "b1-o1"
      }
    ],
    input: [
      {
        name: "box1-input1",
        value:"b1-i1"
      },
      {
        name: "box1-input2",
        value:"b1-i2"
      }
    ]
  },
  {
    id: 2,
    name: "box2",
    output: [
      {
        name: "box2-output",
        value: "b2-o1"
      }
    ],
    input: [
      {
        name: "box2-input1",
        value: "b2-i1"
      },
      {
        name: "box2-input2",
        value: "b2-i2"
      }
    ]
  },
  {
    id: 3,
    name: "box3",
    output: [
      {
        name: "box3-output",
        value: "b3-o1"
      }
    ],
    input: [
      {
        name: "box3-input1",
        value: "b3-i1"
      },
      {
        name: "box3-input2",
        value: "b3-i2"
      }
    ]
  },
  {
    id: 4,
    name: "box4",
    output: [
      {
        name: "box4-output",
        value: "b4-o"
      }
    ],
    input: [
      {
        name: "box4-input1",
        value: "b4-i1"
      },
      {
        name: "box4-input2",
        value: "b4-i2"
      }
    ]
  }
];

//box1.input1 -> string
//box1.input2 -> string
//box2.input2 -> string
//box1.output <-> box2.input1
//box4.input2 -> string
//box2.output <-> box4.input1
//box3.output <-> box4.input2
//box4.output -> FINAL RESULT

const connections = [
  {
    _source: "box1-output",
    _sink: "box2-input1"
  },
  {
    _source: "box2-output",
    _sink: "box4-input1"
  },
  {
    _source: "box3-output",
    _sink: "box4-input2"
  }
];

/** Making this result object as global for now. Should be localized later */
var resultObj = {};

var edgeToSourceDict = {};
var edgeToSinkDict = {};

function getSourceNode(edgeName) {
//   console.log("**** " + edgeName);
//   console.log(edgeToSourceDict);
  /** This segment might be unnecessary */
  if (!_.has(edgeToSourceDict, edgeName)) {
    return null;
  }

//   console.log("Entering here");
  return edgeToSourceDict[edgeName];
}

function getSinkNode(edgeName) {
  /** This segment might be unnecessary */
  if (!_.has(edgeToSinkDict, edgeName)) {
    return null;
  }

  return edgeToSinkDict[edgeName];
}

function checkNodeAndAdd(parentName) {
  if (!_.has(resultObj, parentName)) {
    resultObj[parentName] = { incomingBoxes: [], outgoingBoxes: [] };
  }
}

/** This function constructs the parent based on only the output edges */
function constructEdgeToSourceDict() {
  data.map((item) => {
    item.output.map((outputItems) => {
      edgeToSourceDict[outputItems.name] = item;
    });
  });
}

/** This function constructs the parent based on only the input edges */
function constructEdgeToSinkDict() {
  data.map((item) => {
    item.input.map((outputItems) => {
      edgeToSinkDict[outputItems.name] = item;
    });
  });
}

/**Start point of execution */
constructEdgeToSourceDict();
constructEdgeToSinkDict();

// console.log(edgeToSourceDict);
// console.log(edgeToSinkDict);

const traverse = () => {
    connections.map((item) => {
        var sourceParent = getSourceNode(item._source);
        var sinkParent = getSinkNode(item._sink);
      
        // console.log("--- " + sourceParent);
        if (sourceParent !== null) {
          /** Adding node to the graph if the box is not already there */
          checkNodeAndAdd(sourceParent.name);
          checkNodeAndAdd(sinkParent.name);
      
          /**By this time graph will have the parent nodes of source and sink */
          /** Populate the edges */
        
          console.log(sinkParent)
          resultObj[sourceParent.name].outgoingBoxes.push(sinkParent);
          resultObj[sinkParent.name].incomingBoxes.push(sourceParent);
        } else {
          /** Should be hanging string values */
        }
      
        console.log(resultObj);
      });

    //traverse in order
      //if no dependency
            //--submint job and add the job id to the list
      // else
            //find the corresponding id 
            // add dependency
            // --submint job and add the job id to the list
    
    let sequence=[];
    Object.keys(resultObj).map((item)=> {
        if (resultObj[item].incomingBoxes.length==0){
            sequence.push({name: item, jid: Math.floor(Math.random()*90000) + 10000, dependencies: null})
        }
    })

    Object.keys(resultObj).map((item)=> {
        if (resultObj[item].incomingBoxes.length!=0){
            let dependency=[]
            resultObj[item].incomingBoxes.map((_dependency)=>{
                if (_.find(sequence, {name: _dependency.name})){
                    dependency.push(_.find(sequence, {name: _dependency.name}))
                }
            })
            sequence.push({name: item, jid: Math.floor(Math.random()*90000) + 10000, dependencies: dependency})
        }
    })

    sequence.map((_sequence)=> {
        var _command='sbatch '
        let module  = _.find(data, { "name": _sequence.name})
        
        if (_sequence.dependencies){
            let _jid='--dependency '
            _sequence.dependencies.map((_dependency)=>{
                _jid+=_dependency.jid+":"
            })
            _command+=_jid
        }
        _command+=' '+ module.name+ ' '

        module.input.map((_input)=>{
            _command+= '--' + _input.name + ' ' + _input.value + ' '
        })
        module.output.map((_output)=>{
            _command+= '--' + _output.name + ' ' + _output.value + ' '
        })
        
        console.log(_command)
    })
    
}



export default traverse;

