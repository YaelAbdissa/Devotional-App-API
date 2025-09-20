import mongoose from 'mongoose';

const devotionSchema = new mongoose.Schema({

    title: {
        type: String,
        allowNull: false,
    },
    scripture_reference: {
        type: String,
        allowNull: false,
    },
    scripture_text: {
        type: String,
        allowNull: false,
    },
    reflection_text: {
        type: String,
        allowNull: false,
    },
    prayer_text: {
        type: String,
        allowNull: false,
    },
    day_number: {
        type: Number,
        allowNull: false,
    },
    date: {
        type: Date,
        defaultValue: Date.now,
    },
    // postpartum_stage: {
    //     type: DataTypes.ENUM('week1-2', 'month1-3', 'month4-6', 'month7-12'),
    //     allowNull: false,
    // },

});

const Devotion = mongoose.model('Devotion', devotionSchema);

export default Devotion;