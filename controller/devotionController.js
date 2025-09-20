import Devotion from '../model/devotionModel.js';



export const createDevotion = async (req, res) => {
    try {
        const devotionData = new Devotion(req.body);
        const savedDevotion = await devotionData.save();
        return res.json(savedDevotion);
    }
    catch (err) { res.status(500).send('Server Error' + err); }
}


export const fetch = async (req, res) => {
    try {

        const devotions = await Devotion.find();
        if (devotions.length > 0)
            return res.json(devotions);
        else {
            return res.status(404).json('No devotions found')
        }
    }
    catch (err) { res.status(500).send('Server Error'); }
}

export const fetchDevotionById = async (req, res) => {
    try {
        const id = req.params.id;
        const devotionExist = await Devotion.findOne({ _id: id });
        if (!devotionExist)
            return res.status(404).json('Devotion not found')


        const devotion = await Devotion.findOne({ _id: id });
        return res.status(202).json(devotion);

    }
    catch (err) { res.status(500).send('Server Error'); }
}

export const updateDevotion = async (req, res) => {
    try {
        const id = req.params.id;
        const devotionExist = await Devotion.findOne({ _id: id });
        if (!devotionExist)
            return res.status(404).json('Devotion not found')


        const updatedDevotion = await User.findByIdAndUpdate(id, req.body, { new: true });
        return res.status(201).json(updatedDevotion);

    }
    catch (err) { res.status(500).send('Server Error'); }
}


export const deleteDevotion = async (req, res) => {
    try {
        const id = req.params.id;
        const devotionExist = await Devotion.findOne({ _id: id });
        if (!devotionExist)
            return res.status(404).json('Devotion not found')


        await Devotion.findByIdAndDelete(id);
        return res.status(201).json("Devotion deleted successfully");

    }
    catch (err) { res.status(500).send('Server Error'); }
}