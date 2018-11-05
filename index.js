// const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// * A driver can be initialized with a name,
//  and a string representing the day that he joined Scuber.  Add the following methods and attributes to the class:

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
class Driver{
  constructor(name, startDate){
    this.name = name
    this.startDate = new Date(startDate)
 }
}
Driver.prototype.yearsExperienceFromBeginningOf = function(endDate){
   // let now = new Date();
  return endDate - this.startDate.getFullYear()
}

class Route{
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue',
    'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let distance = 0;
    distance = distance + this.endingLocation["vertical"] - this.beginningLocation["vertical"];
    distance = distance + Math.abs((eastWest.indexOf(this.beginningLocation["horizontal"]) + 1) - (eastWest.indexOf(this.endingLocation["horizontal"]) + 1));
    return distance;
  }

    estimatedTime(peakHours) {
      return peakHours ? this.blocksTravelled()/2 : this.blocksTravelled()/3
    }
}
