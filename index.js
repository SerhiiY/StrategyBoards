// Task: Implement a class named 'Ranges' 
 // Example of a range [1, 4] - includes integers: 1, 2, 3, and 4. // Example of a list: [1, 4], [109, 206], [400, 600] 
 
 
class Ranges {   
    constructor(rangesList = []){
        this.rangesList = rangesList;
    }
    add(range) {
        for(let i = range[0]; i <= range[1]; i++){
            this.rangesList.push(i);
        }
        this.rangesList = [...new Set(this.rangesList)];
    }    
   /**    * Removes a range from the list    */   
    remove(range) { 
        for(let i = range[0]; i <= range[1]; i++){
            let position = this.rangesList.indexOf(i);
            if ( ~position ) this.rangesList.splice(position, 1);
        }   
    }    
   /**    * Prints out the list of ranges    */   
    print() { 
        let list = this.rangesList.sort((a, b) => a - b);
        // Let's sort all range values to arrays with min and max value of ranges that continuous with one step
        let predictedRangeValue = list[0];
        let arrayOfRanges = [[predictedRangeValue]];
        let range = 0;
        let currentRangeValue;
        for(let i = 0; i <= list.length; i++){
            currentRangeValue = list[i];
            if(currentRangeValue === predictedRangeValue) {
                predictedRangeValue++;
            }else{
                predictedRangeValue = currentRangeValue + 1;
                arrayOfRanges[range].push(list[i-1]);
                range++;
                arrayOfRanges.push([]);
                arrayOfRanges[range].push(list[i]);
            };
        }

        arrayOfRanges.pop()
        
        arrayOfRanges = arrayOfRanges.reduce((acc, el) => acc + `[${el}]`, "");
        console.log(arrayOfRanges);
    } 
}   
const r = new Ranges(); 
 r.add([1, 4]); r.print(); // Should display: [1, 4] 
 r.add([10, 20]); r.print(); // Should display: [1, 4] [10, 20] 
 r.add([10, 10]); r.print(); // Should display: [1, 4] [10, 20] 
 r.add([21, 21]); r.print(); // Should display: [1, 4] [10, 21] 
 r.add([2, 4]); r.print(); // Should display: [1, 4] [10, 21] 
 r.add([3, 8]); r.print(); // Should display: [1, 8] [10, 21] 
 r.remove([10, 10]); r.print(); // Should display: [1, 8] [11, 21] 
 r.remove([10, 11]); r.print(); // Should display: [1, 8] [12, 21] 
 r.remove([15, 17]); r.print(); // Should display: [1, 8] [12, 14] [18, 21] 
 r.remove([3, 19]); r.print(); // Should display: [1, 2] [20, 21] 
