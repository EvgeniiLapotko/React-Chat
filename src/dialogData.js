const data = [
    {
        _id: Math.random(),
        text: "Мы все сведетельствуем Вам наше глубочайшее подчение",
        isReaded: false,
        created_at: "2019-02-25T14:00:00",
        unReaded: 21,
        user: {
            _id: 1,
            fullname: "Федор Достоевский",
            avatar: null,
            isOnline: true,
        },
    },

    {
        _id: Math.random(),
        text: "Мы все сведетельствуем Вам наше глубочайшее подчение",
        isReaded: false,
        created_at: "2019-02-25T14:00:00",
        user: {
            _id: 2,
            fullname: "Федор Достоевский",
            avatar: null,
        },
    },

    {
        _id: Math.random(),
        text: "Мы все сведетельствуем Вам наше глубочайшее подчение",
        isReaded: true,
        created_at: "2020-02-11T14:00:00",

        user: {
            _id: 3,
            fullname: "Федор Валентинович Достоевский",
            avatar: "https://sun1-90.userapi.com/s/v1/ig2/Rs0rm1SJkNMZSgioGN5exxiSxyRA07R4oqRDr7_BfNlx1M1M_i3DFTkDrKMm70ww8rn5_PKNdB_jkjDHNmUUQhFP.jpg?size=100x0&quality=96&crop=0,0,1024,1024&ava=1",
            isMe: true,
        },
    },

    {
        _id: Math.random(),
        text: "Мы все сведетельствуем Вам наше глубочайшее подчение",
        isReaded: false,
        created_at: "2020-02-11T14:00:00",
        unReaded: 12,
        user: {
            _id: 4,
            fullname: "Федор Валентинович Достоевский",
            avatar: "https://sun1-90.userapi.com/s/v1/ig2/Rs0rm1SJkNMZSgioGN5exxiSxyRA07R4oqRDr7_BfNlx1M1M_i3DFTkDrKMm70ww8rn5_PKNdB_jkjDHNmUUQhFP.jpg?size=100x0&quality=96&crop=0,0,1024,1024&ava=1",
            isMe: true,
        },
    },
];

export default data;
