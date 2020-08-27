const applyRelations = sequelize => {
    const {user, userDetail, appointment} = sequelize.models;
    //
    user.hasOne(userDetail);

    userDetail.belongsTo(user);
};


module.exports = {
    applyRelations
};