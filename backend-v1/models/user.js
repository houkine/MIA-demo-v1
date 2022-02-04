const { Sequelize,DataTypes } = require("sequelize");
const  sequelize  = require("../utils/db");

const index = sequelize.define('user', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
    },
    Email:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    //------------------------------------------- basic
    FullName:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    PreferredName:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    DateOfBirth:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    Sex:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    Password:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    //------------------------------------------- preferrence 1
    Measurement:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    CurrentWeight:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    Height:{
        type: DataTypes.FLOAT,
        defaultValue:0,
    },
    Chest:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    Waist:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    Arm:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    Hips:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    PhysicalActivityLevel:{
        type: DataTypes.FLOAT,
        defaultValue:0,
    },
    //------------------------------------------- preferrence 2
    PastCalorieIntakeTracking:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    CurrentCalorieIntakeTracking:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    CurrentCalorieGoal:{
        type: DataTypes.FLOAT,
        defaultValue:0,
    },
    SocialMediaConsent:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    //------------------------------------------- goals
    ShortTermsGoals:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    LongTermsGoals:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    CaloriesIntakeGoal:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    CalsBurntGoal:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    ProteinGoal:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    CarbsGoal:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    FatsGoal:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    FiberGoal:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    StepsGoal:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    WeightGoal:{ // coach set it up
        type: DataTypes.STRING,
        defaultValue:'',
    },
    //------------------------------------------- health
    HeartDisease:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    BreathChestPains:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    HighBloodPressure:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    SmokeCigarettes:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    Diabetes:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    FamilyHeartDisease:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    CurrentlyTakingMedication:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    ReasonNotExercise:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    AboveTrueAndCorrect:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    AppleHealth:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    //------------------------------------------- notification
    MorningCheckIn:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    EveningCheckIn:{
        type: DataTypes.STRING,
        defaultValue:'',
    },

    //------------------------------------------- other fields
    Avatar:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    status:{ // active/inactive. inactive means account already existed but cannot login
        type: DataTypes.STRING,
        defaultValue:'inactive',
    },
    TotalStreakWeeks:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    TotalStreakDays:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
    Notice:{ // none/achievements/plan updates. frontend need to check this vlaue to decide popup
        type: DataTypes.STRING,
        defaultValue:'none',
    },
    NextCheckinTime:{ // moment().format()
        type: DataTypes.STRING,
        defaultValue:'',
    },
    //------------------------------------------- status
    Valid:{
        type: DataTypes.BOOLEAN,
        defaultValue:true,
    },
    // -----------------------------------------reserve segment
    Reserve:{
        type: DataTypes.STRING,
        defaultValue:'',
    },
}, {
    freezeTableName: true,
});

const {
    GraphQLID,
    GraphQLString,
    GraphQLFloat,
    GraphQLBoolean,
    GraphQLInt,
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLList
} = require('graphql')
const ObjectType = new GraphQLObjectType({
    description: 'user model',
    fields: {
        id: {
            type: GraphQLID,
        },
        Email:{
            type: GraphQLString,
        },
    //------------------------------------------- basic
        FullName:{
            type: GraphQLString,
        },
        PreferredName:{
            type: GraphQLString,
        },
        DateOfBirth:{
            type: GraphQLString,
        },
        Sex:{
            type: GraphQLString,
        },
        Password:{
            type: GraphQLString,
        },
    //------------------------------------------- preferrence
        Measurement:{
            type: GraphQLString,
        },
        CurrentWeight:{
            type: GraphQLString,
        },
        Height:{
            type: GraphQLFloat,
        },
        Chest:{
            type: GraphQLString,
        },
        Waist:{
            type: GraphQLString,
        },
        Arm:{
            type: GraphQLString,
        },
        Hips:{
            type: GraphQLString,
        },
        PhysicalActivityLevel:{
            type: GraphQLFloat,
        },
    //------------------------------------------- preferrence
        PastCalorieIntakeTracking:{
            type: GraphQLString,
        },
        CurrentCalorieIntakeTracking:{
            type: GraphQLString,
        },
        CurrentCalorieGoal:{
            type: GraphQLFloat,
        },
        SocialMediaConsent:{
            type: GraphQLString,
        },
    //------------------------------------------- goals
        ShortTermsGoals:{
            type: GraphQLString,
        },
        LongTermsGoals:{
            type: GraphQLString,
        },
        CaloriesIntakeGoal:{
            type: GraphQLString,
        },
        CalsBurntGoal:{
            type: GraphQLString,
        },
        ProteinGoal:{
            type: GraphQLString,
        },
        CarbsGoal:{
            type: GraphQLString,
        },
        FatsGoal:{
            type: GraphQLString,
        },
        FiberGoal:{
            type: GraphQLString,
        },
        StepsGoal:{
            type: GraphQLString,
        },
        WeightGoal:{
            type: GraphQLString,
        },
    //------------------------------------------- health
        HeartDisease:{
            type: GraphQLString,
        },
        BreathChestPains:{
            type: GraphQLString,
        },
        HighBloodPressure:{
            type: GraphQLString,
        },
        SmokeCigarettes:{
            type: GraphQLString,
        },
        Diabetes:{
            type: GraphQLString,
        },
        FamilyHeartDisease:{
            type: GraphQLString,
        },
        CurrentlyTakingMedication:{
            type: GraphQLString,
        },
        ReasonNotExercise:{
            type: GraphQLString,
        },
        AboveTrueAndCorrect:{
            type: GraphQLString,
        },
        AppleHealth:{
            type: GraphQLString,
        },
    //------------------------------------------- notification
        MorningCheckIn:{
            type: GraphQLString,
        },
        EveningCheckIn:{
            type: GraphQLString,
        },

    //------------------------------------------- other fields
        Avatar:{
            type: GraphQLString,
        },
        status:{
            type: GraphQLString,
            description:"active/inactive. inactive means account already existed but cannot login",
        },
        TotalStreakWeeks:{
            type: GraphQLString,
        },
        TotalStreakDays:{
            type: GraphQLString,
        },
        Notice:{
            type: GraphQLString,
            description:"none/achievements/plan updates. frontend need to check this vlaue to decide popup",
        },
        NextCheckinTime:{
            type: GraphQLString,
            description:"moment().format()",
        },
    //------------------------------------------- status
        Valid: {
            type: GraphQLBoolean,
        },
        Reserve: {
            type: GraphQLString,
        },
        updatedAt: {
            type: GraphQLString,
            description:"unix time stamp",
        },
        createdAt: {
            type: GraphQLString,
            description:"unix time stamp",
        },

        // other fields
        JWT: {
            type: GraphQLString,
        },
    },
    name: 'UserObject',
})

const InputType = new GraphQLInputObjectType({
    description: 'user model',
    fields: {
        id: {
            type: GraphQLID,
        },
        Email:{
            type: GraphQLString,
        },
    //------------------------------------------- basic
        FullName:{
            type: GraphQLString,
        },
        Password:{
            type: GraphQLString,
        },
        PreferredName:{
            type: GraphQLString,
        },
        DateOfBirth:{
            type: GraphQLString,
        },
        Sex:{
            type: GraphQLString,
        },
    //------------------------------------------- preferrence
        Measurement:{
            type: GraphQLString,
        },
        CurrentWeight:{
            type: GraphQLString,
        },
        Height:{
            type: GraphQLFloat,
        },
        Chest:{
            type: GraphQLString,
        },
        Waist:{
            type: GraphQLString,
        },
        Arm:{
            type: GraphQLString,
        },
        Hips:{
            type: GraphQLString,
        },
        PhysicalActivityLevel:{
            type: GraphQLFloat,
        },
    //------------------------------------------- preferrence
        PastCalorieIntakeTracking:{
            type: GraphQLString,
        },
        CurrentCalorieIntakeTracking:{
            type: GraphQLString,
        },
        CurrentCalorieGoal:{
            type: GraphQLFloat,
        },
        SocialMediaConsent:{
            type: GraphQLString,
        },
    //------------------------------------------- goals
        ShortTermsGoals:{
            type: GraphQLString,
        },
        LongTermsGoals:{
            type: GraphQLString,
        },
        CaloriesIntakeGoal:{
            type: GraphQLString,
        },
        CalsBurntGoal:{
            type: GraphQLString,
        },
        ProteinGoal:{
            type: GraphQLString,
        },
        CarbsGoal:{
            type: GraphQLString,
        },
        FatsGoal:{
            type: GraphQLString,
        },
        FiberGoal:{
            type: GraphQLString,
        },
        StepsGoal:{
            type: GraphQLString,
        },
        WeightGoal:{
            type: GraphQLString,
        },
    //------------------------------------------- health
        HeartDisease:{
            type: GraphQLString,
        },
        BreathChestPains:{
            type: GraphQLString,
        },
        HighBloodPressure:{
            type: GraphQLString,
        },
        SmokeCigarettes:{
            type: GraphQLString,
        },
        Diabetes:{
            type: GraphQLString,
        },
        FamilyHeartDisease:{
            type: GraphQLString,
        },
        CurrentlyTakingMedication:{
            type: GraphQLString,
        },
        ReasonNotExercise:{
            type: GraphQLString,
        },
        AboveTrueAndCorrect:{
            type: GraphQLString,
        },
        AppleHealth:{
            type: GraphQLString,
        },
    //------------------------------------------- notification
        MorningCheckIn:{
            type: GraphQLString,
        },
        EveningCheckIn:{
            type: GraphQLString,
        },
    //------------------------------------------- other fields
        Avatar:{
            type: GraphQLString,
        },
        status:{
            type: GraphQLString,
            description:"active/inactive. inactive means account already existed but cannot login",
        },
        TotalStreakWeeks:{
            type: GraphQLString,
        },
        TotalStreakDays:{
            type: GraphQLString,
        },
        Notice:{
            type: GraphQLString,
            description:"none/achievements/plan updates. frontend need to check this vlaue to decide popup",
        },
        NextCheckinTime:{
            type: GraphQLString,
            description:"moment().format()",
        },
    //------------------------------------------- status
        Valid: {
            type: GraphQLBoolean,
        },
        Reserve: {
            type: GraphQLString,
        },
    },
    name: 'UserInput',
})
module.exports = {
    index,
    ObjectType,
    InputType,
}

