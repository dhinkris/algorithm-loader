import React from 'react';


const l1Questions=
    [
        {
            id:"q-1",
            text:"Subject ID",
            label: "Subject ID",
            id:'q1',
            questionType:"text",
            questionWidth:"true",
            unit:'',
            style:{
                rows: "",
                paddingTop:""
            },
            subque_map:'NA',
            line:"multiline"
        },
        {
            id:"q-2",
            text: "Type of Visit",
            label: "Type of Visit",
            option: ["Fetal", "18 months", "New Born"],
            questionType: "option",
            id:'q2',
            subque_map:'NA'
        }
    ]

const l2Questions=
    [
        {
            group:'Fetal',
            order:1,
            text: "Enter your GA (e.g. 28 weeks)",
            dbmarker: "Gestational Age",
            questionType: "text",
            questionWidth: "true",
            id:'q-2-1-1',
            unit: '',
            style:{
                rows: "",
                paddingTop:""
            },
            subque_map:'NA',
            graphType: "line",
            line:"multiline"
        },
        {
            group:'Fetal',
            order:2,
            text: "1. How satisfied were you with your overall experience with us today? ",
            dbmarker: "Overall experience",
            option: ["Unsatisfied", "Neutral", "Satisfied","Very satisfied"],
            id:'q-2-1-2',
            questionType: "option",
            subque_map:'NA',
            graphType: "bar",
        },
        {
            group:'Fetal',
            order:3,
            text: "2. Once the study paperwork was completed, how long did you wait before getting into the scanner?",
            dbmarker: "Wait Time",
            option: ["15-20 mins", "20-30 mins", "30-45 mins", "45-60 mins", "60-90 mins", "over 1 1/2 hours"],
            id:'q-2-1-3',
            questionType: "option",
            subque_map:'NA',
            graphType: "bar"
        },
        {
            group:'Fetal',
            order:4,
            text: "3. How comfortable were you in the scanner?",
            dbmarker: "Comfortness inside scanner",
            option: ["Not Comfortable", "Moderately Comfortable", "Very Comfortable"],
            id:'q-2-1-4',
            questionType: "option",
            subque_map:'NA',
            graphType: "bar"
        },
        {
            group:'Fetal',
            order:5,
            text: "4. How likely are you to recommend participating in our research to your family and friends? (1 being not likely and 5 being highly likely)",
            dbmarker: "Likelyhood for recommendation",
            option: ["1", "2", "3", "4", "5"],
            id:'q-2-1-5',
            questionType: "option",
            subque_map:'NA',
            graphType: "bar"
        },
        {
            group:'Fetal',
            order:6,
            text: "5. How can we make this experience better for you? Please provide any questions and comments. (no more than 200 characters)",
            dbmarker: "Comments",
            questionType: "text",
            questionWidth: "true",
            id:'q-2-1-6',
            unit: '',
            style: {
                rows: "4",
                paddingTop: "20"
            },
            subque_map:'NA',
            graphType: "text",
            line:"multiline"
        },
        {
            group:'Fetal',
            order:7,
            text: "6. Was the coordinator able to answer your questions about the visit?",
            dbmarker: "Knowledge of Coordinator",
            option: ["Unable to answer questions", "Showed Limited knowledge", "Knowledgeable", "Very knowledgeable"],
            id:'q-2-1-7',
            questionType: "option",
            subque_map:'NA',
            graphType: "bar"

        },
        {
            group:'New Born',
            text: "Please Enter your child’s age  (e.g.7 days)",
            dbmarker: "Child's age",
            questionType: "text",
            questionWidth: "true",
            id:'q-2-2-1',
            unit: '',
            style:{
                rows: "",
                paddingTop:""
            },
            subque_map:'NA',
            graphType: "line",
            line:"multiline"
        },
        {
            group:"New Born",
            text: "1. How satisfied were you with your overall experience with us today?",
            dbmarker: "Overall Experience",
            option: ["Unsatisfied", "Neutral","Satisfied", "Very satisfied"],
            id:'q-2-2-2',
            questionType: "option",
            subque_map:'NA',
            graphType: "bar"
        },
        {
            group:"New Born",
            text: "2. Was the coordinator able to answer your questions about the Newborn Visit?",
            dbmarker: "Knowledge of Coordinator",
            option: ["Unable to answer questions", "Limited knowledge", "Knowledgeable", "Very knowledgeable"],
            id:'q-2-2-3',
            questionType: "option",
            subque_map:'NA',
            graphType: "bar"
        },
        {
            group:"New Born",
            text: "3. Once study paperwork was completed, how long did you wait before getting into the scanner?",
            dbmarker: "Wait Time",
            option: ["15-20 mins", "20-30 mins", "30-45 mins", "45-60 mins", "60-90 mins", "over 1 1/2 hours"],
            id:'q-2-2-4',
            questionType: "option",
            subque_map:'NA',
            graphType: "bar"
        },
        {
            group:"New Born",
            text: "4. How likely are you to recommend participating in our research to family and friends? (1= not likely and 5 = highly likely)",
            dbmarker: "Likelyhood for recommendation",
            option: ["1", "2", "3", "4", "5"],
            id:'q-2-2-5',
            questionType: "option",
            subque_map: "NA",
            graphType: "bar"
        },
        {
            group:"New Born",
            text: "5. How can we make this experience better for you and your baby? Please provide any questions and comments. (no more than 200 characters) ",
            dbmarker: "Comments",
            questionType: "text",
            questionWidth: "true",
            id:'q-2-2-6',
            unit: '',
            style: {
                rows: "4",
                paddingTop: "20"
            },
            subque_map:'NA',
            graphType: "text",
            line:"multiline"
        },
        {
            group:"18 months",
            text: "Please Enter your child’s age (e.g. 18 months):",
            dbmarker: "Child's age",
            questionType: "text",
            questionWidth: "true",
            id:'q-2-3-1',
            unit: '',
            style:{
                rows: "",
                paddingTop:""
            },
            subque_map:'NA',
            graphType: "line",
            line:"multiline"
        },
        {
            group:"18 months",
            text: "1. How would you rate your overall experience with us today?",
            dbmarker:"Overall Experience",
            option:  ["Unsatisfied", "Neutral", "Satisfied", "Very Satisfied"],
            id:'q-2-3-2',
            questionType: "option",
            subque_map:'NA',
            graphType: "bar"
        },
        {
            group:"18 months",
            text: "2. Was the coordinator able to answer your questions about the Developmental Visit?",
            dbmarker: "Knowledge of Coordinator",
            option: ["Unable to answer questions", "Showed Limited knowledge", "Knowledgeable", "Very knowledgeable"],
            id:'q-2-3-3',
            questionType: "option",
            subque_map:'NA',
            graphType: "bar"
        },
        {
            group:"18 months",
            text: "3. Was your developmental appointment on time? ",
            dbmarker:"Wait time",
            option: ["Yes", "No"],
            id:'q-2-3-4',
            questionType: "option",
            subque_map:'NA',
            graphType: "bar"
        },
        {
            group:"18 months",
            text: "4. Did the appointment interfere with your child’s nap time?",
            dbmarker: "Nap Time",
            option: ["Yes", "No"],
            id:'q-2-3-5',
            questionType: "option",
            subque_map:true,
            graphType: "bar"
        },
        {
            group:"18 months",
            text: "5. How likely are you to recommend participating in our research to family and friends? (1 being not likely and 5 being highly likely)",
            dbmarker: "Likelyhood for recommendation",
            option:["1", "2", "3", "4", "5"],
            id:'q-2-3-6',
            questionType: "option",
            subque_map:'NA',
            graphType: "bar"
        }
    ]
const question={
    l1Questions: l1Questions,
    l2Questions: l2Questions
}

export default question;
