import User from '../model/userModel.js';



export const createUser = async (req, res) => {
    try {
        const userData = new User(req.body);
        const { email } = userData;

        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }


        const savedUser = await userData.save();
        return res.json(savedUser);
    }
    catch (err) { res.status(500).send('Server Error' + err); }
}


export const fetch = async (req, res) => {
    try {

        const users = await User.find();
        if (users.length > 0)
            return res.json(users);
        else {
            return res.status(404).json('No users found')
        }
    }
    catch (err) { res.status(500).send('Server Error'); }
}

export const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findOne({ _id: id });
        if (!userExist)
            return res.status(404).json('User not found')


        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
        return res.status(201).json(updatedUser);

    }
    catch (err) { res.status(500).send('Server Error'); }
}


export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findOne({ _id: id });
        if (!userExist)
            return res.status(404).json('User not found')


        await User.findByIdAndDelete(id);
        return res.status(201).json("User deleted successfully");

    }
    catch (err) { res.status(500).send('Server Error'); }
}