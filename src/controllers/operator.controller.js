const operator = [

    {
        id: 1,
        operator_name: "Surt",
        rarity_star: 6,
        operator_class: "Guard",
        operator_archetype:  "Arts Fighter",
        dp_cost: 21
    },

    {
        id: 2,
        operator_name: "Amiya",
        rarity_star: 5,
        operator_class: "Caster",
        operator_archetype:  "Core",
        dp_cost: 20
    },

    {
        id: 3,
        operator_name: "Unknown",
        rarity_star: 4,
        operator_class: "Vanguard",
        operator_archetype:  "Standard Bearer",
        dp_cost: 10
    },
];

const list_operator = (req, res) => {
    res.json(operator);
};

const add_operator = (req, res) => {
    const {operator_name, rarity_star, operator_class, operator_archetype, dp_cost} = req.body;
    const newOperator = {
        id: operator.length + 1,
        operator_name, rarity_star, operator_class, operator_archetype, dp_cost 
    };

    operator.push(newOperator);
    res.status(201).json(newOperator);
};

const update_operator = (req, res) => {
    const id = parseInt(req.params.id);
    const {operator_name, rarity_star, operator_class, operator_archetype, dp_cost } = req.body;

    const operatorIndex = operator.findIndex((item => item.id === id));

    if (operatorIndex !== -1) {
        operator[operatorIndex] = {
            ...operator[operatorIndex],
            operator_name, rarity_star, operator_class, operator_archetype, dp_cost 
        };

        res.json({
            status: 200,
            message: `Operator dengan ID ${id} berhasil diperbarui!`,
            data: operator[operatorIndex]
        });
    } else {
        res.status(404).json({ message: `Operator dengan ID ${id} tidak ditemukan!` });
    };
};

const delete_operator = (req, res) => {
    const id = parseInt(req.params.id);
    const operatorIndex = operator.findIndex((item => item.id === id));

    if (operatorIndex !== -1) {
        const deleteOperator = operator[operatorIndex];
        operator.splice(operatorIndex, 1);

        res.json({
            status: 200,
            message: `Operator dengan ID ${id} berhasil dihapus!`,
            data: deleteOperator
        });
    } else {
        res.status(404).json({ message: `Operator dengan ID ${id} tidak ditemukan!` });
    };
};

const detail_operator = (req, res) => {
    const id = req.params.id;

    const data = operator.find((operator) => operator.id === parseInt(id));

    if (data) {
        res.json(data);
    } else {
        res.status(404).json({ message: `Operator dengan ID ${id} tidak ditemukan!` })
    };
};

module.exports = {
    list_operator,
    add_operator,
    update_operator,
    delete_operator,
    detail_operator
}