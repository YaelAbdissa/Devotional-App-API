import Joi from 'joi';
import express from 'express';


const app = express()
app.use(express.json());

const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
];
app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/api/devotions', (req, res) => {
    res.send('Hello World!')
});

app.get('/api/devotions/:id', (req, res) => {
    const passedId = req.params.id;
    // res.send('Hello World...... {id: ' + passedId + '}')
    res.send(req.query)
});

app.get('/api/courses', (req, res) => {

    res.send(courses);
});
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) res.status(404).send('The course with the given ID was not found.');
    res.send(course);
});


app.post('/api/courses', (req, res) => {

    const shema = Joi.object({
        name: Joi.string().min(3).required()
    });
    const result = shema.validate(req.body);
    console.log(result);
    if (result.error) {
        // 400 Bad Request
        res.status(400).send(result.error.details[0].message);
        return;
    }


    id = courses.length + 1;
    const course = { id: id, name: `course${id}  ${req.body.name}`, };
    courses.push(course);
    res.send(course);
    // res.send('Hello World...... {id: ' + req.params.id + '}')
});



// PORT env
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Example app listening on port 3000!')
});