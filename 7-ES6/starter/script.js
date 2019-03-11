/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees

4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/


class Town {
    constructor(noParks = 3, noStreets = 4, name, yearBuild, allAges) {

        this.noParks = noParks;
        this.noStreets = noStreets;
        this.name = name;
        this.yearBuild = yearBuild;
        this.allAges = allAges;

    }
}


class Parks {
    constructor(name, yearBuild, noTrees, parkArea) {

        this.name = name;
        this.yearBuild = yearBuild;
        this.noTrees = noTrees;
        this.parkArea = parkArea;
    }

    treeDensity() {
        const td = this.noTrees / this.parkArea;

        if (this.noTrees > 1000) {
            console.log(`The park ${this.name} has over 1000 trees lmao`);
        }

        console.log(`The Tree desity of ${this.name} is ${td} per square km `);
    }

    calculateAge() {
        const age = new Date().getFullYear() - this.yearBuild;

        return (age)
    }


}





const Park1 = new Parks('Highgate woods', 1962, 400, 600);
const Park2 = new Parks('Cherry tree wood', 1952, 2000, 500);
const Park3 = new Parks('Frinsbury Park', 1979, 543, 900);



function averageAges() {
    const age1 = Park1.calculateAge();
    const age2 = Park2.calculateAge();
    const age3 = Park3.calculateAge();

    const ages = [];
    ages.push(age1, age2, age3);

    const sum = function (total, num) {
        return total + num;
    }

    const realSum = ages.reduce(sum);

    const noOfParks = realSum / ages.length;



    console.log(`The average age of ${ages.length} Parks is ${noOfParks}`);



}

console.log('---------PARK REPORT, BROTHA-----');
averageAges();
Park1.treeDensity();
Park2.treeDensity();
Park3.treeDensity();
