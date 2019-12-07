// import axios from 'axios';
import {
  CTC_USER_REQUEST,
  CTC_USER_SUCCESS,
  CTC_USER_FAILED
} from "./types";

export const requestCtcUserData = data => {
  return {
    type: CTC_USER_REQUEST,
    data
  };
};

export const receiveCtcUserData = data => {
  return {
    type: CTC_USER_SUCCESS,
    payload: data
  };
};


export const ctcUserDataError = error => {
  return {
    type: CTC_USER_FAILED,
    payload: error
  };
};


export const StoreCtcUserData = data => dispatch => {
    dispatch(receiveCtcUserData(data));
}

// // Get Indoor data api
// export const getCtcUserData = data => dispatch => {
//   let info={}
//   dispatch(receiveCtcUserData(info));
//   const  userData  =  JSON.parse(localStorage.getItem("selectEvntInfo"));
//   var eventID = userData.eventID;
//   var attendeeID = userData.attendeeID;
//   const Authid = global.Authid;
//   const Authtok = global.Authtok;
//   return axios
//     .get(`${global.URL}v2/attendee/${eventID}?attendeeid=${attendeeID}`, {
//       headers: {
//         APPLICATIONID: Authid,
//         AUTHENTICATIONTOKEN: Authtok,
//         "Content-Type":"application/x-www-form-urlencoded"
//       }
//     })
//     .then(response => {
//       if (response.status == 200) {
//         let summaryList = response.data;
//         summaryList.resultStatus=true;
//         dispatch(receiveCtcUserData(summaryList));
        
//       }
//       else {
//        console.log("landingpage");
//       let resultData=  { 
//         "resultGroups": [
//           {
//             "key": "main_landing",
//             "caption": "MAIN LANDING",
//             "metrics": [
//               {
//                 "values": [
//                   {
//                     "value1": 0,
//                     "key": "20190910",
//                     "caption": "09-10-2019"
//                   }
//                 ],
//                 "key": "daily_leads",
//                 "caption": "DAILY LEADS"
//               }
//             ]
//           },
//           {
//             "key": "your_connections",
//             "caption": "YOUR CONNECTIONS",
//             "metrics": [
//               {
//                 "value1": 0,
//                 "key": "total_connections",
//                 "caption": "TOTAL CONNECTIONS"
//               },
//               {
//                 "values": [
                 
//                 ],
//                 "key": "leads",
//                 "caption": "LEADS"
//               }
//             ]
//           },
//           {
//             "key": "your_statistics",
//             "caption": "YOUR STATISTICS",
//             "metrics": []
//           },
//           {
//             "key": "your_event",
//             "caption": "YOUR EVENT",
//             "metrics": []
//           }
//         ],
//         "eventID": "86ffdea9-1cd4-4aa7-9a9d-104e2734f504"
//       }
     
//        dispatch(receiveCtcUserData(resultData));
//         var error = new Error("Error " + response.status);
//         error.data = response;
//         throw error;
//       }
//     })
//     .catch(error => {
//       let resultData=  { 
//         "resultGroups": [
//           {
//             "key": "main_landing",
//             "caption": "MAIN LANDING",
//             "metrics": [
//               {
//                 "values": [
//                   {
//                     "value1": 0,
//                     "key": "20190910",
//                     "caption": "09-10-2019"
//                   }
//                 ],
//                 "key": "daily_leads",
//                 "caption": "DAILY LEADS"
//               }
//             ]
//           },
//           {
//             "key": "your_connections",
//             "caption": "YOUR CONNECTIONS",
//             "metrics": [
//               {
//                 "value1": 0,
//                 "key": "total_connections",
//                 "caption": "TOTAL CONNECTIONS"
//               },
//               {
//                 "values": [
                 
//                 ],
//                 "key": "leads",
//                 "caption": "LEADS"
//               }
//             ]
//           },
//           {
//             "key": "your_statistics",
//             "caption": "YOUR STATISTICS",
//             "metrics": []
//           },
//           {
//             "key": "your_event",
//             "caption": "YOUR EVENT",
//             "metrics": []
//           }
//         ],
//         "eventID": "86ffdea9-1cd4-4aa7-9a9d-104e2734f504"
//       }
     
//        dispatch(receiveCtcUserData(resultData));
//        console.log("error in getallhome item " + error);
//     });
// };


