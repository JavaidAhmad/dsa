// set are unique elements of array
class MySet{

    collection = [];
    has=(ele)=>this.collection.indexOf(ele)!==-1;

    add=(ele)=>{
        if(!this.has(ele)){
            this.collection.push(ele)
            return true;
        }
        return false;
    }

    remove=(ele)=>{
        if(this.has(ele)){
            const index = this.collection.indexOf(ele);
            this.collection.splice(index,1);
            return true;
        }
        return false;
    }

    size=()=>this.collection.length;
    
    values = ()=>this.collection;
    union = (otherSet)=>{
        let unionSet = new MySet();
        let firstSet = this.values();
        let secondSet = otherSet.values();

        firstSet.forEach(i=>unionSet.add(i))
        secondSet.forEach(i=>unionSet.add(i));
        return unionSet.values()
    }

    intersection=(otherSet)=>{
        let intersectionSet = new MySet();
        let firstSet = this.values();
        firstSet.forEach(e=>{
            if(otherSet.has(e)){
                intersectionSet.add(e)
            }
        })
        return intersectionSet.values();
    }
    
    difference=(otherSet)=>{
        let diffSet = new MySet();
        let firstSet = this.values();
        firstSet.forEach(e=>{
            if(!otherSet.has(e)){
                diffSet.add(e)
            }
        })
        return diffSet.values()
    }

    isSubset = otherSet=>{
        let isSub = otherSet.values().every(e=>this.has(e))
        return isSub;
    }
}

let firstSet = new MySet();
firstSet.add(5)
firstSet.add(1)
firstSet.add(2)
firstSet.add(5)
firstSet.add(3)
firstSet.add(4)
console.log("size of set is:", firstSet.size());
console.log("Values of set 1:", firstSet.values());

let secondSet = new MySet();
secondSet.add(5)
secondSet.add(1)
secondSet.add(5)
console.log("size of set is:", secondSet.size());
console.log("Values of set 2:", secondSet.values());
console.log("union is:",firstSet.union(secondSet))
console.log("intersection is:",firstSet.intersection(secondSet))
console.log("difference is:",firstSet.difference(secondSet))
console.log(" is subset:",firstSet.isSubset(secondSet))