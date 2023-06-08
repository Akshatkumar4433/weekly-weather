const   sortTimeByDate = (list) => {
    let dayWithTimes = {};
   let regexDate = /^(\d{4}-\d{2}-\d{2})/;
   let regexTime = /(\d{2}:\d{2}:\d{2})$/;

   console.log(list[0].dt_txt)
   console.log(list[0].dt_txt.match(regexDate)[1]);
   console.log(list[0].dt_txt.match(regexTime)[1]);

   for(let i = 0; i<list.length; i++) {
        let date = list[i].dt_txt.match(regexDate)[1];
        let time = list[i].dt_txt.match(regexTime)[1];
        if (dayWithTimes[date] !== undefined) {
            dayWithTimes[date].push({time: list[i].main})  
        }
        else {
            dayWithTimes[date] = [{time:list[i].main}]
            
        }
   }
   console.log(dayWithTimes);
        
}

export default sortTimeByDate;


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