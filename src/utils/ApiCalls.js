import axios from 'axios';
// import global  from "../constants/global";


// Get Indoor data api
let commonUtils={

    storeAddBusinessCase(data){
        return  axios({
          method: "post",
          url: "/send",
          headers: {},
          data: data
        })
          .then(response => {
            if (response.status === 200) {
              let summaryList = response.data;
              summaryList.resultStatus=true;
              return summaryList
            }
            else {
             let resultData=  { }
             return resultData
            }
          })
          .catch(error => {
            console.log("error", error);
            let resultData=  { }
            return resultData
          });
      },
      getUserName(data){

         axios({
          method: "post",
          url: "/send",
          headers: {},
          data: data
        })
        .then(response => {
          if (response.status === 200) {
            let summaryList = response.data;
            summaryList.resultStatus=true;
            return summaryList
          }
          else {
           let resultData=  { }
           return resultData
          }
        })
        .catch((error) => {
            console.log('error in get username ', error);
        });
      }

}

export default commonUtils

