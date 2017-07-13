const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'acaines',
    password: 'G0ld2Silver',
    database: 'endless_data'
});

connection.connect();
//GLOBALS
const PORT = 3000;
const exitHandler = () => {
    connection.end();
    console.log(`Application Terminated Safely`);
    process.exit(0);
};

//MIDDLEWARE
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send(`One day, i will be serving the App but for now just a data service.`);
});

app.get('/api/spiritHighlandsData', (req, res) => {
    let table = [];
    let firstPass = true;
    let currentLevel = "";
    let currentObject = {};
    let currentUnits = [];
    connection.query(
        `SELECT  level,reward,reward_type,reward_icon,summary,fragment_name,name, abbr,icon,trans 
        FROM spirit_highlands_solutions 
        LEFT JOIN spirit_highlands_units  
        ON spirit_highlands_units.solution_id = spirit_highlands_solutions.id;`, function (error, results, fields) {
            if (error) throw error;
            //console.log('The solution is: ', results);
            let loopCount = 0;
            results.forEach(function (element) {
                loopCount++;
                if (element.level === currentLevel) {
                    //This is still same level, so just add units!
                    currentObject.Units.push({
                        "name": element.name,
                        "abbr": element.abbr,
                        "icon": element.icon,
                        "trans": element.trans
                    });
                } else {
                    //New level
                    //Flush old object to Table CHECK IF ITS NOT FIRST TIME EVER
                    if (firstPass) {
                        firstPass = false;
                    } else {
                        table.push(currentObject);
                    }
                    currentObject = {};
                    //Set new Current Level
                    currentLevel = element.level;
                    //Build new JSON structure
                    currentObject = {
                        "Level": element.level,
                        "reward": element.reward,
                        "rewardtype": element.reward_type,
                        "fragmentName": element.fragment_name,
                        "rewardIcon": element.reward_icon,
                        "summary": element.summary,
                        "Units": []
                    };
                    //Add units to the currentUnits to sum them up
                    currentObject.Units.push({
                        "name": element.name,
                        "abbr": element.abbr,
                        "icon": element.icon,
                        "trans": element.trans
                    });
                }
                if (loopCount === results.length) {
                    //If it isnt checked the last loop wont ever flush to the object, so check if its the last time to loop!
                    table.push(currentObject);
                }
            }, this);
            res.json(table);
        });

})


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})

process.on('exit', exitHandler);
process.on('SIGINT', exitHandler);