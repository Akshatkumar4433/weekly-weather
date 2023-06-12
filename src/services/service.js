const   sortTimeByDate = (list) => {
    let dayWithTimes = {};
   let regexDate = /^(\d{4}-\d{2}-\d{2})/;
   let regexTime = /(\d{2}:\d{2}:\d{2})$/;

  

   for(let i = 0; i<list.length; i++) {
        let date = list[i].dt_txt.match(regexDate)[1];
        let time = list[i].dt_txt.match(regexTime)[1];
        if (dayWithTimes[date] !== undefined) {
            dayWithTimes[date].push({stamp:time, time: list[i].main})  
        }
        else {
            dayWithTimes[date] = [{stamp:time, time:list[i].main}]
            
        }
   }
    return dayWithTimes;       
}


const getDays = (list) => {
    let preventDuplicates = {}
    let regexDate = /^(\d{4}-\d{2}-\d{2})/;
    let dates = [];
    for(let i = 0; i<list.length; i++) {
        
        let date = list[i].dt_txt.match(regexDate)[1];
        if (preventDuplicates[date] === undefined) {
            dates.push(date);
            preventDuplicates[date] = true;
        }
    }
    return dates
}

const objectToArray = (object)=> {
    let array = []
    for(let i of Object.keys(object)) {
        array.push(object[i]);
    }
    return array
}



const getLocationInfo = (data) => { 
    return data.city    
        
}

const serviceWorker = {sortTimeByDate, getLocationInfo, objectToArray, getDays}

export default serviceWorker;


/**
 * [
 *  {   date: [
 *              {time:main}
 *          
 *          ]
 *      
 * 
 * }    
 * 
 * ]
 */

/**
 * loop over list
 *  from each element extract date
 *   if (object[date] exists) {
 *          object[date].push({time:main})
 *      }
 *   else {
 *          object[date] = [{time:main}]
 *  }
 */